// src/utils/compRegistry.ts
type CompApi = {
  getSvgRoot: () => SVGSVGElement | null;
};
// key：组件唯一compId；value：组件暴露的svg操作方法
const compMap = new Map<string, CompApi>();

// 组件挂载：注册自身
export function registerComp(compId: string, api: CompApi) {
  compMap.set(compId, api);
}
// 组件卸载：注销，防止内存泄漏
export function unRegisterComp(compId: string) {
  compMap.delete(compId);
}
// 根据标识匹配组件API（外部调用入口）
export function getCompApiById(compId: string): CompApi | null {
  return compMap.get(compId) ?? null;
}
