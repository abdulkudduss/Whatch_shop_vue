<template>
  <div class="block">
    <div class="container">
        <div class="content">
            <p v-if="this.message" class="data">{{message}}</p>
            <div class="watch"
                v-for="catWatch in categoryWatch"
                :key="catWatch.id"
                @click="clickWatch(catWatch.id)"
            >
                    <img class="photo" :src=" require('../assets/' + catWatch.id + '.png' ) " alt="#"  >
                    <p class="watch_text">{{catWatch.desc}}</p>
                    <div class="watch_price">
                    <p class="watch_price_n">{{catWatch.price}} ₽</p>
                
                </div>
                 <a href="#">  <button class="buy">Купить</button> </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            count: true,
            categoryWatch: [],
            message: '',
            watches: [
                {id: 1, desc: 'Apple Watch Series 6 (40mm + GPS+ Cellular)  Navy Sport Band',category: 'Apple', price: '1490'},
                {id: 2, desc: 'Apple Watch Series 3 (42mm + GPS)White Sport Band',category: 'Apple', price: '1490'},
                {id: 3, desc: 'Apple Watch Series SE (40mm + GPS + Cellular) Charcol Sport Band',category: 'Apple', price: '1490'},
                {id: 4, desc: 'Noise Colorfit Pro 2 Full Touch Control Smart Watch Jet Black',category: 'Noise', price: '1490'},
                {id: 5, desc: 'Sumsung Watch Raxy Watch Active 2 (44mm + Bluetooth) Black Straps',category: 'Samsung', price: '25000'},
                  {id: 8, desc: 'Fossil Nate Analog Black Dial Unisex Watch - JR1354',category: 'Fossil', price: '1490'},
                   {id: 9, desc: 'Samsung Galaxy Watch Active (46mm + Bluetooth) Silver Straps',category: 'Samsung', price: '1590'},
                    {id: 10, desc: 'Samsung Galaxy Watch Active (46mm + Bluetooth) Silver Straps',category: 'Samsung', price: '5800'},
                     {id: 11, desc: 'Fossil Gen 4 ( Touch Screen, Leather, Stainless steel) Brown Color',category: 'Fossil', price: '1490'},
                      {id: 12, desc: 'Galaxy Gen 5 ( Smart watch with speaker + GPS + Heart Rate)',category: 'Samsung', price: '1490'},
                       {id: 13, desc: 'Noise ColorFit NAV Smart Watch with Built-in GPS and Camo Green',category: 'Samsung', price: '1490'},
            ]
        }
    },
    methods: {
        clickWatch(watch) {
            this.$router.push( {name: 'watch', query: {'watch_id': watch} } )
        }
    },
    mounted() {
        this.categoryWatch = this.watches.filter( watch => watch.category == this.$route.query.category_2)
        
        if (this.categoryWatch.length == 0) {
            this.message = "Data not found"
            location.reload()
        } else {
        }
    },
    computed: {
        getIMG() {
            return{
                ...this.watch = this.watches[this.$route.query.watch_id - 1],
                img: this.watch.id
            }
        }
    }
    
    
}
</script>


<style scoped lang="scss">
.content{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.watch{
    margin-top: 33px;
    padding: 0 17px;

    background: rgba(196, 196, 196, 0.4);
    height: 495px;
    width: 316px;
    border-radius: 5px;

    margin-left: 14px;
   
   .photo{
        width: 263px;
        height: 302px;
    }
    

} 
.watch_text{
        font-family: Calibri;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
    }
.watch_price{
    font-family: Calibri;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
}
.buy{
    width: 100%; 
    padding: 24px; 
    margin-top: 20px;

   background: rgba(111, 207, 151, 0.7);;
   font-family: Calibri;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
     border-radius: 5px;
}
</style>