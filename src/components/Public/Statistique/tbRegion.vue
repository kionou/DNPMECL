<template>
    <div>
        <table class="table"  style="border: 1px solid #d9dee3 !important;">
                    <thead class="table-light">
                     
                      <tr>
                        <th>Région</th>
                        <th>Nombre d'entreprises</th> 
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr v-for="(region, index) in regionOptions" :key="index">
                      
                        <td v-if=" region.region && region.region.NomRegion">{{ region.region.NomRegion }}</td>
                           <td>{{ region.nbre || 0 }}</td>
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
    name: 'DNPMECLTbRegion',
    components: {
  Pag

},
    computed: {


totalPages() {
return Math.ceil(this.regionOptions.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.regionOptions.slice(startIndex, endIndex);
},
},

    data() {
        return {
            regionOptions: [],
            currentPage: 1,
            itemsPerPage: 10,
            
        };
    },

   async  mounted() {
      await this.fetchDataRegions()  
    },

    methods: {
        async  fetchDataRegions() {
  try {
    const response = await axios.get('/regions', {params: { with_relation: true}});
    if (response.data.status === 'success') {
 ;
      this.regionOptions = response.data.data.data
    } else {
  
    }
  } catch (error) {
   
  }
},
        
    },
};
</script>

<style lang="scss" scoped>

</style>