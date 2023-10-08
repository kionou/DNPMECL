<template>
    <Loading v-if="loading"></Loading>
    <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">OPPORTUNITES</h1>
                  <nav aria-label="breadcrumb">
                     
                    <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="/">accueil</a></li>
                    <li class="breadcrumb-item active" aria-current="page">opportunites</li>
                    </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
  </div>
  <div class="container_content" data-aos="fade-up">

      <div class="section-header ">
          <h2>JOURNAL DES APPELS D'OPPORTUNITES</h2>
      </div>
      <div class="bar_search">
          <div class="liste-searcher">
              <div class="nsl">
                  <i class="bi bi-search"></i>
                  <input type="text" role="search" placeholder="rechercher une offre ..."  v-model="control.name" @input="filterByName"/>
              </div>
              <!-- <div class="nsl">
                  <i class="bi bi-funnel-fill"></i>
                  <select name="speciality" v-model="control.spec">
                      <option value="" selected="true">
                          Filtre
                      </option>
                      <option value="speciality">Spécialité</option>
                      ´
                      <option value="promotion">Promotion</option>
                  </select>
              </div>
              <div class="nsl" style="border-right: none" v-if="showFs">
                  <i class="bi bi-filter"></i>
                  <select name="speciality" v-if="filter" v-model="control.speciality">
                      <option value="" selected="true">
                          choisir la spécialité
                      </option>
                      <option value="javascript">Javascript</option>
                      ´
                      <option value="python">Python</option>
                      <option value="C#">C#</option>
                      <option value="flutter">Flutter</option>
                      <option value="PHP">PHP</option>
                      <option value="front-end">Front end</option>
                      <option value="reseau-voip">Reseau Voip</option>
                      <option value="multimedia">Multimédia</option>
                  </select>
                  <select name="promotion" v-else>
                      <option value="" selected="true">
                          numero de la promotion
                      </option>
                      <option :value="1.18">1.18</option>
                      <option :value="2.19">2.19</option>
                      <option :value="3.2">3.20</option>
                      <option :value="4.21">4.21</option>
                      <option :value="5.22">5.22</option>
                  </select>
              </div>
              <div class="nsl" style="border-right: none" v-else>
                  <i class="bi bi-x-square-fill" @click="
                      control = { name: '', spec: '', speciality: '', promotion: '' }
                      " style="cursor: pointer"></i>
                  <input type="text" placeholder="Aucun filtre selectionné" disabled />
              </div> -->
          </div>

      </div>

      <div class="contenu d-flex justify-content-center align-items-center flex-wrap" data-aos="fade-up"
          data-aos-delay="100">

          <div v-if="paginatedItems.length === 0" class="noresul">
    <span> Aucune opportunité n'est ouverte actuellement. </span>
  </div>

          <!-- <v-card class="mx-auto my-3 p-2" max-width="250" height="250">
              <v-img class="align-end text-white" height="150"
                  src="https://mpme-guinee.com/bd/public/MPME_IMAGES_DOCUMENTS/KIONOU-SARL_1692812920.png" cover>

              </v-img>

              <v-card-text height="100" class="  text-h6">
                  Appel à manifestation d’intérêt à Chemonics International
              </v-card-text>
          </v-card> -->
         




        
          <div class="task" v-else v-for="offre in paginatedItems" :key="offre.id">
              <div class="tag">
                  <h5>
                      {{ offre.titre }}
                  </h5>

                  <div class="texte">
                      <!-- <p class="texte-content chef"><i class="bi bi-briefcase-fill"></i> <span> {{obtenirValeursPourCles(offre.liste_sous_secteurs)}} </span></p> -->
                      <p class="texte-content open"> <i class="bi bi-calendar-plus-fill"></i> <span> {{ offre.dateCreation }}</span></p>
                      <p class="texte-content close"> <i class="bi bi-calendar2-x-fill"></i> <span> {{ offre.dateCloture }}</span></p>
                      <!-- <p class="texte-content maps"><i class="bi bi-geo-alt-fill"></i> <span>Nzérékoré , Macenta</span> -->
                      <!-- </p> -->


                  </div>
              </div>

<!-- 
              <div class="boutton">
                  <a href="#" class="btn"> Detail
                      <span></span>
                  </a>
              </div> -->
               <div class="boutton">
        <p @click="$router.push({ path: `/opportunites/${offre.CodeOffre}`, })" class="btn">Detail<span></span></p>
      </div>


          </div>


      </div>
      <div class="container_pagination">
  <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
