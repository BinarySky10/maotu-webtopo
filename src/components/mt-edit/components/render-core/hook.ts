import { getCurrentInstance } from 'vue';

import { getGlobalComponent } from '@/components/custom-components/customComList';
export function useGlobalComponent() {
  const instance = getCurrentInstance();
  if (!instance) return;

  const keys = Object.keys(instance.appContext.components as any);
  const map = getGlobalComponent();

  map.forEach(([tag, comp]) => {
    if (!keys.includes(tag as string)) {
      instance.appContext.app.component(tag as string, comp as any);
    }
  });
}
