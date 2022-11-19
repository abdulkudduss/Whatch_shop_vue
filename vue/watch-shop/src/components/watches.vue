<template>
  <div class="block">
    <div class="container">
        <div class="content">
            <div class="watch"
                v-for="watch in watches"
                :key="watch.id"
                @click="clickWatch(watch.id)"
            >
                <img class="photo" :src=" require('../assets/' + watch.id + '.png' ) " alt="#1">
                <p class="watch_text">{{watch.desc}}</p>
                <div class="watch_price">
                    <p class="watch_price_n">{{watch.price}} ₽</p>
                
                </div>
                <router-link :to="{name:'payment'}" > <button class="buy">Купить</button> </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            watches: [
                {id: 1, desc: 'Apple Watch Series 6 (40mm + GPS+ Cellular)  Navy Sport Band',category: 'Apple', price: '1490'},
                {id: 2, desc: 'Apple Watch Series 3 (42mm + GPS)White Sport Band',category: 'Apple', price: '1490'},
                {id: 3, desc: 'Apple Watch Series SE (40mm + GPS + Cellular) Charcol Sport Band',category: 'Samsung', price: '1490'},
                {id: 4, desc: 'Noise Colorfit Pro 2 Full Touch Control Smart Watch Jet Black',category: 'Noise', price: '1490'},
                {id: 5, desc: 'Noise NoiseFit Evolve Full Touch Control with AMOLED Display',category: 'Apple', price: '1490'},
                {id: 6, desc: 'Noise ColorFit NAV Smart Watch with Built-in GPS and Camo Green',category: 'Samsung', price: '1490'},
            ]
        }
    },
    methods: {
        clickWatch(watch) {
            this.$router.push( {name: 'watch', query: {'watch_id': watch} } )
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
    .watch_text{
        font-family: Calibri;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
    }
    

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