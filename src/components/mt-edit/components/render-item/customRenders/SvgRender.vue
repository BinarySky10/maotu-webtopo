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
import {
  registerComp,
  unRegisterComp,
  getCompApiById
} from '@/components/mt-edit/utils/compRegistry';
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

const waterShape = reactive({
  x: 0,
  y: 0,
  width: 100,
  height: 100
});

let y;
let height;
function bindWaterShapeAutoSync(svgRoot: SVGSVGElement) {
  const rect = svgRoot.getElementById('water') as SVGRectElement;

  if (!rect) return;
  console.log(rect);
  waterShape.x = Number(rect.getAttribute('x')) || 0;
  waterShape.y = Number(rect.getAttribute('y')) || 0;
  y = waterShape.y;
  waterShape.width = Number(rect.getAttribute('width')) || 0;
  waterShape.height = Number(rect.getAttribute('height')) || 0;
  height = waterShape.height;
  // 数据变化自动同步到 SVG 属性
  watch(
    () => waterShape.x,
    (val) => rect.setAttribute('x', `${val}`)
  );
  watch(
    () => waterShape.y,
    (val) => rect.setAttribute('y', `${val}`)
  );
  watch(
    () => waterShape.width,
    (val) => rect.setAttribute('width', `${val}`)
  );
  watch(
    () => waterShape.height,
    (val) => rect.setAttribute('height', `${val}`)
  );
}
const setWaterValue = (val: number) => {
  const Y = y;
  const Height = height;
  let tmp = typeof val === 'number' && !Number.isNaN(val) ? val : 0;
  //num = 0.5
  let num = Math.max(0, Math.min(1, tmp));
  const newHeight = Height * num;
  const newY = Y + (Height - newHeight);
  waterShape.y = newY;
  waterShape.height = newHeight;
};

nextTick(() => {});
onMounted(async () => {
  registerComp(svgRenderProps.renderitemid, compApi);
  // const compApi = getCompApiById(svgRenderProps.renderitemid);
  const svgroot = compApi?.getSvgRoot();
  bindWaterShapeAutoSync(svgroot as SVGSVGElement);
  setWaterValue(0.3);
});

// 卸载注销
onUnmounted(() => {
  unRegisterComp(svgRenderProps.renderitemid);
});
defineExpose({
  setWaterValue
});
</script>
