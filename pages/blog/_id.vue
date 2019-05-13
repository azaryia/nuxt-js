<template>
  <div>
    <h2>Article n° {{currentArticle.id}} - {{currentArticle.title}}</h2>
    <p>{{currentArticle.text}}</p>
    <nuxt-link :to="{name: 'blog'}"><button>Retour</button></nuxt-link>
  </div>
</template>

<script>
  import axios from "~/plugins/axios";

  export default {
    async asyncData({params}) {
      const { data } = await axios.get(`/article/${params.id}`);
      console.log(data);
      return {
        currentArticle: data
      }
    },
    data() {
      return {
        currentArticle: null
      }
    },
    head() {
      return {
        title: `Article ${this.currentArticle.title}`,
        meta: [
          { hid: 'description', name: 'description', content: this.currentArticle.text }
        ]
      }
    }
  };
</script>
