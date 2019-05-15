<template>
  <FormArticle :currentArticle="article"></FormArticle>
</template>

<script>
  import axios from "~/plugins/axios";
  import FormArticle from "~/components/FormArticle.vue";

  export default {
    async asyncData({params}) {
      if (params.id) {
        const { data } = await axios.get(`/article/${params.id}`);
        return {
          article: data
        }
      }
    },
    components: {
      FormArticle
    },
    data() {
      return {
        article: {}
      }
    },
    head() {
      return {
        title: `Rainbow Unicorn | Editer l'article ${this.article.title}`,
        meta: [
          { hid: 'description', name: 'description', content: `Edition de l\'article ${this.article.title} sur les licornes` }
        ]
      }
    }
  };
</script>
