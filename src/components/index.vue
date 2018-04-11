<template>
	<div>
		<top text="主页"></top>
		<div class="banner">
			<banner :nums="img.length">
				<div class="slider-list" v-for="item in img" :style="'width: '+100/img.length+'%;background: url('+item.src+') no-repeat center;background-size:100% 100%;'"></div>
			</banner>
		</div>
		<div class="list-box">
			<router-link to="/merger">
				<list>
					<i class="iconfont icon">&#xe6ee;</i>	
					<h2 class="title">组合试题</h2>
				</list>
			</router-link>
			<router-link to="/merger">
				<list>
					<i class="iconfont icon">&#xe6ee;</i>	
					<h2 class="title">组合试题</h2>
				</list>
			</router-link>
			
		</div>
	</div>
</template>

<script>
	import top from "@/components/header.vue"
	import banner from "@/components/banner.vue"
	import list from "@/components/list.vue"
	export default {
		components: {
			top,
			banner,
			list
		},
		data(){
			return {
				img:[
					
				]
			}
		},
		methods:{
			
		},
		mounted(){
			this.img=[
				{src:"/static/timg1.jpg"},
				{src:"/static/success.jpg"},
				{src:"/static/timg2.jpg"},
				{src:"/static/success.jpg"}
			]
		}
	}
</script>

<style scoped="scoped">
	.banner {
		height: 24vh;
		width: 92vw;
		margin: 2vh auto;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
	}
	.list-box{
		background: #f3f3f3;
		width: 100vw;
    	box-sizing: border-box;
    	padding: 2vh 5vw;
    	display: flex;
    	justify-content: space-between;
    	align-items: flex-start;
    	flex-wrap: wrap;
	}
</style>