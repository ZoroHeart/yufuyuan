<template>
    <div>
        <div class="cartTitle">
            <van-nav-bar
                    title="购物车"
                    left-text="返回"
                    right-text="编辑"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>
        <div>
            <div class="" v-for="">

            </div>
        </div>
        <tabBar :active="2"></tabBar>
    </div>
</template>

<script>
    import tabBar from "../base/tabBar.vue"
    export default {
        name: "Car",
        components:{
            tabBar
        }
    }
</script>

<style scoped>

</style>