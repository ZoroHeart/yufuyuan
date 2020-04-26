<template>
    <div class="container">
        <div class="base-info base-common" @click="goLogin">
            <div class="user-look">
                <img :src="userLook" alt="">
            </div>
            <div class="user-name">
                <p>{{userName}}</p>
                <p><van-icon name="gem" size="0.4rem"/>会员等级{{userVip}}</p>
            </div>
            <van-icon name="arrow" size="0.5rem" class="ico-set"/>
        </div>
        <div class="message-box">
            <div class="balance-count">
                <p>余额</p><p>￥{{userYE}}</p>
            </div>
            <div class="integral-count">
                <p>积分</p><p>{{userJF}}</p>
            </div>
            <div class="discounts-count">
                <p>优惠券</p><p>{{userYHJ}}张</p>
            </div>
        </div>
        <div class="orders-box">
            <div class="orders-title">
                <p><van-icon name="orders-o" size="0.3rem"/>我的订单</p>
                <p>全部订单<van-icon name="arrow" size="0.3rem"/></p>
            </div>
            <van-grid :column-num="5">
                <van-grid-item icon="balance-pay" text="待付款" />
                <van-grid-item icon="logistics" text="待发货" />
                <van-grid-item icon="gift-o" text="待收货" />
                <van-grid-item icon="comment-o" text="待评价" />
                <van-grid-item icon="refund-o" text="退款" />
            </van-grid>
        </div>
        <div class="">
            <van-grid :column-num="3">
                <van-grid-item icon="bag-o" text="我的团购" />
                <van-grid-item icon="point-gift-o" text="我的抽奖" />
                <van-grid-item icon="underway-o" text="我的秒杀" />
                <van-grid-item icon="shop-collect-o" text="商品收藏" />
                <van-grid-item icon="service-o" text="客服中心" />
                <van-grid-item icon="setting-o" text="设置" />
            </van-grid>
        </div>
        <tabBar :active="3" class=""></tabBar>
    </div>
</template>

<script>
    import tabBar from "../base/tabBar.vue"
    import userLook from "../../assets/image/icontouxiang.png"
    export default {
        name: "Personal",
        data(){
            return {
                userLook,
                userMsg:0,
                userName:"未登录,点击登录",
                userVip:0,
                userYE:0,
                userJF:0,
                userYHJ:0
            }
        },
        components:{
            tabBar
        },
        mounted() {
            let logname = sessionStorage.getItem("names");
            let logVip = sessionStorage.getItem("vips");
            let logYE = sessionStorage.getItem("balances");
            let logJF = sessionStorage.getItem("integrals");
            let logYHJ = sessionStorage.getItem("discountCouponNums");

            console.log(logname);
            if(logname != "" && logname != null){
                this.userName = logname;
                this.userVip = logVip;
                this.userYE = logYE;
                this.userJF = logJF;
                this.userYHJ = logYHJ;
                this.userMsg = 1;
            }else{
                this.userName="未登录,点击登录";
                this.userVip=0;
            }
        },
        methods:{
            goLogin(){
                if(this.userMsg ==0){
                    this.$router.push('/login');
                }else{
                    this.$router.push('/updateMessage');
                }
            }
        }
    }
</script>

<style scoped lang="less">

.container{
    .base-common{
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

   .base-info{
       background-color: #fff;
       padding: 0.5rem 0.5rem;
       .user-look{
           width: 1rem;
           height: 1rem;
           margin-right: 0.3rem;
           img{
               width: 100%;
               height: 100%;
               border-radius: 50%;
           }
       }
       .user-name{
           p{
               padding: 0;
               margin: 0.1rem;
           }
           p:first-of-type{
               font-size: 0.3rem;
           }
           p:last-of-type{
               color: #ec9813;
               i{
                   vertical-align: middle;
               }

           }
       }
       .ico-set{
           position: absolute;
           width: 0.5rem;
           height: 0.5rem;
           right: 0.3rem;
           top: 0.7rem;
       }
   }
    .message-box{
        background-color: #fff;
        height: 1.6rem;
        width: 100%;
        .base-common();
        div{
            width: 33%;
            text-align: center;
            p:first-of-type{
                font-size: 0.25rem;
                margin: 0.2rem 0;
            }
            p:last-of-type{
                font-size: 0.3rem;
                margin: 0.2rem 0;
                color: #ec9813;
            }
        }
    }
    .orders-box{
        background-color: #fff;
        margin: 0.2rem 0;
        .orders-title{
            .base-common();
            font-size: 0.27rem;
            p:first-of-type{
                width: 70%;
                padding-left: 0.2rem;
                i{
                    vertical-align: text-top;
                }
            }
            p:last-of-type{
                width: 29%;
                text-align: center;
                i{
                    vertical-align: text-top;
                }
            }
        }
    }
}

</style>