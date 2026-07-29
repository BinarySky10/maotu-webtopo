<template>
  <div
    class="w-1/1 h-1/1"
    v-html="svgInnerHtml"
    :renderitemid="svgRenderProps.renderitemid"
    ref="svgRenderRef"
  ></div>
</template>
<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted, computed, watch, reactive } from 'vue';
import { symbolGenSvg2, svgToImgSrc, genDomPropstr } from '@/components/mt-edit/utils/index';
import type { ILeftAsideConfigItemPublicProps } from '../../../store/types';
// import {
//   registerComp,
//   unRegisterComp,
//   getCompApiById
// } from '@/components/mt-edit/utils/compRegistry';
type SvgRenderProps = {
  symbolId: string;
  symbolStr: string;
  width: string;
  height: string;
  props: ILeftAsideConfigItemPublicProps;
  renderitemid: string;
};
const svgRenderProps = withDefaults(defineProps<SvgRenderProps>(), {});
/**
 * 处理带symbol+use的svg字符串
 * 支持传入关键字数组，任意一个关键字命中则执行平铺逻辑
 * 兼容两种use标签：自闭合<use .../> / 分段<use></use>
 * 模糊匹配 use href / symbol id 包含数组内任意关键字
 * 移除symbol容器、完整删除整段use标签，平铺内部图形到svg根节点
 * @param svgStr 原始svg文本
 * @param keywordList 匹配关键字数组，默认["集水池"]
 * @returns 处理后的纯平铺svg字符串
 */
function resolveSvgSymbolUse(svgStr: string, keywordList: string[] = ['集水池']): string {
  // 关键字转义，拼接或组
  const keywordGroup = keywordList.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');

  // 正则1：匹配 <use 开头 包含关键字href，两种闭合全部捕获
  const useAllReg = new RegExp(
    `<use\\s+[^>]*xlink:href="#[^"]*(${keywordGroup})[^"]*"[\\s\\S]*?(?:\\/>|<\\/use>)`,
    's'
  );
  if (!useAllReg.test(svgStr)) return svgStr;

  // 匹配symbol块
  const symbolContentReg = new RegExp(
    `<symbol[^>]*id="[^"]*(${keywordGroup})[^"]*"[^>]*>([\\s\\S]*?)<\/symbol>`,
    's'
  );
  const symbolMatch = svgStr.match(symbolContentReg);
  if (!symbolMatch) return svgStr;

  let innerContent = symbolMatch[2];
  // 冗余清理规则，可自由追加
  const cleanRules = [
    /<defs[\s\S]*?<\/defs>/s,
    /<sodipodi:namedview[\s\S]*?<\/sodipodi:namedview>/s
  ];
  cleanRules.forEach((reg) => {
    innerContent = innerContent.replace(reg, '');
  });

  // 1. 删除整个symbol区块
  let result = svgStr.replace(symbolContentReg, '');
  // 2. 完整删除整段use（包含<use到</use>全部内容）
  result = result.replace(useAllReg, innerContent);

  return result;
}

const svgInnerHtml = computed(() => {
  const svgStr = symbolGenSvg2(
    svgRenderProps.symbolId,
    svgRenderProps.symbolStr,
    svgRenderProps.width,
    svgRenderProps.height,
    genDomPropstr(svgRenderProps.props)
  );
  // preserveAspectRatio="none "viewBox="0 0 1774 800"
  // todo:  临时修改svg 补充正确解决方案
  const result = resolveSvgSymbolUse(svgStr, ['集水池']);

  return result;
});

const svgRenderRef = ref<HTMLDivElement | null>(null);

// 封装组件对外暴露的svg方法，不暴露原始DOM
const compApi = {
  getSvgRoot: () => {
    if (!svgRenderRef.value) return null;
    return svgRenderRef.value.querySelector('svg') as SVGSVGElement;
  }
};

nextTick(() => {});

import { registerCompInstance } from './SvgRenderUtil.ts';
import { WaterShape } from './WaterShape.ts';
const waterShapeObj = new WaterShape(null);
const updateWater = (...waterval: Array<number>) => {
  waterShapeObj.setLevel(...waterval);
};
onMounted(async () => {
  registerCompInstance(svgRenderProps.renderitemid);
  const svgroot = compApi?.getSvgRoot();

  svgroot && waterShapeObj.init(svgroot as SVGSVGElement, 'water1', 'water2');
});

// 卸载注销
onUnmounted(() => {
  // unRegisterComp(svgRenderProps.renderitemid);
});
defineExpose({
  updateWater
});
</script>
