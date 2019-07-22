<template>
	<view class="container">
		<uni-nav-bar @click-left="navigateBack" fixed title="商品详情" left-icon="back"></uni-nav-bar>
		<view class="pic-lists">
			<image src="http://www.idash.top/images/pic.png"></image>
		</view>
		<view class='dock'>
			<view class="goods-title">
				丹东红颜草莓1盒350g
			</view>
			<view class='sale-num'>
				销量1456
			</view>
			<view class="buy-num">
				<view class='now-price'>
					¥19.9
					<text class='last-price'> &nbsp;¥29.9</text>
				</view>
				<view class="add-num">
					<view class="decrease">
						<image src="http://www.idash.top/images/decrease.png"></image>
					</view>
					<view class="buy_nums">2</view>
					<view class="decrease">
						<image src="http://www.idash.top/images/increase.png"></image>
					</view>
				</view>
			</view>
			<view class="comments" @tap="getComments">
				<view>
				评价（345）
				<image src="http://www.idash.top/images/right.png"></image>
				</view>
			</view>
			<view class='goods-intro'>
				商品说明
			</view>
			<view class="unit">单位  盒</view>
			<view class='explain'>
				说明  商品说明信息
			</view>
		</view>
		<!-- 结算 -->
		<view class='footer'>
			<view class='foot'>
				<view class='count-price'>
					¥ 39.8
				</view>
				<view class='pre'>已优惠 ¥3.00</view>
				<view class='post'>配送未满起送价 ¥30</view>
				<view class="count-btn" @click='confirmOrder'>
					去结算
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
			jump(str){
				uni.navigateTo({
					url: str
				});
			},
			back:function(){
				
				uni.navigateBack({
					delta: 1
				});
			},
			getComments() {
				uni.navigateTo({
					url:'../comments/comments'
				});
			},
			confirmOrder:function(){
				this.jump('../confirm-order/confirm-order');
			}
		}
	}
</script>

<style>
.container{
	padding-bottom: 160upx;
}
image.back-icon{
	width:34upx;
	height:34upx;
	margin-left: 22upx;
	position:relative;
	top:12.5upx;
}
.pic-lists{
	padding:150upx 30upx 22upx 30upx ;
	width: 100%;
	
}
.pic-lists image{
	width:690upx;
	height:690upx;
}
.goods-title{
	font-size:36rpx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(0,0,0,1);
}
.sale-num{
	font-size:24rpx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(164,176,181,1);
	margin-top: 1upx;
}
.dock{
	margin: 0 30upx;
	
}
.buy-num{
	display:flex;
	height:58upx;
	align-items: center;
	position: relative;
	margin-top: 20upx;
}
.increase image,.decrease image{
	width: 52upx;
	height: 52upx;
	position:relative;
	top:2upx;
}
.decrease, .buy_nums, .increase{
	margin-right:30upx;
}

.add-num{
	display: flex;
	position:absolute;
	right:0;

}
.now-price{
	font-size:40upx;
	line-height: 80upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(254,114,4,1);
}
.last-price{
	font-size:24upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(136,136,136,1);
	text-decoration: line-through;
	margin-left: 10upx;
	vertical-align: bottom;
}
.comments{
	width: 100%;
	height:80upx;
	line-height:80upx;
	background:rgba(255,255,255,1);
	box-shadow:0px 2upx 8upx 0px rgba(0,0,0,0.2);
	border-radius:12upx;
	display: flex;
	align-items: center;
	font-size:32upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
	margin-top:40upx;
	position: relative;
}
.comments view{
	margin-left: 30upx;
}
.comments image{
	width:18upx;
	height:28upx;
	position:absolute;
	top:26upx;
	right:20upx;
}
.goods-intro{
	margin-top: 40upx;
	font-size:32upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(0,0,0,1);
}
.unit,.explain{
	margin-top: 20upx;
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(164,176,181,1);
}
.explain{
	margin-bottom: 20upx;
}
.footer{
	width:93.6%;
	margin-left: 3.2%;
	height:120upx;
	background:rgba(255,255,255,1);
	box-shadow:0px 2upx 8upx 0px rgba(0,0,0,0.2);
	border-radius:12upx;
	position: fixed;
	bottom: 40upx;
}
.foot{
	height:120upx;
	display: flex;
	align-items: center;
}
.count-price{
	margin-left: 20upx;
	font-size:38upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	height:56upx;
	line-height:56upx;
	position: absolute;
	top:20upx;
}
.count-btn{
	position: absolute;
	right:20upx;
	width:110upx;
	height:56upx;
	background:rgba(254,114,4,1);
	border-radius:30upx;
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(255,255,255,1);
	text-align: center;
	line-height: 56upx;
}
.pre{
	font-size:12px;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(254,114,4,1);
	line-height:60upx;
	height:60upx;
	position:absolute;
	bottom:0;
	left: 20upx;
}
.post{
	position:absolute;
	right:160upx;
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(164,176,181,1);
}
</style>
