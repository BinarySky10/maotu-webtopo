import { getCurrentInstance } from 'vue';
import TextVue from '@/components/custom-components/text-vue/index.vue';
import CardVue from '@/components/custom-components/card-vue/index.vue';
import NowTimeVue from '@/components/custom-components/now-time-vue/index.vue';
import KvVue from '@/components/custom-components/kv-vue/index.vue';
import SysButtonVue from '@/components/custom-components/sys-button-vue/index.vue';

export function useGlobalComponent() {
  const instance = getCurrentInstance();
  if (!instance) return;

  const keys = Object.keys(instance.appContext.components as any);
  const map = [
    ['text-vue', TextVue],
    ['card-vue', CardVue],
    ['now-time-vue', NowTimeVue],
    ['kv-vue', KvVue],
    ['sys-button-vue', SysButtonVue]
  ];

  map.forEach(([tag, comp]) => {
    if (!keys.includes(tag as string)) {
      instance.appContext.app.component(tag as string, comp as any);
    }
  });
}
