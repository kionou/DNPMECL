
<template>
  <Loading v-if="loading"></Loading>
  <div>
 <Modal v-if="modal" :revele="revele" :data="data" :toggleModale="toggleModale" @redirectWithProps="redirectWithProps"></Modal>

  <div class="container-fluid  d-flex justify-content-center align-items-center " data-aos="zoom-out" data-aos-delay="100" style="padding: 60px;" >
<div class="form-container1">
<p class="title">Connexion</p>
  <p class="text-center mb-0">Accédez à votre espace utilisateur</p>
  <small class="text-center">{{error}}</small>

<form class="form">
    
  <div class="input-group">
    <label for="username">Email <span class="text-danger">*</span></label>
    <input type="text" name="email" id="username" placeholder="" v-model="step1.email">
  </div>
      <small v-if="v$.step1.email.$error">{{v$.step1.email.$errors[0].$message}}</small>
  <div class="input-group">
    <label for="tel">Mot de passe  <span class="text-danger">*</span></label>
    <MazInput v-model="step1.password" type="password" color="secondary"  style="width: 100%;" />
    <!-- <input type="password" name="password" id="password" placeholder="" v-model="password"> -->
  </div>
       <small v-if="v$.step1.password.$error">{{v$.step1.password.$errors[0].$message}}</small>
       <p class="signin" style="text-align: end; margin: 8px 0 0;" @click="ChangePassword"> <span >Mot de passe oublié ?</span> </p>

  <button class="sign" @click.prevent="submit">Se connecter</button>
 <p class="signin">Vous n'avez pas de compte ? <span @click="$router.push({ path: '/inscription-mpme',  })" >Créer un compte</span> </p>

</form>
  </div>   
  </div>
  
  <MazDialog v-if="isOpen" v-model="isOpen" width="600px">
    <h1 class="text-centre">Entrez votre Email</h1>
    <form class="form">
    
    <div class="input-group">
      <label for="username">Email <span class="text-danger">*</span></label>
      <input type="email" name="email" id="username" placeholder="" v-model="step2.email">
    </div>
        <small v-if="v$.step2.email.$error">{{v$.step2.email.$errors[0].$message}}</small>
  
  
    <button class="sign" @click.prevent="ChangePassword">Valider</button>
   
  
  </form>
    </MazDialog>

    <MazDialog v-model="responseEmail">
<small>{{ error }}</small> 
      <p>
        Veuillez entrer le code que nous avons envoyé à votre adresse e-mail pour réinitialiser votre mot de passe.
      </p>
      <form class="form">
    
    <div class="input-group">
      <label for="username">Code de  réinitialisation <span class="text-danger">*</span></label>
      <input type="tel" name="numero" id="username"  v-model="step3.code" placeholder="XXXX" >
    </div>
        <small v-if="v$.step3.code.$error">{{v$.step3.code.$errors[0].$message}}</small>
  
  
    <button class="sign" @click.prevent="HandleCode">Valider</button>
   
  
  </form>
     
    </MazDialog>

  </div>

</template>

<script>
import Navbar from '../../components/loyout/navbar.vue';
import Footer from '../../components/loyout/footer.vue';
import useVuelidate from '@vuelidate/core';
import { require, lgmin, lgmax, ValidEmail , ValidNumeri  } from '@/functions/rules';
import Modal from '../../components/Public/other/modal_demande.vue';
import axios from '@/lib/axiosConfig.js';
import Loading from '../../components/Public/other/preloader.vue';
import MazDialog from 'maz-ui/components/MazDialog'
import { mapActions } from 'vuex';



