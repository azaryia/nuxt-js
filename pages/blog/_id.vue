<template>
  <div>
    <nuxt-link :to="{name: 'blog'}">
      <button class="btn -theme-default"><Icon name="chevron-left" strokeWidth="2" size="medium" ></Icon></button>
    </nuxt-link>
    <br><br>

    <h2>Article n° {{currentArticle.id}} - {{currentArticle.title}}</h2>
    <p class="pre-formatted">{{currentArticle.text}}</p>
  </div>
</template>

<script>
  import axios from "~/plugins/axios";
  import Icon from "~/components/Icon";

  export default {
    components: {
      Icon
    },
    async asyncData({params}) {
      const { data } = await axios.get(`/article/${params.id}`);
      return {
        currentArticle: data
      }
    },
    data() {
      return {
        currentArticle: null
      }
    },
    head() {
      return {
        title: `Rainbow Unicorn | ${this.currentArticle.title}`,
        meta: [
          { hid: 'description', name: 'description', content: this.currentArticle.text }
        ]
      }
    }
  };
</script>
