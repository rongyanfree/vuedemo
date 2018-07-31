<template>
	<div class="loadpage">
	    <h4 class='htitle'>编辑任务</h4>
	    <form id="task_add" role="form" class="form-horizontal" style="overflow: hidden;">
	        <li class="ry_UI">
	            <span class=""><img src="../../../static/img/icon_addtask1.png" alt="">任务名称</span>
	            <input name="task_name" type="text" value="任务名称" placeholder="请输入任务名称"/>
	        </li>
	        <li class="ry_UI">
	            <span class=""><img src="../../../static/img/icon_addtask2.png" alt="">任务权重</span>
	            <input name="task_weight" type="number" value=""
	                   class="form-control"/>
	        </li>
	        <li class="ry_UI twomodule_UI">
	            <span class="">计划开始</span>
	            <div class="iDate addtaskDate full">
	                <input type="text" name="task_planbegin" value="" placeholder="请选择计划开始时间">
	                <button type="button" class="addOn"></button>
	            </div>
	            <span class="">计划结束</span>
	            <div class="iDate addtaskDate full">
	                <input type="text" name="task_planover" value="" placeholder="请选择计划结束时间">
	                <button type="button" class="addOn"></button>
	            </div>
	        </li>
	        <li class="ry_UI twomodule_UI">
	            <span class="">实际开始</span>
	            <div class="iDate addtaskDate full">
	                <input type="text" name="task_factbegin" value="" placeholder="请选择计划开始时间">
	                <button type="button" class="addOn"></button>
	            </div>
	            <span class="task_factover_li" style="display: none;">
					<span class="">实际结束</span>
					<div class="iDate task_factover_warp full">
						<input type="text" name="task_factover" value="" placeholder="请选择实际结束时间">
						<button type="button" class="addOn"></button>
					</div>
				</span>
	        </li>
	        <li class="ry_UI">
	            <span class=""><img src="../../../static/img/icon_addtask4.png" alt="">目标数量</span>
	            <input name="task_targetnum" type="number" value="" class="form-control"/>
	        </li>
	        <li class="ry_UI">
	            <span class=""><img src="../../../static/img/icon_addtask5.png" alt="">完成数量</span>
	            <input name="task_completenum" type="number" value="" class="form-control"/>
	        </li>
	        <li class="ry_UI">
	            <span class=""><img src="../../../static/img/icon_addtask2.png" alt="">任务分配状况</span>
	          <!--   <foreach name="taskDistInfo" item="vo" key="k">
	                <p style="text-indent:0.5rem;"> 部门 ：{$vo.dept_name} --> - 权重：<!-- {$vo.td_weight}</p>
	            </foreach> -->
	        </li>
	        <li class="textarea_UI">
	            <span class=""><img src="../../../static/img/icon_addtask6.png" alt="">任务描述</span>
	            <textarea name="task_description"></textarea>
	        </li>
	        <li class="textarea_UI task_factover_li" style="display:none;margin-bottom:10px;">
	            <span class=""><img src="../../../static/img/icon_addtask7.png" alt="">任务反馈</span>
	            <textarea name="task_realityresult"></textarea>
	        </li>
	        <!--<li class="ry_UI">
	            <span class="">目标单位：</span>
	            <select name="task_unit" id="" class="chosen-select">
	                <option value="个" <if condition="($taskInfo.task_unit eq '个')"> selected </if>>个</option>
	                <option value="元" <if condition="($taskInfo.task_unit eq '元')"> selected </if>>元</option>
	                <option value="万" <if condition="($taskInfo.task_unit eq '万')"> selected </if>>万</option>
	            </select>
	        </li>-->
	        <em class="finishbtn" id="sureToaddtask" @click="sureToaddtask">确认</em>
	    </form>
	</div>
</template>
<script>
	export default{
		name:'addtask',
		data(){
			return{

			}
		},
		created:function(){
			
		},
		methods:{
			sureToaddtask(){
				this.$router.history.go(-1);
			}
		}
	}
</script>