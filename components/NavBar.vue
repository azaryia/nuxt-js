<template>
  <nav class="navbar navbar-expand-lg u-bg-color-6">
    <RbUButtonIcon class="btn-navigation-bar navbar-toggler" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" iconName="menu" iconColor="menu" @click="toggleNavBar">
    </RbUButtonIcon>

    <nuxt-link class="nav-brand" :to="{name: 'blog'}">
      <img src="/images/logo.png" alt="Rainbow Unicorn" style="max-height: 80px;">
    </nuxt-link>

    <div :class="`collapse navbar-collapse ${navBar && 'show'} u-color-5 u-font-weight-medium u-font-size-medium u-padding-left-large`" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li :class="`nav-item ${$route.name === 'blog' && 'active'}`">
          <nuxt-link :class="`nav-link ${$route.name === 'blog' && 'active'}`" :to="{name: 'blog'}">Accueil <span class="sr-only">(current)</span></nuxt-link>
        </li>
        <li :class="`nav-item ${$route.name === 'admin' && 'active'}`">
          <nuxt-link :class="`nav-link ${$route.name === 'admin' && 'active'}`" :to="{name: 'admin'}">Admin <span class="sr-only">(current)</span></nuxt-link>
        </li>
      </ul>
    </div>
    <div v-if="$route.params.q|| $route.name === 'admin' || $route.name === 'blog'">
      <RbUToolbar class="u-display-flex">
        <RbUIcon name="search" class="u-margin-right u-padding-top-small u-color-default-light" color="#ffffff" strokeWidth="3"></RbUIcon>
        <RbUInputText class="input--toolbar" type="search" placeholder="Recherche..." v-model="search" />
      </RbUToolbar>
    </div>
  </nav>
</template>

<script>
  import RbUButtonIcon from "~/components/ButtonIcon.vue";
  import RbUIcon from "~/components/Icon.vue";
  import RbUInputText from "~/components/InputText.vue";
  import RbUToolbar from "~/components/Toolbar.vue";

  export default {
    name: 'NavBar',
    components: {
      RbUButtonIcon,
      RbUIcon,
      RbUInputText,
      RbUToolbar
    },
    data () {
      return {
        navBar: false,
        search: null
      }
    },
    methods: {
      toggleNavBar () {
        this.navBar = !this.navBar;
      },
      searchAction () {
        this.$store.commit('SEARCH', this.search);
      }
    },
    watch: {
      search: function () {;
        let routeName = this.$route.name;
        if (this.search && this.search.length) {
          if (!this.$route.params.q) {
            routeName += '-search-q';
          }
          this.searchAction();
          this.$router.push({name: routeName, params: {q: this.search}});
        }
        else {
          this.$router.push({name: routeName.replace('-search-q', '')});
        }
      }
    }
  };
</script>
