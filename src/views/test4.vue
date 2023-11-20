<template>
  <div class="sous-secteurs-container">
    <h1>Liste des Sous-Secteurs</h1>
    <ul class="sous-secteurs-list">
      <li v-for="sousSecteur in paginatedItems" :key="sousSecteur.id">
        {{ sousSecteur.NomSousSecteur  }}
        {{ sousSecteur.id }}
      </li>
    </ul>

    <div class="container_pagination">
  <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
</div>
  </div>
</template>

<script>

import Loading from '../components/Public/other/preloader.vue';
import Pag from '../components/Public/other/pag.vue';



export default {
  components: {
 Loading , Pag

},
computed: {


totalPages() {
return Math.ceil(this.sousSecteurs.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.sousSecteurs.slice(startIndex, endIndex);
},
},
  data() {
    return {
      sousSecteurs: [], // Les données des sous-secteurs
      currentPage: 1,
      itemsPerPage: 50,
      totalPageArray: [], // Tableau des numéros de page
    

    };
  },
  methods: {

  async fetchSousSecteurOptions(page) { // Renommez la méthode pour refléter qu'elle récupère les options de sous-secteurs
  try {
    await this.$store.dispatch('fetchSousSecteurs' , page); // Mettez à jour le nom de l'action dans votre store Vuex
    const options = JSON.parse(JSON.stringify(this.$store.getters['getSousSecteursOptions'])); // Accédez aux options des sous-secteurs via le getter
    console.log('Options sous-secteurs:', options);
    // this.sousSecteurOptions = options; // Affectez les options à votre propriété sousSecteurOptions
    
    this.totalPageArray = this.totalPageArray.concat(options.data); // Fusion des tableaux des différentes pages
        console.log('jjjjjjjjjj',this.totalPageArray);
        this.sousSecteurs = this.totalPageArray


          if (page === 1) {
            this.sousSecteurs = this.totalPageArray;
        const totalPages = options.last_page;
        this.totalPages = totalPages;
        this.compterJusqua(totalPages);
       


      }
  } catch (error) {
    console.error('Erreur lors de la récupération des options des sous-secteurs :', error.message);
  }
},

compterJusqua(nombre) {
  for (let i = 2; i <= nombre; i++) { // Commence à 2 car la première page a déjà été chargée
    this.fetchSousSecteurOptions(i);
  }
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
      return this.sousSecteurs.slice(startIndex, endIndex);
    },
 
},
   

  mounted() {

    this.fetchSousSecteurOptions(1);
  },
  
};
</script>

<style scoped>
.sous-secteurs-container {
  max-width: 600px;
  margin: 0 auto;
}

.sous-secteurs-list {
  list-style: none;
  padding: 0;
}

.sous-secteurs-list li {
  margin: 8px 0;
  border: 1px solid #ccc;
  padding: 8px;
  background-color: #f5f5f5;
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


</style>


// loadPage(page) {
 
//   axios.get(`https://mpme-guinee.com/bd/public/api/sous-secteurs?page=${page}`)
//     .then((response) => {
//       console.log('response',response);
//       this.sousSecteurs = response.data.data.data;

//       this.totalPageArray = this.totalPageArray.concat(response.data.data.data); // Fusion des tableaux des différentes pages
//     console.log('jjjjjjjjjj',this.totalPageArray);
//     this.sousSecteurs = this.totalPageArray


//       if (page === 1) {
//         this.sousSecteurs = this.totalPageArray;
//     const totalPages = response.data.data.last_page;
//     this.totalPages = totalPages;
//     this.compterJusqua(totalPages);
   


//   }
     
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// },
