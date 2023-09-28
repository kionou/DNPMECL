<template>
    <Loading v-if="loading"></Loading>
    <div>
        <div class="container-xxl flex-grow-1 container-p-y">
            <!-- Header -->
            <div class="row">
                <div class="col-12">
                    <div class="card mb-4">
                        <div class="user-profile-header-banner">
                            <img src="@/assets/img/guinee.jpg" alt="Banner image" class="rounded-top" />
                        </div>
                        <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                            <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                                <img src="@/assets/img/prof.png" alt="user image"
                                    class="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img" />
                            </div>
                            <div class="name-user">
                                <div
                                    class="d-flex  align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                    <div class="user-profile-info text-capitalize">
                                        <h4 class="text-capitalize">{{ data.NomMpme }}</h4>
                                        <ul
                                            class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                            <li class="list-inline-item fw-semibold"><i
                                                    class="fa-solid fa-location-dot"></i> {{ data.Ville }} {{ data.Localisation }} {{ data.Rue }} </li>
                                            

                                        </ul>
                                       
                                    </div>
                                </div>
                                <hr>
                            </div>
                            <!-- <div class="flex-grow-1 mt-3 mt-sm-5">
                                <div
                                    class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                    <div class="user-profile-info text-capitalize">
                                        <h4 class="text-capitalize">{{ data.NomMpme }}</h4>
                                        <ul
                                            class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                            <li class="list-inline-item fw-semibold"><i
                                                    class="fa-solid fa-location-dot"></i> {{ data.Ville }} {{ data.Localisation }} {{ data.Rue }}</li>
                                           

                                        </ul>
                                        <hr>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <!--/ Header -->

            <!-- Navbar pills -->
            <div class="col-lg-12 col-12 mb-4">
                <div class="nav-align-top mb-4">
                    <ul class="nav nav-pills mb-3" role="tablist">
                        <li class="nav-item">
                            <button type="button" class="nav-link  active" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-pills-top-home1" aria-controls="navs-pills-top-home1"
                                aria-selected="true">
                                Informations générales
                            </button>
                        </li>

                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-pills-top-profile1" aria-controls="navs-pills-top-profile1"
                                aria-selected="false">
                                Photos
                            </button>
                        </li>

                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-pills-top-messages11" aria-controls="navs-pills-top-messages1"
                                aria-selected="false" @click="reloadChild">
                                Positon
                            </button>
                        </li>

                    </ul>
                    <div class="tab-content">
                        <div class=" tab-pane fade show active" id="navs-pills-top-home1" role="tabpanel">

                            <div class="row ttb">
                                <div class=" card col-xl-5 col-lg-5 col-md-5 py-2 ttb1">
                                    <div class=" bg-white rounded-lg  ">
                                       
                                        <div class="">
                                            <div class="overflow-hidden bg-white border-b border-gray-200 rounded-lg">
                                               
                                                <div class="border-t border-gray-200">
                                                    <dl>
                                                        <div class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt class="text-sm font-medium text-gray-500">Nom Dirigeant</dt>
                                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.NomDirigeant }} {{ data.PrenomDirigeant }}</dd>
                                                        </div>
                                                        <div
                                                            class="px-4 py-3 bg-white sm:grid grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt class="text-sm font-medium text-gray-500">Date de Création</dt>
                                                            <dd
                                                                class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{{ data.AnneeCreation }}</dd>
                                                        </div>

                                                        <div class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt class="text-sm font-medium text-gray-500">Date de début des activités</dt>
                                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.AnneeEntreeActivite }} </dd>
                                                        </div>
                                                        <div
                                                            class="px-4 py-3 bg-white sm:grid grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt class="text-sm font-medium text-gray-500">Forme  juridique</dt>
                                                            <dd
                                                                class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{{ data.CodeStatutJuridique }}</dd>
                                                        </div>
                                                        <div class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt class="text-sm font-medium text-gray-500">Secteur d'activité</dt>
                                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.PrincipalSecteurActivite }} </dd>
                                                        </div>
                                                        <div
                                                            class="px-4 py-3 bg-white sm:grid grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt class="text-sm font-medium text-gray-500">Téléphone WhathApp</dt>
                                                            <dd
                                                                class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">  {{ data.NumeroWhatsApp }}</dd>
                                                        </div>

                                                        <div class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt class="text-sm font-medium text-gray-500">Téléphone Secondaire</dt>
                                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.NumeroTelephoneSecondaire }} </dd>
                                                        </div>
                                                        <div
                                                            class="px-4 py-3 bg-white sm:grid grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6  ">
                                                            <dt class="text-sm font-medium text-gray-500">Email</dt>
                                                            <dd
                                                                class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{{ data.AdresseEmail }}</dd>
                                                        </div>

                                                        
                                                    </dl>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="rounded-lg  mt-3">
                        <p class="max-w-2xl mb-1 text-center font-semibold text-gray-900">Nombre d'emplois directs
                            temporaires et permanents créés</p>
                        <div class="-my-2  sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div class="overflow-hidden border-b border-gray-200  rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                               
                                                <th scope="col"
                                                    class="px-2 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                                                    Permanents-Homme</th>
                                                <th scope="col"
                                                    class="px-2 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                                                    Permanents-Femme</th>
                                                <th scope="col"
                                                    class="px-2 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                                                    Temporaires-Homme</th>
                                                <th scope="col"
                                                    class="px-2 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                                                    Temporaires - Femme</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white">
                                            
                                                <td
                                                    class="px-2 py-4 text-sm font-normal text-center text-gray-500 whitespace-nowrap">{{ data.PersonnelPermanentHomme }}</td>
                                                <td
                                                    class="px-2 py-4 text-sm font-normal text-center text-gray-500 whitespace-nowrap">{{ data.PersonnelPermanentFemme }}</td>
                                                <td
                                                    class="px-2 py-4 text-sm font-normal text-center text-gray-500 whitespace-nowrap">{{ data.PersonnelTemporaireHomme}}</td>
                                                <td
                                                    class="px-2 py-4 text-sm font-normal text-center text-gray-500 whitespace-nowrap">{{ data.PersonnelTemporaireFemme}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-7 my-6 col-md-7 ttb2">
                                    <!-- Activity Timeline -->
                                    <div class="card card-action mb-4">
                                        <div class="card-header align-items-center">
                                            <h5 class="card-action-title mb-0"><i class="bx bx-list-ul me-2"></i>Details
                                                informations</h5>
                                            <div class="card-action-element">
                                                <div class="dropdown">
                                                    <button type="button" class="btn dropdown-toggle hide-arrow p-0"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li><a class="dropdown-item" href="javascript:void(0);">Share
                                                                timeline</a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="javascript:void(0);">Suggest
                                                                edits</a>
                                                        </li>
                                                        <li>
                                                            <hr class="dropdown-divider" />
                                                        </li>
                                                        <li><a class="dropdown-item" href="javascript:void(0);">Report
                                                                bug</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <ul class="timeline ms-2">
                                                <li class="timeline-item timeline-item-transparent">
                                                    <span class="timeline-point timeline-point-warning"></span>
                                                    <div class="timeline-event">
                                                        <div class="timeline-header mb-1">
                                                            
                                                        <p class="mb-2 text-sm font-medium text-gray-500">Numéro NIF: <span  class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.NumeroNif }}</span></p>

                                                            
                                                        </div>
                                                        <p class="mb-2 text-sm font-medium text-gray-500">Numero RCCM: <span  class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">  {{ data.NumeroRccm }}</span></p>
                                                        <div class="d-flex flex-wrap">

                                                            <div>
                                                        <p class="mb-2 text-sm font-medium text-gray-500">Autre statut juridique <span  class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.AutreStatutJuridique }}</span></p>

                                                                

                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="timeline-item timeline-item-transparent">
                                                    <span class="timeline-point timeline-point-info"></span>
                                                    <div class="timeline-event">
                                                        <div class="timeline-header mb-1">
                                                            <h6 class="mb-0 text-sm font-medium text-gray-500">Sous secteur d'activité</h6>
                                                            <!-- <small class="text-muted">2 Day Ago</small> -->
                                                        </div>
                                                        <span  class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2" v-for="item in items" :key="item.id"> {{ item}}, </span>
                                                    </div>
                                                </li>
                                                <li class="timeline-item timeline-item-transparent">
                                                    <span class="timeline-point timeline-point-primary"></span>
                                                    <div class="timeline-event">
                                                        <div class="timeline-header mb-1">
                                                            <h6 class="mb-0 text-sm font-medium text-gray-500">Chiffres d'affaire</h6>
                                                           
                                                        </div>
                                                        <span  class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.ChiffreAffaire1 }}</span>


                                                    </div>
                                                </li>
                                                <li class="timeline-item timeline-item-transparent">
                                                    <span class="timeline-point timeline-point-primary"></span>
                                                    <div class="timeline-event">
                                                        <div class="timeline-header mb-1">
                                                            <h6 class="mb-0">Documents</h6>
                                                            <!-- <small class="text-muted">6 Day Ago</small> -->
                                                        </div>

                                                        <div class="d-flex flex-wrap gap-2">
                                                            <p v-if="datadoc.length === 0"> Pas de documents pour l'instant !</p>
                                                            <a   v-else  :href="doc.LienDocument" class="me-3" v-for="doc in datadoc"  :key="doc.id" download>
                                                                <img src="@/assets/misc/pdf.png" alt="Document image"
                                                                    width="20" class="me-2" />
                                                                <span class="h6">{{ doc.NomDocument }}</span>
                                                            </a>
                                                           
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>



                        </div>
                        <div class="tab-pane fade" id="navs-pills-top-profile1" role="tabpanel">
                            <!-- <section id="blog" class="blog">
                                <div class="container" data-aos="fade-up">

                                    <div class="posts-list d-flex flex-row flex-wrap">

                                        <div class="col-xl-4 col-md-6" v-for="img in dataimage" :key="img.id">
                                            <article>

                                                <div class="post-img">
                                                    <img :src="img.Photo" alt="" class="img-fluid" style="border: 1px solid var(--color-secondary) ; border-radius: 10px;">
                                                </div>




                                            </article>
                                        </div>

                                </div>
          

                            </div>
                        </section> -->

