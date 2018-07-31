<template>
	<div class="loadpage">
	    <h4 class="htitle">添加工作日记</h4>
	    <textarea name="" id="diary_content" cols="30" rows="10" placeholder="请输入工作日记"></textarea>
	    <em class="finishbtn" @click="adddiary(this)">确认添加</em>
	</div>
</template>
<script>
	export default{
		name:'addworkdiary',
		data(){
			return{

			}
		},
		created(){

		},
		methods:{
			adddiary(){
				this.$router.history.go(-1)
			}
		}
	}
</script>