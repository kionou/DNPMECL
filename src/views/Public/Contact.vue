<template>
    <div>
        <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">Contacts</h1>
                  <nav aria-label="breadcrumb">
                      <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Contacts</li>
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

        <div class="section-header pt-5">
      <h2>RETROUVEZ-NOUS</h2>
    </div>
      <!--/ Title row end -->

      <div class="class">
        <div class="">
          <div class="ts-service-box-bg text-center h-100">
            <span class="ts-service-icon icon-round">
              <i class="bi bi-geo-alt"></i>
            </span>
            <div class="ts-service-box-content">
              <h4>Adresse</h4>
              <p>En face de la Banque Sino-Congolaise pour l'Afrique (BSCA), rue Docteur Janot, Centre-ville </p>
            </div>
          </div>
        </div><!-- Col 1 end -->

        <div class="">
          <div class="ts-service-box-bg text-center h-100">
            <span class="ts-service-icon icon-round">
                <i class="bi bi-envelope"></i>
            </span>
            <div class="ts-service-box-content">
              <h4>Email</h4>
              <p>secretariat-dg@dgpme.com</p>
            </div>
          </div>
        </div><!-- Col 2 end -->

        <div class="">
          <div class="ts-service-box-bg text-center h-100">
            <span class="ts-service-icon icon-round">
                <i class="bi bi-telephone"></i>
            </span>
            <div class="ts-service-box-content">
              <h4>Téléphone</h4>
              <p>(+242) 22 605 79 79 <br> BP : 13387</p>
            </div>
          </div>
        </div><!-- Col 3 end -->

        <!-- <div class="col-md-3">
          <div class="ts-service-box-bg text-center h-100">
            <span class="ts-service-icon icon-round">
                <i class="bi bi-arrow-down-circle"></i>
            </span>
            <div class="ts-service-box-content">
              <h4><a href="?p=documents">Téléchargez nos documents</a></h4>
              <p>&nbsp;</p>
            </div>
          </div>
        </div> -->
        <!-- Col 4 end -->

      </div><!-- 1st row end -->

      <div class="gap-60"></div>

      <div class="google-map">
        <!-- <div id="map" class="map" data-latitude="-4.277474412916962" data-longitude="15.277883914738364" data-marker="Publics/images/marker.png" data-marker-name="DGPME"></div> -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d497.33889365146695!2d15.276104294150748!3d-4.276255100126738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scd!4v1609515655837!5m2!1sfr!2scd" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>

      <div class="gap-40" id="contact"></div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-container">
        <p class="title">ECRIRE À LA DGPME</p>
       
        <small class="text-center">{{error}}</small>
        <form class="form">
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="structure">Nom <span class="text-danger">*</span></label>
                <input type="text" name="nom" id="nom" placeholder="" v-model="nom">
              </div>


            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="email">Adresse Email<span class="text-danger">*</span></label>
                <input type="email" name="email" id="email" placeholder="" v-model="email">
              </div>

            </div>
            
          </div>
          <div class="row mb-3 mt-3 content-group">
            
            <div class="col">
              <div class="input-groupe">
                <label for="Libelle">Object <span class="text-danger">*</span></label>
                <input type="text" name="object" id="object" placeholder="" v-model="object">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="Libelle">joindre une pièce <span class="text-danger">*</span></label>
                <input type="text" name="piece" id="piece" placeholder="" v-model="piece">
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="Description">Message<span class="text-danger">*</span></label>
                <MazTextarea v-model="description" name="comment" id="comment" color="secondary" />
              </div>

            </div>
          
          </div>
        

          <div class="btn">
            <button class="sign" @click.prevent="submit">Envoyer le message</button>
           
          </div>


        </form>
      </div>
        </div>




        <div class="col-md-6" style="padding: 25px 15px;">
          <h3 class="column-title">Vos doléances</h3>

          <p>N'hésitez pas à prendre contact avec les différents organes d'appui pour tous vos besoins en entreprise. Cliquez sur les liens ci-dessous afin d'écrire directement à l'entité concernée en fonction de votre besoin.</p>
            
          <ul class="unstyled-list">
            <li>J'ai besoin d'un financement - <a href="mailto:figapmea@gmail.com"><strong>écrire au FIGA</strong></a></li>
            <li>J'ai besoin d'aide pour développer mon entreprise - <a href="#"><strong>écrire à l'ADPME</strong></a></li>
            <li>Je suis artisan et j'ai besoin d'accompagnement - <a href="#"><strong>écrire à l'ANA</strong></a></li>
            <li>Je veux créer mon entreprise, comment m'y prendre ? - <a href="#"><strong>écrire à l'ACPCE</strong></a></li>
            <li>Je désire trouver des entreprises partenaires. - <a href="tel:242055560401"><strong>écrire à la BSTPE</strong></a></li>
          </ul>


        </div>

      </div><!-- Content row -->
    </div><!-- Conatiner end -->
  </section>
    </div>
