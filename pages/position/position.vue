<template>
	<view class="container">
		<uni-nav-bar fixed title="位置定位" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class="docker">
			<view class="add-site" @click='add_site'>+ 添加地址</view>
		</view>
		<view class='time-position'>
			<view class='address'>
				泥潭新苑12栋2室
			</view>
			<view class='confirm-use'>使用当前位置</view>
		</view>
		<view class="line"></view>
		<view class='title'>
			常用地址
		</view>
		<view class="line"></view>
		<view class="address-lists">
			<view class="scroll-views">
				<view class='address-info'>
					<view class="site-list">
						<view class='home-site'>
							泥潭新苑12栋2室
						</view>
						<view class="is_default">
							默认地址
						</view>
					</view>
					<view class='site'>江苏省南京市江宁区某某路某某小区3栋 …</view>
				</view>
				<view class="line"></view>
				<view class='address-info'>
					<view class="site-list">
						<view class='home-site'>
							泥潭新苑12栋2室
						</view>
						
					</view>
					<view class='site'>江苏省南京市江宁区某某路某某小区3栋 …</view>
				</view>
				<view class="line"></view>
				<view class='address-info'>
					<view class="site-list">
						<view class='home-site'>
							泥潭新苑12栋2室
						</view>
						
					</view>
					<view class='site'>江苏省南京市江宁区某某路某某小区3栋 …</view>
				</view>
				<view class="line"></view>
				<view class='address-info'>
					<view class="site-list">
						<view class='home-site'>
							泥潭新苑12栋2室
						</view>
						
					</view>
					<view class='site'>江苏省南京市江宁区某某路某某小区3栋 …</view>
				</view>
				<view class="line"></view>
				<view class='address-info'>
					<view class="site-list">
						<view class='home-site'>
							泥潭新苑12栋2室
						</view>
						
					</view>
					<view class='site'>江苏省南京市江宁区某某路某某小区3栋 …</view>
				</view>
				<view class="line"></view>
				<view class='address-info'>
					<view class="site-list">
						<view class='home-site'>
							泥潭新苑12栋2室
						</view>
						
					</view>
					<view class='site'>江苏省南京市江宁区某某路某某小区3栋 …</view>
				</view>
			</view>
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
			add_site:function(){
				this.jump('../editSIte/editSIte')
			},
			jump(str){
				uni.navigateTo({
					url: str
				});
			},
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
	margin: 150upx 28upx 0 28upx;
	width:694upx;
	height:92upx;
	background:rgba(255,255,255,1);
	box-shadow:0upx 0upx 8upx 0upx rgba(0,0,0,0.15);
	border-radius:12upx;
	font-size:38upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(0,0,0,1);
	line-height:92upx;
}
.add-site{
	margin-left: 20upx;
}
.time-position{
	margin: 58upx 28upx 19upx 28upx ;
	display: flex;
	align-items: center;
	height: 58upx;
	line-height: 58upx;
	font-weight:500;
	font-size:30upx;
	font-family:PingFangSC-Medium;
}
.confirm-use{
	color: #FE7204;
	width:238upx;
	height:58upx;
	border-radius:12upx;
	border:2upx solid rgba(254,114,4,1);
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}
.address{
	width:461upx;
	height:58upx;
}
.line{
	width:100%;
	height:2upx;
	background:rgba(235,241,243,1);
}
.title{
	height: 106upx;
	line-height: 150upx;
	font-weight:500;
	font-size:30upx;
	font-family:PingFangSC-Medium;
	color: #000000;
	margin: 0 28upx;
}
.address-lists{
	font-family:PingFangSC-Medium;
	height:824upx;
	width:100%;
	overflow:hidden;
}
.address-info{
	margin: 38upx 28upx 19upx 28upx ;
}
.site-list{
	position: relative;
	height: 46upx;
	display: flex;
}
.home-site{
	font-size:16px;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	position: absolute;
	bottom:2upx;
}
.is_default{
	margin-left: 319upx;
	width:115upx;
	height:46upx;
	background:rgba(0,0,0,1);
	border-radius:7upx;	
	font-size:12px;
	font-weight:400;
	color:rgba(255,255,255,1);
	line-height: 46upx;
	text-align: center;
}
.site{
	height:17px;
	font-size:23upx;
	margin-top: 11upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(136,136,136,1);
	line-height:17px;
}
.scroll-views{
	width: 100%;
	height: 100%;
	overflow-x:hidden;
	overflow-y: auto;
}
</style>
