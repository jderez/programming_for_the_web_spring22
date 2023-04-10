<script setup>
import { reactive } from 'vue';
import ItemRow from './components/ItemRow.vue';
const rackets = [
  {
    brand: "Babolat",
    tennisPlayer: "Rafa",
    matches: "4",
    description: "With their Hybrid Beam Construction, the Babolat Pure Strike series offers more control and feel than the Pure Drive and Aero franchises. These racquets also offer impressive stability for the weight along with FSI Technology, which optimizes string spacing to enhance spin and power.",
    image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwd547a302/images/63424901/Rebel_63424901_orangepurple_hi-res.jpg?sw=300&sh=300&sm=fit&q=60"
  }, {
    brand: "Babolat",
    tennisPlayer: "Rafa",
    matches: "120",
    description: "With their Hybrid Beam Construction, the Babolat Pure Strike series offers more control and feel than the Pure Drive and Aero franchises. These racquets also offer impressive stability for the weight along with FSI Technology, which optimizes string spacing to enhance spin and power.",
    image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw3f9963b4/images/57994101/Rebel_57994101_yellowblack_hi-res.jpg?sw=300&sh=300&sm=fit&q=60"
  }, {
    brand: "Wilson",
    tennisPlayer: "Fritz",
    matches: "4",
    description: "Offering a tantalizing mix of precision, feel, control, and spin, these rackets are extremely popular the world over. Slightly less powerful than the Ultra, Burn, or Clash rackets, the Wilson Blades allow for players with full swings to maximize their racket head speed and attack the ball with confidence",
    image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw515e2cd0/images/63584101/Rebel_63584101-00_black_hi-res.jpg?sw=300&sh=300&sm=fit&q=60"
  }, {
    brand: "Wilson",
    tennisPlayer: "Djoko",
    matches: "3",
    description: "Offering a tantalizing mix of precision, feel, control, and spin, these rackets are extremely popular the world over. Slightly less powerful than the Ultra, Burn, or Clash rackets, the Wilson Blades allow for players with full swings to maximize their racket head speed and attack the ball with confidence.",
    image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwf7f0b949/images/63660601/Rebel_63660601_hi-res.jpg?sw=300&sh=300&sm=fit&q=60"
  }, 
];              

const newRacket = {
  brand: "",
  tennisPlayer: "",
  matches: null,
  description: "", 
  image: "",
};

const state = reactive({rackets: rackets, newRacket: newRacket});
// const stae = reactive({racket, newRacket}); is the shortened version
function submitHandler() {
  state.rackets.push ({
    brand: state.newRacket.brand,
    tennisPlayer: state.newRacket.tennisPlayer,
    matches: state.newRacket.matches,
    description: state.newRacket.description, 
    image: state.newRacket.image,
  });

  state.newRacket.brand = "";
  state.newRacket.tennisPlayer = "";
  state.newRacket.matches = "";
  state.newRacket.description = "";
  state.newRacket.image = "";
};

function handleDelete(itemToDelete) {
  console.log(itemToDelete.id, itemToDelete.brand);
  state.rackets = state.rackets.filter((itemToCheck) => {
    return itemToDelete !== itemToCheck;
  });
}
</script>

<template>
  <div class="app-wrapper">
    <div class="container" v-cloak>
      <h2>My favorite tennis rackets</h2>
      <table class="table">
          <thead class="header">
              <th>Brand</th>
              <th>Player</th>
              <th>Matches</th>
              <th>Description</th>
              <th>Image</th>
          </thead>
          <tbody>
              <ItemRow 
              v-for="(rackets, index) in state.rackets"
              v-bind:item="rackets"
              v-bind:key="index"
              v-bind:index="index"
              v-on:delete-item="handleDelete"/>
          </tbody>
      </table>
    </div>
        
    <form v-on:submit.prevent="submitHandler" class="new-racket">
      <fieldset>
        <legend>Add a game to the collection</legend>
        <div>
            <label for="brand">Brand</label>
            <input id="brand" type="text" v-model="newRacket.brand">
        </div>

        <div>
            <label for="tennisplayer">Player</label>
            <input id="tennisplayer" type="text" v-model="newRacket.tennisPlayer">
        </div>

        <div>
            <label for="matches">Matches</label>
            <input id="matches" type="text" v-model="newRacket.matches">
        </div>

        <div>
            <label for="description">Description</label>
            <input id="description" type="text" v-model="newRacket.description">
        </div>

        <div>
            <label for="image">Image</label>
            <input id="image" type="text" v-model="newRacket.image">
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<style scoped>
* {
    font-family: "futura", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
    color: #0f0057;
    letter-spacing: 0.1px;
    margin-top: 20px;
}

.app-wrapper {
  padding: 20px;
}

h1 {
    font-family: "Impact";
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    margin-bottom: 20;
}

h2, legend {
    font-family: "futura", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
}

table {
    text-align: center;
    border-collapse: collapse;
}

thead {
    background-color: #f99ed2;
    font-family: "freight-macro-pro", serif;
    font-weight: 400;
    font-style: normal;
}

img {
    padding: 15px;
}

fieldset {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
</style>