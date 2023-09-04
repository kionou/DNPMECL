<template>
    <div>

       <div class="container-fluid  d-flex justify-content-center align-items-center " data-aos="zoom-out" data-aos-delay="100" style="padding: 60px;" >
        <div class="form-container">
	<p class="title">Redéfinir votre mot de passe</p>
	<form class="form">
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
		<button class="sign" @click.prevent="submit">Réinitialiser</button>
	</form>
</div>
       
    </div>

    </div>
</template>

<script>
import Navbar from '../../components/loyout/navbar.vue';
import Footer from '../../components/loyout/footer.vue';
import useVuelidate from '@vuelidate/core';
import { require, lgmin, lgmax, ValidEmail } from '@/functions/rules';
export default {
    name: 'DNPMECLConnexion',
    components:{
        Navbar , Footer
    },

    data() {
        return {
             password:'',
             confirmer_password:'',
             v$:useVuelidate(), 
        };
    },
    validations: {
     
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
      async  submit(){

            this.v$.$touch()
            if (this.v$.$errors.length == 0 ) {

             let   DataUser={
                    password:this.password,
                    confirmer_password:this.confirmer_password
                }
                console.log('data user :',DataUser);
              }
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

.forgot {
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--color-primary);
  margin: 8px 0 14px 0;
}

.forgot a,.signup a {
  color: rgba(243, 244, 246, 1);
  text-decoration: none;
  font-size: 14px;
}

.forgot a:hover, .signup a:hover {
  text-decoration: underline var(--color-primary);
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

.signup {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
}

</style>