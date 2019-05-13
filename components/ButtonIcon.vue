<template>
  <RbUButton v-bind="btnProps" :class="['btn', utils, modifiers]" :disabled="disabled" @click="click">
    <DwcIcon :name="iconName" :size="iconSize" :color="iconColor" :strokeWidth="iconStrokeWidth"></DwcIcon>
  </RbUButton>
</template>

<script>
  import RbUButton from './Button.vue'
  import _ from 'lodash'

  export default {
    extends: RbUButton,
    name: 'button-icon',
    props: {
      iconName: String,
      iconSize: String,
      iconStrokeWidth: [String, Number],
      iconColor: String
    },
    computed: {
      btnProps: function () {
        return {
          ..._.pick(this, ['disabled', 'type', 'href', 'name']),
          ...this.$styleProps
        }
      }
    }
  }
</script>