export default {
  name: 'DNPMECLSignUserMpme',
  components:{
      Navbar , Footer , Modal , Loading , MazDialog
  },

  data() {
      return {
          loading:false,
          isOpen: false,
          responseEmail:false,
          
           error:'',
           data:'',
           v$:useVuelidate(), 
           revele: false,
           users:[],
           modal:false,
           step1:{
            email:'',
           password:'',
          
          },
          step2:{
            email:null,
          },
          step3:{
            code:null,
          }
      };
  },
  validations: {

    step1:{
    
      email:{
             require,
              ValidEmail
          },
          password:{
            require,
            lgmin:lgmin(8),
          },
    },
     step2:{
    
      email:{
             require,
             ValidEmail
          },
    },
    step3:{
    
    code:{
           require,
           ValidNumeri,
           lgmin:lgmin(4),
           lgmax:lgmax(4),
        },
  }
          
  },

 async  mounted() {
  document.body.classList.add('scroll');    
  },

  methods: {
  
    ...mapActions({  saveVerificationCode: 'saveVerificationCode', }),
    async  submit(){
         this.error = '',
         this.v$.step1.$touch()
          if (this.v$.$errors.length == 0 ) {
            this.loading = true
            
      let DataUser = {
        email:this.step1.email,
        password:this.step1.password
      }
      console.log("eeeee",DataUser);
      try {
      const response = await axios.post('/login' , DataUser);
      console.log('response.login', response.data); 
      if (response.data.statut === "error") {
            console.log("error");
            this.loading = false
          } else {
            const userData = response.data.data;
            if (userData.user.Identifiant === null) {
            this.loading = false
            this.error = "Compte non autorise merci !"
              
            } else {
            this.loading = false
            this.modal = true
            this.saveVerificationCode(userData);
            this.revele = !this.revele;
           if (this.revele) {
             document.body.classList.add('no-scroll');
            } else {
               document.body.classList.add('scroll');
             }
              
            }
        
           
          }
      
    } catch (error) {
      this.loading = false
       return this.error = "L'authentification a échoué"
    }
            }else{
            
            
            }   
          },
          toggleModale: function() {
           this.revele = !this.revele;
           if (this.revele) {
             document.body.classList.add('no-scroll');
            } else {
               document.body.classList.remove('no-scroll');
             }
  },
 async ChangePassword(){
          this.isOpen = true
          this.error = '',
           this.v$.step2.$touch()
          if (this.v$.$errors.length == 0 ) {
            this.loading = true
            this.isOpen = false
          let CodeUserEmail ={
            email:1,
            value:this.step2.email
          
          }
          console.log("eee",CodeUserEmail);
          try {
         const response = await axios.post('/mpme/send-otp', CodeUserEmail);
         
         console.log('response.Code', response); 
         if (response.data.status === 'success') {
         this.loading = false
         this.responseEmail = true
         } else {
          
         }
    
    } catch (error) {
        console.log('error',error);
    }
          }else{
          
          
          
          }
  
  },

async HandleCode(){
        
          this.error = '',
           this.v$.step3.$touch()
          if (this.v$.$errors.length == 0 ) {
         this.responseEmail = false
            this.loading = true
            let DataUser = {
           email: true,
           value: this.step2.email,
           code: this.step3.code
        }
        console.log('data user :', DataUser);
          try {
            const response = await axios.post('/mpme/verification-otp', DataUser);
            if (response.data.status === 'error') {
              this.loading = false
              return this.error = response.data.message

            } else {
              console.log('response.Code', response.data);
              this.loading = false
              this.$router.push({ path: '/reinitialiser', })


            }

          } catch (error) {
            this.loading = false
            console.error('Erreur postlogin:', error);
          }

          }else{
          
          
          
          }
  
  },


  },
};
</script>

<style lang="css" >
small{
  color: #f8001b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-container1 {
width: 400px;
border-radius: 0.75rem;
background-color: white;
padding: 2rem;
color: black;
max-height: 550px;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);


}

@media (max-width: 500px) {

  .container-fluid {
padding: 20px 10px !important;


}
}

.title {
text-align: center;
font-size: 1.5rem;
line-height: 2rem;
font-weight: 700;
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
color: #000;
margin-bottom: 4px;
}

.input-group input {
width: 100%;
border-radius: 0.5rem !important;
  border: 2px solid #e5e7eb;
outline: 0;

padding: 14px;
color: rgb(3, 3, 5);
}

.input-group input:focus {
border-color: var(--color-primary);
}

.sign {
display: block;
width: 100%;
background-color: var(--color-secondary);
padding: 0.75rem;
text-align: center;
color: black;
border: none;
border-radius: 0.375rem;
font-weight: 600;
margin-top: 50px;
}

.signin {
color: rgba(88, 87, 87, 0.822);
font-size: 14px;
text-align: center;
margin-top: 20px;
}



.signin span {
color: royalblue;
}

.signin span:hover {
text-decoration: underline royalblue;
cursor: pointer;
}

.no-scroll {
  overflow: hidden;
}

.scroll {
  overflow: auto;
}

.sign:hover{

border: 1px solid var(--color-secondary);
color: var(--color-secondary);
background-color: white;

}

.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: calc(var(--bs-border-width) * -1);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 100% !important;
}

.supp {
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    border: none;
    border-radius: 45px;
    z-index: 3;
    cursor: pointer;
    outline: none;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
  }

  
  

</style>