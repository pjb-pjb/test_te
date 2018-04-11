import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import merger from '@/components/merger.vue'
import selectFxiang from '@/components/selectFxiang.vue'
import selectClasses from '@/components/selectClasses.vue'
import zuti from '@/components/zuti.vue'

Vue.use(Router)

var router=new Router({
  routes: [
    {
    	path:"/",
    	component:index
    },{
    	path:'/merger',
    	component:merger 	
    },{
    	path:'/selectFxiang',
    	component:selectFxiang 
    },{
    	path:'/selectClasses',
    	component:selectClasses 
    },
    {
    	path:'/zuti',
    	component:zuti 
    }
  ]
})
//router.beforeEach((to,from,next)=>{
//	if(to.path!="/login"){
//		
//	}
//});
export default router;