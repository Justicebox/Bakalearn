<template>
  <div class="q-wrap ">
		<homeheader></homeheader>
    <homemain></homemain>  
	</div>
</template>

<script>
// @ is an alias to /src
import homeheader from '@/components/homeheader.vue'
import homemain from '@/components/homemain.vue'
export default {
  name: 'home',
  components: {
    homeheader,
    homemain
  }
}
</script>
