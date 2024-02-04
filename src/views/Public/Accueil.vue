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
            <router-link to="/inscription-mpme" class="btn-get-started">Enregistrez votre entreprise</router-link>
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
            <router-link to="/inscription-mpme" class="btn-get-started">Identifier votre entreprise</router-link>
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
      <!-- <p>
        La Direction Nationale des Petites et Moyennes Entreprises et du Contenu
         Local sous tutelle du Ministère du Commerce, de l’Industrie et des PME a
          pour objectif d’accompagner et de promouvoir les activités des Micros, 
          Petites et Moyennes Entreprises et de
         vulgariser la loi portant Contenu Local en République de Guinée. 

      </p> -->

      <p class="text-justify" style="font-size:18px;">
              Placée sous la tutelle du Ministère du Commerce, de l’Industrie et des Petites et Moyennes Entreprises, la Direction Nationale des Petites et Moyennes Entreprises et du Contenu Local (DNPMECL) est l’une des Directions
               Centrales du Ministère du Commerce, de l’Industrie et des PME. Elle a été créée par Décret N° D / 2009 /167 /PRG/SGG du 19 aout 2009 et modifiée par Décret N° D/2022/0026/PRG/CNRD/SGG du 13 Janvier 2022.   Elle a pour mission, la mise en œuvre de la politique du Gouvernement dans le domaine de la promotion et du développement des Micros, Petites et Moyennes Entreprises et du Contenu Local et d’en assurer le suivi. 
            </p>
            <p class="text-justify" style="font-size:18px;">
             
            </p>
            <p class="text-justify" style="font-size:18px;">
            

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
            <li><i class="bi bi-check-circle-fill"></i>D’élaborer les projets de textes législatifs et réglementaires relatifs aux micros, petites et moyennes entreprises et contenu local et de veiller à leur application ; </li>
            <li><i class="bi bi-check-circle-fill"></i>D’élaborer et de mettre en œuvre les stratégies, plans, programmes et projets relatifs à la promotion et au développement des Micros, Petites et Moyennes Entreprises et du Contenu Local ;</li>
            <li><i class="bi bi-check-circle-fill"></i>D’établir et de développer des relations de partenariat avec les institutions nationales, bi et multilatérales spécialisées dans les domaines des Micros, Petites et Moyennes Entreprises et du Contenu Local ;</li>

            <li><i class="bi bi-check-circle-fill"></i>De promouvoir l’entreprenariat féminin et des jeunes dans le domaine des Micros, Petites et Moyennes Entreprises ; </li>
            <li><i class="bi bi-check-circle-fill"></i>De favoriser la participation des Micros, Petites et Moyennes Entreprises aux rencontres nationales et internationales traitant des questions relative au secteur ;</li>
            <li><i class="bi bi-check-circle-fill"></i>De promouvoir la créativité et l’innovation dans les domaines des Micros, Petites et Moyennes Entreprises et du Contenu Local ;</li>

            <li><i class="bi bi-check-circle-fill"></i>D’identifier et de promouvoir les startups et d’en assurer le suivi ;</li>
            <li><i class="bi bi-check-circle-fill"></i>D’encadrer les interventions des structures d’accompagnements des entreprises évoluant dans les domaines des micros, petites et moyennes entreprises ; </li>


            <li><i class="bi bi-check-circle-fill"></i>De coordonner toutes les actions entreprises dans le domaine des Micros, Petites et Moyennes Entreprises et du contenu local ;  </li>
            <li><i class="bi bi-check-circle-fill"></i>D’apporter des appui-conseils aux promoteurs des Micros, Petites et Moyennes Entreprises ;</li>
            <li><i class="bi bi-check-circle-fill"></i>De mettre en place et de développer un système d’information en faveur des promoteurs, entrepreneurs, institutions et autres acteurs impliqués dans la création et le développement des Micros, Petites et Moyennes Entreprises ;</li>

            <li><i class="bi bi-check-circle-fill"></i>De valider les plans d’actions des centres d’appui aux Petites et Moyennes Entreprises et d’en assurer le suivi ;  </li>
            <li><i class="bi bi-check-circle-fill"></i>D’œuvrer à la mise en place, au bon fonctionnement et à la coordination d’infrastructures dédiées aux Micros, Petites et Moyennes Entreprises y compris les Centres d’Appui aux Petites et Moyennes Entreprises et les Structures d’Accompagnements des Entreprises ;</li>
            <li><i class="bi bi-check-circle-fill"></i>De promouvoir la sous-traitance et le partenariat en faveur des Micros, Petites et Moyennes Entreprises et le développement du Contenu Local ;</li>

            <li><i class="bi bi-check-circle-fill"></i>D’œuvrer à la mise en place et au bon fonctionnement du cadre de concertation des acteurs concernés par les Micros, Petites et Moyennes Entreprises et le Contenu Local ;</li>
            <li><i class="bi bi-check-circle-fill"></i>De coordonner les interventions des partenaires au développement et autres structures d’appui en faveur des Micros, Petites et Moyennes Entreprises et de la promotion du Contenu Local ;</li>



            <li><i class="bi bi-check-circle-fill"></i>De délivrer le certificat de labélisation des start-ups et la carte professionnelle des Micros, Petites et Moyennes Entreprises ;</li>
            <li><i class="bi bi-check-circle-fill"></i>De s’assurer de la prise en compte du Contenu Local dans les projets et programmes de développements ;</li>

            <li><i class="bi bi-check-circle-fill"></i>De s’assurer de la prise en compte de la dimension environnementale dans les programmes et projet des Micros, Petites et Moyennes Entreprises ;</li>
            <li><i class="bi bi-check-circle-fill"></i>De participer aux rencontres nationales, sous régionales, régionales et internationales traitant des questions de Micros, Petites et Moyennes Entreprises et de Contenu Local.</li>
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
                      
                          <ul class='text-justify'>
                            <li><i class="bi bi-check-circle-fill"></i> De promouvoir la créativité et l’innovation dans les domaines des Micros, Petites et Moyennes Entreprises et du Contenu Local ;</li>
                            <li><i class="bi bi-check-circle-fill"></i> D’identifier et de promouvoir les startups et d’en assurer le suivi ;</li>
                            <li><i class="bi bi-check-circle-fill"></i> D’encadrer les interventions des structures d’accompagnements des entreprises évoluant dans les domaines des micros, petites et moyennes entreprises ; </li>
                           
                          
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
                      
                            <ul class='text-justify'>
                            <li><i class="bi bi-check-circle-fill"></i> Construction des Centres d’Appuis aux Petites et Moyennes Entreprises dans les sept (7) régions administratives, celui de Conakry est déjà opérationnel;</li>
                            <li><i class="bi bi-check-circle-fill"></i> Elaboration de la loi sur les Startups ;</li>
                            <li><i class="bi bi-check-circle-fill"></i> Proposition d'un Décret qui règlemente le secteur des Structures d'Appui aux Entreprises ; </li>
                            <li><i class="bi bi-check-circle-fill"></i> S'assurer que 90% des entreprises respectent la loi portant Contenu Local.</li>
                          
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
                  <button type="button"  class="nav-link  active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-home1" aria-controls="navs-pills-top-home1"
                  @click="toggleChart('SecteurActivite')"
                :class="{ active: activeChart === 'SecteurActivite' }"
                  aria-selected="true">
                    MPME par secteur d'activité
                  </button>
                </li>

                <li class="nav-item">
                  <button type="button" class="nav-link" 
                  @click="toggleChart('Region')"
                :class="{ active: activeChart === 'Region' }"
                  role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-profile1" aria-controls="navs-pills-top-profile1" aria-selected="false">
                    MPME par région
                  </button>
                </li>
                
                <li class="nav-item">
                  <button type="button" class="nav-link"
                  @click="toggleChart('Juridique')"
                :class="{ active: activeChart === 'Juridique' }"
                  role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-messages11" aria-controls="navs-pills-top-messages1" aria-selected="false">
                    MPME par statut juridique
                  </button>
                </li>

              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="navs-pills-top-home1" role="tabpanel">   
                <SecteurActiviteVue/>
                 
                </div>
                <div class="tab-pane fade" id="navs-pills-top-profile1" role="tabpanel">
                  <Region/>
                </div>
               
                <div class="tab-pane fade" id="navs-pills-top-messages11" role="tabpanel">
                  <Juridique/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Our Team Section -->
     <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>QUELQUES OFFRES</h2>
        </div>

        <div class="container swiper-temoignage" data-aos="fade-up" data-aos-delay="100">
          <div class=" testimonial">

            <div class="task"  v-for="offre in filterOffres" :key="offre.id">
              <div class="tag">
                  <h5>
                      {{ offre.titre }}
                  </h5>

                  <div class="texte">
                      <!-- <p class="texte-content chef"><i class="bi bi-briefcase-fill"></i> <span> {{obtenirValeursPourCles(offre.liste_sous_secteurs)}} </span></p> -->
                      <p class="texte-content open"> <i class="bi bi-calendar-plus-fill"></i> <span> {{ offre.dateCreation }}</span></p>
                      <p class="texte-content close"> <i class="bi bi-calendar2-x-fill"></i> <span> {{ offre.dateCloture }}</span></p>
                      <!-- <p class="texte-content maps"><i class="bi bi-geo-alt-fill"></i> <span>Nzérékoré , Macenta</span> -->
                      <!-- </p> -->


                  </div>
              </div>


               <div class="boutton">
          <p @click="$router.push({ path: `/opportunites/${offre.CodeOffre}`, })" id="btn">Detail<span></span></p>
             </div>


          </div>
          </div>
          <div class="" style="display: flex; justify-content: flex-end;">
          <p @click="$router.push({ path: '/opportunites' })" id="btn">voir plus<span></span></p>
             </div>
          <div class="swiper-pagination2"></div>
        </div>

      </div>
    </section> 
        <!-- ======= Frequently Asked Questions Section ======= -->
        <section id="clients" class="clients" >
      <div class="section-header">
        <h2>Nos partenaires</h2>
        
      </div>
      <div class="container swiper-container" data-aos="zoom-out">   
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide" v-for="partenaire in partenairesOptions" :key="partenaire.id" @click="$router.push({ path: `/partenaires/${partenaire.CodePartenaire}`, })">
              <img v-if="partenaire.logo === null" src="@/assets/img/ninba1.png" class="img-fluid"  alt="">
				    <img :src="partenaire.logo" alt="" class="img-fluid h-100" >
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
import { ref } from 'vue';


