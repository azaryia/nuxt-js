<template>
  <div>
    <h2>Nouvel article</h2>
    <Form @submit="addArticle">
      <Field label="Titre">
        <InputText v-model="article.title" required />
      </Field>
      <Field label="Description">
        <InputTextArea v-model="article.text" require />
      </Field>
      <div slot="actions" class="u-display-flex u-jc-flex-end u-padding-top-medium">
        <ButtonTextIcon modifiers="-theme-secondary" utils="u-color-default u-font-weight-bold" :text="article.id ? 'Sauvegarder' : 'Créer'" iconBefore="save" />
      </div>
    </Form>
    <nuxt-link :to="{name: 'blog'}"><button>Retour</button></nuxt-link>
  </div>
</template>

<script>
  import axios from "~/plugins/axios";
  import Field from "~/components/Field.vue";
  import Form from "~/components/Form.vue";
  import InputText from "~/components/InputText.vue";
  import InputTextArea from "~/components/InputTextArea.vue";

  export default {
    async asyncData({params}) {
      const { data } = await axios.get(`/article/${params.id}`);
      console.log(data);
      return {
        article: data
      }
    },
    components: {
      Field,
      Form,
      InputText,
      InputTextArea
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
