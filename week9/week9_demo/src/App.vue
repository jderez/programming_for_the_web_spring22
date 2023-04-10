<script setup>
// javascript here
const isWorking = true;
</script>


<template>
<!-- html goes here -->  
<div class="container">
  <h1>My first compile Vue app</h1>
  <p v-if="isWorking">It is working</p>
</div>
</template>


<style>
/* style goes here */
  .container {
    width: 600px;
    margin: 20px auto 0;
    text-align: center;
    font-size: 18px;
  }

  .container p {
    font-size: 18px;
  }
</style>