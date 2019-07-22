<template>
	<view class="content">
		<uni-nav-bar title="注册"></uni-nav-bar>
		<view>
			
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue" 
	export default {
		data() {
			return {
				
			}
		},
		components:{
			uniNavBar
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
