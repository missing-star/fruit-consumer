<template>  
    <view style='background:#f0f0f0'>  
		<uni-nav-bar fixed title="消息"></uni-nav-bar>
		<view class='docker'>
			<view class='messages'>
				<view class='mess' @click='mess()'>
					<view class='img'></view>
					<view class='intro'>首届中国国际进口博览会开幕式侧记</view>
					<view class='time'>
						<text>显示店名</text>
						<text class='long'>3小时前</text>
					</view>
				</view>
				<view class='mess'>
					<view class='img'></view>
					<view class='intro'>滨海新区发布中国首款自主RapidIO二代交换芯片</view>
					<view class='time'>
						<text>显示店名</text>
						<text class='long'>3小时前</text>
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
				
			}
		},
		components: { 
			uniNavBar,	
		},
		methods: {
			navigate:function(str){
				uni.navigateTo({
					url: str,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			mess:function(){
				this.navigate('../messageDetail/messageDetail')
			}
		}
	}  
</script>  
<style >
	html{
		background-color: #f0f0f0;
	}
	page{
		box-sizing: border-box;
		background: #f0f0f0;
	}
	image.back-icon{
		width:34upx;
		height:34upx;
		margin-left: 22upx;
		position:relative;
		top:12.5upx;
	}
	.docker{
		width:100%;
		padding:4%;
		padding-top: 150upx;
	}	
	.img{
		width:100%;
		height:218upx;
		background:#D8D8D8;
	}
	.intro{
		margin: 20upx;
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(32,32,32,1);
		line-height:40upx;
	}
	.time{
		height:34upx;
		font-size:24upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(136,136,136,1);
		line-height:34upx;
		margin:0 20upx;
	}
	.mess{
		width: 48%;
		background:white;
		margin: 1%;
	}
	.long{
		float:right;
	}
	.messages{
		display:flex;
		width: 100%;
	}
</style>