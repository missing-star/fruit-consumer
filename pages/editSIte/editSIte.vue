<template>
	<view class="container">
		<uni-nav-bar fixed title="编辑地址" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class="docker">
			<view class="site-area">
				<text class='site-title'>所在地区</text>
				<text class="site-info">江苏省南京市江宁区（点击跳转地图页）</text>
				<image src='../../static/images/right.png' class='time-position'></image>
			</view>
			<view class="line"></view>
			<view class="site-address">
				<text class='site-title'>详细地址</text>
				<text class="site-info">泥潭小区3栋1单元1203</text>
			</view>
			<view class="line"></view>
			<view class="set-default">
				<view class='set-tip'>
					设为默认地址
				</view>
				<view class="set-intro">
					每次下单会使用该地址
				</view>
				<image src='../../static/images/open-btn.png' class='set-status'></image>
			</view>
			<button class='btn del-btn'>删除</button>
			<button class='btn save-btn'>保持并使用</button>
		</view>
		
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		data() {
			return {
				
			}
		},
		components: {
			uniNavBar
		},
		methods: {
			back:function(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
.container{
	width: 100%;height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: 0;
	padding: 0;
	overflow-y: hidden;
}
view.left-part {
	white-space: nowrap;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
image.back-icon{
	width:34upx;
	height:34upx;
	margin-left: 22upx;
	position:relative;
	top:12.5upx;
}
view.docker{
	margin: 180upx 23upx 0 23upx;
	width:704upx;
	border-radius:12upx;
	font-size:38upx;
	font-family:PingFangSC-Medium;
}
text.site-title{
	font-size:27upx;
	font-weight:400;
	color:rgba(136,136,136,1);
}
text.site-info{
	font-size:27upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
	margin-left: 30upx;
}
image.time-position{
	width:27upx;
	height:27upx;
	position: absolute;
	right: 0;
	top: 4upx;
}
view.site-area,view.site-address{
	width: 100%;
	height: 27upx;
	line-height:27upx ;
	align-items: center;
	position: relative;
	margin-bottom: 22upx;
}
.line{
	width:100%;
	height:2upx;
	background:rgba(235,241,243,1);
}
view.site-address{
	margin-top: 28upx;
}
view.set-default{
	margin-top: 38upx;
	position: relative;
	height:72upx;
}
image.set-status{
	width:99upx;
	height:72upx;
	position: absolute;
	top:0;
	right:0;
}
view.set-tip{
	height:39upx;
	font-size:27upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
	line-height:39upx;
}
view.set-intro{
	height:33upx;
	font-size:23upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(136,136,136,1);
	line-height:33upx;
}
button{
	width:92%;
	margin: 0 6upx;
}
button.del-btn{
	position: fixed;
	bottom:126upx;
	font-size:33upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(93,93,93,1);
	background: #E8E8E8;
	border:none
}
button.save-btn{
	position: fixed;
	bottom:18upx;
	font-size:35upx;
	font-weight:500;
	color:rgba(255,255,255,1);
}
</style>
