<!--Vue single file component -->

<!--Template of the component (HTML Structure)-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<!--Code for the component (OPTIONAL)-->
<script>
import HelloWorld from "./components/HelloWorld.vue";

/**Exporting this single file component */
export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<!--Styles of the component (OPTIONAL)-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
