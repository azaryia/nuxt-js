<template>
  <div>
    <h2>{{article.title ? `Modier l'article ${article.title}` : 'Nouvel article'}}</h2>
    <RbUForm @submit="addArticle">
      <RbUField label="Titre">
        <RbUInputText v-model="article.title" required />
      </RbUField>
      <RbUField label="Description">
        <RbUInputTextArea v-model="article.text" required />
      </RbUField>
      <div slot="actions" class="u-display-flex u-jc-flex-end u-padding-top-medium">
        <RbUButtonTextIcon modifiers="-theme-secondary" utils="u-color-default u-font-weight-bold" :text="article.id ? 'Sauvegarder' : 'Créer'" iconBefore="save" />
      </div>
    </RbUForm>
    <nuxt-link :to="{name: 'admin'}"><button>Retour</button></nuxt-link>
  </div>
</template>

<script>
  import axios from "~/plugins/axios";
  import RbUButtonTextIcon from "~/components/ButtonTextIcon.vue";
  import RbUField from "~/components/Field.vue";
  import RbUForm from "~/components/Form.vue";
  import RbUInputText from "~/components/InputText.vue";
  import RbUInputTextArea from "~/components/InputTextArea.vue";

  export default {
    async asyncData({params}) {
      if (params.id) {
        console.log(params);
        const { data } = await axios.get(`/article/${params.id}`);
        console.log(data);
        return {
          article: data
        }
      }
    },
    components: {
      RbUButtonTextIcon,
      RbUField,
      RbUForm,
      RbUInputText,
      RbUInputTextArea
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
      console.log(this.article)
      return {
        title: this.article.title ? `Modier l'article ${this.article.title}` : 'Nouvel article'
      }
    },
    methods: {
      addArticle() {
        let method = 'post';
        let action = '/article';
        let vm = this;

        if (this.article.id) {
          method = 'put';
          action += `/${this.article.id}`;
        }

        axios[method](action, this.article)
          .then((Response) => {
            console.log(Response);
          })
          .catch((err) => {
            vm.errors.push(err);
            console.error(err);
          })
      }
    }
  };
</script>
