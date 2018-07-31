import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import index from '@/components/index'
import planeditpage from '@/components/index/planeditpage'

import erp from '@/components/erp'
import addproj from '@/components/erp/addproj'
import addtask from '@/components/erp/addtask'

import ycya from '@/components/ycya'
import ycyadetails from '@/components/ycya/ycyadetails'

import workdiary from '@/components/workdiary'
import addworkdiary from '@/components/workdiary/addworkdiary'

import my from '@/components/my'
import myprofile from '@/components/my/myprofile'
import rankinglistpage from '@/components/my/rankinglistpage'

import footerView from '@/components/common/footer'

Vue.use(Router)
Vue.use(VueResource)


export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component:index,
      meta: { 
        tabflag: true
      }
    },
    {
      path:'/index/planeditpage',
      name:'planeditpage',
      component:planeditpage,
      meta: { 
        tabflag: false
      }
    },
    {
      path:'/erp',
      name:'erp',
      component:erp,
      meta: { 
        tabflag: true,
      }
    },
    {
      path:'/ycya',
      name:'ycya',
      component:ycya,
      meta: { 
        tabflag: true,
      }
    },
    {
      path:'/ycya/ycyadetails',
      name:'ycyadetails',
      component:ycyadetails,
      meta: { 
        tabflag: false,
      }
    },
    {
      path:'/erp/addproj',
      name:'addproj',
      component:addproj,
      meta:{
        tabflag:false,
      }
    },
    {
      path:'/erp/addtask',
      name:'addtask',
      component:addtask,
      meta:{
        tabflag:false,
      }
    },
    {
      path:'/workdiary',
      name:'workdiary',
      component:workdiary,
      meta: { 
        tabflag: true,
      }
    },
    {
      path:'/workdiary/addworkdiary',
      name:'addworkdiary',
      component:addworkdiary,
      meta: { 
        tabflag: false,
      }
    },
    {
      path:'/my',
      name:'my',
      component:my,
      meta: {
        tabflag: true,
      }
    },
    {
      path:'/my/myprofile',
      name:'myprofile',
      component:myprofile,
      meta:{
        tabflag:false
      }
    },
    {
      path:'/my/rankinglistpage',
      name:'rankinglistpage',
      component:rankinglistpage,
      meta:{
        tabflag:false
      }
    },
    {
      path:'/common/footer',
      name:'footerview',
      component:footerView
    }
  ]
})