<template>
  <div class="container">
    <h2>{{title}}</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <h2>{{article.title}}</h2><nuxt-link :to="{name: 'admin-id', params: {id: article.id}}">Modifier l'article</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "~/plugins/axios";

  export default {
    async asyncData() {
      const { data } = await axios.get('/article');
      console.log(data);
      return {
        articles: data
      }
    },

    data() {
      return {
        title: "Ecran d'administration",
        articles: []
      }
    },
    head() {
      return {
        title: 'Articles'
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
