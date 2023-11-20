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
          <h2 style="color: var(--color-primary);">OPPORTUNITES </h2>
      </div>

      <section id="main-container" class="main-container" style="padding:0 0 60px !important;">
          <div class="container">
              <div class="row">

                  <div class="col-lg-8 mb-5 mb-lg-0 article">


                      <h1>{{ offre.titre }}</h1><br>
                      
                      <div class="article-p">
                          <div class="image">
                            <img src="@/assets/img/slide/slide11.jpg" alt="">

                          </div>
                      </div>
                       <h3 class="text-center my-5">DESCRIPTION</h3>
                      <p class="x11i5rnm" style="white-space: pre-line; color: black;">
                          <span  >
                            {{ offre.description }}
                          </span>

                      </p>
                      <p  style=" font-weight: bolder;">Pour plus d'informations veuillez cliquez  : <a :href="offre.siteWeb" style=" font-weight: bolder;">ici</a> </p>
                      <h3 class="text-center my-5">INFORMATIONS</h3>
                      <div class="date">
        <p >Date d'Ouverture de Soumission : <span>{{datenew(offre.dateCreation)}}</span> </p>
    </div>
    <div class="date">
        <p>Date Limite de Soumission : <span>{{datenew(offre.dateCloture) }}</span> </p>
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
                                  <li><router-link to="/dnpme/Reformes-textes-de-lois">Réformes et textes de lois</router-link></li>
                                  <li><router-link to="/dnpme/phototheque">Photothèque</router-link></li>
                                 <li><router-link to="/dnpme/formalisation">formalisations</router-link></li>


                              </ul>
                          </div>

                          <div class="widget recent-posts">
                              <h3 class="widget-title">Autres opportunités</h3>
                              <ul class="list-unstyled">

                                  <li class="d-flex align-items-center" v-for="opp in OppOptions" :key="opp.id">
                                      <div class="posts-thumb" >
                                          <a :href="`/opportunites/${opp.CodeOffre}`">
                                            <img src="@/assets/img/slide/slide11.jpg" alt="">
                                              <!-- <img :src="getImage('img/slide/slide11.jpg')" alt=""> -->
                                          </a>
                                         
                                      </div>

                                      <div class="post-info" >
                                          <h4 class="entry-title" style="text-transform: capitalize;">
                                              <a :href="`/opportunites/${opp.CodeOffre}`">
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
  </div>
</template>

<script>
import axios from '@/lib/axiosConfig.js'
import useVuelidate from '@vuelidate/core';
import { require, lgmin, lgmax, ValidEmail  } from '@/functions/rules';
import Loading from '../../../components/Public/other/preloader.vue';
import MazDialog from 'maz-ui/components/MazDialog'
import { parseISO, format } from 'date-fns';
import {getImage} from '@/lib/getImage.js'
export default {
  name: 'DNPMECLActualiteDetail',
  props: ['id'],
  components: {
      Loading , MazDialog

  },

  data() {
      return {
        offre:'',
        isOpen:false,
        loading:true,
        msgsuccess:false,
        v$:useVuelidate(),
        nom:'',
        idOffre:'',
        error:'',
        sousSecteursLabel: '',
          SousSecteurActiviteOptions:[],
          OppOptions:[],
          totalPageArray: [],

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

await this.fetchgetOffreMpme(1)
await this.fetchSousSecteurActiviteOptions()
 console.log(this.id);
console.log("datadossiers", this.loggedInUser);

},

methods: {
  getImage:getImage,
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
async fetchgetOffreMpme(page) {
try {
//   const userId = this.loggedInUser.id;
 const response = await axios.get(`/offres/publique?page=${page}`);
   console.log('UserData:', response);

 if (response.data.status === 'success') {
    
     console.log('UserData:', response.data.data.data);

     this.totalPageArray = this.totalPageArray.concat(response.data.data.data); // Fusion des tableaux des différentes pages
        console.log('jjjjjjjjjj',this.totalPageArray);
      


          if (page === 1) {
            this.totalPageArray = this.totalPageArray;
        const totalPages = response.data.data.last_page;
        this.totalPages = totalPages;
        this.compterJusqua(totalPages);
      }

     this.offre = this.totalPageArray.find(offre => offre.CodeOffre === this.id);
    //  const valeur = this.offre.liste_sous_secteurs;
    //    const option =  this.SousSecteurActiviteOptions.find((opt) => opt.value === valeur);
    //    this.sousSecteursLabel =  option ? option.label : valeur;
       
       const Offres = this.totalPageArray;
      
       const offresPubliees = Offres.filter(offre => offre.publish === 1);
      
      // Trier les offres par date de création de la plus récente à la moins récente
      offresPubliees.sort((a, b) => new Date(b.dateCreation) - new Date(a.dateCreation));
      
      // Obtenir les 3 dernières offres publiées
      this.OppOptions = offresPubliees.slice(0, 3);

      console.log('Les 3 dernières actualités publiées :', this.OppOptions);

       this.loading = false
   
 }  
} catch (error) {
 console.error('Erreur lors de la récupération des options des sous prefecture :', error);
 console.log('aut',error);

   
}
},

compterJusqua(nombre) {
  for (let i = 2; i <= nombre; i++) { // Commence à 2 car la première page a déjà été chargée
    this.fetchgetOffreMpme(i);
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
this.loading = false

}    
}else{


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

  }
}

@media (max-width: 500px) {
  .banner-title {

      font-size: 25px;

  }
}

/* fin banier */


.into-sub-title {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 32px;
  line-height: normal;
  margin: 10px 0;
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
.article-p{
  padding: 10px;
  border: 1px solid var(--color-secondary);
  display: flex;
  justify-content: center;
      align-items: center;
  width: 100%;
  height: 400px;

}

.article-p .image{
/* border: 1px solid red; */
width: 100%;
height: 100%;
}

.article-p .image img{

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

</style>