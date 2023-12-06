<template>
  <Loading v-if="loading" style="z-index: index 99999;"></Loading>
  <Modal :revele="revele" :toggleModale="toggleModale"></Modal>

  <div>
    <div class=" general" data-aos="zoom-out"
      data-aos-delay="100">
      <div class="form-container">
        <p class="title">Inscription</p>
        <p class="text-center">Créez votre compte et enregistrez votre entreprise en quelques étapes seulement </p>
        <p class="text-center">Voulez-vous vérifier l'existence de votre entreprise chez nous ? <span class="verification"
            @click="isOpen = true">Cliquez ici</span> .</p>
        <small class="text-center">{{ error }}</small>
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
                <MazInput v-model="password" type="password" color="secondary" />
              </div>
              <small v-if="passwordTouched || v$.password.$error">{{ v$.password.$errors[0].$message }}</small>



            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="password">Confirmé le Mot de passe <span class="text-danger">*</span></label>
                <MazInput v-model="confirmer_password" type="password" color="secondary" />
              </div>
              <small v-if="v$.confirmer_password.$error">{{ v$.confirmer_password.$errors[0].$message }}</small>
              <small v-if="!validatePasswordsMatch()">Les mots de passe ne correspondent pas.</small>


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
                <MazSelect v-model="region" color="secondary" :options="regionOptions" v-slot="{ option }">
                  <div class="flex items-center"
                    style="padding-top: 0.5rem; padding-bottom: 0.5rem; width: 100%; gap: 1rem"
                    @click="handleOptionClick(option)">

                    {{ option.label }}

                  </div>

                </MazSelect>
              </div>
              <small v-if="v$.region.$error">{{ v$.region.$errors[0].$message }}</small>

            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="sous_prefecture">Préfecture <span class="text-danger">*</span></label>
                <MazSelect v-model="prefecture" color="secondary" :options="prefectureOptions"  v-slot="{ option }"  search :disabled="isPrefectureDisabled"  >
                  <div
                      class="flex items-center"
                      style="
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        width: 100%;
                        gap: 1rem;
                      "
                      @click="handleOptionPrefecture(option)"
                    >
                      {{ option.label }}
                    </div>
                  
                   </MazSelect>
              </div>
              <small v-if="v$.prefecture.$error">{{ v$.prefecture.$errors[0].$message }}</small>
            </div>

            <div class="col">
              <div class="input-groupe">
                <label for="sous_prefecture">Commune <span class="text-danger">*</span></label>
                <MazSelect v-model="sous_prefecture" color="secondary" :options="sous_prefectureOptions"    search :disabled="isCommuneDisabled" /> 
              </div>
              <small v-if="v$.sous_prefecture.$error">{{ v$.sous_prefecture.$errors[0].$message }}</small>
            </div>
           
          </div>

          <div class="row mb-3 mt-3 content-group">
           
            <div class="col">
              <div class="input-groupe">
                <label for="prenom">Liste des Sous Secteur Activités <span class="text-danger">*</span></label>
                <v-select v-model="selectedSousSecteurs" :items=SousSecteurActiviteOptions multiple persistent-hint
                  item-title="state" item-value="abbr"></v-select>
              </div>
              <small v-if="v$.selectedSousSecteurs.$error">{{ v$.selectedSousSecteurs.$errors[0].$message }}</small>
            </div>
          </div>

          <div class="btn">
            <button class="sign" @click.prevent="submit">S'enregistrer</button>
            <p class="signin">Vous avez déjà un compte ? <span @click="$router.push({ path: '/connexion-mpme', })">Se
                connecter</span> </p>
          </div>


        </form>
      </div>
    </div>

  </div>

  <MazDialog v-if="isOpen" v-model="isOpen" width="600px" max-height="revert" padding="0 1.5rem 1.5rem"
    title="Vérifiez votre entreprise" z-index="100">
    <div>
     

      <div id="uploadArea" class="upload-area">
        <!-- Header -->
        <div class="upload-area__header">
          <h1 class="upload-area__title">Entrez votre numéro NIF ou RCCM pour vérifier l'existence de votre entreprise
            chez nous</h1>
            <small v-if="errorMessage">
  {{ errorMessage }}
