<template>
  <div>
    <h2>Nouvel article</h2>
    <form @submit.prevent="addArticle">
      <p>
        <label for="title" class="input-label">Titre</label>
        <input id="title" v-model="article.title" type="text" name="name" class="input">
      </p>
      <p>
        <label for="text" class="input-label">Titre</label>
        <textarea id="text" v-model="article.text" name="text" class="input"></textarea>
      </p>
      <p>
        <button type="submit" value="Submit" class="button">Add Gin</button>
      </p>
    </form>
    <nuxt-link :to="{name: 'blog'}"><button>Retour</button></nuxt-link>
  </div>
</template>

<script>
  import axios from "~/plugins/axios";

  export default {
    data() {
      return {
        article: {
          title: '',
          text: ''
        },
        errors: []
      }
    },

    methods: {
      addArticle() {
        axios.post('/article', this.article)
          .then((Response) => {})
          .catch((err) => {
            this.errors.push(err)
          })
      }
    },

    head() {
      return {
        title: `Nouvel article`
      }
    },

    mounted() {
    },
  };
</script>
