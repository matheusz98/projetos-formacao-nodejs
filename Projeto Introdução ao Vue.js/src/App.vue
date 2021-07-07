<template>
  <div id="app">
    <input type="text" v-model='nomeMatheus'>
    <Cliente :cliente='clienteMatheus'/>
    <Cliente :nome='nomeMatheus'/>
    <Cliente nome='Matheus Costa' email='email@gmail.com' idade='22' descricao='asaiuheab'/>
    <Cliente nome='Jão' email='yjfsaf@gmail.com' idade='31' descricao='asajxaiohnr'/>
    <Cliente nome='Pedruga' email='sfdsadf@gmail.com' idade='55' descricao='aoxjaoir'/>
  </div>
</template>

<script>
import Cliente from './components/Cliente';
//import Produto from './components/Produto';
export default {
  name: 'App',
  data() {
    return {
      nomeMatheus: 'Matheus C.Costa',
      clienteMatheus: {
        nome: 'Matheus Costa',
        email: 'matheus@gmail.com',
        idade: 22
      }
    }
  },
  components: {
    Cliente,
    //Produto
  }
}
</script>

<style>
</style>
