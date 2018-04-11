<template>
	<div class="box">
		<div class="fy" @click="up">上一页</div>
		<div class="xz">第<span>{{n}}</span>页</div>
		<div class="fy" @click="next">下一页</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				n:1
			}
		},
		watch:{
			n(){
				this.$emit("change",this.n);
			},
			key1(){
				console.log(1)
				this.n=1;
			}
		},
		methods:{
			up(){
				if(this.n==1){
					return;
				}
				this.n--;
			},
			next(){
				if(this.n>=this.size){
					return;
				}
				this.n++;
			}
		},
		props:{
			size:{
				default:0
			},
			key1:{
				default:""
			}
		}
	}
</script>

<style scoped="scoped">
	.box{
		width: 100%;
		box-sizing: border-box;
		padding: 2vh 0;
		display: flex;
		justify-content: center;
		font-size: 0.4rem;
	}
	.fy{
		width: 20vw;
		height: 8vw;
		line-height: 8vw;
		text-align: center;
		color: #5BB8FF;
	}
	.xz{
		width: 17vw;
		height: 8vw;
		line-height: 8vw;
		text-align: center;
		border: 1px solid #CCCCCC;
		margin: 0 0.2rem;
		border-radius: 3px;
		letter-spacing: 1px;
	}
</style>