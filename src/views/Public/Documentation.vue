<template>
  <Loading v-if="loading"></Loading>
  <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">RÉFORMES ET TEXTES DE LOIS</h1>
                  <nav aria-label="breadcrumb">
                     
                    <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="/">accueil</a></li>
                    <li class="breadcrumb-item"><a href="/dnpmecl/Reformes-textes-de-lois">Dnpmecl</a></li>
                    <li class="breadcrumb-item active" aria-current="page">RÉFORMES ET TEXTES DE LOIS</li>
                    </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
       </div>
  <div class="container_content">
    <div class="section-header pt-5">
      <h2>RÉFORMES ET TEXTES DE LOIS</h2>
    </div>
    <div class="noresul" v-if="categoriesData.length === 0">Aucun document pour le moment !!!</div>

    <div class="content" v-else>

      <div class="doc">

        <div  class="infoss"  v-for="(category, categoryIndex) in categoriesData" :key="categoryIndex">
        <div
          @click="toggleCategory(categoryIndex ,category )"
          class="info-item d-flex justify-content-center align-items-center"
          :class="{ 'margin-zero': category.show }"
        >
          <i class="bi bi-file-pdf flex-shrink-0"></i>
          <div>
            <p>{{ category.NomCategorie }}</p>
          </div>
          <i :class="category.show ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" class="flex-shrink-0"></i>

        </div>
        <div class="contenu" v-show="category.show">
          <div v-if="subDocumentsByCategory(category.CodeCategorie).length === 0" style="text-align: center;
    font-weight: 700;">Vide</div>
          <div v-else v-for="(subDocument, subDocIndex) in subDocumentsByCategory(category.CodeCategorie)"
            :key="subDocIndex"
            @click="showSubDocument(subDocument)"
            class="contenu1 nav-link"
          >
            {{ subDocument.NomSousCategorie }}
          </div>
        </div>
      </div>
      </div>
     
      <div class="sous_doc">
        <div v-if="selectedSubDocument">
          <!-- <p>{{ selectedSubDocument }}</p> -->
          <div class="noresul" style="border: none !important;"  v-if="paginatedItems.length === 0">Aucun document pour le moment !!!</div>
          <div v-else class="texte" v-for="(subDoc, subDocIndex) in paginatedItems" :key="subDocIndex">
                    <p class="pb-0 ">{{ subDoc.NomDocument }}</p>
                    <div class=" texte2 d-flex align-items-center">
                <i class="bi bi-cloud-arrow-down-fill flex-shrink-0"></i>
                <div>
                  <p>
                    <a :href="subDoc.LienDocument"  download>Télécharger</a>

                  </p>
                </div>
              </div>
          </div>
        </div>
        <div v-else class="noresul" style="border: none !important;">
          <p> Choisissez un type de document</p>
        </div>
      </div>
      
    </div>
    <div class="container_pagination">
  <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
</div>
  </div>
</template>

