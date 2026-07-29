<template>
  <TeleportContainer :targetAId="'VueContainer-CsjxrpmY4l'">
    <!--  -->
    <p>我是数据框1</p>
  </TeleportContainer>
  <TeleportContainer :targetAId="'VueContainer-UuuTsweNX1'">
    <!--  -->
    <p>我是数据框2</p>
  </TeleportContainer>
  <TeleportContainer :targetAId="'VueContainer-PdMslzlaLE'">
    <!--  -->
    <p>我是数据框3</p>
  </TeleportContainer>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
import TeleportContainer from '@/components/mt-preview/TeleportContainer.vue';
const shujukuangs = [
  'VueContainer-CsjxrpmY4l',
  'VueContainer-UuuTsweNX1',
  'VueContainer-PdMslzlaLE'
];
</script>
