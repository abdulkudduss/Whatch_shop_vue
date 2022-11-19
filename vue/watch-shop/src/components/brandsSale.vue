<template>
  <div class="brandsSale">
    <div class="block">
        <div class="container">
            <div class="content">
                <a href=""> <img class="link" src="../assets/home.png" alt="home-botton"></a> 
                <div to="/category" class="link"
                    v-for="cat in categories"
                    :key="cat.id"
                    @click="clickCategory(cat.category)"
                >

                    {{cat.category}}
                
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            
            categories: [
                {id: 1, category: 'Apple'},
                {id: 2, category: 'Samsung'},
                {id: 3, category: 'Noise'},
                {id: 3, category: 'Fossil'},
            ]
        }
    },
    methods :{
        clickCategory(category) {
            this.$router.push( {name: 'category', query: {'category_2': category} } )
            
        }
    }
}
</script>

<style scoped lang="scss">
.block{
    background: rgba(111, 207, 151, 0.4);
}
.content{
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding-top: 12px;
    padding-bottom: 7px;
}
.link{
    font-family: Calibri;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
}
</style>