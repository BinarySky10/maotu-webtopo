<template>
  <Teleport defer :to="teleportTarget" v-if="targetAId">
    <slot></slot>
  </Teleport>
</template>
<script setup lang="ts">
import { onMounted, ref, computed, nextTick } from 'vue';
const props = defineProps({
  targetAId: {
    type: String,
    default: ''
  }
});
//teleport
const targetAId = ref('');
// targetAId.value = 'VueContainer-GdW4Bb9oB4';
const teleportTarget = computed(() => {
  return `[instanceid='${targetAId.value}']`;
});

async function mountTest(aId) {
  //Teleport defer 不兼容vue3.4
  await nextTick();
  targetAId.value = aId;
}
onMounted(() => {
  mountTest(props.targetAId);
});
</script>
