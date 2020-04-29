<template>
    <div class="container">
        <div class="cartTitle">
            <van-nav-bar
                    title="购物车"
                    left-text="返回"
                    right-text="编辑"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>
        <div class="cartList">
            <div class="cartListCss" v-for="(item, index) in cartListArr" :key="index">
                <van-checkbox v-model="item.isSelected">
                    <div class="cartCont">
                        <div class="cartImgCss"><img :src="item.productCover" alt=""></div>
                        <div class="cartMessage">
                            <p>{{item.productName}}   {{item.productInfo}}</p>
                            <p><span>￥{{item.productPrice}}</span></p>
                        </div>
                    </div>
                </van-checkbox>
                <div class="cartNums"><van-stepper v-model="item.cartCount" /></div>
            </div>
        </div>
        <div class="cartSubmit">
            <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
                <van-checkbox v-model="isAll">全选</van-checkbox>

            </van-submit-bar>
        </div>
        <tabBar :active="2"></tabBar>
    </div>
</template>

<script>
    import tabBar from "../base/tabBar.vue"
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
        name: "Car",
        components:{
            tabBar
        },
        data(){
            return{
                cartListArr:[],
                proimgArr:[list_proimg0,list_proimg1,list_proimg2,list_proimg3,list_proimg4,list_proimg5,list_proimg6,list_proimg7,list_proimg8],

                isSel:false,
                imgsp:"./img/goshoppingimg1.jpg",
                name:"",
                price:"",
                snums:0
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
            remove(index){
                this.cartListArr.splice(index,1);
            },
            removeAll(){
                this.cartListArr = this.cartListArr.filter(item=>!item.isSelected);
            },
            submit(e){
                this.cartListArr.push({
                    isSelected:this.isSel,
                    productCover:this.imgsp,
                    productName:this.name,
                    productPrice:this.price,
                    productCount:this.snums
                });
                this.name = "";
                this.price = "";
                this.snums = "";
                e.preventDefault();
            }
        },
        filters:{
            toFixed(trg) {
                return Number(trg).toFixed(2);
            },
            add$(target,val='$'){
                let reg = /^(￥|\$)/;
                return reg.test(target.toString())?target:val+target;
            }
        },
        computed:{
            isAll:{
                get(){
                    return this.cartListArr.every(item=>item.isSelected);
                },
                set(val){
                    this.cartListArr.forEach((item)=>{
                        item.isSelected = val;
                    });
                }
            },
            sum:{
                get(){
                    //计算总价格
                    let total = null;
                    this.cartListArr.forEach((item)=>{
                        total += item.isSelected ? item.productCount*item.productPrice : 0;
                    });
                    return total;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .container{
        .cartTitle{
            background-color: #fff;
        }
        .cartList{
            background-color: #fff;
            margin-bottom: 2rem;
            padding: 0 0.2rem;
            .cartListCss{
                position: relative;
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
                        font-size: 0.35rem;
                        color: crimson;
                    }
                }
                .cartNums{
                    position: absolute;
                    right: 0.1rem;
                    bottom: 0.2rem;
                }
            }
        }
        .cartSubmit{
            .van-submit-bar{
                bottom:0.86rem;
            }
        }
    }
</style>