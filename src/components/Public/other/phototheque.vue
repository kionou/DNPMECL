<template>
    <div>
        <section id="portfolio" class="portfolio sections-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>PHOTOPHEQUES</h2>
          <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
        </div>

        <div class="portfolio-isotope"  data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">

          

          <div class="row gy-4 portfolio-container">

            <div class="col-xl-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <a href="https://mpme-guinee.com/bd/public/MPME_IMAGES_DOCUMENTS/KOUE_1693466169.png" data-gallery="portfolio-gallery-app" class="glightbox"><img src="@/assets/img/portfolio/app-1.jpg" class="img-fluid" alt=""></a>
              </div>
            </div>
         

            <div class="col-xl-4 col-md-6 portfolio-item filter-product">
              <div class="portfolio-wrap">
                <a href="https://mpme-guinee.com/bd/public/MPME_IMAGES_DOCUMENTS/KIONOU-SARL_1692564684.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="@/assets/img/portfolio/product-1.jpg" class="img-fluid" alt=""></a>
              </div>
            </div>

            <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div class="portfolio-wrap">
                <a href="https://mpme-guinee.com/bd/public/MPME_IMAGES_DOCUMENTS/KIONOU-SARL_1692811770.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="@/assets/img/portfolio/branding-1.jpg" class="img-fluid" alt=""></a>
              </div>
            </div>
          </div>

        </div>

      </div>
  
    </section>
    <div class="container_pagination mb-5">
  <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
</div>
    </div>
</template>

<script>
import  "glightbox/dist/css/glightbox.css";
import  "glightbox/dist/js/glightbox.js";
import   GLightbox from 'glightbox';
import Pag from '../../../components/Public/other/pag.vue';
export default {
    name: 'DNPMECLPhototheque',
    components:{
        Pag,
    },
    computed:{
    totalPages() {
        return Math.ceil(this.filterOffres.length / this.itemsPerPage);
        },
        paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filterOffres.slice(startIndex, endIndex);
  },
    },

    data() {
        return {

            currentPage: 1,
            itemsPerPage: 5,
            items:[],
            
        };
    },

    mounted() {
        this.lightbox = GLightbox({ 
              selector: ".glightbox"
             });
    },

    methods: {
        
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

</style>