<template>
    <div class="container">
        <div class="redeemTitle">
            <van-nav-bar
                    title="我要兑换"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>
        <div class="redeemCont">
            <div class="redeemInput">
                <input type="text" placeholder="请输入优惠序列号" class="redeem">
            </div>
            <div class="redeemBtn">
                <button>兑换</button>
            </div>
        </div>
        <div class="redeemRule">
            <div class="ruleTitle">兑换码使用规则:</div>
            <p>1、兑换券是誉福园为方便广大用户推出的一款电子虚拟券，该券可以在誉福园使用，用于兑换商品</p>
            <p>2、由于不确定因素导致商品价格浮动，导致您使用兑换码兑换商品时可能出现需补差价的情况，请谅解。</p>
            <p>3、兑换券所兑换商品不支持退货。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RedeemCode",
        methods:{
            onClickLeft(){
                this.$router.back();
            },
        }
    }
</script>

<style scoped lang="less">
.redeemCont{
    text-align: center;
    padding: 0 0.15rem;
    .redeemInput{
        padding:0.2rem;
        input{
            height: 0.9rem;
            width: 96%;
            padding-left: 0.2rem;
            border: none;
        }
    }
    .redeemBtn{
        margin-top: 0.5rem;
        button{
            border: none;
            height: 0.9rem;
            width: 85%;
            border-radius: 5px;
            background-color: #00a157;
            color: #fff;
        }
    }
}
.redeemRule{
    position: absolute;
    bottom: 0.3rem;
    padding: 0 0.2rem;
    .ruleTitle{
        font-weight: bold;
    }
    p{
        padding: 0;
        margin: 0;
        font-size: 0.28rem;
        line-height: 0.45rem;
    }
}
</style>