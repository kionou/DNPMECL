<template>
  <Loading v-if="loading"></Loading>
  <div>
    <div id="banner-area" class="banner-area">
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
            </div>
            <!-- Col end -->
          </div>
          <!-- Row end -->
        </div>
        <!-- Container end -->
      </div>
      <!-- Banner text end -->
    </div>
    <section id="main-container" class="main-container">
      <div class="container">
        <div class="section-header pt-5">
          <h2>RETROUVEZ-NOUS</h2>
        </div>
        <!--/ Title row end -->

        <div class="class">
          <div class="">
            <div class="ts-service-box-bg text-center">
              <span class="ts-service-icon icon-round">
                <i class="bi bi-geo-alt"></i>
              </span>
              <div class="ts-service-box-content">
                <h4>Adresse</h4>
                <p>Petit Simbaya Près de l'Hôpital Flamboyant,Conakry, Guinée</p>
              </div>
            </div>
          </div>
          <!-- Col 1 end -->

          <div class="">
            <div class="ts-service-box-bg text-center">
              <span class="ts-service-icon icon-round">
                <i class="bi bi-envelope"></i>
              </span>
              <div class="ts-service-box-content">
                <h4>Email</h4>
                <p>infodnpmecl@gmail.com</p>
                <p>dnpmecl@mcipme.gov.gn</p>
              </div>
            </div>
          </div>
          <!-- Col 2 end -->

          <div class="">
            <div class="ts-service-box-bg text-center">
              <span class="ts-service-icon icon-round">
                <i class="bi bi-telephone"></i>
              </span>
              <div class="ts-service-box-content">
                <h4>Téléphone</h4>
                <p>
                  (+224) 622 33 63 43 <br />
                  BP : 13387
                </p>
              </div>
            </div>
          </div>
          <!-- Col 3 end -->

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
        </div>
        <!-- 1st row end -->

        <div class="gap-60"></div>

        <div class="google-map">
          <!-- <div id="map" class="map" data-latitude="-4.277474412916962" data-longitude="15.277883914738364" data-marker="Publics/images/marker.png" data-marker-name="DGPME"></div> -->

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.4238443767539!2d-13.618187735697543!3d9.62147577943573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd505b67dee35%3A0x85079bf78f0736b6!2sDIRECTION%20NATIONALE%20DES%20PETITES%20ET%20MOYENNES%20ENTREPRISES!5e0!3m2!1sfr!2sci!4v1696330465785!5m2!1sfr!2sci"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="gap-40" id="contact"></div>

        <div class="class1">
          <div class="col-md-6">
            <div class="form-container">
              <p class="title">ECRIRE À LA DNPME-CL</p>

              <small class="text-center">{{ error }}</small>
              <form class="form">
                <div class="row mb-3 mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="structure"
                        >Nom <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        name="nom"
                        id="nom"
                        placeholder=""
                        v-model="nom"
                      />
                    </div>
                    <small v-if="v$.nom.$error">{{ v$.nom.$errors[0].$message }}</small>
                  </div>
                  <div class="col">
                    <div class="input-groupe">
                      <label for="email"
                        >Adresse Email<span class="text-danger">*</span></label
                      >
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder=""
                        v-model="email"
                      />
                    </div>
                    <small v-if="v$.email.$error">{{
                      v$.email.$errors[0].$message
                    }}</small>
                  </div>
                </div>
                <div class="row mb-3 mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="Libelle"
                        >Object <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        name="object"
                        id="object"
                        placeholder=""
                        v-model="object"
                      />
                    </div>
                    <small v-if="v$.object.$error">{{
                      v$.object.$errors[0].$message
                    }}</small>
                  </div>
                  <div class="col" style="display: flex;
    flex-direction: column;
    justify-content: flex-end;">
                    <!-- <div class="input-groupe"> -->
                      <!-- <label for="Libelle"
                        >joindre une pièce <span class="text-danger">*</span></label
                      >
                      <input
                        type="file"
                        name="file"
                        id="ficher"
                        placeholder=""
                        ref="fileInput"
                        accept="image/*"
                        @change="handleFileChange"
                      /> -->
                      <input type="file" name="file" id="file" class="inputfile"  ref="fileInput"
                        accept="image/*"
                        @change="handleFileChange" />
                      <label for="file">
                        <i class="bi bi-cloud-arrow-down"></i>
                      Joindre une pièce
                      </label>
                  
                    <!-- </div> -->
                    <!-- <small v-if="v$.selectedFile.$error">{{ v$.selectedFile.$errors[0].$message }}</small> -->
                  </div>
                </div>
                <div class="row mb-3 mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="Description"
                        >Message<span class="text-danger">*</span></label
                      >
                      <MazTextarea
                        v-model="description"
                        name="comment"
                        id="comment"
                        color="secondary"
                      />
                    </div>
                    <small v-if="v$.description.$error">{{
                      v$.description.$errors[0].$message
                    }}</small>
                  </div>
                </div>

                

                <div class="btn">
                  <button class="sign" @click.prevent="submit">Envoyer le message</button>
                </div>
              </form>
            </div>
          </div>

          <div class="col-md-6" style="padding: 25px 15px">
            <p class="title">Vos doléances</p>

            <p>
              N'hésitez pas à prendre contact avec les différents organes d'appui pour
              tous vos besoins en entreprise. Cliquez sur les liens ci-dessous afin
              d'écrire directement à l'entité concernée en fonction de votre besoin.
            </p>

            <ul class="unstyled-list">
              <li>
                J'ai besoin d'un financement -
                <a href="mailto:figapmea@gmail.com"><strong>écrire au FIGA</strong></a>
              </li>
              <li>
                J'ai besoin d'aide pour développer mon entreprise -
                <a href="#"><strong>écrire à l'ADPME</strong></a>
              </li>
              <li>
                Je suis artisan et j'ai besoin d'accompagnement -
                <a href="#"><strong>écrire à l'ANA</strong></a>
              </li>
              <li>
                Je veux créer mon entreprise, comment m'y prendre ? -
                <a href="#"><strong>écrire à l'ACPCE</strong></a>
              </li>
              <li>
                Je désire trouver des entreprises partenaires. -
                <a href="tel:242055560401"><strong>écrire à la BSTPE</strong></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Content row -->
      </div>
      <!-- Conatiner end -->
    </section>
  </div>
  <MazDialog v-model="msgsuccess" title="Demande envoyé avec success">
    <p>
      Votre demande a été enregistrée avec succès. Vous allez bientôt recevoir un e-mail
      contenant les étapes à suivre.
    </p>

    <template #footer="{ close }">
      <div class="supp" @click="close" style="background-color: blue">Ok</div>
    </template>
  </MazDialog>
