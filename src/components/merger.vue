<template>
	<div>
		<top text="选择信息" isback="true"></top>
		<ul>
			<li>
				<router-link to="/selectFxiang" class="lists">
					<div>
						<span>选择方向</span><em v-text="message1" class="message"></em><i v-text="fname" class="xz"></i>
					</div>
					<i class="iconfont">&#xe602;</i>
				</router-link>
			</li>
			<li>
				<router-link to="/selectClasses" class="lists">
					<div>
						<span>选择班级</span><em v-text="message2" class="message"></em><i v-text="cname" class="xz"></i>
					</div>
					<i class="iconfont">&#xe602;</i>
				</router-link>
			</li>
			<li>
				<div class="lists" @click="time('sT')">
					<div>
						<span>选择开始时间</span><em v-text="message3" class="message"></em><i v-text="sT" class="xz"></i>
					</div>
					<i class="iconfont">&#xe602;</i>
				</div>
			</li>
			<li>
				<div class="lists" @click="time('eT')">
					<div>
						<span>选择结束时间</span><em v-text="message" class="message"></em><i v-text="eT" class="xz"></i>
					</div>
					<i class="iconfont">&#xe602;</i>
				</div>
			</li>
		</ul>
		<div>
			<el-button type="primary" @click="zuti">组题</el-button>
		</div>
	</div>
</template>

<script>
	import top from "@/components/header.vue"
	import DateTimePicker from "date-time-picker"
	export default {
		data() {
			return {
				message: "",
				message1:"",
				message2:"",
				message3:""
			}
		},
		components: {
			top
		},
		computed: {
			fname() {
				return this.$store.state.fname ? "(" + this.$store.state.fname + ")" : "";
			},
			cname() {
				return this.$store.state.cname ? "(" + this.$store.state.cname + ")" : "";
			},
			sT() {
				return this.$store.state.sT ? "(" + this.$store.state.sT + ")" : "";
			},
			eT() {
				return this.$store.state.eT ? "(" + this.$store.state.eT + ")" : "";
			}
		},
		methods: {
			zuti() {
				if(this.fname==""){
					this.message1="请选择方向";
					return;
				}					
				if(this.cname==""){
					this.message2="请选择方向";
					return;
				}
				this.$router.push("/zuti");
			},
			time(str) {
				var obj1 = {
					lang: 'zh-CN',
					min: this.getTime().date
				};
				if(str == "eT") {
					if(this.sT == "") {
						this.message = "请先选择开始时间"
						return;
					}
					obj1.min = this.sT;
				}
				var datePicker = new DateTimePicker.Date(obj1);
				datePicker.on('selected', (formatValue, now) => {
					var obj2 = {
						lang: 'zh-CN'
					};
					if(str == "sT") {
						if(formatValue == this.getTime().date) {
							obj2.min = this.getTime().time;
						}
					} else {
						var arr = this.sT.slice(1, this.sT.length - 1).split(" ");
						console.log(arr);
						if(formatValue == arr[0]) {
							obj2.min = arr[1];
						}
					}
					var timePicker = new DateTimePicker.Time(obj2)
					timePicker.on('selected', (formatValue1) => {
						var result = formatValue + " " + formatValue1;
						if(str == "sT") {
							var st = new Date(result).getTime();
							var et = new Date(this.eT.slice(1, this.eT.length - 1)).getTime();
							if(this.eT && (st >= et)) {
								this.$store.state.eT = "";
							}
						}
						this.message="";
						this.$store.state[str] = formatValue + " " + formatValue1;
					});
				})
			},
			getTime() {
				var time = new Date();
				var year = time.getFullYear();
				var month = (time.getMonth() + 1) < 10 ? 0 + "" + (time.getMonth() + 1) : (time.getMonth() + 1);
				var day = time.getDate() < 10 ? 0 + "" + time.getDate() : time.getDate();
				var hour = time.getHours() < 10 ? 0 + "" + time.getHours() : time.getHours();
				var min = time.getMinutes() < 10 ? 0 + "" + time.getMinutes() : time.getMinutes();
				return {
					date: year + "-" + month + "-" + day,
					time: hour + ":" + min
				};
			}
		}
	}
</script>

<style scoped="scoped">
	.lists .xz {
		color: #5BB8FF;
	}
	
	.message {
		color: red;
		font-size: 0.3rem;
		margin-left: 2px;
	}
</style>