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
                            <div class="name-user">
                                <div
                                    class="d-flex  align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                    <div class="user-profile-info text-capitalize">
                                        <h4 class="text-capitalize">KIONOU serl</h4>
                                        <ul
                                            class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                            <li class="list-inline-item fw-semibold"><i
                                                    class="fa-solid fa-location-dot"></i> 2
                                                Boulevard De L Europe - 78300 Poissy</li>
                                            <li class="list-inline-item fw-semibold"><i class="bx bx-map"></i> Vatican City
                                            </li>

                                        </ul>
                                       
                                    </div>
                                </div>
                                <hr>
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
                    <div class="">
                        <div class=" tab-pane fade show active" id="navs-pills-top-home1" role="tabpanel">
                         <Etape1/>
                        </div>
                     

                    <div class="tab-pane fade" id="navs-pills-top-profile1" role="tabpanel">
                       
                     <p>kkkkk</p>
                    </div>

                </div>
            </div>
        </div>

    </div>
</div></template>

<script>
import axios from '@/lib/axiosConfig.js'

import Etape1 from '../profil/etape1.vue';


export default {
    name: 'DNPMECLDetail',
    components: { Etape1 },
    props: ['id'],
    setup() {
   
  },

    data() {
        return {
            data: '',
         isFullScreen: false,
         childKey: 0,
         sous_secteur:'',
         items:'',
        };
    },

    mounted() {

        this.fetchData()
    },

    methods: {
    
        async fetchData() {
            const response = await axios.get(`/mpme/${this.id}`)
            const data = response.data.data
            console.log('eeee', data);
            this.data = data
            
   

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
.fade:not(.show) {
    display: none;
    opacity: 0;
}
.titre {
    display: block;
    color: rgba(156, 163, 175, 1);
    margin-bottom: 4px;
    font-size: 12px;
}
@media (max-width: 1023px) {
.class1{
flex-direction: column;
}

.class2{
background-color: #F9FAFB;
}

}
@media (max-width: 1100px) {

    .ttb{
    
    flex-direction:column;
    }

}

</style>