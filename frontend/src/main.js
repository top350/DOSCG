import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/CV'
import XYZ from './components/findXYZ'
import BC from './components/findBC'
import BestRoute from './components/bestRoute'
import './plugin/bootstrap-vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

  
const routes =[
  {path:'/',component:Home},
  {path:'/findXYZ',component:XYZ},
  {path:'/findBC',component:BC},
  {path:'/bestRoute',component:BestRoute}
]
const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
