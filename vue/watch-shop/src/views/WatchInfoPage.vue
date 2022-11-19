<template>
  <div class="watchinfopage">
    <Header/>
    <brandsSale/>
    <watchInfo/>
  </div>
</template>

<script>
import watchInfo from '../components/watch-info.vue'
import Header from '../components/header.vue'
import brandsSale from '../components/brandsSale.vue'
export default {
    components: {
        watchInfo,
        Header,
        brandsSale
    }
}
</script>

<style>

</style>