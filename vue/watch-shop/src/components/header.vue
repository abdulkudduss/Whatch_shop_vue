<template>
  <div class="Header">
    <div class="block">
      <div class="container">
        <div class="content">
            <div class="Header_left">
                <img class="Header_icon" src="../assets/Group.png" alt="header_icon">
                <p class="Header_left_text">WatchZone</p>
            </div>
            <div class="Header_right">
               <router-link :to=" { name: 'about' } " class="Header_right_text1">ABOUT  </router-link>
                <a href="https://www.google.com" target="_blank"  class="Header_right_text1">HELP  </a>
    
                <router-link :to=" { name: 'signin' } " class="Header_right_text1">SIGN IN</router-link>
                
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
  padding-top: 12px;
  padding-bottom: 8px;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

}
  
.Header_left{
  display: flex;
  align-items: center;

  .Header_left_text{
    font-family: Calibri;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
  }
  .Header_icon{
    margin-right:15px ;
  }
}
.Header_right{

  
    font-family: Calibri;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
  .Header_right_text1{
    padding-right: 12px;
  }
}

</style>