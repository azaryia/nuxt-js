<template>
  <div :class="['spinner', utils]"></div>
</template>

<script>
  export default {
    props: {
      utils: String
    }
  }
</script>