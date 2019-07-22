<template>
	<view class="content">
		<uni-nav-bar fixed title="购物车"></uni-nav-bar>
		<view class="contents">
			<view class="lists">
				<view class="store-name">
					<text>店铺名称</text>
					<image src="http://www.idash.top/images/close.png"></image>
				</view>
				<view class="line"></view>
				<view class="goods-list">
					<view class="goods-pic"><image src="http://www.idash.top/images/lizhi.png"></image></view>
					<view class="goods-name">
						<text>商品名称</text>
						<view class="goods-num">
							<image src="http://www.idash.top/images/decrease.png"></image>
							<text>2</text>
							<image src="http://www.idash.top/images/increase.png"></image>
						</view>
					</view>
					<view class="goods-price">¥26</view>
				</view>
				<view class="goods-list">
					<view class="goods-pic"><image src="http://www.idash.top/images/lizhi.png"></image></view>
					<view class="goods-name">
						<text>商品名称</text>
						<view class="goods-num">
							<image src="http://www.idash.top/images/decrease.png"></image>
							<text>2</text>
							<image src="http://www.idash.top/images/increase.png"></image>
						</view>
					</view>
					<view class="goods-price">¥26</view>
				</view>
				<view class="line-bot"></view>
				<view class="account">
					<view style="position:absolute;right:160upx">
						<text class="count">合计</text>
						<text class="nums">¥ 52</text>
					</view>
					<button class="cash">结算</button>
				</view>
			</view>
			<view class="lists">
				<view class="store-name">
					<text>店铺名称</text>
					<image src="http://www.idash.top/images/close.png"></image>
				</view>
				<view class="line"></view>
				<view class="goods-list">
					<view class="goods-pic"><image src="http://www.idash.top/images/lizhi.png"></image></view>
					<view class="goods-name">
						<text>商品名称</text>
						<view class="goods-num">
							<image src="http://www.idash.top/images/decrease.png"></image>
							<text>2</text>
							<image src="http://www.idash.top/images/increase.png"></image>
						</view>
					</view>
					<view class="goods-price">¥26</view>
				</view>
				<view class="goods-list">
					<view class="goods-pic"><image src="http://www.idash.top/images/lizhi.png"></image></view>
					<view class="goods-name">
						<text>商品名称</text>
						<view class="goods-num">
							<image src="http://www.idash.top/images/decrease.png"></image>
							<text>2</text>
							<image src="http://www.idash.top/images/increase.png"></image>
						</view>
					</view>
					<view class="goods-price">¥26</view>
				</view>
				<view class="line-bot"></view>
				<view class="account">
					<view style="position:absolute;right:160upx">
						<text class="count">合计</text>
						<text class="nums">¥ 52</text>
					</view>
					<button class="cash">结算</button>
				</view>
			</view>
			<view class="lists">
				<view class="store-name">
					<text>店铺名称</text>
					<image src="http://www.idash.top/images/close.png"></image>
				</view>
				<view class="line"></view>
				<view class="goods-list">
					<view class="goods-pic"><image src="http://www.idash.top/images/lizhi.png"></image></view>
					<view class="goods-name">
						<text>商品名称</text>
						<view class="goods-num">
							<image src="http://www.idash.top/images/decrease.png"></image>
							<text>2</text>
							<image src="http://www.idash.top/images/increase.png"></image>
						</view>
					</view>
					<view class="goods-price">¥26</view>
				</view>
				<view class="goods-list">
					<view class="goods-pic"><image src="http://www.idash.top/images/lizhi.png"></image></view>
					<view class="goods-name">
						<text>商品名称</text>
						<view class="goods-num">
							<image src="http://www.idash.top/images/decrease.png"></image>
							<text>2</text>
							<image src="http://www.idash.top/images/increase.png"></image>
						</view>
					</view>
					<view class="goods-price">¥26</view>
				</view>
				<view class="line-bot"></view>
				<view class="account">
					<view style="position:absolute;right:160upx">
						<text class="count">合计</text>
						<text class="nums">¥ 52</text>
					</view>
					<button class="cash">结算</button>
				</view>
			</view>
		</view>
		<!-- 遮罩层 -->
		<view class="mask" v-if="show"></view>
		<view class="toast" v-if="show">
			<view class="send-type">配送方式</view>
			<view class="line-g"></view>
			<view class="send-type-img">
				<image src="http://www.idash.top/images/take-out.png"></image>
				<image src="http://www.idash.top/images/take-in-current.png"></image>
			</view>
			<view class="line-g"></view>
			<view class="act-btn">
				<view class="cancel-btn">取消</view>
				<view class="confirm-btn current">确定</view>
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
			show: false
		};
	},
	components: {
		uniNavBar,
		uniIcon
	},
	methods: {}
};
</script>

