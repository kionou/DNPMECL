<template>
  <Modal :revele="revele" :toggleModale="toggleModale"></Modal>

  <div>
    <div class="container-fluid  d-flex justify-content-center align-items-center general" data-aos="zoom-out"
      data-aos-delay="100">
      <div class="form-container">
        <p class="title">Inscription</p>
        <p class="text-center">Créez votre compte et enregistrez votre entreprise en quelques étapes seulement </p>
        <small class="text-center">{{error}}</small>
        <form class="form">
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="email">Adresse Email<span class="text-danger">*</span></label>
                <input type="email" name="email" id="email" placeholder="" v-model="email">
              </div>
              <small v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</small>

            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="tel">Numéro Téléphonique <span class="text-danger">*</span></label>
                <MazPhoneNumberInput v-model="phoneNumber" show-code-on-list color="secondary" defaultCountryCode="GN"
                  :ignored-countries="['AC']" @update="results = $event" :success="results?.isValid" />

              </div>
              <small v-if="v$.phoneNumber.$error">{{ v$.phoneNumber.$errors[0].$message }}</small>

            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="password">Mot de passe <span class="text-danger">*</span></label>
                <MazInput v-model="password" type="password" color="secondary"  />
              </div>
              <small v-if=" passwordTouched || v$.password.$error ">{{ v$.password.$errors[0].$message }}</small>
             


            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="password">Confirmé le Mot de passe <span class="text-danger">*</span></label>
                <MazInput v-model="confirmer_password" type="password" color="secondary" />
              </div>
              <small v-if="v$.confirmer_password.$error">{{ v$.confirmer_password.$errors[0].$message }}</small>
              <small v-if="!validatePasswordsMatch()" >Les mots de passe ne correspondent pas.</small>
             

            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="nom">Nom <span class="text-danger">*</span></label>
                <input type="text" name="nom" id="nom" placeholder="" v-model="nom">
              </div>
              <small v-if="v$.nom.$error">{{ v$.nom.$errors[0].$message }}</small>

            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="prenom">Prenom <span class="text-danger">*</span></label>
                <input type="text" name="prenom" id="prenom" placeholder="" v-model="prenom">
              </div>
              <small v-if="v$.prenom.$error">{{ v$.prenom.$errors[0].$message }}</small>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="nationnalite">Pays Dirigeant<span class="text-danger">*</span></label>
                <MazSelect v-model="pays" :options="sortedCountryOptions" v-slot="{ option }" search color="secondary">
                  <div class="flex items-center"
                    style="padding-top: 0.5rem; padding-bottom: 0.5rem; width: 100%; gap: 1rem">
                    <MazAvatar size="0.8rem" :src="option.flag" />
                    <strong>
                      {{ option.label }}
                    </strong>
                  </div>
                </MazSelect>
              </div>
              <small v-if="v$.pays.$error">{{ v$.pays.$errors[0].$message }}</small>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="region">Région <span class="text-danger">*</span></label>
                <MazSelect v-model="region" color="secondary" :options="regionOptions" />
              </div>
              <small v-if="v$.region.$error">{{ v$.region.$errors[0].$message }}</small>

            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="sous_prefecture">Sous-préfecture <span class="text-danger">*</span></label>
                <MazSelect v-model="sous_prefecture" color="secondary" :options="sous_prefectureOptions" />
              </div>
              <small v-if="v$.sous_prefecture.$error">{{ v$.sous_prefecture.$errors[0].$message }}</small>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="prenom">Liste des Sous Secteur Activités <span class="text-danger">*</span></label>
                <!-- <input type="text" name="sous_secteur" id="sous_secteur" placeholder="" v-model="preferencesInput"> -->
                <v-select v-model="selectedSousSecteurs" :items=SousSecteurActiviteOptions multiple persistent-hint></v-select>
              </div>
              <small v-if="v$.selectedSousSecteurs.$error">{{ v$.selectedSousSecteurs.$errors[0].$message }}</small>
            </div>
          </div>

          <div class="btn">
            <button class="sign" @click.prevent="submit">S'enregistrer</button>
            <p class="signin">Vous avez déjà un compte ? <span @click="$router.push({ path: '/login_user_mpme', })">Se
                connecter</span> </p>
          </div>


        </form>
      </div>
    </div>

  </div>