</template>

<script>
import axios from "@/lib/axiosConfig.js";
import useVuelidate from "@vuelidate/core";
import { require, lgmin, lgmax, ValidEmail, ValidNumeri } from "@/functions/rules";
import MazDialog from "maz-ui/components/MazDialog";
import Loading from "../../components/Public/other/preloader.vue";
export default {
  name: "DNPMECLContact",
  components: {
    MazDialog,
    Loading,
  },

  data() {
    return {
      nom: "",
      email: "",
      object: "",
      piece: "",
      description: "",
      msgsuccess: false,
      loading: false,
      selectedFile: null,

      error: "",
      v$: useVuelidate(),
    };
  },
  validations: {
    nom: {
      require,
      lgmin: lgmin(2),
    },
    email: {
      require,
      ValidEmail,
      lgmin: lgmin(2),
    },
    object: {
      require,
    },
    selectedFile: {
      require,
    },
    description: {
      require,
      lgmin: lgmin(2),
    },
  },

  mounted() {},

  methods: {
    handleFileChange(event) {
      console.log("File input change");
      const file = event.target.files[0];
      console.log("Selected file:", file);
      this.selectedFile = file;
    },

    async submit() {
      this.v$.$touch();
      console.log("bonjour");

      if (this.v$.$errors.length == 0) {
        console.log("bonjour");
        this.loading = true;
        const formData = new FormData();
        formData.append("nom", this.nom);
        formData.append("email", this.email);
        formData.append("sujet", this.object);
        formData.append("contenu", this.description);
        formData.append("fichier", this.selectedFile);
        console.log(formData);
        console.log(
          this.email,
          this.nom,
          this.object,
          this.description,
          this.selectedFile
        );

        try {
          const response = await axios.post("/send-message", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log("Réponse du téléversement :", response);
          if (response.data.status === "success") {
            this.msgsuccess = true;
            this.nom = "";
            this.email = "";
            this.object = "";
            this.description = "";
            this.selectedFile = null;
            this.loading = false;
          } else {
          }
        } catch (error) {
          console.error("Erreur lors du téléversement :", error);
        }
      } else {
        console.log("cest pas bon ", this.v$.$errors);
      }
    },
  },
};
</script>

<style lang="css" scoped>
small {
  color: #f8001b;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-area {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #266486;
  min-height: 250px;
  background-image: url("@/assets/img/img1.webp");
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 10%);
}
.banner-area:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.45);
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
}
.class {
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
.ts-service-icon.icon-round {
  color: #fff;
  background: var(--color-primary);
  text-align: center;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  line-height: 60px;
  margin-bottom: 20px;
  position: relative;
  float: none;
  /* padding: 10px; */
}
.ts-service-icon.icon-round i {
  font-size: 30px;
}
.ts-service-box-bg h4,
.ts-service-box-bg h3 {
  color: #101010;
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
  letter-spacing: -0.2px;
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
  letter-spacing: -0.5px;
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
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
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
.class1 {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 992px) {
  .form-container {
    width: 700px;
    max-width: 100%;
  }

  .content-group {
    display: flex;
    flex-direction: column;
  }
  .class1 {
    flex-direction: column;
  }
  .col-md-6 {
    width: 100%;
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

.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

.inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: var(--color-primary);
    /* background-color: black; */
    display: inline-block;
    width: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 0.375rem;
    border: 2px solid #e5e7eb;
}


.inputfile + label {
	cursor: pointer; /* "hand" cursor */
}
</style>
