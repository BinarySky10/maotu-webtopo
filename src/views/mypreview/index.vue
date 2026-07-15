<template>
  <mt-preview ref="MtPreviewRef" @on-event-call-back="onEventCallBack"></mt-preview>
</template>
<script setup lang="ts">
import { MtPreview } from '@/export';
import { onMounted, ref } from 'vue';
import { ElMessage } from 'element-plus';
const MtPreviewRef = ref<InstanceType<typeof MtPreview>>();
const onEventCallBack = (type: string, item_id: string) => {
  console.log(type, item_id);

  if (type == 'test-dialog') {
    ElMessage.success(`获取到了id:${item_id}`);
  }
};
onMounted(() => {
  const json = {
    canvasCfg: {
      width: 1920,
      height: 1080,
      scale: 1,
      color: '',
      img: '',
      guide: true,
      adsorp: true,
      adsorp_diff: 5,
      transform_origin: {
        x: 0,
        y: 0
      },
      drag_offset: {
        x: 0,
        y: 0
      }
    },
    gridCfg: {
      enabled: true,
      align: true,
      size: 10
    },
    json: [
      {
        id: 'custom-vue-now-time-FXW0WHWnWZ',
        title: 'custom-vue-now-time',
        type: 'img',
        binfo: {
          left: 570,
          top: 180,
          width: 50,
          height: 50,
          angle: 0
        },
        resize: true,
        rotate: true,
        lock: false,
        active: false,
        hide: false,
        props: {},
        tag: 'custom-vue-now-time',
        common_animations: {
          val: '',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        },
        events: [
          {
            id: 'Fcfu2KTsdi',
            type: 'click',
            action: 'changeAttr',
            change_attr: [
              {
                id: 'G1nHUZl8as',
                target_id: 'custom-vue-now-time-FXW0WHWnWZ',
                target_attr: 'binfo.angle',
                target_value: 60
              }
            ],
            custom_code: '',
            trigger_rule: {
              value: null
            }
          }
        ],
        thumbnail:
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiDQogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+DQogICAgPHBhdGgNCiAgICAgICAgZD0iTTUxMiAyMDYuODQ4Yy0xNjguNDQ4IDAtMzA1LjE1MiAxMzYuNzA0LTMwNS4xNTIgMzA1LjE1MnMxMzYuNzA0IDMwNS4xNTIgMzA1LjE1MiAzMDUuMTUyIDMwNS4xNTItMTM2LjcwNCAzMDUuMTUyLTMwNS4xNTItMTM2LjcwNC0zMDUuMTUyLTMwNS4xNTItMzA1LjE1MnogbTAgNTQ3Ljg0Yy0xMzYuNzA0IDAtMjQyLjY4OC0xMDkuNTY4LTI0Mi42ODgtMjQyLjY4OFMzNzUuMjk2IDI2OS4zMTIgNTEyIDI2OS4zMTIgNzU0LjY4OCAzNzguODggNzU0LjY4OCA1MTJzLTEwNS45ODQgMjQyLjY4OC0yNDIuNjg4IDI0Mi42ODh6Ig0KICAgICAgICBmaWxsPSIjMjMyMzIzIj48L3BhdGg+DQogICAgPHBhdGgNCiAgICAgICAgZD0iTTU5MC4zMzYgNTE5LjY4SDUwNC4zMlYzNzUuMjk2YzAtMTUuODcyLTExLjc3Ni0zMS4yMzItMzEuMjMyLTMxLjIzMnMtMzEuMjMyIDE1Ljg3Mi0zMS4yMzIgMzEuMjMydjE3Ni4xMjhjMCAxNS44NzIgMTEuNzc2IDMxLjIzMiAzMS4yMzIgMzEuMjMyaDExNy4yNDhjMTUuODcyIDAgMzEuMjMyLTExLjc3NiAzMS4yMzItMzEuMjMyIDAtMTkuOTY4LTE1Ljg3Mi0zMS43NDQtMzEuMjMyLTMxLjc0NHoiDQogICAgICAgIGZpbGw9IiMwMEFDNEUiPjwvcGF0aD4NCjwvc3ZnPg=='
      },
      {
        id: '交流发电机-KWkOJEE7wW',
        title: '交流发电机',
        type: 'svg',
        binfo: {
          left: 720,
          top: 410,
          width: 50,
          height: 50,
          angle: 0
        },
        resize: true,
        rotate: true,
        lock: false,
        active: false,
        hide: false,
        props: {
          fill: '#FF0000'
        },
        tag: '交流发电机',
        common_animations: {
          val: '',
          delay: 'delay-0s',
          speed: 'slow',
          repeat: 'infinite'
        },
        events: [
          {
            id: 'CboawEuBSm',
            type: 'click',
            action: 'changeAttr',
            change_attr: [
              {
                id: '6W0JmeD9Qm',
                target_id: '交流发电机-KWkOJEE7wW',
                target_attr: 'props.fill.val',
                target_value: '#0dff00'
              }
            ],
            custom_code: '',
            trigger_rule: {
              value: null
            }
          }
        ]
      }
    ]
  };
  MtPreviewRef.value?.setImportJson(json);
});
</script>
