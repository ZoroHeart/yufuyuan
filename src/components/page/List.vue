<template>
    <div>
        <div>
            <form action="/">
                <van-search
                        v-model="value"
                        show-action
                        placeholder="请输入搜索关键词"
                        @search="onSearch"
                        @cancel="onCancel"
                />
            </form>
        </div>
        <div class="productListCss">
            <product :productData="productDataList"></product>
        </div>
        <tabBar :active="1"></tabBar>
    </div>
</template>

<script>
    import tabBar from "../base/tabBar.vue"
    import product from "../base/product.vue"
    import {getProductData} from "../../api";
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

    export default {
        name: "List",
        components:{
            tabBar,
            product
        },
        data() {
            return {
                productImg:[productImg0,productImg1,productImg2,productImg3,productImg4,productImg5,productImg6,productImg7,productImg8,productImg9],
                value: '',
                productDataList:[],
            };
        },
        async created() {
            let productData = await getProductData();
            for(var j=0;j<productData.data.length;j++){
                productData.data[j].imgUrl = this.productImg[j];
            }
            this.productDataList = productData.data;
            console.log(this.productDataList);
        },
        methods: {
            onSearch(val) {
                console.log(val);
            },
            onCancel() {

            },
        },
    }
</script>

<style scoped lang="less">
.productListCss{
    margin-bottom: 1rem;
}
</style>