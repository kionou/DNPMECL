<template>
    <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">demande de liste mpme</h1>
                  <nav aria-label="breadcrumb">
                     
                    <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="/">accueil</a></li>
                    <li class="breadcrumb-item"><a href="/partenaires/info-mpme">Dnpmecl</a></li>
                    <li class="breadcrumb-item active" aria-current="page">demande de liste mpme</li>
                    </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
       </div>
   <Loading v-if="loading"></Loading>
    <div>
        <div>
    <div class="container-fluid  d-flex justify-content-center align-items-center general" data-aos="zoom-out"
      data-aos-delay="100">
      <div class="form-container">
        <p class="title">Demande de la liste des MPME</p>
        <p class="text-center">
          Prêt à commencer votre démarche pour obtenir votre liste MPME ? Remplissez le formulaire ci-dessous 
          pour démarrer le processus avec nous !
        </p>
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
                <label for="structure">Nom de la Structure<span class="text-danger">*</span></label>
                <input type="text" name="structure" id="structure" placeholder="" v-model="structure">
              </div>
              <small v-if="v$.structure.$error">{{ v$.structure.$errors[0].$message }}</small>

            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="Libelle">Libelle <span class="text-danger">*</span></label>
                <input type="text" name="libelle" id="libelle" placeholder="" v-model="libelle">
              </div>
              <small v-if="v$.libelle.$error">{{ v$.libelle.$errors[0].$message }}</small>
             
             

            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="typedemande">Type de la Demande <span class="text-danger">*</span></label>
                <MazSelect v-model="typedemande" color="secondary" :options="DemandesOptions"/>
              </div>
              <small v-if="v$.typedemande.$error && !validateDemandeMatch()">{{ v$.typedemande.$errors[0].$message }}</small>
            <small v-else-if="validateDemandeMatch()">Le type sélectionné ne convient pas à votre demande</small>
           

            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="prenom">Liste des Secteurs Activités <span class="text-danger">*</span></label>
                <v-select v-model="selectedSecteurs" :items=SecteurActiviteOptions multiple persistent-hint  item-title="state"
                  item-value="abbr" ></v-select>
              </div>
              <small v-if="v$.selectedSecteurs.$error">{{ v$.selectedSecteurs.$errors[0].$message }}</small>
            </div>
          </div>

          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="Description">Description<span class="text-danger">*</span></label>
                <MazTextarea v-model="description" name="comment" id="comment" color="secondary" />
              </div>
              <small v-if="v$.description.$error">{{ v$.description.$errors[0].$message }}</small>
            </div>       
          </div>
          <div class="btn">
            <button class="sign" @click.prevent="submit">Soumettre</button>
           
          </div>
        </form>
      </div>
    </div>

  </div>
    </div>
    <MazDialog v-model="isOpen" noClose>
                <p>
                  Votre demande de  liste  MPME a été enregistrée avec succès. Vous allez bientôt
                   recevoir un e-mail contenant les étapes à suivre.
                </p>
                <template #footer="{ close }">

                    <div class="supp" @click="close" style="background-color: blue; "> OK</div>
                </template>
            </MazDialog>
</template>

<script>
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import useVuelidate from '@vuelidate/core';     
import { require, lgmin,  ValidEmail,   } from '@/functions/rules';
import axios from '@/lib/axiosConfig.js'
import MazDialog from 'maz-ui/components/MazDialog'
import Loading from '../../../components/Public/other/preloader.vue';

