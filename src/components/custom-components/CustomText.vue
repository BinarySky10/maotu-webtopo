<template>
  <div
    style="
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #f5f5f7;
      border: 1px solid #222;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <div>
      <p
        class="break-words w-1/1 h-1/1"
        :class="props.vertical ? 'text-vertical' : ''"
        :style="{
          fontFamily: props.fontFamily,
          fontSize: props.fontSize + 'px',
          color: props.fill
        }"
      >
        {{ props.text }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  fontFamily: {
    type: String,
    default: ''
  },
  fontSize: {
    type: Number,
    default: 15
  },
  text: {
    type: String,
    default: ''
  },
  fill: {
    type: String,
    default: ''
  },
  vertical: {
    type: Boolean,
    default: false
  }
});
</script>
<style scoped>
.text-vertical {
  writing-mode: tb;
  letter-spacing: 5px;
}
</style>
