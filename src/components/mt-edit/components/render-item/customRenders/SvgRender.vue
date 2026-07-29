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

const svgInnerHtml = computed(() => {
  const svgStr = symbolGenSvg2(
    svgRenderProps.symbolId,
    svgRenderProps.symbolStr,
    svgRenderProps.width,
    svgRenderProps.height,
    genDomPropstr(svgRenderProps.props)
  );
  // preserveAspectRatio="none "viewBox="0 0 1774 800"
  return svgStr;
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
import { WaterShape } from './SvgRenderUtil.ts';
const waterShapeObj = new WaterShape(null);
onMounted(async () => {
  // registerComp(svgRenderProps.renderitemid, compApi);
  const svgroot = compApi?.getSvgRoot();
  waterShapeObj.init(svgroot as SVGSVGElement, 'water');
  waterShapeObj.setLevel(0.7);
});

// 卸载注销
onUnmounted(() => {
  // unRegisterComp(svgRenderProps.renderitemid);
});
defineExpose({
  setWaterValue
});
</script>
