<template>
  <RbUButtonText :class="['btn', utils, modifiers]" v-bind="btnTextProps" :disabled="disabled"  @click="click">
    <RbUIcon v-if="iconBefore" slot="before-text" :name="iconBefore" :size="iconSize" :strokeWidth="iconStrokeWidth" :color="iconColor" modifiers="-margin-right"></RbUIcon>
    <RbUIcon v-if="iconAfter" slot="after-text" :name="iconAfter" :size="iconSize" :strokeWidth="iconStrokeWidth" :color="iconColor" modifiers="-margin-left"></RbUIcon>
  </RbUButtonText>
</template>

<script>
  import RbUButtonText from './ButtonText.vue'
  import RbUIcon from './Icon.vue'

  export default {
    extends: RbUButtonText,
    components: {
      RbUButtonText,
      RbUIcon
    },
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
