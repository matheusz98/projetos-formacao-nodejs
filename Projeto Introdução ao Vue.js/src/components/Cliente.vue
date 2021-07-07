<template>
    <div id="cliente">
        <input type="text" v-model='nome'>
        <hr>
        <input type="text" v-model='descricao'>
        <h2>{{ nome }}</h2>
        <h3>Descrição: {{ descricao }}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nome: 'Matheus Costa',
            numero: '',
            email: '',
            idade: 22,
            descricao: 'Lorem ipsum'
        }
    }
}
</script>

<style scoped>
    #cliente {
        max-width: 600px;
        height: 120px;
    }
</style>