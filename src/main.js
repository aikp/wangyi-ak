import Vue from 'vue'
import App from './App.vue'
/* 不引入路由器 会报<route-view>错误 */
/* 不在new Vue里注册 会灰色显示 */
import router from './router'


// new Vue({
//   el: '#app',
//   components: {
//     App
//   },
//   template: '<App/>',
//   router, // 配置路由器
// })

new Vue({
  //el:'#app',
  render:h=>h(App),
  router
}).$mount('#app')