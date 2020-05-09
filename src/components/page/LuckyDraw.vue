<template>
    <div class="container">
        <div class="drawTitle">
            <van-nav-bar
                    title="我的抽奖"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>
        <div class="tabCont">
            <van-tabs v-model="active" title-active-color="#07c160" color="#07c160">
                <van-tab title="进行中">
                    <div class="drawProduct">
                        <div class="drawListCss" v-for="(item, index) in cartListArr" :key="index">
                            <div class="drawState">待抽奖</div>
                            <div class="drawCont">
                                <div class="drawImgCss"><img :src="item.productCover" alt=""></div>
                                <div class="drawMessage">
                                    <p>{{item.productName}}   {{item.productInfo}}</p>
                                    <p><span>￥{{item.productPrice}}</span></p>
                                    <span class="drawTime">抽奖时间：02-07 18:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="已结束">已结束</van-tab>
            </van-tabs>
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
        name: "LuckyDraw",
        data() {
            return {
                active: 2,
                cartListArr:[],
                proimgArr:[list_proimg0,list_proimg1,list_proimg2,list_proimg3,list_proimg4,list_proimg5,list_proimg6,list_proimg7,list_proimg8],

            };
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
        }
    }
</script>

<style scoped lang="less">
.drawTitle{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
}
.tabCont{
    margin-top: 0.8rem;
    background-color: #fff;
    color: #888;
    padding-bottom: 0.05rem;
    .drawProduct{
        margin-top: 0.2rem;
        padding: 0 0.15rem;
        .drawListCss{
            .drawState{
                font-size: 0.25rem;
                text-align: right;
                padding: 0.1rem 0;
                color: #07c160;
            }
            .drawCont{
                border-bottom: 1px solid #f1f1f1;
                display: flex;
                flex-direction:row;
                flex-wrap: nowrap;
                justify-content:space-between;
                align-items:center;
            }
            .drawImgCss{
                margin-right: 0.2rem;
                img{
                    width:1.5rem;
                }
            }
            .drawMessage{
                position: relative;
                p:first-of-type{
                    font-size: 0.25rem;
                }
                p:last-of-type{
                    font-size: 0.3rem;
                    color: crimson;
                }
                .drawTime{
                    font-size: 0.25rem;
                    position: absolute;
                    bottom: 0.30rem;
                    right: 0.1rem;
                }
            }
        }
    }
}

</style>