</div>
  </div>
</template>

<script>
import Loading from '../../../components/Public/other/preloader.vue';
import axios from '@/lib/axiosConfig.js'
import Pag from '../../../components/Public/other/pag.vue';
import {obtenirValeursPourCles} from '@/lib/sousSecteur.js'
export default {
  name: 'Mpmeoffre',
  components: {
 Loading , Pag

},
computed: {

loggedInUser() {
return this.$store.getters['user/loggedInUser'];
},
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
          loading:true,
          data:'',
          currentPage: 1,
       itemsPerPage: 15,
      };
  },
 

 async  mounted() {
    await    this.fetchSousSecteurActiviteOptions()
    // await    this.fetchData() 
    await    this.fetchgetOffreMpme()
     console.log("datadossiers", this.loggedInUser);
  },


  methods: {
    obtenirValeursPourCles(sousSecteurs){
            const option = this.SousSecteurActiviteOptions.find((opt) => opt.value === sousSecteurs);
           console.log('option',option)

      return option ? option.label : sousSecteurs; 
        
        },
         async fetchSousSecteurActiviteOptions() {
      try {
        await this.$store.dispatch('fetchSousSecteurOptions'); 
        this.SousSecteurActiviteOptions = this.$store.getters['getSousSecteurOptions']
      } catch (error) {
        console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error.message);
      }
    },
      async fetchgetOffreMpme() {
      try {
        const response = await axios.get('offres/publique');
        console.log('UserData:', response);

        if (response.data.status === 'success') {
            this.loading = false
            console.log('UserData:', response.data.data.data);
            const offresPubliees = response.data.data.data.filter(offre => offre.publish === 0);
            this.offres = offresPubliees
             this.filterOffres =  offresPubliees
          
        }  
      } catch (error) {
        console.error('Erreur lors de la récupération des options des sous prefecture :', error);
        console.log('aut',error);

          
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
    .banner-title {
    
    font-size: 30px;
    
}
}

@media (max-width: 500px) {
    .banner-title {
    
    font-size: 25px;
    
}
}
/* fin banier */
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
  /* border: 1px solid red; */
  background: #fff;

}

.section-header {
  padding: 20px 0 !important;

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


.liste-searcher {
  justify-content: center;
  display: flex;
  width: 50%;
  border-radius: 6px;
  height: 60px;
  background-color: #fff;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  /* border: 1px solid red; */
  justify-content: center;
    align-items: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
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
  max-width: 330px;
  width: 100%;
  height: 221px;
}


/* .task:hover {
box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
border-color: rgba(162, 179, 207, 0.2) !important;
background-color: var(--color-primary);
color: white !important;
}
.task:hover .texte-content {
  color: white !important;
} */
.task h5 {
  color: #333;
  text-align: center;
}

.texte-content bi {
  font-size: 14px;

}

.texte-content .chef {
  color: #777;

}

.texte-content .open {
  color: #999999;
}

.texte-content .close {
  color: #999999;

}

.texte-content .maps {
  color: #999999;

}

.bi-briefcase-fill {

  color: #f5851e;
}

.bi-calendar-plus-fill {

  color: rgb(4, 243, 123);

}

.bi-calendar2-x-fill {

  color: red;

}

.bi-geo-alt-fill {

  color: var(--color-secondary);

}


.texte-content {
  /* color: #6f6f6f !important; */
  font-weight: bold;
  font-size: 13px;

}



p {
  margin-bottom: 0 !important;
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
}

.btn:hover {
  background-color: #fff;
  border: 1px solid var(--color-secondary);

}

.boutton {

  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  bottom: 8px;
  position: absolute;
  left: -11px;


}

/* .btn {
border: none;
display: block;
position: relative;
padding: 0.4em 2em;
font-size: 11px;
background: transparent;
cursor: pointer;
user-select: none;
overflow: hidden;
color: #008374;
z-index: 1;
font-family: inherit;
font-weight: 500;
}

.btn span {
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
background: transparent;
z-index: -1;
border: 1px solid #008374;
}

.btn span::before {
content: "";
display: block;
position: absolute;
width: 8%;
height: 500%;
background: white;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) rotate(-60deg);
transition: all 0.3s;
}

.btn:hover span::before {
transform: translate(-50%, -50%) rotate(-90deg);
width: 100%;
background: #008374;
}

.btn:hover {
color: white;
}

.btn:active span::before {
background: #008374;
} */
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

}</style>