import slide111 from "@/assets/img/slide/slide111.jpg"
import slide22 from "@/assets/img/slide/slide22.jpg"
import slide33 from "@/assets/img/slide/slide33.jpg"
import slide44 from "@/assets/img/slide/slide44.jpg"
import SecteurActiviteVue from '../../components/Public/Statistique/tbSecteur.vue';
import Region from '../../components/Public/Statistique/tbRegion.vue';
import Juridique from '../../components/Public/Statistique/tbJuridiques.vue';



export default {
  name: 'DNPMECLAccueil',
  components: {
    SecteurActiviteVue , Region , Juridique
  },
  setup() {
    const activeChart = ref(null);

    function toggleChart(chartName) {
      // Mettre à jour le graphique actif
      activeChart.value = chartName;
    }

    return {
      toggleChart,
      activeChart,
    };
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
    totalPageArray: [], 
    filterOffres:[],
    mpmeData: [], // Pour stocker les données des MPME
    partenairesOptions:[],
    regionMpmeCounts: {}, // Pour stocker les comptes de MPME par région

    secteurMpmeCounts: {}, // Stockez le nombre de MPME par secteur ici
    statutJuridiqueOptions: [], // Pour stocker les options des statuts juridiques
    statutJuridiqueMpmeCounts: {}, // Pour stocker les compteurs de PME par statut juridique
    totalEmplois:0,
    show1:false, show2:false, show3:false,
    


      
    };
  },
