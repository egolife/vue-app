<template>
    <div class="notification">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello world'
            };
        }
    }
</script>

<style lang="scss">
    .notification{
        background-color: red;
    }
</style>