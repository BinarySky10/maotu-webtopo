{
    id: 'custom-text',
    title: '定制文字',
    type: 'vue',
    thumbnail: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzMiIgZD0ibTMyIDQxNS41bDEyMC0zMjBsMTIwIDMyMG0tNDItMTEySDc0bTI1Mi02NGMxMi4xOS0yOC42OSA0MS00OCA3NC00OGgwYzQ2IDAgODAgMzIgODAgODB2MTQ0Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzMiIgZD0iTTMyMCAzNTguNWMwIDM2IDI2Ljg2IDU4IDYwIDU4YzU0IDAgMTAwLTI3IDEwMC0xMDZ2LTE1Yy0yMCAwLTU4IDEtOTIgNWMtMzIuNzcgMy44Ni02OCAxOS02OCA1OCIvPjwvc3ZnPg==`,
    props: {
      text: {
        title: '文字内容',
        type: 'input',
        val: '定制文字'
      },
      fontFamily: {
        title: '字体',
        type: 'select',
        val: '黑体',
        options: [
          {
            value: '黑体',
            label: '黑体'
          },
          {
            value: '宋体',
            label: '宋体'
          }
        ]
      },
      fontSize: {
        title: '文字大小',
        type: 'number',
        val: 18
      },
      fill: {
        title: '文字颜色',
        type: 'color',
        val: '#FFF700'
      },
      vertical: {
        title: '竖排展示',
        type: 'switch',
        val: false
      }
    },
    common_animations: {
      val: '',
      delay: 'delay-0s',
      speed: 'slow',
      repeat: 'infinite'
    }
  },