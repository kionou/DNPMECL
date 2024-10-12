<template>
    <div>
         <table class="table" style="border: 1px solid #d9dee3 !important;">
                    <thead class="table-light">
                      <tr>
                        <th>Secteur d'activité</th>
                        <th>Nombre d'entreprises</th> 
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr v-for="(secteur, index) in paginatedItems" :key="index">
                        <td v-if="secteur.secteur_activite">{{ secteur.secteur_activite.NomSecteurActivite }}</td>
                        <td v-if="secteur.secteur_activite">{{ secteur.nbre || 0 }}</td>
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
    name: 'DNPMECLTbSecteur',
    components: {
  Pag

},
    computed: {


totalPages() {
return Math.ceil(this.SecteurActiviteOptions.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.SecteurActiviteOptions.slice(startIndex, endIndex);
},
},

    data() {
        return {
            SecteurActiviteOptions :[], 
            currentPage: 1,
            itemsPerPage: 10,
        };
    },

  async   mounted() {
        await this.fetchDataActivite()
    },

    methods: {

    async  fetchDataActivite() {
  try {
    const response = await axios.get('/secteurs-activites', {params: { with_relation: true}});
    if (response.data.status === 'success') {
     
      this.SecteurActiviteOptions = response.data.data.data
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