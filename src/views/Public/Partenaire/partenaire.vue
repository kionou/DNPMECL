<template>
    <Loading v-if="loading"></Loading>
  <div class="container_content" data-aos="fade-up">

      <div class="section-header ">
          <h2>LISTES DES PARTENAIRES</h2>
      </div>
      <div class="bar_search">
          <div class="liste-searcher">
              <div class="nsl">
                  <i class="bi bi-search"></i>
                  <input type="text" role="search" placeholder="rechercher une offre ..."  v-model="control.name" @input="filterByName"/>
              </div>
          </div>

      </div>

      <div class="contenu d-flex justify-content-center align-items-center flex-wrap" data-aos="fade-up"
          data-aos-delay="100">

          <!-- <div v-if="paginatedItems.length === 0" class="noresul">
             <span> Vous n'avez pas encore d'offre vous concernant </span>
             </div> -->
             <div  class="card" >
				<img src="@/assets/img/partenariat/part1.png" alt="">
			        <span>APIP</span>
			</div>
            <div  class="card" >
				<img src="@/assets/img/partenariat/part2.png" alt="">
			        <span>DGI</span>
			</div>
            <div  class="card" >
				<img src="@/assets/img/partenariat/part3.png" alt="">
			        <span>ENABEL</span>
			</div>
      <div  class="card" >
				<img src="@/assets/img/partenariat/part4.jpg" alt="">
			        <span>UCEP</span>
			</div>
      <div  class="card" >
				<img src="@/assets/img/partenariat/part5.png" alt="">
			        <span>FODIP</span>
			</div>


      </div>
      <div class="container_pagination">
  <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
</div>
  </div>
</template>

<script>

import axios from '@/lib/axiosConfig.js'
import Loading from '../../../components/Public/other/preloader.vue';
import Pag from '../../../components/Public/other/pag.vue';
export default {
  name: 'Mpmeoffre',
  components: {
 Loading , Pag

},
computed: {


showFs() {
          return this.control.spec;
      },
      filter() {
          return this.control.spec === 'speciality';
      },
  totalPages() {
  return Math.ceil(this.filterOffres.length / this.itemsPerPage);
},
paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filterOffres.slice(startIndex, endIndex);
  },
},

  data() {
      return {
          control: {
              name: '',
              spec: '',
              speciality: '',
              promotion: '',
          },

          askVote: false,
          

          offres: [],
          filterOffres: [],
          SousSecteurActiviteOptions:[],
          isFilter: false,
          loading:false,
          data:'',
          currentPage: 1,
       itemsPerPage: 15,
      };
  },
 

 async  mounted() {
//   await    this.fetchSousSecteurActiviteOptions()
//   await    this.fetchData() 
//   await    this.fetchgetOffreMpme()
  },


  methods: {


 async fetchSousSecteurActiviteOptions() {
    try {
      await this.$store.dispatch('fetchSousSecteurOptions'); 
      this.SousSecteurActiviteOptions = this.$store.getters['getSousSecteurOptions']
    } catch (error) {
      console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error.message);
    }
  },
      async fetchData() {
          const response = await axios.get(`/mpme/${this.loggedInUser.id}`)
          const data = response.data.data
          if (data.ListeSousSecteurActivite.includes('|')) {
              return  this.data = data.ListeSousSecteurActivite.split("|")
              
              } else{
              
                  return  this.data = data.ListeSousSecteurActivite.split(' ') 
              }
      },


async fetchgetOffreMpme() {
try {
  const response = await axios.get('/offres', {
    headers: {
      Authorization: `Bearer ${this.loggedInUser.token}`,
    },
  });

  if (response.data.status === 'success') {
    this.loading = false;
    this.offres = response.data.data.data;
    this.offres = this.offres.filter((offre) => {
     const sousSecteurActiviteOffre = offre.liste_sous_secteurs;

      if (sousSecteurActiviteOffre !== null && sousSecteurActiviteOffre.includes('|')) {
        const sousSecteurs = sousSecteurActiviteOffre.split('|');
          return sousSecteurs.some((sousSecteur) => this.data.includes(sousSecteur)) && offre.publish === 1;
      } else {
        return this.data.includes(sousSecteurActiviteOffre) && offre.publish === 1;
      }
    });

    this.filterOffres = this.offres;
  }
} catch (error) {
  console.error('Erreur lors de la récupération des options des sous-prefecture :', error);
  if (error && error.response.data === 'Unauthorized' || error.response.data.status === 'error') {
                  console.log('aut', error.response.data.status === 'error');
                  await this.$store.dispatch('user/clearLoggedInUser');
                  this.$router.push('/login_user_mpme');

              } else {
                  this.formatValidationErrors(error.response.data.errors)
                  this.loading = false
                  return false;
              }
}
},


    filterByName() {
  this.currentPage = 1;
  if (this.control.name !== null) {
     const tt = this.control.name;
    const  searchValue = tt.toLowerCase()
 this.filterOffres  =  [...this.offres].filter(item => {
const pmeName = item.titre || ''; 
 return pmeName.toLowerCase().includes(searchValue);
});

} else {
   this.filteredDocuments  = [...this.originalDocuments];
   
}
 
},
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
.container_content {
  max-width: 1140px;
  margin: 0 auto;
  background: #fff;

}

.section-header {
  padding: 20px 0 !important;

}

.bar_search {

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}


.liste-searcher {
  justify-content: center;
  display: flex;
  width: 50%;
  border-radius: 6px;
  height: 60px;
  background-color: #fff;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.liste-searcher div {
  text-align: center;
  font-size: 20px;
  width: 100%;
  vertical-align: middle;

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

.contenu {

  padding: 15px 10px;
}
.card {
	background-color: #fff;
	border-radius: 3px;
	padding: 10px;
	margin: 10px;
	text-align: center;
	width: 220px;
  height: 170px;
	max-width: 100%;
	align-items: center;
  justify-content: space-around;
    /* border: 1px solid red; */
}

.card img {
	/* border-radius: 50%;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); */
	width: 62%;
  /* border: 1px solid blue; */
	/* height: 75px; */
}


.card span {
	color: #777;
	display: block;
  font-weight: 800;
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