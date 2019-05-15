<template>
  <div class="u-content-width-xsmall">
    <nuxt-link :to="{name: 'blog'}">
      <span class="btn--ghost -theme-default -format-small"><Icon name="chevron-left" strokeWidth="2" size="default"></Icon></span>
    </nuxt-link>

    <h2 class="u-padding-vt-medium">Article n° {{currentArticle.id}} - {{currentArticle.title}}</h2>
    <p class="u-text-pre-wrap">{{currentArticle.text}}</p>
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
