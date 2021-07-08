<template>
  <div id="app">

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      pokemons: []
    }
  },

  created: function() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(res => {
      this.pokemons = res.data.results;
    })
  }
}
</script>

<style>

</style>
