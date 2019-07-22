<template>
	<view class='content'>
		<uni-nav-bar fixed title="发布评价" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class='comments-docker'>
			<view class='comment'>
				<view class='comment-info'>
					<image src="http://www.idash.top/images/girl.png" alt=""></image>
					<text class='user-name'>用户名大标题</text>
				</view>
				<view class='line'></view>
				<view class='comment-content'>
					<textarea value="" class="con-area" placeholder="您的建议是我们成长的动力～" />
				</view>
				<view class='comment-imgs'>
					<view class="up-btn">
						<image src='http://www.idash.top/images/get-pic.png'></image>
						<view>2/3</view>
					</view>
					<view class='up-img'>
						<image src='http://www.idash.top/images/delete-icon.png' id='del-img'></image>
						<image src='http://www.idash.top/images/fruit7.png'></image>
					</view>
					<view class='up-img'>
						<image src='http://www.idash.top/images/delete-icon.png'  id='del-img'></image>
						<image src='http://www.idash.top/images/fruit8.png'></image>
					</view>
				</view>
			</view>
		</view>
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
	
image.back-icon{
	width:34upx;
	height:34upx;
	margin-left: 22upx;
	position:relative;
	top:12.5upx;
}
.comment{
	width:92%;
	margin-left: 4%;
	height:480upx;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 12upx 0px rgba(0,0,0,0.15);
	border-radius:12upx;
	margin-top: 20upx;
}
.comments-docker{
	margin-top: 108upx;
}
.comment-info {
	width: 92%;
	margin-left: 4%;
	height:120upx;
	line-height: 120upx;
	display: flex;
	align-items: center;
	position:relative;
}
.comment-info image{
	width:80upx;
	height:80upx;
}
.user-name{
	font-size:32upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	margin-left: 20upx;
}
.line{
	width: 100%;
	height:1upx;
	background: #F6F6F6;
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
	margin-top: 20upx;
	margin-left: 60upx;
}
.comment-imgs image{
	width: 160upx;
	height:160upx;
	margin-right: 46upx;
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
.con-area{
	height:134upx;
}
.up-btn{
	width: 160upx;
	height:160upx;
	text-align: center;
	border:1px solid rgba(216,216,216,1);
	margin-right: 46upx;
}
.up-btn image{
	width: 76upx;
	height:68upx;
	margin:10upx 42upx 0  42upx;
}
.up-img{
	position:relative;
}
#del-img{
	width:32upx;
	height:32upx;
	position:absolute;
	top:-16upx;
	right:-16upx;
	z-index:9
}
</style>
