<template>
    <div>
        <div v-if="!isReg">
            <van-nav-bar
                    title="用户登录"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
            <div class="userInput">
                <van-cell-group>
                    <van-field
                            v-model="username"
                            error
                            required
                            label="账号"
                            placeholder="请输入账号"
                    />
                    <van-field
                            v-model="password"
                            type="password"
                            required
                            label="密码"
                            placeholder="请输入密码"
                            :rules="[{ required: true, message: '请填写密码' }]"
                    />
                </van-cell-group>
            </div>

            <div class="loginBtnCss"><van-button type="default" @click="loginBtn">登录</van-button></div>
            <p class="findPassWord">找回密码</p>
            <div class="signInBtn"><van-button type="default" @click="reg()">免费注册</van-button></div>
            <div class="thirdPartLogin">
                <p>————其他方式登录————</p>
                <div class="thirdPartBtn">
                    <div>
                        <van-image
                                round
                                width="1.3rem"
                                height="1.3rem"
                                src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                        <p>微信登录</p>
                    </div>
                    <div>
                        <van-image
                                round
                                width="1.3rem"
                                height="1.3rem"
                                src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                        <p>QQ登录</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <van-nav-bar
                    title="用户登录"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
            <div class="userInput">
                <van-cell-group>
                    <van-field
                            v-model="username"
                            error
                            required
                            label="账号"
                            placeholder="请输入账号"
                    />
                    <van-field
                            v-model="password"
                            type="password"
                            required
                            label="密码"
                            placeholder="请输入密码"
                            :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <van-field
                            v-model="password"
                            type="password"
                            required
                            label="密码"
                            placeholder="再次输入密码"
                            :rules="[{ required: true, message: '请填写密码' }]"
                    />
                </van-cell-group>
            </div>
            <div class="loginBtnCss">
                <van-button type="default" @click="loginBtn">确定</van-button>
                <van-button type="default" @click="cancel()">取消</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {getLogin} from "../../api";

    export default {
        name: "Login",
        data(){
            return {
                username:"",
                password:"",
                isReg:false
            }
        },
        methods: {
            onClickLeft() {
                this.$router.back();
            },
            async loginBtn(){
                let userMessage = await getLogin(this.username,this.password);
                console.log(userMessage);
                if(userMessage.msg){
                    console.log(userMessage.data.name);
                    sessionStorage.setItem("names",userMessage.data.name);
                    sessionStorage.setItem("vips",userMessage.data.vip);
                    sessionStorage.setItem("balances",userMessage.data.balance);
                    sessionStorage.setItem("integrals",userMessage.data.integral);
                    sessionStorage.setItem("discountCouponNums",userMessage.data.discountCouponNum);

                    this.$router.push({
                        path:'/personal'
                    });
                }

            },
            reg () {
                this.isReg = true
            },
            cancel () {
                this.isReg = false
            }
        },
    }
</script>

<style scoped lang="less">
.userInput{
    margin: 0.2rem 0 0.7rem 0;
}
.loginBtnCss{
    text-align: center;
    button{
        width: 70%;
        border-radius: 5px;
        background-color: #07c160;
        color: #fff;
    }
}
.findPassWord{
    text-align: right;
    padding-right: 0.2rem;
    color: #999999;
}
.signInBtn{
    text-align: center;
    margin-top: 3em;
    button{
        width: 50%;
        border-radius: 5px;
        border: 1px solid #07c160;
        color: #07c160;
    }
}
.thirdPartLogin{
    margin: 1.6rem 0 0 0;
    p{
        text-align: center;
        color: #999999;
        margin: 0.5rem 0;
    }
    .thirdPartBtn{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        p{
            margin-top: 0.2rem;
        }
    }
}
</style>