<template>
    <h1>{{title}}</h1>
</template>

<script type="text/javascript">
    export default {
        el: '#app', // 绑定（mount）到DOM上
        data() {
            return {
                title: "Hello"
            }
        },
        methods: {
            randomTitle() {
                this.title = 'Hello ' + ['China', 'World', 'Universe'][Math.floor(Math.random() * 2.999)]
            },
            destroyVm() {
                this.$destroy()
            }
        },
        beforeCreate() {
            console.log("before create")
        },
        created() {
            console.log("created")
        },
        beforeMount() {
            console.log("before mount")
        },
        mounted() {
            console.log("mounted")
        },
        beforeUpdate() {
            console.log("before update")
        },
        updated() {
            console.log("updated")
        },
        beforeDestroy() {
            console.log("before destroy")
        },
        destroyed() {
            console.log("destroyed")
        },
    }
</script>