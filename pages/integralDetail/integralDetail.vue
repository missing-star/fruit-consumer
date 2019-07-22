<template>  
    <view class="container">  
		<uni-nav-bar fixed title="积分明细" style="top:0">
			<view class="left-part" slot="left" @click='back'>
				<image class="back-icon" src="http://www.idash.top/images/back.png" mode=""></image>
			</view>
		</uni-nav-bar>
		
		<view class='docker'>
			<view v-for="i in 7">
				<view class='int-list'>
					<view>
						<view class='int-tip'>充值得积分</view>
						<view class='int-time'>07-12 20:23</view>
					</view>
					<view class='int-score'>+200积分</view>
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
		margin-top: 88upx;
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
</style>