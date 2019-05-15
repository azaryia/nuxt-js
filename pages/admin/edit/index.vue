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
        title: `Rainbow Unicorn | Nouvel article`,
        meta: [
          { hid: 'description', name: 'description', content: 'Création d\'un nouvel article sur les licornes.' }
        ]
      }
    }
  };
</script>
