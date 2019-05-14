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
        title: `Nouveau article`,
        meta: [
          { hid: 'description', name: 'description', content: 'Création d\'un nouvel article pour notre superbe blog "RainBow Unicorn"' }
        ]
      }
    }
  };
</script>
