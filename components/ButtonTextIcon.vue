<template>
  <RbUButtonText :class="['btn', utils, modifiers]" v-bind="btnTextProps" :disabled="disabled"  @click="click">
    <DwcIcon v-if="iconBefore" slot="before-text" :name="iconBefore" :size="iconSize" :strokeWidth="iconStrokeWidth" :color="iconColor" modifiers="-margin-right"></DwcIcon>
    <DwcIcon v-if="iconAfter" slot="after-text" :name="iconAfter" :size="iconSize" :strokeWidth="iconStrokeWidth" :color="iconColor" modifiers="-margin-left"></DwcIcon>
  </RbUButtonText>
</template>

<script>
  import RbUButtonText from './ButtonText.vue'

  export default {
    extends: RbUButtonText,
    props: {
      iconBefore: String,
      iconAfter: String,
      iconSize: {
        type: String,
        default: 'default'
      },
      iconColor: String,
      iconStrokeWidth: [String, Number]
    }
  }
</script>
