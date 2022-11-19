<template>
  <div class="payment_detail">
     <Header/>
    <brandsSale/>
    <payment/>
    
    
  
  
  </div>
</template>

<script>
import payment from '../components/payment_details.vue'
import Header from '../components/header.vue'
import brandsSale from '../components/brandsSale.vue'
export default {
components:{
    payment,
    Header,
    brandsSale
}
}
</script>

<style>

</style>