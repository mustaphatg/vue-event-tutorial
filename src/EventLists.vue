
<template>
	
	<div >
		
		<div v-if="totalEvents">
			<Event   v-for="event in events " :key="event.id"  :event="event" />	
		</div>
		
		<EmptyEvent v-else/>

	</div>
	
</template>




<script>

	import Event from "./Event.vue"
	import EmptyEvent from "./EmptyEvent.vue"

	export default {
		props : ["events"],
		computed : {
			totalEvents(){
				return this.events.length
			}
		},
		components : {
			Event,
			EmptyEvent
		}
	}
</script>