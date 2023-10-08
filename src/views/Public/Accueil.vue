<template>
    <div>
          <!-- ======= Hero Section ======= -->

          <section id="hero" class="hero" style="padding: 0 !important;">
      <v-carousel :cycle="true" width="100%"  :show-arrows="false"
  >
    <v-carousel-item v-for="(item,i) in items" :key="i"  >
      <v-img :src="item.src" class="fill-height immg "  cover  max-height="800">
      </v-img>
        <v-container fill-height>
        <div class="hero_content absolute-fill">
      <div class="rowe gy-5" data-aos="fade-in">
        <div class="hero_content1   text-center text-lg-start" style="margin-bottom:auto">
          <h2>Enregistrez votre entreprise</h2>
          <p>Portail officiel de de la Direction Nationale des PME et du Contenu Local dédié à l’enregistrement des micros, petites et moyennes entreprises en Guinée afin de faciliter l’accès 
            aux informations liées à ces entreprises. </p>
          <p>Ne ratez plus aucunes opportunités pour booster les activités de vos MPME !</p>
          
          <div class="d-flex justify-content-center justify-content-lg-start">
            <router-link to="/sign_user_mpme" class="btn-get-started">Enregistrez votre entreprise</router-link>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center">
              <i class="bi bi-play-circle" style="color: white; position: relative;">
               
            </i>
            <span>Guide d'Enregistrement</span></a>
          </div>
        </div>
      </div>
    </div>
       
      </v-container>

                 
     

    </v-carousel-item>
  </v-carousel>
 
  </section>
  <!-- <section id="hero" class="hero">
    <div class="hero_content">
      <div class="rowe gy-5" data-aos="fade-in">
        <div class="hero_content1 col-lg-6 order-2 order-lg-1  text-center text-lg-start" style="margin-bottom:auto">
          <h2>Identifiez votre entreprise</h2>
          <p>Portail officiel de de la Direction Nationale des PME et du Contenu Local dédié à l’enregistrement des micros, petites et moyennes entreprises en Guinée afin de faciliter l’accès 
            aux informations liées à ces entreprises. </p>
          <p>Ne ratez plus aucunes opportunités pour booster les activités de vos MPME !</p>
          
          <div class="d-flex justify-content-center justify-content-lg-start">
            <router-link to="/sign_user_mpme" class="btn-get-started">Identifier votre entreprise</router-link>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center">
              <i class="bi bi-play-circle" style="color: white; position: relative;">
               
            </i>
            <span>Guide de création</span></a>
          </div>
        </div>
        <div class=" hero_image col-lg-6 order-1 order-lg-2">
          <img src="@/assets/img/accueil.jpg" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100">
        </div>
      </div>
    </div>
  </section> -->
  <!-- End Hero Section -->


  <main id="main">

