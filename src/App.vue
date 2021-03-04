<!--Vue single file component -->

<!--Template of the component (HTML Structure)-->
<template>
  <h1>{{ title }}</h1>
  <!--Use ref to get an element and handle it with JS methods-->
  <input type="text" ref="inputTest" />
  <button @click="handleClick">Click Me!</button>
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
  methods: {
    handleClick() {
      //Use $refs to access the refs of the scoped component
      //Ex: Add a class name
      this.$refs.inputTest.classList.add("active");
      //Ex: Focus the input
      this.$refs.inputTest.focus();
    },
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
