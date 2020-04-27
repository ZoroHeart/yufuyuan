<template>
    <div>
        <van-card v-for="(item, index) in productData" :key="index"
                  tag=""
                  :price="item.reducedPrice"
                  :desc="item.abstract"
                  :title="item.name"
                  :thumb="item.imgUrl"
                  :origin-price="item.price"
                  @click="goProductDetail"
        />
    </div>

</template>

<script>
    export default {
        name: "product",
        props:["productData"],
        methods:{
            goProductDetail(){
                this.$router.push('/productDetail');
            }
        }
    }
</script>

<style scoped>

</style>