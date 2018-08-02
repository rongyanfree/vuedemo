<template>
	<div class="loadpage">
	    <div class="page__bd fullheight">
	        <div class="weui-cells weui-cells_form clearfix" style="margin-top:0;">
	            <!--<div class="logo">
	                <img src="" alt="" class="touxiang">
	                <p></p>
	            </div>-->
	            <h4 style="text-align: center;line-height:0.8rem;">积分排行</h4>
	            <div class="chooseMonth iDate full" style="width: 27%;margin-left: 67%;">
	                <input type="text" v-model="chooseMonth" name="" placeholder="请选择月份">
	                <button type="button" class="addOn" style="border:none;"></button>
	            </div>
	            <div class="RankingList" v-for="(item,index) in rankingList">
	            	<div class="weui-cell">
	            		<div class="weui-cell__hd">
	            			<label class="weui-label">
	            				<span class="weui-cell-span">
	            					<img v-show="item.imgflag" :src="item.imgsrc">
	            					<em v-show="!item.imgflag">{{index+1}}</em>
	            				</span>
	            				<img class="rankinglistImg" v-bind:src="item.ee_avatar">
	            			</label>
	            		</div>
	            		<div class="weui-cell__bd weui-cell__name">{{item.ee_name}}<span style="float:right;">{{item.score}}</span>
	            		</div>
	            	</div>
	            </div>
	        </div>
	    </div>
	</div>
</template>
<style type="text/css">
	.weui-cell-span {
	    display: inline-block;
	    width: 0.5rem;
	    float: left;
	    margin-top: 0.25rem;
	}
</style>
<script>
	export default{
		name:'rankinglistpage',
		data(){
			return{
				chooseMonth:'',
				rankingList:{}
			}
		},
		activated(){
			var that = this;
			let calendar1 = new datePicker();
	      	calendar1.init({
	         	'trigger': '.chooseMonth', /*选择器，触发弹出插件*/
	         	'type': 'ym',/*date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择*/
	         	'minDate':'1900-1-1',/*最小日期*/
	         	'maxDate':new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),/*最大日期*/
	         	'onSubmit':function(){/*确认时触发事件*/
	             	that.chooseMonth = calendar1.value;

	             	console.log(that.chooseMonth)
	         	},
	         	'onClose':function(){/*取消时触发事件*/

	         	}
	        });
					
		},
		created(){
			let that = this;
	  		that.$http.get('../../static/json/getRankingListData.json').then(function(res){
	  			res.body.forEach(function (item,index,arr){
	  				if(index == 0){
	  					item.imgsrc = '../../../static/img/icon_goldMedal.png';
	  					item.imgflag = true;
	  				} else if (index == 1){
	  					item.imgsrc = '../../../static/img/icon_silverMedal.png';
	  					item.imgflag = true;
	  				}else if (index == 2){
	  					item.imgsrc = '../../../static/img/icon_BronzeMedal.png';
	  					item.imgflag = true;
	  				}else{
	  					item.imgsrc = '';
	  					item.imgflag = false;
	  				}
				})  
	  			that.rankingList = res.body;
	  		})
		},
		methods:{

		}
	}
</script>