<template>
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
                            <div class="flex-grow-1 mt-3 mt-sm-5">
                                <div
                                    class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                    <div class="user-profile-info text-capitalize">
                                        <h4 class="text-capitalize">{{ data.NomMpme }}</h4>
                                        <ul
                                            class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                            <li class="list-inline-item fw-semibold"><i
                                                    class="fa-solid fa-location-dot"></i> 2
                                                Boulevard De L Europe - 78300 Poissy</li>
                                            <li class="list-inline-item fw-semibold"><i class="bx bx-map"></i> Vatican City
                                            </li>

                                        </ul>
                                        <hr>
                                    </div>
                                </div>
                            </div>
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

                            <div class="row">
                                <div class=" card col-xl-5 col-lg-5 col-md-5 py-2">
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
                                                                class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> (+224) {{ data.NumeroWhatsApp }}</dd>
                                                        </div>

                                                        <div class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt class="text-sm font-medium text-gray-500">Téléphone Secondaire</dt>
                                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> (+224) {{ data.NumeroTelephoneSecondaire }} </dd>
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
                                <div class="col-xl-7 col-lg-7 col-md-7">
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
                                                        <span  class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.ListeSousSecteurActivite }}</span>
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
                                                            <a href="javascript:void(0)" class="me-3">
                                                                <img src="@/assets/misc/pdf.png" alt="Document image"
                                                                    width="20" class="me-2" />
                                                                <span class="h6">DOC 1</span>
                                                            </a>
                                                            <a href="javascript:void(0)">
                                                                <img src="@/assets/misc/doc.png" alt="Excel image"
                                                                    width="20" class="me-2" />
                                                                <span class="h6">DOC 2</span>
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
                            <section id="blog" class="blog">
                                <div class="container" data-aos="fade-up">

                                    <div class="row gy-4 posts-list">

                                        <div class="col-xl-4 col-md-6">
                                            <article>

                                                <div class="post-img">
                                                    <img src="@/assets/img/blog/gac1.jpeg" alt="" class="img-fluid">
                                                </div>




                                            </article>
                                        </div><!-- End post list item -->

                                        <div class="col-xl-4 col-md-6">
                                            <article>

                                                <div class="post-img">
                                                    <img src="@/assets/img/blog/gac2.jpeg" alt="" class="img-fluid">
                                                </div>



                                            </article>
                                        </div><!-- End post list item -->

                                        <div class="col-xl-4 col-md-6">
                                            <article>

                                                <div class="post-img">
                                                    <img src="@/assets/img/blog/gac1.jpeg" alt="" class="img-fluid">
                                                </div>



                                        </article>
                                    </div><!-- End post list item -->


                                </div><!-- End blog posts list -->

                                <div class="blog-pagination">
                                    <ul class="justify-content-center">
                                        <li><a href="#">1</a></li>
                                        <li class="active"><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                    </ul>
                                </div><!-- End blog pagination -->

                            </div>
                        </section>

                    </div>

                    <div class="tab-pane fade" id="navs-pills-top-messages11" role="tabpanel">
                        <Position :data="data"  :key="childKey"/>
                        <!-- <div class="row">
        <div class=" card col-xl-5 col-lg-5 col-md-5 py-2">
            <div class=" bg-white rounded-lg  ">

                <div class="">
                    <div class="overflow-hidden bg-white   border-b border-gray-200 rounded-lg  ">

                        <div class="border-t border-gray-200">
                            <dl>
                                <div
                                    class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Région</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.Region }}</dd>
                                </div>
                                <div
                                    class="px-4 py-3 bg-white sm:grid grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Préfecture</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{{ data.AnneeCreation
                                    }}</dd>
                                </div>

                                <div
                                    class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Sous-préfecture</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                        data.Sousprefecture }} </dd>
                                </div>
                                <div
                                    class="px-4 py-3 bg-white sm:grid grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Commune</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{{
                                        data.Commune }}</dd>
                                </div>
                                <div
                                    class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Ville</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                        data.Ville }} </dd>
                                </div>
                                <div
                                    class="px-4 py-3 bg-white sm:grid grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Quartier</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">  {{ data.Quartier }}</dd>
                                </div>

                                <div
                                    class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Rue</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">  {{
                                        data.Rue }} </dd>
                                </div>
                                <div
                                    class="px-4 py-3 bg-white sm:grid grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6  ">
                                    <dt class="text-sm font-medium text-gray-500">Localisation</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{{ data.Localisation
                                    }}</dd>
                                </div>


                            </dl>
                        </div>
                    </div>

                </div>

            </div>

           
        </div>
        <div class="col-xl-7 col-lg-7 col-md-7">

            <div class="maps_container" >
                <div class="map-wrap">
                    <a href="https://www.maptiler.com" class="watermark">
                        <img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" />
                    </a>
                    <div class="map" ref="mapContainer"></div>

                </div>


            </div>
        </div>
                        </div>  -->
                    </div>

                </div>
            </div>
        </div>

    </div>
</div></template>

<script>
import axios from '@/lib/axiosConfig.js'
import mapboxgl from 'maplibre-gl'; // Ajoutez cette ligne
import { NavigationControl, Marker, Popup } from 'maplibre-gl';
import { shallowRef, onMounted, onUnmounted, markRaw, ref } from 'vue';
import Position from '../../components/Public/LISTE_PME/position.vue'

export default {
    name: 'DNPMECLDetail',
    components: { Position },
    props: ['id'],
    setup() {
    // const mapContainer = shallowRef(null);
    // const map = shallowRef(null);
    // const markers = shallowRef([]);

    // onUnmounted(() => {
    //   map.value?.remove();
    // });

    // return {
    //   map,
    //   mapContainer,
    //   markers,
 
    // };
  },

    data() {
        return {
            data: '',
         isFullScreen: false,
         childKey: 0,
        };
    },

    mounted() {

        this.fetchData()
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
    //         const apiKey = 'R0tHx9tGeRGXSyvwlX0q';
    //   const initialState = { lng: -11.283844999999985, lat: 9.934886500000001, zoom: 5.5 };
    //   this.showMap = true;
    //   this.map = markRaw(
    //     new mapboxgl.Map({
    //       container: this.mapContainer,
    //       style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
    //       center: [initialState.lng, initialState.lat],
    //       zoom: initialState.zoom,
    //     })
    //   );
   
    //   this.map.addControl(new NavigationControl(), 'top-right');

    //   const newMarker = new Marker({ color: '#FF0000' })
    //     .setLngLat([data.LongitudeMpme, data.LatitudeMpme])
    //     .addTo(this.map);
    //     const popupContent = `
    //     <div>
    //       <h3> Nom: ${data.NomMpme}</h3>
    //       <p> <h4>Description:</h4> ${data.description}</p>
    //     </div>`;
    //   newMarker.setPopup(new Popup().setHTML(popupContent));

    //   newMarker.getElement().addEventListener('click', () => {
    //     this.map.flyTo({
    //       center: [data.LongitudeMpme, data.LatitudeMpme],
    //       zoom: 10,
    //     });
    //   });

        },
    },
};
</script>


<style lang="css" scoped >

</style>