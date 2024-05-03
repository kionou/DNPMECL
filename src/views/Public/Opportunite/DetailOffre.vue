<template>
  <Loading v-if="loading"></Loading>
  <div>
    <div id="banner-area" class="banner-area">
      <div class="banner-text">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="banner-heading">
                <h1 class="banner-title">{{ offre.CodeOffre }}</h1>
                <nav aria-label="breadcrumb">

                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="/">accueil</a></li>
                    <li class="breadcrumb-item"><a href="/opportunites">opportunies</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ offre.CodeOffre }}</li>
                  </ol>
                </nav>
              </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
        </div><!-- Container end -->
      </div><!-- Banner text end -->
    </div>

    <div class="section-header " style="padding-bottom: 0 !important;">
      <h2 style="color: var(--color-primary);">{{ offre.CodeOffre }} </h2>
    </div>

    <section id="main-container" class="main-container" style="padding:0 0 60px !important;">
      <div class="container">
        <div class="row">

          <div class="col-lg-8 mb-5 mb-lg-0 article">


            <h1>{{ offre.titre }}</h1><br>

            <div class="article-p">
              <div class="image">
                <img v-if="offre.photo === null" src="@/assets/img/slide/slide11.jpg" alt="">
                <img v-else :src="offre.photo" alt="">

              </div>
            </div>
            <h3 class="text-center my-5">DESCRIPTION</h3>
            <p class="x11i5rnm" style="white-space: pre-line; color: black;">
              <span>
                {{ offre.description }}
              </span>

            </p>
            <p style=" font-weight: bolder;" class="p-hover" @click="hamdleSubmit(offre.CodeOffre)"> Cliquez ici pour
              postuler </p>
            <h3 class="text-center my-5">INFORMATIONS</h3>
            <div class="date">
              <!-- <div class="btn_sign" v-if="offre.manage === 1"> -->

              <p style=" font-weight: bolder;">Pour plus d'informations veuillez cliquez : <a :href="offre.siteWeb"
                  style=" font-weight: bolder;" class="p-hover">ici</a> </p>

              <!-- </div> -->

              <p>Secteur concerné : <span> {{ obtenirValeursPourCles(sousSecteursLabel) }}</span> </p>
              <p>Date d'Ouverture de Soumission : <span>{{ datenew(offre.dateCreation) }}</span> </p>
            </div>
            <div class="date">
              <p>Date Limite de Soumission : <span>{{ datenew(offre.dateCloture) }}</span> </p>
            </div>

          </div>
          <!-- Content Col end -->



          <div class="col-lg-4">

            <div class="sidebar sidebar-right">

              <div class="widget">
                <h3 class="widget-title">A PROPOS DE LA DNPME-CL</h3>
                <ul class="arrow nav nav-tabs">
                  <li><router-link to="/dnpme/apropos">A propos</router-link></li>
                  <li><router-link to="/dnpme/mot-de-la-dn">Mot du DN</router-link></li>
                  <li><router-link to="/dnpme/Reformes-textes-de-lois">Réformes et textes de
                      lois</router-link></li>
                  <li><router-link to="/dnpme/phototheque">Photothèque</router-link></li>
                  <li><router-link to="/dnpme/formalisation">formalisations</router-link></li>


                </ul>
              </div>

              <div class="widget recent-posts">
                <h3 class="widget-title">Autres opportunités</h3>
                <ul class="list-unstyled">

                  <li class="d-flex align-items-center" v-for="opp in OppOptions" :key="opp.id">
                    <div class="posts-thumb">
                      <a :href="`/offre/${opp.CodeOffre}`">
                        <img v-if="opp.photo === null" src="@/assets/img/slide/slide11.jpg" alt="">
                <img v-else :src="opp.photo" alt="">
                      </a>

                    </div>

                    <div class="post-info">
                      <h4 class="entry-title" style="text-transform: capitalize;">
                        <a :href="`/offre/${opp.CodeOffre}`">
                          {{ opp.titre }}
                        </a>
                      </h4>
                    </div>
                  </li>


                </ul>
              </div>


            </div><!-- Sidebar end -->
          </div><!-- Sidebar Col end -->

        </div><!-- Main row end -->

      </div><!-- Container end -->
    </section>
    <MazDialog v-if="isOpen" v-model="isOpen" width="900px" max-height="revert" padding="0 1.5rem 1.5rem"
      position="relative">
      <div>
        <small> {{ error }}</small>

        <div id="uploadArea" class="upload-area">
          <!-- Header -->
          <div class="upload-area__header">
            <h1 class="upload-area__title">Téléchargez votre fichier</h1>
            <div class="btnLogin" @click="addDocument"> 
              <i class="bi bi-plus-lg ajouter"></i>
               <span>Ajouter</span> 
             </div>
            <p class="upload-area__paragraph">
              Le fichier doit être un document
              <strong class="upload-area__tooltip">
                comme
                <span class="upload-area__tooltip-data">{{ imagesTypes.join(', ') }}</span>
              </strong>
            </p>
          </div>
          <!-- End Header -->

          <!-- Drop Zoon -->
          <div id="dropZoon" class="upload-area__drop-zoon drop-zoon">
            <form @submit.prevent="submitForm" style="widht:100%;">
              <div v-for="(document, index) in documents" :key="index">
                <div class="row mb-3 mt-3 content-group justify-content-center">
                  <div class="col">
                    <div class="input-group">
                         <input  type="text" name="nom" v-model="document.nom" placeholder="Nom du document" />

                    </div>
                    <small v-if="errors[index] && errors[index].nom">{{ errors[index].nom }}</small>
                  
                  </div>

                  <div class="col">
                    <div class="input-group">
                      <input type="file" name="file"   @change="handleFileChange(document, $event)" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"/>
                      
                    </div>
                    <small v-if="errors[index] && errors[index].file">{{ errors[index].file }}</small>
                  
                  </div>

                   <!-- <div class="col">
                 <input type="file" class="inputfile" name="file" @change="handleFileChange(document, $event)" />

                    <input type="file" name="file" id="file" class="inputfile" @change="handleFileChange(document, $event)" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"/>
                    <label for="file">
                      <i class="bi bi-cloud-arrow-down"></i>
                      Telecharger le ficher
                    </label> 
                    <small  v-if="errorFile" >{{ errorFile }}</small>

                  </div> -->

                  <div class="col" style="  max-width: 63px !important;
   
    display: flex;
    justify-content: center;
    align-items: center;">
                    <div class="sci">

                      <span style="--i:2" @click="removeDocument(index)" class="delete">
                        <i class="bi bi-trash"></i>
                      </span>

                    </div>
                  </div>
                </div>


              </div>
              <div class="d-flex justify-content-center align-items-center">
                <button type="submit" class="sign" style="width:120px">Envoyer</button>

              </div>

            </form>


          </div>
          <!-- End Drop Zoon -->


        </div>
      </div>

    </MazDialog>
    <MazDialog v-model="msgsuccess" title="Candidature ">
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
import Loading from '../../../components/Public/other/preloader.vue';
import MazDialog from 'maz-ui/components/MazDialog'
import { parseISO, format } from 'date-fns';
import { getImage } from '@/lib/getImage.js'
export default {
  name: 'DNPMECLActualiteDetail',
  props: ['id'],
  components: {
    Loading, MazDialog

  },
  computed: {

    loggedInUser() {
      return this.$store.getters['user/loggedInUser'];
    },
  },

  data() {
    return {
      offre: '',
      offres: [],
      filterOffres: [],
      isOpen: false,
      loading: true,
      msgsuccess: false,
      selectedFile: null,
      selectedFiles: [],
      imagesTypes: ['pdf', 'word', 'txt', 'excel', 'powerpoint'],
      nom: '',
      idOffre: '',
      error: '',
      errors:[],
      sousSecteursLabel: '',
      SousSecteurActiviteOptions: [],
      OppOptions: [],
      documents: [{ nom: '', fichier: null }],
      errorNom: '',
      errorFile: '',

    };
  },


  async mounted() {
    await this.fetchData()
    await this.fetchgetOffreMpme()
    await this.fetchSousSecteurActiviteOptions()
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
    getImage: getImage,
    formatMoisFrancais(date) {
      const moisFrancais = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
      ];
      return moisFrancais[date.getMonth()];
    },

    // Fonction pour formater la date
    datenew(isoDate) {
      const dateObj = parseISO(isoDate);
      const jour = dateObj.getDate();
      const mois = this.formatMoisFrancais(dateObj);
      const annee = dateObj.getFullYear();
      return `${jour} ${mois} ${annee}`;
    },
    async fetchSousSecteurActiviteOptions() {
      try {
        await this.$store.dispatch('fetchSousSecteurOptions');
        this.SousSecteurActiviteOptions = this.$store.getters['getSousSecteurOptions']
      } catch (error) {
        console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error.message);
      }
    },
    async fetchData() {
      const response = await axios.get(`/mpme/${this.loggedInUser.id}`)
      const data = response.data.data
      console.log('dattta', data);
      if (data.ListeSousSecteurActivite.includes('|')) {
        return this.data = data.ListeSousSecteurActivite.split("|")

      } else {

        return this.data = data.ListeSousSecteurActivite.split(' ')
      }
    },
    async fetchgetOffreMpme() {
      try {
        //   const userId = this.loggedInUser.id;
        const response = await axios.get('/offres/liste-sans-pagination', {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,

          },
        });
        console.log('UserData:', response);

        if (response.data.status === 'success') {
          this.loading = false
          console.log('UserDataeee:', response.data.data);
          this.offre = response.data.data.find(offre => offre.CodeOffre === this.id);
          const valeur = this.offre.liste_sous_secteurs;
          const option = this.SousSecteurActiviteOptions.find((opt) => opt.value === valeur);
          this.sousSecteursLabel = option ? option.label : valeur;

          this.offres = response.data.data.filter((offre) => {
            const sousSecteurActiviteOffre = offre.liste_sous_secteurs;
            console.log('sousSecteurActiviteOffre', sousSecteurActiviteOffre);

            if (sousSecteurActiviteOffre !== null && sousSecteurActiviteOffre.includes('|')) {
              const sousSecteurs = sousSecteurActiviteOffre.split('|');
              return sousSecteurs.some((sousSecteur) => this.data.includes(sousSecteur)) && offre.publish === 1;
            } else {
              return this.data.includes(sousSecteurActiviteOffre) && offre.publish === 1;
            }
          });


          const Offres = this.offres;

          const offresPubliees = Offres.filter(offre => offre.publish === 1);

          // Trier les offres par date de création de la plus récente à la moins récente
          offresPubliees.sort((a, b) => new Date(b.dateCreation) - new Date(a.dateCreation));

          // Obtenir les 3 dernières offres publiées
          this.OppOptions = offresPubliees.slice(0, 3);

          console.log('Les 3 dernières actualités publiées :', this.OppOptions);

          this.loading = false

        }
      } catch (error) {
        console.log('Erreur lors de la mise à jour des données MPME guinee :', error);
        console.log('aut', error);
        // if (error && error.response.data.message === "Vous n'êtes pas autorisé.") {
        //   await this.$store.dispatch('user/clearLoggedInUser');
        //   this.$router.push('/connexion-mpme');

        // } else {
        //   console.log('aut', error.response.data);

        //   // this.formatValidationErrors(error.response.data.errors)
        //   this.loading = false
        //   return false;
        // }


      }
    },


    hamdleSubmit(id) {
      this.idOffre = id
      console.log(id);
      this.isOpen = true
    },


    handleFileChange(document, event) {
      document.fichier = event.target.files[0];
    },
    addDocument() {
      this.documents.push({ nom: '', fichier: null });
    },
    removeDocument(index) {
      if (index > 0) {
    // Vérifiez si l'index est supérieur à zéro (c'est-à-dire, à partir du deuxième champ)
    this.documents.splice(index, 1);
  }

    },

 async submitApi(formData){


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
          this.loading = false
         this.isOpen = false


        }else{
         this.loading = false
         this.isOpen = true
         this.error = response.data.message
        }
        } catch (error) {
        console.error('Erreur lors du téléversement :', error);
        this.loading = false

        } 
      

  },
   
    async submitForm() {
      this.errorNom = ''
      this.errorFile = ''
    // Réinitialisez les erreurs
  this.errors = [];

// Validez chaque document
this.documents.forEach((document, index) => {
  const errors = {};

  if (!document.nom) {
    errors.nom = 'Ce champ est obligatoire!';
  }

  if (!document.fichier) {
    errors.file = 'Ce champ est obligatoire!';
  }

  this.errors[index] = errors;
});

// Vérifiez s'il y a des erreurs
if (this.errors.some((errors) => errors.nom || errors.file)) {
  return; // Ne poursuivez pas la soumission si des erreurs sont présentes
} else {

        this.errorNom = ''
        this.errorFile = ''
    
        this.isOpen = false
        this.loading = true
        console.log('bonjour', this.documents);
        const formData = new FormData();
        this.documents.forEach((document, index) => {
        console.log( 'this.idOffre',{ 'nom':document.nom , 'document':document.fichier} );

        formData.append('intitule', document.nom);
        formData.append('document', document.fichier);
        formData.append('CodeOffre', this.idOffre);
        formData.append('CodeMpme', this.loggedInUser.id);
        console.log(formData);
        console.log( this.idOffre, this.loggedInUser.id);
         this.submitApi(formData)

      });
    }
        
    },

  },
};
</script>

