<template>
    <Loading v-if="loading"></Loading>
    <div>
        <div class="container-xxl flex-grow-1 container-p-y">
            <!-- Header -->
            <div class="row haut">
                <div class="col-12">
                    <div class="card mb-4">
                        <div class="user-profile-header-banner">
                            <img src="@/assets/img/guinee.jpg" alt="Banner image" class="rounded-top" />
                        </div>
                        <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                            <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                                <img  v-if="data.profile === null" src="@/assets/img/flags.png " alt=""  class="d-block  ms-0 ms-sm-4 rounded user-profile-img">
                               <img v-else :src="data.profile" alt=""  class="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img">
                                <!-- <img src="@/assets/img/prof.png" alt="user image"
                                    class="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img" /> -->
                            </div>
                            <div class="name-user">
                                <div
                                    class="d-flex  align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                    <div class="user-profile-info text-capitalize">
                                        <h4 class="text-capitalize">{{ data.NomMpme }}</h4>
                                        <ul
                                            class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                            <li class="list-inline-item fw-semibold"><i
                                                    class="fa-solid fa-location-dot"></i>  {{ data.Ville }} {{ data.Localisation }} {{ data.Rue }}</li>
                                           

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
                                aria-selected="true" >
                               Etape 1
                            </button>
                        </li>

                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-pills-top-profile1" aria-controls="navs-pills-top-profile1"
                                aria-selected="false" >
                                Etape 2
                            </button>
                        </li>

                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-pills-top-messages11" aria-controls="navs-pills-top-messages11"
                                aria-selected="false" >
                                Etape 3
                            </button>
                        </li>

                    </ul>
                    <div class="">
                        <div class=" tab-pane fade show active" id="navs-pills-top-home1" role="tabpanel">
                         <Etape1 :data="data" :items="items"/>
                        </div>
                     

                    <div class="tab-pane fade" id="navs-pills-top-profile1" role="tabpanel">
                       
                        <Etape2 :data="data" :items="items"/>
                    </div>

                    <div class="tab-pane fade" id="navs-pills-top-messages11" role="tabpanel" >
                       
                       <Etape3 :data="data" />
                   </div>

                </div>
            </div>
        </div>

    </div>
</div></template>

<script>
import axios from '@/lib/axiosConfig.js'
import Etape1 from '../../components/Public/profil/etape1.vue';
import Etape2 from '../../components/Public/profil/etape2.vue';
import Etape3 from '../../components/Public/profil/etape3.vue';
import Loading from '../../components/Public/other/preloader.vue';


export default {
    name: 'DNPMECLDetail',
    components: { Etape1 ,Etape2, Etape3 ,Loading },
    computed: {

loggedInUser() {
  return this.$store.getters['user/loggedInUser'];
},
},
    data() {
        return {
            loading:true,
            data: '',
            item:'',
           items:'',
           selectedStep: 1,
          
        };
    },

 async   mounted() {

      await  this.fetchOneMpme()
        this.currentStep++;
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
        console.log("profil", this.loggedInUser);

    
    },

    methods: {
    
        async fetchOneMpme() {
            try {
            const response = await axios.get(`/mpme/${this.loggedInUser.id}`);
            console.log('response.Code', response);
            if (response.data.data ) {
               this.data = response.data.data

            //    this.item = JSON.parse(this.data.ListeSousSecteurActivite)
            //     this.item.forEach(items => {
            //    return this.items = items
            //  });
             this.loading = false


            } else {
             
            }

          } catch (error) {

            console.error('Erreur postlogin:', error);
          }
           
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

@media screen and (max-width: 768px) {
 
.haut{

    margin-top: 50px;
}

.user-profile-header .user-profile-img{

    width: 120px !important;
}

}

</style>