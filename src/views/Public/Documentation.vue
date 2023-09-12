<template>
    <div class="container_content">
        <div class="section-header pt-5 ">
            <h2>LISTE DES DOCUMENTS</h2>    
        </div>
        <div class="content">

            <div class="doc"  role="tablist">

                <div
                v-for="(category, index) in categoriesData" :key="index"
                 class="info-item d-flex justify-content-center align-items-center nav-link  " 
                 :class="{ active: index === 0 }" 
                role="tab" 
                data-bs-toggle="tab" 
                :data-bs-target="'#navs-pills-top-home' + (index + 1)"
               :aria-controls="'navs-pills-top-home' + (index + 1)"
               :aria-selected="index === 0"
             
                 >

                <i class="bi bi-file-pdf flex-shrink-0"></i>
                <div>
                  <p>{{ category.NomCategorie }}</p>
                </div>
              </div>


              <!-- <div class="info-item d-flex justify-content-center align-items-center nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-home2" aria-controls="navs-pills-top-home2" aria-selected="false">
                <i class="bi bi-file-pdf flex-shrink-0"></i>
                <div>
                  <p>Categorie2</p>
                </div>
              </div>
              <div class="info-item d-flex justify-content-center align-items-center">
                <i class="bi bi-file-pdf flex-shrink-0"></i>
                <div>
                  <p>Categorie3</p>
                </div>
              </div> -->
            </div>
            <div class="sous_doc">
                <div
                
                  v-for="(sousCategory, index) in sousCategoriesData" :key="index"
                   class="tab-pane fade"
                   :class="{ show: index === 0, active: index === 0 }"
                   :id="'navs-pills-top-home' + (index + 1)"
                   role="tabpanel"
                  
                  >


                    <div class="texte">
                    <p class="pb-0 ">{{ sousCategory.NomSousCategorie }}</p>
                    <div class=" texte2 d-flex align-items-center">
                <i class="bi bi-cloud-arrow-down-fill flex-shrink-0"></i>
                <div>
                  <p>Télécharger</p>
                </div>
              </div>
                </div>
                <div class="texte">
                    <p class="pb-0 ">PLAN DE FORMATION DE LA DIRECTION GENERALE DES IMPOTS AU TITRE DE LA GESTION 2021</p>
                    <div class=" texte2 d-flex align-items-center">
                <i class="bi bi-cloud-arrow-down-fill flex-shrink-0"></i>
                <div>
                  <p>Télécharger</p>
                </div>
              </div>
                </div>
                <div class="texte">
                    <p class="pb-0 ">PLAN DE FORMATION DE LA DIRECTION GENERALE DES IMPOTS AU TITRE DE LA GESTION 2021</p>
                    <div class=" texte2 d-flex align-items-center">
                <i class="bi bi-cloud-arrow-down-fill flex-shrink-0"></i>
                <div>
                  <p>Télécharger</p>
                </div>
              </div>
                </div>
                <div class="texte">
                    <p class="pb-0 ">PLAN DE FORMATION DE LA DIRECTION GENERALE DES IMPOTS AU TITRE DE LA GESTION 2021</p>
                    <div class=" texte2 d-flex align-items-center">
                <i class="bi bi-cloud-arrow-down-fill flex-shrink-0"></i>
                <div>
                  <p>Télécharger</p>
                </div>
              </div>
                </div>
                <div class="texte">
                    <p class="pb-0 ">PLAN DE FORMATION DE LA DIRECTION GENERALE DES IMPOTS AU TITRE DE LA GESTION 2021</p>
                    <div class=" texte2 d-flex align-items-center">
                <i class="bi bi-cloud-arrow-down-fill flex-shrink-0"></i>
                <div>
                  <p>Télécharger</p>
                </div>
              </div>
                </div>
                </div>

                <div class="tab-pane fade " id="navs-pills-top-home2" role="tabpanel">
                    <div class="texte">
                    <p class="pb-0 ">PLAN DE FORMATION DE LA DIRECTION GENERALE DES IMPOTS AU TITRE DE LA GESTION 2021</p>
                    <div class=" texte2 d-flex align-items-center">
                <i class="bi bi-cloud-arrow-down-fill flex-shrink-0"></i>
                <div>
                  <p>Télécharger</p>
                </div>
              </div>
                </div>
                <div class="texte">
                    <p class="pb-0 ">PLAN DE FORMATION DE LA DIRECTION GENERALE DES IMPOTS AU TITRE DE LA GESTION 2021</p>
                    <div class=" texte2 d-flex align-items-center">
                <i class="bi bi-cloud-arrow-down-fill flex-shrink-0"></i>
                <div>
                  <p>Télécharger</p>
                </div>
              </div>
                </div>
                <div class="texte">
                    <p class="pb-0 ">PLAN DE FORMATION DE LA DIRECTION GENERALE DES IMPOTS AU TITRE DE LA GESTION 2021</p>
                    <div class=" texte2 d-flex align-items-center">
                <i class="bi bi-cloud-arrow-down-fill flex-shrink-0"></i>
                <div>
                  <p>Télécharger</p>
                </div>
              </div>
                </div>
                <div class="texte">
                    <p class="pb-0 ">PLANnnnn DE FORMATION DE LA DIRECTION GENERALE DES IMPOTS AU TITRE DE LA GESTION 2021</p>
                    <div class=" texte2 d-flex align-items-center">
                <i class="bi bi-cloud-arrow-down-fill flex-shrink-0"></i>
                <div>
                  <p>Télécharger</p>
                </div>
              </div>
                </div>
              
                </div>

             
            

        </div>
 

        </div>
        
    </div>
</template>

<script>
export default {
    name: 'DNPMECLDocumentation',

    data() {
        return {
          sousCategoriesData:[],
          categoriesData:[]
            
        };
    },

  async  mounted() {
    await  this.fetchSousCategoriesData()
    await  this.fetchCategoriesData()

    },

    methods: {
      async fetchSousCategoriesData() {
  try {

    await this.$store.dispatch('fetchSousCategoriesData');
    const sousCategoriesData = JSON.parse(JSON.stringify(this.$store.getters.getSousCategoriesData));
    console.log('Données des sous-catégories:', sousCategoriesData);
    this.sousCategoriesData = sousCategoriesData.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données des sous-catégories :', error.message);
  }
},

async fetchCategoriesData() {
  try {

    await this.$store.dispatch('fetchCategoriesData');
    const categoriesData = JSON.parse(JSON.stringify(this.$store.getters.getCategoriesData));
    console.log('Données des catégories:', categoriesData);
    this.categoriesData = categoriesData.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données des catégories :', error.message);
  }
},

    },
};
</script>

<style lang="css" scoped>
.container_content{

/* border: 1px solid red; */
margin: 0 auto;
max-width: 1140px;
/* height: 100vh; */

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
    background-color: #fff;
    border: 1px solid var(--color-secondary);
    color: black;
}
.nav-link.active.info-item i{
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
    border-radius: 5px;
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
</style>