<style lang="css" scoped>
.section-header {
  padding: 30px 0;

}

/* debut banier */
.banner-area {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #266486;
  min-height: 250px;
  background-image: url('@/assets/img/img1.webp');
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 10%);

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

.breadcrumb-item,
.breadcrumb-item a {
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
  .banner-title {

    font-size: 30px;
    text-align: center;

  }
}

@media (max-width: 500px) {
  .banner-title {

    font-size: 25px;

  }
}

/* fin banier */

form {
  width: 100%;


}

.into-sub-title {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 32px;
  line-height: normal;
  margin: 10px 0;
}

.p-hover {
  color: var(--color-primary);
  cursor: pointer;

}

.p-hover:hover {
  color: var(--color-secondary);

}

hr {
  background-color: #e7e7e7;
  border: 0;
  height: 1px;
  margin: 40px 0;
}



h4 {
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
  letter-spacing: -.2px;
}

h1 {
  font-size: 36px;
  line-height: 48px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #101010;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased !important;
}

.article p {
  text-align: justify !important;
}

.article-p {
  padding: 10px;
  border: 1px solid var(--color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;

}

.article-p .image {
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
}

.article-p .image img {

  width: 100%;
  height: 100%;
}


.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}

.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.swiper-slide {
  width: 100% !important;

}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}


