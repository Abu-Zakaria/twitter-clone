<template>
  <div id="nav" v-if="navbarVisible">
    <Navbar />
  </div>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/partials/Navbar.vue";

@Options({
  watch: {
    $route(to) {
      this.navbarVisible = to.name !== "Login";
    },
  },
  components: {
    Navbar,
  },
})
export default class App extends Vue {
  navbarVisible = true;
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
