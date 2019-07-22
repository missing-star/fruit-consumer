<template>
	<view class="content">
		<uni-nav-bar fixed title="手机绑定"></uni-nav-bar>
		<view class="login-wrapper">
			<view class="phone-wrapper">
				<label>+86</label>
				<input @input="toggleClose" type="number" maxlength="11" v-model="phone" class="padding-left" />
				<uni-icon color="#FE7204" v-if="showIcon" @click="clearPhone" type="close" size="20"></uni-icon>
			</view>
			<view class="phone-wrapper">
				<input maxlength="6" v-model="code" placeholder="请输入验证码" type="number" />
				<span class="send-code">发送验证码</span>
			</view>
			<view @tap="togglePickerJob" class="phone-wrapper uni-navigate-right"><input v-model="selectedJob.label" type="text" disabled placeholder="请选择职业" /></view>
			<view @tap="togglePickerSex" class="phone-wrapper uni-navigate-right"><input v-model="selectedSex.label" type="text" disabled placeholder="请选择性别" /></view>
			<view @tap="togglePickerDate" class="phone-wrapper uni-navigate-right"><input type="text" v-model="selectedDate" disabled placeholder="请选择出生日期" /></view>
			<view @tap="togglePicker" class="phone-wrapper uni-navigate-right"><input v-model="selectedCity" type="text" disabled placeholder="请选择城市" /></view>
			<!-- cityPicker -->
			<w-picker mode="region" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker"></w-picker>
			<!-- sexPicker -->
			<w-picker mode="selector" :selectList="sexList" @confirm="onConfirmSex" ref="pickerSex"></w-picker>
			<!-- jobPicker -->
			<w-picker mode="selector" :selectList="jobList" @confirm="onConfirmJob" ref="pickerJob"></w-picker>
			<!-- DatePicker -->
			<w-picker mode="date" startYear="1900" endYear="2050" :current="true" @confirm="onConfirmDate" themeColor="#f00" ref="pickerDate"></w-picker>
			<view class="phone-wrapper"><input placeholder="输入商家码(选填)" type="text" /></view>
			<button @tap="bind" class="button login">立即绑定</button>
		</view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import uniIcon from '@/components/uni-icon/uni-icon.vue';
import wPicker from '@/components/w-picker/w-picker.vue';
export default {
	data() {
		return {
			phone: '',
			code: '',
			showIcon: false,
			jobList: [{ label: '教师', value: 0 }, { label: '校长', value: 1 }],
			sexList: [
				{
					label: '男',
					value: 0
				},
				{
					label: '女',
					value: 1
				}
			],
			date: getDate({
				format: true
			}),
			startDate: getDate('start'),
			endDate: getDate('end'),
			jobIndex: 0,
			selectedSex: {
				label: '男',
				value: '0'
			},
			selectedJob: {
				label: '教师',
				value: '0'
			},
			defaultVal: [0, 0, 0],
			selectedCity: '北京市 市辖区 东城区',
			selectedDate: ''
		};
	},
	components: {
		uniNavBar,
		uniIcon,
		wPicker
	},
	methods: {
		clearPhone() {
			this.phone = '';
		},
		bind() {
			uni.switchTab({
				url: '../index/index'
			});
		},
		bindTimeChange(e) {
			this.time = e.target.value;
		},
		changePicker(type, event) {
			this[type + 'Index'] = event.target.value;
		},
		bindDateChange(e) {
			this.date = e.target.value;
		},
		togglePicker() {
			this.$refs.picker.show();
		},
		onConfirm(val) {
			this.selectedCity = val.checkArr.join(' ');
		},
		togglePickerSex() {
			this.$refs.pickerSex.show();
		},
		onConfirmSex(val) {
			this.selectedSex = {
				label: val.checkArr.label,
				value: val.checkArr.value
			};
		},
		togglePickerJob() {
			this.$refs.pickerJob.show();
		},
		onConfirmJob(val) {
			this.selectedJob = {
				label: val.checkArr.label,
				value: val.checkArr.value
			};
		},
		togglePickerDate() {
			this.$refs.pickerDate.show();
		},
		onConfirmDate(val) {
			this.selectedDate = val.result;
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
	},
	created() {
		var date = new Date();
		this.selectedDate = date.getFullYear() + '-'+(date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1) + '-'+(date.getDate() < 10 ?'0'+date.getDate() : date.getDate());
	}
};
function getDate(type) {
	const date = new Date();

	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	if (type === 'start') {
		year = year - 60;
	} else if (type === 'end') {
		year = year + 2;
	}
	month = month > 9 ? month : '0' + month;
	day = day > 9 ? day : '0' + day;

	return `${year}-${month}-${day}`;
}
</script>

<style>
.login-wrapper {
	padding-left: 35upx;
	padding-right: 35upx;
	padding-top: 150upx;
}
.phone-wrapper {
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eeeeee;
	padding: 35upx 0;
}
input.padding-left {
	padding-left: 20upx;
}
button.login {
	position: fixed;
	width: 90%;
	bottom: 20upx;
	left: 5%;
}
span.send-code {
	color: #fe7204;
	font-size: 12px;
}
.uni-navigate-right {
	position: relative;
}
.uni-navigate-right::after {
	font-family: uniicons;
	content: '\E583';
	position: absolute;
	right: 0;
	top: 50%;
	color: #bbb;
	transform: translateY(-50%);
}
</style>
