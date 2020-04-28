<template>
    <div>
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
                <div class="detailPrice">
                    <p>￥{{prices}}</p>
                    <p>￥{{reducedPrice}}</p>
                    <p>累计销量：{{cumulativeSales}}件</p>
                    <p><van-icon name="friends-o" color="" size="0.5rem"/></p>
                </div>
                <div class="productName">{{productName}}</div>
                <div class="productIntro">{{intro}}</div>
                <div class="getCoupon">
                    <span>领券</span>
                    <span>满78减5</span>
                    <span>满158减10</span>
                    <span>满328减20</span>
                    <span><van-icon name="ellipsis" size="0.5rem"/></span>
                </div>
                <div class="productLabel">
                    <span><van-icon name="passed" color="#00a157" size="0.35rem"/>包邮</span>
                    <span><van-icon name="passed" color="#00a157" size="0.35rem"/>不支持7天退换</span>
                </div>
            </div>
            <div class="numAddress">
                <div class="selectNum" @click="sukShowBtn">
                    <span>已选{{selectNum}}件</span>
                    <span><van-icon name="ellipsis" size="0.5rem"/></span>
                </div>
                <div>
                    <van-sku
                            v-model="sukShow"
                            :sku="sku"
                            :goods="goods"
                            :goods-id="goodsId"
                            :quota="quota"
                            :quota-used="quotaUsed"
                            :hide-stock="sku.hide_stock"
                            :message-config="messageConfig"
                            @buy-clicked="onBuyClicked"
                            @add-cart="onAddCartClicked"
                            :style="{ height: '85%' }"
                    />
                </div>
                <div class="selectAddress">
                    <span>送至重庆</span>
                    <span><van-icon name="ellipsis" size="0.5rem"/></span>
                </div>
            </div>
            <div class="evaluateBox">
                <div class="evaluateTitle">商品评价({{evaluateNum}})</div>
                <div class="evaluateList" v-for="(item, index) in evaluateArr" :key="index">
                    <div class="evaluateUser">
                        <span><img :src="headPortrait" alt=""></span>
                        <span>{{item.userName}}</span>
                        <span>{{item.evaluateTime}}</span>
                    </div>
                    <div class="evaluateCont">{{item.evaluateText}}</div>
                </div>
            </div>
            <div class="spDetail">
                <div></div>
            </div>
        </div>
        <div>
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
                <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
                <van-goods-action-button
                        type="warning"
                        text="加入购物车"
                        @click="onClickButton"
                />
                <van-goods-action-button
                        type="danger"
                        text="立即购买"
                        @click="onClickButton"
                />
            </van-goods-action>
        </div>
    </div>
</template>

<script>
    import swipess from "../base/swipess.vue"
    import {getSlidesData} from "../../api";
    import productDetail from "../../api/productDetail.json"
    import sukData from "../../api/sku.json"
    import headPortraits from "../../assets/image/icontouxiang.png"
    import banner0 from "../../assets/image/banner/phbanner0.png"
    import banner1 from "../../assets/image/banner/phbanner1.png"
    import banner2 from "../../assets/image/banner/phbanner2.png"
    import banner3 from "../../assets/image/banner/phbanner3.png"
    export default {
        name: "productDetail",
        components:{swipess},
        data(){
            return {
                slidesImg:[banner0,banner1,banner2,banner3],//图片
                slides:[],
                prices:0,//价格
                reducedPrice:0,//优惠价
                cumulativeSales:0,//数量
                productName:"",//商品名称
                intro:"",//商品简介
                selectNum:0,//选择商品数量
                evaluateNum:0,//评价数量
                headPortrait:"",
                evaluateArr:[],

                sukShow: false,
                sku: sukData,
                goods: {
                    // 数据结构见下方文档
                },
                messageConfig: {
                    // 数据结构见下方文档
                },
            }
        },
        async created() {
            let slideData = await getSlidesData();
            for(var i=0;i<slideData.Slides.length;i++){
                slideData.Slides[i].image = slideData.Slides[i].image + this.slidesImg[i];
            }
            this.slides = slideData.Slides;

            this.prices=productDetail.price;//价格
            this.reducedPrice=productDetail.reducedPrice;//优惠价
            this.cumulativeSales=productDetail.cumulativeSales;//数量
            this.productName=productDetail.productName;//商品名称
            this.intro=productDetail.intro;//商品简介
            this.selectNum=0;//选择商品数量
            this.evaluateNum=0;//评价数量
            this.evaluateArr=productDetail.evaluation;
            this.headPortrait = headPortraits;
        },
        methods:{
            goback(){
                this.$router.back();
            },
            goShoppingCar(){
                this.$router.push('/car');
            },
            sukShowBtn(){
                this.sukShow = true;
            },
            onClickIcon() {

            },
            onClickButton() {

            },
        }
    }
