<template>
    <div class="container">
        <div class="title">
            <div class="title-back">
                <van-icon name="arrow-left" color="#07c160" size="0.5rem" @click="goback"/>
            </div>
            <div class="title-tab">
                <p>商品</p>
                <p>详情</p>
                <p>评价</p>
            </div>
            <div class="title-car">
                <van-icon name="cart-o" color="#07c160" size="0.5rem" @click="goShoppingCar"/>
            </div>
        </div>
        <div class="">
            <swipess :slides="slides"></swipess>
        </div>
        <div class="detail-css">
            <div class="">
                <p>￥{{}}</p>
                <p>￥{{}}</p>
                <p>累计销量：{{}}件</p>
                <p><van-icon name="friends-o" color="" size="0.4rem"/></p>
            </div>
            <div class="productName"></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
    import swipess from "../base/swipess.vue"
    import {getSlidesData} from "../../api";
    import banner0 from "../../assets/image/banner/phbanner0.png"
    import banner1 from "../../assets/image/banner/phbanner1.png"
    import banner2 from "../../assets/image/banner/phbanner2.png"
    import banner3 from "../../assets/image/banner/phbanner3.png"
    export default {
        name: "productDetail",
        components:{swipess},
        data(){
            return {
                slidesImg:[banner0,banner1,banner2,banner3],
                slides:[],
            }
        },
        async created() {
            let slideData = await getSlidesData();
            for(var i=0;i<slideData.Slides.length;i++){
                slideData.Slides[i].image = slideData.Slides[i].image + this.slidesImg[i];
            }
            this.slides = slideData.Slides;
        },
        methods:{
            goback(){
                this.$router.back();
            },
            goShoppingCar(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped lang="less">
.container{
    .title{
        display: flex;
        flex-wrap: nowrap;
        justify-content:space-between;
        background-color: #fff;
        .title-back{
            width: 15%;
            display: flex;
            flex-direction:row;
            flex-wrap: nowrap;
            justify-content:center;
            align-items:center;
        }
        .title-tab{
            width: 45%;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            p{
                width: 32%;
                text-align: center;
            }
        }
        .title-car{
            width: 15%;
            display: flex;
            flex-direction:row;
            flex-wrap: nowrap;
            justify-content:center;
            align-items:center;
        }
    }
}
</style>