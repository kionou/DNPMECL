<template>
  <Loading v-if="loading"></Loading>
<div>
  <div class="general">
    <div class="titre">
        <h1>{{ offre.titre }}</h1>
    </div>
    <div class="image">
        <img src="@/assets/img/slide/slide11.jpg" alt="">
    </div>
    <div class="contenu">
        <p>{{ offre.description }}</p>
    </div>
    <div class="date">
        <p >Secteur concerné : <span>  {{obtenirValeursPourCles(sousSecteursLabel)}}</span> </p>
    </div>
    <div class="date">
        <p >Site Web : <a :href="offre.siteWeb">{{ offre.siteWeb }}</a> </p>
    </div>
    <div class="date">
        <p >Date de publication : <span>{{ offre.dateCreation }}</span> </p>
    </div>
    <div class="date">
        <p>Date de Fin : <span>{{ offre.dateCloture }}</span> </p>
    </div>
    <div class="btn_sign" v-if="offre.manage === 1">
<button class="sign" @click="hamdleSubmit(offre.CodeOffre)">CANDIDATER</button>

</div>
  </div>
  <MazDialog v-if="isOpen" v-model="isOpen" width="500px" max-height="revert"  padding="0 1.5rem 1.5rem">
<div>
<small> {{ error }}</small>

<div id="uploadArea" class="upload-area">
<!-- Header -->
<div class="upload-area__header">
  <h1 class="upload-area__title">Téléchargez votre fichier</h1>
  <p class="upload-area__paragraph">
    Le fichier doit être une image
    <strong class="upload-area__tooltip">
      comme
      <span class="upload-area__tooltip-data">{{ imagesTypes.join(', ') }}</span>
    </strong>
  </p>
</div>
<!-- End Header -->

<!-- Drop Zoon -->
<div id="dropZoon" class="upload-area__drop-zoon drop-zoon">
<div class="input-group">
<label for="username">Nom du document <span class="text-danger">*</span></label>
<input type="text" name="nom" id="nom" placeholder="" v-model="nom">
</div>
<small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}}</small>



<div class="input-group">
<label for="tel">Telecharger le ficher <span class="text-danger">*</span></label>
<input type="file" name="file" id="ficher" placeholder="" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"  ref="fileInput" @change="handleFileUpload"> 
</div>
<small v-if="v$.selectedFile.$error">{{v$.selectedFile.$errors[0].$message}}</small>

 

  <button class="sign" @click.prevent="submit">Envoyer</button>
</div>
<!-- End Drop Zoon -->


</div>
</div>

  </MazDialog>
  <MazDialog v-model="msgsuccess" >
    <p>
        Votre candidature a été envoyée avec succès. Merci.
    </p>
    <template #footer="{ close }">

      <div class="supp" @click="close" style="background-color: blue; "> Ok</div>

    </template>
  </MazDialog>
</div>
</template>

<script>
import axios from '@/lib/axiosConfig.js'
import useVuelidate from '@vuelidate/core';
import { require, lgmin, lgmax, ValidEmail  } from '@/functions/rules';
import Loading from '../../../components/Public/other/preloader.vue';
import MazDialog from 'maz-ui/components/MazDialog'

