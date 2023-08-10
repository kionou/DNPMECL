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
                                aria-selected="false">
                                Positon
                            </button>
                        </li>

                    </ul>
                    <div class="tab-content">
                        <div class=" tab-pane fade show active" id="navs-pills-top-home1" role="tabpanel">

                            <div class="row">
                                <div class=" card col-xl-5 col-lg-5 col-md-5 py-2">
                                    <!-- About User -->
                                    <!-- <div class="card mb-4">
                                    <div class="card-body">
                                      
                                        <ul class="list-unstyled mb-4 mt-3">
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-user"></i><span class="fw-semibold mx-2">Dirigeant:</span>
                                                <span>{{ data.NomDirigeant }} {{ data.PrenomDirigeant }}</span>
                                            </li>
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-check"></i><span class="fw-semibold mx-2">Création:</span>
                                                <span>{{ data.AnneeCreation }}</span>
                                            </li>
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-star"></i><span class="fw-semibold mx-2"> 01/01/1954:</span>
                                                <span>
                                                    Construction de véhicules automobiles</span>
                                            </li>
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-flag"></i><span class="fw-semibold mx-2">Forme  juridique:</span>
                                                <span>{{ data.CodeStatutJuridique }}</span>
                                            </li>
                             
                                        </ul>
                                        <small class="text-muted text-uppercase">Contacts</small>
                                        <ul class="list-unstyled mb-4 mt-3">
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-phone"></i><span class="fw-semibold mx-2">Contact:</span>
                                                <span>(+224) {{ data.NumeroWhatsApp }}</span>
                                            </li>
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-chat"></i><span class="fw-semibold mx-2">Site Web :</span>
                                                <span>{{ data.SiteWeb }}</span>
                                            </li>
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-envelope"></i><span class="fw-semibold mx-2">Email:</span>
                                                <span>{{ data.AdresseEmail }}</span>
                                            </li>
                                        </ul>
                                        <small class="text-muted text-uppercase">Equipe</small>
                                        <ul class="list-unstyled mt-3 mb-0">
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bxl-github text-primary me-2"></i>
                                                <div class="d-flex flex-wrap">
                                                    <span class="fw-semibold me-2">Nombres employés hommes</span><span>{{ data.PersonnelPermanentHomme }}</span>
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center">
                                                <i class="bx bxl-react text-info me-2"></i>
                                                <div class="d-flex flex-wrap">
                                                    <span class="fw-semibold me-2">Nombres employés femmes</span><span> {{ data.PersonnelPermanentFemme }} </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div> -->

                                    <div class=" bg-white rounded-lg  ">
                                       
                                        <div class="">
                                            <div class="overflow-hidden bg-white   border-b border-gray-200 rounded-lg  ">
                                               
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
                                                            <h6 class="mb-0">Numéro NIF: {{ data.NumeroNif }}</h6>
                                                            <!-- <small class="text-muted">Today</small> -->
                                                        </div>
                                                        <p class="mb-2">Numero RCCM: {{ data.NumeroRccm }}</p>
                                                        <div class="d-flex flex-wrap">

                                                            <div>
                                                                <h6 class="mb-0">Autre statut juridique:jdhshsh,jsdj</h6>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="timeline-item timeline-item-transparent">
                                                    <span class="timeline-point timeline-point-info"></span>
                                                    <div class="timeline-event">
                                                        <div class="timeline-header mb-1">
                                                            <h6 class="mb-0">Sous secteur d'activité</h6>
                                                            <!-- <small class="text-muted">2 Day Ago</small> -->
                                                        </div>
                                                        <p class="mb-0">Sous secteur1,sous secteur2</p>
                                                    </div>
                                                </li>
                                                <li class="timeline-item timeline-item-transparent">
                                                    <span class="timeline-point timeline-point-primary"></span>
                                                    <div class="timeline-event">
                                                        <div class="timeline-header mb-1">
                                                            <h6 class="mb-0">Chiffres d'affaire</h6>
                                                            <!-- <small class="text-muted">6 Day Ago</small> -->
                                                        </div>
                                                        <p class="mb-2">
                                                            450.000.000 GNF
                                                        </p>

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
                        <Position :data="data"/>
                    </div>

                </div>
            </div>
        </div>

    </div>
</div></template>

<script>
import Navbar from '../../components/loyout/navbar.vue';
import Footer from '../../components/loyout/footer.vue';
import axios from '@/lib/axiosConfig.js'
import Position from '../../components/Public/LISTE_PME/position.vue'
import { provide } from 'vue'
export default {
    name: 'DNPMECLDetail',
    components: {
        Navbar, Footer, Position
    },
    props: ['id'],

    data() {
        return {
            data: ''
        };
    },

    mounted() {
        console.log('idddd', this.id);
        this.fetchData()
    },

    methods: {
        async fetchData() {
            const response = await axios.get(`/mpme/${this.id}`)
            const data = response.data.data
            console.log('eeee', data);
            this.data = data
            provide('data', data);

        },
    },
};
</script>

<style lang="css" ></style>