<template>
  <div class="cotegoriespage">
    <Header/>
    <brandsSale/>
    <Category/>
  </div>
</template>

<script>

import Header from '../components/header.vue'
import brandsSale from '../components/brandsSale.vue'
import Category from '../components/categories.vue'
export default {
    components: {
        Header,
        brandsSale,
        Category
    }
}
</script>

<style>

</style>