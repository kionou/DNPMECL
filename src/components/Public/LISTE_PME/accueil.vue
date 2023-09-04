
<template>
  <Loading v-if="loading"></Loading>
  <div class="container_content" data-aos="fade-up">
    <div class="section-header">
      <h2>LISTE DES PME</h2>
    </div>
    <div class="bar_search">
      <div class="liste-searcher">
        <div class="nsl">
          <i class="bi bi-search"></i>
          <input type="text" role="search" placeholder="Rechercher un nom..." v-model="control.name"
            @input="filterByName" />
        </div>
        <div class="nsl">
          <i class="bi bi-funnel-fill"></i>
          <select name="speciality" v-model="control.spec" @change="updateFilterSpec">
            <option value="" selected="true">Filtre</option>
            <option value="region">Régions</option>
            <option value="sousprefecture">Sous-Préfectures</option>
          </select>
        </div>
        <div class="nsl" style="border-right: none" v-if="control.spec === 'region' || control.spec === 'sousprefecture'">
          <i class="bi bi-filter"></i>
          <select name="speciality" v-if="control.spec === 'region'" v-model="control.speciality" @change="filterData">
            <option value="" selected="true">Choisir une région</option>
            <option v-for="region in regions" :value="region.label" :key="region.value">{{ region.label }}</option>
          </select>
          <select name="speciality" v-else-if="control.spec === 'sousprefecture'" v-model="control.speciality" @change="filterData">
            <option value="" selected="true">Choisir une sous-préfecture</option>
            <option v-for="sousprefecture in sousprefectures" :value="sousprefecture.label" :key="sousprefecture.value">{{ sousprefecture.label }}</option>
          </select>
          <!-- <v-autocomplete   v-else-if="control.spec === 'sousprefecture'" v-model="ss" @input="filterData"
            :items="sousprefectures"
            variant="outlined"></v-autocomplete> -->
            <!-- <MazSelect v-else-if="control.spec === 'sousprefecture'" v-model="control.speciality" change="filterData" color="secondary" search
                                    :options="sousprefectures" /> -->
        </div>
        <div class="nsl" style="border-right: none" v-else>
          <i class="bi bi-x-square-fill" @click="clearFilters" style="cursor: pointer"></i>
          <input type="text" placeholder="Aucun filtre sélectionné" disabled />
        </div>
      </div>
    </div>
{{ ss }}
    <div class="contenu d-flex justify-content-center align-items-center flex-wrap" data-aos="fade-up"
      data-aos-delay="100">
      <div v-if="filteredPmes.length === 0" class="nulle">
        <p>Aucun résultat trouvé.</p>
      </div>
      <div class="task" v-for="pme in paginatedItems" :key="pme.id" v-else>

        <div class="tag">
          <div class="image">
            <img src="@/assets/img/flags.png" alt="">
          </div>
          <div class="texte">
            <p class="para">{{ pme.NomMpme }}</p>
            <p class="texte-content">Date de Creation: <span>{{ pme.AnneeCreation }}</span></p>
            <p class="texte-content">Dirigeant: <span>{{ pme.PrenomDirigeant }} {{ pme.NomDirigeant }}</span></p>
          </div>
        </div>
        <div class="texte">
          <p class="texte-content">Ville: <span>{{ pme.Ville }}</span></p>
          <p class="texte-content">Email: <span>{{ pme.AdresseEmail }}</span></p>
          <p class="texte-content">Contact: <span> {{ pme.NumeroWhatsApp }}</span></p>
        </div>
        <div class="boutton">
          <p @click="$router.push({ path: `/liste_pme/mpme/${pme.CodeMpme}`, })" class="btn">Detail<span></span></p>
        </div>
      </div>
    </div>
    <div class="container_pagination">
      <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
    </div>
  </div>
</template>

<script>
import { getImage } from '@/lib/getImage';
import axios from '@/lib/axiosConfig.js'
import Pag from '../other/pag.vue';
import Loading from '../other/preloader.vue';

