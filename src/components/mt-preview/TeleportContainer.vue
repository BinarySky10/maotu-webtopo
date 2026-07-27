<template>
  <Teleport defer :to="teleportTarget" v-if="targetAId">
    <slot></slot>
  </Teleport>
</template>
<script setup lang="ts">
import { onMounted, ref, computed, nextTick, watch } from 'vue';
const props = defineProps({
  targetAId: {
    type: String,
    default: ''
  }
});
watch(
  () => props.targetAId,
  (val) => {
    if (val) {
      console.log('val', val);
      mountTest(props.targetAId);
      debugger;
    }
  },
  {
    immediate: true
  }
);
//teleport
const targetAId = ref('');
const teleportTarget = computed(() => {
  return `[instanceid='${targetAId.value}']`;
});

async function mountTest(aId) {
  targetAId.value = '';
  //Teleport defer 不兼容vue3.4
  await nextTick();

  targetAId.value = aId;
}
onMounted(() => {
  mountTest(props.targetAId);
});
</script>
