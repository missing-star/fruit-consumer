<template>  
    <view class="container">  
		<uni-nav-bar fixed title="消息详情" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class='docker'>
			<view class='swp'>
				<image src='../../static/images/ccc.jpg'></image>
			</view>	
			<view class='title'>首届中国国际进口博览会开幕式侧记</view>
			<view class='intro'>显示店名 | 3小时</view>
			<view class='title-s'>中标题中标题</view>
			<view class='content'>
				 文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息 文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息 文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息
			</view>
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
	view.container{
		padding-top: 50upx;
	}
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
	.swp{
		height:350upx;
		width:100%;
		padding-top:30upx;
	}
	.swp image{
		width: 100%;
		height:100%;
	}
	.title{
		height:120upx;
		font-size:44upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(32,32,32,1);
		line-height:60upx;
		margin-top: 20upx;
	}
	.intro{
		height:34ux;
		font-size:24upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(136,136,136,1);
		line-height:34upx;
		margin-top: 40upx;
	}
	.title-s{
		height:44upx;
		font-size:32upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:44upx;
		margin-top: 20upx;
	}
	.content{
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(136,136,136,1);
		line-height:40upx;
		margin-top: 20upx;
	}
</style>