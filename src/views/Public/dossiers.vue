<template>
    <div>
        <div class="page-header">
            <div class="container">
                <div class="page-header__inner">
                    <h1 class="display-2">Bienvenue {{ loggedInUser.prenom }} {{ loggedInUser.nom }} </h1>
                    <p>Votre espace personnel vous permet d’effectuer et de faire le suivi de votre entreprise</p>
                </div>
            </div>
        </div>

        <section id="team" class="team" >
        <div class="row gy-4">

          <div class="col-lg-12 col-12 ">
            <div class="nav-align-top ">
              <ul class="nav nav-pills " role="tablist">
                <li class="nav-item">
                  <button type="button"  class="nav-link  active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-home1" aria-controls="navs-pills-top-home1" aria-selected="true">
                   Documents
                  </button>
                </li>

                <li class="nav-item">
                  <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-profile1" aria-controls="navs-pills-top-profile1" aria-selected="false">
                    Images
                  </button>
                </li>
                
               

              </ul>
            
              

 <div class="tab-pane fade show active  contenu" id="navs-pills-top-home1" role="tabpanel" >
  <Document/>

 </div>
                <div class="tab-pane fade" id="navs-pills-top-profile1" role="tabpanel">
                  <Image/>
                       
                </div>
                <div class="tab-pane fade" id="navs-pills-top-messages1" role="tabpanel">

               

                </div>
               

              
           
          </div>
        </div>
      </div>
    </section>
    
</div>
</template>

<script>
import Document from '../../components/DOSSIERS/document.vue';
import Image from '../../components/DOSSIERS/image.vue';






export default {
    name: 'DNPMECLEspace',
    components: {
        Image , Document
    
  },
    computed: {
   
    loggedInUser() {
      return this.$store.getters['user/loggedInUser'];
    },
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

<style lang="css" scoped>
.page-header {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #266486;
    padding-bottom: 50px;
    padding-top: 100px;
    background-image: url('@/assets/img/img1.webp'); 
    box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 10%);

}

.page-header:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, .45);
}
.page-header__inner {
    position: relative;
}

.fade:not(.show) {
    display: none;
    opacity: 0;
}
.page-header h1 {
    position: relative;
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
    padding-top: 1rem;
    margin-bottom: 1rem;
    text-transform: inherit;
}
.page-header p {
    max-width: 530px;
    font-size: 1.375rem;
    font-weight: 500;
    color: #fff;
}


.btnLogin {
    font-size: 15px;
    font-weight: 500;
    color: #000;
    background-color: #F9D310;
    border: none;
    border-radius: 45px;
    position: absolute;
    z-index: 3;
    right: 24px;
    top: -71px;
    cursor: pointer;
    outline: none;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btnLogin:hover {
    background-color: #fff;
    border: 1px solid #F9D310;
    color: #F9D310;

}
@media (max-width: 991px){
    section {
    padding: 50px !important;
}
}




.container_content {
    margin: 0 auto;
    background: #fff;
  
  }
  .section-header{
    padding: 40px 0 0 0 !important;
  
  }
  
  .contenu {
  
    position: relative;
    padding: 15px 10px;
  }
  
  @media (max-width: 768px){

section {
padding: 10px !important;
}
.page-header h1 {

font-size: 2.5rem;
text-align: center;   
}

.page-header p {

text-align: justify;
}
}



</style>