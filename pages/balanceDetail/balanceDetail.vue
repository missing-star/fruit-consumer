<template style="background: #fff;">  
    <view class="container">  
		<uni-nav-bar fixed title="明细" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		
		<view class='docker'>
			<view v-if="!none">
				<view class='time-picker'>
					2018年10月
					<span class="mui-icon mui-icon-arrowdown"></span>
				</view>
				<view v-for="i in 9">
					<view class='int-list'>
						<view>
							<view class='int-tip'>充值得积分</view>
							<view class='int-time'>店铺名称</view>
						</view>
						<view class='int-score'>
							<view>+200积分</view>
							<view class='int-time'>07-12 20:23</view>
						</view>
					</view>
					<view class='line'></view>
				</view>
			</view>
			<view class='none'>
				<image src='../../static/images/none.png'></image>
				<view class='none-text'>暂无充值明细</view>
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
				none:true
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
			},back:function(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}  
</script>  
<style >
	.container{
		width: 100%;
		height:100%;
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
		padding-top: 118upx;
		
	}	
	.int-list{
		height:138upx;
		display: flex;
		align-items: center;
		position: relative;
		
	}
	.int-tip{
		height:44upx;
		font-size:32upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(0,0,0,1);
		line-height:44upx;
	}
	.int-time{
		height:34upx;
		font-size:24upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(136,136,136,1);
		line-height:34upx;
	}
	.int-score{
		height:44upx;
		font-size:32upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(254,114,4,1);
		line-height:44upx;
		position:absolute;
		right:0;
	}
	.line{
		width:345px;
		height:1px;
		background:rgba(246,246,246,1);	
	}
	.time-picker{
		width:220upx;
		height:56upx;
		background:rgba(240,240,240,1);
		border-radius:30upx;
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:56upx;
		text-align: center;
	}
	.none{
		width:100%;
		height:100%;
		background:#fff;
		position:fixed;
		top:0;right:0;
		left:0;
		bottom:0;
		margin:auto;
		text-align: center;
	}
	.none-text{
		font-size:32upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(254,114,4,1);
		margin-top: 30upx;
	}
	.none image{
		width: 320upx;
		height:210upx;
		margin-top: 50%;
	}
	
</style>