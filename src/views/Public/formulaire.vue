<template>
    <!-- <div>
            <Form /> 
        </div> -->
    <div class="row gy-4">
    
        <div class="col-lg-12 col-12 ">
            <div v-if="ErrorEntreprise" class="noresul my-4">
                <span>
                    Nous vous informons que votre entreprise ne figure pas dans notre base de données. Afin de régulariser
                    cette situation et obtenir de plus amples informations, nous vous invitons à vous rendre à la direction.
                    Nos équipes se tiennent à votre disposition pour vous accompagner dans les démarches nécessaires.
                </span>
            </div>
            <div class="nav-align-top " v-else>
                <ul class="nav nav-pills class1 " role="tablist">
                    <li class="nav-item">
                        <div class="btns active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-home1"
                            aria-controls="navs-pills-top-home1" aria-selected="true">
                            Formulaire
                        </div>
                    </li>
    
                    <li class="nav-item">
                        <div class="btns" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-profile1"
                            aria-controls="navs-pills-top-profile1" aria-selected="false">
                            Classification
                        </div>
                    </li>
    
                    <li class="nav-item">
                        <div class="btns" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-profile11"
                            aria-controls="navs-pills-top-profile11" aria-selected="false">
                            Appuis à la valorisation du contenu local
                        </div>
                    </li>
                </ul>
                <div class="tab-pane fade show active  contenu" id="navs-pills-top-home1" role="tabpanel">
                    <Form />
    
                </div>
                <div class="tab-pane fade" id="navs-pills-top-profile1" role="tabpanel">
                    <Classification />
    
                </div>
    
                <div class="tab-pane fade" id="navs-pills-top-profile11" role="tabpanel">
                    <Valorisation />
    
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
import Classification from '../../components/Public/classification.vue';
import Form from '../../components/Public/formulaire.vue';
import Valorisation from '@/components/Public/valorisation.vue'
import axios from "@/lib/axiosConfig.js";


export default {
  name: 'DNPMECLFormulaire',
  components: { Form, Classification, Valorisation },
  computed: {
    loggedInUser() {
      return this.$store.getters["user/loggedInUser"];
    },
  },
  data() {
    return {
      ErrorEntreprise: false

    };
  },

  async mounted() {

    const selectHeader = document.querySelector('.class1');
    await this.fetchgetOneMpme()


    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop;
      let nextElement = selectHeader.nextElementSibling;


      const headerFixed = () => {
        if ((headerOffset - window.scrollY) <= 0) {
          selectHeader.classList.add('sticked');
          if (nextElement) nextElement.classList.add('sticked-header-offset');
        } else {
          selectHeader.classList.remove('sticked');
          if (nextElement) nextElement.classList.remove('sticked-header-offset');
        }
      }
      window.addEventListener('load', headerFixed);
      document.addEventListener('scroll', headerFixed);
    }

  },

  methods: {

    async fetchgetOneMpme() {
      try {
        const userId = this.loggedInUser.id;

        const response = await axios.get(`/mpme/${userId}`);
        if (response.data.data === undefined) {

          this.ErrorEntreprise = true

        }


      } catch (error) {
       


        if (error.response.status === 500) {
          this.$router.push("/connexion-mpme");  //a revoir
        }
      }
    },


  },
};
</script>

<style lang="css" scoped>
.fade:not(.show) {
    display: none;
    opacity: 0;
}

.class1 {
    background-color: #fafafa;
    height: 50px;

}

.btns {

    padding: 0 33px;
    font-weight: 500;
    color: #000;
    border: none;
    cursor: pointer;
    outline: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.btns.active {
    background: var(--color-secondary);


}

@media (max-width: 768px) {
    .sticked-header-offset {
        margin-top: 0 !important;


    }

    .class1 {

        margin-top: 70px;
    }
}
</style>