<template>
  <mt-preview
    ref="MtPreviewRef"
    @onEventCallBack="onEventCallBack"
    :showPopover="false"
  ></mt-preview>

  <TeleportContainer :targetAId="'VueContainer-GdW4Bb9oB4'">
    <!--  -->
    <p>我是外部组件 111</p>
  </TeleportContainer>
  <TeleportContainer :targetAId="'VueContainer-PKWbd7d7lg'">
    <!--  -->
    <p>我是外部组件 222</p>
  </TeleportContainer>
</template>
<script setup lang="ts">
import MtPreview from '@/components/mt-preview/index.vue';
import { onMounted, ref, computed, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
import TeleportContainer from '@/components/mt-preview/TeleportContainer.vue';
const MtPreviewRef = ref<InstanceType<typeof MtPreview>>();
const onEventCallBack = (type: string, item_id: string) => {
  console.log(type, item_id);

  if (type == 'test-dialog') {
    ElMessage.success(`获取到了id:${item_id}`);
  }
};
const loadJson = ref(false);
import { getDatalist } from '@/api/api';
onMounted(async () => {
  const json = await getDatalist('zongti');

  MtPreviewRef.value?.setImportJson(json);
  loadJson.value = true;
});
</script>