export default {
  components: {
    Pag, Loading
  },
  data() {
    return {
      loading: true,
      control: {
        name: '',
        spec: '',
        speciality: '',
        promotion: '',

      },
      ss:'',
      regions: [],
      sousprefectures: [],
      pmes: [],
      filteredPmes: [],
      currentPage: 1,
      itemsPerPage: 50, // Vous pouvez ajuster cette valeur selon vos besoins
      items: [], // Vos données API


    };
  },
  computed: {
    totalPages() {
      // return Math.ceil(this.items.length / this.itemsPerPage);
      return Math.ceil(this.filteredPmes.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredPmes.slice(startIndex, endIndex);
    },


    // Nouvelle propriété calculée qui applique les filtres combinés
    combinedFilteredPmes() {
      // Filtrage par nom
      const tt = this.control.name
      const searchValue = tt.toLowerCase();
      console.log('searchValue', searchValue);
      const filteredByName = this.items.filter(pme => {
        const pmeName = pme.NomMpme || '';
        this.filteredPmes = pmeName.toLowerCase().includes(searchValue);
      });
      console.log('filteredByName', filteredByName);



      // Filtrage par région ou sous-préfecture
      if (this.control.spec === 'region' || this.control.spec === 'sousprefecture') {
        if (this.control.speciality === '') {
          // Aucune région ou sous-préfecture sélectionnée
          return filteredByName;
        } else {
          const filterKey = this.control.spec === 'region' ? 'Region' : 'Sousprefecture';
          const selectedOption = this.regions.find(option => option.label === this.control.speciality) ||
            this.sousprefectures.find(option => option.label === this.control.speciality);
          if (selectedOption) {
            console.log('aaaa', filteredByName.filter(pme => pme[filterKey] === selectedOption.label));
            return filteredByName.filter(pme => pme[filterKey] === selectedOption.label);
          } else {
            return [];
          }
        }
      } else {
        // Aucune spécification de filtre sélectionnée
        return filteredByName;
      }
    }
  },
  watch: {
    // Appeler la méthode pour mettre à jour la liste filtrée combinée lorsque les filtres changent
    control: {
      handler: 'updateCombinedFilteredPmes',
      deep: true
    }
  },
  methods: {
    async fetchData() {
      const response = await axios.get('/mpme')
      const data = response
      console.log('eeee', data);
      this.items = data.data.data;

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
      return this.filteredPmes.slice(startIndex, endIndex);
    },
    //   updateCombinedFilteredPmes() {
    // this.items =   this.combinedFilteredPmes;
    //     // this.updatePaginatedItems(); 
    //     this.filteredPmes = [...this.items]; 
    //     console.log('1111',this.filteredPmes );
    //     console.log('222',this.combinedFilteredPmes);
    //   },
    async fetchRegionOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
        await this.$store.dispatch('fetchRegionOptions');
        const options = JSON.parse(JSON.stringify(this.$store.getters['getRegionOptions'])); // Accéder aux options des pays via le getter
        console.log('Options desregions:', options);
        this.regions = options; // Affecter les options à votre propriété sortedCountryOptions
      } catch (error) {
        console.error('Erreur lors de la récupération des options des pays :', error.message);
      }
    },
    async fetchAllMpmeOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
        await this.$store.dispatch('fetchMpmeData');
        const options = JSON.parse(JSON.stringify(this.$store.getters['getMpmeData'])); // Accéder aux options des pays via le getter
        console.log('Options des mpme:', options);
        this.items = options; // Affecter les options à votre propriété sortedCountryOptions
      } catch (error) {
        console.error('Erreur lors de la récupération des options mpme :', error.message);
      }
    },


    async fetchSousPrefectureOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
        await this.$store.dispatch('fetchSous_PrefectureOptions');
        const options = JSON.parse(JSON.stringify(this.$store.getters['getSousprefectureOptions'])); // Accéder aux options des pays via le getter
        console.log('Options des sous Prefecture:', options);
        this.sousprefectures =  options
    console.log('pme.label', this.sousprefectures);
        this.loading = false
      } catch (error) {
        console.error('Erreur lors de la récupération des options des sous prefecture :', error.message);
      }
    },
    filterByName() {
      this.currentPage = 1;
      if (this.control.name !== null) {
        const tt = this.control.name;
        const searchValue = tt.toLowerCase()
        this.filteredPmes = this.items.filter(pme => {
          const pmeName = pme.NomMpme || '';

          return pmeName.toLowerCase().includes(searchValue);
        });

      } else {
        this.filteredPmes = [...this.items];
      }
    },
    updateSousPrefectureFilter() {
      console.log(this.control.spec);
      if (this.control.spec === 'sousprefecture') {
        this.filterData(); // Appeler la méthode de filtrage ici pour mettre à jour la liste de MPME en fonction de la sous-préfecture sélectionnée
      }
    },
    updateFilterSpec() {
      this.control.speciality = ''; // Réinitialiser la valeur de spécialité lorsque la spécification change
      this.filteredPmes = [...this.items];
    },
    auto(){
     console.log('Selected Speciality:', this.control.speciality , this.ss);
    },
    filterData() {
      console.log('Selected Speciality:', this.control.speciality);
      if (this.control.spec === 'region' || this.control.spec === 'sousprefecture') {
        if (this.control.speciality === '') {
          // Réinitialiser la liste si aucune région ou sous-préfecture n'est sélectionnée
          this.filteredPmes = [...this.items];
        } else {
          // Filtrer par région ou sous-préfecture
          const filterKey = this.control.spec === 'region' ? 'Region' : 'Sousprefecture';
          const selectedOption = this.regions.find(option => option.label === this.control.speciality) ||
            this.sousprefectures.find(option => option.label === this.control.speciality);
          if (selectedOption) {
            this.filteredPmes = this.items.filter(pme => pme[filterKey] === selectedOption.label);
          } else {
            this.filteredPmes = [];
          }

        }
      } else {
        this.filteredPmes = [...this.items];
      }
    },

    clearFilters() {
      this.control = {
        name: '',
        spec: '',
        speciality: '',
        promotion: '',
      };

      // Réinitialiser filteredPmes pour refléter les données d'origine
      this.filteredPmes = [...this.items];

      // Réinitialiser currentPage à 1 pour afficher la première page après avoir effacé les filtres
      this.currentPage = 1;
    },
    getImage(path) {
      return getImage(path);
    }
  },
  async mounted() {
    await this.fetchAllMpmeOptions()
    this.filteredPmes = await this.items
    await this.fetchRegionOptions()
    await this.fetchSousPrefectureOptions()


  },
};
</script>




