<template>  
    <view class="container">  
		<uni-nav-bar fixed title="设置" @click-left="navigateBack" left-icon="back"></uni-nav-bar>
		<view class='docker'>
				<uni-list>
					<uni-list-item title="手机号绑定"   ></uni-list-item>
					<uni-list-item title="关于我们"  ></uni-list-item>
				</uni-list>
		</view>
		<view class='logout' @click='login'>退出登录</view>
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
			},
			login:function(){
				this.navigateTo('../login/login')
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
		margin:150upx 4% 0 4%;
	}	
	.container{
		width: 100%;
		height:100%;
		position:fixed;
		top:0;
		left:0;
		bottom:0;
		background:#fff;
	}
	.uni-list-cell__container{
		padding:24upx 0
	}
	.logout{
		width:92%;
		height:80upx;
		background:rgba(254,114,4,1);
		border-radius:50upx;
		position:fixed;
		left: 4%;
		bottom:30upx;
		line-height:80upx;
		text-align:center;
		font-size:36upx;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
</style>