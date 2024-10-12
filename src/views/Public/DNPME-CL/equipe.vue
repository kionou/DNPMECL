<template >
    <Loading v-if="loading"></Loading>
    <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">EQUIPE-DIRECTION</h1>
                  <nav aria-label="breadcrumb">
                      <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                        <li class="breadcrumb-item"><a href="/dnpmecl/formalisations">dnpmecl</a></li>
                        <li class="breadcrumb-item active" aria-current="page">equipe-direction</li>
                      </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
  </div>
  <div class="section-header ">
          <h2>EQUIPE DE LA DIRECTION</h2>
      </div>

  <div class="col-md-12">
            <div class="main-container fl-wrap fix-container-init">
                <!--post-related-->
                <div class="post-related fl-wrap" style="margin-top: 10px;margin-bottom: 20px;">
                    <div class=" section-title">
                        <h2>Les Directeurs de Cabinet, le Chef de Cabinet et les Conseillers du Ministre</h2>
                    </div>
                    <!-- post-related -->
                    <div v-if="paginatedItems.length === 0" class="noresul">
                     <span> Aucune Equipe !!! </span>
             </div> 
                    <div v-else   class=" row justify-content-center">
                                                    <!-- 1  -->
                            <div v-for="equipe in paginatedItems" :key="equipe.id" class="item-related-equipe col-md-3 show-reg-form mr-3" style="height: 370px; cursor:pointer;">
                                <a v-if="equipe.PhotoPersonnel === null" ng-click="getEquipe(1)"><img src="@/assets/img/12.jpg" alt=""></a>
                                <a  v-else ng-click="getEquipe(1)"><img :src="equipe.PhotoPersonnel" alt=""></a>
                                <div class="item-related_content fl-wrap" style="background-color: white !important;">
                                    <h3 v-if="equipe.SexePersonnel === 'M'" class="srf_btn htact show-reg-form hover"><a ng-click="getEquipe(1)"> Monsieur {{equipe.NomPersonnel}} {{equipe.PrenomsPersonnel}} </a></h3>
                                    <h3  v-else class="srf_btn htact show-reg-form hover"><a ng-click="getEquipe(1)"> Madame {{equipe.NomPersonnel}} {{equipe.PrenomsPersonnel}}</a></h3>
                                    <h3>{{equipe.PostePersonnel}} </h3>
                                    <ul class="pwic_opt">
                                    </ul>
                                </div>
                            </div>
                           
                            
                            
                           
                          
                        
                                            </div>
                </div>
                <!-- post-related  end-->
            </div>

            <div class="container_pagination">
  <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
</div>
</div>
   
</template>
<script>
import Loading from '@/components/Public/other/preloader.vue';
import Pag from '@/components/Public/other/pag.vue';
export default {
    components: {
   Loading , Pag

},

computed: {


totalPages() {
return Math.ceil(this.EquipesOptions.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.EquipesOptions.slice(startIndex, endIndex);
},
},
    data() {
        return {
            loading:true,
            currentPage: 1,
            itemsPerPage: 12,
            EquipesOptions:[],
            totalPageArray: [],
        }
    },
    async mounted() {
    await this.fetchPersonnel(1)
        
    },
    methods: {
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
      return this.EquipesOptions.slice(startIndex, endIndex);
    },
  async fetchPersonnel(page) {
  try {
    await this.$store.dispatch('fetchPersonnel' , page);
    const Personnels = JSON.parse(JSON.stringify(this.$store.getters['getPersonnelData']));

   
    this.totalPageArray = this.totalPageArray.concat(Personnels.data); // Fusion des tableaux des différentes pages
      
        this.EquipesOptions  = this.totalPageArray.filter(partenaire => partenaire.Publish === 1);  
        
        


          if (page === 1) {
            this.EquipesOptions = this.totalPageArray.filter(partenaire => partenaire.Publish === 1);
        const totalPages = Personnels.last_page;
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
}
</script>
<style lang="css" scoped>

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
.section-header {
  padding: 20px 0 !important;

}
.fl-wrap {
    /* float: left; */
    width: 100%;
    position: relative;
}

.section-title {
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    position: relative;
}

.section-title h2 {
    text-transform: uppercase !important;
}

.section-title h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #292929;
}

.item-related-equipe {
    margin-bottom: 20px;
    overflow: hidden;
    border: 1px solid #e5e8ed !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #21ab7f47 !important; */
}

a {
    text-decoration: none;
    position: relative;
    color: #000;
}

.item-related-equipe img {
    width: 205px;
    height: 220px;
}

.item-related_content {
    padding: 15px 20px;
    background: #f9f9f9;
    border: 1px solid #eee;
    border: none;
}

.item-related_content h3 {
    text-transform: uppercase !important;
}

.item-related h3, .item-related-equipe h3 {
    /* float: left; */
    width: 100%;
    font-weight: 600;
    font-size: 12px;
    padding-bottom: 4px;
    text-align: center;
}
.srf_btn, .search_btn {
    margin-left: 0;
    font-size: 14px;
    margin-top: 20px;
}
.show-cart, .srf_btn, .search_btn {
    float: right;
    font-size: 16px;
    /* color: #666; */
    color: #000;
    cursor: pointer;
    position: relative;
    width: 70px;
    margin-left: 24px;
    border-left: 1px solid #eee;
    text-align: center;
    box-sizing: border-box;
    font-weight: 600;
}

ol, ul {
    list-style: none;
}
    
</style>