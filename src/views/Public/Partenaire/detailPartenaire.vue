<template>
      <Loading v-if="loading"></Loading>
    <div>
 <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">{{ partenaire.CodePartenaire }}</h1>
                  <nav aria-label="breadcrumb">
                     
                    <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="/">accueil</a></li>
                    <li class="breadcrumb-item"><a href="/partenaires">partenaires</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ partenaire.CodePartenaire }}</li>
                    </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
  </div>
  <section id="main-container" class="main-container">

<div class="container">

  <div class="row">



    <div class="col-lg-8 mb-5 mb-lg-0">
      <h3 class="into-sub-title" style="color: var(--color-primary);">{{ partenaire.CodePartenaire }}</h3>
      <div class="card-image">
        <div class="image">

            <!-- <img  v-if="partenaire.logo === null" src="@/assets/img/partenariat/part1.png" :alt="partenaire.CodePartenaire" class="img-fluid"> -->
          <img v-if="partenaire.logo === null" src="@/assets/img/ninba1.png" :alt="partenaire.CodePartenaire" class="img-fluid">
          <img v-else :src="partenaire.logo" :alt="partenaire.CodePartenaire" class="img-fluid">
        </div>
      </div>
     

      <hr style="margin-top: 30px; margin-bottom: 50px;">
      
      <h4>1. Définition</h4>

      <p>{{ partenaire.NomPartenaire }}.</p>

      <div class="gap-20"></div>

          <h4>2. Missions</h4>

          <p>{{ partenaire.Description }}</p>
          <p>Site : <a :href="partenaire.SiteWeb" target="blank" style="color:var(--color-primary); text-decoration:underline; cursor: pointer;">Visitez Ici</a></p>
          

          <!-- <ul class="list-unstyled">

              <li><i class="fas fa-hand-point-right text-red"></i> &nbsp;Accueillir, informer et orienter toute personne physique et morale sur les formalités administratives relatives à la création des entreprises ainsi qu’à l’extension, la modification et au transfert d’activités ; Informer et orienter sur les formalités administratives relatives à la création des entreprises ainsi qu’à l’extension, la modification et au transfert d’activités;</li>

              <li><i class="fas fa-hand-point-right text-red"></i> &nbsp;Recevoir et traiter les dossiers de déclarations concernant les formalités indiquées à l’alinéa précédent;</li>

              <li><i class="fas fa-hand-point-right text-red"></i> &nbsp;Délivrer les documents attestant la création de l’entreprise, ainsi que tous les autres documents nécessaires à l’exercice des activités commerciales conformément aux textes législatifs ou réglementaires en vigueur.</li>

          </ul> -->

          

          <!-- <div class="gap-20"></div>

          

          <h4>3. Contacts</h4>

          <p>Avenue EMILE BIAYENDA (ex foch) à côté de la Mandarine – Centre-ville Brazzaville<br>

            Tél : <strong>+(242) 06 628 72 90</strong><br>

            Mail :  <a href="mailto:infos@acpce.cg" style="color:#b30606; text-decoration:underline;">infos@acpce.cg</a><br>

            Site : <a href="http://www.acpce.cg" target="blank" style="color:#056839; text-decoration:underline;">www.acpce.cg</a></p> -->

          

    </div><!-- Content Col end -->



    <div class="col-lg-4">
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

        <div class="widget recent-posts">
          <h3 class="widget-title">Articles récents</h3>
            <ul class="list-unstyled">

                 <li class="d-flex align-items-center">
                <div class="posts-thumb" >
                  <a href="article.php?id=20"><img loading="lazy" alt="img" src="http://dgpme.com/admin/uploads/articles/1328316637.png"></a>
                </div>

                <div class="post-info">
                  <h4 class="entry-title" style="text-transform: capitalize;">
                    <a href="article.php?id=20">Cérémonie de Clôture de la 2ème Edition du Salon des Métiers de Bois.</a>
                  </h4>
                </div>
              </li>

                <li class="d-flex align-items-center">
                <div class="posts-thumb">
                  <a href="article.php?id=19"><img loading="lazy" alt="img" src="http://dgpme.com/admin/uploads/articles/1962441736.png"></a>
                </div>

                <div class="post-info">
                  <h4 class="entry-title" style="text-transform: capitalize;">
                    <a href="article.php?id=19">Prise de contact pour un partenariat d’affaires pour une chambre de commerce Brésil-Congo.</a>
                  </h4>
                </div>
              </li>

                 <li class="d-flex align-items-center">
                <div class="posts-thumb">
                  <a href="article.php?id=18"><img loading="lazy" alt="img" src="http://dgpme.com/admin/uploads/articles/292624425.png"></a>
                </div>

                <div class="post-info">
                  <h4 class="entry-title" style="text-transform: capitalize;">
                    <a href="article.php?id=18">Concours d’affaires (CPA) : les lauréats éligibles au Fonds ADPME.</a>
                  </h4>
                </div>
              </li>

                </ul>
        </div>


      </div><!-- Sidebar end -->
    </div><!-- Sidebar Col end -->



  </div><!-- Main row end -->



</div><!-- Container end -->

</section>
    </div>
</template>

<script>
import axios from '@/lib/axiosConfig.js'
import Loading from '../../../components/Public/other/preloader.vue';
export default {
    name: 'DNPMECLDetailPartenaire',
    props:['id'],
    components: {
Loading 

},

    data() {
        return {
            loading:true,
            partenaire:'',
            
        };
    },

   async mounted() {
      await  this.fetchOnePartenaire()
        console.log('iddd',this.id);
    },

    methods: {
        async fetchOnePartenaire() {
            try {
                const response = await axios.get(`/partenaires/${this.id}`)
             console.log('response.sousprefecture', response);
          if (response.data.status === 'success') {
            this.partenaire = response.data.data
            this.loading = false
            
          } else {
            this.loading = false
         
          }
          
        } catch (error) {
           console.error('Erreur post:', error);
         }
            
        },
    },
};
</script>

<style lang="css" scoped>

h1, h2, h3, h4, h5, h6 {
    color: #101010;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
}
p {
    font-family: "Open Sans", sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
    line-height: 26px;
    font-size: 14px;
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
.breadcrumb {
    padding: 0;
    background: none;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    color: #fff !important;
}

/* fin banier */
.into-sub-title {
    font-weight: 900;
    text-transform: uppercase;
    font-size: 32px;
    line-height: normal;
    margin: 10px 0;
}

hr {
    background-color: #e7e7e7;
    border: 0;
    height: 1px;
    margin: 40px 0;
}
.card-image{
    width: 100%;
    /* border: 1px solid var(--color-secondary); */
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);

}
.card-image .image{

    border: 5px solid #dee2e6;
    height: 165px;
    width: 165px;
}
.card-image .image img{
width: 100%;
height: 100%;

}
h4 {
    font-size: 18px;
    line-height: 28px;
    text-transform: uppercase;
    letter-spacing: -.2px;
}
.gap-20 {
    clear: both;
    height: 20px;
}
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
i.text-red, .text-red {
    color: #b30606;
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
.posts-thumb{
    width: 70% !important;
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