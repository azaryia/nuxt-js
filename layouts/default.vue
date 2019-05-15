<template>
  <div>
    <NavBar></NavBar>
    <div class="container content">
      <nuxt />
    </div>

  </div>
</template>

<script>
  import NavBar from '~/components/NavBar.vue'

  export default {
    components: {
      NavBar
    }
  };
</script>