<div class=" d-flex justify-content-center align-items-center flex-wrap" style="position: relative;">
    
   
    <div v-if="paginatedItems.length === 0" class="noresul">
      <span> Vous n'avez pas encore publier d'image. </span>
    </div>
    <div class="contenu d-flex justify-content-center align-items-center flex-wrap" data-aos="fade-up"
      data-aos-delay="100" v-else>
      <div class="task" v-for="item in paginatedItems" :key="item.id">
        <div class="image">
          <img :src="item.Photo" alt="">
        </div>

        
      </div>
    </div>

  </div>
  <div class="container_pagination">
    <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
  </div>

                    </div>

                    <div class="tab-pane fade" id="navs-pills-top-messages11" role="tabpanel">
                        <Position :data="data"  :key="childKey"/>
           
                    </div>

                </div>
            </div>
        </div>

    </div>
</div></template>

<script>
import axios from '@/lib/axiosConfig.js'

import Position from '../../components/Public/LISTE_PME/position.vue'
import Loading from '../../components/Public/other/preloader.vue';
import Pag from '../../components/Public/other/pag.vue';


export default {
    name: 'DNPMECLDetail',
    components: { Position , Loading   , Pag },
    props: ['id'],
    computed: {
    totalPages() {
    // return Math.ceil(this.items.length / this.itemsPerPage);
    return Math.ceil(this.dataimage.length / this.itemsPerPage);
  },
  paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.dataimage.slice(startIndex, endIndex);
    },

  },

    data() {
        return {
         loading:true,
         data: '',
         isFullScreen: false,
         childKey: 0,
         sous_secteur:'',
         items:'',
         datadoc:[],
         dataimage:[],
         currentPage: 1,
         itemsPerPage: 10,
        };
    },

  async  mounted() {

    await  this.fetchData(),
    await   this.fetchDataDoc(),
   await this.fetchDataImage()
    },

    methods: {
      async  reloadChild() {
      this.childKey += 1; // Changez la clé pour recharger le composant enfant
    },
        async fetchData() {
            const response = await axios.get(`/mpme/${this.id}`)
            const data = response.data.data
            console.log('eeee', data);
            this.data = data
            this.loading =   false
            // this.items = JSON.parse(this.data.ListeSousSecteurActivite)
  

        },

        async fetchDataDoc() {
            const response = await axios.get('/documents-mpme/published')
            const data = response.data.data.data
            this.datadoc = data
            console.log('doc', data);
            this.datadoc = this.datadoc.filter((doc) => {
            return doc.CodeMpme === this.id; // Remplacez "userId" par la propriété qui contient l'ID de l'utilisateur dans vos données de documents.
            });
        },

        async fetchDataImage() {
            const response = await axios.get('/mpme/photos/publication-de-photo-mpme')
            const data = response.data.data.data
            this.dataimage = data
            console.log('image', data);
            this.dataimage = this.dataimage.filter((img) => {
            return img.CodeMpme === this.id; // Remplacez "userId" par la propriété qui contient l'ID de l'utilisateur dans vos données de documents.
            });
            console.log('this.dataimage',this.dataimage);
        },
    },
};
</script>


<style lang="css" scoped >

.name-user{
/* border:1px solid red; */
width: 100%;
height: 50px;
height: auto;
    margin-top: 34px;

}
@media (max-width: 1100px) {

    .ttb{
    
    flex-direction:column;
    }
    .ttb1 , .ttb2{
    
    width: 100%;
    }

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
.contenu {

/* border: 1px solid red; */
padding: 15px 10px;
}

.task {
  position: relative;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--color-secondary);
  margin: 0 10px 10px 0;
  width: 300px;
  height: 250px;
}

.image {

  width: 100%;
  height: 100%;

}

.task:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.image img {

  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

</style>