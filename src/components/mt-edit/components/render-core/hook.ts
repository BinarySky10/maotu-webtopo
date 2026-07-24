import { getCurrentInstance } from 'vue';

import { getGlobalComponent } from '@/components/custom-components/customComList';

export function useGlobalComponent() {
  const instance = getCurrentInstance();
  if (!instance) return;

  const keys = Object.keys(instance.appContext.components as any);
  const map = getGlobalComponent();

  map.forEach(({ name, comp }) => {
    if (!keys.includes(name as string)) {
      instance.appContext.app.component(name as string, comp as any);
    }
  });
}
