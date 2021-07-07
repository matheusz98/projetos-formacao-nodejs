<template>
  <div id="app">
    <input type="text" v-model='clienteMatheus.nome'>
    <input type="text" v-model='clienteMatheus.email'>
    <Cliente :cliente='clienteMatheus' :showIdade='true'/>
    <Cliente :cliente='clienteMatheus' :showIdade='false'/>
    <Cliente :cliente='clienteMatheus' :showIdade='true'/>
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