<!-- ======= Présentation de la directiion Section ======= -->
<section id="about" class="about">
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <h2>Présentation de la DNPME-CL</h2>
      <p>
        La Direction Nationale des Petites et Moyennes Entreprises et du Contenu
         Local sous tutelle du Ministère du Commerce, de l’Industrie et des PME a
          pour objectif d’accompagner et de promouvoir les activités des Micros, 
          Petites et Moyennes Entreprises et de
         vulgariser la loi portant Contenu Local en République de Guinée. 

      </p>
      <!-- <p>
        Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop

      </p> -->
    </div>

    <div class="row gy-4 class3">
      <div class="col-lg-6 class4">
        <h3>Notre mission</h3>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="5000">
      <img src="@/assets/img/carousel/carousel1.jpg" class="d-block w-100 img-fluid rounded-4 mb-4" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="@/assets/img/carousel/carousel2.jpg" class="d-block w-100 img-fluid rounded-4 mb-4" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="@/assets/img/carousel/carousel3.jpg" class="d-block w-100 img-fluid rounded-4 mb-4" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <div class="col-lg-6  class5" style="margin-top:60px;">
        <div class="content ps-0 ps-lg-5">
          <p class="fst-italic">
          
          </p>
          <ul>
            <li><i class="bi bi-check-circle-fill"></i>Promotion des Petites et Moyennes Entreprises ;</li>
            <li><i class="bi bi-check-circle-fill"></i>Suivi et de la coordination des actions de développement des PME ;</li>
            <li><i class="bi bi-check-circle-fill"></i>Suivi des politiques visant l’amélioration de l’efficacité des PME ;</li>

            <li><i class="bi bi-check-circle-fill"></i>Elaboration et mise en place d’un cadre institutionnel et règlementaire de création et de financement des PME ;</li>
            <li><i class="bi bi-check-circle-fill"></i>Encadrement des PME ;</li>
            <li><i class="bi bi-check-circle-fill"></i>Développement des actions d’aide à la création d’entreprises par les nationaux;</li>

            <li><i class="bi bi-check-circle-fill"></i>Mise en œuvre des actions visant le renforcement de capacités managériales des nationaux chefs d’entreprises, notamment en matière de gestion d’entreprises;</li>
            <li><i class="bi bi-check-circle-fill"></i>Promouvoir et former sur la loi portant contenu local . </li>
          </ul>
         
        </div>
      </div>
    </div>

  </div>
