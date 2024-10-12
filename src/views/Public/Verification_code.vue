<template>
  <Loading v-if="loading"></Loading>
  <div>

    <div class="generals " data-aos="zoom-out"
      data-aos-delay="100" >
      <div class="form-container">
        <p class="title">connexion</p>
        <p class="text-center" v-if="selectedChannel === 'E-mail'">Entrez le code de vérification envoyé à <br>{{ formatPhoneNumber(getVerificationCode.user.email) }}</p>
        <p class="text-center" v-else>Entrez le code de vérification envoyé à <br>{{ formatPhoneNumber(getVerificationCode.user.Whatsapp) }}</p>
        <small>{{ error }}</small>

        <form class="form">
          <div class="input-group">
            <MazInput type="password" v-model="code" color="secondary" placeholder="XXXX" />
           
          </div>
          <small v-if="v$.code.$error">{{ v$.code.$errors[0].$message }}</small>
          <button class="sign" @click.prevent="submit">Se connecter</button>
          <p class="signin" @click="renew"> <span >Renvoyer un nouveau code</span> </p>
        </form>
      </div>

    </div>

  </div>
</template>

<script>
import Navbar from '../../components/loyout/navbar.vue';
import Footer from '../../components/loyout/footer.vue';
import axios from '@/lib/axiosConfig.js'
import useVuelidate from '@vuelidate/core';
import Loading from '../../components/Public/other/preloader.vue';
import { mapGetters } from 'vuex';
import { require, lgmin, lgmax, ValidNumeri } from '@/functions/rules';
import { mapActions } from 'vuex';


export default {
  name: 'DNPMECLConnexion',
  components: {
    Navbar, Footer , Loading 
  },
  computed: {
    ...mapGetters(['getVerificationCode']),
    selectedChannel() {
      const channel = this.$route.query.channel;
      return channel === 'email' ? 'E-mail' : (channel === 'whatsapp' ? 'WhatsApp' : 'Canal inconnu');
    },
    // loggedInUser() {
    //   return this.$store.getters['user/loggedInUser'];
    // },
  },


  data() {
    return {
      loading:false,
      code: '',
      verification: '',
      error: '',
      v$: useVuelidate(),

    };
  },
  validations: {

    code: {
      require,
      ValidNumeri,
      lgmin: lgmin(4),
      lgmax: lgmax(4),

    },
  },

  mounted() {

   

  },

  methods: {
     ...mapActions('user', ['setLoggedInUser']),

    async submit() {
     
      this.error = ''

      this.v$.$touch()
      if (this.v$.$errors.length == 0) {
        this.loading = true
        if (this.selectedChannel === 'E-mail') {
          let DataUser = {
          email: true,
           value: this.getVerificationCode.user.email ,
          code: this.code
        }
      
          try {
            const response = await axios.post('/mpme/verification-otp', DataUser);
        
            if (response.data.status === 'error') {
              this.loading = false
              return this.error = response.data.message

            } else {
            
              if (response.data.data.FirstConnexion <= 1) {
                localStorage.setItem('resetPasswordInfo', JSON.stringify({
                  email: this.getVerificationCode.user.email,
                  code: this.code// Assurez-vous de récupérer le code correctement
                }));
              this.loading = false
               this.$router.push({ path: '/reinitialiser', })
              } else {
                  this.setLoggedInUser(this.getVerificationCode);
                   this.$router.push('/mon-espace');
                  this.loading = false

              }
             

            }

          } catch (error) {
            this.loading = false
           
          }

        } else {

          let DataUser = {
          email: false,
          value: this.getVerificationCode.user.Whatsapp,
          code: this.code
        }
      
          try {
            const response = await axios.post('/mpme/verification-otp', DataUser);
       
            if (response.data.status === 'error') {
              this.loading = false
              return this.error = response.data.message

            } else {
            
              if (response.data.data.FirstConnexion <= 1) {
                localStorage.setItem('resetPasswordInfo', JSON.stringify({
                  email: this.getVerificationCode.user.email,
                  code: this.code// Assurez-vous de récupérer le code correctement
                }));
              this.loading = false
               this.$router.push({ path: '/reinitialiser', })
              } else {
                  this.setLoggedInUser(this.getVerificationCode);
                   this.$router.push('/mon-espace');
                  this.loading = false

              }
            }

          } catch (error) {
            this.loading = false
           
          }
        }

      }
    },



    async renew() {

      if (this.selectedChannel === 'E-mail') {
        const requestData = {
          email: 1,
          value: this.getVerificationCode.user.email ,
        };

        try {
          // Effectuez une demande pour renvoyer un nouveau code par e-mail
          const response = await axios.post('/mpme/send-otp', requestData);
          if (response.data.status === 'success') {
            alert('Un nouveau code a été envoyé à votre e-mail.');
           
          } else {
            // Erreur, affichez un message d'erreur
            alert('Une erreur s\'est produite lors de l\'envoi du nouveau code.');
          }
        } catch (error) {
         
        }
      } else if (this.selectedChannel === 'WhatsApp') {
        const requestData = {
          email: 0,
          value: this.getVerificationCode.whatsapp,
        };

        try {
          // Effectuez une demande pour renvoyer un nouveau code par WhatsApp
          const response = await axios.post('/mpme/send-otp', requestData);
        
          if (response.data.status === 'success') {
            // Succès, informez l'utilisateur que le nouveau code a été envoyé
            alert('Un nouveau code a été envoyé à votre numéro WhatsApp.');
          } else {
            // Erreur, affichez un message d'erreur
            alert('Une erreur s\'est produite lors de l\'envoi du nouveau code.');
          }
        } catch (error) {
          
        }
      }
    },
    formatPhoneNumber(number) {
      if (number.length >= 10) {

        const firstDigits = number.substr(0, 2);
        const lastDigits = number.substr(-4);
        const middleDigits = '*'.repeat(number.length - 6);
        const formattedNumber = `${firstDigits} ${middleDigits} ${lastDigits}`;
        return formattedNumber;
      }
      return number;
    },
  },
};
</script>

<style lang="css" scoped>
small {
  color: #f8001b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.generals{

display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 10px;
    margin-top: 30px;

}


.form-container {
  width: 400px;
  border-radius: 0.75rem;
  background-color: white;
  padding: 2rem;
  color: black;
  max-height: 550px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
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

@media (max-width: 768px) {

  .generals{


    padding: 10px;
   

}

.form-container{
padding:  10px !important;


}

.sign {
  
  margin-top: 20px !important;
}
}
  
</style>