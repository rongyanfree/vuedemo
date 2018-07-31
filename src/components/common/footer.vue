<template>
	<footer>
	  	<li class="bottom_tab" v-for='(item,index) in tabData' @click="tab_click(index,item.intabfn)">
		    <img class="img-active" :src="item.img" v-show="item.flag==true" style="margin: 0.1rem auto 0.01rem;">
		    <img class="img-noactive" :src="item.img1" v-show="item.flag==false" style="margin: 0.1rem auto 0.01rem;">
		    <p class="tab_name">{{item.text}}</p>
	  	</li>
	</footer>
</template>
<script>
	export default{
		name:'footerView',
		data(){
			return{
				tabData:[],
			}
		},
		mounted(){
			this.tabData = this.$store.state.tabData;
		},
		methods:{
			tab_click(index,tab){
		      	var tabIndex = index;
		      	this.tabData.forEach(function(item,index){
		        	index == tabIndex?item.flag = true:item.flag = false;
		      	});
		      	this.$router.push({path:'/'+tab})
		    }
		}
	}
</script>