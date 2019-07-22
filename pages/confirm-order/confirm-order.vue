<template>
	<view class='content'>
		<uni-nav-bar fixed title="确认订单" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class="contents" >
			<!-- 买家自取 -->
			<view class="site" v-if="sendType">
				<view class='store-site'>商家地址<text>（请在9:00-22:00内自取）</text></view>
				<view class='line'></view>
				<view class='adress'>
					<image src="http://www.idash.top/images/site3.png"></image>
					<view class='address-info'>
						<view class='site-info'>江苏省南京市江宁区泥塘小区2栋1306室</view>
						<view class='user-info'>张三 <text>12345678909</text></view>
					</view>
				</view>
			</view>
			<!-- 没有地址 -->
			<view class="check-site" v-if='!hasSite'>
				<image src="http://www.idash.top/images/site4.png"></image>
				<view class='check-info'>
					<view class='site-info'>江苏省南京市江宁区泥塘小区2栋1306室</view>
					<view class='user-info'>张三 <text>12345678909</text></view>
				</view>
				<image src='http://www.idash.top/images/right.png' id='more-img'></image>
			</view>
			<!-- 选择完地址 -->
			<view class="check-site" v-if='hasSite'>
				<image src="http://www.idash.top/images/site4.png"></image>
				<view class='check-info'>
					<view class='site-info'>需要我们送到哪里？</view>
					<view class='user-info'>请填写收货地址</view>
				</view>
				<image src='http://www.idash.top/images/right.png' id='more-img'></image>
			</view>
			<!-- 商品 -->
			<view class='lists'>
				<view class='store-name'>
					<text>水果拼盘集合地（义乌店）</text>
				</view>
				<view class='line'></view>
				<view class="goods-list">
					<view class='goods-pic'>
						<image src="http://www.idash.top/images/lizhi.png"></image>
					</view>
					<view class='goods-name'>
						<text>商品名称</text>
						<view class='goods-num'>
							¥26
						</view>
					</view>
					<view class='goods-price'>
						x1
					</view>
				</view>
				<view class="goods-list">
					<view class='goods-pic'>
						<image src="http://www.idash.top/images/lizhi.png"></image>
					</view>
					<view class='goods-name'>
						<text>商品名称</text>
						<view class='goods-num'>
							¥26
						</view>
					</view>
					<view class='goods-price'>
						x1
					</view>
				</view>
				<view class='line-bot' ></view>
				<view class='account'>
					<view class='fee'>
						<text class='fee-t'>配送费</text>
						<text class='fee-num'>¥ 0.00</text>
						<text class='rule'>配送规则></text>
					</view>
					<view class='fee-count'>
						<view class='fee-f'>
							<text class='count'>合计</text>
							<text class='nums'>¥ 52</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 免邮区域 -->
			<view class='area'>
				<view class='free-rule'>
					<text class='freea'>免邮区域</text>
					<text class="free-t">（地址需与免邮区域一致）</text>
					<text class='free-r'>
						免邮规则>
					</text>
				</view>
				<view class='free-list'>
					<view v-for="i,index in 6" :class="{'free-area':true,'current':(idx==index)}">南大校区免邮</view>
				</view>
			</view>
			<!-- 优惠券 -->
			<view class='coupon'>
				<view class='check-soupon' @click="cancel">
					<text>选择优惠券</text>
					<view class='more'>
						<text>可用优惠券1张</text>
						<image src="http://www.idash.top/images/right.png"></image>
					</view>
				</view>
				<view class='line'></view>
				<view class='sale'>
					<text class='store-coupon'>商家优惠券</text>
					<view class='more-s'>
						<text class='fee-sale'>可抵10.00元</text>
						<view class='check-on'>
							<view class='check-in'></view>
						</view>
					</view>
				</view>
			</view>
			<!-- 备注 -->
			<view class='remark'>
				<view class="remarks">备注</view>
				<view class='line'></view>
				<view class='remark-con'>
					<textarea value="" placeholder="可输入备注要求，最多30字" />
				</view>
			</view>
		</view>
		<!-- 结算 -->
		<view class='footer'>
			<view class='foot'>
				<view class='count-price'>
					<text class='count'>合计</text>¥ 39.8
				</view>
				<view class='pre'>优惠¥10</view>
				<!-- <view class='post'>配送未满起送价 ¥30</view> -->
				<view class="count-btn">
					支付
				</view>
			</view>
		</view>
		<!-- 遮罩层 -->
		<view class='mask' v-if="coupon || succed"></view>
		<!-- 选择优惠券 -->
		<view class="coupons" v-if="coupon">
			<view class='coupon-title'>选择优惠券</view>
			<view class='line'></view>
			<view class="ticket-wrapper">
				<view v-for="i in 4" class='coupon-list'>
					<view class='money'>¥ 300</view>
					<view class='xian'></view>
					<view>
						<view class='charge'>充值优惠券</view>
						<view class='use-store'>限适用于：静静地水果店 </view>
						<view class='use-time'>有效期至：2019.12.24 </view>
					</view>
					<image :src="check_img" class='check-png' @click='check'></image>
				</view>
			</view>
			<view class='coupon-act'>
				<view class='coupon-cancel' @click='cancel'>取消</view>
				<view class='coupon-sure' @click='cancel'>确定</view>
			</view>
		</view>
		<!-- 支付成功 -->
		<view class='pay-success'v-if='succed'>
			<image src="http://www.idash.top/images/close.png" class='uni-icon-close'></image>
			<view class='uni-store'>
				<image src="http://www.idash.top/images/fruit6.png" class='uni-icon-logo'></image>
				<view class='store-s'>
					<view class='store-names'>商店名称</view>
					<view class='store-time'>营业时间：9:00 - 22:00</view>
				</view>
			</view>
			<view class='line'></view>
			<view class='succed'>支付成功</view>
			<view class='pay-money'>¥ 56.00</view>
			<view class='score'>完成订单可获得100积分</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	export default {
		data() {
			return {
				idx:1,
				sendType:false,
				hasSite:false,
				coupon:true,
				check_img:'http://www.idash.top/images/check1.png',
				succed:false
			}
		},
		components: {
			uniNavBar,
			uniIcon
		},
		methods: {
			cancel:function(){
				this.coupon = !this.coupon;
			},
			check:function(){
				this.check_img='http://www.idash.top/images/check2.png'
			},
			back:function(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
.contents{
	margin-top:150upx;
	font-family:PingFangSC-Medium;
}
image.back-icon{
	width:34upx;
	height:34upx;
	margin-left: 22upx;
	position:relative;
	top:12.5upx;
}
.lists{
	width:92%;
	height:624upx;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.15);
	border-radius:12upx;
	margin:20upx  4% ;
}
.store-name{
	height: 90upx;
	display: flex;
	align-items: center;
	position: relative;
}
.store-name{
	margin-left: 20upx;
}
.store-name image{
	position:absolute;
	right:20upx;
	width: 28upx;
	height:28upx;
}
.line,.line-bot{
	width:100%;
	height:2upx;
	background:rgba(239,244,247,1);
}
.goods-list{
	margin: 30upx 20upx 0 20upx;
	height:120upx;
	display:flex;
	position:relative;
}
.goods-pic image{
	width: 120upx;
	height:120upx;
}
.goods-num{
	height:40upx;
	display: flex;
	align-items: center;
	position:absolute;
	right:0;
}
.goods-num image{
	width: 40upx;
	height:40upx;
}
.goods-name{
	display: flex;
	margin-left: 20upx;
	height:60upx;
	align-items: center;
}
.goods-name text{
	font-size:32upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
	line-height:44upx;
	
}
.goods-num{
	position:absolute;
	right:0;
	display:flex;
}
.goods-num text{
	font-size:36upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(85,85,85,1);
	margin:0 24upx ;
}
.goods-price{
	position:absolute;
	bottom:10upx;
	left:140upx;
	font-size:28upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
}
.line-bot{
	margin-top: 40upx;
}
.account{
	width: 100%;
	height:100upx;
	position: relative;
}
.count{
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
}
.nums{
	color:#FF7200;
	font-size:32upx;
}
.footer{
	width:93.6%;
	margin-left: 3.2%;
	height:120upx;
	background:rgba(255,255,255,1);
	box-shadow:0px 2upx 8upx 0px rgba(0,0,0,0.2);
	border-radius:12upx;
	position: fixed;
	bottom: 40upx;
}
.foot{
	height:120upx;
	display: flex;
	align-items: center;
}
.count-price{
	margin-left: 20upx;
	font-size:38upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	height:56upx;
	line-height:56upx;
	position: absolute;
	top:20upx;
}
.count-btn{
	position: absolute;
	right:20upx;
	width:120upx;
	height:60upx;
	background:rgba(254,114,4,1);
	border-radius:30upx;
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(255,255,255,1);
	text-align: center;
	line-height: 60upx;
}
.pre{
	font-size:12px;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:#AAAAAA;
	line-height:60upx;
	height:60upx;
	position:absolute;
	bottom:0;
	left: 20upx;
}
.post{
	position:absolute;
	right:160upx;
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(164,176,181,1);
}
.site{
	width:92%;
	margin-left: 4%;
	height:276upx;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.15);
	border-radius:12upx;
}
.store-site{
	height:84upx;
	font-size:32upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:84upx;
	margin-left: 20upx;
}
.store-site text{
	font-size: 28upx;
}

.adress{
	height: 190upx;
	display: flex;
	align-items: center;
}
.adress image{
	width: 60upx;
	height:72upx;
	margin-left: 26upx;
}
.address-info{
	margin: auto 36upx ;
	font-size:32upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:44upx;
}

.user-info{
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
}

.user-info text{
	margin-left: 20upx;
}

.fee{
	margin: 40upx 14upx 0 14upx;
	height:40upx;
	line-height:40upx;
}
.rule{
	float: right;
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(254,114,4,1);
	
}
.fee-num{
	font-size:14px;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(136,136,136,1);
	margin-left: 40upx;
}
.fee-t{
	font-size:14px;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(136,136,136,1);
}
.fee-count{
	margin: 20upx 14upx 0 14upx;
	height:56upx;
	line-height: 56upx;
}
.fee-f{
	float:right;
}
.nums{
	margin-left: 20upx;
}
.coupon{
	width: 92%;
	margin: 20upx 4% 0 4%;
	height:170upx;
	box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.15);
	border-radius:12upx;
}

