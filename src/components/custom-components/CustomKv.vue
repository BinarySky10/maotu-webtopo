<template>
  <div class="box">
    <div class="kvKey kvKeyValue" style="font-family: 宋体; font-weight: bold; color: #000000">
      {{ props.label + ':' }}
    </div>
    <div
      style="
        display: flex;
        padding: 5px;
        align-items: center;
        background: #fff;
        /* 阴影参数：水平偏移 垂直偏移 模糊半径 扩散大小 颜色 */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border-radius: 6px;
      "
    >
      <div class="kvValue kvKeyValue" style="font-family: 黑体; color: #000000">
        {{ props.value }}
      </div>
      <div class="unitValue" style="font-family: 黑体; color: #0000ff">
        {{ props.unit }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ElDescriptions, ElDescriptionsItem } from 'element-plus';
import type { PropType } from 'vue';
const props = defineProps({
  fontSize: {
    type: Number,
    default: 18
  },
  label: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: Number,
    default: 50
  },
  value: {
    type: String,
    default: ''
  },
  valueWidth: {
    type: Number,
    default: 50
  },
  unit: {
    type: String,
    default: ''
  },
  unitWidth: {
    type: Number,
    default: 25
  }
});
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: #f5f5f7;
  /* border: 1px solid #222; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.kvKeyValue {
  font-size: v-bind('`${props.fontSize}px`');
  /* font-family: v-bind('`${props.fontFamily}`');
  color: v-bind('`${props.color}`'); */
}
.kvKey {
  width: v-bind('`${props.labelWidth}px`');
}
.kvValue {
  width: v-bind('`${props.valueWidth}px`');
}
.unitValue {
  width: v-bind('`${props.unitWidth}px`');
}
</style>
