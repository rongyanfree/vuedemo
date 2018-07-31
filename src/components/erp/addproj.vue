<template>
	<div class="loadpage">
	    <h4 class='htitle'>
	        添加项目
	    </h4>
	    <form id="project_add" role="form" class="form-horizontal">
	        <li class="ry_UI">
	            <span class=""><img src="../../../static/img/icon_addproj1.png" alt="">项目名称</span>
	            <input name="proj_name" type="text" v-bind:value="projData.proj_name" placeholder="请输入项目名称"/>
	        </li>
	        <li class="ry_UI">
	            <span class=""><img src="../../../static/img/icon_addproj2.png" alt="">总负责人</span>
	            <select name="proj_principal" id="">
	   				
	            </select>
	        </li>
	        <li class="textarea_UI">
	            <span class=""><img src="../../../static/img/icon_addproj3.png" alt="">项目备注</span>
	            <textarea name="proj_putinto">{{projData.proj_putinto}}</textarea>
	        </li>
	        <li class="textarea_UI">
	            <span class=""><img src="../../../static/img/icon_addproj4.png" alt="">预期目标</span>
	            <textarea name="proj_anticipate">{{projData.proj_anticipate}}</textarea>
	        </li>
	        <li class="textarea_UI">
	            <span class=""><img src="../../../static/img/icon_addproj5.png" alt="">项目绩效管理办法</span>
	            <textarea name="proj_standard">{{projData.proj_standard}}</textarea>
	        </li>
	        <div class="changeproshow">
	            <li class="ry_UI">
	                <span class=""><img src="../../../static/img/icon_addproj6.png" alt="">项目考核评分</span>
	                <input name="proj_rating"  type="number" v-bind:value="projData.proj_rating" class=""/>
	            </li>
	            <li class="ry_UI">
	                <span class=""><img src="../../../static/img/icon_addproj7.png" alt="">项目成本</span>
	                <input name="proj_costing" type="number" v-bind:value="projData.proj_costing" class=""/>
	            </li>
	            <li class="ry_UI">
	                <span class=""><img src="../../../static/img/icon_addproj8.png" alt="">可分配总金额</span>
	                <input name="proj_amount" type="number" v-bind:value="projData.proj_amount" class=""/>
	            </li>
	        </div>
	        <em class="finishbtn" id="sureToaddpro" @click='sureToaddpro'>确认</em>
	    </form>
	</div>
</template>
<script>
	export default {
		name:'addproj',
		data(){
			return {
				projData:{
					proj_name:'项目名称',
					proj_putinto:'项目备注',
					proj_anticipate:'预期目标',
					proj_standard:'项目绩效管理办法',
					proj_rating:'10',
					proj_costing:'10000',
					proj_amount:'1000'
				},
				id:'',
				
			}
		},
		activated(){	
			this.id = this.$route.query.id;
		},
		methods:{
			sureToaddpro(){
				this.$router.history.go(-1);
			}
		}
	}
</script>