.sidebar-right .widget {
  margin-left: 20px;
}

.sidebar .widget {
  margin-bottom: 40px;
}


.sidebar .widget-title {
  font-size: 16px;
  font-weight: 700;
  position: relative;
  margin: 0 0 30px;
  padding-left: 15px;
  text-transform: uppercase;
  border-left: 4px solid var(--color-secondary);
}

.sidebar ul.nav-tabs {
  border: 0;
}

.sidebar ul.nav-tabs li {
  color: #303030;
  line-height: normal;
}


.sidebar ul.nav-tabs li {
  width: 100%;
}

.sidebar ul.nav-tabs li a {
  color: #303030;
  border-radius: 0;
  padding: 15px 0;
  padding-left: 0;
  font-weight: 400;
  border-bottom: 1px solid #ddd;
  display: block;
  transition: 400ms;
  font-size: 14px;
}

.widget.recent-posts .widget-title {
  margin-bottom: 35px;
}

.widget.recent-posts ul li {
  border-bottom: 1px solid #dadada;
  padding-bottom: 15px;
  margin-bottom: 17px;
}

.widget ul li {
  line-height: 30px;
}

ul li a {
  color: #303030;
}

.sidebar .widget ul li a:hover {
  color: var(--color-primary) !important;
  font-weight: bold;
}

