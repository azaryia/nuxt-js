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
  import { mapGetters } from "vuex";

  export default {
    async asyncData() {
      const { data } = await axios.get('/article');
      return {
        articles: data
      }
    },
    data() {
      return {
        title: 'My Articles',
        articles: [],
        filter: null
      }
    },
    head() {
      return {
        title: 'Articles',
        meta: [
          { hid: 'description', name: 'description', content: 'Pour les passionnés des licornes "Arc-en-ciel", venez décourvir notre superbe blog "Rainbow Unicorne" rempli de pailletes'}
        ]
      }
    },
    computed: mapGetters({
      search: 'search'
    }),
    methods: {
      filterArticles() {
        let vm = this;
        this.loading = true;
        axios.get(`/article?q=${this.filter}`)
          .then((result) => {
            vm.articles = [];
            vm.articles = result.data;
            vm.loading = false;
          })
          .catch((err) => {
            console.error(err);
            vm.loading = false;
          });
      }
    },
    watch: {
      search: function (value) {
        this.filter = value;
        this.filterArticles();
      }
    }
  };
</script>

