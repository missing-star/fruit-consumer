<template>
	<view class="content">
		<!-- location-filled -->
		<uni-nav-bar fixed @click-left="site">
			<view class="left-part" slot="left">
				<uni-icon type="location-filled" size="20"></uni-icon>
				<text class="loaction-name">小区名称</text>
				<uni-icon type="arrowright" size="20"></uni-icon>
			</view>
		</uni-nav-bar>
		<view class="tab-wrapper">
			<view @tap="switchTab(0)" class="tab-item" :class="{ active: currentIndex == 0 }">会员店铺</view>
			<view @tap="switchTab(1)" class="tab-item" :class="{ active: currentIndex == 1 }">附近店铺</view>
		</view>
		<view class="discount-goods-wrapper">
			<text class="discount-goods-title">特价专区</text>
			<view class="discount-goods-list-wrapper">
				<view :key="n" v-for="n in 10" class="goods-item">
					<image class="goods-icon" src="http://www.idash.top/images/goods.jpg" mode=""></image>
					<text class="goods-name">名称</text>
					<view class="goods-price">
						<text class="now-price">￥22</text>
						<text class="origin-price">32</text>
					</view>
				</view>
			</view>
		</view>
		<view class="shops-recomd-wrapper">
			<text class="discount-goods-title recommed">店铺推荐</text>
			<view class="shops-list-wrapper">
				<view class="shops-item" v-for="n in 5" :key="n">
					<view class="shop-info-wrapper">
						<image src="http://www.idash.top/images/goods.jpg" class="shop-icon"></image>
						<view class="shop-detail" @click='storeDetail'>
							<view class="shop-name-wrapper">
								<text class="shop-title">店铺名称</text>
								<uni-icon color="#AAAAAA" type="arrowright" size="25"></uni-icon>
							</view>
							<view class="time-price">起送 ￥38 营业：9:00-22:00</view>
							<view class="distance-post">
								<view class="post-way-wrapper">
									<text class="post-way">自取</text>
									<text class="post-way">外送</text>
								</view>
								<view class="distance">
									<uni-icon type="location-filled" size="12"></uni-icon>
									<text class="meter">555m</text>
								</view>
							</view>
						</view>
					</view>
					<view class="shop-goods-show"><image class="goods-icon shop" src="http://www.idash.top/images/goods.jpg" v-for="n in 4" :key="n"></image></view>
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
			currentIndex: 0
		};
	},
	components: {
		uniNavBar,
		uniIcon
	},
	methods: {
		switchTab(index) {
			this.currentIndex = index;
		},
		site:function(){
			this.jump('../position/position')
		},
		jump(str){
			uni.navigateTo({
				url: str
			});
		},
		storeDetail:function(){
			this.jump('../storeDetail/storeDetail')
		}
	}
};
</script>

<style>
view.left-part {
	white-space: nowrap;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
view.tab-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #f6f6f6;
	padding-top: 150upx;
}
view.tab-item {
	position: relative;
	color: #666666;
	padding: 30upx;
	font-size: 20px;
}
view.tab-item.active {
	color: #333333;
}
view.tab-item.active::after {
	content: '';
	display: block;
	position: absolute;
	bottom: -2.5px;
	background: #fe7204;
	height: 5px;
	border-radius: 5px;
	width: 50%;
	left: 25%;
}
.discount-goods-list-wrapper {
	display: block;
	white-space: nowrap;
	overflow-x: scroll;
	padding: 0 20upx;
}
.goods-item {
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 30%;
	margin-right: 10upx;
}
image.goods-icon {
	width: 25vw;
	height: 25vw;
	border-radius: 10upx;
}
text.discount-goods-title {
	padding: 20upx;
	color: #333333;
	font-size: 20px;
	display: block;
}

view.discount-goods-wrapper {
	padding-top: 20upx;
}
text.goods-name {
	color: #333333;
	font-size: 14px;
	padding-top: 10upx;
}
text.now-price {
	color: #fe7204;
	font-size: 14px;
}
text.origin-price {
	font-size: 10px;
	color: #888888;
	text-decoration: line-through;
	margin-left: 10upx;
}
image.shop-icon {
	width: 80upx;
	height: 80upx;
	border-radius: 50%;
}
image.goods-icon.shop {
	width: 20vw;
	height: 20vw;
}
text.shop-title {
	color: #333333;
	font-size: 18px;
}
view.shop-info-wrapper {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
}
view.shops-item {
	width: 95%;
	position: relative;
	left: 2.5%;
	padding: 20upx;
	box-shadow:0px 0px 4px 0px rgba(0,0,0,0.15);
	margin-bottom: 20upx;
	border-radius: 10upx;
}
view.shop-detail {
	flex: 1;
	padding-left: 20upx;
}
view.time-price {
	color: #888888;
	font-size: 12px;
}
text.post-way {
	color: #d63232;
	font-size: 10px;
	border: 1px solid #d63232;
	border-radius: 10upx;
	margin-right: 20upx;
	padding: 0 10upx;
}
view.distance-post {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
view.distance {
	color: #5d5d5d;
	font-size: 12px;
	background-color: #e8e8e8;
	border-radius: 5upx;
	padding: 0 5upx;
}
.shop-name-wrapper{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
view.shop-goods-show{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 20upx;
}
text.loaction-name{
	white-space: nowrap;
}
</style>
