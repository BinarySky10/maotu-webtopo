//实例注册 hooks

import { onUnmounted, getCurrentInstance } from 'vue';

const componentMap = new Map<string, object>();

export function registerCompInstance(compId: string) {
  const instance = getCurrentInstance();
  if (!instance) return;
  componentMap.set(compId, instance);

  onUnmounted(() => {
    componentMap.delete(compId);
  });
}
export function getComInstance(compId: string) {
  return componentMap.get(compId);
}
