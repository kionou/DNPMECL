<template>
  <div class="progress-bar">
  <div class="progress" :style="{ width: progressBarWidth }"></div>
</div>
  <div class="container-fluid" data-aos="zoom-out" data-aos-delay="100">
    <p class="title">Enregistrez votre PME dès maintenant</p>
    <p class="text-center">Un seul formulaire pour concrétiser votre projet entrepreneurial et enregistrer votre PME en toute simplicité.</p>

    <form class="form">
      <!-- Étape 1 -->
      <div v-if="currentStep === 1">
        <div class="form-container">
          <p class="titre">INFORMATIONS GENERALES - Étape 1</p>

          <div class="row mb-3 mt-3 content-group" >
                      <div class="col">
                      <div class="input-groupe">
                          <label for="Region">Nom <span class="text-danger">*</span></label>
                          <input type="text" name="Commune" id="Commune" placeholder="" v-model="nom">
                          
                      </div>
                     
                  </div>
                 
                  <div class="col">
                      <div class="input-groupe">
                          <label for="Commune">Sigle <span class="text-danger">*</span></label>
                          <input type="text" name="Commune" id="Commune" placeholder="" v-model="sigle">
                      </div>
                     

                  </div>
                  <div class="col">
                      <div class="input-groupe">
                          <label for="ville">Email <span class="text-danger">*</span></label>
                          <input type="text" name="Ville" id="ville" placeholder="" v-model="email">
                      </div>
                   
                  </div>
                 
              </div>

          <div class="btnForm py-3 flex items-center justify-content-end">
            <button class="btnLogin" @click.prevent="nextStep">Suivant</button>
          </div>
        </div>
      </div>

      <!-- Étape 2 -->
      <div v-if="currentStep === 2">
        <div class="form-container">
          <p class="titre">MOT DE PASSE - Étape 2</p>
          <div class="row mb-3 mt-3 content-group">
          
          <div class="col">
            <div class="input-groupe">
              <label for="PersonnelTemporaireFemme">Personnel Temporaire Femme <span
                  class="text-danger">*</span></label>
              <input type="text" name="PersonnelTemporaireFemme" id="PersonnelTemporaireFemme" placeholder=""
                v-model="pers_temp_femm">
            </div>
          </div>
          <div class="col">
            <div class="input-groupe">
              <label for="PersonnelTemporaireHomme">Personnel Temporaire Homme <span
                  class="text-danger">*</span></label>
              <input type="text" name="PersonnelTemporaireHomme" id="PersonnelTemporaireHomme" placeholder=""
                v-model="pers_temp_homm">
            </div>
          </div>
          <div class="col">
            <div class="input-groupe">
              <label for="ChiffreAffaire1">Chiffre Affaire 1 <span class="text-danger">*</span></label>
              <input type="text" name="ChiffreAffaire1" id="ChiffreAffaire1" placeholder=""
                v-model="ch_aff_1">
            </div>
          </div>
        </div>

          <div class="btnForm py-3 flex items-center justify-content-between">
            <button class="btnLogin" @click.prevent="prevStep">Précédent</button>
            <button class="btnLogin" @click.prevent="nextStep">Suivant</button>
          </div>
        </div>
      </div>

      <!-- Étape 3 -->
      <div v-if="currentStep === 3">
        <div class="form-container">
          <p class="titre">RÉSUMÉ ET SOUMISSION - Étape 3</p>

          <div class="row mb-3 mt-3 content-group">
  <div class="col">
    <div class="input-groupe">
      <label for="LienGoogleMapMpme">Lien Google Map Mpme <span class="text-danger">*</span></label>
      <input v-model="lienGoogleMapMpme" type="text" name="LienGoogleMapMpme" id="LienGoogleMapMpme" placeholder="">
    </div>
  </div>

  <div class="col">
    <div class="input-groupe">
      <label for="LatitudeMpme">Latitude Mpme<span class="text-danger">*</span></label>
      <input v-model="latitudeMpme" type="text" name="LatitudeMpme" id="LatitudeMpme" placeholder="">
    </div>
  </div>
  
  <div class="col">
    <div class="input-groupe">
      <label for="LongitudeMpme">Longitude Mpme<span class="text-danger">*</span></label>
      <input v-model="longitudeMpme" type="text" name="LongitudeMpme" id="LongitudeMpme" placeholder="">
    </div>
  </div>
