<template>
    <div>
        <h1>{{ num }} {{ upper(name) }}</h1>
        <small>{{ url }}</small>
    </div>
</template>

<script>
export default {
    props: {
        num: Number,
        name: String,
        url: String
    },

    methods: {
        upper: function(value) {
            const upperCase = value[0].toUpperCase() + value.slice(1);
            return upperCase;
        }
    }
}
</script>

<style>

</style>