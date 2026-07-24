<template>
  <div class="box" :data-instance-id="instanceId">
    <p>我是占位符</p>
  </div>
</template>
<script setup lang="ts">
import { ElDescriptions, ElDescriptionsItem } from 'element-plus';
import type { PropType } from 'vue';
import { watch } from 'vue';
const props = defineProps({ instanceId: String });
watch(
  () => props.instanceId,
  (val) => {
    if (val) {
      console.log('val', val);
      debugger;
    }
  },
  {
    immediate: true
  }
);
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: #f5f5f7;
  border: 1px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
