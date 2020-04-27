import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Icon,Image as VanImage,Button,Field,Tabbar,TabbarItem,NavBar,Search,Swipe,SwipeItem,Lazyload,Cell,CellGroup,
Row,Col,Tag,Dialog,List,Grid,GridItem,Picker,Popup,Card,Uploader,DatetimePicker,AddressList,AddressEdit,Area} from 'vant'

Vue.use(Icon).use(VanImage).use(Button).use(Field).use(Tabbar).use(TabbarItem).use(NavBar).use(Search).use(Swipe).
use(SwipeItem).use(Lazyload).use(Cell).use(CellGroup).use(Row).use(Col).use(Tag).use(Dialog).use(List).use(Grid).
use(GridItem).use(Picker).use(Popup).use(Card).use(Uploader).use(DatetimePicker).use(AddressList).use(AddressEdit).
use(Area);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

let w = document.documentElement.clientWidth || document.body.clientWidth;
document.documentElement.style.fontSize = w/640 * 100 +"px";