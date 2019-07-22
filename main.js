import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.mixin({
	methods: {
		navigateBack() {
			uni.navigateBack({
				delta: 1
			});
		},
		sendCode() {
			if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
				uni.showToast({
					title: '手机号输入有误',
					icon: 'none'
				});
				return;
			}
			if(this.waitTime != 60) {
				return;
			}
			this.sendTips = `${this.waitTime}s后重发`;
			this.interval = setInterval(() => {
				if (this.watiTime == 1) {
					this.waitTime = 60;
					this.sendTips = `发送验证码`;
					clearInterval(this.interval);
				} else {
					this.waitTime--;
					this.sendTips = `${this.waitTime}s后重发`;
				}
			}, 1000);
			return;
			uni.request({
				url: '',
				method: 'POST',
				dataType: 'json',
				success: (data) => {

				},
				fail: () => {

				}
			});
		}
	}
});

const app = new Vue({
	...App
})
app.$mount()
