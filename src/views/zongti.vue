<template>
  <mt-preview
    ref="MtPreviewRef"
    @onEventCallBack="onEventCallBack"
    :showPopover="false"
  ></mt-preview>
  <ZongtiTele v-if="loadJson"></ZongtiTele>
</template>
<script setup lang="ts">
import MtPreview from '@/components/mt-preview/index.vue';
import { onMounted, ref, computed, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
import ZongtiTele from './ZongtiTele.vue';
import TeleportContainer from '@/components/mt-preview/TeleportContainer.vue';
import KvList from './components/zongti/KvList.vue';
import KvOne from './components/zongti/KvOne.vue';
import ScButton from './components/zongti/ScButton.vue';

const MtPreviewRef = ref<InstanceType<typeof MtPreview>>();
const onEventCallBack = (type: string, item_id: string) => {
  console.log(type, item_id);

  if (type == 'test-dialog') {
    ElMessage.success(`获取到了id:${item_id}`);
  }
};

const jishuis = [
  '集水池-u8enKirF1O',
  '集水池-5qwrzHCJ4k',
  '集水池2-dkew2mJlqD',
  '集水池2-IUid4iJQtv',
  '集水池-F7MkrbZy92'
];
const jishuisState = jishuis.map((item) => {
  return {
    targetId: item,
    data: [
      [Math.random(), Math.random()],
      [Math.random(), Math.random()],
      [Math.random(), Math.random()],
      [Math.random(), Math.random()],
      [Math.random(), Math.random()],
      [Math.random(), Math.random()],
      [Math.random(), Math.random()],
      [Math.random(), Math.random()],
      [Math.random(), Math.random()],
      [Math.random(), Math.random()],
      [Math.random(), Math.random()],
      [Math.random(), Math.random()],
      [Math.random(), Math.random()]
    ]
  };
});
const loadJson = ref(false);

import { getDatalist } from '@/api/api';
import { getComInstance } from '@/components/mt-edit/components/render-item/customRenders/SvgRenderUtil';
onMounted(async () => {
  const json = await getDatalist('zongti');

  // MtPreviewRef.value?.setImportJson(json);
  // loadJson.value = true;

  // const json = await getDatalist('test');

  MtPreviewRef.value?.setImportJson(json);
  loadJson.value = true;
  //

  nextTick(() => {
    jishuisState.map(({ targetId, data }) => {
      const ins = getComInstance(targetId);
      if (!ins) return;
      const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
      async function loopItems() {
        for (const item of data) {
          ins?.exposed?.updateWater(...item);
          // 间隔3秒
          await sleep(3000);
        }
        console.log('全部遍历完成');
      }
      loopItems();
    });
  });
});
</script>
<style scoped lang="less"></style>