<style>
view.content {
	padding-top: 55upx;
}
.contents {
	margin-top: 108upx;
}
image.back-icon {
	width: 34upx;
	height: 34upx;
	margin-left: 22upx;
	position: relative;
	top: 12.5upx;
}
.lists {
	width: 92%;
	height: 536upx;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 0px 8upx 0px rgba(0, 0, 0, 0.15);
	border-radius: 12upx;
	margin-left: 4%;
	margin-bottom: 20upx;
}
.store-name {
	height: 90upx;
	display: flex;
	align-items: center;
	position: relative;
}
.store-name {
	margin-left: 20upx;
}
.store-name image {
	position: absolute;
	right: 20upx;
	width: 28upx;
	height: 28upx;
}
.line,
.line-bot {
	width: 100%;
	height: 2upx;
	background: rgba(239, 244, 247, 1);
}
.goods-list {
	margin: 30upx 20upx 0 20upx;
	height: 120upx;
	display: flex;
	position: relative;
}
.goods-pic image {
	width: 120upx;
	height: 120upx;
}
.goods-num {
	height: 40upx;
	display: flex;
	align-items: center;
	position: absolute;
	right: 0;
}
.goods-num image {
	width: 40upx;
	height: 40upx;
}
.goods-name {
	display: flex;
	margin-left: 20upx;
	height: 60upx;
	align-items: center;
}
.goods-name text {
	font-size: 32upx;
	font-family: PingFangSC-Regular;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
	line-height: 44upx;
}
.goods-num {
	position: absolute;
	right: 0;
	display: flex;
}
.goods-num text {
	font-size: 36upx;
	font-family: PingFangSC-Regular;
	font-weight: 400;
	color: rgba(85, 85, 85, 1);
	margin: 0 24upx;
}

.goods-price {
	position: absolute;
	bottom: 10upx;
	left: 140upx;
	font-size: 28upx;
	font-family: PingFangSC-Medium;
	font-weight: 500;
	color: rgba(51, 51, 51, 1);
}
.line-bot {
	margin-top: 40upx;
}
.account {
	width: 100%;
	height: 100upx;
	align-items: center;
	display: flex;
	position: relative;
}
.cash {
	width: 120upx;
	height: 52upx;
	background: rgba(254, 114, 4, 1);
	border-radius: 12upx;
	line-height: 52upx;
	font-size: 28upx;
	font-family: PingFangSC-Medium;
	font-weight: 500;
	color: rgba(255, 255, 255, 1);
	position: absolute;
	right: 20upx;
}
.count {
	font-size: 28upx;
	font-family: PingFangSC-Regular;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
}
.nums {
	color: #ff7200;
	font-size: 28upx;
}
.mask {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 1);
	opacity: 0.5;
	z-index: 999;
}
.toast {
	width: 92%;
	margin-left: 4%;
	height: 504upx;
	background: rgba(255, 255, 255, 1);
	border-radius: 20px;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	z-index: 1000;
}
.send-type {
	width: 100%;
	height: 94upx;
	text-align: center;
	line-height: 94upx;
	font-size: 32upx;
	font-family: PingFangSC-Medium;
	font-weight: 500;
	color: rgba(51, 51, 51, 1);
}
.line-g {
	width: 100%;
	height: 2upx;
	background: rgba(238, 245, 247, 1);
}
.send-type-img image {
	width: 232upx;
	height: 232upx;
	border-radius: 66upx;
	margin: 46upx 46upx 36upx 60upx;
}
.act-btn {
	height: 80upx;
	width: 100%;
	display: flex;
	align-items: center;
	font-size: 32upx;
	font-family: PingFangSC-Regular;
	font-weight: 400;
	color: rgba(136, 136, 136, 1);
}
.cancel-btn {
	width: 49%;
	border-right: 1upx solid rgba(238, 245, 247, 1);
}
.confirm-btn {
	height: 80upx;
	width: 50%;
}
.act-btn view {
	text-align: center;
	line-height: 80upx;
	height: 80upx;
}
.current {
	color: #fe7504;
}
</style>
