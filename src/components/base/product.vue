<template>
    <div>
        <van-card v-for="(item, index) in productData" :key="index"
                  tag=""
                  :price="item.reducedPrice"
                  :desc="item.abstract"
                  :title="item.name"
                  :thumb="item.imgUrl"
                  :origin-price="item.price"
        />
    </div>

</template>

<script>
    export default {
        name: "product",
        props:["productData"],
    }
</script>

<style scoped>

</style>