</template>

<script>
;

import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import Modal from '../../components/Public/other/modal.vue'
import useVuelidate from '@vuelidate/core';
      
import { require, lgmin, lgmax   } from '@/functions/rules';

import axios from '@/lib/axiosConfig.js'

export default {
  name: 'DNPMECLSignUserMpme',
  components: {
     MazPhoneNumberInput, Modal
  }, 

  data() {
    return {
      email: '',
      phoneNumber: '',
      password: '',
      confirmer_password: '',
      nom: '',
      prenom: '',
      pays: '',
      region: '',
      sous_secteur: '',
      sous_prefecture: '',
      error:'',
      regionOptions: [],
      prefectureOptions: [],
      sous_prefectureOptions: [],
      sortedCountryOptions: [],
     v$:useVuelidate(), 
      results: null,
      revele: false,
      passwordTouched: false,
      selectedSousSecteurs: [], // Pour stocker les sous-secteurs sélectionnés
      SousSecteurActiviteOptions: [],
    };
    
  },
 
  validations: {
    email: {
      require,   
    },
    phoneNumber: {
      require,
    },
    password: {
      require,
      lgmin: lgmin(8),
      lgmax: lgmax(20),
    },
    confirmer_password: {
      require,
      lgmin: lgmin(8),
      lgmax: lgmax(20),
    },
    nom: {
      require,
      lgmin: lgmin(2),
      lgmax: lgmax(20),
    },
    prenom: {
      require,
      lgmin: lgmin(2),
      lgmax: lgmax(20),
    },
    pays: {
      require,
    },
    region: {
      require,
    },
    sous_prefecture: {
      require,
    },
    selectedSousSecteurs: {
      require,
    },
 
  },

  async mounted() {
    this.fetchCountryOptions();
    this.fetchRegionOptions();
    this.fetchPrefectureOptions(),
    this.fetchSousPrefectureOptions()
  },

  methods: {
    validatePasswordsMatch() {
      return this.password === this.confirmer_password;
    },
    async fetchSousSecteurActiviteOptions() {
      try {
        await this.$store.dispatch('fetchSousSecteurOptions'); // Remplacez par l'action de votre store
        this.SousSecteurActiviteOptions = this.$store.getters['getSousSecteurOptions'].map(option => {
          console.log('option',option);
          return option.label;
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error.message);
      }
    },

    async submit() {
       
        this.v$.$touch()
        this.error = ''
 if (this.v$.$errors.length == 0 ) {
          let DataMpme = {
          Region: this.region,
          Sousprefecture: this.sous_prefecture,
          Nom: this.nom,
          Prenoms: this.prenom,
          NumeroWhatsApp: this.phoneNumber,
          ListeSousSecteurActivite: JSON.parse(JSON.stringify(this.selectedSousSecteurs)),
          PaysDirigeant: this.pays,
          AdresseEmail: this.email,
          password: this.password,
          password_confirmation: this.confirmer_password,
        }
        console.log('eeedata', DataMpme);
          try {
          const response = await axios.post('/register/mpme', DataMpme);
          console.log('response.sousprefecture', response);
          if (response.data.message.email) {
            console.log('response',response.data.message.email);
            return this.error = "L'adresse e-mail existe déjà dans notre système. Veuillez vous connecter avec cette adresse."
            
          } else {
            this.revele = !this.revele;
          if (this.revele) {
            document.body.classList.add('no-scroll');
          } else {
            document.body.classList.add('scroll');
          }
          }
          
        } catch (error) {
          console.error('Erreur post:', error);
        }
}else{
  console.log('pas bon' , this.v$.$errors );



}
    },

    // toggleModale: function () {
    //   this.revele = !this.revele;
    //   if (this.revele) {
    //     document.body.classList.add('no-scroll');
    //   } else {
    //     document.body.classList.remove('no-scroll');
    //   }
    // },
    onPhoneNumberUpdate(updatedResult) {
      this.results = updatedResult;
    },
    async fetchCountryOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
        await this.$store.dispatch('fetchCountries');
        const options = JSON.parse(JSON.stringify(this.$store.getters['getCountryOptions'])); // Accéder aux options des pays via le getter
        console.log('Options des pays:', options);
        this.sortedCountryOptions = options; // Affecter les options à votre propriété sortedCountryOptions
      } catch (error) {
        console.error('Erreur lors de la récupération des options des pays :', error);
      }
    },
    async fetchRegionOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
        await this.$store.dispatch('fetchRegionOptions');
        const options = JSON.parse(JSON.stringify(this.$store.getters['getRegionOptions'])); // Accéder aux options des pays via le getter
        console.log('Options desregions:', options);
        this.regionOptions = options; // Affecter les options à votre propriété sortedCountryOptions
      } catch (error) {
        console.error('Erreur lors de la récupération des options des pays :', error);
      }
    },
    async fetchPrefectureOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
        await this.$store.dispatch('fetchPrefectureOptions');
        const options = JSON.parse(JSON.stringify(this.$store.getters['getprefectureOptions'])); // Accéder aux options des pays via le getter
        console.log('Options des Prefecture:', options);
        this.prefectureOptions = options; // Affecter les options à votre propriété sortedCountryOptions
      } catch (error) {
        console.error('Erreur lors de la récupération des options des prefecture :', error);
      }
    },
    

    async fetchSousPrefectureOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
        await this.$store.dispatch('fetchSous_PrefectureOptions');
        const options = JSON.parse(JSON.stringify(this.$store.getters['getSousprefectureOptions'])); // Accéder aux options des pays via le getter
        console.log('Options des sous Prefecture:', options);
        this.sous_prefectureOptions = options; // Affecter les options à votre propriété sortedCountryOptions
      } catch (error) {
        console.error('Erreur lors de la récupération des options des sous prefecture :', error);
      }
    },

  },
  created() {
    this.fetchSousSecteurActiviteOptions(); // Appeler la méthode pour obtenir les options de l'API lors de la création du composant
  },
};
</script>

