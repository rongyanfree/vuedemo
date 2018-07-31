// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import common from '../static/js/common.js'
import datePicker from '../static/js/datePicker.js'

import Vuex from 'vuex'
Vue.use(Vuex)



const store = new Vuex.Store({
  state: {
    scrollHeight: 0,
    tabData:[
        {
          text:'计划',
          intabfn:'index',
          img:'/static/img/icontab_plan.png',
          img1:'/static/img/icontab_plan1.png',
          flag:true,
        },
        {
          text:'ERP',
          intabfn:'erp',
          img:'/static/img/icontab_task.png',
          img1:'/static/img/icontab_task1.png',
          flag:false,
        },
        {
          text:'YCYA',
          intabfn:'ycya',
          img:'/static/img/icontab_ycya.png',
          img1:'/static/img/icontab_ycya1.png',
          flag:false,
        },
        {
          text:'日记',
          intabfn:'workdiary',
          img:'/static/img/icontab_not.png',
          img1:'/static/img/icontab_not1.png',
          flag:false,
        },
        {
          text:'我',
          intabfn:'my',
          img:'/static/img/icontab_my.png',
          img1:'/static/img/icontab_my1.png',
          flag:false,
        }
      ],
  },
  mutations: {
    scroll (state) {
      state.scrollHeight = document.getElementById('app').scrollTop
    },
    tabClick(state,msg) {
    	state.tabData.forEach(function (value) {
			if(value.intabfn == msg){
				value.flag = true
			}else{
				value.flag = false
			}
		});
    } 
  }
})



Vue.prototype.common = common
Vue.prototype.datePicker = datePicker

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})