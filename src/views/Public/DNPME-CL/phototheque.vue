<template>
   <Loading v-if="loading"></Loading>
  <div>
    <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">photothèques</h1>
                  <nav aria-label="breadcrumb">
                     
                    <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="/">accueil</a></li>
                    <li class="breadcrumb-item"><a href="dnmpecl/phototheques">Dnpmecl</a></li>
                    <li class="breadcrumb-item active" aria-current="page">photothèques</li>
                    </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
    </div>

    <section id="main-container" class="main-container">
      <div class="section-header " >
        <h2 style="color: var(--color-primary);">PHOTOTHEQUES</h2>
    </div>

<div class="container">

  <div class="row">
    <div class="col-lg-9">
      <div class="d-flex justify-content-center align-items-center flex-wrap">
        
        <div class="class1" style="margin:5px;">
          <div class="card text-center " >
            <div class="container-img" @click="$router.push({ path: `/dnpme/phototheque/detail`, })" >
              <img class="img-fluid image" src="@/assets/img/actualite/2.jpg">
            
            </div>
            <div class="card-body" >
              <h5 class="card-title" @click="$router.push({ path: `/dnpme/phototheque/detail`, })">
                {{ truncateText(originalText, 150) }}

               </h5>
            </div>
          </div>

        </div>
        <div class="class1" style="margin:5px;">
          <div class="card text-center " >
            <div class="container-img">  
              <img class="img-fluid image" src="@/assets/img/actualite/2.jpg">
            </div>
            <div class="card-body" >
              <h5 class="card-title">
                
                  Descente du DGPME dans les locaux de la DDPME Pointe-Noire</h5>
            </div>
          </div>
        </div>

        <div class="class1" style="margin:5px;">
          <div class="card text-center " >
            <div class="container-img">
              <img class="img-fluid image" src="@/assets/img/actualite/2.jpg">
            </div>
            <div class="card-body" >
              <h5 class="card-title">
                  Visite des stands par les Cadres du Ministère desjjjjjjjjjjjjjjjj PMEASI à la CCIAM de Pointe-Noire pour la célébration de la Journée Internationale des MPME</h5>
            </div>
          </div>
        </div>

        <div class="class1" style="margin:5px;">
          <div class="card text-center " >
            <div class="container-img">
              <img class="img-fluid image" src="@/assets/img/actualite/2.jpg">
            </div>
            <div class="card-body" >
              <h5 class="card-title">
                  Participation des Cadres du Ministères des PMEASI à la CCIAM de Pointe-Noire pour la Journée Internationale des MPME
                </h5>
            </div>
          </div>
        </div>

        <div class="class1" style="margin:5px;">
          <div class="card text-center " >
            <div class="container-img">
              <img class="img-fluid image" src="@/assets/img/actualite/2.jpg">
            </div>
            <div class="card-body" >
              <h5 class="card-title">
                Célébration de la Journée Internationale des Micros, Petites et Moyennes Entreprises à la Chambre de Commerce de Pointe-Noire
              </h5>

            </div>
          </div>
        </div>

        <div class="class1" style="margin:5px;">
          <div class="card text-center " >
            <div class="container-img">
              <img class="img-fluid image" src="@/assets/img/actualite/2.jpg">
            </div>
            <div class="card-body">
              <h5 class="card-title">
                Mission des visites des sites agro-pastoraux par les experts et dirigeants de la BAD et les cadres des Ministères.   
              </h5>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div class="container_pagination">
<Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
</div>
    </div><!-- Content Col end -->
    <div class="col-lg-3">
      <div class="sidebar sidebar-right">
        <div class="widget">
          <h3 class="widget-title">A PROPOS DE LA DNPME-CL</h3>
          <ul class="arrow nav nav-tabs">
            <li><router-link to="/dnpme/router-linkpropos">A propos</router-link></li>
            <li><router-link to="/dnpme/mot-de-la-dn">Mot du DN</router-link></li>
            <li><router-link to="/dnpme/Reformes-textes-de-lois">Réformes et textes de lois</router-link></li>
            <li><router-link to="/dnpme/phototheque">Photothèque</router-link></li>

          </ul>
        </div>

        <!-- <div class="widget">
          <h3 class="widget-title">ORGANES D'APPUI</h3>
          <ul class="arrow nav nav-tabs">
            <li><a href="acpce.php">ACPCE</a></li>
            <li><a href="figa.php">FIGA</a></li>
            <li><a href="adpme.php">ADPME</a></li>
            <li><a href="bstpe.php">BSTPE</a></li>
            <li><a href="ana.php">ANA</a></li>
          </ul>
        </div> -->
      </div><!-- Sidebar end -->
    </div><!-- Sidebar Col end -->


  </div><!-- Main row end -->



</div><!-- Container end -->

</section>
  </div>
</template>

<script>
import Loading from '../../../components/Public/other/preloader.vue';
import Pag from '../../../components/Public/other/pag.vue';
export default {
  name: 'DNPMECLPhototheque',
  components: {
Loading , Pag

},
computed: {


// totalPages() {
// return Math.ceil(this.partenairesOptions.length / this.itemsPerPage);
// },
// paginatedItems() {
//   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//   const endIndex = startIndex + this.itemsPerPage;
//   return this.partenairesOptions.slice(startIndex, endIndex);
// },
},

  data() {
    return {
      originalText: " Visite des stands par les Cadres du Ministère desjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj PMEASI à la CCIAM de Pointe-Noire pour la célébration de la Journée Internationale des MPME  ",
        loading:false,
         data:'',
         currentPage: 1,
         itemsPerPage: 12,
    };
  },

  mounted() {
    
  },

  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.slice(0, maxLength) + "...";
      }
   
  
  }
    
  },
};
</script>

<style lang="css" scoped>
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


.section-header {
padding: 20px 0 !important;

}


hr {
    background-color: #e7e7e7;
    border: 0;
    height: 1px;
    margin: 40px 0;
}

h4 {
    font-size: 18px;
    line-height: 28px;
    text-transform: uppercase;
    letter-spacing: -.2px;
}

.card{
  width: 260px;
  height: 310px;
   box-shadow: rgb(133 133 133) 0px 2px 10px -5px;
   cursor: pointer;
}
.card-body{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card-title{
   font-size: 15px; 
   font-weight: 500;
   color: #777;
}
.card-title:hover{
 
   color: var(--color-primary);
}


.sidebar-right .widget {
    margin-left: 20px;
}

.sidebar .widget {
    margin-bottom: 40px;
}


.sidebar .widget-title {
    font-size: 16px;
    font-weight: 700;
    position: relative;
    margin: 0 0 30px;
    padding-left: 15px;
    text-transform: uppercase;
    border-left: 4px solid var(--color-secondary);
}
.sidebar ul.nav-tabs {
    border: 0;
}

.sidebar ul.nav-tabs li {
    color: #303030;
    line-height: normal;
}


.sidebar ul.nav-tabs li {
    width: 100%;
}
.sidebar ul.nav-tabs li a {
    color: #303030;
    border-radius: 0;
    padding: 15px 0;
    padding-left: 0;
    font-weight: 400;
    border-bottom: 1px solid #ddd;
    display: block;
    transition: 400ms;
}
.widget.recent-posts .widget-title {
    margin-bottom: 35px;
}
.widget.recent-posts ul li {
    border-bottom: 1px solid #dadada;
    padding-bottom: 15px;
    margin-bottom: 17px;
}
.widget ul li {
    line-height: 30px;
}
ul li a {
    color: #303030;
}
.sidebar .widget ul li a:hover {
    color: var(--color-primary) !important;
    font-weight: bold;
}

.widget.recent-posts .posts-thumb img {
    margin-right: 15px;
    /* width: 90px; */
    height: 70px;
}
.widget.recent-posts .post-info .entry-title {
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    margin: 0;
}

.widget.recent-posts .post-info .entry-title a {
    color: #303030;
    display: inline-block;
}

</style>