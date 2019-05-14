<template>
  <div class="container">
    <h2>{{title}}</h2>
    <p><nuxt-link :to="{name: 'admin-edit'}">Créer un article</nuxt-link></p>
    <p></p>
    <ul v-if="!loading">
      <li v-for="article in articles" :key="article.id">
        <span>{{article.title}}</span> <nuxt-link :to="{name: 'admin-edit-id', params: {id: article.id}}">Modifier l'article</nuxt-link>
        <RbUButtonIcon @click="remove(article)" iconSize="small" iconName="trash-2" iconStrokeWidth="2" />
      </li>
    </ul>
    <RbUSpinner v-else utils="u-margin-bottom-medium"></RbUSpinner>
  </div>
</template>

<script>
  import axios from "~/plugins/axios";
  import RbUButtonIcon from "~/components/ButtonIcon";
  import RbUSpinner from "~/components/Spinner"

  export default {
    components: {
      RbUButtonIcon,
      RbUSpinner
    },
    async asyncData() {
      const { data } = await axios.get('/article');
      console.log(data);
      return {
        loading: false,
        articles: data
      }
    },
    data() {
      return {
        title: "Ecran d'administration",
        articles: [],
        loading: true
      }
    },
    head() {
      return {
        title: 'Articles'
      }
    },
    methods: {
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
    }
  };
</script>

