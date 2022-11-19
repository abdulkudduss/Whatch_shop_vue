<template>
  <div class="Sing_in">
    <div class="block">
      <div class="container">
        <div class="content">
            <div class="close">
                <p class="singin_title">WatchZone ACCOUNT </p>
                <img src="../assets/closebutton.png" alt="" class="button_close">
             </div>
             <input  class="singin_email" type="email" name="email" id="#" placeholder="Email Addres" />
             <input class="singin_email" type="password" name="pasword" id="" placeholder="Password">
              <div class="forgot_password">
                  <div class="forgot_privacy">
                      <div class="checkbox">
                        <input type="checkbox" name="#" id="" checked>
                        <label for="keep"> Keep me sing in</label>
                      </div>
                      <a href="@#" >Forgot Password?</a>
                  </div>
                  <p class="privacy"> By logging in, you agree to Nike's Privacy Policy and <br>Terms of Use.</p>
              </div>
              <div class="sing_in">
                  <button @click="redirectWatches" class="button_singin" type="submit">SING IN</button>
                  <p class="link_creat">Don’t Have Account? <a href="3">Create Account</a> </p>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirectWatches() {
      this.$router.push( {name: 'home'} )
    }
  }
}
</script>

<style scoped lang="scss">
.container{
display: flex;
align-content: center;
}
.content{
padding-top: 100px;
margin:0 auto;
width: 533px;
height: 434px;

background: #FFFFFF;
border-radius: 20px;



input::placeholder{
  font-family: Calibri;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 31px;

 
/* identical to box height */


  color: rgba(0, 0, 0, 0.7);
  }
}
.close{
display: flex;
align-items: center;
justify-content: center;

margin-top: 30px;


  .singin_title{

    margin-right: 38px;

    font-family: Calisto MT;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;

    color: #000000;
  }
}
.singin_email{
  margin-top: 16px;
  width: 100%;
  height: 50px;

  background: rgba(111, 207, 151, 0.7);
  border-radius: 10px;

  font-size: 24px;
  padding: 5px;
  box-sizing: border-box;
}
.forgot_password{
width: 475px;
height: 90px;
margin-top: 26px;


  .forgot_privacy{
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  font-family: Calibri;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
          /* identical to box height */


   color: rgba(0, 0, 0, 0.7);
      
  }
  .privacy{
    margin-top: 20px;

    font-family: Calibri;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: rgba(0, 0, 0, 0.7);
  }

}
.button_singin{
 margin-left:102px;
 margin-right: 102px;
 margin-top: 12px;
width: 329px;
height: 45px;
background: rgba(111, 207, 151, 0.7);
border-radius: 10px;

font-family: Calibri;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 37px;

color: #000000;


}
.link_creat{
margin-top: 11px;

  text-align: center;
  font-family: Calibri;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;

  color: rgba(0, 0, 0, 0.7);
  }
</style>