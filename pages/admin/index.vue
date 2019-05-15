<template>
  <div>
    <div class="d-flex justify-content-between u-content-width-xsmall">
      <h2>{{title}}</h2>
      <p><nuxt-link :to="{name: 'admin-edit'}" class="btn -theme-primary">Créer un article</nuxt-link></p>
    </div>

    <div v-if="!loading">
      <div class="d-flex justify-content-between u-margin-vt-small u-content-width-xsmall" v-for="article in articles" :key="article.id">
        <span>{{article.title}}</span>
        <div>
          <nuxt-link :to="{name: 'admin-edit-id', params: {id: article.id}}" class="btn -theme-3 -format-small u-margin-hz-small">
            <Icon name="edit" strokeWidth="2" size="small" ></Icon>
          </nuxt-link>
        <RbUButtonIcon class="btn--ghost -theme-1 -format-small" @click="remove(article)" iconSize="small" iconName="trash-2" iconStrokeWidth="2" />
        </div>
      </div>
    </div>
    <RbUSpinner v-else utils="u-margin-bottom-medium"></RbUSpinner>
  </div>
</template>

<script>
  import axios from "~/plugins/axios";
  import RbUButtonIcon from "~/components/ButtonIcon";
  import RbUSpinner from "~/components/Spinner"
  import Icon from "~/components/Icon";

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
        loading: true
      }
    },
    head() {
      return {
        title: 'Rainbow Unicorn | Administration des articles',
        meta: [
          { hid: 'description', name: 'description', content: 'Administration des articles sur les licornes ! ' }
        ]
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

