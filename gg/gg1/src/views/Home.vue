<template>
  <div class="home">
    <homeheader></homeheader>
    <homemain></homemain>
  </div>
</template>

<script>
import homeheader from "@/components/homeheader.vue";
import homemain from "@/components/homemain.vue";

export default {
  name: "home",
  components: {
    homeheader,
    homemain,
  }
};
</script>
