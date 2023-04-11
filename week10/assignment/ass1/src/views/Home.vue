<template>
  <div>
    <h1>Tennis Racket Collection</h1>
    <ul>
      <li v-for="racket in rackets" :key="racket.id">
        <router-link :to="'/racket/' + racket.id">{{ racket.brand }} - {{ racket.tennisPlayer }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import rackets from '../data/tennis-racket.json';

  export default {
    name: 'Home',
    data() {
      return {
        rackets
      };
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

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 30px;
  }

  li {
    margin-bottom: 10px;
    font-size: 18px;
    text-align: center;
  }

  router-link {
    text-decoration: none;
    color: #e16900;
  }
</style>
