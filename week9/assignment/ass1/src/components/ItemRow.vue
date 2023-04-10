<script setup>
    const props = defineProps(["item", "index"]);
console.log("the item", props.item);
</script>

<template>
    <tr
    v-bind:class="{even: (index + 1) % 2 === 0, odd: (index + 1) % 2 !== 0}">
        <td>{{item.brand}}</td>
        <td id="tennisplayer">{{item.tennisPlayer}}</td>
        <td>{{item.matches}}</td>
        <td>{{item.description}}</td>
        <td><img v-bind:src="item.image"></td>
        <td>
            <button type="button" v-on:click="$emit('deleteItem', item)">Delete</button>
        </td>
    </tr>
</template>

<style scoped>

</style>