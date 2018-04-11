<template>
	<header class="header">
		<a style="color:#fff;" v-if="isback" @touchstart="back($event)">
			<i class="iconfont">&#xe605;</i>
		</a>
		<span v-html="text" @click="click"></span>
		<slot></slot>
	</header>
</template>

<script>
	export default{
		props:{
			isback:{
				default:false
			},
			text:{
				default:""
			},
			text1:{
				default:""
			}
		},
		methods:{
			back(e){
				this.$router.go(-1);
				e.preventDefault()
			},
			click(){
				this.$emit('click');
			}
		}
	}
</script>

<style scoped="scoped">
	.header {
		width: 100vw;
		box-sizing: border-box;
		padding: 0 5vw;
		text-align: center;
		height: 7vh;
		line-height: 7vh;
		font-size: 0.30rem;
		background: #5bb8ff;
		color: #fff;
	}
	
	.header i {
		float: left;
		font-size: 0.36rem;
		font-weight: 900;
	}
	
	.header span {
		font-size: 0.42rem;
	}
	
	.tk {
		width: 11vw;
		height: 4vh;
		border: 1px solid #fff;
		line-height: 4vh;
		text-align: center;
		float: right;
		margin-top: 1.5vh;
		border-radius: 3px;
	}
	
	.xgmima {
		float: right;
		color: #fff;
	}
	.text1{
		float: right;
	}
</style>