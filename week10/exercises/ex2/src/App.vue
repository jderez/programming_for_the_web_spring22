<script setup>
import { RouterView, RouterLink } from "vue-router"
</script>


<template>
  <nav>
    <RouterLink to="/">Home</RouterLink></nav>
  <RouterView />
</template>


<style scoped>
  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
</style>
