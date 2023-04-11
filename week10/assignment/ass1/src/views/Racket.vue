<template>
  <div>
    <h1>{{ racket.brand }} - {{ racket.tennisPlayer }}</h1>
    <p>Matches played: {{ racket.matches }}</p>
    <p>{{ racket.description }}</p>
    <img :src="racket.image" :alt="racket.brand">
    <router-link to="/">Back to home</router-link>
  </div>
</template>

<script>
  import rackets from '../data/tennis-racket.json';

  export default {
    name: 'Racket',
    data() {
      return {
        racket: {}
      };
    },
    mounted() {
      const id = this.$route.params.id;
      this.racket = rackets.find(racket => racket.id === id);
    }
  }
</script>

<style scoped>
  h1 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
  }

  p {
    font-size: 18px;
    margin-top: 10px;
    text-align: center;
  }

  img {
    display: block;
    margin: 20px auto;
    max-width: 400px;
    height: auto;
  }

  router-link {
    display: block;
    text-align: center;
    margin-top: 20px;
    text-decoration: none;
    color: #e16900;
  }
</style>
