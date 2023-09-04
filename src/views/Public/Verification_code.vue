<template>
  <Loading v-if="loading"></Loading>
  <div>

    <div class="container-fluid  d-flex justify-content-center align-items-center " data-aos="zoom-out"
      data-aos-delay="100" style="padding: 60px;">
      <div class="form-container">
        <p class="title">connexion</p>
        <p class="text-center" v-if="selectedChannel === 'E-mail'">Entrez le code de vérification envoyé à <br>{{ formatPhoneNumber(loggedInUser.email) }}</p>
        <p class="text-center" v-else>Entrez le code de vérification envoyé à <br>{{ formatPhoneNumber(loggedInUser.whatsapp) }}</p>
        <small>{{ error }}</small>

        <form class="form">
          <div class="input-group">
            <MazInput type="tel" v-model="code" color="secondary" placeholder="XXXX" />
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
// import { mapGetters } from 'vuex';
import { require, lgmin, lgmax, ValidNumeri } from '@/functions/rules';
export default {
  name: 'DNPMECLConnexion',
  components: {
    Navbar, Footer , Loading
  },
  computed: {
    selectedChannel() {
      const channel = this.$route.query.channel;
      return channel === 'email' ? 'E-mail' : (channel === 'whatsapp' ? 'WhatsApp' : 'Canal inconnu');
    },
    loggedInUser() {
      return this.$store.getters['user/loggedInUser'];
    },
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
    console.log("data", this.loggedInUser);
    // console.log(this.datauser);

  },

  methods: {

    async submit() {
     
      this.error = ''

      this.v$.$touch()
      if (this.v$.$errors.length == 0) {
        this.loading = true
        if (this.selectedChannel === 'E-mail') {
          let DataUser = {
          email: 1,
           value: this.loggedInUser.email,
          // value:'kionoumamadou.00@gmail.com',
          code: this.code
        }
        console.log('data user :', DataUser);
          try {
            const response = await axios.post('/mpme/verification-otp', DataUser);
            console.log('response.Code', response);
            if (response.data.status === 'error') {
              this.loading = false
              return this.error = response.data.message

            } else {
              console.log('response.Code', response.data);
              this.$router.push('/mon_espace');
              this.loading = false

            }

          } catch (error) {
            this.loading = false
            console.error('Erreur postlogin:', error);
          }

        } else {

          let DataUser = {
          email: 0,
          value: this.loggedInUser.whatsapp,
          code: this.code
        }
        console.log('data user :', DataUser);
          try {
            const response = await axios.post('/mpme/verification-otp', DataUser);
            console.log('response.Code', response);
            if (response.data.status === 'error') {
              this.loading = false
              return this.error = response.data.message

            } else {
              console.log('response.Code', response.data);
              
              this.$router.push('/mon_espace');
              this.loading = false
            }

          } catch (error) {
            this.loading = false
            console.error('Erreur postlogin:', error);
          }
        }

      }
    },



    async renew() {
      console.log('okk' , this.selectedChannel);
      if (this.selectedChannel === 'E-mail') {
        const requestData = {
          email: 1,
          value: this.loggedInUser.email,
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
          console.error('Erreur lors de la demande de renvoi du code par e-mail :', error);
        }
      } else if (this.selectedChannel === 'WhatsApp') {
        const requestData = {
          email: 0,
          value: this.loggedInUser.whatsapp,
        };

        try {
          // Effectuez une demande pour renvoyer un nouveau code par WhatsApp
          const response = await axios.post('/mpme/send-otp', requestData);
          console.log('response',response);
          if (response.data.status === 'success') {
            // Succès, informez l'utilisateur que le nouveau code a été envoyé
            alert('Un nouveau code a été envoyé à votre numéro WhatsApp.');
          } else {
            // Erreur, affichez un message d'erreur
            alert('Une erreur s\'est produite lors de l\'envoi du nouveau code.');
          }
        } catch (error) {
          console.error('Erreur lors de la demande de renvoi du code par WhatsApp :', error);
        }
      }
    },
    formatPhoneNumber(number) {
      // Assurez-vous que le numéro a au moins 10 caractères
      if (number.length >= 10) {
        // Extraire les deux premiers chiffres
        const firstDigits = number.substr(0, 2);
        // Extraire les 4 derniers chiffres
        const lastDigits = number.substr(-4);
        // Répéter le caractère * pour les chiffres du milieu
        const middleDigits = '*'.repeat(number.length - 6);
        // Concaténer les parties du numéro
        const formattedNumber = `${firstDigits} ${middleDigits} ${lastDigits}`;
        return formattedNumber;
      }
      // Si le numéro est trop court, retourner tel quel
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

.form-container {
  width: 400px;
  border-radius: 0.75rem;
  background-color: white;
  padding: 2rem;
  color: black;
  max-height: 550px;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
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
</style>