</template>

<script>
export default {
    name: 'DNPMECLContact',

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
    min-height: 250px;
    color: #fff;
    /* background-position: 50% 50%;
    background-size: 110%; */
    background: bottom center url('@/assets/img/img1.webp');
    filter: brightness(70%) !important;
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
}
.class{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-around;
}
.ts-service-box-bg {
    border: 2px solid #ededed;
    background-color: #eee;
    color: #101010;
    padding: 10px;
    width: 280px;
    margin: 5px;
    height: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 6px;
}
.ts-service-icon.icon-round i {
    font-size: 30px;
    color: #fff;
    background: #056839;
    text-align: center;
    /* border-radius: 100%; */
    width: 60px;
    height: 60px;
    line-height: 60px;
    margin-bottom: 20px;
    position: relative;
    float: none;
    padding: 10px;
}
.ts-service-box-bg h4, .ts-service-box-bg h3 {
    color: #101010;
    font-size: 18px;
    line-height: 28px;
    text-transform: uppercase;
    letter-spacing: -.2px;
}

.gap-60 {
    clear: both;
    height: 60px;
}

.gap-40 {
    clear: both;
    height: 40px;
}
.column-title {
    margin: 0 0 40px;
}

.column-title {
    margin: 0 0 40px;
}
h3 {
    font-size: 24px;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: -.5px;
}

.supp {
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    border: none;
    border-radius: 45px;
    z-index: 3;
    cursor: pointer;
    outline: none;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
}

small {
  color: #f8001b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.general {

  padding: 20px 60px 60px;
}

.form-container {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  border-radius: 0.375rem;
  background-color: white;
  padding: 2rem;
  color: black;
  /* max-height: 550px; */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
  /* border: 1px solid red; */

}

.form .content {

  border: 1px solid var(--color-secondary);
  margin: 10px 0;
  padding: 10px;
  border-radius: 6px;
}

.title {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.form {
  margin-top: 1.5rem;
}

.input-groupe {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-groupe label {
  display: block;
  color: #000;
  margin-bottom: 4px;
  margin-left: 7px;
}

.titre {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
  font-size: 12px;
}

.input-groupe input,
.form-select,
textarea {
  width: 100%;
  border-radius: 0.5rem !important;
  border: 2px solid #e5e7eb;
  outline: 0;
  padding: 14px;
  color: rgb(3, 3, 5);
}

.input-groupe input:focus,
.input-groupe textarea:focus {
  border-color: var(--color-primary);
}
.btn {
  display: flex;
  flex-direction: column;
  align-items: center;

}
.sign {
  display: block;
  width: 300px;
  background-color: var(--color-secondary);
  padding: 0.75rem;
  text-align: center;
  color: black;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  margin-top: 30px;
}

.no-scroll {
  overflow: hidden;

}
.scroll{
  overflow: auto;
}

@media screen and (max-width: 768px) {

  .form-container {
    width: 700px;
    max-width: 100%;
  }

  .content-group {
    display: flex;
    flex-direction: column;
  }

}

@media screen and (max-width: 550px) {
  .general {

    padding: 15px 10px;
  }

  .sign {

    width: 200px;

  }

}

.sign:hover {

  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
  background-color: white;

}


</style>