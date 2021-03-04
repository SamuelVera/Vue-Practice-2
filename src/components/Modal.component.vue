<!--Template for the modal component-->
<template>
  <div class="backdrop">
    <div class="modal">
      <h1>Modal title</h1>
      <p>Modal content</p>
    </div>
  </div>
</template>

<!--Styles for the modal component-->
<!--
  Scoped styles only affect styles for elements that are inside the template of this component
-->
<style scoped>
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
h1 {
  color: #03cfb4;
  padding: 0;
  border: none;
}
</style>
