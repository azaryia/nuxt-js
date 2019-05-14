<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavBar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <nuxt-link class="nav-brand" :to="{name: 'blog'}">
      <img src="images/logo.png" alt="Rainbow Unicorn" style="max-height: 80px;">
    </nuxt-link>

    <div :class="`collapse navbar-collapse ${navBar && 'show'}`" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li :class="`nav-item ${$route.name === 'blog' && 'active'}`">
          <nuxt-link :class="`nav-link ${$route.name === 'blog' && 'active'}`" :to="{name: 'blog'}">Accueil <span class="sr-only">(current)</span></nuxt-link>
        </li>
        <li :class="`nav-item ${$route.name === 'admin' && 'active'}`">
          <nuxt-link :class="`nav-link ${$route.name === 'admin' && 'active'}`" :to="{name: 'admin'}">Admin <span class="sr-only">(current)</span></nuxt-link>
        </li>
      </ul>
        <RbUForm @submit="searchAction" class="form-inline my-2 my-lg-0" v-if="$route.name === 'admin' || $route.name === 'blog'">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </RbUForm>
    </div>
  </nav>
</template>

<script>
  import axios from "~/plugins/axios";
  import RbUButtonTextIcon from "~/components/ButtonTextIcon.vue";
  import RbUField from "~/components/Field.vue";
  import RbUForm from "~/components/Form.vue";
  import RbUInputText from "~/components/InputText.vue";

  export default {
    name: 'NavBar',
    components: {
      RbUButtonTextIcon,
      RbUField,
      RbUForm,
      RbUInputText
    },
    data() {
      return {
        navBar: false,
        search: ""
      }
    },
    methods: {
      toggleNavBar() {
        this.navBar  = !this.navBar;
      },

      searchAction() {
        console.log(this.search);
      }
    }
  };
</script>
