<script setup>
    const props = defineProps(["camelidName", "camelidBinomial", "camelidOrder", "camelidFamily", "camelidGenus", "camelidSpecies", "camelidImage"])
</script>

<template>
    <tr>
        <td>{{ props.camelidName }}</td>
        <td>{{ props.camelidBinomial }}</td>
        <td>{{ props.camelidOrder }}</td>
        <td>{{ props.camelidFamily }}</td>
        <td>{{ props.camelidGenus }}</td>
        <td>{{ props.camelidSpecies }}</td>
        <td><img class="camelid-img" v-bind:src="camelidImage"></td>
      </tr>
</template>

<style scoped>
.camelid-img {
    max-width: 125px;
}

* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

tr {
    text-align: center;
}

td {
    padding: 30px;
    border: 1px solid black;
    border-radius: 10px;
}

img {
    max-width: 100px;
}
</style>