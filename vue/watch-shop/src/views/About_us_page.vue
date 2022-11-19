<template>
  <div class="about_us_page">
  <Header/>
    <brandsSale/>
  <about_Us/>
  </div>
</template>

<script>
import about_Us from '../components/about_us.vue'
import Header from '../components/header.vue'
import brandsSale from '../components/brandsSale.vue'
export default {
components:{
 about_Us,
 Header,
    brandsSale
}
}
</script>

<style>

</style>