<template>
  <div class="sing_in">
   <Header/>
    <brandsSale/>
    <singin/>
  </div>
</template>

<script>
import singin from '../components/sing_in.vue'
import Header from '../components/header.vue'
import brandsSale from '../components/brandsSale.vue'
export default {
components:{
    singin,
     Header,
        brandsSale
}
}
</script>

<style>

</style>