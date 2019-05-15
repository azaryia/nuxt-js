<template>
  <div>
    <h2 class="u-padding-bottom-default">{{title}}</h2>
    <div v-if="!loading && articles && articles.length > 0">
      <ul>
        <li v-for="article in articles" :key="article.id" class="u-padding-vt-small">
          <span><nuxt-link :to="{name: 'blog-id', params: {id: article.id}}">{{article.title}}</nuxt-link></span>
        </li>
      </ul>
    </div>
    <div v-else-if="!loading">
      <p>Aucun article est disponible</p>
    </div>
    <div v-else class="u-display-flex u-ai-center u-jc-center">
      <RbUSpinner class="u-margin-large"></RbUSpinner>
    </div>
  </div>
</template>

<script>
  import axios from "~/plugins/axios";
  import RbUSpinner from "~/components/Spinner";
  import { mapGetters } from "vuex";

  export default {
    components: {
      RbUSpinner
    },
    async asyncData({params}) {
      const { data } = await axios.get(`article?q=${params.q}`);
      return {
        articles: data,
        loading: false
      }
    },
    data() {
      return {
        loading: true,
        filter: null,
        title: 'Articles arc-en-ciel',
        articles: []
      }
    },
    head() {
      return {
        title: `Rainbow Unicorn | Résultats pour ${this.$route.params.q}`,
        meta: [
          { hid: 'description', name: 'description', content: 'Le blog des licornes, sur les licornes, pour les licornes. Vive les paillettes'}
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
        // this.filterArticles();
      }
    }
  };
</script>
