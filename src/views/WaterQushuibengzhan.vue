<template>
  <mt-preview ref="MtPreviewRef" @onEventCallBack="onEventCallBack"></mt-preview>
</template>
<script setup lang="ts">
import MtPreview from '@/components/mt-preview/index.vue';
import { onMounted, ref } from 'vue';
import { ElMessage } from 'element-plus';
const MtPreviewRef = ref<InstanceType<typeof MtPreview>>();
const onEventCallBack = (type: string, item_id: string) => {
  console.log(type, item_id);

  if (type == 'test-dialog') {
    ElMessage.success(`获取到了id:${item_id}`);
  }
};
async function getPublicJson() {
  const res = await fetch('data/WaterQushuibengzhan.json');
  const data = await res.json();
  return data;
}
onMounted(async () => {
  const xx = await getPublicJson();

  MtPreviewRef.value?.setImportJson(xx);
});
</script>