</section>

 <!-- ======= Clients Section ======= -->

 <section id="main-container" class=" missions-bg main-container">
    <div class="container">
      
      <div class="row">

        <div class="col-lg-4 col-md-6">
          <div class="ts-pricing-box">
            <div class="ts-pricing-header" style="background-color: var(--color-primary);">
              <h2 class="ts-pricing-price" style="font-size: 38px;">
                <strong>Objectifs</strong>
              </h2>
            </div><!-- Pricing header -->
            
            <div class="accordion accordion-group" id="our-values-accordion">
                <div class="card">
                  <div class="card-header p-0 bg-transparent" id="headingOne" style="background-color: #6c757d !important;">
                      <h2 class="mb-0">
                        <div class="btn  text-left" @click="show1 = !show1">
                            Cliquez ici pour lire
                            <i :class="show1 ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" class="flex-shrink-0"></i>
                        </div>
                      </h2>
                  </div>
                
                  <div   v-show="show1 " class="transition-height" >
                      <div class="card-body"  style="text-align: left !important;  transition: all 5s;">
                      
                          <ul>
                            <li><span>Les Petites et Moyennes Entreprises individuelles ou en Associations;</span></li>
                            <li><span>Les groupements d'entreprises;</span></li>
                            <li><span>Les groupements professionnels;</span></li>
                            <li><span>Les coopératives de production et de transformation;</span></li>
                            <li><span>Les investisseurs à la recherche d'un réseau porteur;</span></li>
                            <li><span>Les jeunes promoteurs présentant des projets novateurs, crédibles et porteurs d'avenir;</span></li>
                            <li><span>Les entreprises (ssous toutes les formes juridiques) et de tout secteur d'activité.</span></li>
                          </ul>
                     
                      </div>
                  </div>
                </div>  
            </div>
          </div><!-- Plan 1 end -->
        </div><!-- Col end -->

        <div class="col-lg-4 col-md-6">
          <div class="ts-pricing-box">
            <div class="ts-pricing-header" style="background-color: var(--color-secondary);">
              <h2 class="ts-pricing-price" style="font-size: 38px; color: #000;">
                <strong>cibles</strong>
              </h2>
            </div><!-- Pricing header -->
            
            <div class="accordion accordion-group" id="our-values-accordion">
                <div class="card">
                  <div class="card-header p-0 bg-transparent" id="headingOne" style="background-color: #6c757d !important;">
                      <h2 class="mb-0">
                        <div class="btn  text-left" @click="show2 = !show2">
                            Cliquez ici pour lire
                            <i :class="show2 ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" class="flex-shrink-0"></i>
                        </div>
                      </h2>
                  </div>
                
                  <div   v-show="show2 " class="transition-height" >
                      <div class="card-body"  style="text-align: left !important;  transition: all 5s;">
                      
                          <ul>
                            <li><span>Les Petites et Moyennes Entreprises individuelles ou en Associations;</span></li>
                            <li><span>Les groupements d'entreprises;</span></li>
                            <li><span>Les groupements professionnels;</span></li>
                            <li><span>Les coopératives de production et de transformation;</span></li>
                            <li><span>Les investisseurs à la recherche d'un réseau porteur;</span></li>
                            <li><span>Les jeunes promoteurs présentant des projets novateurs, crédibles et porteurs d'avenir;</span></li>
                            <li><span>Les entreprises (ssous toutes les formes juridiques) et de tout secteur d'activité.</span></li>
                          </ul>
                     
                      </div>
                  </div>
                </div>  
            </div>
          </div><!-- Plan 1 end -->
        </div><!-- Col end -->

        <div class="col-lg-4 col-md-6">
          <div class="ts-pricing-box">
            <div class="ts-pricing-header" style="background-color: #db1922;">
              <h2 class="ts-pricing-price" style="font-size: 38px;">
                <strong>Perspectives</strong>
              </h2>
            </div><!-- Pricing header -->
            <div class="accordion accordion-group" id="our-values-accordion">
                <div class="card">
                  <div class="card-header p-0 bg-transparent" id="headingOne" style="background-color: #6c757d !important;">
                      <h2 class="mb-0">
                        <div class="btn  text-left" @click="show3 = !show3">
                            Cliquez ici pour lire
                            <i :class="show3 ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" class="flex-shrink-0"></i>
                        </div>
                      </h2>
                  </div>
                
                  <div   v-show="show3 " class="transition-height" >
                      <div class="card-body"  style="text-align: left !important;  transition: all 5s;">
                      
                          <ul>
                            <li><span>Les Petites et Moyennes Entreprises individuelles ou en Associations;</span></li>
                            <li><span>Les groupements d'entreprises;</span></li>
                            <li><span>Les groupements professionnels;</span></li>
                            <li><span>Les coopératives de production et de transformation;</span></li>
                            <li><span>Les investisseurs à la recherche d'un réseau porteur;</span></li>
                            <li><span>Les jeunes promoteurs présentant des projets novateurs, crédibles et porteurs d'avenir;</span></li>
                            <li><span>Les entreprises (ssous toutes les formes juridiques) et de tout secteur d'activité.</span></li>
                          </ul>
                     
                      </div>
                  </div>
                </div>  
            </div>
            



          </div><!-- Plan 1 end -->


 
        </div><!-- Col end -->
       
  
        

        

      </div>
      <!--/ Content row end -->

    </div><!-- Conatiner end -->
  </section>
  

    <!-- ======= Stats Counter Section ======= -->
    <section id="stats-counter" class="stats-counter">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4 align-items-center">

          <div class="col-lg-6">
            <img src="@/assets/img/business.jpg" alt="" class="img-fluid">
          </div>

          <div class="col-lg-6">

            <div class="stats-item d-flex align-items-center">
              <span data-purecounter-start="0" :data-purecounter-end="totalMpme" data-purecounter-duration="1" class="purecounter"></span>
              <p><strong>MPME crées</strong> </p>
            </div><!-- End Stats Item -->

            <div class="stats-item d-flex align-items-center">
              <span data-purecounter-start="0" :data-purecounter-end="totalEmplois.emplois" data-purecounter-duration="1" class="purecounter"></span>
              <p><strong>Emplois crés</strong>  </p>
            </div><!-- End Stats Item -->

            <div class="stats-item d-flex align-items-center">
    
              <span data-purecounter-start="0" :data-purecounter-end="totalEmplois.salaries_femme" data-purecounter-duration="1" class="purecounter"></span>
              <p><strong>Femmes salariées</strong> </p>
            </div><!-- End Stats Item -->
          </div>

        </div>

      </div>
    </section>
    <!-- End Stats Counter Section -->

  

     <!-- ======= Our Team Section ======= -->
     <section id="team" class="team" style=" background-color: #f6f6f6; ">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Quelques Statistiques</h2>
          <p> Voici quelques statistiques  réparties par région, statut juridique et secteur d'activité </p>
        </div>

        <div class="row gy-4">

          <div class="col-lg-12 col-12 mb-4">
            <div class="nav-align-top mb-4">
              <ul class="nav nav-pills mb-3" role="tablist">
                <li class="nav-item">
                  <button type="button"  class="nav-link  active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-home1" aria-controls="navs-pills-top-home1" aria-selected="true">
                    MPME par secteur d'activité
                  </button>
                </li>

                <li class="nav-item">
                  <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-profile1" aria-controls="navs-pills-top-profile1" aria-selected="false">
                    MPME par région
                  </button>
                </li>
                
                <li class="nav-item">
                  <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-messages11" aria-controls="navs-pills-top-messages1" aria-selected="false">
                    MPME par statut juridique
                  </button>
                </li>

              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="navs-pills-top-home1" role="tabpanel">
                  
                <SecteurActiviteVue/>
                  <!-- <table class="table" style="border: 1px solid #d9dee3 !important;">
                    <thead class="table-light">
                      <tr>
                        <th>Secteur d'activité</th>
                        <th>MPME</th> 
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr v-for="(secteur, index) in SecteurActiviteOptions" :key="index">
                        <td v-if="secteur.secteur_activite">{{ secteur.secteur_activite.NomSecteurActivite }}</td>
                        <td v-if="secteur.secteur_activite">{{ secteur.nbre || 0 }}</td>
                      </tr>
                     
                    </tbody>
                  </table> -->



                </div>
                <div class="tab-pane fade" id="navs-pills-top-profile1" role="tabpanel">
                  <table class="table"  style="border: 1px solid #d9dee3 !important;">
                    <thead class="table-light">
                     
                      <tr>
                        <th>Région</th>
                        <th>MPME</th> 
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr v-for="(region, index) in regionOptions" :key="index">
                      
                        <td>{{ region.region.NomRegion }}</td>
                           <td>{{ region.nbre || 0 }}</td>
                      </tr>    
                    </tbody>
                  </table>

                </div>
                <div class="tab-pane fade" id="navs-pills-top-messages1" role="tabpanel">
                  <label for="annee-select">Sélectionner une année :</label>
                  <select id="annee-select" ng-model="anneeChoisie" ng-change="updateFilter()">
                    <option value="Toutes">Toutes</option>
                    <!-- <option ng-repeat="year in yearList" value="{{year}}"> {{year}} </option> -->
                  </select>

                  <table class="table"  style="border: 1px solid #d9dee3 !important;">
                    <thead class="table-light">
                      <tr >
                        <th>Statut juridique</th>
                        <th>MPME</th> 
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr v-for="(statut, index) in statutJuridiqueOptions" :key="index">
                        <td>{{ statut.label }}</td>
                           <!-- Utiliser regionMpmeCounts pour afficher le nombre de MPME par région -->
                           <td>{{ statutJuridiqueMpmeCounts[statut.label] || 0 }}</td>
                        
                      </tr>
                    
                    </tbody>
                  </table>

                </div>
                <div class="tab-pane fade" id="navs-pills-top-messages11" role="tabpanel">
                  

                  <table class="table"  style="border: 1px solid #d9dee3 !important;">
                    <thead class="table-light">
                      <tr >
                        <th>Statut juridique</th>
                        <th>MPME</th> 
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr v-for="(statut, index) in statutJuridiqueOptions" :key="index">
                        <td>{{ statut.statut_juridique.NomStatutJuridique }}</td>
                           <!-- Utiliser regionMpmeCounts pour afficher le nombre de MPME par région -->
                           <td>{{ statut.mpmes || 0 }}</td>
                        
                      </tr>
                    
                    </tbody>
                  </table>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Our Team Section -->
    <!-- <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>TÉMOIGNAGES</h2>
        </div>

        <div class="container swiper-temoignage" data-aos="fade-up" data-aos-delay="100">
          <div class=" testimonial">

            <div class="testimonial-wrap">
              <div class="">
                <div class="testimonial-item">
                  <div class="d-flex align-items-center">
                    <img src="@/assets/img/17.png" class="testimonial-img flex-shrink-0" alt="">
                    <div>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="testimonial-wrap">
              <div class="">
                <div class="testimonial-item">
                  <div class="d-flex align-items-center">
                    <img src="@/assets/img/17.png" class="testimonial-img flex-shrink-0" alt="">
                    <div>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div> <div class="testimonial-wrap">
              <div class="">
                <div class="testimonial-item">
                  <div class="d-flex align-items-center">
                    <img src="@/assets/img/17.png" class="testimonial-img flex-shrink-0" alt="">
                    <div>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
           


          </div>
          <div class="swiper-pagination2"></div>
        </div>

      </div>
    </section> -->
        <!-- ======= Frequently Asked Questions Section ======= -->
        <section id="clients" class="clients" >
      <div class="section-header">
        <h2>Nos partenaires</h2>
        
      </div>
      <div class="container swiper-container" data-aos="zoom-out">   
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide" v-for="partenaire in partenairesOptions" :key="partenaire.id">
              <img v-if="partenaire.logo === null" src="@/assets/img/ninba1.png" class="img-fluid"  alt="">
				    <img :src="partenaire.logo" alt="" class="img-fluid">
            </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
    </section> 


