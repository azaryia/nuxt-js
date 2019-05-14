<template>
  <FormArticle></FormArticle>
</template>

<script>
  import FormArticle from "~/components/FormArticle.vue";

  export default {
    components: {
      FormArticle
    },
    head() {
      return {
        title: `Nouveau article`
      }
    }
  };
</script>
