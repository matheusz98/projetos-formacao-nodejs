<template>
  <div id="app">
    <h3>Cadastro de usuário</h3>
    <input type="text" placeholder='nome' v-model='nomeField'><br>
    <input type="email" placeholder='email' v-model='emailField'><br>
    <input type="number" placeholder='idade' v-model='idadeField'><br>
    <button @click='cadastrarUsuario'>Cadastrar</button>
    <hr>
    <div v-for='(cliente, index) in clientes' :key='cliente.id'>
      <h4>{{ index }}</h4>
      <Cliente :cliente='cliente'/>
      <hr>
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
      nomeField: '',
      emailField: '',
      idadeField: 0,
      clientes: [
        {
          id: 1,
          nome: 'Matheus Costa',
          email: 'matheus@gmail.com',
          idade: 22
        },
      ]
    }
  },
  components: {
    Cliente,
    //Produto
  },
  methods: {
    cadastrarUsuario: function() {
      this.clientes.push({ nome: this.nomeField, email: this.emailField, idade: this.idadeField, id: Date.now()});
      this.nomeFIeld = '';
      this.emailField = '';
      this.idade = 0;
    }
  }
}
</script>

<style>
</style>
