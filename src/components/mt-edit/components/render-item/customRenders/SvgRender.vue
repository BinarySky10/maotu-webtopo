<template>
  <div class="w-1/1 h-1/1" v-html="svgInnerHtml"></div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { symbolGenSvg, svgToImgSrc, genDomPropstr } from '@/components/mt-edit/utils/index';
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
  const svgStr = symbolGenSvg(
    svgRenderProps.symbolId,
    svgRenderProps.symbolStr,
    '100%',
    '100%',
    genDomPropstr(svgRenderProps.props)
  );
  return svgStr;
});
</script>