</div>

          <div class="btnForm py-3 flex items-center justify-content-between">
            <button class="btnLogin" @click.prevent="prevStep">Précédent</button>
            <button class="btnLogin" @click.prevent="submit">Connecter</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { require, lgmin, lgmax, ValidEmail } from '@/functions/rules';
import axios from '@/lib/axiosConfig.js'

export default {
  name: 'Componentlogin',
  computed: {
   
    loggedInUser() {
      return this.$store.getters['user/loggedInUser'];
    },
    progressBarWidth() {
    const stepPercentage = (this.currentStep - 1) / (this.totalSteps - 1) * 100;
    return `${stepPercentage}%`;
  },

  },
  data() {
    return {
      v$: useVuelidate(),
      currentStep: 1,
      userData:''  ,
      email:'',
      nom:'',
      sigle:''
    };
  },

  methods: {
    createMpmeData() {
    return {
      NomMpme: this.nom,
      SigleMpme: this.sigle,
      AdresseEmail: this.email
    }
  },
 async   nextStep() {
  if (this.currentStep === 1) {
      const mpmeData = this.createMpmeData();
      console.log('mpmeData',mpmeData);
      const success = await this.enregistrerMpmeDonnees(mpmeData);
      console.log('success',success);

      if (success) {
        this.currentStep++;
      } else {
        console.error('Erreur lors de l\'enregistrement des données pour le MPME');
      }

    } else if (this.currentStep === 2) {
      this.currentStep++;
    }
  

    },

    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },

    submit() {
     
    },
    async fetchgetOneMpme() {
      try {
      const userId = this.loggedInUser.user.Entreprises;
    const response = await axios.get(`/mpme/${userId}`);
   this.userData = response.data.data; 
   this.email = this.userData.AdresseEmail;
   this.nom = this.userData.NomMpme;
   this.sigle = this.userData.SigleMpme;

    console.log('UserData:', this.userData.AdresseEmail);
      } catch (error) {
        console.error('Erreur lors de la récupération des options des sous prefecture :', error);
      }
    },




    async enregistrerMpmeDonnees(mpmeData) {
      try {
    const userId = this.loggedInUser.user.Entreprises;
    const response = await axios.put(`/mpme/${userId}`, mpmeData);
    console.log("responseee",response);
    
    if (response.status === 200) {
      console.log('Données MPME mises à jour avec succès !');
      return true;
    } else {
      console.error('Erreur lors de la mise à jour des données MPME');
      return false;
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour des données MPME :', error);
    return false;
  }
  },
  },
  mounted() {
    console.log("data",this.loggedInUser.user.Entreprises);
    this.fetchgetOneMpme()
   
  },
};
</script>

<style lang="css" scoped>
.form-container {
  /* width: 700px; */
  max-width: 1140px;
  margin: 0 auto;
  /* border-radius: 0.75rem; */
  background-color: white;
  padding: 1rem;
  color: black;
  /* max-height: 550px; */
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);
  /* border: 1px solid red; */
}
.form .content{

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

.input-groupe label  {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}
.titre {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
  font-size: 12px;
}

.input-groupe input , .form-select {
  width: 100%;
  border-radius: 0.375rem !important;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  padding: 14px;
  color: rgb(3, 3, 5);
}

.input-groupe input:focus {
  border-color: var(--color-primary);
}
.form-select:focus {
  border-color: var(--color-primary);
  outline: 0;
  box-shadow: 0 0 0 0 rgba(101,113,255,.25);
}


.signup a:hover {
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

@media screen and (max-width: 768px) {

  .form-container {
 
      width: 700px;
max-width: 100%;
}
.content-group{
display: flex;
flex-direction: column;
}
}

.btnForm {

max-width: 1140px;
margin: 20px auto;
background-color: white;
padding: 1rem;
color: black;
box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);
}

.btnLogin {
padding: 1em 3em;
font-size: 12px;
font-weight: 500;
color: #000;
background-color: #F9D310;
border: none;
border-radius: 45px;

cursor: pointer;
outline: none;
}

.btnLogin:hover {
background-color: #fff;
border: 1px solid #F9D310 ;

}



.progress-bar {
  background-color: #e0e0e0;
  height: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.progress {
  background-color: #F9D310;
  height: 100%;
  border-radius: 5px;
  transition: width 0.3s ease;
}

</style>