<template>
    <div :class="{ 'cliente': !isPremium, 'cliente-premium': isPremium }">
        <h4>Nome: {{ cliente.nome }}</h4>
        <p>Email: {{ cliente.email | processarEmail}}</p>
        <p v-if='showIdade === true'>Idade: {{ cliente.idade }}</p>
        <p v-else>O usuário escondeu a idade.</p>
        <button @click='mudarCor'>Mudar cor</button>
        <button @click='emitirEventoDelete'>Deletar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPremium: false
        }
    },
    props: {
        cliente: Object,
        showIdade: Boolean
    },
    methods: {
        mudarCor: function(){
            this.isPremium = !this.isPremium;
        },
        emitirEventoDelete: function() {
            this.$emit('meDelete', { idDoCliente: this.cliente.id, component: this});
        }
    },
    filters: {
        processarEmail: function(value) {
            return value.toUpperCase();
        }
    }
}
</script>

<style scoped>
    .cliente {
        background: #ECE5E3;
        max-width: 600px;
        height: 250px;
        padding: 2rem;
        margin: 2rem;
    }

    .cliente-premium {
        background: purple;
        color: black;
    }
</style>