<template>
	<view class="content">
		<uni-nav-bar fixed title="登录"></uni-nav-bar>
		<view class="login-wrapper">
			<view class="phone-wrapper">
				<label>+86</label>
				<input @input="toggleClose" type="number" maxlength="11" v-model="phone" class="padding-left" />
				<uni-icon color="#FE7204" v-if="showIcon" @click="clearPhone" type="close" size="20"></uni-icon>
			</view>
			<view class="phone-wrapper">
				<input maxlength="6" v-model="code" placeholder="请输入验证码" type="number" />
				<text @tap="sendCode" class="send-code">{{sendTips}}</text>
			</view>
			<button @tap="login" class="button login">登录</button>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import uniIcon from "@/components/uni-icon/uni-icon.vue";
export default {
	data() {
		return {
			phone: '',
			code: '',
			showIcon: false,
			sendTips:'发送验证码',
			waitTime:60,
			interval:''
		};
	},
	components: {
		uniNavBar,
		uniIcon
	},
	methods: {
		clearPhone() {
			this.phone = '';
		},
		toggleClose() {
			if (this.phone.length != 0) {
				this.showIcon = true;
			} else {
				this.showIcon = false;
			}
		},
		login() {
			// if(!(/^1[3456789]\d{9}$/.test(this.phone))) {
			// 	uni.showToast({
			// 		title:'手机号输入有误',
			// 		icon:"none"
			// 	});
			// 	return;
			// }
			// if(this.code.length != 6) {
			// 	uni.showToast({
			// 		title:'请输入6位验证码',
			// 		icon:'none'
			// 	});
			// 	return;
			// }
			uni.navigateTo({
				url: '../bind/bind'
			});
		}
	},
	watch: {
		phone() {
			if (this.phone.length != 0) {
				this.showIcon = true;
			} else {
				this.showIcon = false;
			}
		}
	}
};
</script>

<style>
.login-wrapper {
	padding: 50upx;	
	padding-top: 150upx;
}
.phone-wrapper {
	display: flex;
	align-items: center;
	border-bottom: 1px solid #EEEEEE;
	padding: 35upx 0;
}
input.padding-left {
	padding-left: 20upx;
}
button.login {
	margin-top: 50%;
}
text.send-code {
	color: #fe7204;
	font-size: 12px;
}
</style>
