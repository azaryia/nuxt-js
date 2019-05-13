<template>
  <RbUInputWrapper>
    <textarea v-model="model" :placeholder="placeholder" :disabled="disabled" :rows="rows" :cols="cols" :maxlength="maxLength" ref="ta"></textarea>
  </RbUInputWrapper>
</template>

<script>
  import RbUInput from './Input.vue';
  export default {
    extends: RbUInput,
    props: {
      cols: null,
      rows: null,
      maxLength: [Number, String]
    }
  };
</script>
