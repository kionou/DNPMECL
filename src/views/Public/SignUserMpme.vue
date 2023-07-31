<template>

    <div>
   <Modal :revele="revele" :toggleModale="toggleModale"></Modal>

    <div class="container-fluid  d-flex justify-content-center align-items-center " data-aos="zoom-out" data-aos-delay="100" style="padding: 60px;" >
  <div class="form-container1">
	<p class="title">Inscription</p>
    <p class="text-center">Créez votre compte et enregistrez votre entreprise en quelques étapes seulement </p>
	<form class="form">
		<div class="input-group">
			<label for="username">Email <span class="text-danger">*</span></label>
			<input type="text" name="email" id="username" placeholder="" v-model="email">
		</div>
        <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</small>
		<div class="input-group">
			<label for="tel">Numéro WhatsApp <span class="text-danger">*</span></label>
			<input type="tel" name="numero" id="numero" placeholder="" v-model="numero">
		</div>
         <small v-if="v$.numero.$error">{{v$.numero.$errors[0].$message}}</small>

		<button class="sign" @click.prevent="submit">S'enregistrer</button>
   <p class="signin">Vous avez déjà un compte ? <span  v-on:click="toggleModale" >Se connecter</span> </p>

	</form>
    </div>   
    </div>

    </div>
 
</template>

<script>
import Navbar from '../../components/loyout/navbar.vue';
import Footer from '../../components/loyout/footer.vue';
import useVuelidate from '@vuelidate/core';
import { require, lgmin, lgmax, ValidEmail , ValidNumeri } from '@/functions/rules';
import Modal from '../../components/Public/other/modal.vue';
import axios from 'axios'

export default {
    name: 'DNPMECLSignUserMpme',
    components:{
        Navbar , Footer , Modal
    },

    data() {
        return {
             email:'',
             numero:'',
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
            numero:{
              require,
              ValidNumeri,
              lgmin:lgmin(9),
              lgmax:lgmax(9),
         
                
            },
    },

   async  mounted() {
    this.fetchUsers();
        
    },

    methods: {
        
      async  submit(){
            //  this.v$.$validate()
            this.v$.$touch()
            if (this.v$.$errors.length == 0 ) {
                // this.revele = !this.revele
             let   DataUser={
                    email:this.email,
                    numero:this.numero
                }
                console.log('data user :',DataUser);
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
    async fetchUsers() {
      try {
        // Utilisation de l'URL relative avec "/api" qui sera redirigée par le proxy
        const response = await fetch('http://localhost:5000');
        console.log('response',response);
        if (response.ok) {
          const data = await response.json();
          this.users = data;
        } else {
          console.error('Impossible de récupérer les utilisateurs.');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
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


</style>
