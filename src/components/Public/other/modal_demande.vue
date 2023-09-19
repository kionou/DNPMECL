<template>
  <Loading v-if="loading" style="z-index: 1000;"></Loading>
    <div class="bloc-modale" v-if="revele"  data-aos="zoom-out"
      >
    <div class="overlay" v-on:click="toggleModale"></div>
    <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
    <div class="form-container">
	<p class="title">
  </p>
  <small>{{ error }}</small>
    <p class="text-center"> 
        Veuillez sélectionner un canal pour recevoir votre code d'authentification.
      
    </p>
    <div class="btn_sign">
		<button class="sign" @click="hamdleSubmitsms" :disabled="isButtonDisabled"  :class="{ 'disabled-button': isButtonDisabled }" >WHATSAPP</button>
		<button class="sign" @click="hamdleSubmitemail">E-MAIL</button>
    </div>
    </div> 
  </div>
  </template>
  
  <script>
import axios from '@/lib/axiosConfig.js'
import Loading from './preloader.vue';
import { mapGetters } from 'vuex';
  export default {
      name:'ComponentModal',
      props: ["revele", "toggleModale" , "data"],
      components:{Loading},
      computed: {
    ...mapGetters(['getVerificationCode']), 
  },
    
      data() {
        return {
          loading:false,
          error:'',
          isButtonDisabled: true,

        }
      },
      mounted() {
      // console.log('tessstrrr',this.loggedInUser);
      console.log('verification',  this.getVerificationCode);
      },
          
      methods: {
        async  hamdleSubmitemail(){
      
          this.loading = true
          const datauser =  this.getVerificationCode
          let CodeUserEmail ={
            email:1,
            value:datauser.user.email 
          }
          console.log("eee",CodeUserEmail);
          try {
       const response = await axios.post('/mpme/send-otp', CodeUserEmail);
       console.log('response.Code', response); 
      console.log("try",datauser);
       if (response.data.status === 'error') {
             this.revele = true
              
              return this.error = response.data.message

            } else {
              console.log('response.Code', response.data);
              
              this.$router.push({ name: 'Verification', query: { channel: 'email' } });

              this.loading = false
            }
      
    } catch (error) {
    
    }
         
      },

 async  hamdleSubmitsms(){
          this.loading = true 
          const datauser =  this.getVerificationCode
          let CodeUserWhatsapp ={
          email:0,
           value:datauser.user.Whatsapp
          
          }
          console.log("eee",CodeUserWhatsapp);
          try {
        const response = await axios.post('/mpme/send-otp', CodeUserWhatsapp);
        console.log('response.Code', response); 
      console.log("try",datauser);
      if (response.data.status === 'error') {
              this.loading = false
              return this.error = response.data.message

            } else {
              console.log('response.Code', response.data);
              
              // this.$router.push({ name: 'Espace' }); 
              this.$router.push({ name: 'Verification', query: { channel: 'whatsapp' } });

              this.loading = false
            }
    
    } catch (error) {
      console.log(error.message);
    
    }
         
            },
       
        
      },

    
   

  
  }
  </script>
  
  <style lang="css" scoped>

.disabled-button {
  background-color: #ccc; 
  color: #999; /* Couleur de texte grise */
  cursor: not-allowed; /* Curseur non autorisé */

}
  body{
  
  margin: 0;
  }
  .error{
    /* border: 1px solid red; */
    max-width: 1140Px;
    margin: 40px auto;
    padding: 10Px;
    color:red;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
    
}
  .bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 10px;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.form-container {
  width: 360px;
  height: 250px;
  border-radius: 0.75rem;
  background-color: white;
  padding: 1rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow:0px 2px 25px rgba(0, 0, 0, 0.1);
  z-index: 100;

}
.title {
  display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  /* font-size: 1.5rem; */
  /* line-height: 2rem; */
  /* font-weight: 700; */
}

.title img{
  width: 90px;
  height: ç0px;

}

.form {
  margin-top: 1.5rem;
}

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}

.input-group input {
  width: 100%;
  border-radius: 0.375rem !important;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;

  padding: 14px;
  color: rgb(3, 3, 5);
}

.input-group input:focus {
  border-color: var(--color-primary);
}

.sign {
  display: block;
  width: 110px;
  background-color: var(--color-secondary);
  padding: 0.75rem;
  text-align: center;
  color: black;
  border: none;
  border-radius: 0.2rem;
  font-weight: 600;
  margin-top: 0px !important;
}
.sign:hover{

border: 1px solid var(--color-secondary);
color: var(--color-secondary);
background-color: white;

}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
.btn_sign{
/* border: 1px solid red; */
margin-top: 43px;
width: 100%;
display: flex;
justify-content: space-around;


}
 
  </style>

