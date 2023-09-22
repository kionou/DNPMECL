<template>
     <Loading v-if="loading"></Loading>
    <div>
        <div>
            <div class="section-header ">
          <h2>ACTUALITES DE LA DIRECTION NATIONALE</h2>
      </div>
        <div  class="contenu d-flex justify-content-center align-items-center flex-wrap" data-aos="fade-up"
          data-aos-delay="100">
   <div class="box" @click="$router.push({ path: '/actualites/detail', })">
    <div class="box-top">
      <img class="box-image" src="@/assets/img/actualite/1.jpeg" alt="">
      <div class="title-flex">
        <small><i class="bi bi-clock"></i> Publié le 20-octobre-2021</small>
        <h3 class="box-title">DÉPLOIEMENT DE LA 5G, LE MINISTRE AMADOU COULIBALY ÉCHANGE AVEC UN ACTEUR</h3>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="box-top">
      <img class="box-image" src="@/assets/img/actualite/2.jpg" alt="Girl Eating Pizza">
      <div class="title-flex">
        <small><i class="bi bi-clock"></i> Publié le 20-octobre-2021</small>
        <h3 class="box-title">DÉPLOIEMENT DE LA 5G, LE MINISTRE AMADOU COULIBALY ÉCHANGE AVEC UN ACTEUR</h3>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="box-top">
      <img class="box-image" src="@/assets/img/actualite/3.webp" alt="Girl Eating Pizza">
      <div class="title-flex">
        <h3 class="box-title">DÉPLOIEMENT DE LA 5G, LE MINISTRE AMADOU COULIBALY ÉCHANGE AVEC UN ACTEUR</h3>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="box-top">
      <img class="box-image" src="@/assets/img/actualite/4.webp" alt="Girl Eating Pizza">
      <div class="title-flex">
        <h3 class="box-title">DÉPLOIEMENT DE LA 5G, LE MINISTRE AMADOU COULIBALY ÉCHANGE AVEC UN ACTEUR</h3>
      </div>
    </div>
  </div>

</div>
<div class="container_pagination">
  <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
</div>
    </div>
    </div>
</template>

<script>
import Loading from '../../components/Public/other/preloader.vue';
import Pag from '../../components/Public/other/pag.vue';
export default {
    name: 'DNPMECLActualite',
    components: {
 Loading , Pag

},

    data() {
        return {
            loading:false,
            currentPage: 1,
            itemsPerPage: 15,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>


:root {
  --purple: hsl(240, 80%, 89%);
  --pink: hsl(0, 59%, 94%);
  --light-bg: hsl(204, 37%, 92%);
  --light-gray-bg: hsl(0, 0%, 94%);
  --white: hsl(0, 0%, 100%);
  --dark: hsl(0, 0%, 7%);
  --text-gray: hsl(0, 0%, 30%);
}


h3 {
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;

}
.section-header {
  padding: 20px 0 !important;

}

.contenu {
padding: 15px 10px;
}
.box {
  display: flex;
  flex-direction: column;
  width: 300px;
  position: relative;
  background: #fff;
  border: 1px solid #dee2e6;
  margin: 10px 5px;
  padding: 10px;
  border-radius: 3px;
}
.box:hover .box-image{
    filter: brightness(70%) !important;
}

.box:hover{

cursor: pointer;
color: var(--color-secondary);
}
.box-top {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;
}

.box-image {
  width: 100%;
  height: 140px;     
  object-fit: cover;
  object-position: 50% 20%;

  /* 235px pour height */
}

.title-flex {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-left: 12px;
}

.box-title {
  border-left: 3px solid var(--purple);
  
}

/* RESPONSIVE QUERIES */

@media (min-width: 320px) {
  /* .title-flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
  } */

}

@media (min-width: 460px) {
  /* .title-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  } */

}

@media (min-width: 640px) {
  /* .title-flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
  } */
}

@media (min-width: 840px) {
  /* .title-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  } */
}

@media (min-width: 1024px) {
/* 
  .title-flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
  } */
}



.container_pagination {
  width: auto;
  text-align: end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  margin: 5px;

}
small{
    color: #777;
    width: 100%;
    justify-content: flex-start;

}
small i {

margin-right: 5px;
}

</style>