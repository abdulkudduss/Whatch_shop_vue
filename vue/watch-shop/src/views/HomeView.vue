<template>
  <div class="home">
    <Header/>
    <brandsSale/>
    <watches/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import brandsSale from '@/components/brandsSale.vue'
import watches from '@/components/watches.vue'
export default {
  components: { brandsSale },
  name: 'HomeView',
  components: {
    Header,
    brandsSale,
    watches
  }
}
</script>
