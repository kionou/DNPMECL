<template>
  <Loading v-if="loading"></Loading>
    <div>

       <div class="container-fluid  d-flex justify-content-center align-items-center " data-aos="zoom-out" data-aos-delay="100" style="padding: 60px;" >
        <div class="form-container">
	<p class="title">Redéfinir votre mot de passe</p>
  <small>{{ error }}</small>
	<form class="form">
    <div class="input-group">
      <label for="username">Email <span class="text-danger">*</span></label>
      <input type="email" name="email" id="username" placeholder="" v-model="email">
    </div>
    <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</small>
    <div class="input-group">
      <label for="username">Code Email <span class="text-danger">*</span></label>
      <MazInput v-model="code" type="password" color="secondary"  style="width: 100%;" />
    </div>
    <small v-if="v$.code.$error">{{v$.code.$errors[0].$message}}</small>
		<div class="input-group">
			<label for="username">Nouveau mot de passe <span class="text-danger">*</span></label>
      <MazInput v-model="password" type="password" color="secondary"  style="width: 100%;" />
		</div>
    <small v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</small>
		<div class="input-group">
			<label for="password"> Confirmer le nouveau mot de passe <span class="text-danger">*</span></label>
      <MazInput v-model="confirmer_password" type="password" color="secondary"  style="width: 100%;" />
		</div>
    <small v-if="v$.confirmer_password.$error">{{v$.confirmer_password.$errors[0].$message}}</small>
    <small v-if="!validatePasswordsMatch()" >Les mots de passe ne correspondent pas.</small>
		<button class="sign" @click.prevent="submit">Réinitialiser</button>
	</form>
</div>
       
    </div>

    <MazDialog v-model="msg" title="Mot de passe changé avec succès">
      <p>
        Votre mot de passe a été changé avec succès. Vous pouvez maintenant vous connecter en toute sécurité.
      </p>
        <div class="supp" @click="close" style="background-color: blue; "> Ok</div>
    </MazDialog>

    </div>
</template>

<script>
import Navbar from '../../components/loyout/navbar.vue';
import Footer from '../../components/loyout/footer.vue';
import useVuelidate from '@vuelidate/core';
import { require, lgmin, lgmax, ValidEmail  , ValidNumeri} from '@/functions/rules';
import axios from '@/lib/axiosConfig.js';
import MazDialog from 'maz-ui/components/MazDialog'
import Loading from '../../components/Public/other/preloader.vue';
export default {
    name: 'DNPMECLConnexion',
    components:{
        Navbar , Footer , MazDialog , Loading
    },

    data() {
        return {
          loading:false,
             email:'',
             msg:false,
             code:'',
             password:'',
             confirmer_password:'',
             error:'',
             v$:useVuelidate(), 
        };
    },
    validations: {
           email:{
              require,
              ValidEmail
              
            },
            code:{
              require,
              ValidNumeri,
                lgmin:lgmin(4),
                lgmax:lgmax(4),

              
            },
     
            password:{
              require,
                lgmin:lgmin(8), 
            },
            confirmer_password:{
              require,
                lgmin:lgmin(8),
              
            },
            
    },

    mounted() {
      
    },

    methods: {
      validatePasswordsMatch() {
      return this.password === this.confirmer_password;
    },
      async  submit(){
            this.error = ''
            this.v$.$touch()
            if (this.v$.$errors.length == 0 ) {
              this.loading = true
             let   DataUser={
                    code:this.code,
                    email:true,
                    value:this.email,
                    password:this.password,
                    password_confirmation:this.confirmer_password
                }
                console.log('data user :',DataUser);
           
          try {
            const response = await axios.post('/mpme-password/password/reset', DataUser);
            console.log('response.Code', response);
            if (response.data.status === 'success') {
              this.loading = false
              this.msg = true

            }

          } catch (error) {
            this.loading = false
            console.error('Erreur postlogin:', error);
            return this.error = error.response.data.message


          }
              }
            },
            close(){
              this.$router.push({ path: '/connexion-mpme', })
            
            
            }

    },
};
</script>

<style lang="css" scoped>
  small{
    color: #f8001b;
    display: flex;
    align-items: center;
    justify-content: center;
  }

.form-container {
  width: 454px;
  border-radius: 0.75rem;
  background-color: white;
  padding: 2rem;
  color: black;
  max-height: 550px;
  box-shadow:0px 2px 25px rgba(0, 0, 0, 0.1);
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