<template>
  <mt-preview
    ref="MtPreviewRef"
    @onEventCallBack="onEventCallBack"
    :showPopover="false"
  ></mt-preview>

  <TeleportContainer :targetAId="'VueContainer-sbpfhEcLGt'" v-if="loadJson">
    <!-- 左上 数据列表 -->
    <KvList :datalist="datalist"></KvList>
  </TeleportContainer>
  <TeleportContainer :targetAId="'VueContainer-B8llECJ6Mm'" v-if="loadJson">
    <!-- 右下 数据列表 -->
    <KvList :datalist="datalist2"></KvList>
  </TeleportContainer>
  <!-- 集水池 液位 -->
  <TeleportContainer
    :targetAId="item.targetId"
    v-if="loadJson"
    v-for="(item, index) in yeweis"
    :key="index"
  >
    <!-- 集水池 液位 -->
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
  <!-- 流量 -->
  <TeleportContainer
    :targetAId="item.targetId"
    v-if="loadJson"
    v-for="(item, index) in liuliangs"
    :key="index"
  >
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>

  <!-- <KvOne :data="data"></KvOne> -->
</template>
<script setup lang="ts">
import MtPreview from '@/components/mt-preview/index.vue';
import { onMounted, ref, computed, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
import TeleportContainer from '@/components/mt-preview/TeleportContainer.vue';
import KvList from './components/zongti/KvList.vue';
import KvOne from './components/zongti/KvOne.vue';

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

const yeweis = [
  {
    targetId: 'VueContainer-mJBdycdfVr',
    data: {
      label: '液位',
      value: '3.73',
      unit: 'M'
    }
  },
  {
    targetId: 'VueContainer-MG5iL1dT4x',
    data: {
      label: '液位',
      value: '3.73',
      unit: 'M'
    }
  },
  {
    targetId: 'VueContainer-U4jB9wLBMy',
    data: {
      label: '液位',
      value: '3.73',
      unit: 'M'
    }
  },
  {
    targetId: 'VueContainer-93p3M5f5sd',
    data: {
      label: '液位',
      value: '3.73',
      unit: 'M'
    }
  },
  {
    targetId: 'VueContainer-oFlKJUosRa',
    data: {
      label: '液位',
      value: '3.73',
      unit: 'M'
    }
  },
  {
    targetId: 'VueContainer-UnugqC4hPK',
    data: {
      label: '液位',
      value: '3.73',
      unit: 'M'
    }
  }
];
const liuliangs = [
  {
    targetId: 'VueContainer-rgPtID4tRF',
    data: {
      // label: '总进水流量累计',
      label: '',
      value: '12417067',
      unit: 'm³'
    }
  },
  {
    targetId: 'VueContainer-gJlB6UKw5i',
    data: {
      // label: '总进水流量瞬时',
      label: '',
      value: '0000',
      unit: 'm³/h'
    }
  },
  {
    targetId: 'VueContainer-4sQiy3EHhS',
    data: {
      // label: '总进水流量累计',
      label: '',
      value: '12417067',
      unit: 'm³'
    }
  },
  {
    targetId: 'VueContainer-EFga1VBXk4',
    data: {
      // label: '总进水流量瞬时',
      label: '',
      value: '0000',
      unit: 'm³/h'
    }
  },
  {
    targetId: 'VueContainer-Iw3Iuu0Kh0',
    data: {
      // label: '总进水流量累计',
      label: '',
      value: '12417067',
      unit: 'm³'
    }
  },
  {
    targetId: 'VueContainer-S0VRyFHc0Z',
    data: {
      // label: '总进水流量瞬时',
      label: '',
      value: '0000',
      unit: 'm³/h'
    }
  },
  {
    targetId: 'VueContainer-KhTOruXBmj',
    data: {
      // label: '总进水流量累计',
      label: '',
      value: '12417067',
      unit: 'm³'
    }
  },
  {
    targetId: 'VueContainer-T99DHfc29Q',
    data: {
      // label: '总进水流量瞬时',
      label: '',
      value: '0000',
      unit: 'm³/h'
    }
  },
  {
    targetId: 'VueContainer-1le8GJHiUL',
    data: {
      // label: '总进水流量累计',
      label: '',
      value: '12417067',
      unit: 'm³'
    }
  },
  {
    targetId: 'VueContainer-KgSV5Cxxfz',
    data: {
      // label: '总进水流量瞬时',
      label: '',
      value: '0000',
      unit: 'm³/h'
    }
  }
];
const kaigguans = [
  {
    targetId: '',
    data: {
      // label: '开关',
      label: '',
      value: '65511',
      unit: '%'
    }
  },
  {
    targetId: '',
    data: {
      // label: '开关',
      label: '',
      value: '65511',
      unit: '%'
    }
  },
  {}
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
