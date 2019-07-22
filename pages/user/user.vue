<template>  
    <view class="container">  
		<uni-nav-bar fixed title="我的" style="top:0"></uni-nav-bar>
		<view class='docker'>
			<view class='user-info' @click='user'>
				<view class='user-wel'>你好！某某某</view>
				<view class='wel'>欢迎来水果商城</view>
				<view class='level'>V3</view>
				<view class='level-num'>等级数值100/1000</view>
				<image src='http://www.idash.top/images/girl.png' class='avatar'></image>
			</view>
			<view class='grade'>
				<view class='grade-info' @click='wallet'>
					<view class='grade-title'>钱包</view>
					<image src='http://www.idash.top/images/wallet.png' class='grade-pic'></image>
					<view class='grade-score'> ¥560</view>
				</view>
				<view class='grade-info right' @click='integral'>
					<view class='grade-title'>积分</view>
					<image src='http://www.idash.top/images/score.png' class='grade-pic'></image>
					<view class='grade-score'>1236分</view>
				</view>
			</view>
			<view class='ulist'>
				<uni-list>
					<uni-list-item title="购物车"   thumb="http://www.idash.top/images/tab-cart-current.png"  @click='trolley'></uni-list-item>
					<uni-list-item title="我的订单"  thumb="http://www.idash.top/images/tab-order-current.png" @click='order'></uni-list-item>
					<uni-list-item title="收货地址"  thumb="http://www.idash.top/images/dizhi-5@2x.png" @click='site'></uni-list-item>
					<uni-list-item title="优惠券"  thumb="http://www.idash.top/images/youhuiquan@2x.png" @click='coupon' badge-type="error" show-badge="true" badge-text="12"></uni-list-item>
					<uni-list-item title="投诉建议"  thumb="http://www.idash.top/images/tousujianyi@2x.png" @click='suggest'></uni-list-item>
					<uni-list-item title="设置"  thumb="http://www.idash.top/images/setting.png" id="list-f" @click='setting'></uni-list-item>
				</uni-list>
			</view>
		</view>
		
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
			navigateTo:function(str){
				uni.navigateTo({
					url: str,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			trolley:function(){
				uni.switchTab({
					url:'../cart/cart'
				});
			},
			order:function(){
				uni.switchTab({
					url:'../order/order'
				});
			},
			site:function(){
				this.navigateTo('../add-site/add-site')
			},
			coupon:function(){
				this.navigateTo('../coupons/coupons')
			},
			suggest:function(){
				this.navigateTo('../suggest/suggest')
			},
			setting:function(){
				this.navigateTo('../setting/setting')
			},
			user:function(){
				this.navigateTo('../userInfo/userInfo')
			},
			wallet:function(){
				this.navigateTo('../wallet/wallet')
			},
			integral:function(){
				this.navigateTo('../integral/integral')
			}
		}
	}  
</script>  
<style >
	view.container{
		padding-top: 55upx;
	}
	image.back-icon{
		width:34upx;
		height:34upx;
		margin-left: 22upx;
		position:relative;
		top:12.5upx;
	}
	.docker{
		width:92%;
		margin:118upx 4% 0 4%;
	}	
	.user-info{
		height:240upx;

		box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.15);
		border-radius:20upx;
		margin-bottom:20upx ;
		position:relative;
	}
	#list-f:after{
		height:0;
	}
	.grade-info{
		width: 332upx;
		height:120upx;
		background-image: url('http://www.idash.top/images/wallet2.png');
		background-size:100% 100%;
		background-repeat:no-repeat;
		position:relative;
	}
	.grade-info image{
		width: 40upx;
		height:40upx;
	}
	.right{
		margin-left: 26upx;
	}
	.grade{
		display: flex;
		align-items: center;
	}
	.grade-title{
		margin: 12upx 0 12upx 20upx ;
		height:44upx;
		font-size:32upx;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height:44upx;
	}
	.grade-pic{
		position: absolute;
		right:20upx;
		top:8upx;
	}
	.grade-score{
		height:34upx;
		font-size:24upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(255,255,255,1);
		line-height:34upx;
		margin: 12upx 0 12upx 20upx ;
	}
	.ulist{
		margin-top: 30upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.15);
		border-radius:12upx;
	}
	.avatar{
		width: 120upx;
		height:120upx;
		position:absolute;
		top:20upx;
		right:20upx;
	}
	.user-wel{
		position:absolute;
		top:36upx;
		left:20upx;
		height:56upx;
		font-size:40upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:56upx;
	}
	.wel{
		position:absolute;
		top:92upx;
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
</style>