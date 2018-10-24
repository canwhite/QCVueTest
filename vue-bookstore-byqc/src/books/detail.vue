<template>
    <div>书目详情</div>
</template>

<style></style>

<script>
    export default{

        //生命周期钩子 从路由中重新把：id参数拿出来
        create(){
            const bookID = this.$router.params.id
        },
        //当复用组件时，相对路由参数的变化作出响应，就用watch对象添加跟踪函数
        watch:{
            '$route' (to,from){
                //对路由变化作出响应


            }
        }
    }


</script>