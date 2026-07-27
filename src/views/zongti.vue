<template>
  <mt-preview
    ref="MtPreviewRef"
    @onEventCallBack="onEventCallBack"
    :showPopover="false"
  ></mt-preview>

  <TeleportContainer :targetAId="'VueContainer-sbpfhEcLGt'" v-if="loadJson">
    <!--  -->
    <KvList :datalist="datalist"></KvList>
  </TeleportContainer>
  <TeleportContainer :targetAId="'VueContainer-B8llECJ6Mm'" v-if="loadJson">
    <!--  -->
    <KvList :datalist="datalist2"></KvList>
  </TeleportContainer>
</template>
<script setup lang="ts">
import MtPreview from '@/components/mt-preview/index.vue';
import { onMounted, ref, computed, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
import TeleportContainer from '@/components/mt-preview/TeleportContainer.vue';
import KvList from './components/zongti/KvList.vue';

const MtPreviewRef = ref<InstanceType<typeof MtPreview>>();
const onEventCallBack = (type: string, item_id: string) => {
  console.log(type, item_id);

  if (type == 'test-dialog') {
    ElMessage.success(`获取到了id:${item_id}`);
  }
};
const datalist = [
  {
    label: '总进水流量累计',
    value: '12417067',
    unit: 'm³'
  },
  {
    label: '总进水流量瞬时',
    value: '0000',
    unit: 'm3/h'
  },
  {
    label: '进水浊度',
    value: '000.00',
    unit: 'NTU'
  }
];
const datalist2 = [
  {
    label: '总进水流量累计',
    value: '12417067',
    unit: 'm³'
  },
  {
    label: '总进水流量瞬时',
    value: '0000',
    unit: 'm3/h'
  },
  {
    label: '进水浊度',
    value: '000.00',
    unit: 'NTU'
  },
  {
    label: '余氟',
    value: '0.00',
    unit: 'mg/h'
  }
];
const loadJson = ref(false);
import { getDatalist } from '@/api/api';
onMounted(async () => {
  const json = await getDatalist('zongti');

  MtPreviewRef.value?.setImportJson(json);
  loadJson.value = true;
});
</script>
<style scoped lang="less"></style>
