<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> | 
    <RouterLink to="/alpaca">Alpaca</RouterLink> | 
    <RouterLink to="/llama">Llama</RouterLink> 
  </nav>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
html {
  font-size: 16px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

body, 
#app {
  margin: 0;
  padding: 0;
}

nav {
  width: 100%;
  height: 45px;
  background: #0e0e3f;
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
  color: white;
  font-weight: 900;
  font-size: 24px;
  line-height: 1.75;
  text-decoration: none;
}

nav a.router-link-active {
  text-decoration: underline;
  color: rgb(234, 234, 150);
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 20px auto 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.container h3 {
  margin: 20px auto 20px;
}

.container h1 {
  text-align: center;
  font-size: 48px;
  margin: 20px auto 20px;
}

.container p {
  width: 1000px;
  font-size: 14px;
  font-size: inherit;
  margin: 20px auto 20px;
}

.container img {
  display: block;
  max-width: 1000px;
  width: 100%;
  margin: 20px auto 20px;
}
</style>
