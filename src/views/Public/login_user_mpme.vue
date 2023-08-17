
<template>

  <div>
 <Modal :revele="revele" :data="data" :toggleModale="toggleModale" @redirectWithProps="redirectWithProps"></Modal>

  <div class="container-fluid  d-flex justify-content-center align-items-center " data-aos="zoom-out" data-aos-delay="100" style="padding: 60px;" >
<div class="form-container1">
<p class="title">Connexion</p>
  <p class="text-center mb-0">Accédez à votre espace utilisateur</p>
  <small class="text-center">{{error}}</small>

<form class="form">
    
  <div class="input-group">
    <label for="username">Email <span class="text-danger">*</span></label>
    <input type="text" name="email" id="username" placeholder="" v-model="email">
  </div>
      <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</small>
  <div class="input-group">
    <label for="tel">Mot de passe  <span class="text-danger">*</span></label>
    <input type="password" name="password" id="password" placeholder="" v-model="password">
  </div>
       <small v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</small>

  <button class="sign" @click.prevent="submit">Se connecter</button>
 <p class="signin">Vous n'avez pas de compte ? <span @click="$router.push({ path: '/sign_user_mpme',  })" >Créer un compte</span> </p>

</form>
  </div>   
  </div>

  </div>

</template>

<script>
import Navbar from '../../components/loyout/navbar.vue';
import Footer from '../../components/loyout/footer.vue';
import useVuelidate from '@vuelidate/core';
import { require, lgmin, lgmax, ValidEmail  } from '@/functions/rules';
import Modal from '../../components/Public/other/modal_demande.vue';
import axios from '@/lib/axiosConfig.js'
import { mapActions } from 'vuex';



export default {
  name: 'DNPMECLSignUserMpme',
  components:{
      Navbar , Footer , Modal
  },

  data() {
      return {
           email:'',
           password:'',
           error:'',
           data:'',
           v$:useVuelidate(), 
           revele: false,
           users:[]
      };
  },
  validations: {
           email:{
             require,
              ValidEmail
          },
          password:{
            require,
            lgmin:lgmin(2),
            lgmax:lgmax(9),
       
              
          },
  },

 async  mounted() {
  document.body.classList.add('scroll');


      
  },

  methods: {
   
    ...mapActions('user', ['setLoggedInUser']),
    async  submit(){

      let DataUser = {
        email:this.email,
        password:this.password
      }
      console.log("eeeee",DataUser);

      try {
      const response = await axios.post('/login' , DataUser);
      console.log('response.login', response.data); 
      if (response.data.statut === "error") {
            console.log("error");
          } else {
            console.log('ok', response.data.data);
            const userData = response.data.data;
           this.setLoggedInUser(userData);
            this.data = response.data.data
            this.revele = !this.revele;
           if (this.revele) {
             document.body.classList.add('no-scroll');
            } else {
               document.body.classList.add('scroll');
             }
          }
      
    } catch (error) {
       return this.error = "L'authentification a échoué"
    }
     
          //  this.v$.$validate()
          // this.v$.$touch()
          // if (this.v$.$errors.length == 0 ) {
          //     // this.revele = !this.revele
          //  let   DataUser={
          //         email:this.email,
          //         numero:this.numero
          //     }
          //     console.log('data user :',DataUser);
          //   }
          },
          toggleModale: function() {
           this.revele = !this.revele;
           if (this.revele) {
             document.body.classList.add('no-scroll');
            } else {
               document.body.classList.remove('no-scroll');
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
box-shadow:0px 2px 25px rgba(0, 0, 0, 0.1);


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
color: rgba(156, 163, 175, 1);
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

</style>