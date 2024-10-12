<template>
  <div>
    <Loading v-if="loading"></Loading>
     <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">actualités</h1>
                  <nav aria-label="breadcrumb">
                     
                    <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="/">accueil</a></li>
                    <li class="breadcrumb-item"><a href="/dnpmecl/actualites">Dnpmecl</a></li>
                    <li class="breadcrumb-item active" aria-current="page">actualités</li>
                    </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
       </div>
    <div>
        <div>
          <div class="section-header ">
          <h2>ACTUALITES DE LA DIRECTION NATIONALE</h2>
      </div>
        <div  class="contenu d-flex justify-content-center align-items-center flex-wrap" data-aos="fade-up"
          data-aos-delay="100">
          <div v-if="paginatedItems.length === 0" class="noresul">
             <span> Aucune Actualité </span>
             </div> 

   <div v-else class="box"  v-for="actualite in paginatedItems" :key="actualite.id"  @click="$router.push({ path: `/actualites/${actualite.id}`, })">
    <div class="box-top">
      <div class="box-image">
        <img v-if="actualite.images === null" class="" src="@/assets/img/ninba1.png" alt="image-actualite" > 
      <img  v-else class="" :src="updatePicture( actualite.images)" alt="image-actualite" > 
      </div>
    

      <div class="title-flex">
        <small><i class="bi bi-clock"></i> Publié {{datenew (actualite.created_at)}}</small>
        <h3 class="box-title text-uppercase">{{ truncateTitle(actualite.titre, 70) }}</h3>

      </div>
    </div>
  
  </div>


</div>
<div class="container_pagination">
  <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
</div>
    </div>
    </div>
  </div>
   
</template>

<script>
import Loading from '../../components/Public/other/preloader.vue';
import Pag from '../../components/Public/other/pag.vue';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

export default {
    name: 'DNPMECLActualite',
    components: {
 Loading , Pag

},
computed: {


totalPages() {
return Math.ceil(this.ActualitesOptions.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.ActualitesOptions.slice(startIndex, endIndex);
},
},

    data() {
        return {
            loading:true,
            currentPage: 1,
            itemsPerPage: 12,
            ActualitesOptions:[],
            totalPageArray: [], 
           
        };
    },

   async mounted() {
    await this.fetchActualites(1)
        
    },

    methods: {

      truncateTitle(title, maxLength) {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  },

      updatePicture(picture){
       return picture.split('|')[0]
        // Object.keys(monObjet).map(key => monObjet[key])
      },
      datenew(isoDate){
        const dateObj = parseISO(isoDate);
     
       return format(dateObj, 'dd MMMM yyyy HH:mm:ss', { locale: fr });
     
      },
      updateCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Utilisez 'auto' pour un défilement instantané
      });
    },
    updatePaginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
     
      const endIndex = startIndex + this.itemsPerPage;
      return this.ActualitesOptions.slice(startIndex, endIndex);
    },
  async fetchActualites(page) {
  try {
    await this.$store.dispatch('fetchActualites' , page);
    const actualites = JSON.parse(JSON.stringify(this.$store.getters['getActualites']));
 
   
    this.totalPageArray = this.totalPageArray.concat(actualites.data); // Fusion des tableaux des différentes pages

        this.ActualitesOptions  = this.totalPageArray.filter(partenaire => partenaire.publish === 1);       
        


          if (page === 1) {
            this.ActualitesOptions = this.totalPageArray.filter(partenaire => partenaire.publish === 1);
        const totalPages = actualites.last_page;
        this.totalPages = totalPages;
        this.compterJusqua(totalPages);
       


      }
      this.loading = false
    

    // Continuez avec le reste de votre code pour traiter les actualités
  } catch (error) {

  }
},

compterJusqua(nombre) {
  for (let i = 2; i <= nombre; i++) { // Commence à 2 car la première page a déjà été chargée
    this.fetchActualites(i);
  }
},

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

/* debut banier */
.banner-area {
    position: relative;
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #266486;
    min-height: 250px;
    background-image: url('@/assets/img/banner/actualites1.jpg'); 
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
.contenu {
padding: 15px 10px;
}
.box {
  display: flex;
  flex-direction: column;
  height:300px;
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
  height: 186px;     
  object-fit: cover;
  object-position: 50% 20%;

  
}
.box-image img {
  width: 100%;
  height: 100%;     
  /* object-fit: cover;
  object-position: 50% 20%; */

  
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