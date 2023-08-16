<template>
    <div class="bloc-modale" v-if="revele"  data-aos="zoom-out"
      >
    <div class="overlay" v-on:click="toggleModale"></div>
    <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
    <div class="form-container">
	<p class="title">
  </p>
    <p class="text-center"> 
        Veuillez sélectionner un canal pour recevoir votre code d'authentification.
      
    </p>
    <div class="btn_sign">
		<button class="sign" @click="hamdleSubmitsms">SMS</button>

<!-- {{ loggedInUser }} -->
		<button class="sign" @click="$router.push({ path: '/login_user_mpme/verification',})">E-MAIL</button>

    </div>
	
        
	
    </div> 
  </div>
  </template>
  
  <script>
import axios from '@/lib/axiosConfig.js'


 
  export default {
      name:'ComponentModal',
      props: ["revele", "toggleModale" , "data"],
      computed: {
    loggedInUser() {
      return this.$store.getters['user/loggedInUser'];
    },
  },
    
      data() {
        return {

        }
      },
          
      methods: {
        async  hamdleSubmitsms(){
          const datauser = this.loggedInUser
      
          let CodeUser ={
          email:0,
           value:this.loggedInUser.user.Whatsapp
          
          }
          console.log("eee",CodeUser);
          try {
      // const response = await axios.post('/mpme/send-otp', CodeUser);
      // console.log('response.Code', response); 
      console.log("try",datauser);
       this.$router.push({ name: 'Test' }); 
    } catch (error) {
    
    }
         
            },
       
        
      },

      mounted() {
      console.log('tessst',this.loggedInUser);
      },
  
  }
  </script>
  
  <style lang="css" scoped>
  body{
  
  margin: 0;
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
  width: 100px;
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

