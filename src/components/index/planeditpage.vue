<template>
    <div class="loadpage">
        <h4 class='htitle'>计划详情</h4>
        <ul class="plandetails" style="padding:0 0.3rem;">
            <li class="details1 clearfix">
                <span>
                    新计划
                    <!-- <if condition="($planInfo.plan_reactivation eq 0)">新计划</if>
                    <if condition="($planInfo.plan_reactivation neq 0)">重提0次</if> -->
                </span>
                <span><!--{$planInfo.plan_planbegin|date='Y-m-d',###}--></span>
               <!--  <span>{{planInfo.plan_planattribute}}</span> -->
            </li>
            <li class="details2 clearfix">
                <span>计划名称：</span>
                <div>{{planInfo.plan_name}}</div>
            </li>
            <li class="details3 clearfix">
                <span>所属项目：</span>
                <div>基站系统</div>
            </li>
            <li class="details3 clearfix">
                <span>所属任务：</span>
                <div>前端开发</div>
            </li>
            <li class="details3 clearfix">
                <span>发   起   人：</span>
                <div>{{planInfo.plan_executor}}</div>
            </li>
            <li class="details4 clearfix">
                <span>预期目标：</span>
                <div>{{planInfo.plan_expectobjective}}</div>
            </li>
            <li class="details5 clearfix">
                <span>计划时间：</span>
                <div>{{planInfo.plan_planbegin}} 至 {{planInfo.plan_planover}}</div>
            </li>
            <li class="details5 clearfix">
                <span style="display:inline-block;">判定结果：</span>
                <select name="" id="plan_state_select">
                    <option value="">请选择判定结果</option>
                     <option value="1">完成</option>
                    <option value="4">搁置</option>
                    <option value="5">取消</option>
                    <!-- <if condition="($planInfo['plan_executor']) neq session('ee_id')"> -->
                        <option value="2">重提</option>
                        <option value="3">转移</option>
                   <!--  </if> -->
                </select>
            </li>
            <div class="plan_true">
                <li class="details5 clearfix">
                    <p style="text-align:left;">计划反馈</p>
                    <textarea class="plan_feedback">{{planInfo.plan_realityresult}}</textarea>
                </li>
            </div>
            <!--计划转移-->
            <div class="plan_transfer" style="display:none;">
                <li class="transferTo hUI-select clearfix">
                    <span>转移目标:</span>
                    <select type="text" name="" class="">
                        <!-- <volist name="userList" id="vo">
                            <option value="{$vo.ee_id}">{$vo.ee_name}</option>
                        </volist> -->
                    </select>
                </li>
                <li class="transferTime clearfix">
                    <span>结束时间:</span>
                    <div class="iDate full" style="width:4.4rem;">
                        <input type="text" name="plan_planover" placeholder="请选择结束时间">
                        <button type="button" class="addOn"></button>
                    </div>
                </li>
                <!--<span class="transferbtn" plan_id='{$planInfo.plan_id}' onclick="transferfn(this)">确定</span>-->
            </div>
            <!--计划重提-->
            <div class="plan_agin" style="display:none;">
                <li class="aginTime clearfix">
                    <span>结束时间:</span>
                    <div class="iDate full">
                        <input type="text" name="plan_planover" placeholder="请选择结束时间">
                        <button type="button" class="addOn"></button>
                    </div>
                </li>
                <!--<span class="aginbtn" plan_id='{$planInfo.plan_id}' onclick="aginfn(this)">确定</span>-->
            </div>
            <span class="btnsmall" @click="realityresult(this)">提交计划反馈</span>
            <span class="btnsmall plansure" @click="finishfn()">确定</span>
        </ul>
    </div>
</template>
<script>
     export default {
        name:'planeditpage',
        data(){
            return {
                planInfo:{}
            }
        },
        created:function(){
            var that = this;
            that.$http.get('../../static/json/getPlanData.json').then(function(res){
                console.log(res.body);
                that.planInfo = res.body;
            })
            //console.log('!!!!',this.$route.query)
        },
        methods:{
            realityresult:function(){
                this.$router.go(-1);
            },
            finishfn:function(){
                this.$router.go(-1);
            }
        }

     }
</script>
