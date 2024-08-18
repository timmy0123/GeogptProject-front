<template>
  <main-page />
</template>

<script>
import MainPage from "./pages/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #212529;
  color: #fff;
}

.horizontal-line {
  border-bottom: 1px solid #adb5bd;
  width: 100%;
  margin-bottom: 1.6rem;
}
</style>
