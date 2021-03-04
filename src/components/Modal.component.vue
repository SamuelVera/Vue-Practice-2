<!--Template for the modal component-->
<template>
  <!--Events modifiers are used with @eventName.modifierForEvent-->
  <!--Self prevents childs from triggering the event-->
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!--Usage of a default slots recieved by the parent component-->
      <slot>
        <!--Only showed if there's no default slot-->
        Default content
      </slot>
      <div class="actions">
        <!--Usage of named slots with name attribute, Ex: name="name-of-slot"-->
        <slot name="links">
          <!--Only showed if the named slot is not passed from the parent component-->
          Default actions
        </slot>
      </div>
    </div>
  </div>
</template>

<!--Script for the component-->
<script>
export default {
  // Props keys that could be accepted by this component
  // (Prop passing is optional even if there are prop names defined)
  props: ["theme"],
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
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
.modal.sale .actions a {
  color: white;
}
</style>
