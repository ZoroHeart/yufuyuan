import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Icon,Button,Tabbar,TabbarItem,NavBar,Search,Swipe,SwipeItem,Lazyload,Cell,CellGroup,
Row,Col,Tag,Dialog,List,Grid,GridItem,Picker,Popup,Card} from 'vant'

Vue.use(Icon).use(Button).use(Tabbar).use(TabbarItem).use(NavBar).use(Search).use(Swipe).
use(SwipeItem).use(Lazyload).use(Cell).use(CellGroup).use(Row).use(Col).use(Tag).use(Dialog).
use(List).use(Grid).use(GridItem).use(Picker).use(Popup).use(Card);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

let w = document.documentElement.clientWidth || document.body.clientWidth;
document.documentElement.style.fontSize = w/640 * 100 +"px";