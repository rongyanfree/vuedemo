<template>
	<ul class="workDiary">
		<div class="select_add clearfix">
	        <select id="diary_select0" v-model="selectcompany" @change="selectCompany">
	        	<option value="">请选择公司</option>
	            <option v-for="item in companylist" :value="item.value">{{item.text}}</option>           
	        </select>
	        <select name="" id="diary_select1">
	            <option value="">请选择部门</option>
	        </select>
	        <select name="" id="diary_select2"><option>请选择成员</option><option value="B0F7248A-653C-4ECD-9793-EDC6CCDCB5DB">侯朝慧</option></select>
	        <img src="../../static/img/icon_add.png" @click="addworkdiary">
	    </div>
		<div class="OneDayLimit">
	        <span @click="OneDayLimit()">查看下属最近一天的工作日记</span>
	    </div>

		<li class="ry_UI_box" v-for="(item,index) in workdiarydata">
			<p class="operation clearfix">
				<span>{{item.diary_pmct}}</span>
				<span>{{item.ee_name}}</span>
			</p>
			<p class="diarycontent" v-html="item.diary_content"></p>
			<p class="diary_comment" v-html="item.diary_comment"></p>
			<textarea class="commontContent" v-show="item.commontContent" v-model='diaryComment'></textarea>
			<p class="addCommont clearfix" v-show="item.commontbtn">
				<span @click="addCommont(index)" v-show="!item.commontContent" >添加评论</span>
				<span @click="submitCommont(index)" v-show="item.commontContent">添加评论</span>
			</p>
		</li>
	</ul>
</template>
<script>
	export default {
		name: 'workdiary',
		data(){
			return {
				workdiarydata:[],
				companylist:[
					{
						text:'国润建达',
						value:'1DE189A9-3B70-4DF9-B923-29FF878F34B0'
					},
					{
						text:'江阴包装',
						value:'46C428C4-588A-475B-911F-FAE73C79E1BE'
					},
					{
						text:'新逸霖',
						value:'66D1C652-BE61-4C13-9C33-C6A7E5E0DA02'
					},

				],
				selectcompany:'',
				diaryComment:''
			}
			
		},
		created(){
			this.$options.methods.getworkDiary(this,'');
      		this.common.footertab(this); // tab按钮的状态
		},
		methods:{
			getworkDiary(that,param){
	      		that.$http.get('../../static/json/workDiary.json?param='+param).then(function(res){
	      			for(var i =0;i<res.body.length;i++){
	      				res.body[i].diary_pmct = that.common.timeStamp(res.body[i].diary_pmct);
	      				res.body[i].commontContent = false;
	      				res.body[i].diary_comment==''?res.body[i].commontbtn = true:res.body[i].commontbtn = false;
	      				res.body[i].diary_comment==''?'':res.body[i].diary_comment = '评价：'+res.body[i].diary_comment;
	      			}
	      			that.workdiarydata = res.body;
	      		})
			},
			addworkdiary(){
				this.$router.push({
					path:'/workdiary/addworkdiary'
				})
			},
			selectCompany(){
				console.log(this.selectcompany)
				this.$options.methods.getworkDiary(this,'aaa');
			},
			addCommont(index){
				this.workdiarydata[index].commontContent = true;
			},
			submitCommont(index){
				this.workdiarydata[index].diary_comment = '评论：'+this.diaryComment;
				this.diaryComment = '';
				this.workdiarydata[index].commontContent = false;
				this.workdiarydata[index].commontbtn = false;
			},
			OneDayLimit(){
				console.log('获取下属最近一天的工作')
			},
		}
	}
</script>