export default {
    name: 'DNPMECLInfoMpme',
  components: {
     MazPhoneNumberInput , MazDialog , Loading
  }, 

  data() {
    return {
      isOpen:false,
      loading:false,
      email: '',
      phoneNumber: '',
      structure:'',
      libelle:'',
      typedemande:'',
      description:'',
      error:'',
      DemandesOptions:[],
      selectedSecteurs: [], // Pour stocker les sous-secteurs sélectionnés
      SecteurActiviteOptions: [],
     v$:useVuelidate(), 
    };
    
  },
 
  validations: {
    email: {
      require,  
      ValidEmail, 
    },
    phoneNumber: {
      require,
    },
    structure: {
      require,
      lgmin: lgmin(2), 
    },
    libelle: {
      require,
      lgmin: lgmin(2),
    },
    typedemande: {
      require,
    },
    selectedSecteurs: {
      require,
    },
    description: {
      require,
      lgmin: lgmin(2),
    },
   
 
  },

  async mounted() {
    await this.fetchDemandesOptions()
    await this.fetchSecteurActiviteOptions()
    
 
  },

  methods: {
    onPhoneNumberUpdate(updatedResult) {
      this.results = updatedResult;
    },
    validateDemandeMatch() {

     return this.typedemande !== 'Demande de liste mpme' &&  this.typedemande !== ""
    },
    async fetchDemandesOptions() { 
      try {
        await this.$store.dispatch('fetchTypeDemandeData');
        const options = JSON.parse(JSON.stringify(this.$store.getters['getTypeDemandesData']));
        console.log('Options des deamde:', options);
        this.DemandesOptions = options; 
      } catch (error) {
        console.error('Erreur lors de la récupération des options des demande :', error);
      }
    },
    async fetchSecteurActiviteOptions() {
      try {
        await this.$store.dispatch('fetchSousSecteurOptions'); // Remplacez par l'action de votre store
        this.SecteurActiviteOptions = this.$store.getters['getSousSecteurOptions'].map(option => {
          return  { 
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
        if (this.v$.$errors.length == 0 ) {
          this.loading = true

            let DataMpme = {
            NomStructure: this.structure,
            Libelle: this.libelle,
            Description: this.description,
            AdresseEmail: this.email,
            Telephone: this.phoneNumber,
            TypeDemande: this.typedemande,
            SecteurActivite: JSON.parse(JSON.stringify(this.selectedSecteurs)).join('|'),
        }
        console.log('eeedata', DataMpme);
          try {
          const response = await axios.post('/gestion-des-demandes',  DataMpme);
          console.log('response.sousprefecture', response);
          if (response.data.status === 'success') {
            this.loading = false
            this.isOpen = true
            
          } else {
            this.loading = false
         
          }
          
        } catch (error) {
          console.error('Erreur post:', error);
        }
          
          
          
}else{
  console.log('pas bon' , this.v$.$errors );



}
    },

    
  
   

  },
  created() {
  
  },
};
</script>

<style lang="css" scoped>
/* debut banier */
.banner-area {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #266486;
    min-height: 250px;
    background-image: url('@/assets/img/banner/part1.jpg'); 
    box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 10%);
 
}
.banner-area:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, .45);
}
.breadcrumb-item , .breadcrumb-item a{
    color: #fff !important;
}
.banner-text {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    max-width: 1170px;
    margin: 0 auto;
    width: 100%;
    z-index: 1;
    /* -webkit-transform: translateY(-50%); */
    transform: translateY(-50%);
}
.banner-heading {
    text-align: center;
}
.banner-title {
    color: #fff;
    text-transform: uppercase;
    font-size: 58px;
    font-weight: 900;
}
.breadcrumb {
    padding: 0;
    background: none;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    color: #fff !important;
}

@media (max-width: 992px) {
    .banner-title {
    
    font-size: 40px;
    
}
}
@media (max-width: 768px) {

  .container{

    margin-top: 20px;
  }
    .banner-title {
    
    font-size: 20px !important;
    
}
}



/* fin banier */
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
.btn {
  display: flex;
  flex-direction: column;
  align-items: center;

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

.no-scroll {
  overflow: hidden;

}
.scroll{
  overflow: auto;
}

@media screen and (max-width: 768px) {

  .form-container {
    /* width: 700px; */
    max-width: 100%;
    padding: 10px;
  }

  .content-group {
    display: flex;
    flex-direction: column;
  }

  .title{
   
    font-size: 22px;
    /* line-height: 2rem; */
    
}

}

@media screen and (max-width: 550px) {
  .general {

    padding: 15px 10px;
  }

  .sign {

    width: 200px;

  }

}

.sign:hover {

  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
  background-color: white;

}

</style>