.check-soupon{
	line-height:84upx;
	height:84upx;
	font-size:32upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	margin: 0 14upx;
}
.more image{
	width: 18upx;
	height:28upx;
	position:relative;
	top:4upx;
	margin-left: 10upx;
}

.more{
	float: right;
	font-size:14px;
	font-weight:400;
	color:rgba(51,51,51,1);

}

.sale{
	height:84upx;
	line-height:84upx;
	margin: 0 14upx;
}
.store-coupon{
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
}

.fee-sale{
	font-size:14px;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(254,114,4,1);
}
.check-on{
	width:28upx;
	height:28upx;
	background:rgba(254,114,4,1);
	border-radius: 50%;
	margin-left: 20upx;
}
.more-s{
	display: flex;
	align-items: center;
	float: right;
}
.check-in{
	width:12upx;
	height:12upx;
	background:rgba(255,255,255,1);
	margin: 8upx;
	border-radius: 50%;
}
.remark{
	width: 92%;
	margin:20upx  4% 0 4%;
	height:240upx;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.15);
	border-radius:12upx;
}
.remarks{
	height: 84upx;
	line-height: 84upx;
	font-size:32upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	margin-left: 14upx;
}
.remark-con textarea{
	margin: 20upx 14upx;
	font-size:14px;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(136,136,136,1);
}

