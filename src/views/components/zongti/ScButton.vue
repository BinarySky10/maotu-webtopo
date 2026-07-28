<template>
  <button class="w-1/1 h-1/1" :style="getStyle(props.type)" @click="onClick">
    <el-text></el-text>
  </button>
</template>
<script lang="ts" setup>
type ButtonType = '' | 'default' | 'success' | 'warning' | 'info' | 'primary' | 'danger';
import type { PropType } from 'vue';
import { ElText } from 'element-plus';
const emits = defineEmits(['onClick']);
const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: 'danger'
  }
});
const onClick = () => {
  console.log('click');
  emits('onClick');
};
const getStyle = (type: ButtonType) => {
  let bg_color = '';
  if (type == 'primary') {
    bg_color = '#409eff';
  } else if (type == 'success') {
    bg_color = '#67c23a';
  } else if (type == 'warning') {
    bg_color = '#e6a23c';
  } else if (type == 'danger') {
    bg_color = '#f56c6c';
  } else if (type == 'info') {
    bg_color = '#909399';
  }

  return {
    backgroundColor: bg_color,
    borderRadius: ' 50%'
  };
};
</script>
<style lang="less" scoped></style>
