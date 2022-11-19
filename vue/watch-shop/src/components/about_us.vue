<template>
  <div class="about">
        <div class="bolck">
                <div class="container">
                        <div class="content">
                            <div class="cover">
                                <p class="name">WatchZone</p>
                                <div class="cover_img">
                                    <img class="images" src="../assets/4.png" alt="">
                                    <img src="../assets/7.png" alt="" class="images">
                                     <img src="../assets/45.png" alt="" class="images">
                                       
                                </div>
                                <p class="adres_title">We are on addres:  </p>
                                <p class="adres">Marshala Krylovva 2 a </p>
                                <p class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.9932479082736!2d44.99714831619578!3d53.182100979944934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4141004448d156e5%3A0xc7f3e1bce166282a!2z0YPQuy4g0JzQsNGA0YjQsNC70LAg0JrRgNGL0LvQvtCy0LAsIDLQkCwg0J_QtdC90LfQsCwg0J_QtdC90LfQtdC90YHQutCw0Y8g0L7QsdC7LiwgNDQwMDI2!5e0!3m2!1sru!2sru!4v1645584898361!5m2!1sru!2sru" 
                                        width="1152" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe></p>
                            </div>
                        
                        </div>
                
                </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.content{
margin: auto;
}
.cover{
margin-top: 20px;
width: 1152px;
height: 700px;
background: rgba(111, 207, 151, 0.7);


.name{
    padding-top: 88px;

    text-align: center;
    font-family: Calisto MT;
    font-style: normal;
    font-weight: bold;
    font-size: 155px;
    line-height: 183px;
    /* identical to box height */


    color: rgba(255, 255, 255, 0.6);

    }
}
.cover_img{
display: flex;
align-items: center;
justify-content: space-around;

margin: auto;

width: 614.98px;
height: 445px;


.images{
    width: 217.72px;
    height: 241.47px;
   }
}

.adres_title{
margin-top: 60px;

text-align: center;
font-family: Calisto MT;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 35px;

color: #000000;
}
.adres{
text-align:  center;
font-family: Calibri;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 27px;
/* identical to box height */


color: #373E9F;

}
.map{

}
</style>