<template>
    <div>
        <Child>
        </Child>
    </div>
</template>
<script>
import Child from "./child"
import Vue from "vue"
export default {
    name: "parent",
    mounted() {
 console.log(this.$store.state.count)
    },
    components: {
        Child,
    },
}
</script>