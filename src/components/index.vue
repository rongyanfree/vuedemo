<template>
  <div class="page">
    <div class="screen clearfix">
      <li :class="num==index?'clickactive':''" v-for="(item,index) in screenplanbtn" @click='screenplan(index,item.param)'>{{item.text}}</li>
      <img class="add_img" src="../../static/img/icon_add.png" @click="plandetailsfn('')">
    </div>
    <div class="searchwarp" v-show="searchflag">
        <select id="select0">
            <option value="">请选择公司</option>
            <option value="1DE189A9-3B70-4DF9-B923-29FF878F34B0">国润建达</option>
            <option value="46C428C4-588A-475B-911F-FAE73C79E1BE">江阴包装</option>
            <option value="66D1C652-BE61-4C13-9C33-C6A7E5E0DA02">新逸霖</option>            
          </select>
        <select name="" id="select1">
            <option value="">请选择部门</option>
            <!--foreach name="departmentList" item="vo" key="k">
                <option value=""></option>
            </foreach>-->
        </select>
        <select name="" id="select2">
          <option>请选择成员</option>
          <option value="B0F7248A-653C-4ECD-9793-EDC6CCDCB5DB">侯朝慧</option>
        </select>
        <div class="getPlanDataWithLimit">
            <span v-for="(item,index) in planDataWithLimit" :class="PlanDataWithLimitnum==index?'clickactive':''" @click='screenplanWithLimit(index)'>{{item.text}}</span>
        </div>
    </div>
          <div class="orderDIVS clearfix">
              <li v-for="item in planDatebyTime" :class="item.classflag==true?'left_order':'right_order'" @click="planDatebyTimefn(item.param)">
                  <span>{{item.text}}</span>
                  <img v-show="item.imgshow" src="../../static/img/icon_order1.png">
                  <img v-show="!item.imgshow" src="../../static/img/icon_order2.png">
              </li>
          </div>
          <div class="input_add clearfix">
        <div class="iDate full begintimewarp" id='begintimewarp'>
          <input type="text" class="begintime" :value="begintime" placeholder="开始时间">
          <button type="button" class="addOn"></button>
        </div>
        <div class="iDate full finishtimewarp">
          <input type="text" class="finishtime" :value="finishtime" placeholder="结束时间">
          <button type="button" class="addOn"></button>
        </div>
        <select type="text" name="" class="status">
            <option value="">状态</option>
            <option value="0">进行中</option>
            <option value="1">完成</option>
            <option value="2">重提</option>
            <option value="3">转移</option>
            <option value="4">搁置</option>
            <option value="5">取消</option>
            <option value="6">无效</option>
        </select>
    </div>
    <div class="searchFeedback">
        <input type="text" v-model="searchtext" placeholder="根据计划反馈关键字查询相关计划" >
        <img src="../../static/img/icon_search36.png" alt="" @click="searchbyField">
    </div>
    <ul class='planlist'>
      <li class="plandetails clearfix" @click="plandetailsfn(item.plan_id)" style="color: orange;" v-for="(item, key, index) in getselfplan" v-bind:key="item.plan_id">
        <dl class="planleft">
          <dt style="background-color: orange;">
            <span>{{item.executorname}}</span>
            <span>{{item.initiatorname}}</span>
          </dt>
          <dt style="background-color: orange;">
            <span>{{item.plan_reactivation}}</span>
            <span>{{item.plan_executordecide}}</span>
          </dt>
        </dl>
        <div class="plancenter">
          <p>{{item.plan_planbegin}}</p>
          <p>{{item.plan_planover}}</p>
        </div>
        <i style="display: inline-block;width: 0.6rem;height:2px;"></i>{{item.plan_name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import planeditpage from '@/components/index/planeditpage'
  export default {
    name: 'index',
    data () {
      return {
        screenplanbtn:[
          {
            classflag:true,
            text:'自己',
            param:'',
          },
          {
            classflag:false,
            text:'判定',
            param:'decideType=push'
          },
          {
            classflag:false,
            text:'月末判定',
            param:'decideType=end'
          },
          {
            classflag:false,
            text:'查询',
            param:'search'
          }
        ],
        planDataWithLimit:[
          {
            text:'一天内',
          },
          {
            text:'一周内',
          },
          {
            text:'一月内'
          }
        ],
        planDatebyTime:[
          {
            text:'开始时间',
            imgshow:true,
            classflag:true,
            param:'plan_planbegin',
          },
          {
            text:'结束时间',
            imgshow:true,
            classflag:false,
            param:'plan_planover',
          }
        ],
        num:0,
        PlanDataWithLimitnum:-1,
        searchflag:false,
        searchtext:'',
        getselfplan:{},
        begintime:'',
        finishtime:'',
      }
    },
    beforeRouteLeave(to,from,next){
      let scrollHeight = document.getElementById('app').scrollTop;
      this.$store.state.scrollHeight = scrollHeight;
      next()
    },
    activated(){
      document.getElementById('app').scrollTop = this.$store.state.scrollHeight || 0;
    },
    mounted:function(){ 
      let that = this;

      let calendar1 = new datePicker();
      calendar1.init({
         'trigger': '#begintimewarp', /*选择器，触发弹出插件*/
         'type': 'date',/*date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择*/
         'minDate':'1900-1-1',/*最小日期*/
         'maxDate':new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),/*最大日期*/
         'onSubmit':function(){/*确认时触发事件*/
             that.begintime = calendar1.value;
         },
         'onClose':function(){/*取消时触发事件*/

         }
      });

      let calendar2 = new datePicker();
      calendar2.init({
         'trigger': '.finishtimewarp', /*选择器，触发弹出插件*/
         'type': 'date',/*date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择*/
         'minDate':'1900-1-1',/*最小日期*/
         'maxDate':new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),/*最大日期*/
         'onSubmit':function(){/*确认时触发事件*/
             that.finishtime = calendar2.value;
         },
         'onClose':function(){/*取消时触发事件*/

         }
      });
      that.$options.methods.getplandata(that,'');

      that.common.footertab(that); // tab按钮的状态
    },
    components:{
        planeditpage
    },
    methods:{
      getplandata(that,param){
        that.$http.get('../../static/json/getselfplan.json?param='+param).then(function(res){
        that.getselfplan = res.body;
        for(var i in that.getselfplan){
          switch (that.getselfplan[i].plan_executordecide){
                    case '0' :
                        that.getselfplan[i].plan_executordecide = '进行中';
                        break;
                    case '1' :
                        that.getselfplan[i].plan_executordecide = '完成';
                        break;
                    case '2' :
                        that.getselfplan[i].plan_executordecide = '重提';
                        break;
                    case '3' :
                        that.getselfplan[i].plan_executordecide = '转移';
                        break;
                    case '4' :
                        that.getselfplan[i].plan_executordecide = '搁置';
                        break;
                    case '5' :
                        that.getselfplan[i].plan_executordecide = '取消';
                        break;
                    case '6' :
                        that.getselfplan[i].plan_executordecide = '无效';
                        break;
                }
          that.getselfplan[i].plan_reactivation == 0 ? that.getselfplan[i].plan_reactivation = '新计划' : that.getselfplan[i].plan_reactivation = '重提' + that.getselfplan[i].plan_reactivation + '次';
          /* that.getselfplan[i].plan_planbegin = that.$options.methods.timeStamp(res.body[i].plan_planbegin);
             that.getselfplan[i].plan_planover = that.$options.methods.timeStamp(res.body[i].plan_planover);
             调用当前文件methods中的方法
          */
          that.getselfplan[i].plan_planbegin = that.common.timeStamp(res.body[i].plan_planbegin);
          that.getselfplan[i].plan_planover = that.common.timeStamp(res.body[i].plan_planover);
        }
        
      },function(res){
          
      });
      },
      plandetailsfn:function(id){
        let plan_id = id;
        this.$router.push({
          path:'/index/planeditpage',
          query:{
            id:plan_id
          }
        })
      },
      screenplan(index,param){
        this.num = index;
        console.log(index,param);
        if(param == 'search'){
          this.searchflag = true;
        }else{
          this.searchflag = false;
        }
      },
      screenplanWithLimit(index){
        this.PlanDataWithLimitnum = index;
      },
      searchbyField(){
        console.log(this.searchtext);
      },
      planDatebyTimefn(param){
        let parameter = null;
        if(param == 'plan_planbegin'){
          this.planDatebyTime[0].imgshow = !this.planDatebyTime[0].imgshow;
          if(this.planDatebyTime[0].imgshow == true){
            parameter = param + ' ASC';
          }else{
            parameter = param + ' DESC';
          }
        }else{
          this.planDatebyTime[1].imgshow = !this.planDatebyTime[1].imgshow;
          if(this.planDatebyTime[1].imgshow == true){
            parameter = param + ' ASC';
          }else{
            parameter = param + ' DESC';
          }
        }
        this.$options.methods.getplandata(this,parameter)

      },

    }
  }
</script>