</main>
<!-- End Présentation de la directiion Section -->
    </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import  "glightbox/dist/css/glightbox.css";
import  "glightbox/dist/js/glightbox.js";
import   GLightbox from 'glightbox';
import axios from '@/lib/axiosConfig.js'


import slide111 from "@/assets/img/slide/slide111.jpg"
import slide22 from "@/assets/img/slide/slide22.jpg"
import slide33 from "@/assets/img/slide/slide33.jpg"
import slide44 from "@/assets/img/slide/slide44.jpg"
import SecteurActiviteVue from '../../components/Public/Statistique/SecteurActivite.vue';



export default {
  name: 'DNPMECLAccueil',
  components: {
    SecteurActiviteVue
  },
  data() {
    return {
      items: [
          {
            src: slide111,
          },
          {
            src:slide22,
          },
          {
            src:slide33,
          },
          {
            src:slide44,
          },
          
        ],
      totalMpme:0,
    regionMpmeCounts: {},
    regionOptions: [], // Pour stocker les données des régions
    mpmeData: [], // Pour stocker les données des MPME
    partenairesOptions:[],
    regionMpmeCounts: {}, // Pour stocker les comptes de MPME par région
    SecteurActiviteOptions: [], // Vos options de secteurs d'activité
    secteurMpmeCounts: {}, // Stockez le nombre de MPME par secteur ici
    statutJuridiqueOptions: [], // Pour stocker les options des statuts juridiques
    statutJuridiqueMpmeCounts: {}, // Pour stocker les compteurs de PME par statut juridique
    totalEmplois:0,
    show1:false, show2:false, show3:false,


      
    };
  },
async  mounted() {
  await this.fetchPartenaires()
 
  const swiper = await new Swiper('.swiper-container', {
      speed: 400,
      loop: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 10
        }
      }
    });
  
  await this.fetchTotalEmploisAndMpmeData()
  await  new PureCounter();
    this.lightbox = GLightbox({ 
              selector: ".glightbox"
             });
