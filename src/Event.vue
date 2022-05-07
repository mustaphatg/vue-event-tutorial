
<template >
	<div >
		<h3 > {{event.title}} </h3>
		<p > {{ event.body}} </p>
	</div>
</template>



<script>
	export default {
		name : "EventComponent",
		props : ["event"],
		mounted(){
			console.log(this.event)
		}
	}
</script>


<style scoped>
	div {
		margin: 10px 10px;
		border: 2px solid #E0E0E0;
		padding: 4px;
		border-radius: 3px;
	}
</style>