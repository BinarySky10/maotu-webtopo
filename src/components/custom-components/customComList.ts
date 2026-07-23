import TextVue from '@/components/custom-components/text-vue/index.vue';
import CardVue from '@/components/custom-components/card-vue/index.vue';
import NowTimeVue from '@/components/custom-components/now-time-vue/index.vue';
import KvVue from '@/components/custom-components/kv-vue/index.vue';
import SysButtonVue from '@/components/custom-components/sys-button-vue/index.vue';
import CustomText from '@/components/custom-components/CustomText.vue';

const componentsList = [
  ['text-vue', TextVue],
  ['card-vue', CardVue],
  ['now-time-vue', NowTimeVue],
  ['kv-vue', KvVue],
  ['sys-button-vue', SysButtonVue],
  ['custom-text', CustomText]
];
export function getGlobalComponent() {
  return componentsList;
}
