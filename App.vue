<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	view{
		box-sizing: border-box;
	}
	/*每个页面公共css */
	page{
		box-sizing: border-box;
		background:#fff;
	}
	label,input{
		font-size: 14px;
		color: #000000;
	}
	input{
		flex: 1;
		height: 100%;
	}
	button{
		border-radius: 100upx;
		background: #FE7204;
		color: #FFFFFF;
		font-size: 16px;
	}
	picker{
		flex:1;
	}
	picker view{
		font-size: 14px;
	}
</style>
