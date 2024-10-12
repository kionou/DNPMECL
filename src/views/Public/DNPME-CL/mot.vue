<template>
      <Loading v-if="loading" style="z-index: 1100;"></Loading>
   <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">mot de la directrice</h1>
                  <nav aria-label="breadcrumb">
                     
                    <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="/">accueil</a></li>
                    <li class="breadcrumb-item"><a href="/dnpmecl/mot-de-la-dn">Dnpmecl</a></li>
                    <li class="breadcrumb-item active" aria-current="page">mot de la dn</li>
                    </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
       </div>
    <div style="padding: 70px 0;">
        <div class="container">
  <div v-if="text" class="noresul">
           <span> {{ text }}</span>
           </div> 
<div class="row" v-else>
  <div class="col-lg-8">
      
    <p  v-html="Words.Content" class="text-justify mb-4"></p>
   

   

  </div><!-- Col end -->

  <div class="col-lg-4 mt-5 mt-lg-0">

    <div class="sidebar text-center sidebar-right">
      <img :src="Words.Photo" :alt="Words.Name" class="img-fluid" style="border:2px solid #ededed; padding:3px;"><br>
      <h4>{{ Words.Name }}</h4>
      <hr style="width:10%;border:4px;height:4px;background:#056839;margin:0 auto;">
      <p>{{ Words.titre?.Name }}</p>
    </div><!-- Sidebar end -->

  </div>
  <!-- Col end -->

</div><!-- Content row end -->

</div>
    </div>
</template>

<script>
import axios from '@/lib/axiosConfig.js'
import Loading from '@/components/Public/other/preloader.vue';
export default {
    name: 'DNPMECLMot',
    components: {
        Loading

    },

    data() {
        return {
            loading:true,
            Words:''
        };
    },

    computed: {

loggedInUser() {
    return this.$store.getters['user/loggedInUser'];
},

},

    async mounted() {
    
       await this. fetchMot()
    },

    methods: {
        async fetchMot() {
            try {
              
                const response = await axios.get('/words/detail', {
                    params: { type: "DIR"},
                       
                    },

                );
               

                if (response.data.data !== undefined) {
             
                   this.Words =  response.data.data
                     this.loading = false

                }
                else {
                    this.loading = false
                    return this.text = "Pas de données disponibles actuellement."

                }


            } catch (error) {
                
               
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

</style>