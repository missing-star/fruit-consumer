<template>
	<view class='container'>
		<uni-nav-bar fixed title="商铺信息" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class='store-info'>
			<view class='avatar'>
				<image  src="http://www.idash.top/images/girl.png" mode=""></image>
			</view>
			<view class="store-intro">
				<view class='store-name'>爱尚水果</view>
				<view class='store-time'>
					起送 ¥38 营业：9:00-22:00
				</view>
				<view class="send-attr">
					<view class="send-type">自取</view>
					<view class="send-type">外送</view>
				</view>
			</view>
		</view>
		<view class='lines'>
		</view>
		<!-- 店铺地址 -->
		<view class='address-info'>
			<view class='site-icon'>
				<image src="http://www.idash.top/images/site2.png">
					
				</image>
			</view>
			<view class='site'>
				南京市江宁区义务商品城05栋102室（老鸭粉丝汤店旁）
				<text class='name'>某某人</text>
				<text class='phone'>12345678909</text>
			</view>
			
		</view>
		<view class='lines'>
		</view>
		<view class='serve'>
			<view class='serve-send'>
				<image src="http://www.idash.top/images/serve.png"></image>
				<text>配送服务：由第三方快送和商家提供配送服务</text>
			</view>
			<view class='line'></view>
			<view class="serve-time">
				<image src="http://www.idash.top/images/time.png"></image>
				<text>配送时间：</text>
				<view>
					<view>第三方 11:00-20:00 </view>
					<view>商家 11:00-20:00</view>
				</view>
			</view><view class='line lin2'></view>
			<view class='serve-shop'>
				<image src="http://www.idash.top/images/serve.png"></image>
				<text>商家服务：到店自取 | 外卖配送</text>
			</view>
		</view>
		<view class='lines'>
		</view>
		<view class='safe'>
			<image src="http://www.idash.top/images/safe.png"></image>
			<text>查看食品安全</text>
			<image src="http://www.idash.top/images/right.png" style="width:28upx;height:28upx;position:absolute;right:0;"></image>
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
image.back-icon{
	width:34upx;
	height:34upx;
	margin-left: 22upx;
	position:relative;
	top:12.5upx;
}
.store-info{
	margin-left: 29upx;
	margin-top: 108upx;
	display: flex;
}
.avatar{
	width: 110upx;
	height:110upx;
	border: 1upx dashed #FFFFFF;
}
.avatar image{
	width: 100%;
	height:100%
}
.store-intro{
	margin-left:20upx ;
}
.store-name,.store-time{
	height:42upx;
	font-size:32upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(0,0,0,1);
	line-height:52upx;
	display: flex;
	align-items: center;
}
.store-time{
	font-size: 24upx;
	color:rgba(136,136,136,1);
}
.store-time image{
	width: 28upx;
	height:28upx;
	margin-left: 240upx;
}
.send-attr{
	display: flex;
	margin-top: 18upx;
}
.send-attr image{
	width: 26upx;
	height:26upx;
}
.send-type{
	width:74upx;
	height:30upx;
	line-height: 30upx;
	text-align: center;
	border-radius:4upx;
	border:2upx solid rgba(214,50,50,1);
	font-size:18upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(214,50,50,1);
	margin-right: 10upx;
}
.lines{
	width: 100%;
	height:12upx;
	background:rgba(246,246,246,1);
	margin-top: 32upx;
}
.address-info{
	display: flex;
	margin: 32upx 4% 30upx 4.8%;
	width: 91.8%;
}
.site-icon{
	width: 36upx;
	height:44upx;
}
.site-icon image{
	width: 100%;
	height:100%;
}
.site{
	margin-left: 26upx;
	display: flex;
	width:82.9%;
	font-size:32upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
	flex-wrap: wrap;
}
.name, .phone{
	margin-top: 20upx;
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
}
.phone{
	margin-left: 40upx;
}
.serve,.safe{
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(102,102,102,1);
	line-height:40upx;
}
.serve-send{
	height:44px;
	line-height:44upx;
	display: flex;
	align-items: center;
}
.serve-send image,.serve-shop image{
	width: 38upx;
	height:44upx;
	margin: 0 26upx 0 36upx;
	
}
.serve-time image{
	width: 46upx;
	height:48upx;
	margin: 0 20upx 0 32upx;
}
.serve-shop{
	height:44upx;
	line-height:44upx;
	display: flex;
	align-items: center;
}
.serve-time{
	display:flex;
}
.line{
	width:92%;
	height:2upx;
	margin-left: 4%;
	background:rgba(246,246,246,1);
	margin-bottom: 20upx;
}
.line-sec{
	width:92%;
	height:2upx;
	margin-left: 4%;
	background:rgba(246,246,246,1);
	margin-bottom: 20upx;
}
.lin2{
	margin-top: 20upx;
}
.safe image{ 
	width:40upx;
	height:48upx;
	margin-left: 34upx;
	margin-right: 26upx;
}
.safe{
	height:100upx;
	display: flex;
	align-items: center;
	flex-direction: row;
	position: relative;
}
.right-icon{
	
}

</style>
