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
    async asyncData({params}) {
      const { data } = await axios.get(`/article/${params.id}`);
      console.log(data);
      return {
        article: data
      }
    },
    data() {
      return {
        article: {
          title: '',
          text: ''
        },
        errors: []
      }
    },
    head() {
      return {
        title: `Nouvel article`
      }
    },
    methods: {
      addArticle() {
        let method = 'post';
        let action = '/article';

        if (this.article.id) {
          method = 'put';
          action += `/${this.article.id}`;
        }

        axios[method](action, this.article)
          .then((Response) => {
            console.error(Response);
          })
          .catch((err) => {
            this.errors.push(err);
            console.error(err);
          })
      }
    }
  };
</script>
