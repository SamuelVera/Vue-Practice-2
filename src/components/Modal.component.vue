<!--Template for the modal component-->
<template>
  <!--Events modifiers are used with @eventName.modifierForEvent-->
  <!--Self prevents childs from triggering the event-->
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<!--Script for the component-->
<script>
export default {
  // Props keys that could be accepted by this component
  // (Prop passing is optional even if there are prop names defined)
  props: ["header", "text", "theme"],
  methods: {
    /**Method to close modal */
    closeModal() {
      //Emit a custom event that can be listened by the parent component
      this.$emit("close");
    },
  },
};
</script>

<!--Styles for the modal component-->
<!--
  Scoped styles only affect styles for elements that are inside the template of this component
-->
<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
}
.modal h1 {
  color: #03cfb4;
  padding: 0;
  border: none;
}
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
</style>