<style scoped>
.pagination button.active {
  background-color: var(--color-primary);
  color: white;
  font-weight: bold;
}


.container_content {
  /* max-width: 1140px; */
  margin: 0 auto;
  /* border: 1px solid red; */
  background: #fff;

}

.section-header {
  padding: 40px 0 0 0 !important;

}

.bar_search {

  width: 100%;
  /* height: 100px; */
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.contenu {

  /* border: 1px solid red; */
  padding: 15px 10px;
}

.task {
  position: relative;
  color: #2e2e2f;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  margin: 0 10px 10px 0;
  border: 3px dashed transparent;
  width: 300px;
  height: 248px;
}


.task:hover {
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  /* border-color: rgba(162, 179, 207, 0.2) !important; */
  background-color: var(--color-primary);
  color: white !important;
}

.task:hover .texte-content {
  color: white !important;
}

.task .para {
  font-size: 14px;
  font-weight: 700;
  color: #2e2e2f;
  width: 226px;
}

.texte {

  margin-top: 10px;
}

.texte-content {
  color: #6f6f6f !important;
  font-weight: bold;
  font-size: 13px;

}

.tag {
  /* border: 1px solid red ; */
  font-size: 12px;

  /* background-color: #1389eb; */
  width: 100%;
  /* height: 100px; */
  display: flex;
  align-items: center;
}

.tag .image {
  height: 40px;
  width: 60px;
  margin-right: 10px;
}

.tag .image img {

  width: 100%;
  height: 100%;
  border-radius: 50%;

}

.tags {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

p {
  margin-bottom: 0 !important;
}


.boutton {

  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10px;


}

.btn {
  padding: 1em 2em;
  font-size: 10px;
  font-weight: 500;
  color: #000;
  background-color: var(--color-secondary);
  border: none;
  border-radius: 45px;
  /* box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  outline: none;
  bottom: 0px;
  position: absolute;
}

.btn:hover {
  background-color: #fff;
  border: 1px solid var(--color-secondary);

}

.container_pagination {
  /* border: 1px solid red; */
  width: auto;
  text-align: end;
  /* height: 50px; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  margin: 5px;

}


.liste-searcher {
  justify-content: center;
  display: flex;
  width: 100%;
  border-radius: 6px;
  height: 60px;
  background-color: #fff;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  /* border: 1px solid red; */
}

.liste-searcher div {
  text-align: center;
  font-size: 20px;
  width: 33%;
  vertical-align: middle;
  border-right: 0.5px solid var(--color-primary);
}

.liste-searcher div :nth-child(2) {
  background: none;
  outline: none;
  border: none;
  font-size: 18px;
  margin: 5px;
  padding: 10px;
}

.liste-searcher i {
  color: var(--bg2);
}


.nsl select {
  width: calc(100% - 50px);
  font-size: 18px;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .liste-searcher {
    flex-direction: column;
    height: auto;
    margin: 20px auto;
    width: 80%;
  }

  .liste-searcher div {
    align-items: center;
    width: 100%;
    border-bottom: 0.2px solid var(--color-primary);
    border-right: none;
  }

  .nsl select {
    width: 207.5px;
  }
}

.nulle {

  border: 1px solid var(--color-secondary);
  width: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 6px;

}

.nulle p {
  font-weight: bolder;


}
</style>
