<template>
    <div class="container">
        <div class="redeemTitle">
            <van-nav-bar
                    title="团购推荐"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>
        <div class="groupList">
            <div class="groupListCont" v-for="(item, index) in cartListArr" :key="index">
                <div class="groupListImg"><img :src="item.productCover" alt=""></div>
                <div class="groupListName">{{item.productName}}</div>
                <div class="groupPrice">
                    <div class="groupPriceNum">
                        <van-icon name="friends" color="#fff"  size="0.4rem"/>
                        <span>{{item.productPrice}}人团</span><span>￥1.5/个</span>
                    </div>
                    <div class="groupPriceBtn">去开团</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cartData from "../../api/cartListdata.json"
    import ecofarmimg0 from "../../assets/image/banner/ecofarmimg0.jpg"
    import ecofarmimg1 from "../../assets/image/banner/ecofarmimg1.jpg"
    import ecofarmimg2 from "../../assets/image/banner/ecofarmimg2.jpg"
    import ecofarmimg3 from "../../assets/image/banner/ecofarmimg3.jpg"
    import ecofarmimg4 from "../../assets/image/banner/ecofarmimg4.jpg"
    import ecofarmimg5 from "../../assets/image/banner/ecofarmimg5.jpg"
    import ecofarmimg6 from "../../assets/image/banner/ecofarmimg6.jpg"
    import ecofarmimg7 from "../../assets/image/banner/ecofarmimg7.jpg"
    import ecofarmimg8 from "../../assets/image/banner/ecofarmimg8.jpg"
    export default {
        name: "groupList",
        data(){
          return{
              cartListArr:[],
              proimgArr:[ecofarmimg0,ecofarmimg1,ecofarmimg2,ecofarmimg3,ecofarmimg4,ecofarmimg5,ecofarmimg6,ecofarmimg7,ecofarmimg8],

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
        }
    }
</script>

<style scoped lang="less">
.groupListCont{
    margin-bottom: 0.2rem;
    padding-bottom: 0.2rem;
    background-color: #fff;
    .groupListImg{
        img{
            width: 100%;
        }
    }
    .groupListName{
        padding: 0.1rem 0.2rem;
    }
    .groupPrice{
        display:flex;
        flex-wrap: nowrap;
        justify-content: start;
        align-items: center;
        color: #fff;
        .groupPriceNum{
            background-color: #fbb01f;
            height: 0.6rem;
            line-height: 0.6rem;
            width: 60%;
            i{
                vertical-align: middle;
            }
            span{
                margin-left: 0.2rem;
            }
        }
        .groupPriceBtn{
            background-color: #3ac284;
            height: 0.6rem;
            line-height: 0.6rem;
            border-radius: 0 25px 25px 0;
            width: 20%;
            text-align: center;
        }
    }
}
</style>