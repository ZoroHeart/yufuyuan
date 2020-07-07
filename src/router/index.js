import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/page/Home.vue'
import List from '../components/page/List.vue'
import Car from '../components/page/Car.vue'
import Personal from '../components/page/Personal.vue'
import Login from '../components/page/Login.vue'
import UpdateMessage from '../components/page/UpdateMessage.vue'
import AddressLists from '../components/base/AddressLists.vue'
import AddressEdits from '../components/base/AddressEdits.vue'
import ProductDetail from '../components/base/productDetail.vue'
import SubmitOrder from '../components/page/SubmitOrder.vue'
import VoucherCenter from '../components/page/voucherCenter.vue'
import LuckyDraw from '../components/page/LuckyDraw.vue'
import RedeemCode from '../components/page/RedeemCode.vue'
import GroupList from '../components/page/groupList.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/car',
    name: 'Car',
    component: Car
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/updateMessage',
    name: 'UpdateMessage',
    component: UpdateMessage
  },
  {
    path: '/addressLists',
    name: 'AddressLists',
    component: AddressLists
  },
  {
    path: '/addressEdits',
    name: 'AddressEdits',
    component: AddressEdits
  },
  {
    path: '/productDetail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/submitOrder',
    name: 'SubmitOrder',
    component: SubmitOrder
  },
  {
    path: '/voucherCenter',
    name: 'VoucherCenter',
    component: VoucherCenter
  },
  {
    path: '/luckyDraw',
    name: 'LuckyDraw',
    component: LuckyDraw
  },
  {
    path: '/redeemCode',
    name: 'RedeemCode',
    component: RedeemCode
  },
  {
    path: '/groupList',
    name: 'GroupList',
    component: GroupList
  }

];

const router = new VueRouter({
  routes
});

router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(from);
  next();
});

export default router
