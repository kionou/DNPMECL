<template>
    <div>
        <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">à PROPOS</h1>
                  <nav aria-label="breadcrumb">
                     
                    <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="/">accueil</a></li>
                    <li class="breadcrumb-item"><a href="/partenaires">Dnpmecl</a></li>
                    <li class="breadcrumb-item active" aria-current="page">qui sommes-nous</li>
                    </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
       </div>
       <section id="main-container" class="main-container">
    <div class="container">
      <div class="row">
          <div class="col-lg-12">
            <!--<h3 class="into-title">A propos</h3>-->
            <h1 class="into-sub-title">À PROPOS</h1>
            <hr style="margin-top: 30px; margin-bottom: 30px;">
            <p class="text-justify;" style="font-size:18px;">
              Placée sous la tutelle du Ministère du Commerce, de l’Industrie et des Petites et Moyennes Entreprises, la Direction Nationale des Petites et Moyennes Entreprises et du Contenu Local (DNPMECL) est l’une des Directions
               Centrales du Ministère du Commerce, de l’Industrie et des PME.    
            </p>
            <p class="text-justify;" style="font-size:18px;">
              Elle a été créée par Décret N° D / 2009 /167 /PRG/SGG du 19 aout 2009 et modifiée par Décret N° D/2022/0026/PRG/CNRD/SGG du 13 Janvier 2022. 
            </p>
            <p class="text-justify;" style="font-size:18px;">
              Elle a pour mission, la mise en œuvre de la politique du Gouvernement dans le domaine de la promotion et du développement des Micros, Petites et Moyennes Entreprises et du Contenu Local et d’en assurer le suivi.

            </p>
          </div><!-- Col end -->
      </div><!-- Content row end -->

    </div><!-- Container end -->
  </section>

  <section class="main-container" id="organigramme">
    <div class="container">
    <div class="row">
      <div class="col-ms-12">
        <h2 class="into-sub-title">Organigramme</h2>
        
        <hr style="margin-top: 30px; margin-bottom: 30px;"> 
        <div class="image">
        <img src="@/assets/img/orga.png" class="" alt="notre organigramme">

        </div>


      </div>
    </div></div>
  </section>

  <section id="ts-team" class="missions-bg ts-team">
    <div class="container">
      <div class="row text-center">
          <div class="col-lg-12">
            <h3 class="section-sub-title">La DNPME-CL en images...</h3>
          </div>
      </div><!--/ Title row end -->

      <div class="row">
          <div class="col-lg-12">
            <swiper ref="{swiperRef}" 
            :autoHeight="true"
            :slidesPerView="3"
            :watchSlidesProgress="true" 
            :spaceBetween="20"
           :navigation="true"
           :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <a href="https://mpme-guinee.com/bd/public/MPME_IMAGES_DOCUMENTS/KIONOU-SARL_1692564684.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="@/assets/img/actualite/1.jpeg" class="img-fluid" alt=""></a>

    </swiper-slide>
    <swiper-slide>
      <img  src="@/assets/img/actualite/2.jpg" class="img-fluid"  alt="">	

    </swiper-slide>
    <swiper-slide>
      <img  src="@/assets/img/actualite/2.jpg" class="img-fluid"  alt="">	

    </swiper-slide>
    <swiper-slide>
      <img  src="@/assets/img/actualite/2.jpg" class="img-fluid"  alt="">	

    </swiper-slide>
  </swiper>

  <p class="append-buttons"></p>
        
          </div>
      </div><!--/ Content row end -->
    </div><!--/ Container end -->
  </section>
    </div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
 import 'swiper/css/pagination';
 import 'swiper/css/navigation';
 import  "glightbox/dist/css/glightbox.css";
import  "glightbox/dist/js/glightbox.js";
import   GLightbox from 'glightbox';
// import { Pagination, Navigation } from 'swiper/modules';
export default {
    name: 'DNPMECLApropos',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        // modules: [Pagination, Navigation],
      };
    },

    data() {
        return {
            
        };
    },

 mounted() {
  this.lightbox = GLightbox({ 
              selector: ".glightbox"
             });

},


    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.swiper-slide{
    /* width: 230px !important; */
    border: 1px solid var(--color-secondary); 
     height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;

}

.swiper-slide img{

  width: 100%;
  height: 100%;
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
    color: var(--color-primary);
}
hr {
    background-color: #e7e7e7;
    border: 0;
    height: 1px;
    margin: 40px 0;
}
 p {
    font-family: "Open Sans", sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
    line-height: 26px;
    font-size: 14px;
}

.missions-bg {
    background: #ededed url('@/assets/img/skyscraper.jpg') fixed top center no-repeat;
}

.section-sub-title {
    font-weight: 900;
    font-size: 36px;
    line-height: 46px;
    margin: 0 0 60px;
    color: var(--color-primary);
}

.image{

  width: 100%;
  height: auto;
  /* border: 1px solid red;
  border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.image img{

width: 100%;
height: auto;
/* border: 1px solid blue; */
}


</style>