<template>
	<view class="container">
		<uni-nav-bar fixed title="优惠券" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
		<view class="docker">
			<view class="coupons">
				<view v-for="i in 4" class="coupon-list">
					<view :class="{ money: true, used: used }">
						¥
						<text class="price">300</text>
					</view>
					<view class="xian"></view>
					<view>
						<view class="charge">充值优惠券</view>
						<view class="use-store">限适用于：静静地水果店</view>
						<view class="use-time">有效期至：2019.12.24</view>
					</view>
					<view class="check-png" v-if="!used">兑换</view>
					<view v-else><image :src="status_img" class="used-img"></image></view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import WucTab from '@/components/wuc-tab/wuc-tab.vue';
export default {
	data() {
		return {
			TabCur: 0,
			tabList: [{ name: '未使用(7)' }, { name: '已使用(5)' }, { name: '已过期(6)' }],
			used: false,
			status_img: ''
		};
	},
	components: {
		WucTab,
		uniNavBar
	},
	methods: {
		tabChange(index) {
			this.TabCur = index;
			var that = this;
			if (index > 0) {
				that.used = true;
				that.status_img = index == 1 ? '../../static/images/used.png' : '../../static/images/outday.png';
			} else {
				that.used = false;
			}
		},
		navigateTo: function() {
			uni.navigateTo({
				url: '',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		back: function() {
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>
<style>
view.container {
	padding-top: 30upx;
}
image.back-icon {
	width: 34upx;
	height: 34upx;
	margin-left: 22upx;
	position: relative;
	top: 12.5upx;
}
.docker {
	width: 92%;
	margin-left: 4%;
	margin-top: 30upx;
}
.coupons {
	width: 100%;
	background: rgba(255, 255, 255, 1);
	border-radius: 20upx;
}
.coupon-title {
	height: 104upx;
	width: 100%;
	line-height: 104upx;
	text-align: center;
	font-size: 32upx;
	font-weight: 500;
	color: rgba(254, 114, 4, 1);
}
.coupon-list {
	width: 100%;
	margin: 20upx 0;
	height: 160upx;
	background-image: url('http://www.idash.top/images/coupon.png');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	display: flex;
	align-items: center;
	position: relative;
}
.money {
	width: 110upx;
	height: 60upx;
	font-size: 32upx;
	font-family: PingFangSC-Medium;
	font-weight: 500;
	line-height: 60upx;
	text-align: center;
	color: rgba(254, 114, 4, 1);
	margin: 0 20upx;
}
.check-png {
	width: 120upx;
	height: 60upx;
	line-height: 60upx;
	position: absolute;
	right: 20upx;
	text-align: center;
	background: rgba(254, 114, 4, 1);
	border-radius: 6px;
	font-size: 32upx;
	color: rgba(255, 255, 255, 1);
}
.used-img {
	width: 114upx;
	height: 86upx;
	position: absolute;
	top: 38upx;
	right: 20upx;
}
.xian {
	height: 106upx;
	display: flex;
	border-left: 2upx dashed #d5dee1;
	margin-right: 20upx;
}

.charge {
	font-size: 36upx;
	font-weight: 500;
	color: rgba(51, 51, 51, 1);
	height: 50upx;
	line-height: 50upx;
}
.use-store,
.use-time {
	height: 34upx;
	font-size: 24upx;
	font-family: PingFangSC-Regular;
	font-weight: 400;
	color: rgba(136, 136, 136, 1);
	line-height: 34upx;
}
.coupon-cancel {
	height: 60upx;
	border-right: 1px solid #f6f6f6;
	width: 49%;
	text-align: center;
	line-height: 60upx;
	margin-top: 20upx;
}
.coupon-sure {
	height: 60upx;
	text-align: center;
	line-height: 60upx;
	width: 50%;
	margin-top: 20upx;
}
.coupon-act {
	display: flex;
	align-items: center;
	font-size: 16px;
	font-weight: 400;
	color: rgba(136, 136, 136, 1);
}
.price {
	font-size: 52upx;
}
.used {
	color: #aab6bb;
}
</style>
