/* 
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/* 引入5个路由 pages在vue.config.js里配置了路径可以直接找到 */
/* 引入的路由如果不注册会显示灰色 */
/*
** 剪切到了routes.js 再下面再引入routes
import Shouye from 'pages/Shouye/Shouye.vue'
import Fenlei from 'pages/Fenlei/Fenlei.vue'
import Shiwu from 'pages/Shiwu/Shiwu.vue'
import Gouwuche from 'pages/Gouwuche/Gouwuche.vue'
import Geren from 'pages/Geren/Geren.vue' */
import routes from './routes'

/* Vue.use(VueRouter)不能丢 固定写法 */
Vue.use(VueRouter)

export default new VueRouter({
  /* 暴露路由器的模式 是哈希还是history */
  mode:'history',

  //应用中所有的路由 除了引入还要再这里注册
  /* 有时会把所有的routes放在另外一个模块里 在引入进来 */
  routes
})

