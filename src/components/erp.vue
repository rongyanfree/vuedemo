<template>
  <section>
    <p class="addproject_btn clearfix">
      <span class="addtask_btn" @click="addProjectbtnfn(this)">添加项目</span>
    </p>
  	<ul class="prolist">
      <div  v-for="(item,index) in prodata">
          <li class="proli" @click="showtask(item.proj_id,index)">
              <p class="proname">{{item.proj_name}}</p>
              <p class="promsg clearfix" v-show="item.proflag">
              	<span class="project_status"> </span>
              	<span class="addtask_btn" @click="addtaskfn(this)">添加任务</span>
              	<span class="addtask_btn" @click="addProjectbtnfn(this)">查看项目</span>
              </p>
          </li>
          <ul class="tasklist" v-show="item.promsgflag" @click="showpromsg(item.proj_id,index)">
              <li class="proli">
                  <p class="proname">任务AAA</p>
                  <p class="promsg clearfix" v-show="item.taskbtnflag">
                      <span class="project_status"> </span>
                      <span class="addtask_btn" @click="addtaskfn">修改任务</span>
                  </p>
              </li>
          </ul>
      </div>
    </ul>
  </section>
</template>
<script>
	export default {
		name: 'erp',
		data(){
			return {
				prodata:[],
			}
		},
		created:function(){
			let that = this;
  		that.$http.get('../../static/json/prodata.json').then(function(res){
  			console.log(res.body);
  			for(var i =0;i<res.body.rows.length;i++){
  				res.body.rows[i].proflag = false;
          res.body.rows[i].promsgflag = false;
          res.body.rows[i].taskbtnflag = false;
  			}
  			that.prodata = res.body.rows;
  		})
      that.common.footertab(that); // tab按钮的状态
		},
		methods:{
			showtask(id,index){
				this.prodata[index].proflag = !this.prodata[index].proflag;
        this.prodata[index].promsgflag = !this.prodata[index].promsgflag;
			},
      showpromsg(id,index){
        this.prodata[index].taskbtnflag = !this.prodata[index].taskbtnflag;
      },
      addProjectbtnfn(){
        this.$router.push({
          path:'/erp/addproj',
          query:{
            'id':'11111'
          }
        })
      },
      addtaskfn(){
        this.$router.push({path:'/erp/addtask'})
      }
		}
	}
</script>