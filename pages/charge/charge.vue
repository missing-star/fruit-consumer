<template>  
    <view class="container">  
		<uni-nav-bar fixed title="充值" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class='docker'>
			<view class='store'>
				<view class='tip'>水果拼盘集合地（义乌店）</view>
				<view class='line'></view>
				<view class='charge-tip'>输入充值金额</view>
				<view class='score-num'>
					<text class='num'>¥</text>
					<input type="text" class='nums'>
				</view>
			</view>
			<view class='explain'>
				优惠说明
			</view>
			<view class='explain-con'>
				1.充值说明文案一
			</view>
			<view class='explain-con'>
				2.充值说明文案一
			</view>
			<view class='explain-con'>
				3.充值说明文案一
			</view>
		</view>
		<view class='charge-btn'>充值</view>
		<!-- 遮罩层 -->
		<view class='mask' v-if='act||succed'></view>
		<view class='confirm' v-if='act'>
			<view class='tips'>
				<view>
					<view class='use-type'>金额使用方式</view>
					<view class='use-mess'>本次充值只能在本店使用</view>
				</view>
			</view>
			<view class='line'></view>
			<view class='act-btn'>
				<view class='cancel'>取消</view>
				<view class='xian'></view>
				<view class='sure'>确定</view>
			</view>
		</view>
		<view class='success' v-if='succed'>
			<view class='infos'>
				<view class='store-info'>
					<image src="http://www.idash.top/images/girl.png" class='store-logo'></image>
					<view class='charge-store'>
						<view class='store-name'>商店名称</view>
						<view class='store-time'>营业时间：9:00 - 22:00</view>
					</view>
				</view>
				<image src="http://www.idash.top/images/close.png" class='close'></image>
			</view>
			<view class='line'></view>
			<view class='message'>
				<view class='succ-t'>
					充值成功
				</view>
				<view class='succ-m'>¥ 56.00</view>
				<view class='succ-score'>恭喜您获得100积分</view>
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
				act:false,
				succed:false,
			}
		},
		components: { 
			uniNavBar,
			
		},
		methods: {
			tabChange(index) {
				this.TabCur = index;
			},
			navigateTo:function(){
				uni.navigateTo({
					url: '',
					success: res => {},
					fail: () => {},
					complete: () => {}
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
<style >
	.container{
		height:100%;
		width:100%;
		background:#fff;
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
		margin-left: 4%;
		padding-top: 150upx;
		height:100%
	}	
	.line{
		width:100%;
		height:1px;
		background:rgba(237,242,245,1);
	}
	.store{
		width:100%;
		height:300upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.2);
		border-radius:12upx;
	}
	.tip{
		height:84upx;
		line-height:84upx;
		margin-left: 20upx;
		font-size:32upx;
	}
	.charge-tip{
		margin-top: 20upx;
		height:34upx;
		font-size:24upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(102,102,102,1);
		line-height:34upx;
		margin-left: 20upx;
	}
	.num{
		height:84upx;
		font-size:60upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(254,114,4,1);
		line-height:84upx;
	}
	.nums{
		padding-left: 10upx;
	}
	.score-num{
		margin-top: 40upx;
		margin-left: 20upx;
		display: flex;
		align-items: center;
	}
	.explain{
		margin-top: 80upx;
		height:44upx;
		font-size:32upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(234,34,34,1);
		line-height:44upx;
	}
	.explain-con{
		height:40upx;
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:40upx;
		margin-top: 20upx;
	}
	.charge-btn{
		width:92%;
		margin-left: 4%;
		height:80upx;
		background:rgba(254,114,4,1);
		border-radius:50upx;
		text-align: center;
		line-height: 80upx;
		font-size:36upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(255,255,255,1);
		position:fixed;
		bottom:30upx;
	}
	.mask{
		width:100%;
		height:100%;
		position:fixed;
		top:0;
		right:0;
		left:0;
		bottom:0;
		background:rgba(0,0,0,1);
		opacity:0.5;
		z-index:2;
	}
	.confirm{
		width:260px;
		height:280upx;
		background:rgba(255,255,255,1);
		border-radius:10px;
		position:fixed;
		top:0;
		right:0;
		left:0;
		bottom:0;
		margin: auto;
		z-index:3;
	}
	.tips{
		width: 100%;
		height:182upx;
	}
	.use-type{
		width:100%;
		height:90upx;
		font-size:36upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(254,105,3,1);
		line-height:50upx;
		padding-top:40upx;
		text-align:center;
	}
	.use-mess{
		width:100%;
		height:40upx;
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(136,136,136,1);
		line-height:40upx;
		text-align:center;
	}
	.act-btn{
		width:100%;
		font-size:16px;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		display:flex;
		align-items: center;
	}
	.cancel{
		width: 260upx;
		text-align: center;
	}
	.sure{
		width:258upx;
		text-align: center;
	}
	.xian{
		width:1px;
		height:96upx;
		background:rgba(246,246,246,1);
	}
	.close{
		width: 40upx;
		height:40upx;
	}
	.success{
		width:92%;
		height:520upx;
		background:rgba(255,255,255,1);
		border-radius:20upx;
		position:fixed;
		top:0;
		right:0;
		left:0;
		bottom:0;
		margin: auto;
		z-index:3;
	}
	.store-logo{
		width: 80upx;
		height:80upx;
	}
	.infos{
		width: 100%;
		height:180upx;position:relative;
		display:flex;
		align-items: center;
	}
	.store-info{
		display: flex;
		align-items: center;
		margin-left: 40upx;
	}
	.close{
		position:absolute;right:40upx;
		top:40upx;
	}
	.charge-store{
		margin-left: 20upx;
	}
	.store-name{
		height:44upx;
		font-size:32upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(0,0,0,1);
		line-height:44upx;
	}
	.store-time{
		height:36upx;
		font-size:24upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(0,0,0,1);
		line-height:36upx;
	}
	.succ-t{
		width:100%;
		height:56upx;
		font-size:40upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:56upx;
		margin-top:48upx;
		text-align:center;
	}
	.succ-m{
		width:100%;
		height:112upx;
		font-size:80upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(254,105,3,1);
		line-height:112upx;
		text-align:center;
	}
	.succ-score{
		width:100%;
		height:44upx;
		font-size:32upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(254,114,4,1);
		line-height:44upx;
		text-align:center;
	}
</style>