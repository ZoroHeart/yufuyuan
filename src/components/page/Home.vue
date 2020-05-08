<template>
    <div class="homeContainer">
        <div class="titleSearch">
            <div class="selectCity">
                <div class="cityBtn" @click="showPopup">{{city}}<van-icon name="arrow-down" size="0.3rem" color="#07c160"/></div>
                <van-popup v-model="showPicker" position="bottom" :style="{ height: '50%' }">
                    <van-picker
                            show-toolbar
                            :columns="columns"
                            @cancel="showPicker = false"
                            @confirm="onConfirm"
                            @change="onChange"
                    />
                </van-popup>
            </div>
            <div class="search-box">
                <form action="/">
                    <van-search
                            v-model="value"
                            placeholder="请输入搜索关键词"
                            @search="onSearch"
                            @cancel="onCancel"
                    />
                </form>
            </div>
            <div class="newMessageBtn">
                <van-icon name="chat-o" size="0.5rem" color="#07c160"/>
            </div>
        </div>
        <div class="banner-box">
            <swipess :slides="slides"></swipess>
        </div>
        <div class="">
            <van-grid :column-num="4">
                <van-grid-item :icon="homeGridIcon[0]" to="/" text="每日签到" />
                <van-grid-item :icon="homeGridIcon[1]" to="/voucherCenter" text="充值有礼" />
                <van-grid-item :icon="homeGridIcon[2]" text="限时秒杀" />
                <van-grid-item :icon="homeGridIcon[3]" text="团购推荐" />
                <van-grid-item :icon="homeGridIcon[4]" text="新品上市" />
                <van-grid-item :icon="homeGridIcon[5]" text="我要兑换" />
                <van-grid-item :icon="homeGridIcon[6]" text="幸运抽奖" />
                <van-grid-item :icon="homeGridIcon[7]" text="我的订单" />
            </van-grid>
        </div>
        <div style="margin-bottom: 1rem">
            <product :productData="productDataList"></product>
        </div>
        <tabBar :active="0"></tabBar>
    </div>
</template>

<script>
    import tabBar from "../base/tabBar.vue"
    import swipess from "../base/swipess.vue"
    import product from "../base/product.vue"
    import {getSlidesData,getProductData} from "../../api"
    import banner0 from "../../assets/image/banner/phbanner0.png"
    import banner1 from "../../assets/image/banner/phbanner1.png"
    import banner2 from "../../assets/image/banner/phbanner2.png"
    import banner3 from "../../assets/image/banner/phbanner3.png"
    import homeGridIcon0 from "../../assets/image/icon/icon-b1.png"
    import homeGridIcon1 from "../../assets/image/icon/icon-b2.png"
    import homeGridIcon2 from "../../assets/image/icon/icon-b3.png"
    import homeGridIcon3 from "../../assets/image/icon/icon-b4.png"
    import homeGridIcon4 from "../../assets/image/icon/icon-b5.png"
    import homeGridIcon5 from "../../assets/image/icon/icon-b6.png"
    import homeGridIcon6 from "../../assets/image/icon/icon-b7.png"
    import homeGridIcon7 from "../../assets/image/icon/icon-b8.png"
    import citya from "../../api/city"
    import { Toast } from 'vant';
    import productImg0 from "../../assets/image/product/grouplist0.jpg"
    import productImg1 from "../../assets/image/product/grouplist1.jpg"
    import productImg2 from "../../assets/image/product/grouplist2.jpg"
    import productImg3 from "../../assets/image/product/grouplist3.jpg"
    import productImg4 from "../../assets/image/product/grouplist4.jpg"
    import productImg5 from "../../assets/image/product/grouplist5.jpg"
    import productImg6 from "../../assets/image/product/grouplist6.jpg"
    import productImg7 from "../../assets/image/product/grouplist7.jpg"
    import productImg8 from "../../assets/image/product/grouplist8.jpg"
    import productImg9 from "../../assets/image/product/grouplist9.jpg"

    const citys = citya;
    export default {
        name: "Home",
        data(){
            return{
                productImg:[productImg0,productImg1,productImg2,productImg3,productImg4,productImg5,productImg6,productImg7,productImg8,productImg9],
                homeGridIcon:[homeGridIcon0,homeGridIcon1,homeGridIcon2,homeGridIcon3,homeGridIcon4,homeGridIcon5,homeGridIcon6,homeGridIcon7],
                slidesImg:[banner0,banner1,banner2,banner3],
                slides:[],
                productDataList:[],
                city: '城市',
                showPicker: false,
                columns: [{ values: Object.keys(citys) }, { values: citys['浙江'] }],
                value:"",
            }
        },
        components:{tabBar,swipess,product},
        methods:{
            showPopup() {
                this.showPicker = true;
            },
            onConfirm(value) {
                this.city = value[1];
                this.showPicker = false;
            },
            onChange(picker, values) {
                picker.setColumnValues(1, citys[values[0]]);
            },
            onSearch(val) {
                Toast(val);
            },
            onCancel() {
                Toast('取消');
            },
        },
        async created() {
            let slideData = await getSlidesData();
            for(var i=0;i<slideData.Slides.length;i++){
                slideData.Slides[i].image = slideData.Slides[i].image + this.slidesImg[i];
            }
            this.slides = slideData.Slides;

            let productData = await getProductData();
            for(var j=0;j<productData.data.length;j++){
                productData.data[j].imgUrl = this.productImg[j];
            }
            this.productDataList = productData.data;
            console.log(this.productDataList);
        }
    }
</script>

<style scoped lang="less">
.flexBase{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.flexVertical{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}
.homeContainer{
    .titleSearch{
        background-color: #fff;
        margin-bottom: 0.2rem;
        .flexBase();
        .selectCity{
            width: 20%;
            color: #07c160;
            .flexVertical();
        }
        .search-box{
            width: 64%;
        }
        .newMessageBtn{
            width: 15%;
            .flexVertical();
        }
    }



}
</style>