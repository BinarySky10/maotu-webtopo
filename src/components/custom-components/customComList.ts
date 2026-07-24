// import TextVue from '@/components/custom-components/text-vue.vue';
// import CardVue from '@/components/custom-components/card-vue.vue';
// import NowTimeVue from '@/components/custom-components/now-time-vue.vue';
// import KvVue from '@/components/custom-components/kv-vue.vue';
// import SysButtonVue from '@/components/custom-components/sys-button-vue.vue';
// import CustomText from '@/components/custom-components/CustomText.vue';

// const componentsList = [
//   ['text-vue', TextVue],
//   ['card-vue', CardVue],
//   ['now-time-vue', NowTimeVue],
//   ['kv-vue', KvVue],
//   ['sys-button-vue', SysButtonVue],
//   ['custom-text', CustomText]
// ];

const modules = import.meta.glob('./*.vue', { eager: true });

const componentsList = Object.entries(modules).map(([path, mod]) => {
  // 截取文件名，处理成kebab-case标签名
  const fileName = path.replace(/^\.\//, '').replace('.vue', '');
  // const tagName = fileName.replace(/([A-Z])/g, '-$1').toLowerCase();
  const tagName = fileName;
  return {
    name: tagName,
    comp: mod.default
  };
});
console.log(componentsList);
export function getGlobalComponent() {
  return componentsList;
}