.posts-thumb {
  width: 70% !important;
}

.widget.recent-posts .posts-thumb img {
  margin-right: 15px;
  /* width: 90px; */
  height: 70px;
}

.widget.recent-posts .post-info .entry-title {
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
}

.widget.recent-posts .post-info .entry-title a {
  color: #303030;
  display: inline-block;
}

.x11i5rnm {
  white-space: pre-line;
  /* Autres styles CSS que vous souhaitez appliquer ici */
}

.x11i5rnm strong {
  color: black;
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
  padding: 10px;
}



.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile+label {

  font-size: 1.25em;
  font-weight: 700;
  color: var(--color-primary);
  /* background-color: black; */
  display: inline-block;
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 0.375rem;
  border: 2px solid #e5e7eb;
}


.inputfile+label {
  cursor: pointer;
  /* "hand" cursor */
}



.btnLogin {
  font-size: 15px;
  font-weight: 500;
  color: #000;
  background-color: #F9D310;
  border: none;
  border-radius: 45px;
  position: absolute;
  z-index: 3;
  right: 47px;
  top: 126px;
  cursor: pointer;
  outline: none;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btnLogin:hover {
  background-color: #fff;
  border: 1px solid #F9D310;
  color: #F9D310;

}

.sci {
  bottom: 10px;
  left: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  /* border: 1px solid red; */
}

.sci span {
  margin: 0 10px;
  font-size: 18px;
  border-radius: 6px;
  color: #fff;
  z-index: 4;
  cursor: pointer;
  padding: 5px 10px;

}

.delete {
  background-color: red;
}

.delete:hover {
  background-color: #fff;
  color: red;
  border: 1px solid red;
}

@media (max-width: 768px) {
    h1 {
    font-size: 20px;
    line-height: 25px;
    text-align: justify;
}

.article-p {
   
    height: auto;
}


h3
 {
  
  font-size: 16px;
}

.form-container {
    width: 700px;
    max-width: 100%;
  }

  .content-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profil1{

    top:-26px;
  }

  .upload-area__title{

    font-size:1.6rem;
    text-align: center !important;
  }

  .btnLogin{
    
    right: 26px;
    top: 96px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 30px;
 
}
  .btnLogin span {
        display: none;
    }


   
}



</style>