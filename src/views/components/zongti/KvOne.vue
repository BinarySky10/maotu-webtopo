<template>
  <div class="text-box">
    <div class="text-box-item">
      <div class="param-label left" v-if="props.data.label">{{ props.data.label }}:</div>
      <div class="param-value-box right">
        <span class="num-text">{{ props.data.value }}</span>
        <span class="unit-text">{{ props.data.unit }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({ data: Array });
// const data = {
//   label: '总进水流量累计',
//   value: '12417067',
//   unit: 'm³'
// };
</script>
<style scoped lang="less">
.text-box {
  width: 100%;
  height: 100%;
  display: flex;
  background: #e5e5e5;
  border: 2px solid transparent;
  justify-content: space-evenly;
  flex-direction: column;
  font-size: 12px;
  .text-box-item {
    display: flex;
    .left,
    .right {
      flex: 1;
    }
    .param-label {
      font-weight: bold;
      color: #222;
      white-space: nowrap;
    }
    .param-value-box {
      display: flex;
      align-items: center;
      background: #f0f0f0;
      border: 2px solid #aaa;
      .num-text {
        color: #000;
      }
      .unit-text {
        color: #0044ff;
        font-weight: bold;
      }
    }
  }
}
</style>
