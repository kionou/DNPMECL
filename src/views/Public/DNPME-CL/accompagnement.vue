<template>
   <Loading v-if="loading"></Loading>
    <div>
      <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">ACCOMPAGNEMENT</h1>
                  <nav aria-label="breadcrumb">
                      <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                        <li class="breadcrumb-item"><a href="/dnpmecl/formalisations">dnpmecl</a></li>
                        <li class="breadcrumb-item active" aria-current="page">accompagnement</li>
                      </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
  </div>
     <section id="services" class="services sections-bg">
      <div class="" data-aos="fade-up">

        <!-- <div class="section-header container">
          <h2 class="text-uppercase">Etapes de formalisation</h2>
          <p>Formaliser votre entreprise c’est aussi lui permettre d’accéder aux opportunités
             en matière d’appel d’offre mais également lui faire bénéficier d’appui
             techniques et financiers grâce aux différents fonds prévus à cet effet. </p>

        <p class="mt-3" style="font-weight: bolder;">Sélectionner la forme d’entreprise que vous voulez créer !</p>
             
        </div> -->

        <div v-if="paginatedItems.length === 0" class="noresul">
                     <span> Aucun accompagnement !!! </span>
             </div> 
        <div  v-else class=" class1" data-aos="fade-up" data-aos-delay="100">
        
        
          <div class="box" v-for="accompagnement in paginatedItems" :key="accompagnement.id">
            <div class="service-item position-relative">
              
              <h3> {{ accompagnement.Intitule }} </h3>
              <p>
                {{ truncateTitle(accompagnement.Description, 70) }}

              </p>
                <router-link class="sign"  :to="'/dnpme/accompagnement/' + accompagnement.id" >Detail</router-link>

            </div>
          </div>

        

        </div>

      </div>
    </section>
    <div class="container_pagination">
  <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
</div>
    </div>
</template>

<script>
import Loading from '@/components/Public/other/preloader.vue';
import Pag from '@/components/Public/other/pag.vue';

export default {
    name: 'DNPMECLReglementation',
    components: {
   Loading , Pag

},

computed: {


totalPages() {
return Math.ceil(this.AccompagnementsOptions.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.AccompagnementsOptions.slice(startIndex, endIndex);
},
},
    data() {
        return {
          loading:true,
            currentPage: 1,
            itemsPerPage: 12,
            AccompagnementsOptions:[],
            totalPageArray: [],
        };
    },

   async mounted() {
         
    await this.fetchAccompagnement(1)
     
    },

    methods: {
        
    },


    methods: {

      truncateTitle(title, maxLength) {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
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
      return this.AccompagnementsOptions.slice(startIndex, endIndex);
    },
  async fetchAccompagnement(page) {
  try {
    await this.$store.dispatch('fetchAccompagnement' , page);
    const accompagnement = JSON.parse(JSON.stringify(this.$store.getters['getAccompagnementData']));
   
   
    this.totalPageArray = this.totalPageArray.concat(accompagnement.data); // Fusion des tableaux des différentes pages
     
        this.AccompagnementsOptions  = this.totalPageArray.filter(partenaire => partenaire.Valid === 1);  
    
        


          if (page === 1) {
            this.AccompagnementsOptions = this.totalPageArray.filter(partenaire => partenaire.Valid === 1);
        const totalPages = accompagnement.last_page;
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
    this.fetchPersonnel(i);
  }
},
    },
};
</script>

<style lang="css" scoped>

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

.class1{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

}
.box {
  display: flex;
  flex-direction: column;
  width: 400px;
  position: relative;
  background: #fff;
  border: 1px solid #dee2e6;
  margin: 10px 5px;
  padding: 10px;
  border-radius: 3px;
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

</style>