</small>
        </div>

        <div id="dropZoon" class="upload-area__drop-zoon drop-zoon">
          <div class="input-group">
            <label for="username">Numero NIF <span class="text-danger">*</span></label>
            <input type="text" name="nif" id="nif" placeholder="" v-model="nif">
          </div>
          <!-- <small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}}</small> -->

          <div class="input-group">
            <label for="username">Numero RCCM <span class="text-danger">*</span></label>
            <input type="text" name="rccm" id="rccm" placeholder="" v-model="rccm">
          </div>
          <!-- <small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}}</small> -->

          <button class="sign" @click.prevent="verifier">Verifier</button>
        </div>
        <!-- End Drop Zoon -->


      </div>
    </div>

  </MazDialog>


  <MazDialog v-model="noentreprise" title="Entreprise non inscrite">
    <p>
      Votre entreprise n'est pas enregistrée chez nous. Nous vous invitons à vous inscrire
      et à faire partie de notre communauté.

    </p>
    <template #footer="{ close }">

      <div class="supp" @click="close" style="background-color: blue; "> Ok</div>



    </template>

  </MazDialog>

  <MazDialog v-model="yesentreprise" title="Entreprise inscrite">
    <p>
      Votre entreprise est enregistrée chez nous,
      et vous êtes rattaché à un compte. Veuillez vous connecter.

    </p>
    <template #footer >

      <div class="supp" @click="espace" style="background-color: blue; "> Ok</div>



    </template>

  </MazDialog>

  <MazDialog v-model="yesentreprise1" title="Entreprise inscrite">
    <p>
      Votre entreprise est enregistrée chez nous, mais vous n'êtes pas rattaché à un compte.
      Veuillez vous inscrire et faire partie de notre communauté.

    </p>
    <template #footer="{ close }">

      <div class="supp" @click="close" style="background-color: blue; "> Ok</div>



    </template>

  </MazDialog>
</template>

<script>
;

import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import Modal from '../../components/Public/other/modal.vue'
import useVuelidate from '@vuelidate/core';
import MazDialog from 'maz-ui/components/MazDialog'
import Loading from '../../components/Public/other/preloader.vue';


import { require, lgmin, lgmax } from '@/functions/rules';

import axios from '@/lib/axiosConfig.js'

