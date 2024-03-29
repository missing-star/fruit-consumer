<template>
	<view class="uni-navbar" :class="{ 'uni-navbar-fixed': isFixed, 'uni-navbar-shadow': hasShadow }" :style="{ 'background-color': backgroundColor }">
		<uni-status-bar v-if="insertStatusBar"></uni-status-bar>
		<view class="uni-navbar-header" :style="{ color: color }">
			<view class="uni-navbar-header-btns" @tap="onClickLeft">
				<!-- #ifdef MP-WEIXIN -->
				<view v-if="leftIcon.length"><uni-icon :type="leftIcon" :color="color" size="24"></uni-icon></view>
				<view v-if="leftText.length" class="uni-navbar-btn-text" :class="{ 'uni-navbar-btn-icon-left': !leftIcon.length }">{{ leftText }}</view>
				<!-- #endif -->
				<slot name="left"></slot>
			</view>
			<view class="uni-navbar-container">
				<view v-if="title.length" class="uni-navbar-container-title">{{ title }}</view>
				<!-- 标题插槽 -->
				<slot></slot>
			</view>
			<view class="uni-navbar-header-btns" @tap="onClickRight">
				<view v-if="rightIcon.length"><uni-icon :type="rightIcon" :color="color" size="24"></uni-icon></view>
				<!-- 优先显示图标 -->
				<view v-if="rightText.length && !rightIcon.length" class="uni-navbar-btn-text">{{ rightText }}</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
import uniStatusBar from '../uni-status-bar/uni-status-bar.vue';
import uniIcon from '../uni-icon/uni-icon.vue';

export default {
	components: {
		uniStatusBar,
		uniIcon
	},
	props: {
		/**
		 * 标题文字
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * 左侧按钮文本
		 */
		leftText: {
			type: String,
			default: ''
		},
		/**
		 * 右侧按钮文本
		 */
		rightText: {
			type: String,
			default: ''
		},
		/**
		 * 左侧按钮图标
		 */
		leftIcon: {
			type: String,
			default: ''
		},
		/**
		 * 右侧按钮图标
		 */
		rightIcon: {
			type: String,
			default: ''
		},
		/**
		 * 是否固定在顶部
		 */
		fixed: {
			type: [Boolean, String],
			default: true
		},
		/**
		 * 按钮图标和文字颜色
		 */
		color: {
			type: String,
			default: '#FFFFFF'
		},
		/**
		 * 背景颜色
		 */
		backgroundColor: {
			type: String,
			default: '#FFFFFF'
		},
		/**
		 * 是否包含状态栏，默认固定在顶部时包含
		 */
		statusBar: {
			type: [Boolean, String],
			default: ''
		},
		/**
		 * 是否使用阴影，默认根据背景色判断
		 */
		shadow: {
			type: String,
			default: ''
		}
	},
	computed: {
		isFixed() {
			return String(this.fixed) === 'true';
		},
		insertStatusBar() {
			switch (String(this.statusBar)) {
				case 'true':
					return true;
				case 'false':
					return false;
				default:
					return this.isFixed;
			}
		},
		hasShadow() {
			var backgroundColor = this.backgroundColor;
			switch (String(this.shadow)) {
				case 'true':
					return true;
				case 'false':
					return false;
				default:
					return backgroundColor !== 'transparent' && backgroundColor.indexOf('rgba') < 0;
			}
		}
	},
	methods: {
		/**
		 * 左侧按钮点击事件
		 */
		onClickLeft() {
			this.$emit('click-left');
			console.log('click-left');
		},
		/**
		 * 右侧按钮点击事件
		 */
		onClickRight() {
			this.$emit('click-right');
		}
	}
};
</script>

<style>
.uni-navbar-header .uni-navbar-header-btns {
	width: auto !important;
}
.uni-navbar {
	display: block;
	position: relative;
	width: 100%;
	background-color: #ffffff;
	overflow: hidden;
	background: linear-gradient(90deg, rgba(254, 135, 5, 1) 0%, rgba(254, 80, 2, 1) 100%);
}

.uni-navbar view {
	line-height: 44px;
}
.uni-navbar.uni-navbar-fixed {
	position: fixed;
	z-index: 998;
	top: 0;
}

.uni-navbar-header {
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 44px;
	line-height: 44px;
	font-size: 16px;
}

.uni-navbar-header .uni-navbar-header-btns {
	display: inline-flex;
	flex-wrap: nowrap;
	flex-shrink: 0;
	width: 120upx;
	padding: 0 12upx;
}

.uni-navbar-header .uni-navbar-header-btns:first-child {
	padding-left: 0;
}
.uni-navbar-header .uni-navbar-header-btns:last-child {
	width: 60upx;
}
.uni-navbar-container {
	width: 100%;
	margin: 0 10upx;
}
.uni-navbar-container-title {
	font-size: 30upx;
	text-align: center;
	padding-right: 60upx;
}
</style>
