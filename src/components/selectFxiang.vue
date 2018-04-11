<template>
	<div>
		<top isback="true" text="选择方向">
			<span class="text1" @click="sure">确定</span>
		</top>
		<div>
			<div class="lists" v-for="item in datas" @click="changeColor(item)" :style="{color:item.color}">
				<span v-text="item.fname"></span>
				<i class="iconfont">&#xe602;</i>
			</div>
		</div>
	</div>
</template>

<script>
	import top from "./header.vue"
	export default{
		components:{
			top
		},
		data(){
			return {
				datas:[],
				fname:this.$store.state.fname,
				fid:this.$store.state.fid
			}
		},
		mounted(){
			fetch("/api/fxiang/select").then(function(e){
				return e.json();
			}).then(function(e){
				if(e.message!='err'){
					e.forEach((val)=>{
						if(val.fname==this.$store.state.fname){
							val.color="#5bb8ff";
							return;
						}
						val.color="#000";
					})
					this.datas=e;		
				}
			}.bind(this));
		},
		methods:{
			changeColor(item){
				this.datas.forEach(function(val){
					val.color="#000";
				});
				item.color="#5bb8ff";
				this.fname=item.fname;
				this.fid=item.fid;
			},
			sure(){
				this.$store.commit("setFxiang",{fname:this.fname,fid:this.fid});
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
</style>