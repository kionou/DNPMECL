<template>
    <div>
         <table class="table"  style="border: 1px solid #d9dee3 !important;">
                    <thead class="table-light">
                      <tr >
                        <th>Statut juridique</th>
                        <th>Nombre d'entreprises</th> 
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr v-for="(statut, index) in paginatedItems" :key="index">
                        <td>{{ statut.statut_juridique.NomStatutJuridique }}</td>
                           
                           <td>{{ statut.mpmes || 0 }}</td>
                        
                      </tr>
                    
                    </tbody>
                </table>
                <div class="container_pagination">
                    <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
                  </div>
    </div>
</template>

<script>
import axios from '@/lib/axiosConfig.js'
import Pag from '../other/pag.vue';
export default {
    name: 'DNPMECLTbJuridiques',
    components: {
  Pag

},
    computed: {


totalPages() {
return Math.ceil(this.fetchDataJuridique.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.fetchDataJuridique.slice(startIndex, endIndex);
},
},

    data() {
        return {
            fetchDataJuridique:[],
            currentPage: 1,
            itemsPerPage: 10,
            
        };
    },

 async   mounted() {
        await this.fetchDataJuridiques()
        
    },

    methods: {
 async  fetchDataJuridiques() {
  try {
    const response = await axios.get('/mpme/statistics/par-statut-juridiques');
    if (response.data.status === 'success') {

       this.fetchDataJuridique = response.data.data
    } else {
  
    }
  } catch (error) {
   
  }
},
updateCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth', // Utilisez 'auto' pour un défilement instantané
    //   });
    },

        
    },
};
</script>

<style lang="scss" scoped>

</style>