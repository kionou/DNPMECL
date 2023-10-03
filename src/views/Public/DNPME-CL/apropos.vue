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
            <p class="text-justify;" style="font-size:18px;"><strong><i>Décret n°2003-160 du 4 Août 2003</i></strong> portant attributions et organisation de la Direction Générale des Petites et Moyennes Entreprises .</p>
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

        <img src="@/assets/img/organigramme.png" class="img-fluid w-100" alt="notre organigramme">

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
            <div class="container swiper-container" data-aos="zoom-out">   
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide" >
              <img  src="@/assets/img/ninba1.png" class="img-fluid"  alt="">	   
            </div>
            <div class="swiper-slide" >
              <img  src="@/assets/img/ninba1.png" class="img-fluid"  alt="">	   
            </div>
            <div class="swiper-slide" >
              <img  src="@/assets/img/ninba1.png" class="img-fluid"  alt="">	   
            </div>
            <div class="swiper-slide" >
              <img  src="@/assets/img/ninba1.png" class="img-fluid"  alt="">	   
            </div>
            <div class="swiper-slide" >
              <img  src="@/assets/img/ninba1.png" class="img-fluid"  alt="">	   
            </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
          </div>
      </div><!--/ Content row end -->
    </div><!--/ Container end -->
  </section>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
export default {
    name: 'DNPMECLApropos',

    data() {
        return {
            
        };
    },

//   async mounted() {
//         const swiper = await new Swiper('.swiper-container', {
//       speed: 400,
//       loop: false,
//       autoplay: {
//         delay: 5000,
//         disableOnInteraction: false
//       },
//       slidesPerView: 'auto',
//       pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true
//       },
//       breakpoints: {
//         320: {
//           slidesPerView: 1,
//           spaceBetween: 40
//         },
//         480: {
//           slidesPerView: 2,
//           spaceBetween: 60
//         },
//         640: {
//           slidesPerView: 3,
//           spaceBetween: 80
//         },
//         992: {
//           slidesPerView: 4,
//           spaceBetween: 120
//         }
//       }
//     });
        
//     },
async mounted() {
  const swiper = await new Swiper('.swiper-container', {
    speed: 400,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next', // Sélecteur du bouton Suivant
      prevEl: '.swiper-button-prev', // Sélecteur du bouton Précédent
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 120
      }
    }
  });
},


    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.swiper-slide{
  width: 200px !important;
    border: 1px solid var(--color-secondary);
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

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
    color: #212121;
}


</style>