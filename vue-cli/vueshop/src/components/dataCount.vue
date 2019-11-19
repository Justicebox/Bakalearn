<template>
    <div>
		<h2>直接参数获取 {{this.$store.state.count}}</h2>
		<h2>从getters中获取的计算值{{this.$store.getters.getStateCount}}</h2>

		<button @click = "addFn">+</button>
		<button @click = "reductionFn">-</button>
	</div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
		addFn(){
			// this.$store.commit('add')
			this.$store.dispatch('addFn')
		}	,
		reductionFn(){
			// this.$store.commit('reduction')
			var n = 10;
			this.$store.dispatch("reductionFn",n)
		}	

	}
}
</script>
<style scoped>
	button{
		width: 50px;
	}	
</style>