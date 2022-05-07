<template>
    <div >
        
        <h1> List of events</h1>
        
        <EventLists v-bind:events="events" />
        
    </div>
</template>



<script>
	
	import EventLists from "./EventLists.vue"
	
	export default {
		data : function(){
			return {
				events : [
					{ id : 1, title : "First event", body : "My first event"},
					{ id : 2, title : "Second event", body : "My Second event"},
					{ id : 3, title : "Third event", body : "My Third event"},		
				],
				//events : []
			}
		},
		components : {
			EventLists
		}
	}
	
</script>




<style scoped>
	
	h1 {
		text-align: center;
	}
</style>