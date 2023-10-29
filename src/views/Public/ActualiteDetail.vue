<template>
    <Loading v-if="loading"></Loading>
    <div>
        <div id="banner-area" class="banner-area">
            <div class="banner-text">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="banner-heading">
                                <h1 class="banner-title">actualités</h1>
                                <nav aria-label="breadcrumb">

                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a href="/">accueil</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">actualités</li>
                                    </ol>
                                </nav>
                            </div>
                        </div><!-- Col end -->
                    </div><!-- Row end -->
                </div><!-- Container end -->
            </div><!-- Banner text end -->
        </div>

        <div class="section-header " style="padding-bottom: 0 !important;">
            <h2 style="color: var(--color-primary);">ACTUALITES </h2>
        </div>

        <section id="main-container" class="main-container" style="padding:0 0 60px !important;">
            <div class="container">
                <div class="row">

                    <div class="col-lg-8 mb-5 mb-lg-0 article">


                        <h1>{{ actualite.titre }}</h1><br>
                        
                        <div class="article-p">
                            <div class="image">
                            <img :src="images[0]" class="img-fluid" alt=" actualite" >

                            </div>
                        </div>

                        <!-- <div class="container swiper-container" data-aos="zoom-out">
                            <div class="swiper-wrapper align-items-center">
                                <div class="swiper-slide ee" style="width: 100% !important;" v-for="image in images"
                                    :key="image.id">
                                    <img :src="image" class="img-fluid" alt=" actualite" style="height: 512px !important;">
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div> -->
                        <p class="x11i5rnm" style="white-space: pre-line; color: black;">
                            <span  >
                                {{  convertirHtmlEnTexte(actualite.content)  }}
                            </span>
                        </p>

                    </div>
                    <!-- Content Col end -->



                    <div class="col-lg-4">

                        <div class="sidebar sidebar-right">

                            <div class="widget">
                                <h3 class="widget-title">A PROPOS DE LA DNPME-CL</h3>
                                <ul class="arrow nav nav-tabs">
                                    <li><router-link to="/dnpme/apropos">A propos</router-link></li>
                                    <li><router-link to="/dnpme/mot-de-la-dn">Mot du DN</router-link></li>
                                    <li><router-link to="/dnpme/Reformes-textes-de-lois">Réformes et textes de
                                            lois</router-link></li>
                                    <li><router-link to="/dnpme/phototheque">Photothèque</router-link></li>
                                  <li><router-link to="/dnpme/formalisation">formalisations</router-link></li>


                                </ul>
                            </div>

                            <div class="widget recent-posts">
                                <h3 class="widget-title">Autres articles</h3>
                                <ul class="list-unstyled">

                                    <li class="d-flex align-items-center" v-for="actualiteRecent in ActualitesOptions" :key="actualiteRecent.id">
                                        <div class="posts-thumb" >
                                            <a :href="`/actualites/${actualiteRecent.id}`">
                                                <img loading="lazy" alt="image-actualite" :src="updatePicture( actualiteRecent.images)">
                                            </a>
                                           
                                        </div>

                                        <div class="post-info" >
                                            <h4 class="entry-title" style="text-transform: capitalize;">
                                                <a :href="`/actualites/${actualiteRecent.id}`">
                                                {{ actualiteRecent.titre }}
                                            </a>
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
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import axios from '@/lib/axiosConfig.js'
import Loading from '../../components/Public/other/preloader.vue';
export default {
    name: 'DNPMECLActualiteDetail',
    props: ['id'],
    components: {
        Loading

    },

    data() {
        return {
            loading: true,
            actualite: '',
            images: [],
            ActualitesOptions:[], 

        };
    },

    async mounted() {
        const swiper = await new Swiper('.swiper-container', {
            speed: 400,
            loop: false,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 1
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 1
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 1
                },
                992: {
                    slidesPerView: 1,
                    spaceBetween: 1
                }
            }
        });
        await this.fecthActualitesDetail()
        this.images = this.actualite.images.split('|')
       await  this.fetchActualites()
    },

    methods: {
        updatePicture(picture){
       return picture.split('|')[0]
        // Object.keys(monObjet).map(key => monObjet[key])
      },
      convertirHtmlEnTexte(chaineHtml) {
  // Créez un élément HTML temporaire (div)
  const tempDiv = document.createElement('div');

  // Injetez le HTML dans l'élément temporaire
  tempDiv.innerHTML = chaineHtml;

  // Utilisez textContent pour extraire le texte brut
  const texteBrut = tempDiv.textContent || tempDiv.innerText;

  // Retournez le texte brut
  return texteBrut;
},
        async fecthActualitesDetail() {

            try {
                const response = await axios.get(`/details/actualites/${this.id}`);
                console.log('response.sousprefecture', response);
                if (response.data.status === 'success') {
                    this.actualite = response.data.data

                    console.log('response.sousprefecture', response.data.data);

                    this.loading = false


                } else {
                    this.loading = false

                }

            } catch (error) {
                console.error('Erreur post:', error);
            }



        },

        async fetchActualites() {
            try {
                await this.$store.dispatch('fetchActualites');
                const actualites = JSON.parse(JSON.stringify(this.$store.getters['getActualites']));
                this.ActualitesOptions = actualites
                console.log('Actualités récupérées :', actualites);
                   // Triez vos actualités par ordre décroissant de date
                        actualites.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

                    // Obtenez les 3 dernières actualités
                    this.ActualitesOptions = actualites.slice(0, 3);

                    console.log('Les 3 dernières actualités :', this.ActualitesOptions);

                // Continuez avec le reste de votre code pour traiter les actualités
            } catch (error) {
                console.error('Erreur lors de la récupération des actualités :', error.message);
            }
        },

    },
};
</script>

<style lang="css" scoped>

.section-header {
    padding: 30px 0;

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
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 10%);

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

.breadcrumb-item,
.breadcrumb-item a {
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



h4 {
    font-size: 18px;
    line-height: 28px;
    text-transform: uppercase;
    letter-spacing: -.2px;
}

h1 {
    font-size: 36px;
    line-height: 48px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: #101010;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
}

.article p {
    text-align: justify !important;
}
.article-p{
    padding: 10px;
    border: 1px solid var(--color-secondary);
    display: flex;
    justify-content: center;
        align-items: center;
    width: 100%;
    height: 400px;

}

.article-p .image{
/* border: 1px solid red; */
/* width: 100%; */
height: 100%;
display: flex;
    align-items: center;
    justify-content: center;
}

.article-p .image img{

width: 100%;
height: 100%;
}


.swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
}

.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}

.swiper-slide {
    width: 100% !important;

}

.list-unstyled {
    padding-left: 0;
    list-style: none;
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
    font-size: 14px;
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

.posts-thumb {
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
.x11i5rnm {
  white-space: pre-line;
  /* Autres styles CSS que vous souhaitez appliquer ici */
}

.x11i5rnm strong {
  color: black;
}

</style>