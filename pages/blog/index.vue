<template>
  <div class="container">
    <h2>{{title}}</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <span><nuxt-link :to="{name: 'blog-id', params: {id: article.id}}">{{article.title}}</nuxt-link></span>
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
        title: 'My Articles',
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

