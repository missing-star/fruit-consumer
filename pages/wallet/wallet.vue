<template>  
    <view class="container">  
		<uni-nav-bar fixed title="我的钱包" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class='docker'>
			<view class='my-score'>
				<view class='tip' @click='balance'><text class='card'>我的卡号:233456677544</text> <text class='det'>明细></text></view>
				<view class='score-num'>
					<text class='num'>¥</text>
					<text class='detail'>  80</text>
					<text class='total'>总余额</text>
				</view>
			</view>
			<view v-for='i in 4'>
				<view class='stores'>
					<view class='store'>
						<text class='store-name'>水果拼盘集合地（义乌店）</text>
						<image src="http://www.idash.top/images/right.png" class='right'></image>
					</view>
					<view class='line'></view>
					<view class='balance'>
						<text class='yuan'>¥</text><text class='balance-num'>20</text><text class='earn'>余额</text>
						<text class='charge' @click='charge'>充值</text>
					</view>
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
			charge:function(){
				this.navigateTo('../charge/charge')
			},
			balance:function(){
				this.navigateTo('../balanceDetail/balanceDetail')
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
	.right{
		width:14upx;
		height:24upx;
		float:right;
		margin-right:20upx;
		margin-top:30upx
	}
	.card{
		margin-left:20upx ;
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(93,93,93,1);
	}
	.my-score{
		height:220upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.15);
		border-radius:20upx;
		padding-top:20upx;
	}
	.tip{
		height:40upx;
		line-height:40upx;
		font-size:14px;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(93,93,93,1);
	}
	.det{
		float:right;
		margin-right: 20upx;
	}
	.score-num{
		margin-top: 28upx;
		height:112upx;
		text-align: center;
	}
	.num{
		font-size:52upx;
		color:#FE7204;
	}
	.detail{
		font-size:80upx;
		margin-left: 16upx;
		color:#FE7204;
	}
	.total{
		font-size:24upx;
		margin-left: 6upx;
	}
	.stores{
		width:100%;
		height:210upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.2);
		border-radius:12upx;
		margin-top: 20upx;
	}
	.line{
		width: 100%;
		height:1px;
		background:rgba(237,242,245,1);
	}
	.store{
		height:84upx;
		line-height:84upx;
	}
	.store-name{
		margin-left: 20upx;
		font-size:32upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.yuan{
		font-size:32upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(255,88,22,1);
		margin-left: 20upx;
	}
	.balance-num{
		font-size:60upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(255,88,22,1);
		margin-left: 12upx;
	}
	.earn{
		font-size:24upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(102,102,102,1);
		margin-left: 12upx;
	}
	.charge{
		width:120upx;
		height:52upx;
		text-align:center;
		line-height:52upx;
		background:rgba(254,114,4,1);
		border-radius:12upx;
		font-size:28upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		float: right;
		margin-right: 20upx;
		margin-top:36upx ;
	}
	.balance{
		height:124upx;
		line-height:124upx;
	}
</style>