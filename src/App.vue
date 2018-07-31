<template>
  <div id="app">
    <div class="bigpage">
      <keep-alive>
        <router-view/>
      </keep-alive>
   <!--  <keep-alive> -->
     <!--  <router-view :is="currentView"></router-view> -->
    <!-- </keep-alive> -->
    </div>
    <footer-view v-if="$route.meta.tabflag"></footer-view>
  </div>
</template>
<script>
import footerView from '@/components/common/footer'
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  components:{
    footerView
  },
  methods:{
    
  },
  watch:{
    $route(to,from){
      //console.log('========',to)
      //let To = to.path,From = from.path
      /*if(To == '/' || To == '/index'){
         
      }*/
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position:relative;
  width:100%;
  height:100%;
  overflow:scroll;
  font-size:14px;
}
.bigpage{
  padding-bottom:0.8rem;
  overflow:scroll;
}
</style>
