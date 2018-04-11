<template>
	<div>
		<top isback="true" text="选择班级">
			<span class="text1" @click="sure">确定</span>
		</top>
		<div>
			<div class="lists" v-for="item in datas" @click="changeColor(item)" :style="{color: item.color}">
				<span v-text="item.cname"></span>
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
				cname:this.$store.state.cname,
				cid:this.$store.state.cid
			}
		},
		mounted(){
			fetch("/api/classes/select").then(function(e){
				return e.json();
			}).then(function(e){
				if(e.message!='err'){
					e.forEach((val)=>{
						if(val.cname==this.$store.state.cname){
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
				this.cname=item.cname;
				this.cid=item.cid;
			},
			sure(){
				this.$store.commit("setClasses",{cname:this.cname,cid:this.cid});
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
</style>