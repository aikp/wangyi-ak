/* 所有路由配置的数组 */
/* 是我从index.js里export default  routes:[]里剪切过来的 */
/* import 也是从index.js里剪切来的 */

import Shouye from 'pages/Shouye/Shouye.vue'
import Fenlei from 'pages/Fenlei/Fenlei.vue'
import Shiwu from 'pages/Shiwu/Shiwu.vue'
import Gouwuche from 'pages/Gouwuche/Gouwuche.vue'
import Geren from 'pages/Geren/Geren.vue'

export default [
  {
    path:'/shouye',
    component:Shouye
  },
  {
    path:'/fenlei',
    component:Fenlei
  },
  {
    path:'/shiwu',
    component:Shiwu
  },
  {
    path:'/gouwuche',
    component:Gouwuche
  },
  {
    path:'/geren',
    component:Geren
  },
  {
    path:'/',
    component:Shouye
  }
]