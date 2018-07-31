<template>
	<div class="section">
		 <ul class="ycyatab clearfix">
            <li  class="ycyatabli" :class='num==index?"clickactive":""' v-for='(item,index) in litab'  @click="getYCYAListData(item.param,index)">{{item.text}}</li>
            <li><img src="../../static/img/icon_add.png" @click="addycya"/></li>
        </ul>
        <ul class="classfiytab clearfix" style="display: none;">
            <select name="" id="">
                <option value="">请选择承诺人</option>
                <!-- <foreach name="userList" item="vo">
                    <option value="{$vo.ee_id}">{$vo.ee_name}</option>
                </foreach> -->
            </select>
            <span class="classfiy-Completed">已完成</span>
            <span class="classfiy-unfinished">未完成</span>
        </ul>
       <div class="ycyalist">
            <div class="ycyadetails" v-for='(item,index) in ycyalistdata' @click="ycyadetailsfn">
            	<dl class="yayaleft">
            		<dt>
            			<span>{{item.issuer_name}}</span>
            			<span>{{item.acceptor_name}}</span>
            		</dt>
            		<dt>
            			<span style="color: lightcoral;text-shadow: 1px 1px 2px #FF0000;">{{item.acceptor_name}}</span>
            			<span>{{item.acceptor_name}}</span>
            		</dt>
            	</dl>
            	指&nbsp;&nbsp; 令:{{item.command}}<br>
            	承&nbsp;&nbsp; 诺:{{item.promise}}<br>
            	结果定义:{{item.result_define}}<br>
            	<p>
            		<em>奖惩兑现:</em>
            		<span>水果基金{{item.award_money}} 俯卧撑{{item.award_labour}}</span>
            	</p>
            	<p>
            		<em>发出时间：</em>
            		<span>{{item.created_at}}</span>
            	</p>
            	<p>
            		<em>检查时间：</em>
            		<span>{{item.updated_at}}</span>
            	</p>
            </div>
        </div>
	</div>
</template>
<script>
	export default {
		name: 'ycya',
		data(){
			return{
                litab:[
                    {
                        classflag:true,
                        param:'limit=my_promising',
                        text:'承诺中',
                    },
                    {
                        classflag:false,
                        param:'limit=my_promise',
                        text:'我承诺'
                    },
                    {
                        classflag:false,
                        param:'limit=my_check',
                        text:'我检查'
                    },
                    {
                        classflag:false,
                        param:'limit=my_issuer',
                        text:'我发布'
                    },
                    {
                        classflag:false,
                        param:'',
                        text:'承诺列表'
                    }
                ],
                num:0,   //控制tab切换的样式
				ycyalistdata:[],
			}
		},
        beforeRouteLeave(to,form,next){
          let scrollHeight = document.getElementById('app').scrollTop;
          this.$store.state.scrollHeight = scrollHeight;
          next()
        },
        activated(){
          document.getElementById('app').scrollTop = this.$store.state.scrollHeight || 0;
        },
		created(){
			let that = this;
      		that.$http.get('../../static/json/ycyalist.json').then(function(res){
      			that.ycyalistdata = res.body;
      		})
            that.common.footertab(that);
		},
		methods:{
			addycya(){
				this.$router.push({path:'/ycya/ycyadetails',param:{}})
			},
			ycyadetailsfn(){
				this.$router.push({path:'/ycya/ycyadetails',param:{}})
			},
            getYCYAListData(param,index){
                console.log(param,index)
                this.num = index;
            }

		}
	}
</script>