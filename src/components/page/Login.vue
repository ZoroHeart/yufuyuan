<template>
    <div>
        <van-nav-bar
                title="用户登录"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-cell-group>
            <van-field
                    v-model="username"
                    error
                    required
                    label="用户名"
                    placeholder="请输入用户名"
            />
            <van-field
                    v-model="phone"
                    required
                    label="手机号"
                    placeholder="请输入手机号"
                    error-message="手机号格式错误"
            />
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            onClickLeft() {

            },
        },
    }
</script>

<style scoped>

</style>