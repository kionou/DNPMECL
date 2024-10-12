
<template>
    <Loading v-if="loading"></Loading>
      <div>
  
         <div class="container-fluid  d-flex justify-content-center align-items-center " data-aos="zoom-out" data-aos-delay="100" style="padding: 60px;" >
          <div class="form-container">
            <p class="title">Demande de la liste des MPME</p>
        <p class="text-center">
          Prêt à commencer votre démarche pour obtenir une demande aide ? Remplissez le formulaire ci-dessous 
          pour démarrer le processus avec nous !
        </p>
    <small>{{ error }}</small>
      <form class="form">
    
        <div class="input-group">
                <label for="structure">Nom de la Structure<span class="text-danger">*</span></label>
                <input type="text" name="structure" id="structure" placeholder="" v-model="structure">
              </div>
              <small v-if="v$.structure.$error">{{ v$.structure.$errors[0].$message }}</small>
              <div class="input-group">
                <label for="Libelle">Libelle <span class="text-danger">*</span></label>
                <input type="text" name="libelle" id="libelle" placeholder="" v-model="libelle">
              </div>
              <small v-if="v$.libelle.$error">{{ v$.libelle.$errors[0].$message }}</small>
<!-- 
              <div class="input-groupe">
                <label for="typedemande">Type de la Demande <span class="text-danger">*</span></label>
                <MazSelect v-model="typedemande" color="secondary" disabled  :options="DemandesOptions"/>
              </div>

              <small v-if="v$.typedemande.$error && !validateDemandeMatch()">{{ v$.typedemande.$errors[0].$message }}</small> -->
              <div class="input-groupe">
                <label for="Description">Description<span class="text-danger">*</span></label>
                <MazTextarea v-model="description" name="comment" id="comment" color="secondary" />
              </div>
              <small v-if="v$.description.$error">{{ v$.description.$errors[0].$message }}</small>
  
          <button class="sign" @click.prevent="submit">Soumettre</button>
      </form>
  </div>
         
      </div>
  
      <MazDialog v-model="msg">
        <p>
            Votre demande  a été enregistrée avec succès. Vous allez bientôt recevoir
                   un e-mail contenant les étapes à suivre.
        </p>
          <div class="supp" @click="close" style="background-color: blue; "> Ok</div>
      </MazDialog>
  
      </div>
  </template>
  
  <script>

  import useVuelidate from '@vuelidate/core';
  import { require, lgmin, lgmax, ValidEmail  , ValidNumeri} from '@/functions/rules';
  import axios from '@/lib/axiosConfig.js';
  import MazDialog from 'maz-ui/components/MazDialog'
  import Loading from '../../components/Public/other/preloader.vue';
  export default {
    name: 'DNPMECLDemandeAide',
      components:{
         MazDialog , Loading
      },
      computed: {
   
   loggedInUser() {
     return this.$store.getters['user/loggedInUser'];
   },
 },
  
      data() {
          return {
            loading:false,
            msg:false,
            structure:'',
            libelle:'',
            typedemande:'Demande de rendez-vous',
            description:'',
            DemandesOptions:[],
            error:'',
            v$:useVuelidate(), 
          };
      },
      validations: {
        structure: {
      require,
      lgmin: lgmin(2), 
    },
    libelle: {
      require,
      lgmin: lgmin(2),
    },
    typedemande: {
      require,
    },
    description: {
      require,
      lgmin: lgmin(2),
    },
              
      },
  
  async  mounted() {
        await this. fetchDemandesOptions()
       
      },
  
      methods: {
      
        async fetchDemandesOptions() { 
      try {
        await this.$store.dispatch('fetchTypeDemandeData');
        const options = JSON.parse(JSON.stringify(this.$store.getters['getTypeDemandesData']));

        this.DemandesOptions = options; 
      } catch (error) {
     
      }
    },

    async submit() {
       
       this.v$.$touch()
       this.error = ''
       if (this.v$.$errors.length == 0 ) {
        this.loading = true
           let DataPartenariat = {
           NomStructure: this.structure,
           Libelle: this.libelle,
           Description: this.description,
           AdresseEmail: this.loggedInUser.email,
           Telephone: this.loggedInUser.whatsapp,
           TypeDemande: this.typedemande,
           
       }
   
         try {
         const response = await axios.post('/gestion-des-demandes', DataPartenariat);
    
         if (response.data.status === 'success') {
           this.loading = false
           this.msg = true
           
         } else {
           this.loading = false
        
         }
         
       } catch (error) {
      
        }
         
         
         
}else{




}
   },

              close(){
                this.msg = false
                this.$router.push({ path: '/mon-espace', })
              
              
              }
  
      },
  };
  </script>
  
  <style lang="css" scoped>
    small{
      color: #f8001b;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
  .form-container {
    width: 550px;
    border-radius: 0.75rem;
    background-color: white;
    padding: 2rem;
    color: black;
    /* max-height: 550px; */
    box-shadow:0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
  }
  
  @media (max-width: 500px) {
  
  .container-fluid {
  padding: 20px 10px !important;
  
  
  }
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
  
  .input-group ,   .input-groupe{
    margin: 0.25rem 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  .input-group label ,  .input-groupe label{
    display: block;
    color: #000;
    margin-bottom: 4px;
  }
  
  .input-group input {
    width: 100%;
    border-radius: 0.5rem !important;
    border: 2px solid #e5e7eb;
    outline: 0;
  
    padding: 14px;
    color: rgb(3, 3, 5);
  }
  
  .input-group input:focus {
    border-color: var(--color-primary);
  }
  
  .forgot {
    display: flex;
    justify-content: flex-end;
    font-size: 0.75rem;
    line-height: 1rem;
    color: var(--color-primary);
    margin: 8px 0 14px 0;
  }
  
  .forgot a,.signup a {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
    font-size: 14px;
  }
  
  .forgot a:hover, .signup a:hover {
    text-decoration: underline var(--color-primary);
  }
  
  .sign {
    display: block;
    width: 100%;
    background-color: var(--color-secondary);
    padding: 0.75rem;
    text-align: center;
    color: black;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    margin-top: 50px;
  }
  
  .signup {
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
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
  
  </style>