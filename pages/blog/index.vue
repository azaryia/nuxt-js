<template>
  <div>
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
      return {
        articles: data
      }
    },
    data() {
      return {
        title: 'Articles arc-en-ciel',
        articles: []
      }
    },
    head() {
      return {
        title: 'Rainbow Unicorn | Le blog des licornes, sur les licornes, pour les licornes',
        meta: [
          { hid: 'description', name: 'description', content: 'Le blog des licornes, sur les licornes, pour les licornes. Vive les paillettes'}
        ]
      }
    }
  };
</script>

