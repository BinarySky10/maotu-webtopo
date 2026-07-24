<template>
  <div class="box"></div>
</template>
<script setup lang="ts">
import { ElDescriptions, ElDescriptionsItem } from 'element-plus';
import type { PropType } from 'vue';
const props = defineProps({});
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
