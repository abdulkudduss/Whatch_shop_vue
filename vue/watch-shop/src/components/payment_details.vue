<template>
  <div class="payment_detail">
    <div class="block">
        <div class="container">
            <div v-if="content" class="content">
                <div class="content1"> 
                      
                      <div class="delivery_text">
                         <img @click="prev_page" class="button_back" src="../assets/Back.png" alt="">
                          <p class="text">Delivery Within 5-6 Days</p><br>
                          <p class="text"><span class="text_title">Delivery Instructions: </span> <br>
                                  The   system will ask you to login to your <br>
                                    USPS.com account
                                  (you can set one up at that <br>
                                  time, 
                                  if you don't already have one).
                                Follow <br>the prompts to see if your address is eligible <br>and to then 
                                specify instructions for delivery.</p>
                      </div>
                      <div class="payment_options">
                          <p class="title">Payment Option:</p>
                          <div class="debit_card">
                              <p class="card_title">Debit Card:</p>
                              <div class="inputs">
                                <div class="input">
                                  <p class="form_title">Name of card</p>
                                  <input class="form_data" type="text" name="cardname" id=""/>
                                </div>
                                <div class="input">
                                  <p class="form_title">Card Number</p>
                                  <input class="form_data" type="number" name="cardname" id=""/>
                                </div>
                                <div class="input">
                                  <p class="form_title">CVV(?)</p>
                                  <input class="form_data" type="password" name="cardname" id=""/>
                                </div>
                              </div>
                          </div>
                          <div class="online_payment">
                              <p class="card_title">Online Payment:</p>
                              <div class="checkbox_list">
                              <div>
                                  <label  for="paytm">Paytm:</label>
                                  <img class="pay_icon"  src="../assets/Paytm.png" alt="">
                                  <input type="checkbox" name="paytm" id=""/>
                              </div>
                              <div>
                                  <label for="paytm">GoolglePay:</label>
                                  <img class="pay_icon"  src="../assets/Gpay.png" alt="">
                                  <input type="checkbox" name="paytm" id=""/>
                              </div>
                              <div>
                                  <label for="paytm">Phone Pe:</label>
                                  <img class="pay_icon"  src="../assets/PhonePe.png" alt="">
                                  <input type="checkbox" name="paytm" id=""/>
                              </div>

                              </div>
                          </div>
                          <div class="cash_pay">
                            <label class="cash_title" for="cash">Cash On Delivery:</label>
                            <input type="checkbox" name="cash" id="">
                            
                          </div>
                      </div>
                      
                </div>
                <div @click="clickSubmit" class="place_order">
                    <p class="button_text">Place Your Order</p>
                </div>
               
            </div>
            <div v-if="thanks" class="thanks">
              <h1>Спасибо за покупку</h1>
              <button @click="backToPayment">Вернуться назад</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
data() {
  return {
    content: true,
    thanks: false
  }
},
methods:{
  prev_page(){
    router.go(-1)
  },
  clickSubmit() {
    this.content = false
    this.thanks = true
  },
  backToPayment(){
    this.content = true
    this.thanks = false
  }
}
}
</script>

<style scoped lang="scss">
.content{

}
.content1{
display: flex;
align-items: center;
margin-top: 40px;


}
.payment_options{
margin-left: 121px;



.title{
    font-family: Calibri;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    /* identical to box height */


    color: rgba(0, 0, 0, 0.7);

  }
  .debit_card{
   

    margin-top: 12px;
    padding: 24px 56px;

    width: 454px;
    height: 176px;
    background: rgba(111, 207, 151, 0.2);
    border: 1px solid #FFC107;
    box-sizing: border-box;
    border-radius: 10px;

    .inputs{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
 
  .form_title{
    font-family: Calibri;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;

    color: #000000;

  }
  .form_data{
    width: 149px;
    height: 20px;
    
    background: rgba(111, 207, 151, 0.45);
    border-radius: 5px;
  }
} 
.card_title{
    font-family: Calibri;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: rgba(0, 0, 0, 0.7);

  }
.delivery_text{  
  .text{
    font-family: Calibri;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #000000;


  }
  .text_title{
    color: #FF0707;
  }
  .button_back{
  margin-bottom: 170px;
  }
}
.online_payment{
margin-top: 20px;
padding: 24px 24px 24px 56px;
width:  254px;
height: 137px;

background: rgba(111, 207, 151, 0.2);
border: 1px solid #FFC107;
box-sizing: border-box;
border-radius: 10px;

label{
  font-family: Calibri;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  color: #000000;

  }
  input{
  background: #C4C4C4;
  }

  .checkbox_list{

    div{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .pay_icon{
  }
}
.cash_pay{
margin-top: 21px;

background: rgba(111, 207, 151, 0.2);
border: 1px solid #FFC107;
box-sizing: border-box;
border-radius: 5px;
width:100%;
max-width: 200px;
.cash_title{
  font-family: Calibri;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  color: rgba(0, 0, 0, 0.7);

  }
}
.place_order{

margin: 0 auto;
margin-top:40px;
width: 372px;
height: 56px;
text-align: center;

background: rgba(111, 207, 151, 0.7);
border: 1px solid #FFC107;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;

.button_text{
    font-family: Calibri;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    /* identical to box height */


    color: rgba(0, 0, 0, 0.7);

  }
 

}
</style>