await this.fetchDataActivite()
await this.fetchDataRegions() 
await this.fetchDataJuridique()
   
  },



  methods: {
    toggleCategory() {

      category.show = !category.show;
    
 
},
    async fetchPartenaires() {
  try {
    await this.$store.dispatch('fetchPartenairesData');
     this.partenairesOptions = JSON.parse(JSON.stringify(this.$store.getters['getPartenaires']));
    console.log('Partenaires récupérés :', this.partenairesOptions);

    // Continuez avec le reste de votre code pour traiter les partenaires
  } catch (error) {
    console.error('Erreur lors de la récupération des partenaires :', error.message);
  }
},
    async fetchTotalEmploisAndMpmeData() {
  try {
    await this.$store.dispatch('fetchTotalEmploisFemmeAndTotalMpme');
    this.totalEmplois = this.$store.getters['getTotalEmploisFemme'];
    this.totalMpme = this.$store.getters['getTotalMpme'].total;
    console.log('Données de la réponse:', this.totalEmplois , this.totalMpme);

  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error.message);
  }
},
async  fetchDataActivite() {
  try {
    const response = await axios.get('/secteurs-activites', {params: { with_relation: true}});
    if (response.data.status === 'success') {
      console.log('Données de la réponse 1:', response.data.data.data);
      this.SecteurActiviteOptions = response.data.data.data
    } else {
  
    }
  } catch (error) {
    console.error('Erreur lors de la requête GET :', error);
  }
},
async  fetchDataRegions() {
  try {
    const response = await axios.get('/regions', {params: { with_relation: true}});
    if (response.data.status === 'success') {
      console.log('Données de la réponse2 :', response.data.data.data);
      this.regionOptions = response.data.data.data
    } else {
  
    }
  } catch (error) {
    console.error('Erreur lors de la requête GET :', error);
  }
},
async  fetchDataJuridique() {
  try {
    const response = await axios.get('mpme/statistics/par-statut-juridiques');
    if (response.data.status === 'success') {
      console.log('Données de la réponse 3:', response.data.data);
       this.statutJuridiqueOptions = response.data.data
    } else {
  
    }
  } catch (error) {
    console.error('Erreur lors de la requête GET :', error);
  }
},