.area{
	width:92%;
	margin: 20upx 4% 0 4%;
	height:143px;
	background:rgba(255,255,255,1);
	box-shadow:0px 1px 4px 0px rgba(0,0,0,0.2);
	border-radius:6px;
}

.free-rule{
	height:84upx;
	line-height:84upx;
	margin: 0 14upx;
	
}
.free-list{
	display: flex;
	flex-wrap: wrap;
}
.free-area{
	width:200upx;
	height:60upx;
	line-height: 60upx;
	border-radius:12upx;
	border:2px solid rgba(254,114,4,1);
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(254,114,4,1);
	margin:20upx 0 0 20upx;
	text-align: center;
}
.free-r{
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(254,114,4,1);
	float: right;
}
.freea{
	font-size:32upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
}
.current{
	background:rgba(254,114,4,1);
	color:#fff;
}
.free-t{
	font-size: 28upx;
}
.check-site{
	width: 92%;
	margin: 4%;
	height:180upx;
	background:rgba(240,240,240,1);
	border-radius:12upx;
	display: flex;
	align-items: center;
	position:relative;
}
.check-site image{
	width: 60upx;
	height:72upx;
	margin-left: 26upx;
}
.check-info{
	width: 474upx;
	margin-left: 26upx;
	font-size:32upx
}
#more-img{
	width:18upx;
	height:28upx;
	position:absolute;
	right:20upx;
}
.mask{
	width: 100%;
	height:100%;
	position:fixed;
	top:0;
	left:0;
	right:0;
	bottom:0;
	z-index:999;
	background: #000000;
	opacity: 0.5;
}
.coupons{
	width:92%;
	margin-left: 4%;
	height:75%;
	background:rgba(255,255,255,1);
	border-radius:20upx;
	position:fixed;
	margin:auto;
	top:0;
	left:0;
	right:0;
	bottom:0;
	z-index:1000;
	display:flex;
	flex-direction: column;
}
.coupon-title{
	height:104upx;
	width: 100%;
	line-height:104upx;
	text-align: center;
	font-size:32upx;
	font-weight:500;
	color:rgba(254,114,4,1);
}
.coupon-list{
	width:94%;
	margin:20upx 3%;
	height:160upx;
	background-image: url('http://www.idash.top/images/coupon.png');
	background-repeat: no-repeat;
	background-size:100% 100%;
	display: flex;
	align-items: center;
	position: relative;
}
.money{
	width:110upx;
	height:60upx;
	font-size:32upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	line-height:60upx;
	text-align: center;
	color:rgba(254,114,4,1);
	margin:0 20upx;
}
.check-png{
	width:60upx;
	height:60upx;
	position:absolute;
	right:40upx;
	z-index:10000;
}
.xian{
	height:106upx;
	display: flex;
	border-left:2upx dashed #D5DEE1;
	margin-right: 20upx;
}

