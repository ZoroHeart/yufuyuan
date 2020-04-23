<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in slides" :key="index">
            <img v-lazy="image.image" width="100%"/>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    export default {
        name: "swipess",
        props:["slides"],
    }
</script>

<style scoped>

</style>