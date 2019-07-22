<template>  
    <view class="container">  
		<uni-nav-bar fixed title="我的" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class='docker'>
			<view class='user-info'>
				<view class='user-wel'>Money</view>
				<view class='wel'>点击编辑昵称</view>
				<image src='http://www.idash.top/images/girl.png' class='avatar'></image>
			</view>
			<view class='mess-title'>基本信息</view>
			<view class='lists'>
				<text class='list-title'>性别</text>
				<text class='list-con blur'>选择性别</text>
				<image src='http://www.idash.top/images/right.png' class='right'></image>
			</view>
			<view class='line'></view>
			<view class='lists'>
				<text class='list-title'>生日</text>
				<text class='list-con blur'>2018.9.12.</text>
				<image src='http://www.idash.top/images/right.png' class='right'></image>
			</view>
			<view class='line'></view>
			<view class='lists'>
				<text class='list-title'>地址</text>
				<text class='list-con blur'>江苏省南京市</text>
				<image src='http://www.idash.top/images/right.png' class='right'></image>
			</view>
			<view class='line'></view>
			<view class='lists'>
				<text class='list-title'>职业</text>
				<text class='list-con blur'>学生</text>
				<image src='http://www.idash.top/images/right.png' class='right'></image>
			</view>
			<view class='line'></view>
			<view class='lists'>
				<text class='list-title'>学生证</text>
				<text class='list-con blur'>显示职业</text>
				<image src='http://www.idash.top/images/right.png' class='right'></image>
			</view>
			<view class='line'></view>
			<view class='lists'>
				<text class='list-title'>学校</text>
				<text class='list-con blur'>显示学校名称</text>
				<image src='http://www.idash.top/images/right.png' class='right'></image>
			</view>
			<view class='line'></view>
		</view>
		<view class='btn'>保存</view>
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
		position:fixed;
		top:150upx;
		left:4%;
	}	
	.user-info{
		height:120upx;
		background:rgba(255,255,255,1);
		
		margin-bottom:20upx ;
		position:relative;
	}

	.ulist{
		margin-top: 30upx;
		height:600upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.15);
		border-radius:12upx;
	}
	.avatar{
		width: 120upx;
		height:120upx;
		position:absolute;
		top:0upx;
		right:20upx;
	}
	.user-wel{
		position:absolute;
		left:20upx;
		height:74upx;
		font-size:52upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:74upx;
	}
	.wel{
		position:absolute;
		top:78upx;
		left:20upx;
		height:34upx;
		font-size:24upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(164,176,181,1);
		line-height:34upx;
	}
	.level{
		position:absolute;
		top:126upx;
		left:20upx;
		height:44upx;
		font-size:32upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(254,114,4,1);
		line-height:44upx;
	}
	.level-num{
		position:absolute;
		top:162upx;
		left:20upx;
		height:60upx;
		font-size:24upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height:60upx;
		width:530upx;
		background:rgba(255,188,155,1);
		border-radius:30upx;
		text-align: center;
	}
	.right{
		width: 14upx;
		height:24upx;
		position:absolute;
		right:0;
		top:20upx;
	}
	.lists{
		height:80upx;
		diaplay:flex;
		align-items: center;
		position:relative;
		margin-top: 40upx;
	}
	.list-title,.list-con{
		height:40upx;
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:40upx;
	}
	.blur{
		height:40upx;
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(170,170,170,1);
		line-height:40upx;
	}
	.list-con{
		margin-left:68upx;
	}
	.line{
		width:100%;
		height:1px;
		background:rgba(246,246,246,1);
	}
	.btn{
		width:92%;
		height:80upx;
		line-height:80upx;
		text-align: center;
		background:rgba(254,114,4,1);
		border-radius:50upx;
		font-size:36upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		position: fixed;
		bottom:30upx;
		left:4%;
	}
</style>