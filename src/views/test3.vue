<template>
  <div>
    <section id="hero" class="hero" style="padding: 0 !important;">
      <v-carousel :cycle="true" width="100%"  :show-arrows="false"
  >
    <v-carousel-item v-for="(item,i) in items" :key="i"  >
      <v-img :src="item.src" class="fill-height immg " cover >
      </v-img>
        <v-container fill-height>
        <div class="hero_content absolute-fill">
      <div class="rowe gy-5" data-aos="fade-in">
        <div class="hero_content1   text-center text-lg-start" style="margin-bottom:auto">
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
      </div>
    </div>
       
      </v-container>

                 
     

    </v-carousel-item>
  </v-carousel>
 
  </section>

  </div>
</template>

<script>

import slide1 from "@/assets/img/slide/slide1.jpg"
import slide2 from "@/assets/img/slide/slide2.jpg"
import slide3 from "@/assets/img/slide/slide3.jpg"
import slide4 from "@/assets/img/slide/slide4.jpg"

export default {
  name: 'DNPMECLTest3',

  data() {
    return {
      items: [
          {
            src: slide1,
          },
          {
            src:slide2
          },
          {
            src:slide3,
          },
          {
            src:slide4,
          },
        ],
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="css" scoped>
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


</style>


