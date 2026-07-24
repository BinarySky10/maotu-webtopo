import TextVue from '@/components/custom-components/text-vue.vue';
import CardVue from '@/components/custom-components/card-vue.vue';
import NowTimeVue from '@/components/custom-components/now-time-vue.vue';
import KvVue from '@/components/custom-components/kv-vue.vue';
import SysButtonVue from '@/components/custom-components/sys-button-vue.vue';
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
