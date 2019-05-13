<template>
  <DwcInputWrapper>
    <input :placeholder="placeholder" class="input" @focus="focusInput" type="text" :disabled="disabled" v-model="model" data-layout="normal" />
  </DwcInputWrapper>
</template>

<script>
  import RbUInput from './Input'
  export default {
    extends: RbUInput
  }
</script>
