<template>
    <div class="container_content" data-aos="fade-up">
      <div class="section-header">
        <h2>LISTE DES PME</h2>
      </div>
      <div class="bar_search">
        <div class="liste-searcher">
          <div class="nsl">
            <i class="bi bi-search"></i>
            <input type="text" role="search" placeholder="Rechercher un nom..." v-model="control.name" @input="filterByName" />
          </div>
          <div class="nsl">
            <i class="bi bi-funnel-fill"></i>
            <select name="speciality" v-model="control.spec" @change="filterData">
              <option value="" selected="true">Filtre</option>
              <option value="region">Régions</option>
              <option value="prefecture">Préfectures</option>
            </select>
          </div>
          <div class="nsl" style="border-right: none" v-if="control.spec === 'region' || control.spec === 'prefecture'">
            <i class="bi bi-filter"></i>
            <select name="speciality" v-if="control.spec === 'region'" v-model="control.speciality" @change="filterData">
              <option value="" selected="true">Choisir une région</option>
              <option v-for="region in regions" :value="region.id" :key="region.id">{{ region.nom }}</option>
            </select>
            <select name="speciality" v-else-if="control.spec === 'prefecture'" v-model="control.speciality" @change="filterData">
              <option value="" selected="true">Choisir une préfecture</option>
              <option v-for="prefecture in prefectures" :value="prefecture.id" :key="prefecture.id">{{ prefecture.nom }}</option>
            </select>
          </div>
          <div class="nsl" style="border-right: none" v-else>
            <i class="bi bi-x-square-fill" @click="clearFilters" style="cursor: pointer"></i>
            <input type="text" placeholder="Aucun filtre sélectionné" disabled />
          </div>
        </div>
      </div>
  
      <div class="contenu d-flex justify-content-center align-items-center flex-wrap" data-aos="fade-up" data-aos-delay="100">
        <div class="task" v-for="pme in paginatedData" :key="pme.id">
          <div class="tag">
            <div class="image">
              <img src="@/assets/img/1.png" alt="">
            </div>
            <div class="texte">
              <p class="para">{{ pme.nom }}</p>
              <p class="texte-content">Creation: <span>{{ pme.date_creation }}</span></p>
              <p class="texte-content">Dirigeant: <span>{{ pme.dirigeant }}</span></p>
            </div>
          </div>
          <div class="texte">
            <p class="texte-content">Code APE: <span>{{ pme.code_ape }}</span></p>
            <p class="texte-content">Ville: <span>{{ pme.ville }}</span></p>
            <p class="texte-content">Email: <span>{{ pme.email }}</span></p>
            <p class="texte-content">Contact: <span>{{ pme.contact }}</span></p>
          </div>
          <div class="boutton">
            <a href="/detail" class="btn">Detail<span></span></a>
          </div>
        </div>
      </div>
  
      <div class="container_pagination">
        <pagination :current-page="currentPage" :total-pages="totalPages" @update-page="onUpdatePage"></pagination>
      </div>
    </div>
  </template>
  
  <script>
  import Pagination from '../components/Public/other/pagination.vue';
  import { getImage } from '@/lib/getImage';
  import resp from '@/lib/pme.json';
  import regionsData from '@/lib/region.json';
  import prefecturesData from '@/lib/prefecture.json';
  
  export default {
    name: 'MpmeListe',
    components: {
      Pagination
    },
    data() {
      return {
        control: {
          name: '',
          spec: '',
          speciality: '',
          promotion: '',
        },
        regions: regionsData,
        prefectures: prefecturesData,
        pmes: [],
        filteredPmes: [],
        currentPage: 1,
        pageSize: 12,
      };
    },
    methods: {
      onUpdatePage(page) {
        this.currentPage = page;
      },
      filterByName() {
        const searchValue = this.control.name.toLowerCase();
        this.filteredPmes = this.pmes.filter(pme => pme.nom.toLowerCase().includes(searchValue));
      },
      filterData() {
        if (this.control.spec === 'region') {
          const selectedRegion = this.regions.find(region => region.id === this.control.speciality);
          if (selectedRegion) {
            this.filteredPmes = this.pmes.filter(pme => pme.region === selectedRegion.nom);
          } else {
            this.filteredPmes = [...this.pmes];
          }
        } else if (this.control.spec === 'prefecture') {
          const selectedPrefecture = this.prefectures.find(prefecture => prefecture.id === this.control.speciality);
          if (selectedPrefecture) {
            this.filteredPmes = this.pmes.filter(pme => pme.prefecture === selectedPrefecture.nom);
          } else {
            this.filteredPmes = [...this.pmes];
          }
        } else {
          this.filteredPmes = [...this.pmes];
        }
      },
      clearFilters() {
        this.control = {
          name: '',
          spec: '',
          speciality: '',
          promotion: '',
        };
        this.filteredPmes = [...this.pmes];
      },
      getImage(path) {
        return getImage(path);
      }
    },
    mounted() {
      this.pmes = resp;
      this.filteredPmes = [...this.pmes];
    },
    computed: {
      totalItems() {
        return this.filteredPmes.length;
      },
      totalPages() {
        return Math.ceil(this.totalItems / this.pageSize);
      },
      paginatedData() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.filteredPmes.slice(startIndex, endIndex);
      }
    }
  };
  </script>
  
  <style lang="css" scoped>
 .container_content {
    max-width: 1140px;
    margin: 0 auto;
    /* border: 1px solid red; */
    background: #fff;

}
.section-header{
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
    padding: 1rem;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    margin: 0 10px 10px 0;
    border: 3px dashed transparent;
    width: 300px;
    height: 259px;
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
    font-size: 15px;
    font-weight: 700;
    color: #2e2e2f;
    width: 190px;
}

.texte{

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
    height: 60px;
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

.options {
    background: transparent;
    border: 0;
    color: #c4cad3;
    font-size: 17px;
}

.options svg {
    fill: #9fa4aa;
    width: 20px;
}

.stats {
    position: relative;
    width: 100%;
    color: #9fa4aa;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.stats div {
    margin-right: 1rem;
    height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

p {
    margin-bottom: 0 !important;
}

.stats svg {
    margin-right: 5px;
    height: 100%;
    stroke: #9fa4aa;
}

.viewer span {
    height: 30px;
    width: 30px;
    background-color: rgb(28, 117, 219);
    margin-right: -10px;
    border-radius: 50%;
    border: 1px solid #fff;
    display: grid;
    align-items: center;
    text-align: center;
    font-weight: bold;
    color: #fff;
    padding: 2px;
}

.viewer span svg {
    stroke: #fff;
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
    bottom: 5px;
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
  </style>
  