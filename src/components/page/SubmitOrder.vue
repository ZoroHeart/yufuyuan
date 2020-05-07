<template>
    <div class="container">
        <div class="orderTitle">
            <van-nav-bar
                    title="确认订单"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>
        <div class="orderSite">
            <p><span>李四</span><span>15677777777</span></p>
            <p><i><van-icon name="location-o" /></i><span>湖北省武汉市东西湖区雄楚大道ssssssssss法大师傅撒法发犯得上方法</span></p>
        </div>
        <div class="orderProduct">
            <div class="cartListCss" v-for="(item, index) in cartListArr" :key="index">
                <div class="cartCont">
                    <div class="cartImgCss"><img :src="item.productCover" alt=""></div>
                    <div class="cartMessage">
                        <p>{{item.productName}}   {{item.productInfo}}</p>
                        <p><span>￥{{item.productPrice}}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="orderSelect">
            <div>
                <van-cell title="配送方式" is-link value="快递免邮" @click="showPopup" />
                <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
                    <div></div>
                </van-popup>
            </div>
            <div>
                <van-cell title="发票信息" is-link value="不开发票" @click="showPopup" />
                <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
                    <div></div>
                </van-popup>
            </div>
            <div>
                <van-collapse v-model="activeNames">
                    <van-collapse-item title="支付方式" value="在线支付" name="1">
                        <p>在线支付</p>
                        <p>线下支付</p>
                    </van-collapse-item>
                </van-collapse>
            </div>
            <div>
                <van-collapse v-model="activeNames">
                    <van-collapse-item title="优惠券" value="无可用" name="1">
                        <p>在线支付</p>
                        <p>线下支付</p>
                    </van-collapse-item>
                </van-collapse>
            </div>
            <div>
                <van-cell title="买家留言" is-link  @click="showPopup" />
                <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
                    <div></div>
                </van-popup>
            </div>
        </div>
        <div class="sumMoney">
            <div>
                <van-cell title="商品金额" is-link value="￥112" color="crimson"/>
            </div>
            <div>
                <van-cell title="优惠金额" is-link value="￥-11.2" color="crimson" />
            </div>
            <div>
                <van-cell title="运费" is-link value="￥12" color="crimson" />
            </div>
        </div>
        <div class="cartSubmit">
            <van-submit-bar button-text="提交订单" @submit="onSubmit">
                <div>应付金额：￥1120.2</div>
            </van-submit-bar>
        </div>
    </div>
</template>

<script>
    import cartData from "../../api/cartListdata.json"
    import list_proimg0 from "../../assets/image/product/list_proimg0.jpg"
    import list_proimg1 from "../../assets/image/product/list_proimg1.jpg"
    import list_proimg2 from "../../assets/image/product/list_proimg2.jpg"
    import list_proimg3 from "../../assets/image/product/list_proimg3.jpg"
    import list_proimg4 from "../../assets/image/product/list_proimg4.jpg"
    import list_proimg5 from "../../assets/image/product/list_proimg5.jpg"
    import list_proimg6 from "../../assets/image/product/list_proimg6.jpg"
    import list_proimg7 from "../../assets/image/product/list_proimg7.jpg"
    import list_proimg8 from "../../assets/image/product/list_proimg8.jpg"

    export default {
        name: "SubmitOrder",
        data(){
            return{
                cartListArr:[],
                proimgArr:[list_proimg0,list_proimg1,list_proimg2,list_proimg3,list_proimg4,list_proimg5,list_proimg6,list_proimg7,list_proimg8],

                show: false,

                activeNames: ['1'],

            }
        },
        created(){
            let cartDataArr = cartData.cartData;
            console.log(cartDataArr);
            for(let i=0;i<cartDataArr.length;i++){
                cartDataArr[i].productCover = this.proimgArr[i];
            }
            this.cartListArr = cartDataArr;
        },
        methods:{
            onClickLeft(){
                this.$router.back();
            },
            showPopup() {
                this.show = true;
            },
            onSubmit(){
                console.log("ssssssss");
            }
        },
    }
</script>

<style scoped lang="less">
    .orderSite{
        background-color: #fff;
        border-top: 1px solid #d9cfce;
        color: #888;
        padding-bottom: 0.05rem;
        p:first-of-type{
            position: relative;
            span:first-of-type{
                margin-left: 0.5rem;
                margin-right: 0.6rem;
            }
        }
        p:last-of-type{
            padding: 0 0.2rem;
            i{
                margin-right: 0.05rem;
            }
        }
    }
    .orderProduct{
        background-color: #fff;
        margin-top: 0.2rem;
        padding: 0 0.15rem;
        .cartCont{
            border-bottom: 1px solid #f1f1f1;
            display: flex;
            flex-direction:row;
            flex-wrap: nowrap;
            justify-content:space-between;
            align-items:center;
        }
        .cartImgCss{
            margin-right: 0.2rem;
            img{
                width:1.5rem;
            }
        }
        .cartMessage{
            p:first-of-type{
                font-size: 0.25rem;
            }
            p:last-of-type{
                font-size: 0.3rem;
                color: crimson;
            }
        }
    }
    .orderSelect{
        margin-top: 0.2rem;
    }
    .sumMoney{
        margin-top: 0.2rem;
        margin-bottom: 1rem;
    }
    .van-submit-bar__bar{
        justify-content:space-between;
    }
</style>