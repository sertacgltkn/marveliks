<template>
  <div id="app">
    <navbar></navbar>

    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  body, html {
    margin: 0;
    padding: 0;
    overflow:"hidden"
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
