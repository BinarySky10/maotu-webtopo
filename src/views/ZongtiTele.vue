<template>
  <TeleportContainer :targetAId="'VueContainer-sbpfhEcLGt'">
    <!-- 左上 数据列表 -->
    <KvList :datalist="datalist"></KvList>
  </TeleportContainer>
  <TeleportContainer :targetAId="'VueContainer-B8llECJ6Mm'">
    <!-- 右下 数据列表 -->
    <KvList :datalist="datalist2"></KvList>
  </TeleportContainer>
  <!-- 集水池 液位 -->
  <TeleportContainer :targetAId="item.targetId" v-for="(item, index) in yeweis" :key="index">
    <!-- 集水池 液位 -->
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
  <!-- 流量 -->
  <TeleportContainer :targetAId="item.targetId" v-for="(item, index) in liuliangs" :key="index">
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
  <!-- 开关 -->
  <TeleportContainer :targetAId="item.targetId" v-for="(item, index) in kaigguans" :key="index">
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
  <!-- 压力计 -->
  <TeleportContainer :targetAId="item.targetId" v-for="(item, index) in yalis" :key="index">
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
  <!-- 液位2 -->
  <TeleportContainer :targetAId="item.targetId" v-for="(item, index) in yeweis2" :key="index">
    <!-- 液位2 -->
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
  <!-- 频率 -->
  <TeleportContainer :targetAId="item.targetId" v-for="(item, index) in pinlvs" :key="index">
    <!-- 液位2 -->
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
  <!-- 按钮 -->
  <TeleportContainer :targetAId="item.targetId" v-for="item in ctrlState">
    <!-- 按钮 -->
    <ScButton :type="item.data.type" @onClick="onClick(item.targetId)"></ScButton>
  </TeleportContainer>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
import TeleportContainer from '@/components/mt-preview/TeleportContainer.vue';
import KvList from './components/zongti/KvList.vue';
import KvOne from './components/zongti/KvOne.vue';
import ScButton from './components/zongti/ScButton.vue';
const onClick = (vueContainerId: string) => {
  console.log('click', vueContainerId);
  ElMessage.success(`获取到了id:${vueContainerId}`);
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
const controls = [
  //加药
  'VueContainer-MSDMcx2UVi',
  'VueContainer-5x1iflw03D',
  'VueContainer-P7uNvadUnj',
  'VueContainer-iBv3wyDl4Q',
  'VueContainer-kLs4Js8BYE',
  'VueContainer-n78plNmX4E',
  //净水设备
  'VueContainer-tVWB7KQZnC',
  'VueContainer-ud8llHELeW',
  'VueContainer-ogwlJe5pvU',
  'VueContainer-gmxH5QDexx',
  'VueContainer-Wz43n0bkNK',
  'VueContainer-5pjx6ovT1Z',
  //反洗水
  'VueContainer-3Q1CRL6aji',
  'VueContainer-hLR7I5BCMx',
  //反洗气
  'VueContainer-xtwG3zrjm6',
  'VueContainer-wBwsNw2cJX',
  //投加
  'VueContainer-dpUEtZEm5o',
  'VueContainer-t434iywGGj',
  'VueContainer-eTPL1vbiuL',
  'VueContainer-dyQn3K5hkp',
  //供水
  'VueContainer-ksCJQDiRys',
  'VueContainer-n0keGhMOMv',
  'VueContainer-VkrHEQIK3d',
  'VueContainer-Fyw5FuFJtd',
  'VueContainer-Y4eu8oxNYK'
];
const ctrlState = controls.map((item) => {
  return {
    targetId: item,
    data: {
      type: Math.random() > 0.5 ? 'danger' : 'success'
    }
  };
});
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
</script>
