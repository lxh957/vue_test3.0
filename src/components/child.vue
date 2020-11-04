<template>
    <div>
        <GrandChild></GrandChild>
    </div>
</template>
<script>
import GrandChild from "./grandChid"
export default {
    data() {
        return {
            name: "hanbao",
            fullname: {//子组件定义值
                firstname: 'aaa',
                lastname: 'bbb',
            },
            count: 100
        }
    },
    methods: {
    },
    mounted() {
      
    },
    components: {
        GrandChild
    }
}
</script>