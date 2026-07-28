<template>
  <div class="w-1/1 h-1/1" v-html="svgInnerHtml"></div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { symbolGenSvg2, svgToImgSrc, genDomPropstr } from '@/components/mt-edit/utils/index';
import type { ILeftAsideConfigItemPublicProps } from '../../../store/types';
type SvgRenderProps = {
  symbolId: string;
  symbolStr: string;
  width: string;
  height: string;
  props: ILeftAsideConfigItemPublicProps;
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
</script>