async fetchRegionOptions() {
    try {

      await this.$store.dispatch('fetchMpmeData');
      this.mpmeData = JSON.parse(JSON.stringify(this.$store.getters['getMpmeData']));
    

    //  await this.mpmeData.forEach(pme => {
    //   const personnelFemme =  pme.PersonnelPermanentFemme || 0;
    //   const personnelHomme = pme.PersonnelPermanentHomme || 0;
    //   this.totalPersonnelPermanent += personnelFemme + personnelHomme;
    //   this.totalPersonnelPermanentFemme += pme.PersonnelPermanentFemme || 0;
    //   this.totalPersonnelPermanentHomme  += pme.PersonnelPermanentHomme || 0;
    // });


    await this.$store.dispatch('fetchSecteurActiviteOptions'); // Action spécifique aux secteurs d'activité
    this.SecteurActiviteOptions = JSON.parse(JSON.stringify(this.$store.getters['getsecteurActiviteOptions']));
    console.log('eeee',this.SecteurActiviteOptions );

    await this.$store.dispatch('fetchRegionOptions');
      this.regionOptions = this.$store.getters['getRegionOptions2'];
      console.log('Options des mpme:', this.regionOptions);

      await this.$store.dispatch('fetchStatutJuridiqueOptions');
    this.statutJuridiqueOptions = JSON.parse(JSON.stringify(this.$store.getters['getStatutJuridiqueOptions']));
    console.log('Options des mpmestaurt:', this.statutJuridiqueOptions);

    this.secteurMpmeCounts = {};
    this.statutJuridiqueMpmeCounts = {};


    this.mpmeData.forEach(pme => {
      const secteurActivite = pme.PrincipalSecteurActivite; // Assurez-vous que la propriété qui contient le secteur d'activité est correcte
      if (secteurActivite) {
        if (!this.secteurMpmeCounts[secteurActivite]) {
          this.secteurMpmeCounts[secteurActivite] = 1; // Initialisez le compteur à 1 si le secteur d'activité n'existe pas encore
        } else {
          this.secteurMpmeCounts[secteurActivite]++; // Incrémente le compteur si le secteur d'activité existe déjà
        }
      }});

     console.log('Compteurs de MPME par secteur d\'activité :', this.secteurMpmeCounts);


      // this.mpmeData.forEach(pme => {
      //   const region = pme.Region; // Assurez-vous que la propriété qui contient la région est correcte
      //   if (region) {
      //     if (!this.regionMpmeCounts[region]) {
      //       this.regionMpmeCounts[region] = 1; // Initialisez le compteur à 1 si la région n'existe pas encore
      //     } else {
      //       this.regionMpmeCounts[region]++; // Incrémente le compteur si la région existe déjà
      //     }
      //   }});
      //   console.log('Compteurs de MPME par région :', this.regionMpmeCounts);

        this.mpmeData.forEach(pme => {
      const statutJuridique = pme.CodeStatutJuridique; // Assurez-vous que la propriété qui contient le statut juridique est correcte
      if (statutJuridique) {
        if (!this.statutJuridiqueMpmeCounts[statutJuridique]) {
          this.statutJuridiqueMpmeCounts[statutJuridique] = 1; // Initialisez le compteur à 1 si le statut juridique n'existe pas encore
        } else {
          this.statutJuridiqueMpmeCounts[statutJuridique]++; // Incrémente le compteur si le statut juridique existe déjà
        }
      }
    });

    console.log('Compteurs de PME par statut juridique :', this.statutJuridiqueMpmeCounts);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error.message);
    }
  },

  generateSecteurTable() {
    const secteurTable = [];
    for (const secteur in this.secteurMpmeCounts) {
      secteurTable.push({
        nomSecteur: secteur,
        nombre: this.secteurMpmeCounts[secteur],
      });
    }
    return secteurTable;
  },



  },
};
</script>

