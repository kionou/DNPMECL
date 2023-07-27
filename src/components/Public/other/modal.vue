<template>
    <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>
    <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
    <div class="form-container">
	<p class="title">Connexion</p>
    <p class="text-center"> Veuillez fournir le code que vous avez reçu sur WhatsApp pour vous connecter, s'il vous plaît. </p>
	<form class="form">
		<div class="input-group">
			<label for="username">Numéro <span class="text-danger">*</span></label>
			<input type="text" name="numero" id="username" placeholder="" v-model="numero">
		</div>
        <small v-if="v$.numero.$error">{{v$.numero.$errors[0].$message}}</small>
		<button class="sign" @click.prevent="submit">Se connecter</button>
	</form>
    </div> 
  </div>
  </template>
  
  <script>
  import useVuelidate from '@vuelidate/core';
  import { require, lgmin, lgmax } from '@/functions/rules';
  export default {
      name:'ComponentModal',
      props: ["revele", "toggleModale"],
      data() {
        return {
             numero:'',
             v$:useVuelidate(),
        }
      },
      validations: {
        numero:{
               require,
               lgmin:lgmin(12),
              lgmax:lgmax(15),

            },
      },
           
      methods: {
        async  submit(){
            this.v$.$touch()
            if (this.v$.$errors.length == 0 ) { 
             let   DataUser={
                    numero:this.numero
                }
                console.log('data user :',DataUser);
              }
            },
       
        
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
  width: 510px;
  border-radius: 0.75rem;
  background-color: white;
  padding: 2rem;
  color: black;
  /* max-height: 100%; */
  box-shadow:0px 2px 25px rgba(0, 0, 0, 0.1);
  z-index: 100;

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

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}

 
  </style>
