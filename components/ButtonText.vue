<template>
  <RbUButton :class="['btn', utils, modifiers]" :disabled="disabled" v-bind="btnProps" @click="click">
    <slot name="before-text"></slot>
    <span utils="font-weight-bold">{{text}}</span>
    <slot name="after-text"></slot>
  </RbUButton>
</template>

<script>
  import RbUButton from './Button.vue'

  export default {
    extends: RbUButton,
    props: {
      text: String
    },
    computed: {
      btnTextProps: function () {
        let props = this.btnProps
        props.text = this.text
        return props
      }
    }
  }
</script>
