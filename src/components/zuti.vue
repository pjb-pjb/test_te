<template>
	<div>
		<top :text="typename+`<i class='iconfont jiantou'>&#xe60c;</i>`" isback="true" @click="xz">
			<span class="text1">确定</span>
		</top>
		<ul class="type" v-if="flag">
			<li v-for="item in typeDatas" class="typeList" v-text="item.typename" @touchend="touchend(item)"></li>
		</ul>
		<div v-if="typename=='单选'||typename=='多选'">
			<div v-for="item in datas">

			</div>
		</div>
		<div v-if="typename=='简答'">
			<div v-for="item in datas"></div>
		</div>
		<page :size="size" v-if="datas.length>0" @change="setPage" :key1="typeid"></page>
	</div>
</template>

<script>
	import top from "./header.vue"
	import page from "./page.vue"
	export default {
		data() {
			return {
				typename: "单选",
				typeDatas: [],
				flag: false,
				datas: [],
				size:1,
				typeid:1,
				page:0
			}
		},
		components: {
			top,
			page
		},
		methods: {
			sure() {

			},
			xz() {
				this.flag = !this.flag;
				if(this.flag) {
					document.querySelector(".jiantou").style.transform = "rotate(180deg)"
				} else {
					document.querySelector(".jiantou").style.transform = ""
				}
			},
			touchend(item) {
				this.flag = false;
				this.typename = item.typename;
				this.typeid=item.typeid;
				this.page=0;
				this.selectAll();
				this.selectTest();	
			},
			selectAll(){
				fetch("/api/test/selectAll?typeid="+this.typeid+"&fid="+this.$store.state.fid).then(function(e){
					return e.text();
				}).then((e)=>{
					this.size=e;
				})
			},
			selectTest(){
				fetch("/api/test/selectTest?typeid="+this.typeid+"&fid="+this.$store.state.fid+"&page="+this.page).then(function(e){
					return e.json();
				}).then((e)=>{
					if(e.message!="err"){
						this.datas=e;
					}
				})
			},
			setPage(page){
				this.page=page-1;
				this.selectTest();
			}
		},
		mounted() {
			fetch("/api/test/selectType").then(function(e) {
				return e.json();
			}).then((e) => {
				if(e.message != "err") {
					this.typeDatas = e;
					this.selectAll();
					this.selectTest();
				}
			});
		}
	}
</script>

<style>
	.type {
		position: fixed;
		top: 7vh;
		left: 0;
		height: 93vh;
		background: rgba(0, 0, 0, 0.7);
		width: 100vw;
	}
	
	.typeList {
		width: 100%;
		background: #fff;
		padding: 2vh 2vh 2vh 10vw;
		font-size: 0.4rem;
		border-bottom: 1px solid rgba(200, 200, 200, 0.4);
		box-sizing: border-box;
	}
</style>