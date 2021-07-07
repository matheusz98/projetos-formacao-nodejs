<template>
    <div id="cliente">
        <h4>Nome: {{ cliente.nome }}</h4>
        <p>Email: {{ cliente.email }}</p>
        <p>Idade: {{ cliente.idade }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        nome: String,
        email: String,
        idade: Number,
        cliente: Object
    }
}
</script>

<style scoped>
    #cliente {
        background: #ECE5E3;
        max-width: 600px;
        height: 250px;
        padding: 2rem;
        margin: 2rem;
    }
</style>