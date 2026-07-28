<script setup lang="ts">
import type { IExportJson } from '@/components/mt-edit/components/types';
import { useGenThumbnail } from '@/components/mt-edit/composables/thumbnail';
import { MtEdit } from '@/export';
import { useRouter } from 'vue-router';
import { provide, ref } from 'vue';
const router = useRouter();
const onPreviewClick = (exportJson: IExportJson, fileName: string) => {
  sessionStorage.setItem('exportJson', JSON.stringify(exportJson));
  // const routeUrl = router.resolve({
  //   name: 'preview'
  // });
  const routeUrl = router.resolve({
    name: fileName
  });
  window.open(routeUrl.href, '_blank');
};
const onSaveClick = (e: IExportJson) => {
  console.log(e, '这是要保存的数据');
};
const onReturnClick = () => {
  router.go(-1);
};
const onThumbnailClick = () => {
  useGenThumbnail();
};
const preview = ref(false);

// 把ref实例传出去
provide('previewState', preview);
const switchPreview = () => {
  preview.value = !preview.value;
};
</script>

<template>
  <div class="w-1/1 h-100vh">
    <mt-edit
      :use-thumbnail="true"
      @on-preview-click="onPreviewClick"
      @on-return-click="onReturnClick"
      @on-save-click="onSaveClick"
      @on-thumbnail-click="onThumbnailClick"
    ></mt-edit>
  </div>
  <div style="position: fixed; top: 10px; left: 10px">
    <button @click="switchPreview">切换</button>
  </div>
</template>

<style scoped></style>
