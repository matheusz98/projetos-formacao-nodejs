<template>
  <div id="app">
    <div v-for='(cliente, index) in clientes' :key='cliente.id'>
      <h4>{{ index }}</h4>
      <Cliente :cliente='cliente'/>
      <hr>
      <h4>Edição de dados: </h4>
      <input type="text" v-model='cliente.nome'>
      <input type="text" v-model='cliente.email'>
    </div>
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
      },
      clientes: [
        {
          id: 1,
          nome: 'Matheus Costa',
          email: 'matheus@gmail.com',
          idade: 22
        },

        {
          id: 2,
          nome: 'Antônio Silva',
          email: 'antoniosilva@gmail.com',
          idade: 37
        },

        {
          id: 3,
          nome: 'Igor Ferreira',
          email: 'igorferreira@gmail.com',
          idade: 28
        },
      ]
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