</script>

<style scoped lang="less">
.container{
    margin-bottom: 1rem;
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
    .detail-css{
        .detailPrice{
            background-color: #fff;
            display: flex;
            flex-direction:row;
            flex-wrap: nowrap;
            justify-content:space-between;
            align-items:center;
            height: 0.8rem;
            p:first-of-type{
                font-size: 0.4rem;
                color:#990000;
                margin-left: 0.2rem;
            }
            p:nth-of-type(2){
                text-decoration:line-through;
                color: #999999;
            }
            p:last-of-type{
                margin-right: 0.1rem;
            }
        }
        .productName{
            background-color: #fff;
            color: #666666;
            font-size: 0.3rem;
            padding: 0 0.2rem;
        }
        .productIntro{
            font-size: 0.25rem;
            padding: 0.1rem 0.2rem;
            background-color: #fff;
            color: #888888;
        }
        .getCoupon{
            background-color: #fff;
            display: flex;
            flex-direction:row;
            flex-wrap: nowrap;
            justify-content:space-between;
            align-items:center;
            height: 0.8rem;
            padding: 0 0.2rem;
            border-top:1px solid #f2f2f2;
            span{
                font-size: 0.25rem;
                padding: 2px 8px;
                background: #00a157;
                color: #fff;
            }
            span:first-of-type{
                background: #fff;
                color: #555555;
            }
            span:last-of-type{
                background: #fff;
                color: #555555;
            }
        }
        .productLabel{
            background-color: #fff;
            padding-bottom: 0.2rem;
            span{
                margin: 0 0.3rem;
                i{
                    vertical-align: middle;
                }
            }
        }
    }
    .numAddress{
        background-color: #fff;
        margin:0.25rem 0;
        padding: 0 0.2rem;
        .selectNum{
            display: flex;
            flex-direction:row;
            flex-wrap: nowrap;
            justify-content:space-between;
            align-items:center;
            height: 0.8rem;
        }
        .selectAddress{
            display: flex;
            flex-direction:row;
            flex-wrap: nowrap;
            justify-content:space-between;
            align-items:center;
            height: 0.8rem;
        }
    }
    .evaluateBox{
        background-color: #fff;
        margin:0.25rem 0;
        padding: 0 0.2rem;
        .evaluateTitle{
            padding: 0.25rem 0;
            border-bottom: 1px solid #f2f2f2;
        }
        .evaluateList{
            border-bottom: 1px solid #f2f2f2;
            padding: 0.2rem 0;
            .evaluateUser{
                span:first-of-type{
                    display: inline-block;
                    width: 0.6rem;
                    height: 0.6rem;
                    border-radius: 50%;
                    vertical-align: middle;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
                span:nth-of-type(2){
                    display: inline-block;
                    padding: 0.1rem 0;
                    margin-left: 0.1rem;
                    color: #999999;
                }
                span:last-of-type{
                    float: right;
                    margin-top: 0.17rem;
                    color: #999999;
                }
            }
        }
    }
}
</style>