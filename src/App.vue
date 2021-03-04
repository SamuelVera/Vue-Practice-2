<!--Vue single file component -->

<!--Template of the component (HTML Structure)-->
<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <!--Self enclosed HTML for using child components in the template-->
  <!--Prop passing (Data passed as string)-->
  <!--If the props are binded like :propKey other types of data and stored variables can be used-->
  <!--@customEvent to listen to a children component event trigger-->
  <!--Slots are used to pass templates into Components-->
  <Modal v-if="showModal" theme="sale" @close="toggleModal">
    <!--A named slot is a template tag, position doesn't matter-->
    <!--v-slot:name defines the name of the slot-->
    <template v-slot:links>
      <a href="#">Sign up now</a>
      <a href="#">More info</a>
    </template>
    <!--An HTML structure nested like this is passed as a slot and can be used by the Component-->
    <h1>{{ header }}</h1>
    <p>{{ text }}</p>
  </Modal>
  <!--Names for components can conflict with regular HTML elements-->
  <!--Events modifiers are used with @eventName.modifierForEvent-->
  <!--This example is Ctrl + Click-->
  <button @click.ctrl="toggleModal">Open modal (Ctrl + Click)</button>
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
      showModal: false,
    };
  },
  methods: {
    /**Opens and closes the modal */
    toggleModal() {
      this.showModal = !this.showModal;
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
