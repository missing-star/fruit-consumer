<template>
	<view class='content'>
		<uni-nav-bar fixed title="收货地址" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class="contents" >
			<view v-for="i,index in 4" class='address-info'>
				<image src='http://www.idash.top/images/check1.png' class='check'></image>
				<view class="site-info">
					<view class='userinfo'>
						<text>Aresh</text>
						<text class='phone'>12345678909</text>
						<text class="default" v-if='index==is_default'>默认地址</text>
					</view>
					<view class='address'>
						江苏省南京市江宁区某某路某某小区3栋江苏省南京市江宁区某某路某某小区3栋 
					</view>
				</view>
				<image src="http://www.idash.top/images/edit-icon.png" class='edit' @click='editSite'></image>
			</view>
		</view>
		<!-- 遮罩层 -->
		<view class='add-btn' @click='site'>添加地址</view>
		
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	export default {
		data() {
			return {
				is_default:0
			}
		},
		components: {
			uniNavBar,
			uniIcon
		},
		methods: {
			navigateTo:function(str){
				uni.navigateTo({
					url: str,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			back:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			site:function(){
				this.navigateTo('../edit-site/edit-site')
			},
			editSite:function(){
				this.navigateTo('../editSIte/editSIte')
			}
		}
	}
</script>

<style>
.contents{
	margin-top:150upx;
	font-family:PingFangSC-Regular;
}
image.back-icon{
	width:34upx;
	height:34upx;
	margin-left: 22upx;
	position:relative;
	top:12.5upx;
}
.address{
	width: 456upx;
	text-overflow: ellipsis;
	overflow:hidden;
	white-space: nowrap;
	font-size:24upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(136,136,136,1);
	margin-top: 12upx;
}
.check{
	width: 40upx;
	height:40upx;
	margin:0 40upx;
}
.address-info{
	display: flex;
	align-items: center;
	width:93.6%;
	margin-left: 3.7%;
	height:160upx;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.15);
	border-radius:12upx;
	margin-bottom: 30upx;
}
.edit{
	width: 44upx;
	height:44upx;
	margin-left: 50upx;
}
.userinfo{
	font-size:32upx;
	font-weight:500;
	color:rgba(51,51,51,1);
}
.add-btn{
	width:92%;
	margin-left: 4%;
	height:80upx;
	line-height: 80upx;
	text-align: center;
	background:rgba(254,114,4,1);
	border-radius:50upx;
	font-size:36upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(255,255,255,1);
	position:fixed;
	bottom:20upx;
}
.default{
	width:120upx;
	height:48upx;
	background:rgba(0,0,0,1);
	border-radius:8upx;
	font-size:24upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(255,255,255,1);
	padding: 4upx 10upx;
	margin-left: 30upx;
}
.phone{
	margin-left: 30upx;
}
</style>
