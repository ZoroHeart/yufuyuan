<template>
    <div>
        <van-nav-bar
                title="地址信息"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-address-list
                v-model="chosenAddressId"
                :list="addressLists"
                :disabled-list="disabledList"
                disabled-text="以下地址超出配送范围"
                default-tag-text="默认"
                @add="onAdd"
                @edit="onEdit"
        />
    </div>

</template>

<script>
    import {getAddressData} from "../../api";

    export default {
        name: "AddressLists",
        data() {
            return {
                chosenAddressId: '1',
                addressLists: [],
                disabledList: [],
            };
        },
        methods: {
            onClickLeft() {
                this.$router.back();
            },
            onAdd() {
                this.$router.push('/addressEdits');
            },
            onEdit(item) {
                console.log(item);
                this.$router.push('/addressEdits');
            },
        },
        async created() {
            let addressDatas = await getAddressData();
            this.addressLists = addressDatas.addressData;
            this.disabledList = addressDatas.disabledListData;
        }
    }
</script>

<style scoped>

</style>