/* 所有路由配置的数组 */
/* 是我从index.js里export default  routes:[]里剪切过来的 */
/* import 也是从index.js里剪切来的 */

import Shouye from 'pages/Shouye/Shouye.vue'
import Fenlei from 'pages/Fenlei/Fenlei.vue'
import Shiwu from 'pages/Shiwu/Shiwu.vue'
import Gouwuche from 'pages/Gouwuche/Gouwuche.vue'
import Geren from 'pages/Geren/Geren.vue'
import Shopcar from 'pages/Shopcar/Shopcar.vue'
import Personal from 'pages/Personal/Personal.vue'
import PhoneLogin from 'pages/Personal/PhoneLogin/PhoneLogin.vue'
import EmailLogin from 'pages/Personal/EmailLogin/EmailLogin.vue'

export default [
  {
    path:'/shouye',
    component:Shouye,
    meta: {
      showFooter: true,
      showHeader: true
    }
  },
  {
    path:'/fenlei',
    component:Fenlei,
    meta: {
      showFooter: true,
    }
  },
  {
    path:'/shiwu',
    component:Shiwu,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/things',
    component: Things,
    meta: {
      showFooter: true
    },
    children: [
      {
        path: '/things/recommend',
        component: Recommend,
        meta: {
          showFooter: true
        },
      },
      {
        path: '/things/ordershow',
        component: OrderShow,
        meta: {
          showFooter: true
        },
      },
      {
        path: '/things',
        redirect: '/things/recommend'
      }
    ]
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
    path: '/shopcar',
    component: Shopcar,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    children: [
      {
        path: '/personal/phonelogin',
        component: PhoneLogin,
      },
      {
        path: '/personal/emaillogin',
        component: EmailLogin,
      }
    ]
  },
  {
    path:'/',
    component:Shouye,
    meta: {
      showFooter: true,
      showHeader: true
    }
  }
]