.charge{
	font-size:36upx;
	font-weight:500;
	color:rgba(51,51,51,1);
	height:50upx;
	line-height:50upx;
}
.use-store,.use-time{
	height:34upx;
	font-size:24upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(136,136,136,1);
	line-height:34upx;	
}
.coupon-cancel{
	height:60upx;
	border-right: 1px solid #F6F6F6;
	width: 49%;
	text-align: center;
	line-height: 60upx;
	margin-top: 20upx;
}
.coupon-sure{
	height:60upx;
	text-align: center;
	line-height: 60upx;
	width: 50%;
	margin-top: 20upx;
}
.coupon-act{
	display: flex;
	align-items: center;
	font-size:16px;
	font-weight:400;
	color:rgba(136,136,136,1);
	width: 100%;
	padding: 20upx;
	border-top: 1px solid rgba(239,244,247,1);
}
view.ticket-wrapper{
	flex: 1;
	overflow: auto;
}
.pay-success{
	width:92%;
	margin: auto;
	height:520upx;
	background:rgba(255,255,255,1);
	border-radius:20upx;
	z-index:1000;
	position:fixed;
	top:0;
	bottom:0;
	right:0;
	left:0;
}
.uni-icon-close{
	width:40upx;
	height:40upx;
	float: right;
	margin: 22upx 22upx 0 0;
}
.uni-store{
	display:flex;
	align-items: center;
	margin: 60upx 0 40upx 0;
}
.uni-icon-logo{
	width:80upx;
	height:80upx;
	background:rgba(216,216,216,1);
	border-radius: 50%;
	margin-left: 40upx;
}
.store-s{
	margin-left: 20upx;
}
.store-names{
	font-size:32upx;
	font-weight:500;
	color:rgba(0,0,0,1);
}
.store-time{
	font-size:24upx;
	font-weight:500;
	color:rgba(0,0,0,1);
}
.succed{
	height:56upx;
	font-size:40upx;
	font-weight:400;
	color:rgba(51,51,51,1);
	line-height:56px;
	margin: 48upx 0 24upx 0;
	width: 100%;
	text-align: center;
}
.pay-money{
	height:112upx;
	font-size:80upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(254,105,3,1);
	line-height:112upx;
	width: 100%;
	text-align: center;
}
.score{
	height:44upx;
	font-size:32upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(254,114,4,1);
	line-height:44upx;
	width: 100%;
	text-align: center;
}

</style>
