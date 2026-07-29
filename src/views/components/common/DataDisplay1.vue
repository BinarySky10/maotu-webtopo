<template>
  <div class="box-container">
    <div class="box" v-for="(item, index) in props.datas" :key="index">
      <div class="left">{{ item.label }}</div>
      <div class="data right">
        <div class="value" :class="props.type == 'black' ? 'black' : 'white'">{{ item.value }}</div>
        <div class="unit">{{ item.unit }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'black'
  },
  datas: {
    type: Array,
    default: () => [
      {
        label: '1#供水泵手动频率设定：',
        value: '00',
        unit: 'Hz'
      },
      {
        label: '2#供水泵手动频率设定：',
        value: '00',
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
    ]
  }
});
</script>
<style scoped lang="less">
.box-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .box {
    display: flex;
    margin: 6px 15px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    background: #ddd;
    .left {
      flex: 3;
      padding: 5px;
    }
    .right {
      flex: 2;
      padding: 5px;
    }
    .data {
      display: flex;
      justify-content: space-around;
      .value {
        width: 50%;
        text-align: center;
      }
      .black {
        background: #0f0a09;
        color: #00c300;
      }
      .white {
        background: #fff;
        color: #000;
      }
      .unit {
        color: #222fdd;
      }
    }
  }
}
</style>
