<template>
    <div>
        <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">photothèques Album</h1>
                  <nav aria-label="breadcrumb">
                     
                    <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="/">accueil</a></li>
                    <li class="breadcrumb-item"><a href="/dnpmecl/phototheque">Dnpmecl</a></li>
                    <li class="breadcrumb-item"><a href="/dnpmecl/phototheque">photothèques</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ formaterChaine()  }}</li>
                    </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
    </div>
   
    <section id="main-container" class="main-container">
        <div class="section-header " >
        <h2 style="color: var(--color-primary);">{{ formaterChaine(filteredDataAlbum.CodeAlbum)  }}</h2>
    </div>

<div class="container">

  <div class="row">



    <div class="col-lg-9">
      <div class="row">
        
        <div class="col-lg-12">
          <h3>{{ filteredDataAlbum.AlbumTitre }}</h3>
          <hr>
        </div>
        <div id="portfolio" class="portfolio sections-bg" >
            <div class="portfolio-isotope"  data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">

          <div v-if="images.length === 0" class="noresul">Aucune photo disponible pour le moment !!!</div>

<div class="contenu d-flex justify-content-center align-items-center flex-wrap portfolio-container" v-else>
  <gallery :images="images" :index="index" @close="index = null"></gallery>
 

  <div class=" portfolio-item filter-app" v-for="(image, imageIndex) in images"  :key="imageIndex"  @click="index = imageIndex" >
    <div class="portfolio-wrap" :style="{ backgroundImage: 'url(' + image + ')' }">
    </div>
  </div>

</div>

        </div>
        </div>
       
        
      </div>

      <hr>

      <div class="d-flex justify-content-center align-items-center " style="margin-top: 20px;">
        <p class="sign"  style="width: 300px; margin-top: 0px !important; cursor: pointer;" @click="$router.push({ path: '/dnpme/phototheque', })" >
            <i class="bi bi-arrow-counterclockwise"></i>&nbsp;Retour à la photothèque
        </p>
      </div>


    </div><!-- Content Col end -->



    <div class="col-lg-3">
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

      

      </div><!-- Sidebar end -->
    </div><!-- Sidebar Col end -->


  </div><!-- Main row end -->



</div><!-- Container end -->

</section>
    </div>
</template>

<script>
import  "glightbox/dist/css/glightbox.css";
import  "glightbox/dist/js/glightbox.js";
import   GLightbox from 'glightbox';
import VueGallery from 'vue-gallery';

export default {
    name: 'DNPMECLDetailPhoto',
    props:['id'],
    components: {
      'gallery': VueGallery
  },

    data() {
        return {
          filteredDataAlbum: '',
        
        index: null,
          images:[],
          totalPageArray: [],
          galleryOptions: {
      showIndex: true, // Affiche le numéro de l'image actuelle
      closeOnEsc: true, // Ferme la galerie en appuyant sur la touche Échap
      // Plus d'options disponibles, consultez la documentation de vue-gallery
    },
        };
    },

  async  mounted() {
        this.lightbox = GLightbox({ 
              selector: ".glightbox"
             }); 

          
             await this.fetchPhotos()
    },

    methods: {
      async fetchPhotos(page) {
      try {
              await this.$store.dispatch('fetchPubliqueVisiblePhotos', page);
                const options = JSON.parse(JSON.stringify(this.$store.getters['getPubliqueVisiblePhotos']));

                this.totalPageArray = this.totalPageArray.concat(options.data); // Fusion des tableaux des différentes pages
       
      

          if (page === 1) {
            // this.PhotosOptions = this.totalPageArray;
        const totalPages = options.last_page;
        this.totalPages = totalPages;
        this.compterJusqua(totalPages);
       


      }
              this.filteredDataAlbum = this.totalPageArray.find(offre => offre.CodeAlbum === this.id);
              this.images = this.filteredDataAlbum.active_photos.map((image) => image.Photo);

      
         
             


              

        // Continuez avec le reste de votre code pour afficher les photos
      } catch (error) {
      
      }
    },
    compterJusqua(nombre) {
  for (let i = 2; i <= nombre; i++) { // Commence à 2 car la première page a déjà été chargée
    this.fetchPhotos(i);
  }
},
    formaterChaine() {
  if (this.filteredDataAlbum && this.filteredDataAlbum.CodeAlbum) {
    var elements = this.filteredDataAlbum.CodeAlbum.split("_");
    var dateStr = elements.slice(1, 4).join('-');
    var heureStr = elements[4];
     var chaineFormatee = "Album du " + dateStr  + " publié à "+ heureStr;
     return chaineFormatee;
  } else {
    return ""; // Gérer le cas où les données sont manquantes
  }
}





 
        
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
    background-image: url('@/assets/img/banner/photo1.jpg');
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

/* fin banier */
@media (max-width: 992px) {
    .banner-title {
    
    font-size: 40px;
    
}
}
@media (max-width: 768px) {
  @media (max-width: 768px) {

.container{

  margin-top: 20px;
}
  .banner-title {
  
  font-size: 20px !important;
  
}
}
}

@media (max-width: 500px) {
    .banner-title {
    
    font-size: 25px;
    
}
}

.section-header {
padding: 20px 0 !important;

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

h3 {
    font-size: 17px;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: -.5px;
}

h1, h2, h3, h4, h5, h6 {
    color: #101010;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
}

.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }


  .noresul {
    border: 1px solid #F9D310;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    border-radius: 6px;
    font-size: 20px;
    
    }

    @media (max-width: 768px) {
  
  .sidebar .widget {
    margin-top: 20px;
}

}
</style>