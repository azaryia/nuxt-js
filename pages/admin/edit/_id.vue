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
        console.log(data);
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
        title: `Modier l'article ${this.article.title}`
      }
    }
  };
</script>
