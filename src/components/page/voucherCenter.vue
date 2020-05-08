<template>
    <div>
        <div class="orderTitle">
            <van-nav-bar
                    title="充值有礼"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>
        <div class="banner-box">
            <swipess :slides="slidesImg"></swipess>
        </div>
        <div class="selectMoney">
            <p class="selectMoneyTitle">选择金额（您可以选择￥10至￥1000之间的任何金额）</p>
            <div class="selectNumCss">
                <p>￥50</p>
                <p>￥100</p>
                <p>￥300</p>
                <p>￥500</p>
                <p>￥800</p>
                <p>￥1000</p>
            </div>
            <div class="inputText">
                <input type="text" placeholder="输入自定义金额">
            </div>
            <div class="voucherBtn"><button>立即充值</button></div>
        </div>
    </div>
</template>

<script>
    //充值中心
    import swipess from "../base/swipess.vue"
    import czbanner0 from "../../assets/image/banner/ecofarmimg0.jpg"
    import czbanner1 from "../../assets/image/banner/ecofarmimg1.jpg"
    import czbanner2 from "../../assets/image/banner/ecofarmimg2.jpg"
    import czbanner3 from "../../assets/image/banner/ecofarmimg3.jpg"
    export default {
        name: "voucherCenter",
        data(){
            return{
                slidesImg:[
                    {"image":czbanner0},
                    {"image":czbanner1},
                    {"image":czbanner2},
                    {"image":czbanner3},
                ],

            }
        },
        components:{swipess},
        created() {

        },
        methods:{
            onClickLeft(){
                this.$router.back();
            },
        }
    }
</script>

<style scoped lang="less">
    .orderTitle{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999;
    }
    .banner-box{
        margin-top: 0.8rem;
    }
    .selectMoney{
        background-color: #fff;
        .selectMoneyTitle{
            margin: 0;
            font-size: 0.25rem;
            padding: 0.2rem 0 0.2rem 0.2rem;
        }
        .selectNumCss{
            padding: 0.2rem 0.2rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            p{
                margin: 0;
                width:28%;
                height: 0.8rem;
                line-height: 0.8rem;
                text-align: center;
                border: 1px solid #999;
                border-radius: 5px;
                font-size: 0.35rem;
                margin-bottom: 0.3rem;
            }
        }
        .inputText{
            margin:0 0 0.2rem 0;
            padding-bottom: 0.3rem;
            text-align: center;
            input{
                height: 0.8rem;
                width: 85%;
                border-radius: 5px;
                border: 1px solid #999;
                padding-left: 0.2rem;
            }
        }
        .voucherBtn{
            text-align: center;
            position: absolute;
            width: 100%;
            button{
                border-radius: 5px;
                border: 1px solid #00a157;
                width: 88%;
                padding: 0.2rem 0;
                color: #fff;
                background-color: #00a157;
            }
        }
    }
</style>