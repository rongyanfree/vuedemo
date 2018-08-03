<template>
	<div>
	    <h4 class='htitle'>指令详情</h4>
	    <ul class="YCYAdetails">
	        <form id="YCYA_form">
	            <input type="hidden" name="id" id="isid" value="">
	            <li class="ry_UI">
	                <span><img src="../../../static/img/icon_addproj1.png" alt="">发出人</span>
	                <!--展示发出人信息,如果数据中没有发起人,则发起人显示为自己-->
	                <!-- <if condition="(!$YCYA_Data['issuer'])">
	                    {$Think.Session.ee_name}
	                    <else />
	                    <foreach name="userList" item="vo">
	                        <if condition="($YCYA_Data.issuer == $vo[ee_id])">{$vo.ee_name}</if>
	                    </foreach>
	                </if> -->
	                陈
	            </li>
	            <li class="textarea_UI" style="border-bottom: 2px solid #f5f5f5;">
	                <span><img src="../../../static/img/icon_addplan1.png" alt="">指令</span>
	                <textarea name="command" id="command" placeholder="请输入指令" style="margin-bottom: 0.25rem;">完成第一个指令</textarea>
	                <!--<textarea name="command" id="command" placeholder="请输入指令" style="margin-bottom: 0.25rem;" <if condition="(0 != $YCYA_Data['status']) ^ (90 != $YCYA_Data['status'])">readonly</if>>{$YCYA_Data.command}</textarea>-->
	            </li>
	            <li class="ry_UI">
	                <span>发出时间</span>
	                <em id="issued_time">{{YCYA_Data.issued_time}}</em>
	            </li>
	            <li class="ry_UI">
	                <span>检查时间</span>
	                <div class="iDate full" id="check_time">
	                    <input type="text" name="check_time" placeholder="请选择检查时间" v-model="check_time">
	                    <button type="button" class="addOn"></button>
	                </div>
	            </li>
	            <li class="ry_UI">
	                <span><img src="../../../static/img/icon_addplan7.png" alt="">承诺人</span>
	                <!--<select name="acceptor" id="acceptor"  <if condition="($YCYA_Data['acceptor'])">disabled</if>>-->
	                <select name="acceptor" id="acceptor">
	                    <option value="">请选择承诺人</option>
	                    <option value="">{{YCYA_Data.ee_name}}</option>
	                </select>
	            </li>
	            <li class="textarea_UI" style="border-bottom: 2px solid #f5f5f5;">
	                <span><img src="../../../static/img/icon_addplan1.png" alt="">承诺</span>
	                <textarea name="promise" id="promise" placeholder="请输入承诺" style="margin-bottom: 0.25rem;">{{YCYA_Data.promise}}</textarea>
	            </li>
	            <li class="textarea_UI" style="border-bottom: 2px solid #f5f5f5;">
	                <span><img src="../../../static/img/icon_addplan1.png" alt="">结果定义</span>
	                <textarea name="result_define" id="result_define" placeholder="请输入结果定义" style="margin-bottom: 0.25rem;">{{YCYA_Data.result_define}}</textarea>
	            </li>
	            <li class="ry_UI twoinput_UI">
	                <span><img src="../../../static/img/icon_ycya01.png" alt="">奖惩兑现</span>
	                <label for="award_money">水果基金</label>
	                <select name="award_money" id="award_money">
	                    <option value="0">0</option>
	                    <option value="5">5</option>
	                    <option value="10">10</option>
	                    <option value="20">20</option>
	                </select>
	                <label for="award_labour">俯卧撑</label>
	                <select name="award_labour" id="award_labour">
	                    <option value="0">0</option>
	                    <option value="5">5</option>
	                    <option value="10">10</option>
	                    <option value="20">20</option>
	                </select>
	            </li>
	            <li class="ry_UI">
	                <span><img src="../../../static/img/icon_addplan6.png" alt="">检查人</span>
	                <select name="checker" id="checker">
	                    <option value="">请选择检查人</option>
	                   	<option value="">检查人姓名</option>
	                </select>
	            </li>
	            <li class="textarea_UI">
	                <span><img src="../../../static/img/icon_addplan5.png" alt="">检查人汇报</span>
	                <textarea name="report" id="report" placeholder="请输入检查人汇报">{{YCYA_Data.report}}</textarea>
	            </li>
	        </form>
	        <div class="finishbtn ycyabtn" id="sureToaddycya" style="display:block;" @click="sureToaddycya">发出指令</div>
	        <div class="finishbtn ycyabtn" id="promiseYCYA">承诺</div>
	        <ul class="Confirmation ycyabtn clearfix">
	            <li approve="YES">确定指令生效</li>
	            <li approve="NO">重新承诺</li>
	        </ul>
	        <div class="finishbtn ycyabtn" id="acceptorConfirm">指令接收</div>
	        <div class="finishbtn ycyabtn" id="checkerConfirm">接收任务</div>
	        <div class="finishbtn ycyabtn" id="applyComplete">申请完成</div>
	        <div class="finishbtn ycyabtn" id="checkerJudge">提交检查</div>
	        <ul class="ConfirmationResult ycyabtn clearfix">
	            <li approve = 'YES'>完成</li>
	            <li approve = 'NO'>未完成</li>
	        </ul>
	        <div class="finishbtn ycyabtn" id="retransmission">重新发出指令</div>
	    </ul>
	</div>
</template>
<script>
	export default{
		name:'ycyadetails',
		data(){
			return{
				YCYA_Data:{
					issued_time:"2018-12-02",
					ee_name:'承诺人姓名',
					promise:'承诺内容',
					result_define:'结果定义',
					report:'检查人汇报',
				},
				check_time:'',
			}
		},
		activated(){
			document.getElementById('app').scrollTop = 0;
		},
		mounted(){
			let that = this;
			let calendar1 = new datePicker();
	      	calendar1.init({
	         	'trigger': '#check_time', /*选择器，触发弹出插件*/
	         	'type': 'date',/*date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择*/
	         	'minDate':'1900-1-1',/*最小日期*/
	         	'maxDate':new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),/*最大日期*/
	         	'onSubmit':function(){/*确认时触发事件*/
	             	that.check_time = calendar1.value;
	             	console.log(that.check_time)
	         	},
	         	'onClose':function(){/*取消时触发事件*/

	         	}
	        });
		},
		methods:{
			sureToaddycya(){
				this.$router.history.go(-1)
			}
		}
	}
</script>
