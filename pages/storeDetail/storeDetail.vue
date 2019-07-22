<template>
	<view class="container">
		<view class='header'>
			<!-- #ifdef MP-WEIXIN -->
			<image class="back-icon" src="http://www.idash.top/images/back.png" @click='back'></image>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY -->
				<div class="block"></div>
			<!-- #endif -->
			<view class='store-info'>
				<view class='avatar'>
					<image  src="http://www.idash.top/images/girl.png"></image>
				</view>
				<view class="store-intro">
					<view class='store-name'>爱尚水果</view>
					<view class='store-time'>
						起送 ¥38 营业：9:00-22:00
						<image  src="http://www.idash.top/images/right.png" @tap='store'></image>
					</view>
					<view class="send-attr">
						<view class="send-type">自取</view>
						<view class="send-type">外送</view>
						<view class='distance'>
							<image src="http://www.idash.top/images/site.png"></image>
							&nbsp;&nbsp;526m
						</view>
						<view class="recharge" @click='charge'></view>
					</view>
				</view>
			</view>
		</view>
		<view class='goods'>
			特价专区
		</view>
		<view class='goods-lists'>
			<view class="scroll-view">
				<view class='goods-img'>
					<image  src="http://www.idash.top/images/fruit1.png"></image>
					<view class="goods-name">芒果小芒</view>
					<view class="goods-price">¥12 ¥25</view>
				</view>
				<view class='goods-img'>
					<image  src="http://www.idash.top/images/fruit2.png"></image>
					<view class="goods-name">芒果小芒</view>
					<view class="goods-price">¥12 ¥25</view>
				</view>
				<view class='goods-img'>
					<image  src="http://www.idash.top/images/fruit3.png"></image>
					<view class="goods-name">芒果小芒</view>
					<view class="goods-price">¥12 ¥25</view>
				</view>
				<view class='goods-img'>
					<image  src="http://www.idash.top/images/fruit4.png"></image>
					<view class="goods-name">芒果小芒</view>
					<view class="goods-price">¥12 ¥25</view>
				</view>
				<view class='goods-img'>
					<image  src="http://www.idash.top/images/fruit5.png"></image>
					<view class="goods-name">芒果小芒</view>
					<view class="goods-price">¥12 <text>¥25</text></view>
				</view>
				
			</view>
		</view>
		<view class='line'></view>
		<view class="fruit-sort">
			<view class='frame-left'>
				<view :class="{'fruit-name':true,'on':(i==1)}" @click='check(1)'>
					<view :class="{'line-s':true,'active':(i==1)}"></view>
					蓝莓
				</view>
				<view :class="{'fruit-name':true,'on':(i==2)}" @click='check(2)'>
					<view :class="{'line-s':true,'active':(i==2)}"></view>
					车厘子
				</view>
				<view :class="{'fruit-name':true,'on':(i==3)}" @click='check(3)'>
					<view :class="{'line-s':true,'active':(i==3)}"></view>
					草莓
				</view>
				<view :class="{'fruit-name':true,'on':(i==4)}" @click='check(4)'>
					<view :class="{'line-s':true,'active':(i==4)}"></view>
					椰子
				</view>
				<view :class="{'fruit-name':true,'on':(i==5)}" @click='check(5)'>
					<view :class="{'line-s':true,'active':(i==5)}"></view>
					菠萝
				</view>
				<view :class="{'fruit-name':true,'on':(i==6)}" @click='check(6)'>
					<view :class="{'line-s':true,'active':(i==6)}"></view>
					千禧
				</view>
				<view :class="{'fruit-name':true,'on':(i==7)}" @click='check(7)'>
					<view :class="{'line-s':true,'active':(i==7)}"></view>
					热带水果
				</view>
				<view :class="{'fruit-name':true,'on':(i==8)}" @click='check(8)'>
					<view :class="{'line-s':true,'active':(i==8)}"></view>
					双拼水果
				</view>
				<view :class="{'fruit-name':true,'on':(i==9)}" @click='check(9)'>
					<view :class="{'line-s':true,'active':(i==9)}"></view>
					酸奶捞
				</view>
			</view>
			<view class='frame-right'>
				<view class='hot-sale'>
					<view class='sort-title'>
						热卖
					</view>
					<view class='fruit-detail' @click='goodsDetail'>
						<image class="fruit-img" src="http://www.idash.top/images/fruit1.png"></image>
						<view class="sale-info">
							<view class='sale-name'>
								芒果切 水仙芒 300g
							</view>
							<view class='sale-nums'>
								销量24
							</view>
							<view class='sale-count'>
								<view class="sale-price">¥ 12.9</view>
								<view class='decrease'>
									<image src='http://www.idash.top/images/decrease.png'></image>
								</view>
								<view class='sale-num'>2</view>
								<view class='increase'>
									<image src='http://www.idash.top/images/increase.png'></image>
								</view>
							</view>
						</view>
					</view>
					<view class='fruit-detail'>
						<image class="fruit-img" src="http://www.idash.top/images/fruit1.png"></image>
						<view class="sale-info">
							<view class='sale-name'>
								芒果切 水仙芒 300g
							</view>
							<view class='sale-nums'>
								销量24
							</view>
							<view class='sale-count'>
								<view class="sale-price">¥ 12.9</view>
								<view class='decrease'>
									<image src='http://www.idash.top/images/decrease.png'></image>
								</view>
								<view class='sale-num'>2</view>
								<view class='increase'>
									<image src='http://www.idash.top/images/increase.png'></image>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class='hot-sale'>
					<view class='sort-title'>
						热卖
					</view>
					<view class='fruit-detail'>
						<image class="fruit-img" src="http://www.idash.top/images/fruit1.png"></image>
						<view class="sale-info">
							<view class='sale-name'>
								芒果切 水仙芒 300g
							</view>
							<view class='sale-nums'>
								销量24
							</view>
							<view class='sale-count'>
								<view class="sale-price">¥ 12.9</view>
								<view class='decrease'>
									<image src='http://www.idash.top/images/decrease.png'></image>
								</view>
								<view class='sale-num'>2</view>
								<view class='increase'>
									<image src='http://www.idash.top/images/increase.png'></image>
								</view>
							</view>
						</view>
					</view>
					<view class='fruit-detail'>
						<image class="fruit-img" src="http://www.idash.top/images/fruit5.png"></image>
						<view class="sale-info">
							<view class='sale-name'>
								芒果切 水仙芒 300g
							</view>
							<view class='sale-nums'>
								销量24
							</view>
							<view class='sale-count'>
								<view class="sale-price">¥ 12.9</view>
								<view class='decrease'>
									<image src='http://www.idash.top/images/decrease.png'></image>
								</view>
								<view class='sale-num'>2</view>
								<view class='increase'>
									<image src='http://www.idash.top/images/increase.png'></image>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="bots">·········· 已见底了 ··········</view>
			</view>
		</view>
		<view class='footer'>
			<view class='count-price'>¥ 39.8</view>
			<view class="count-btn" @click='confirmOrder'>去结算</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue" 
	export default {
		data() {
			return {
				i:1
			}
		},
		methods: {
			jump(str){
				uni.navigateTo({
					url: str
				});
			},
			goodsDetail:function(){
				this.jump('../goodsDetail/goodsDetail')
			},
			storeInfo:function(){
				this.jump('../storeInfo/storeInfo')
			},
			back:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			confirmOrder:function(){
				this.jump('../confirm-order/confirm-order');
			},
			store:function(){
				this.jump('../storeInfo/storeInfo')
			},
			charge:function(){
				this.jump('../charge/charge');
			},
			check:function(m){
				console.log(123)
				this.i=m
			}
		},
		components: {
			uniNavBar
		},
	}
