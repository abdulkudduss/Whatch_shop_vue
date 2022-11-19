<template>
  <div class="watch-info">
    <div class="block">
        <div class="container">
        <div class="content">
            <div class="Order">
                <p class="title">Your Item Detail:</p>
                <div class="order_details">
                    <img class="item_photo" :src=" require('../assets/' + getIMG.img + '.png' ) " alt="#"  >
                    <div class="item_detail">
                       
                        <p class="item_tittle">{{watch.desc}}</p>
                        <p class="item_price"> {{watch.price}} ₽</p>
                        <p class="delivery_link">Free delivery By <a>WatchZone</a> </p>
                        <div class="size-block">
                            <p class="about">Size </p>  
                            <p class="size_n"> {{watch.size1}} </p>
                            <p class="size_n"> {{watch.size2}} </p>
                        </div>
                        <div class="size-block">
                            <p class="about">Style Type: </p>
                            <p class="size_n"> {{watch.style1}} </p>
                            <p class="size_n"> {{watch.style2}} </p>
                        </div>
                    </div>
                    
                </div>
                <div class="item_specification">
                        <p class="title">About Item :</p>
                         <!--технический список-->    
                        <p class="specific_data"> <span class="specific_info">Supported application:</span> {{watch.applications}} </p>
                        <p class="specific_data"> <span class="specific_info">Brand:</span> {{watch.category}} </p>
                        <p class="specific_data"> <span class="specific_info">Size:</span> {{watch.size1}} </p>
                        <p class="specific_data"> <span class="specific_info">Supports Bluetooth:</span> {{watch.bluetooth}} </p>
                        
                </div>
            </div>
            <div class="delivery_adres">
                  <p class="title">Delivery Address:</p>
                  <div class="form_select">
                    <form action="">
                        <p class="form_title">Country</p>
                        <select class="form_data" name="country" id="#">
                             <option>Russia</option>
                             <option>USA</option>
                             <option>China</option>
                             <option>Turkey</option>
                             <option>Kyrgyzstan</option>
                        </select>
                            <p class="form_title">Full Name</p>
                              <input  class="form_data" type="text" name="text" id="#" />
                            
                            <p class="form_title">Contact Number</p>
                            <input class="form_data" type="number" name="contact" id="" placeholder="10 digit mobile number"/>

                            <p class="form_title">House No. ,flat,sctor,plot </p>
                            <input  class="form_data" type="text" name="text" id="#" />
                            
                             <p class="form_title">Landmark</p>
                              <input  class="form_data" type="text" name="text" id="#" />

                             <p class="form_title">City </p>
                              <input  class="form_data" type="text" name="text" id="#" />

                             <router-link :to="{name:'payment'}" ><button class="button_submit"> Submit</button> </router-link>

                    </form>
                  </div>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            watch: {},
            
            watches: [
                {
                    id: 1, 
                    desc: 'New Apple Watch Series 6 (GPS + Cellular, 40mm) - Blue Aluminium Case with Deep Navy Sport Band',
                    price: '1490',
                    size1: '40mm',
                    size2: '45mm',
                    style1: 'GPS', 
                    style2:'GPS + Celluar',
                    applications:'Phone',
                    category: 'Apple',
                    bluetooth:'5 GHz Radio Frequency',
                    
     
                },
                {
                    id: 2,
                     desc: 'Apple Watch Series 3 (42mm + GPS)White Sport Band',
                    price: '1490',
                    size1: '40mm',
                    size2: '45mm',
                    style1: 'GPS', 
                    style2:'GPS + Celluar',
                    applications:'Phone',
                    category: 'Apple',
                    bluetooth:'5 GHz Radio Frequency',
                },
                {id: 3,  
                    desc: 'Apple Watch Series SE (40mm + GPS + Cellular) Charcol Sport Band - Blue  with Deep Navy ',
                    price: '1490',
                    size1: '40mm',
                    size2: '45mm',
                    style1: 'GPS', 
                    style2:'GPS + Celluar',
                    applications:'Phone',
                    category: 'Apple',
                    bluetooth:'5 GHz Radio Frequency',},
                {id: 4,  
                    desc: 'Noise Colorfit Pro 2 Full Touch Control Smart Watch Jet Black',
                    price: '1490',
                    size1: '40mm',
                    size2: '45mm',
                    style1: 'GPS', 
                    style2:'GPS + Celluar',
                    applications:'Phone',
                    category: 'Apple',
                    bluetooth:'5 GHz Radio Frequency',},
                {id: 5,
                     desc: 'Noise NoiseFit Evolve Full Touch Control with AMOLED Display',
                    price: '1490',
                    size1: '40mm',
                    size2: '45mm',
                    style1: 'GPS', 
                    style2:'GPS + Celluar',
                    applications:'Phone',
                    category: 'Apple',
                    bluetooth:'5 GHz Radio Frequency',},
                {id: 6, 
                    desc: 'New Noise ColorFit NAV Smart Watch with Built-in GPS and Camo Green',
                    price: '1490',
                    size1: '40mm',
                    size2: '45mm',
                    style1: 'GPS', 
                    style2:'GPS + Celluar',
                    applications:'Phone',
                    category: 'Apple',
                    bluetooth:'5 GHz Radio Frequency'
                },
                {id: 7, 
                    desc: 'New Noise ColorFit NAV Smart Watch with Built-in GPS and Camo Green',
                    price: '1490',
                    size1: '40mm',
                    size2: '45mm',
                    style1: 'GPS', 
                    style2:'GPS + Celluar',
                    applications:'Phone',
                    category: 'Apple',
                    bluetooth:'5 GHz Radio Frequency',
                },
                {id: 11, 
                    desc: 'New Noise ColorFit NAV Smart Watch with Built-in GPS and Camo Green',
                    price: '1490',
                    size1: '40mm',
                    size2: '45mm',
                    style1: 'GPS', 
                    style2:'GPS + Celluar',
                    applications:'Phone',
                    category: 'Apple',
                    bluetooth:'5 GHz Radio Frequency'
                },
            ]
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
    justify-content: space-between;
    align-items: flex-start;

   padding-top: 21px;

   .title{
            font-family: Calibri;
            font-style: normal;
            font-weight: bold;
            font-size: 25px;
            line-height: 31px;
            /* identical to box height */


            color: rgba(0, 0, 0, 0.7);

}
}.Order{
    width:598px;
    height: 379px;
}
.order_details{
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        
       


    .item_photo{
        width:310px;
        height: 350px;
    }
    .item_tittle{
        padding-top: 30px;

        font-family: Calibri;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 31px;

        color: rgba(0, 0, 0, 0.71);
       
    }
    
    .item_price{
    font-family: Calibri;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: #FF543E;
    }
    .delivery_link{
    font-family: Calibri;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    }
    .about{
    font-family: Calibri;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: rgba(59, 89, 153, 0.75);
    }
}

.size-block{
    display: flex;
    align-items: center;

    margin-top: 28px;

    .size_n{
    margin-left: 11px;

    font-family: Calibri;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    background: rgba(196, 196, 196, 0.4);
    color: rgba(0, 0, 0, 0.7);

    }
}

    .specific_info{
        font-family: Calibri;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 31px;

        /* identical to box height */


        color: #3857BC;
    }
    .specific_data{
        font-family: Calibri;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 31px;
        /* identical to box height */

        margin-bottom: 8px;


        color: #3a3b3f;
    }

.item_specification{
background: rgba(111, 207, 151, 0.4);

}



.delivery_adres{
width: 390px;
height: 610px;

}

.form_select{

    .form_title{
        margin-top: 20px;

        font-family: Calibri;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;

        color: rgba(59, 89, 153, 0.75);
    }
    .form_data{
        width: 390px;
        height: 28px;
    

        background: rgba(111, 207, 151, 0.4);
        border-radius: 10px;
        
    }
    .button_submit{
        margin-top: 20px;
       
         width: 90px;
        height: 28px;
         background: rgba(111, 207, 151, 0.4);
        border-radius: 10px;
        }
}
</style>