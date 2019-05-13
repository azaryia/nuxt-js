<template>
  <RbUInputWrapper>
    <input :placeholder="placeholder" class="input" @focus="focusInput" type="text" :disabled="disabled" v-model="model" data-layout="normal" />
  </RbUInputWrapper>
</template>

<script>
  import RbUInput from './Input'
  import RbUInputWrapper from './InputWrapper'
  export default {
    extends: RbUInput,
    components: {
      RbUInputWrapper
    }
  }
</script>
