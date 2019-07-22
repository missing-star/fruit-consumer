<template>
	<view class='content'>
		<uni-nav-bar fixed title="商品评价" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class='comments-docker'>
			<view class='comment'>
				<view class='comment-info'>
					<image src="http://www.idash.top/images/girl.png" alt=""></image>
					<text class='user-name'>用户名大标题</text>
					<text class='user-level'>V5</text>
					<text class='user-time'>2018.06.12</text>
				</view>
				<view class='comment-content'>
					用户评论文本信息用户评论文本信息用户评论文本信息用户评论文本信息用户评论文本信息用户评论文本信息用户评论文本信息用户评论文本信息用户评论
				</view>
				<view class='comment-imgs'>
					<image src='http://www.idash.top/images/fruit6.png'></image>
					<image src='http://www.idash.top/images/fruit7.png'></image>
					<image src='http://www.idash.top/images/fruit8.png'></image>
				</view>
			</view>
			<view class='lines'></view>
		</view>
		<view class='more'>··········   点击加载更多   ··········</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	export default {
		data() {
			return {
				
			}
		},
		components: {
			uniNavBar,
			uniIcon
		},
		methods: {
			
		}
	}
</script>

<style>
	body,html{
		background:#F6F6F6
	}
image.back-icon{
	width:34upx;
	height:34upx;
	margin-left: 22upx;
	position:relative;
	top:12.5upx;
}
.comments-docker{
	margin-top: 150upx;
}
.comment-info {
	width: 92%;
	margin-left: 4%;
	height:60upx;
	line-height: 60upx;
	display: flex;
	align-items: center;
	position:relative;
}
.comment-info image{
	width:60upx;
	height:60upx;
}
.user-name{
	font-size:32upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	margin-left: 20upx;
}
.user-level{
	margin-left: 6upx;
	background:linear-gradient(180deg,rgba(255,155,7,1) 0%,rgba(254,98,3,1) 100%);
	border-radius:20upx;
	font-size:28upx;
	font-family:PingFangSC-Semibold;
	font-weight:600;
	color:rgba(255,255,255,1);
	width:60upx;
	height:40upx;
	text-align: center;
	line-height: 43upx;
}
.user-time{
	height:34upx;
	font-size:24upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(170,170,170,1);
	line-height:34upx;
	position:absolute;
	right:0;
	top:0;
}
.comment-content{
	width: 92%;
	margin-left: 4%;
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
	line-height:40upx;
	margin-top: 24upx;
}
.comment-imgs{
	display:flex;
	flex-wrap: wrap;
	width: 96%;
	margin-left: 4%;
}
.comment-imgs image{
	width: 220upx;
	height:220upx;
	margin: 20upx 16upx 0 0;
}
.lines{
	width: 100%;
	height:4upx;
	background:#F6F6F6;
	margin-top: 40upx;
}
.more{
	margin-top: 40upx;
	font-size:24upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(188,199,204,1);
	text-align: center;
}

</style>
