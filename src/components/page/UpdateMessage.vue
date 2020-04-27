<template>
    <div>
        <van-nav-bar
                title="账户信息"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <div>
            <van-field name="uploader" label="头像">
                <template #input>
                    <van-uploader v-model="uploader" />
                </template>
            </van-field>
            <van-field v-model="userName" label="用户名" />
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field v-model="phone" type="tel" label="手机号" />
            <van-field v-model="sex" type="tel" label="性别" />
            <van-field
                    readonly
                    clickable
                    name="datetimePicker"
                    :value="birthdayValue"
                    label="出生日期"
                    placeholder="点击选择时间"
                    @click="showPicker = true"
            />
            <van-popup v-model="showPicker" position="bottom">
                <van-datetime-picker
                        v-model="currentDate"
                        type="date"
                        @confirm="onConfirm"
                        @cancel="showPicker = false"
                        :formatter="formatter"
                />
            </van-popup>
            <van-field
                    v-model="defaultAddress"
                    rows="1"
                    autosize
                    label="默认地址"
                    type="textarea"
                    readonly
                    @click="goAddress"
            />
        </div>
        <div>

        </div>
    </div>

</template>

<script>
    import userLook from "../../assets/image/icontouxiang.png"
    export default {
        name: "UpdateMessage",
        data() {
            return {
                uploader: [{ url: userLook }],
                birthdayValue: '',//生日
                showPicker: false,
                currentDate: new Date(),
                defaultAddress:"",//默认收货地址
                showAddress: false,
            };
        },

        methods:{
            onClickLeft() {
                this.$router.back();
            },
            onConfirm(time) {
                let dateTime = new Date();
                this.birthdayValue = dateTime.getFullYear(time)+"年"+dateTime.getMonth(time)+"月"+dateTime.getDate(time)+"日";
                this.showPicker = false;
            },
            formatter(type, val) {
                if (type === 'year') {
                    return `${val}年`;
                } else if (type === 'month') {
                    return `${val}月`;
                }
                return val;
            },
            goAddress(){
                this.$router.push('/addressLists');
            }
        }
    }
</script>

<style scoped>

</style>