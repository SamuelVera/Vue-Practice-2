<!--Vue single file component -->

<!--Template of the component (HTML Structure)-->
<template>
  <h1>{{ title }}</h1>
  <!--Self enclosed HTML for using child components in the template-->
  <!--Prop passing (Data passed as string)-->
  <!--If the props are binded like :propKey other types of data and stored variables can be used-->
  <Modal :header="header" :text="text" theme="sale" />
  <!--Names for components can conflict with regular HTML elements-->
</template>

<!--Code for the component (OPTIONAL)-->
<script>
/**Importing a component */
import Modal from "./components/Modal.component";
/**Exporting for use in the template */
export default {
  name: "App",
  //For using components in the template
  components: {
    //Key: value -- [NameToUse]: ImportedComponent
    Modal,
  },
  data() {
    return {
      title: "My second Vue JS App",
      header: "Sign up for the Giveaway!",
      text: "Grab your ninja swag for half price!",
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
