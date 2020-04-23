<template>
    <van-tabbar v-model="index" active-color="#07c160" inactive-color="#000">
        <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="bars" to="/list">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart" to="/car">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager" to="personal">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        name: "tabBar",
        data() {
            return {

            }
        },
        computed:{
            index:{
                get(){return this.active},
                set(){}
            },
        },
        props:["active"]
    }
</script>

<style scoped lang="less">

</style>