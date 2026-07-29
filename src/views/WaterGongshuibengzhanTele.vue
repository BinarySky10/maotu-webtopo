<template>
  <TeleportContainer :targetAId="'VueContainer-CsjxrpmY4l'">
    <!--  -->
    <!-- <p>我是数据框1</p> -->
    <DataDisplay1 :datas="datas"></DataDisplay1>
  </TeleportContainer>
  <TeleportContainer :targetAId="'VueContainer-UuuTsweNX1'">
    <!--  -->
    <DataDisplay1 :datas="datas2"></DataDisplay1>
  </TeleportContainer>
  <TeleportContainer :targetAId="'VueContainer-PdMslzlaLE'">
    <!--  -->
    <DataDisplay1 :datas="datas3" :type="'white'"></DataDisplay1>
  </TeleportContainer>

  <TeleportContainer :targetAId="item.targetId" v-for="(item, index) in yeweiState" :key="index">
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
  <!-- 压力计 -->
  <TeleportContainer :targetAId="item.targetId" v-for="(item, index) in yaliState" :key="index">
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>

  <!-- 频率 -->
  <TeleportContainer :targetAId="item.targetId" v-for="(item, index) in pinlvState" :key="index">
    <KvOne :data="item.data"></KvOne>
  </TeleportContainer>
  <!-- 按钮 -->
  <TeleportContainer :targetAId="item.targetId" v-for="item in anniuState">
    <ScButton :type="item.data.type" @onClick="onClick(item.targetId)"></ScButton>
  </TeleportContainer>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
import TeleportContainer from '@/components/mt-preview/TeleportContainer.vue';
import DataDisplay1 from './components/common/DataDisplay1.vue';
import KvList from './components/zongti/KvList.vue';
import KvOne from './components/zongti/KvOne.vue';
import ScButton from './components/zongti/ScButton.vue';
const onClick = (vueContainerId: string) => {
  console.log('click', vueContainerId);
  ElMessage.success(`获取到了id:${vueContainerId}`);
};
const shujukuangs = [
  'VueContainer-CsjxrpmY4l',
  'VueContainer-UuuTsweNX1',
  'VueContainer-PdMslzlaLE'
];
const datas = [
  {
    label: '1#供水泵手动频率设定：',
    value: '11',
    unit: 'Hz'
  },
  {
    label: '2#供水泵手动频率设定：',
    value: '22',
    unit: 'Hz'
  },
  {
    label: '3#供水泵手动频率设定：',
    value: '00',
    unit: 'Hz'
  },
  {
    label: '4#供水泵手动频率设定：',
    value: '00',
    unit: 'Hz'
  },
  {
    label: '5#供水泵手动频率设定：',
    value: '00',
    unit: 'Hz'
  }
];
const datas2 = [
  {
    label: '吸水井保护低液位设定：',
    value: '0.00',
    unit: '米'
  },
  {
    label: '吸水井恢复液位设定：',
    value: '0.00',
    unit: '米'
  },
  {
    label: '报警压力设定：',
    value: '22',
    unit: 'MPa'
  },
  {
    label: '恢复压力设定：',
    value: '22',
    unit: 'MPa'
  },
  {
    label: '4#供水休眠频率设定：',
    value: '00',
    unit: 'Hz'
  },
  {
    label: '4#供水唤醒压力设定：',
    value: '00',
    unit: 'Hz'
  },
  {
    label: '休眠延时设定：',
    value: '0000',
    unit: 's'
  },
  {
    label: '4#供水系统恒压设定：',
    value: '0.00',
    unit: 'Mpa'
  }
];
const datas3 = [
  {
    label: '5#供水泵累计运行时间：',
    value: '000000',
    unit: '小时'
  },
  {
    label: '4#供水泵累计运行时间：',
    value: '000000',
    unit: '小时'
  },
  {
    label: '3#供水泵累计运行时间：',
    value: '000000',
    unit: '小时'
  },
  {
    label: '2#供水泵累计运行时间：',
    value: '000000',
    unit: '小时'
  },
  {
    label: '1#供水泵累计运行时间：',
    value: '000000',
    unit: '小时'
  }
];
const yeweis = ['VueContainer-8w71wzVa1e'];
const yeweiState = yeweis.map((item) => {
  return {
    targetId: item,
    data: {
      label: '液位',
      value: '3.73',
      unit: 'M'
    }
  };
});
const pinlvs = [
  'VueContainer-Ff7hmkAq7H',
  'VueContainer-GHjr55NaLR',
  'VueContainer-bBFR0SVCRi',
  'VueContainer-e7TPOVQg6Y',
  'VueContainer-e6SX2Ytj1C'
];
const pinlvState = pinlvs.map((item) => {
  return {
    targetId: item,
    data: {
      label: '频率',
      value: '0.00',
      unit: 'Hz'
    }
  };
});
const yalis = [
  'VueContainer-64rSpkqZDq',
  'VueContainer-k4tX8WSlLU',
  'VueContainer-Mph65uofFT',
  'VueContainer-g2tb3PyJMy',
  'VueContainer-e6SX2Ytj1C'
];
const yaliState = yalis.map((item) => {
  return {
    targetId: item,
    data: {
      label: '压力',
      value: '0.00',
      unit: 'MPa'
    }
  };
});
const annius = [
  'VueContainer-r3zQxrRpkk',
  'VueContainer-pM8J2pRIF6',
  'VueContainer-3gT2l0ikfH',
  'VueContainer-UspIjwRcWt',
  'VueContainer-KZjmkO8qxx'
];
const anniuState = annius.map((item) => {
  return {
    targetId: item,
    data: {
      type: Math.random() > 0.5 ? 'danger' : 'success'
    }
  };
});
</script>
<style scoped lang="less"></style>
