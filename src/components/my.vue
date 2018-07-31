<template>
	<div>
		<div class="logo">
			<img id="user_avatar" src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKhoQUKOEru0KazMSSDUichZMHQqia4xy4YCW498rRpHSZMu71qZBI7bwDDwxFtW9FHQyxTKk55ZVuQ/132" class="touxiang">
			<p id="user_name">侯朝慧</p>
		</div>
		<div class="weui-cells page__category-content">
			<a class="weui-cell js_item" href="javascript:void(0);" @click="myseconend('myprofile')">
				<div class="weui-cell__bd">
					<p>我的资料</p>
				</div>
				<div class="weui-cell__ft"></div>
			</a>
            <a class="weui-cell js_item" href="javascript:void(0);" @click="myseconend('rankinglistpage')">
                <div class="weui-cell__bd">
                    <p>积分排行</p>
                </div>
                <div class="weui-cell__ft"></div>
            </a>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'my',
		mounted(){
			let that = this;
			that.common.footertab(that); // tab按钮的状态
		},
		methods:{
			myseconend(url){
				console.log(111)
				this.$router.push({path:'/my/'+url,param:{}})
			},

		}
	}
</script>