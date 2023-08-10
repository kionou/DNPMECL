<template>
    <div>

       <div class="container-fluid  d-flex justify-content-center align-items-center " data-aos="zoom-out" data-aos-delay="100" style="padding: 60px;" >
        <div class="form-container">
	<p class="title">connexion</p>
    <p class="text-center">Entrez le code de vérification envoyé à votre adresse e-mail</p>
	<form class="form">
		<div class="input-group">
			<label for="username">Email <span class="text-danger">*</span></label>
      <MazInput type="tel" v-model="verification"  color="secondary" placeholder="XXXXXX"   />
		</div>
    <small v-if="v$.verification.$error">{{v$.verification.$errors[0].$message}}</small>
		
		<button class="sign" @click.prevent="submit">Se connecter</button>
	</form>
</div>
       
    </div>

    </div>
</template>

<script>
import Navbar from '../../components/loyout/navbar.vue';
import Footer from '../../components/loyout/footer.vue';
import useVuelidate from '@vuelidate/core';
import { require, lgmin, lgmax,ValidNumeri } from '@/functions/rules';
export default {
    name: 'DNPMECLConnexion',
    components:{
        Navbar , Footer
    },

    data() {
        return {
          email:'',
          verification:'',
             v$:useVuelidate(), 
        };
    },
    validations: {
            
            verification:{
              require,
              ValidNumeri,
                lgmin:lgmin(6),
                lgmax:lgmax(6),
                
         
                
            },
    },

    mounted() {
        
    },

    methods: {
      async  submit(){
            // this.v$.$validate()
            this.v$.$touch()
            if (this.v$.$errors.length == 0 ) {
                // this.revele = !this.revele
             let   DataUser={
                    email:this.verification,
                  
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
  flex-direction: column;
}

.input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
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