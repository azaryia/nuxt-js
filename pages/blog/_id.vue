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
        currentArticle: null,

      }
    },
    head() {
      return {
        title: `Article ${this.currentArticle.title}`,
        meta: 'Content meta'
      }
    },
    mounted() {
      // this.generateArticles();
      // this.currentArticle = this.articles.find(article => article.id === parseInt(this.$route.params.id)) || this.articles[0];
    },
    methods: {
      generateArticles() {
        for (let i = 1; i < 6; i++) {
          this.articles.push({
            id: i,
            title: `Articles ${i} title`,
            content: `Articles ${i} content`,
          })
        }
      }
    }
  };
</script>
