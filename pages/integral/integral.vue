<template>  
    <view class="container">  
		<uni-nav-bar fixed title="积分兑换" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		
		<view class='docker'>
			<view class='my-score'>
				<view class='tip'>我的积分</view>
				<view class='score-num' @click='integral'>
					<text class='num'>2568</text>
					<text class='detail'> 明细></text>
				</view>
			</view>
			<view class='sign'>
				已连续签到 <text class='sign-day'> 6 </text>天
				<text class='sign-rule'>签到规则></text>
			</view>
			<view class='sign-score'>
				<view class='today'>
					<view class='add-num'>+50</view>
					<view class='signed'>未签到</view>
				</view>
				<image src='../../static/images/tab-cart-current.png' class='turn'></image>
				<view class='tomorrow'>
					<view class='add-num'>+50</view>
					<view class='signed un'>明日签到</view>
				</view>
			</view>
			<view class='check'>积分兑换</view>
			<view class="coupons" >
				<view v-for="i in 4" class='coupon-list'>
					<view class='money'>¥ <text class='price'>300</text></view>
					<view class='xian'></view>
					<view>
						<view class='use-store'>99积分即可兑换</view>
						<view class='use-time'>全场可用  有效期5天 </view>
					</view>
					<view class='check-png'>兑换</view>
				</view>
				<view class='line'></view>
			</view>
		</view>
    </view>  
</template>  
<script>  
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	
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
			uniNavBar,
			
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
			back:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			integral:function(){
				this.navigateTo('../integralDetail/integralDetail')
			}
		}
	}  
</script>  
<style >
	image.back-icon{
		width:34upx;
		height:34upx;
		margin-left: 22upx;
		position:relative;
		top:12.5upx;
	}
	.docker{
		width:92%;
		margin-left: 4%;
		padding-top: 150upx;
		height:100%
	}	
	.my-score{
		width:100%;
		height:240upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.15);
		border-radius:20upx;
		padding-top:20upx
	}
	.tip{
		margin: 0 0 0 20upx;
		height:40upx;
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(93,93,93,1);
		line-height:40upx;
	}
	.score-num{
		margin-top:28upx;
		margin-left:20upx;
	}
	.num{
		height:112upx;
		font-size:80upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(254,114,4,1);
		line-height:112upx;
	}
	.detail{
		margin-left: 20upx;
		font-size: 28upx;
		color:rgba(254,114,4,1);
	}
	.sign{
		margin-top: 30upx;
		height:44upx;
		font-size:32upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(0,0,0,1);
		line-height:44upx;
	}
	.sign-day{
		color:#FE7204;
		padding:0 6upx;
	}
	.sign-rule{
		font-size:28upx;
		color:rgba(93,93,93,1);
		float: right;
	}
	.turn{
		width: 52upx;
		height:52upx;
		margin: 0 76upx;
	}
	.sign-score{
		display: flex;
		align-items: center;
		width:100%;
		height:140px;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 4px 0px rgba(0,0,0,0.15);
		border-radius:10px;
		margin-top: 20upx;
	}
	.today,.tomorrow{
		width:172upx;
		height:172upx;
		background:linear-gradient(180deg,rgba(255,136,5,1) 0%,rgba(254,80,2,1) 100%);
		border-radius:40upx;
	}
	.today{
		margin-left: 70upx;
	}
	.add-num{
		margin: 20upx 26upx 8upx 26upx;
		height:42px;
		font-size:30px;
		font-family:PingFangSC-Semibold;
		font-weight:600;
		color:rgba(255,255,255,1);
		line-height:42px;
	}
	.signed{
		height:40upx;
		background:rgba(225,237,241,1);
		border-radius:20upx;
		line-height:40upx;
		width: 132upx;
		font-size:24upx;
		font-weight:400;
		color:rgba(254,114,4,1);
		line-height:40upx;
		text-align: center;
		margin-left:20upx ;
	}
	.tomorrow{
		background:linear-gradient(180deg,rgba(236,243,246,1) 0%,rgba(195,220,230,1) 100%);
		color:#5D5D5D;
	}
	.un{
		background:rgba(225,237,241,1);
		color:#5D5D5D;
	}
	.check{
		height:44upx;
		font-size:32upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(0,0,0,1);
		line-height:44upx;
		margin-top: 32upx;
	}
	.coupons{
		width:92%;
		margin-left: 4%;
		background:rgba(255,255,255,1);
		border-radius:20upx;	
	}
	.coupon-title{
		height:104upx;
		width: 100%;
		line-height:104upx;
		text-align: center;
		font-size:32upx;
		font-weight:500;
		color:rgba(254,114,4,1);
	}
	.coupon-list{
		width:100%;
		margin:20upx 0;
		height:160upx;
		background-image: url('http://www.idash.top/images/coupon.png');
		background-repeat: no-repeat;
		background-size:100% 100%;
		display: flex;
		align-items: center;
		position: relative;
	}
	.money{
		width:110upx;
		height:60upx;
		font-size:32upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		line-height:60upx;
		text-align: center;
		color:rgba(254,114,4,1);
		margin:0 20upx;
	}
	.xian{
		height:106upx;
		display: flex;
		border-left:2upx dashed #D5DEE1;
		margin-right: 20upx;
	}
	.charge{
		font-size:36upx;
		font-weight:500;
		color:rgba(51,51,51,1);
		height:50upx;
		line-height:50upx;
	}
	.use-store,.use-time{
		height:34upx;
		font-size:24upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(136,136,136,1);
		line-height:34upx;	
	}
	.use-store{
		font-size:36upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
		height:50upx;
		line-height:50upx;
	}
	.check-png{
		width:120upx;
		height:60upx;
		line-height: 60upx;
		position:absolute;
		right:20upx;
		text-align:center;
		background:rgba(254,114,4,1);
		border-radius:6px;
		font-size:32upx;
		color:rgba(255,255,255,1);
	}
	.price{
		font-size:52upx;
	}
</style>