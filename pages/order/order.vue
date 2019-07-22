<template>
	<view class="content">
		<uni-nav-bar fixed title="订单"></uni-nav-bar>
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
		<uni-list>
			<uni-list-item title=""  v-for="i in 2">
				<view  class='list'>
					<view class='store'>
						<view class='store-info'>
							<view class='store-name'>水果拼盘集合地（义乌店）</view>
							<view class='store-time'>2019-05-06 12:23:56</view>
						</view>
						<view class='order-status'>待付款</view>
					</view>
					<view class='line'></view>
					<view @tap="getOrderDetail(n)" class="goods-list"v-for="i in 3">
						<view class='goods-pic'>
							<image src="http://www.idash.top/images/lizhi.png"></image>
						</view>
						<view class='goods-name'>
							<text>商品名称</text>
							<view class='goods-num'>
								¥26
							</view>
						</view>
						<view class='goods-price'>
							x1
						</view>
					</view>
					<view class='line bot'></view>
					<view class='count'>
						<text class='num'>合计：</text>
						<text class='price'>¥ 126</text>
						<text class='cancel'>取消订单</text>
						<text class='pay active'>立即支付</text>
					</view>
				</view>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
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
			uniNavBar
		},
		methods: {
			tabChange(index) {
            this.TabCur = index;
			},
			getOrderDetail(id) {
				uni.navigateTo({
					url:'../orderDetail/orderDetail'
				});
			}
        }
	}
</script>

<style>
	view.content{
		padding-top: 50upx;
	}
	.container{
		width: 100%;height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: 0;
		padding: 0;
		overflow-y: hidden;
		font-family:PingFangSC-Medium;
	}
	view.left-part {
		white-space: nowrap;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	image.back-icon{
		width:34upx;
		height:34upx;
		margin-left: 22upx;
		position:relative;
		top:12.5upx;
	}
	.list{
		width:92%;
		margin-left: 4%;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.15);
		border-radius:12upx;
		margin-top: 20upx;
	}
	.line{
		width: 100%;
		height:2upx;
		background:#F6F6F6
	}
	.goods-list{
		padding: 20upx 20upx 0 20upx;
		height:120upx;
		display:flex;
		position:relative;
	}
	.goods-pic image{
		width: 120upx;
		height:120upx;
	}
	.goods-num{
		height:40upx;
		display: flex;
		align-items: center;
		position:absolute;
		right:10upx;
	}
	.goods-price{
		position:absolute;
		bottom:10upx;
		left:140upx;
		font-size:28upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	
	.goods-num image{
		width: 40upx;
		height:40upx;
	}
	.goods-name{
		display: flex;
		margin-left: 20upx;
		height:60upx;
		align-items: center;
	}
	.goods-name text{
		font-size:32upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:44upx;
		
	}
	.goods-num{
		position:absolute;
		right:10upx;
		display:flex;
	}
	.goods-num text{
		font-size:36upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(85,85,85,1);
		margin:0 24upx ;
	}
	.store{
		height: 118upx;
		margin: 0 20upx;
		display: flex;
		align-items: center;
		position:relative
	}
	.store-name{
		height:44upx;
		font-size:32upx;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:44upx;
	}
	.store-time{
		height:34upx;
		font-size:24upx;
		font-weight:400;
		color:rgba(164,176,181,1);
		line-height:34upx;
	}
	.order-status{
		font-size:28upx;
		font-weight:400;
		color:rgba(255,87,36,1);
		position:absolute;
		right: 0;
	}
	.count{
		height: 100upx;
		line-height: 100upx;
		margin: 0 20upx;
		position:relative;
	}
	.bot{
		margin-top: 20upx;
	}
	.num{
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.price{
		font-size:36upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(254,114,4,1);
	}
	.cancel,.pay{
		font-size:32upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(254,114,4,1);
		border-radius:8upx;
		border:1upx solid rgba(254,114,4,1);
		position:absolute;
		right:180upx;height: 60upx;
		line-height: 60upx;
		position:absolute;
		right:180upx;
		top:20upx;
		width:160upx;
		text-align:center;
	}
	.pay{
		font-size:32upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		border-radius:8upx;
		height: 60upx;
		line-height: 60upx;
		position:absolute;
		right:0;
		top:20upx;
		width:160upx;
	}
	
	.active{
		color:rgba(255,255,255,1);
		background:rgba(254,114,4,1);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>
