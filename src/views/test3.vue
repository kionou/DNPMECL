<template>
  <Loading v-if="loading"></Loading>
  <div class="container_content">
    <div class="section-header pt-5">
      <h2>LISTE DES DOCUMENTS</h2>
    </div>
    <div class="noresul" v-if="categoriesData.length === 0">Aucun document pour le moment !!!</div>

    <div class="content" v-else>

      <div class="doc">

        <div    v-for="(category, categoryIndex) in categoriesData" :key="categoryIndex">
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
          <p>{{ selectedSubDocument }}</p>
          <div class="texte" v-for="(subDoc, subDocIndex) in filteredDocuments" :key="subDocIndex">
                    <p class="pb-0 ">{{ subDoc.NomDocument }}</p>
                    <div class=" texte2 d-flex align-items-center">
                <i class="bi bi-cloud-arrow-down-fill flex-shrink-0"></i>
                <div>
                  <p>Télécharger</p>
                </div>
              </div>
              </div>
        </div>
        <div v-else class="noresul" style="border: none !important;">
          <p> Choisissez un type de document</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Documents from '@/lib/doc.json'
import Loading from '../components/Public/other/preloader.vue';
export default {
  name: 'DNPMECLDocumentation',
  components:{
    Loading
  },

  data() {
    return {
      categoriesData: [],
      loading:true,
      selectedSubDocument: null,
      subDocuments:[],
      filteredDocuments: [],
      subDocumentsByCategoryMap: {},
      Documents:Documents
    };
  },

  methods: {
 

    async fetchCategoriesData() {
      try {
        await this.$store.dispatch('fetchCategoriesData');
        const categoriesData = JSON.parse(JSON.stringify(this.$store.getters.getCategoriesData));
        console.log('Données des catégories:', categoriesData);
        this.categoriesData = categoriesData.data.data;
        this.loading = false
      } catch (error) {
        console.error('Erreur lors de la récupération des données des catégories :', error.message);
      }
    },
    async fetchSousCategoriesData() {
  try {

    await this.$store.dispatch('fetchSousCategoriesData');
    const sousCategoriesData = JSON.parse(JSON.stringify(this.$store.getters.getSousCategoriesData));
    console.log('Données des sous-catégories:', sousCategoriesData);
    this.subDocuments = sousCategoriesData.data.data;
    this.categoriesData.forEach(category => {
    this.subDocumentsByCategoryMap[category.CodeCategorie] = this.subDocuments.filter(subDoc => subDoc.CodeCategorie === category.CodeCategorie);
        });
  } catch (error) {
    console.error('Erreur lors de la récupération des données des sous-catégories :', error.message);
  }
},

    toggleCategory(categoryIndex, selectedCategory) {
  console.log('categoryIndex', selectedCategory);
  this.categoriesData.forEach((category, index) => {
    if (index === categoryIndex) {
      category.show = !category.show;
    } else {
      category.show = false;
    }
  });
},

    showSubDocument(subDocument) {
      console.log('subDocument', subDocument);
      this.selectedSubDocument = subDocument.CodeSousCategorie;
      this.filteredDocuments = this.Documents.filter(doc => doc.SousCategorieDocument === subDocument.CodeSousCategorie);



    },
    showSubCategory(subCategory) {
      this.selectedSubCategory = subCategory;
    },
  
    subDocumentsByCategory(categoryCode) {
      return this.subDocumentsByCategoryMap[categoryCode] || [];
    },
  
  },
async  mounted() {
  await this.fetchCategoriesData(); 
  await this.fetchSousCategoriesData()
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
  /* height: 100px; */
 width: 30%;
 display: flex;
  flex-direction: column;
  align-items: center;

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
.texte2:hover{
color: var(--color-secondary);

}

.texte2 p{
  margin-left: 5px;
  margin-bottom: 0;


}

@media screen and (max-width: 768px) {

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
</style>



