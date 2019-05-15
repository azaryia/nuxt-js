<template>
  <div class="container">
    <h2>{{title}}</h2>
    <p><nuxt-link :to="{name: 'admin-edit'}">Créer un article</nuxt-link></p>
    <ul v-if="!loading">
      <li v-for="article in articles" :key="article.id">
        <span>{{article.title}}</span> <nuxt-link :to="{name: 'admin-edit-id', params: {id: article.id}}" class="btn -theme-3 -format-small"><Icon name="edit" strokeWidth="2" size="small" ></Icon></nuxt-link>
        <RbUButtonIcon class="btn--ghost -theme-1 -format-small" @click="remove(article)" iconSize="small" iconName="trash-2" iconStrokeWidth="2" />
      </li>
    </ul>
    <RbUSpinner v-else utils="u-margin-bottom-medium"></RbUSpinner>
  </div>
</template>

<script>
  import axios from "~/plugins/axios";
  import RbUButtonIcon from "~/components/ButtonIcon";
  import RbUSpinner from "~/components/Spinner"
  import Icon from "~/components/Icon";
  import { mapGetters } from "vuex";

  export default {
    components: {
      RbUButtonIcon,
      RbUSpinner,
      Icon
    },
    async asyncData() {
      const { data } = await axios.get('/article');
      return {
        loading: false,
        articles: data
      }
    },
    data() {
      return {
        title: "Ecran d'administration",
        articles: [],
        filter: null,
        loading: true
      }
    },
    head() {
      return {
        title: 'Articles',
        meta: [
          { hid: 'description', name: 'description', content: 'Liste des articles à modifier' }
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
      },
      remove(article) {
        let vm = this;

        this.loading = true;

        if (confirm('Voulez-vous vraiment supprimer cet article ' + article.title + '?  Cette action est irréversible.')) {
          axios.delete(`/article/${article.id}`)
            .then(() => {
              location.reload();
          })
            .catch((err) => {
              vm.errors.push(err);
              console.error(err);
              vm.loading = false;
            })
        }
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