export default {
  name: 'DNPMECLSignUserMpme',
  components: {
    MazPhoneNumberInput, Modal, MazDialog, Loading
  },
computed:{
  isPrefectureDisabled() {
      return !this.region;
    },
    isCommuneDisabled() {
      return !this.prefecture;
    }, 

},
  data() {
    return {
      isOpen: true,
      noentreprise: false,
      yesentreprise: false,
      yesentreprise1: false,
      loading: false,
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
      prefecture: '',
      error: '',
      errorMessage:'',

      nif: '',
      rccm: '',

      regionOptions: [],
      prefectureOptions: [],
      sous_prefectureOptions: [],
      sortedCountryOptions: [],
      v$: useVuelidate(),
      results: null,
      revele: false,
      passwordTouched: false,
      selectedSousSecteurs: [], // Pour stocker les sous-secteurs sélectionnés
      SousSecteurActiviteOptions: [],
      identifiant: '',
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
    prefecture: {
      require,
    },
    selectedSousSecteurs: {
      require,
    },

  },

  async mounted() {
   await this.fetchCountryOptions();
   await this.fetchRegionOptions();
   await this.fetchSousSecteurActiviteOptions();
    // this.fetchPrefectureOptions(),
    //   this.fetchSousPrefectureOptions()
  },

  methods: {

    validatePasswordsMatch() {
      return this.password === this.confirmer_password;
    },
    async fetchSousSecteurActiviteOptions() {
      try {
        await this.$store.dispatch('fetchSousSecteurOptions'); // Remplacez par l'action de votre store
        this.SousSecteurActiviteOptions = this.$store.getters['getSousSecteurOptions'].map(option => {
          // console.log('option',option);
          return {
            state: option.label,
            abbr: option.value
          }
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error.message);
      }
    },

    async submit() {

      this.v$.$touch()
      this.error = ''
      if (this.v$.$errors.length == 0) {
        this.loading = true
        
        if (this.identifiant) {
         
          let DataMpme2 = {
            email: this.email,
            password: this.password,
            password_confirmation: this.confirmer_password,
            Nom: this.nom,
            Prenoms: this.prenom,
            Whatsapp: this.phoneNumber,
            Identifiant: this.identifiant || null,
            CodePartenaire:null,


       }
       console.log('eeedata222', DataMpme2);
          try {
          
            const response = await axios.post('/register/system-user', DataMpme2 
        //     , {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //     "Content-Type": "application/json",
        //   },
        // }
        );
            console.log('response.sousprefecture33', response);
            if (response.data.status === "success") {
              this.loading = false

              this.revele = !this.revele;
              if (this.revele) {
                document.body.classList.add('no-scroll');
              } else {
                document.body.classList.add('scroll');
              }
             
            } else {
              this.loading = false
              this.$router.push({ name: 'NotFound' }); 
            }

          } catch (error) {
            this.loading = false
            console.error('Erreur post:', error);
            this.$router.push({ name: 'NotFound' }); 
          }

        } else {


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
            if (response.data.status === 'success') {
                this.loading = false
              this.revele = !this.revele;
              if (this.revele) {
                document.body.classList.add('no-scroll');
              } else {
                document.body.classList.add('scroll');
              }
            } else if(response.data.message.email) {

              console.log('response', response.data.message.email);
              this.loading = false
              return this.error = "L'adresse e-mail existe déjà dans notre système. Veuillez vous connecter avec cette adresse."
            
            }else{

              this.$router.push({ name: 'NotFound' }); 
            }

          } catch (error) {
            console.error('Erreur post:', error);
            this.loading = false
            this.$router.push({ name: 'NotFound' }); 
          }

        }

      } else {
        console.log('pas bon', this.v$.$errors);
        this.loading = false




      }
    },
    async verifier() {
      this.errorMessage = ""
      if (this.nif == '' && this.rccm == '') {

    this.errorMessage = "Au moins un des champs NIF ou RCCM est obligatoire.";
     return;
  }else{

    
    this.loading = true

let DataMpme = {
  nif: this.nif,
  rccm: this.rccm,

}
console.log('eeedata', DataMpme);
try {
  const response = await axios.get('/check-mpme/bd-mpme-exist', { params: DataMpme });
  console.log('response.sousprefecture', response);
  if (response.data.data.user_exist === true) {

    this.isOpen = false
    this.loading = false
    this.yesentreprise = true

  } else if ((response.data.data.user_exist === false)) {
    this.identifiant = response.data.data.CodeMpme
    console.log('azzerr', this.identifiant);
    this.isOpen = false
    this.loading = false
    this.yesentreprise1 = true
  }
} catch (error) {
  console.error('Erreur post:', error);
  error.response.data
  this.loading = false
  this.isOpen = false
  this.noentreprise = true

}
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
        // console.log('Options des pays:', options);
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
        this.regionOptions = options;
        // Affecter les options à votre propriété sortedCountryOptions
      } catch (error) {
        console.error('Erreur lors de la récupération des options des pays :', error);
      }
    },
    async fetchPrefectureOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
        await this.$store.dispatch('fetchPrefectureOptions');
        const options = JSON.parse(JSON.stringify(this.$store.getters['getprefectureOptions'])); // Accéder aux options des pays via le getter
        console.log('Options des Prefecture:', options);
        // this.prefectureOptions = options; 
        // Affecter les options à votre propriété sortedCountryOptions
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

    async fetchLocalite(code, localite) {
      try {
        const response = await axios.get("/localites/children-by-code", {
          params: { code: code, type_localite: localite },
        });
        return response.data.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des options des response :", error);
      }
    },

    async handleOptionClick(option) {
      this.loading = true;

      try {
        const localiteData = await this.fetchLocalite(option.value, "REGION");
        console.log("Données de localité :", localiteData.prefectures);
        const options = localiteData.prefectures.map((prefecture) => ({
          label: prefecture.NomPrefecture,
          value: prefecture.CodePrefecture,
          code: prefecture.CodeRegion,
        }));
        this.prefectureOptions = options;
        this.loading = false;
      } catch (error) {
        console.error("Erreur lors de la récupération des données de localité :", error);
      }
    },

    async handleOptionPrefecture(option) {
      this.loading = true;

      try {
        const localiteData = await this.fetchLocalite(option.value, "PREFECTURE");
      
        console.log('prefecture',this.option);
        console.log("Données de localité :", localiteData.sous_prefectures);
        const options = localiteData.sous_prefectures.map((sous_prefecture) => ({
          label: sous_prefecture.NomSousPrefecture,
          value: sous_prefecture.CodeSousPrefecture,
          code: sous_prefecture.CodePrefecture,
        }));
         this.sous_prefectureOptions = options;
        this.loading = false;
      } catch (error) {
        console.error("Erreur lors de la récupération des données de localité :", error);
      }
    },

 

    espace() {
      this.isOpen = false;
      this.$router.push({ path: "/connexion-mpme" });
    },
  

  },
  created() {
    // Appeler la méthode pour obtenir les options de l'API lors de la création du composant
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
  flex-direction: column;
    align-items: center;
    justify-content: center;
}

.form-container {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  border-radius: 0.375rem;
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

.scroll {
  overflow: auto;
}

@media screen and (max-width: 768px) {
  .general {

padding:  5px;
margin-top: 80px;
}

  .form-container {

    /* width: 700px; */
    max-width: 100%;
    padding: 10px;
  }

  .content-group {
    display: flex;
    flex-direction: column;
  }

  .upload-area__drop-zoon{

    padding: 10px !important;
  }

}

@media screen and (max-width: 550px) {

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

}

.upload-area {
  width: 100%;
  background-color: rgb(255, 255, 255);
  /* border: 2px solid var(--color-secondary); */
  border-radius: 24px;
  padding: 10px;
  text-align: center;
}

.upload-area__title {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.3125rem;
}

.upload-area__paragraph {
  font-size: 0.9375rem;
  color: rgb(196, 195, 196);
  margin-top: 0;
}

.upload-area__tooltip {
  position: relative;
  color: var(--color-secondary);
  cursor: pointer;
  transition: color 300ms ease-in-out;
}

.upload-area__tooltip:hover {
  color: var(--clr-blue);
}

.upload-area__tooltip-data {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -125%);
  min-width: max-content;
  background-color: rgb(255, 255, 255);
  color: rgb(63, 134, 255);
  border: 1px solid var(--color-secondary);
  padding: 0.625rem 1.25rem;
  font-weight: 500;
  opacity: 0;
  visibility: hidden;
  transition: none 300ms ease-in-out;
  transition-property: opacity, visibility;
}

.upload-area__tooltip:hover .upload-area__tooltip-data {
  opacity: 1;
  visibility: visible;
}

/* Drop Zoon */
.upload-area__drop-zoon {
  position: relative;
  /* height: 11.25rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px dashed var(--color-secondary);
  border-radius: 15px;
  margin-top: 15Px;
  transition: border-color 300ms ease-in-out;
  padding: 10px 34px;
}

.verification {
  color: var(--color-primary);
  font-weight: 700;
}

.verification:hover {
  color: var(--color-secondary);
  cursor: pointer;

}</style>
