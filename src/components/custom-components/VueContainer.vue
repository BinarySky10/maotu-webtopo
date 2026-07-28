<template>
  <div class="box" :class="preview ? '' : 'box-background'" :instanceid="instanceId">
    <!-- <p>我是{{ instanceId }}</p> -->
  </div>
</template>
<script setup lang="ts">
import { ElDescriptions, ElDescriptionsItem } from 'element-plus';
import type { PropType } from 'vue';
import { watch, computed, inject } from 'vue';
const props = defineProps({ instanceId: String });
watch(
  () => props.instanceId,
  (val) => {
    if (val) {
      console.log('val', val);
      // debugger;
    }
  },
  {
    immediate: true
  }
);
const preview = inject('previewState');
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}
.box-background {
  background: #f5f5f7;
  border: 1px solid #222;
}
</style>
