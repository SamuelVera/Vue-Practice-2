<!--Vue single file component -->

<!--Template of the component (HTML Structure)-->
<template>
  <h1>{{ title }}</h1>
</template>

<!--Code for the component (OPTIONAL)-->
<script>
/**Exporting this single file component */
export default {
  name: "App",
  data() {
    return {
      title: "My second Vue JS App",
    };
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
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
