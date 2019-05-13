<template>
  <div class="field">
    <label class="field__label">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'field',
    props: {
      label: String
    }
  }
</script>