<script>
import Documents from '@/lib/doc.json'
import Loading from '../../components/Public/other/preloader.vue';
import Pag from '../../components/Public/other/pag.vue';
export default {
  name: 'DNPMECLDocumentation',
  components:{
    Loading , Pag
  },
  computed: {


totalPages() {
return Math.ceil(this.filteredDocuments.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.filteredDocuments.slice(startIndex, endIndex);
},
},


  data() {
    return {
      categoriesData: [],
      loading:true,
      selectedSubDocument: null,
      subDocuments:[],
      filteredDocuments: [],
      totalPageArray: [],
      subDocumentsByCategoryMap: {},
      Documents:Documents,
      currentPage: 1,
       itemsPerPage: 5,
    };
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
      return this.filteredDocuments.slice(startIndex, endIndex);
    },
 

    async fetchCategoriesData() {
      try {
        await this.$store.dispatch('fetchCategoriesData');
        const categoriesData = JSON.parse(JSON.stringify(this.$store.getters.getCategoriesData));
    
        this.categoriesData = categoriesData.data.data;
        this.loading = false
      } catch (error) {
      
      }
    },
    async fetchSousCategoriesData(page) {
  try {

    await this.$store.dispatch('fetchSousCategoriesData',page);
    const sousCategoriesData = JSON.parse(JSON.stringify(this.$store.getters.getSousCategoriesData));
  

       
    this.totalPageArray = this.totalPageArray.concat(sousCategoriesData.data.data); // Fusion des tableaux des différentes pages
       
       


          if (page === 1) {
            this.subDocuments = this.totalPageArray;
        const totalPages = sousCategoriesData.data.last_page;
        this.totalPages = totalPages;
        this.compterJusqua(totalPages);
       


      }
    this.subDocuments = this.totalPageArray;
    this.categoriesData.forEach(category => {
    this.subDocumentsByCategoryMap[category.CodeCategorie] = this.subDocuments.filter(subDoc => subDoc.CodeCategorie === category.CodeCategorie);
        });
  } catch (error) {
    
  }
},

    toggleCategory(categoryIndex, selectedCategory) {

  this.categoriesData.forEach((category, index) => {
    if (index === categoryIndex) {
      category.show = !category.show;
    } else {
      category.show = false;
    }
  });
},

compterJusqua(nombre) {
  for (let i = 2; i <= nombre; i++) { // Commence à 2 car la première page a déjà été chargée
    this.fetchSousCategoriesData(i);
  }
},

    showSubDocument(subDocument) {
   
      this.selectedSubDocument = subDocument.CodeSousCategorie;
      this.filteredDocuments = this.Documents.filter(doc => doc.SousCategorieDocument === subDocument.CodeSousCategorie);



    },
    showSubCategory(subCategory) {
      this.selectedSubCategory = subCategory;
    },
  
    subDocumentsByCategory(categoryCode) {
      return this.subDocumentsByCategoryMap[categoryCode] || [];
    },
    async fetchPubliqueData() {
  try {
    await this.$store.dispatch('fetchPubliqueData');
    this.Documents = JSON.parse(JSON.stringify(this.$store.getters['getPubliqueData']));
 
    // Faites ce que vous devez faire avec les données ici
  } catch (error) {

  }
},
  
  },
async  mounted() {
  await this.fetchCategoriesData(); 
  await this.fetchSousCategoriesData()
  await this.fetchPubliqueData()
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

  .container{

    margin-top: 20px;
  }
    .banner-title {
    
    font-size: 20px !important;
    
}
}

@media (max-width: 500px) {
    .banner-title {
    
    font-size: 25px;
    
}
}
/* fin banier */

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
.container_content{

/* border: 1px solid red; */
margin: 0 auto;
max-width: 1140px;
/* height: 100vh; */
padding:0 10px 30px;

}
.section-header{
  padding: 20px 0 !important;

}
.content{
/* border: 1px solid blue; */
height: 100%;
width: 100%;
display: flex;
padding: 10px;
justify-content: space-around;

}
.fade:not(.show) {
  display: none;
  opacity: 0;
}

.nav-link.active{
  background-color: #eceef14f;
  border: 1px solid var(--color-secondary);
  color: black;
}
.info-item{
border-radius:5px 5px 0 0 !important;
justify-content: space-between !important;
width: 300px;

}
.info-item .bi-file-pdf {
  font-size: 20px;
  color: red;
  float: left;
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  margin-right: 15px;
}
.nav-link.active.info-item i  {
  color: red;
  background-color: hsl(240deg 7% 62% / 9%);
}
.doc{
  /* border: 1px solid blue; */
  height: 300px;
  padding: 10px;
 /* width: 30%; */
 display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;

}

.sous_doc{
  border: 1px solid hsl(240deg 7% 62% / 46%);
  /* height: 100px; */
  width: 65%;
  border-radius: 5px ;
  padding: 10px;

}
.texte{
  /* border: 1px solid blue; */
  padding: 10px;
  margin-bottom: 15px;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;

}

.pb-0{
  font-weight: 900;
  margin-bottom: 0;

}

.texte2{
  color: var(--color-primary);
  cursor: pointer;
  width: 101px;

}
.texte2 a:hover{
color: var(--color-secondary);

}

.texte2 p{
  margin-left: 5px;
  margin-bottom: 0;


}

@media screen and (max-width: 922px) {

  .content{
      flex-direction: column;
  align-items: center;
  }
  .doc{
  
  width: 70%;
  margin-bottom: 15px;
  }

  .sous_doc{
  
  width: 100%;
  }

}

.contenu{
border:1px solid var(--color-secondary);
width: 100%;
border-radius: 0 0 5px 5px;
border-top: none;
margin-bottom: 20px;
padding-top: 10px;

}
.contenu1{
    border-bottom: 1px solid var(--color-secondary);
    padding: 10px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
}
.margin-zero {
margin-bottom: 0 !important;
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


@media screen and (max-width: 768px) {

.doc{

width: 110%;
/* height: auto; */
margin-bottom: 25px;
border-bottom: 1px solid var(--color-secondary);

}

.sous_doc {
    width: 105%;
}
.noresul{
   
    padding: 10px;
    
    font-size: 16px;
}



}

</style>



