import Vue from 'vue'
import App from './App.vue'

// new Vue({
//   el:'#app',
//   components:{
//     App
//   },
//   template:'<App/>'
// })

new Vue({
  el:'#app',
  render:h=>h(App)
})