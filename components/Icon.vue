<template>
  <i v-html="svg" @click="$emit('click', $event)" :class="['icon', modifiers, color]"></i>
</template>
<script>
  import feather from 'feather-icons'

  export default {
    styleComponent: 'icon',
    props: {
      name: {
        type: String,
        required: true
      },
      strokeWidth: {
        type: [Number, String],
        default: 1.5
      },
      size: {
        type: String,
        default: 'default'
      },
      modifiers: String,
      color: {
        type: String
      }
    },
    computed: {
      svg: function () {
        let params = {}
        if (this.strokeWidth) {
          params['stroke-width'] = this.strokeWidth
        }
        if (this.color) {
          params['stroke'] = this.color
        }

        let sizes = {
          xsmall: 10,
          small: 15,
          default: 20,
          medium: 30
        }
        let size = sizes[this.size] || parseInt(this.size) || 0
        params.width = size
        params.height = size
        params.viewbox = '0 0 ' + size + ' ' + size

        return feather.icons[this.name].toSvg(params)
      }
    }
  }
</script>