async  mounted() {
  await this.fetchPartenaires()
  await    this.fetchgetOffreMpme(1)
 
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



async fetchRegionOptions() {
    try {

      await this.$store.dispatch('fetchMpmeData');
      this.mpmeData = JSON.parse(JSON.stringify(this.$store.getters['getMpmeData']));
    
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
  async fetchgetOffreMpme(page) {
  try {
    const response = await axios.get(`/offres/publique?page=${page}`);
    
    if (response.data.status === 'success') {
      this.totalPageArray = this.totalPageArray.concat(response.data.data.data);

      if (page === 1) {
        this.totalPageArray = this.totalPageArray;
        const totalPages = response.data.data.last_page;
        this.totalPages = totalPages;
        this.compterJusqua(totalPages);
      }

      const offresPubliees = this.totalPageArray.filter(offre => offre.publish === 1);

      // Trier les offres par date de création
      offresPubliees.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      // Prendre les trois dernières offres
      
      this.filterOffres = offresPubliees.slice(0, 3);
      console.log(this.filterOffres); // Vous pouvez ajuster cela en fonction de vos besoins
      this.loading = false;
    }  
  } catch (error) {
    console.error('Erreur lors de la récupération des offres publiques :', error);
  }
},


    compterJusqua(nombre) {
  for (let i = 2; i <= nombre; i++) { // Commence à 2 car la première page a déjà été chargée
    this.fetchgetOffreMpme(i);
  }
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
    cursor: pointer;

}

.missions-bg {
    /* background: #ededed url('@/assets/img/skyscraper.jpg') fixed top center no-repeat; */
 
    background: rgb(246, 246, 246);

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

@media (max-width: 768px) {
  .class4 , .class5 {
    width: 100%;
    margin-top: 0 !important;
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

.ps-0{

  border: 1px solid hsl(240deg 7% 62% / 46%);
  height: 375px;
    overflow-y: scroll;
    width: auto;
    border-radius: 10px;
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) #fff;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 11px;
}



*::-webkit-scrollbar-thumb {
  background-color: var(--color-primary);
  border-radius: 20px;
  border: 4px solid #fff;
}


.task {
  position: relative;
  color: #2e2e2f;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  margin: 0 10px 10px 0;
  border: 3px dashed transparent;
  max-width: 330px;
  width: 100%;
  height: 221px;
}


/* .task:hover {
box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
border-color: rgba(162, 179, 207, 0.2) !important;
background-color: var(--color-primary);
color: white !important;
}
.task:hover .texte-content {
  color: white !important;
} */
.task h5 {
  color: #333;
  text-align: center;
}

.texte-content bi {
  font-size: 14px;

}

.texte-content .chef {
  color: #777;

}

.texte-content .open {
  color: #999999;
}

.texte-content .close {
  color: #999999;

}

.texte-content .maps {
  color: #999999;

}

.bi-briefcase-fill {

  color: #f5851e;
}

.bi-calendar-plus-fill {

  color: rgb(4, 243, 123);

}

.bi-calendar2-x-fill {

  color: red;

}

.bi-geo-alt-fill {

  color: var(--color-secondary);

}


.texte-content {
  /* color: #6f6f6f !important; */
  font-weight: bold;
  font-size: 13px;

}



p {
  margin-bottom: 0 !important;
}



#btn {
  padding: 1em 2em;
  font-size: 10px;
  font-weight: 500;
  color: #000;
  background-color: var(--color-secondary);
  border: none;
  border-radius: 45px;
  /* box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  outline: none;
}

#btn:hover {
  background-color: #fff;
  border: 1px solid var(--color-secondary);

}

.boutton {

  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  bottom: 8px;
  position: absolute;
  left: -11px;


}
</style>