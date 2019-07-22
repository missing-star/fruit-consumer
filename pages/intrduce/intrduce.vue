<template>  
    <view class="container">  
		<uni-nav-bar fixed title="我的建议" style="top:0">
			<view class="left-part" slot="left">
				<image class="back-icon" src="http://www.idash.top/images/back.png" mode=""></image>
			</view>
		</uni-nav-bar>
		<view class='docker'>
			<view class='logo'><image src='http://www.idash.top/images/girl.png'></image></view>
			<view class='title'>公司名称</view>	
			<view class='title-r'>公司简介</view>
			<view class='info'>电话：<text class='cons'>0513-82350586</text></view>
			<view class='info'>传真：<text class='cons'>0513-82350586</text></view>
			<view class='info'>邮箱：<text class='cons'>0513-82350586</text></view>
			<view class='info'>网址：<text class='cons'>0513-82350586</text></view>
			<view class='info'>地址：<text class='cons'>0513-82350586</text></view>
			<view class='code'><image src='http://www.idash.top/images/girl.png'></image></view>
			<view class='info'>微信号：<text class='cons'>0513-82350586</text></view>
			<view class='company'>xxxxxxx股份有限公司</view>
		</view>
    </view>  
</template>  
<script>  
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		data() {
			return {
				TabCur: 0,
				tabList: [
					{ name: '待付款' },
					{ name: '待配送' },
					{ name: '配送中' }, 
					{ name: '待自取' },
					{ name: '已完成' },
				],
			}
		},
		components: { 
			WucTab,
			uniNavBar,
			uniList,uniListItem
		},
		methods: {
			tabChange(index) {
				this.TabCur = index;
			},
			navigateTo:function(){
				uni.navigateTo({
					url: '',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}  
</script>  
<style >
	image.back-icon{
		width:34upx;
		height:34upx;
		margin-left: 22upx;
		position:relative;
		top:12.5upx;
	}
	.docker{
		width:92%;
		margin:88upx 4% 0 4%;
	}	
	.logo{
		width: 100%;
		height:326upx;
		padding-top:86upx;
		text-align: center;
	}
	.logo image{
		width: 240upx;
		height:240upx;
	}
	.title{
		height:56upx;
		font-size:40upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:56upx;
		margin-top: 20upx;
		text-align: center;
	}
	.title-r{
		width:86%;
		margin:100upx 0 30upx 7%;
		height:60upx;
		background:rgba(214,214,214,1);
		border-radius:30upx;
		line-height: 60upx;
		text-align: center;
	}
	.info{
		color:#666666;
		font-size: 28upx;
		text-align: center;
		height:40upx;
		line-height: 40upx;
		margin-bottom: 6upx;
	}
	.cons{
		margin-left: 20upx;
		color:#333333;
		border-bottom:1px solid #333;
	}
	.code{
		width: 100%;
		height:128upx;
		margin-top: 70upx;
		text-align: center;
	}
	.code image{
		width: 128upx;
		height:128upx;
		
	}
	.company{
		height:34upx;
		font-size:24upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(136,136,136,1);
		line-height:34upx;
		margin-top: 30upx;
		text-align: center;
	}
</style>