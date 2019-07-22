<template>  
    <view class="container">  
		<uni-nav-bar fixed title="我的建议" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class='docker'>
			<view class='title'>选择类型</view>	
			<view class='check-type'>
				<view class='type'>
					<image src="../../static/images/checked.png"></image>
					<text class='type-text checked'>线上体验优化</text>
				</view>
				<view class='type'>
					<image src='../../static/images/check.png'></image>
					<text class='type-text'>线下产品建议</text>
				</view>
			</view>
			<view class='suggest'>
				<view class='suggest-title'>建议描述</view>
				<view class='suggest-con'>
					<textarea value="" placeholder="输入您的描述" max-length='200'/>
					<view class='num-cot'>0/200</view>
				</view>
				<view class='annex'>
					<view class='annex-file'>
						<image src='../../static/images/exam.jpg'></image>
						<image src='../../static/images/delete.png' id='delete'></image>
					</view>
					<view class='annex-file'>
						<image src='../../static/images/exam.jpg'></image>
						<image src='../../static/images/delete.png' id='delete'></image>
					</view>
					<view class='annex-file'>
						<image src='../../static/images/upload.png' id='upd'></image>
						<view class='num-cut'>2/3</view>
					</view>
				</view>
			</view>
		</view>
		<view class='logout'>提交</view>
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
			},
			back:function(){
				uni.navigateBack({
					delta: 1
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
		margin:150upx 4% 0 4%;
	}	
	.container{
		width: 100%;
		height:100%;
		position:fixed;
		top:0;
		left:0;
		bottom:0;
		background:#fff;
	}
	.uni-list-cell__container{
		padding:24upx 0
	}
	.logout{
		width:92%;
		height:80upx;
		background:rgba(254,114,4,1);
		border-radius:50upx;
		position:fixed;
		left: 4%;
		bottom:30upx;
		line-height:80upx;
		text-align:center;
		font-size:36upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
	.title{
		height:94upx;
		padding-top:50upx;
		
	}
	.check-type{
		display:flex;
		width:100%;
	}
	.check-type image{
		width: 40upx;
		height:40upx;
		
	}
	.type{
		width: 50%;
		margin: 40upx 0 0 50upx;
		height:40upx;
		line-height:40upx;
		display: flex;
		align-items: center;
	}
	.type-text{
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(136,136,136,1);
		margin-left: 20upx;
	}
	.checked{
		color:rgba(254,114,4,1);
	}
	.suggest{
		margin-top: 100upx;
	}
	.suggest-title{
		height:44upx;
		font-size:32upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:44upx;
	}
	.suggest-con{
		width:100%;
		height:240upx;
		background:rgba(255,255,255,1);
		border-radius:12upx;
		margin-top: 20upx;
		position:relative;
	}
	.suggest-con textarea{
		width: 100%;
		height:100%;
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(136,136,136,1);
	}
	.num-cot{
		position:absolute;
		right:20upx;
		bottom:10upx;
		font-size:24upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(136,136,136,1);
	}
	.annex{
		margin-top: 96upx;
		display: flex;
	}
	.annex image{
		width: 160upx;
		height: 160upx;
	}
	.annex-file{
		position: relative;
		margin-right: 30upx;
		width: 160upx;
		height:160upx;
	}
	#delete{
		width: 32upx;
		height:32upx;
		position:absolute;
		top:-16upx;
		right:-16upx;
	}
	#upd{
		width: 76upx;
		height:68upx;
		margin-left: 42upx;
		margin-top: 28upx;
	}
	.num-cut{
		width: 100%;
		text-align:center;
		margin-top: 14upx;
		height:40upx;
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(136,136,136,1);
		line-height:40upx;
	}
</style>