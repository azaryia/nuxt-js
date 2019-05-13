<template>
  <div class="container">
    <h2>{{title}}</h2>
    <ul>
      <RBUForm></RBUForm>
     <li v-for="article in articles" :key="article.id">
        <h2><nuxt-link :to="{name: 'blog-id', params: {id: article.id}}">{{article.name}}</nuxt-link></h2>
        <p>{{article.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "~/plugins/axios";

  export default {
    async asyncData() {
      const { data } = await axios.get('/servers');
      console.log(data);
      return {
        articles: data
      }
    },
    data() {
      return {
        title: 'My Articles',
        articles: []
      }
    },
    head() {
      return {
        title: 'Articles'
      }
    },
    mounted() {
      // this.generateArticles();
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

<style>
  .container {
    width: 298px;
    margin: 0 auto;
  }
</style>
