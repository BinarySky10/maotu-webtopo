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
</template>
<script lang="ts" setup>
import { onMounted, ref, computed, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
import TeleportContainer from '@/components/mt-preview/TeleportContainer.vue';
import DataDisplay1 from './components/common/DataDisplay1.vue';
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
</script>
<style scoped lang="less"></style>