</script>

<style>
.container{
	width: 100%;
	margin: 0;
	padding: 0;
}
image.back-icon,div.block{
	width:20upx;
	height:36upx;
	margin-left: 40upx;
	position:relative;
	top:50upx;
}
.header{
	width: 100%;
	height:300upx;
	background-image: url("http://www.idash.top/images/sd_detail.png");
	background-repeat: no-repeat;
	background-size:100% auto ;
}
.store-info{
	margin-left: 29upx;
	margin-top: 85upx;
	display: flex;
}
.avatar{
	width: 110upx;
	height:110upx;
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
	color:rgba(255,255,255,1);
	line-height:52upx;
	display: flex;
	align-items: center;
}
.store-time{
	font-size: 24upx;
}
.store-time image{
	width: 16upx;
	height:28upx;
	margin-left: 240upx;
}
.send-attr{
	display: flex;
	margin-top: 18upx;
}
.recharge{
	width: 110upx;
	height:56upx;
	background-image: url("http://www.idash.top/images/recharge.png");
	background-repeat: no-repeat;
	background-size:100% auto ;
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
	border:2upx solid rgba(255,255,255,1);
	font-size:18upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(255,255,255,1);
	margin-right: 10upx;
}
.distance{
	width:146upx;
	height:50upx;
	background:rgba(0,0,0,1);
	border-radius:28upx;
	opacity:0.5;
	font-size:24upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(255,255,255,1);
	line-height: 50upx;
	text-align: center;
	margin:4upx 18upx 0 132upx;
}
.distance image{
	position: relative;
	top:4upx;
}
.goods{
	font-size:38upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	margin:38upx 0 0 24upx ;
}
.goods-lists{
	margin-top: 20upx;
	margin-left: 3%;
	width: 97%;
	height:272upx;
	overflow: hidden;
}
.scroll-view{
	width: 100%;
	height:100%;
	overflow-x: auto;
	display:flex;
}
.goods-img{
	margin-right: 20upx;
}
.goods-img image{
	width: 182upx;
	height:182upx;
}
.goods-name{
	margin-top: 10upx;
	font-size:27upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
	text-align: center;
}
.goods-price{
	font-size:20upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(136,136,136,1);
	text-align: center;
	
}
.goods-price text{
	text-decoration: line-through;
}
.fruit-sort{
	display: flex;
	width: 100%;
}
.line{
	width:100%;
	height:1upx;
	background:rgba(246,246,246,1);
	margin-top: 34upx;
}
.frame-left{
	width: 26.7%;
}
.frame-right{
	width: 73.3%;
}
.fruit-name{
	width: 100%;
	height:74upx;
	position: relative;
	text-align: center;
	line-height: 74upx;
	font-size:28upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(0,0,0,1);
	background:rgba(246,246,246,1);
	margin-bottom: 1upx solid #fff;
}
.line-s{
	position: absolute;
	top:25upx;
	width:8upx;
	height:24upx;
}
.active{
	background:rgba(254,114,4,1);
}
.on{
	background:#fff;
}
.sort-title{
	height:74upx;
	margin-left: 20upx;
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(160,182,190,1);
	line-height: 78upx;
}
.fruit-detail{
	margin:0 30upx 20upx 20upx;
	height:146upx;
	position: relative;
	display: flex;
}
.fruit-img{
	width: 146upx;
	height:146upx;
}
.sale-info{
	margin-left: 20upx;
	height:146upx;
}
.decrease,.increase{
	width:38upx;
	height:38upx;
	border-radius:50%;
}
.sale-count{
	display: flex;
	height:38upx;
	margin-top: 38upx;
	align-items: center;
}
.decrease image,.increase image{
	width:38upx;
	height:38upx;
}
.sale-name{
	font-size:28upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(0,0,0,1);
}
.sale-nums{
	font-size:24upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(170,170,170,1);
}
.sale-price{
	color:#FE7204;
	font-size:32upx;
	font-family:PingFangSC-Semibold;
	font-weight:600;
}
.decrease{
	position: absolute;
	bottom:0;
	right:104upx;
}
.increase{
	position: absolute;
	bottom:0;
	right:0;
}
.sale-num{
	position: absolute;
	bottom:-8upx;
	right:60upx;
	font-size:36upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(85,85,85,1);
}
.bots{
	font-size:24upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(188,199,204,1);
	margin-left: 35upx;
	text-align: center;
}
.footer{
	width:93.6%;
	height:110upx;
	background:rgba(255,255,255,1);
	box-shadow:0 2upx 8upx 0 rgba(0,0,0,0.2);
	border-radius:12upx;
	margin: 38upx 3.4% 30upx 3.4%;
	position: relative;
	display: flex;
	align-items: center;
}
.count-price{
	margin-left: 20upx;
	font-size:38upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
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

</style>
