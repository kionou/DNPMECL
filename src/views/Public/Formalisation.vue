<template>
    <div>
      <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">formalisation</h1>
                  <nav aria-label="breadcrumb">
                      <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                        <li class="breadcrumb-item"><a href="/dnpmecl/formalisations">dnpmecl</a></li>
                        <li class="breadcrumb-item active" aria-current="page">formalisation</li>
                      </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
  </div>
     <section id="services" class="services sections-bg">
      <div class="" data-aos="fade-up">

        <div class="section-header container">
          <h2 class="text-uppercase">Etapes de formalisation</h2>
          <p>Formaliser votre entreprise c’est aussi lui permettre d’accéder aux opportunités
             en matière d’appel d’offre mais également lui faire bénéficier d’appui
             techniques et financiers grâce aux différents fonds prévus à cet effet. </p>

        <p class="mt-3" style="font-weight: bolder;">Sélectionner la forme d’entreprise que vous voulez créer !</p>
             
        </div>
        <div class=" class1" data-aos="fade-up" data-aos-delay="100">
          <div class="box">
            <div class="service-item  position-relative">
              
              <h3>Entreprise individuelle </h3>
              <p>
                Une entreprise individuelle est une forme simplifiée d'entreprise. Toute personne de plus de 18 ans peut
                 créer ce type d'entreprise et devient alors entrepreneur individuel. Ce type d'entreprise est adapté pour 
                 une activité commerciale, artisanale, industrielle ou libérale.
              </p>
             
            <a class="sign" href="https://www.invest.gov.gn/page/creer-votre-entreprise?onglet=entreprise-individuelle">Procedure de formalisation</a>
       
            </div>
           </div>
          

          <div class="box">
            <div class="service-item position-relative">
              
              <h3> Société à Responsabilité limitée SARL </h3>
              <p> La SARL est une forme juridique de société commerciale à responsabilité limitée 
                constituée par deux associés au minimum (ou par un seul associé lorsqu’elle prend la
                 forme d’une SARL unipersonnelle). 
                En SARL, la responsabilité des associés est limitée au montant de leurs apports.</p>
                <a class="sign" href="https://www.invest.gov.gn/page/creer-votre-entreprise?onglet=sarl">Procedure de formalisation</a>

            </div>
          </div>

          <div class="box">
            <div class="service-item position-relative">
              
              <h3>Société Anonyme SA </h3>
              <p> La SA ou société anonyme est une société de capitaux. 
                Elle rassemble des personnes qui peuvent ne pas se connaître et dont la participation
                 est fondée sur les capitaux qu'ils ont investis dans l'entreprise.
                 Elle concerne donc les projets importants.</p>
                 <a class="sign" href="https://www.invest.gov.gn/page/creer-votre-entreprise?onglet=sa">Procedure de formalisation</a>

            </div>
          </div>

          <div class="box">
            <div class="service-item position-relative">
              
              <h3> Groupement d’intérêt économique GIE  </h3>
              <p>
                Un "Groupement d'intérêt économique" est une organisation créée entre deux ou plusieurs personnes
                 physiques ou morales en vue du développement de l'activité de ses membres.
                </p>
                <a class="sign" href="https://www.invest.gov.gn/page/creer-votre-entreprise?onglet=gie">Procedure de formalisation</a>

            </div>
          </div><!-- End Service Item -->
          <div class="box">
            <div class="service-item position-relative"> 
              <h3>Succursale </h3>
              <p>Établissement qui dépend d'un siège central, tout en jouissant d'une certaine autonomie. </p>
              <a class="sign" href="https://www.invest.gov.gn/page/creer-votre-entreprise?onglet=succursale">Procedure de formalisation</a>

            </div>
           </div>
          <!-- End Service Item -->   
        </div>

      </div>
    </section>
    <!-- End Our Services Section -->
    </div>
</template>

<script>
export default {
    name: 'DNPMECLReglementation',

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

.class1{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

}
.box {
  display: flex;
  flex-direction: column;
  width: 400px;
  position: relative;
  background: #fff;
  border: 1px solid #dee2e6;
  margin: 10px 5px;
  padding: 10px;
  border-radius: 3px;
}

.box-top {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;
}

.box-image {
  width: 100%;
  height: 140px;     
  object-fit: cover;
  object-position: 50% 20%;

  /* 235px pour height */
}

.title-flex {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-left: 12px;
}

.box-title {
  border-left: 3px solid var(--purple);
  
}

</style>