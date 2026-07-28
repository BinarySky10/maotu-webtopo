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
  <!-- 开关 -->
  <TeleportContainer
    :targetAId="item.targetId"
    v-if="loadJson"
    v-for="(item, index) in kaigguans"
    :key="index"
  >
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
  <!-- 压力计 -->
  <TeleportContainer
    :targetAId="item.targetId"
    v-if="loadJson"
    v-for="(item, index) in yalis"
    :key="index"
  >
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
  <!-- 液位2 -->
  <TeleportContainer
    :targetAId="item.targetId"
    v-if="loadJson"
    v-for="(item, index) in yeweis2"
    :key="index"
  >
    <!-- 液位2 -->
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
  <!-- 频率 -->
  <TeleportContainer
    :targetAId="item.targetId"
    v-if="loadJson"
    v-for="(item, index) in pinlvs"
    :key="index"
  >
    <!-- 液位2 -->
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
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
    targetId: 'VueContainer-zmeATxmPZC',
    data: {
      // label: '开关',
      label: '',
      value: '65511',
      unit: '%'
    }
  },
  {
    targetId: 'VueContainer-W6IouPWnsa',
    data: {
      // label: '开关',
      label: '',
      value: '65511',
      unit: '%'
    }
  },
  {
    targetId: 'VueContainer-PJhBPXESpT',
    data: {
      // label: '开关',
      label: '',
      value: '65511',
      unit: '%'
    }
  },
  {
    targetId: 'VueContainer-ENASR8Bu2c',
    data: {
      // label: '开关',
      label: '',
      value: '65511',
      unit: '%'
    }
  },
  {
    targetId: 'VueContainer-ZK0dlu56Pu',
    data: {
      // label: '开关',
      label: '',
      value: '65511',
      unit: '%'
    }
  },
  {
    targetId: 'VueContainer-7zq9VoDZhy',
    data: {
      // label: '开关',
      label: '',
      value: '65511',
      unit: '%'
    }
  },
  {
    targetId: 'VueContainer-uyfopKbs9T',
    data: {
      // label: '开关',
      label: '',
      value: '65511',
      unit: '%'
    }
  },
  {
    targetId: 'VueContainer-XPuSmTw5S9',
    data: {
      // label: '开关',
      label: '',
      value: '65511',
      unit: '%'
    }
  },
  {
    targetId: 'VueContainer-9bAN6lMVX3',
    data: {
      // label: '开关',
      label: '',
      value: '65511',
      unit: '%'
    }
  },
  {
    targetId: 'VueContainer-aof5Z6nZKD',
    data: {
      // label: '开关',
      label: '',
      value: '65511',
      unit: '%'
    }
  }
];
const yalis = [
  {
    targetId: 'VueContainer-sNbHNa93vH',
    data: {
      // label: '压力',
      label: '',
      value: '0.17',
      unit: 'Mpa'
    }
  },
  {
    targetId: 'VueContainer-iK9N9t0xFm',
    data: {
      // label: '压力',
      label: '',
      value: '0.17',
      unit: 'Mpa'
    }
  },
  {
    targetId: 'VueContainer-L8UkwPJleG',
    data: {
      // label: '压力',
      label: '',
      value: '0.17',
      unit: 'Mpa'
    }
  },
  {
    targetId: 'VueContainer-gS4kgoGGar',
    data: {
      // label: '压力',
      label: '',
      value: '0.17',
      unit: 'Mpa'
    }
  },
  {
    targetId: 'VueContainer-M58hvv3fKg',
    data: {
      // label: '压力',
      label: '',
      value: '0.17',
      unit: 'Mpa'
    }
  },
  {
    targetId: 'VueContainer-MUsABu4IAd',
    data: {
      // label: '压力',
      label: '',
      value: '0.17',
      unit: 'Mpa'
    }
  }
];

const yeweis2 = [
  {
    targetId: 'VueContainer-DTeUiqMnZ5',
    data: {
      // label: '液位',
      label: '',
      value: '3.73',
      unit: 'M'
    }
  },
  {
    targetId: 'VueContainer-TGV1LTKZal',
    data: {
      // label: '液位',
      label: '',
      value: '3.73',
      unit: 'M'
    }
  },
  {
    targetId: 'VueContainer-SnetFKbUbo',
    data: {
      // label: '液位',
      label: '',
      value: '3.73',
      unit: 'M'
    }
  },
  {
    targetId: 'VueContainer-ZQEsmypq1f',
    data: {
      // label: '液位',
      label: '',
      value: '3.73',
      unit: 'M'
    }
  },
  {
    targetId: 'VueContainer-KOzXhxBL5w',
    data: {
      // label: '液位',
      label: '',
      value: '3.73',
      unit: 'M'
    }
  },
  {
    targetId: 'VueContainer-xXNRnIvxkz',
    data: {
      // label: '液位',
      label: '',
      value: '3.73',
      unit: 'M'
    }
  }
];
const pinlvs = [
  {
    targetId: 'VueContainer-EUq7NxviNJ',
    data: {
      // label: '频率',
      label: '',
      value: '100',
      unit: 'Hz'
    }
  },
  {
    targetId: 'VueContainer-2YM7y0ptvh',
    data: {
      // label: '频率',
      label: '',
      value: '100',
      unit: 'Hz'
    }
  },
  {
    targetId: 'VueContainer-G02Ef7uonO',
    data: {
      // label: '频率',
      label: '',
      value: '100',
      unit: 'Hz'
    }
  },
  {
    targetId: 'VueContainer-NYW57dJIGB',
    data: {
      // label: '频率',
      label: '',
      value: '100',
      unit: 'Hz'
    }
  },
  {
    targetId: 'VueContainer-M6r2XSgW2J',
    data: {
      // label: '频率',
      label: '',
      value: '100',
      unit: 'Hz'
    }
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
