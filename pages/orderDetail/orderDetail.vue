<template>
	<view class='content'>
		<uni-nav-bar fixed title="确认订单" left-icon="back" @click-left="navigateBack"></uni-nav-bar>
		<view class='header'>
			<view class='head'>
				<view class='wait-send' v-if="wait_send">
					<view class='order-status'>待配送</view>
					<image src='http://www.idash.top/images/wait-send.png' class='status-logo'></image>
					<view class='status'>订单正在为您配送，请耐心等待…</view>
				</view>
				<view class='wait-send' v-if="wait_take">
					<view class='order-status'>待自取</view>
					<image src='http://www.idash.top/images/wait-take-current.png' class='status-logo'></image>
					<view class='status'>待自取5天6小时12分后自动自取完成</view>
				</view>
				<view class='wait-send' v-if="onway">
					<view class='order-status'>待自取</view>
					<image src='http://www.idash.top/images/wait-take-current.png' class='status-logo'></image>
					<view class='status'>待自取5天6小时12分后自动自取完成</view>
				</view>
				<view class='wait-send' v-if="onsucced">
					<view class='order-status'>交易完成</view>
					<image src='http://www.idash.top/images/succend-current.png' class='status-logo'></image>
					<view class='status'>商家已安全送达啦！感谢您的信任</view>
				</view>
				<view class='wait-send' v-if="wait_pay">
					<view class='order-status'>待付款</view>
					<image src='http://www.idash.top/images/wait-pay-current.png' class='status-logo'></image>
					<view class='status'>23小时56分后自动取消订单</view>
				</view>
			</view>
		</view>
		<view class="contents" >
			<view class="site" :id="wait_pay?'sites':''" v-if="onway||wait_pay">
				<view class='store-site' v-if="!wait_pay">商家地址<text>（请在9:00-22:00内自取）</text></view>
				<view class='line' v-if="!wait_pay"></view>
				<view class='adress'>
					<image src="http://www.idash.top/images/site3.png"></image>
					<view class='address-info'>
						<view class='site-info'>江苏省南京市江宁区泥塘小区2栋1306室</view>
						<view class='user-info'>张三 <text>12345678909</text></view>
					</view>
				</view>
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
			<!-- 优惠券 -->
			<view class='coupon'>
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
					<textarea value="" maxlength="30" placeholder="可输入备注要求，最多30字" />
				</view>
			</view>
		</view>
		<!-- 配送信息 -->
		<view class='send-info'>
			<view class='title-info'>订单信息</view>
			<view class='line'></view>
			<view class='info-detail' id='top'>
				<text class='detail-title'>配送服务：</text>
				<text class='detail-con'>配送服务</text>
			</view>
			<view class='info-detail'>
				<text class='detail-title'>配送骑手：</text>
				<text class='detail-con'>配送骑手</text>
			</view>
			<view class='info-detail'>
				<text class='detail-title'>骑手电话：</text>
				<text class='detail-con'>12345678909</text>
			</view>
			<view class='info-detail'>
				<text class='detail-title'>配送地址：</text>
				<text class='detail-con' id='limit'>南京市江宁区义务商品城05栋102室（老鸭粉丝汤店旁）</text>
			</view>
		</view>
		
		<!-- 订单信息 -->
		<view :class="{'order-info':true,pay:wait_pay}">
			<view class='title-info'>订单信息</view>
			<view class='line'></view>
			<view class='info-detail' id='top'>
				<text class='detail-title'>订单编号：</text>
				<text class='detail-con'>245677654494599594945</text>
			</view>
			<view class='info-detail'>
				<text class='detail-title'>下单时间：</text>
				<text class='detail-con'>2018-12-11 12:23:16</text>
			</view>
			<view class='info-detail'>
				<text class='detail-title'>支付方式：</text>
				<text class='detail-con'>微信支付</text>
			</view>
		</view>
		<!-- 支付 -->
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
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	export default {
		data() {
			return {
				wait_send:false,
				wait_take:false,
				onway:false,
				onsucced:false,
				wait_pay:true,
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
			}
		}
	}
</script>

<style>
.contents{
	font-family:PingFangSC-Medium;
	margin-top: 338upx;
}
image.back-icon{
	width:34upx;
	height:34upx;
	margin-left: 22upx;
	position:relative;
	top:12.5upx;
}
.header{
	position:fixed;
	top: 88upx;
	height:230upx;
	width:100%;;
	background:linear-gradient(90deg,rgba(254,135,5,1) 0%,rgba(254,80,2,1) 100%);
	box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.2);
	z-index:2;
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
	font-size:32upx;
	font-family:PingFangSC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
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
	height:100upx;
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
	width: 28upx;
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
	height:100upx;
	line-height:100upx;
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
	width:96%;
	margin: 20upx 2%;
	font-size:14px;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(136,136,136,1);
}
.current{
	background:rgba(254,114,4,1);
	color:#fff;
}
.free-t{
	font-size: 28upx;
}
#more-img{
	width:28upx;
	height:28upx;
	position:absolute;
	right:20upx;
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
.order-info,.send-info{
	width:93.6%;
	height:298upx;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 8upx 0px rgba(0,0,0,0.15);
	border-radius:12upx;
	margin: 20upx 3.2% 32upx 3.2%;
}
.status-logo{
	width: 100upx;
	height:100upx;
	position:absolute;
	right:0;
	top:0;
}
.head{
	position:relative;
	height:100upx;
	width:84%;
	margin:62upx 8% 0 8% ;
}
.order-status{
	height:74upx;
	font-size:52upx;
	font-weight:500;
	color:rgba(255,255,255,1);
	line-height:74upx;
}
.status{
	height:40upx;
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(255,255,255,1);
	line-height:40upx;
}
.title-info{
	height:84upx;
	font-size:32upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
	line-height:84upx;
	margin-left: 20upx;
}
.detail-title{
	height:40upx;
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(136,136,136,1);
	line-height:40upx;
}
.detail-con{
	font-size:28upx;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
	position:absolute;
	right:0;
}
.info-detail{
	margin: 0 20upx;
	height:40upx;
	line-height: 40upx;
	margin-top: 14upx;
	display: flex;
	align-items: center;
	position:relative;
}
#top{
	margin-top: 30upx;
}
.send-info{
	height:394upx;
}
#limit{
	margin-top: 14upx;
	width:370upx;
	display:flex;
	flex-wrap:wrap ;
}
.pay{
	margin-bottom:180upx;
}
#sites{
	height:180upx;
}
</style>