<style lang="css" scoped>
.swiper-slide{
  width: 150px !important;
    border: 1px solid var(--color-secondary);
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

}

.missions-bg {
    background: #ededed url('@/assets/img/skyscraper.jpg') fixed top center no-repeat;
}
.ts-pricing-box {
    margin: 20px 0;
    padding: 0;
    text-align: center;
    background: #f9f9f9;
}

.ts-pricing-box .ts-pricing-header {
    background: #252525;
    color: #fff;
    position: relative;
    padding: 30px 20px;
}
.ts-pricing-box .ts-pricing-price {
    font-size: 44px;
    color: #fff;
    margin: 15px 0 0;
    display: inline-block;
    font-family: auto;
}

.accordion>.card>.card-header {
    border-radius: 0;
    margin-bottom: -1px;
}

.accordion-group .card-header .btn {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    padding: 13px 15px;
    color: #fff;
    padding-bottom: 10px;
    width: 100%;
    display: flex;
        justify-content: space-between;
    align-items: center;
}
.accordion-group .card-header .btn i {

padding: 2px 5px 0;
    border-radius: 3px;
    background-color: var(--color-primary);
    font-weight: bold !important;
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

@media (min-width: 1400px) {
.class3{

  align-items: center;
}
}

@media (max-width: 1400px) {
.class3{

  align-items: center;
  align-content:center;

}


.class5{


margin-top: 77px;
}
}

@media (max-width: 1200px) {
.class3{

flex-direction: column;

}
.class4 , .class5{

width: 75%;
}


}

@media (max-width: 1000px) {
  .class1 , .class2{
    width: 100%;
  }
  .services .service-item {
    width: 100%;
  }
  .services sections-bg{
  
  padding:30px 0;
  }

}


.immg  {
    /* object-fit: cover; */
    filter: brightness(70%) !important;
    /* background-color: rgba(0, 0, 0, 0.45) !important; */
}

.absolute-fill {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.transition-height {
  transition: all 5s; /* Vous pouvez ajuster la durée et la fonction d'accélération selon vos préférences */
}


</style>