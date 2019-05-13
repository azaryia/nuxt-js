<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavBar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <nuxt-link class="nav-brand" :to="{name: 'index'}">NavBar <span class="sr-only"></span></nuxt-link>

    <div :class="`collapse navbar-collapse ${navBar && 'show'}`" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li :class="`nav-item ${$route.name === 'index' && 'active'}`">
          <nuxt-link :class="`nav-link ${$route.name === 'index' && 'active'}`" :to="{name: 'index'}">Home <span class="sr-only">(current)</span></nuxt-link>
        </li>
        <li :class="`nav-item ${$route.name === 'blog' && 'active'}`">
          <nuxt-link :class="`nav-link ${$route.name === 'blog' && 'active'}`" :to="{name: 'blog'}">Blog <span class="sr-only">(current)</span></nuxt-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        navBar: false
      }
    },
    methods: {
      toggleNavBar() {
        this.navBar  = !this.navBar;
      }
    }
  };
</script>
