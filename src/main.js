import Vue from 'vue'
import App  from "./App.vue"
import vueRouter from "vue-router"


Vue.config.productionTip = false


Vue.use(vueRouter)



/*
var router = new vueRouter({
	mode  : "history",
	routes : [
		{ path : "/" , component : Home },
		//{ path : "/about" , component : AboutPage },       
	],
})

*/



new Vue({
  render: h => h(App),
  //router : router
}).$mount('#app')

