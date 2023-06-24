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
                            <div class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                <div class="user-profile-info">
                                    <h4>Guinea Alumina Corporation</h4>
                                    <ul
                                        class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                        <li class="list-inline-item fw-semibold"><i class="fa-solid fa-location-dot"></i> 2
                                            Boulevard De L Europe - 78300 Poissy</li>
                                        <li class="list-inline-item fw-semibold"><i class="bx bx-map"></i> Vatican City</li>

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
                            <div class="col-xl-4 col-lg-5 col-md-5">
                                <!-- About User -->
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <!-- <small class="text-muted text-uppercase">About</small> -->
                                        <ul class="list-unstyled mb-4 mt-3">
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-user"></i><span class="fw-semibold mx-2">Dirigeant:</span>
                                                <span>John Doe</span>
                                            </li>
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-check"></i><span class="fw-semibold mx-2">réation:</span>
                                                <span>
                                                    01/01/1954</span>
                                            </li>
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-star"></i><span class="fw-semibold mx-2"> 01/01/1954:</span>
                                                <span>
                                                    Construction de véhicules automobiles</span>
                                            </li>
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-flag"></i><span class="fw-semibold mx-2">Forme
                                                    juridique:</span>
                                                <span>
                                                    Société par actions simplifiée</span>
                                            </li>
                             
                                        </ul>
                                        <small class="text-muted text-uppercase">Contacts</small>
                                        <ul class="list-unstyled mb-4 mt-3">
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-phone"></i><span class="fw-semibold mx-2">Contact:</span>
                                                <span>(123) 456-7890</span>
                                            </li>
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-chat"></i><span class="fw-semibold mx-2">Skype:</span>
                                                <span>john.doe</span>
                                            </li>
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bx-envelope"></i><span class="fw-semibold mx-2">Email:</span>
                                                <span>john.doe@example.com</span>
                                            </li>
                                        </ul>
                                        <small class="text-muted text-uppercase">Equipe</small>
                                        <ul class="list-unstyled mt-3 mb-0">
                                            <li class="d-flex align-items-center mb-3">
                                                <i class="bx bxl-github text-primary me-2"></i>
                                                <div class="d-flex flex-wrap">
                                                    <span class="fw-semibold me-2">Nombres employés hommes</span><span>126
                                                    </span>
                                                </div>
                                            </li>
                                            <li class="d-flex align-items-center">
                                                <i class="bx bxl-react text-info me-2"></i>
                                                <div class="d-flex flex-wrap">
                                                    <span class="fw-semibold me-2">Nombres employés femmes</span><span>98
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                              
                            </div>
                            <div class="col-xl-8 col-lg-7 col-md-7">
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
                                                    <li><a class="dropdown-item" href="javascript:void(0);">Report bug</a>
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
                                                        <h6 class="mb-0">Numéro NIF: 1DD4444</h6>
                                                        <!-- <small class="text-muted">Today</small> -->
                                                    </div>
                                                    <p class="mb-2">Numero RCCM: 1DDKN4</p>
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
                                                            <img src="@/assets/misc/pdf.png" alt="Document image" width="20"
                                                                class="me-2" />
                                                            <span class="h6">DOC 1</span>
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            <img src="@/assets/misc/doc.png" alt="Excel image" width="20"
                                                                class="me-2" />
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
                        <Position />
                    </div>

                </div>
            </div>
        </div>

    </div>
    </div>
</template>

<script>
import Navbar from '../../components/loyout/navbar.vue';
import Footer from '../../components/loyout/footer.vue';
import Position from '../../components/Public/LISTE_PME/position.vue'
export default {
    name: 'DNPMECLDetail',
    components: {
        Navbar, Footer, Position
    },

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="css" >

</style>