<style lang="css" scoped >
small {
  color: #f8001b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.general {

  padding: 20px 60px 60px;
}

.form-container {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  /* border-radius: 0.75rem; */
  background-color: white;
  padding: 2rem;
  color: black;
  /* max-height: 550px; */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
  /* border: 1px solid red; */

}

.form .content {

  border: 1px solid var(--color-secondary);
  margin: 10px 0;
  padding: 10px;
  border-radius: 6px;
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

.input-groupe {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-groupe label {
  display: block;
  color: #000;
  margin-bottom: 4px;
  margin-left: 7px;
}

.titre {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
  font-size: 12px;
}

.input-groupe input,
.form-select,
textarea {
  width: 100%;
  border-radius: 0.5rem !important;
  border: 2px solid #e5e7eb;
  outline: 0;
  padding: 14px;
  color: rgb(3, 3, 5);
}

.input-groupe input:focus,
.input-groupe textarea:focus {
  border-color: var(--color-primary);
}

.form-select:focus {
  border-color: var(--color-primary);
  outline: 0;
  box-shadow: 0 0 0 0 rgba(101, 113, 255, .25);
}


.btn {
  display: flex;
  flex-direction: column;
  align-items: center;

}



.signup a:hover {
  text-decoration: underline var(--color-primary);
}

.sign {
  display: block;
  width: 300px;
  background-color: var(--color-secondary);
  padding: 0.75rem;
  text-align: center;
  color: black;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  margin-top: 30px;
}

.signup {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
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
.scroll{
  overflow: auto;
}

@media screen and (max-width: 768px) {

  .form-container {

    width: 700px;
    max-width: 100%;
  }

  .content-group {
    display: flex;
    flex-direction: column;
  }


}

@media screen and (max-width: 550px) {
  .general {

    padding: 15px 10px;
  }

  .sign {

    width: 200px;

  }

  .signin {
    font-size: 12px;

  }

}

.sign:hover {

  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
  background-color: white;

}</style>
