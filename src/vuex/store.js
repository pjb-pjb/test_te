import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
var store=new Vuex.Store({
	state:{
		fname:"",
		fid:"",
		cname:"",
		cid:"",
		sT:"",
		eT:"",
		typeid:""
	},
	mutations:{
		setFxiang(state,obj){
			state.fname=obj.fname;
			state.fid=obj.fid;
		},
		setClasses(state,obj){
			state.cid=obj.cid;
			state.cname=obj.cname
		},
		setST(state,sT){
			state.sT=sT;
		},
		setET(state,eT){
			state.eT=eT;
		},
		setTypeid(state,typeid){
			state.typeid=typeid;
		}
	}
})
export default store;