export default {
name: 'DNPMECLDetailOffre',
props:['id'],
components: {
Loading , MazDialog

},
computed: {

loggedInUser() {
return this.$store.getters['user/loggedInUser'];
},
},

data() {
    return {
        offre:'',
        isOpen:false,
        loading:true,
        msgsuccess:false,
        v$:useVuelidate(),
        selectedFile: null,
        imagesTypes: ['pdf', 'word', 'txt', 'excel' , 'powerpoint'],
        nom:'',
        idOffre:'',
        error:'',
        sousSecteursLabel: '',
        SousSecteurActiviteOptions:[],
    
    };
},
validations: {

     nom:{
         require,
         lgmin:lgmin(2),
      },
      selectedFile:{
        require,
      }  
    },

async   mounted() {
await this.fetchSousSecteurActiviteOptions()
await this.fetchgetOffreMpme()
    console.log(this.id);
  console.log("datadossiers", this.loggedInUser);
 
    
},

methods: {
  obtenirValeursPourCles(sousSecteurs) {
if (sousSecteurs && sousSecteurs.includes('|')) {
const sousSecteursArray = sousSecteurs.split('|');
const nomsSousSecteurs = sousSecteursArray.map((valeur) => {
const option = this.SousSecteurActiviteOptions.find((opt) => opt.value === valeur);
  return option ? option.label : valeur;
});
return nomsSousSecteurs.sort().join(' , ');
} else {
const option = this.SousSecteurActiviteOptions.find((opt) => opt.value === sousSecteurs);
return option ? option.label : sousSecteurs;
}
},
  async fetchSousSecteurActiviteOptions() {
  try {
    await this.$store.dispatch('fetchSousSecteurOptions'); 
    this.SousSecteurActiviteOptions = this.$store.getters['getSousSecteurOptions']
  } catch (error) {
    console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error.message);
  }
},

    async fetchgetOffreMpme() {
    try {
      const response = await axios.get('/offres', {
        headers: {
          Authorization: `Bearer ${this.loggedInUser.token}`,

        },});
        console.log('UserData:', response);

      if (response.data.status === 'success') {
          this.loading = false
          console.log('UserData:', response.data.data.data);
          this.offre = response.data.data.data.find(offre => offre.CodeOffre === this.id);
          const valeur = this.offre.liste_sous_secteurs;
          const option =  this.SousSecteurActiviteOptions.find((opt) => opt.value === valeur);
          this.sousSecteursLabel =  option ? option.label : valeur; 
          this.loading = false
        
      }  
    } catch (error) {
      console.error('Erreur lors de la récupération des options des sous prefecture :', error);
      if (error && error.response.data === 'Unauthorized' || error.response.data.status === 'error') {
                console.log('aut', error.response.data.status === 'error');
                await this.$store.dispatch('user/clearLoggedInUser');
                this.$router.push('/connexion-mpme');

            } else {
                this.formatValidationErrors(error.response.data.errors)
                this.loading = false
                return false;
            } 
    }
  },
  hamdleSubmit(id){
    this.idOffre = id
console.log(id);
this.isOpen = true


},
handleFileUpload() {
  this.selectedFile = this.$refs.fileInput.files[0];
  console.log( this.selectedFile);
},
async  submit(){
   this.v$.$touch()
if (this.v$.$errors.length == 0 ) {
    this.isOpen = false
 this.loading = true
  console.log('bonjour');
  const formData = new FormData();
  formData.append('document', this.selectedFile);
  formData.append('intitule', this.nom);
  formData.append('CodeOffre', this.idOffre);
  formData.append('CodeMpme', this.loggedInUser.id);
  console.log( formData);
  console.log( this.selectedFile ,this.nom ,this.idOffre , this.loggedInUser.id );


  try {
    const response = await axios.post('/candidatures', formData, {
      headers: {
        Authorization: `Bearer ${this.loggedInUser.token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Réponse du téléversement :', response);
    if (response.data.status === 'success') {
       this.msgsuccess = true
      this.isOpen = false

      
    }else{
      this.loading = false
      this.isOpen = true
      this.error = response.data.message
    }
  } catch (error) {
    console.error('Erreur lors du téléversement :', error);
    if (error && error.response.data === 'Unauthorized' || error.response.data.status === 'error') {
                console.log('aut', error.response.data.status === 'error');
                await this.$store.dispatch('user/clearLoggedInUser');
                this.$router.push('/connexion-mpme');

            } else {
                this.formatValidationErrors(error.response.data.errors)
                this.loading = false
                return false;
            }

  }    
    }else{
    
    
    }

},
},
};
</script>

<style lang="css" scoped>

.general{

/* border: 1px solid #ff0000; */
max-width: 1140px;
margin: 30px auto;
box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
padding-bottom: 15px;
/* height: 100vh; */

}

.titre{
/* border: 1px solid blue; */
text-align: center;
padding: 20px;

}
.titre h1{

font-weight: bolder;
font-family: ui-monospace;

}

.image{
/* border: 1px solid blue; */
width: 100%;
height: 500px;
padding: 0 10px;
}
.image img{
width: 100%;
height: 100%;

}

.contenu{

/* border: 1px solid red; */
padding: 10px;
text-align: justify;
font-size: 16px;
}

.contenu p{
font-weight: 400;

}

.date{
padding-left: 10px;

}
.date p{
font-weight: 700;

}


.sign {
display: block;
width: 127px;
background-color: var(--color-secondary);
padding: 0.75rem;
text-align: center;
color: black;
border: none;
border-radius: 0.2rem;
font-weight: 600;
margin-top: 20px !important;
}
.sign:hover{

border: 1px solid var(--color-secondary);
color: var(--color-secondary);
background-color: white;

}


.btn_sign{
/* border: 1px solid red; */
/* margin-top: 43px; */
width: 100%;
display: flex;
justify-content: flex-end;
padding-right: 10px;


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
.upload-area {
width: 100%;
background-color: rgb(255, 255, 255);
border: 2px solid var(--color-secondary);
border-radius: 24px;
padding: 10px;
text-align: center;
}

.upload-area__title {
font-size: 1.8rem;
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

</style>