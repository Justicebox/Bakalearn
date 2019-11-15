<template>
	<div class="q-wrap ">
		<qheader>
		</qheader>     
		<qcenter>
		</qcenter>
	</div>
</template>

<script>
// @ is an alias to /src
import qheader from '@/components/qheader.vue'
import qcenter from '@/components/qcenter.vue'

export default {
	name: 'q-wrap',
	components: {
		qheader,
		qcenter
	}
}
</script>
<style scoped>
	a{text-decoration:none}
	a:hover{
		color: #A9A9A9;
	}
	html{
		font-size: 62.5%;
	}
	.q-wrap{
		height: 50px;
	}
</style>
