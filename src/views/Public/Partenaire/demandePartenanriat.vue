<template>
    <div>
        <div>
    <div class="container-fluid  d-flex justify-content-center align-items-center general" data-aos="zoom-out"
      data-aos-delay="100">
      <div class="form-container">
        <p class="title">Demande de Partenariat</p>
        <p class="text-center">Prêt à explorer une collaboration ? Remplissez le formulaire ci-dessous 
          pour démarrer votre demande de partenariat avec nous !"
        </p>
        <small class="text-center">{{error}}</small>
        <form class="form">
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="email">Adresse Email<span class="text-danger">*</span></label>
                <input type="email" name="email" id="email" placeholder="" v-model="email">
              </div>
              <small v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</small>

            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="tel">Numéro Téléphonique <span class="text-danger">*</span></label>
                <MazPhoneNumberInput v-model="phoneNumber" show-code-on-list color="secondary" defaultCountryCode="GN"
                  :ignored-countries="['AC']" @update="results = $event" :success="results?.isValid" />

              </div>
              <small v-if="v$.phoneNumber.$error">{{ v$.phoneNumber.$errors[0].$message }}</small>

            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="structure">Nom de la Structure<span class="text-danger">*</span></label>
                <input type="text" name="structure" id="structure" placeholder="" v-model="structure">
              </div>
              <small v-if="v$.structure.$error">{{ v$.structure.$errors[0].$message }}</small>

            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="Libelle">Libelle <span class="text-danger">*</span></label>
                <input type="text" name="libelle" id="libelle" placeholder="" v-model="libelle">
              </div>
              <small v-if="v$.libelle.$error">{{ v$.libelle.$errors[0].$message }}</small>
             
             

            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="typedemande">Type de la Demande <span class="text-danger">*</span></label>
                <MazSelect v-model="typedemande" color="secondary" :options="DemandesOptions"/>
              </div>
              <small v-if="v$.typedemande.$error">{{ v$.typedemande.$errors[0].$message }}</small>
              <small v-if="!validateDemandeMatch()" >Le type sélectionné ne convient pas à votre demande</small>

            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="typepartenariat">Type de Partenariat <span class="text-danger">*</span></label>
                <input type="text" name="typepartenariat" id="typepartenariat" placeholder="" v-model="typepartenariat">
              </div>
              <small v-if="v$.typepartenariat.$error">{{ v$.typepartenariat.$errors[0].$message }}</small>
            </div>
          </div>

          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="Description">Description<span class="text-danger">*</span></label>
                <MazTextarea v-model="description" name="comment" id="comment" color="secondary" />
              </div>
              <small v-if="v$.description.$error">{{ v$.description.$errors[0].$message }}</small>

            </div>
          
          </div>
        

          <div class="btn">
            <button class="sign" @click.prevent="submit">Soumettre</button>
           
          </div>


        </form>
      </div>
    </div>

  </div>
    </div>
</template>

<script>
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import useVuelidate from '@vuelidate/core';     
import { require, lgmin,  ValidEmail,   } from '@/functions/rules';
import axios from '@/lib/axiosConfig.js'


export default {
    name: 'DNPMECLDemandePartenanriat',
  components: {
     MazPhoneNumberInput
  }, 

  data() {
    return {
      email: '',
      phoneNumber: '',
      structure:'',
      libelle:'',
      typedemande:'',
      typepartenariat:'',
      description:'',
      error:'',
      DemandesOptions:[],
     v$:useVuelidate(), 
    };
    
  },
 
  validations: {
    email: {
      require,  
      ValidEmail, 
    },
    phoneNumber: {
      require,
    },
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
    typepartenariat: {
      require,
      lgmin: lgmin(2),
    },
    description: {
      require,
      lgmin: lgmin(2),
    },
   
 
  },

  async mounted() {
    await this.fetchDemandesOptions()
 
  },

  methods: {
    onPhoneNumberUpdate(updatedResult) {
      this.results = updatedResult;
    },
    validateDemandeMatch() {
      
     return this.typedemande === 'Demande de partenariat' 
    },
    async fetchDemandesOptions() { 
      try {
        await this.$store.dispatch('fetchTypeDemandeData');
        const options = JSON.parse(JSON.stringify(this.$store.getters['getTypeDemandesData']));
        console.log('Options des deamde:', options);
        this.DemandesOptions = options; 
      } catch (error) {
        console.error('Erreur lors de la récupération des options des demande :', error);
      }
    },
  

    async submit() {
       
        this.v$.$touch()
        this.error = ''
        if (this.v$.$errors.length == 0 ) {
         

            let DataPartenariat = {
            NomStructure: this.structure,
            Libelle: this.libelle,
            Description: this.description,
            AdresseEmail: this.email,
            Telephone: this.phoneNumber,
            TypeDemande: this.typedemande,
            TypePartenariat: this.typepartenariat,
        }
        console.log('eeedata', DataPartenariat);
        //   try {
        //   const response = await axios.post('/register/mpmess', DataMpme);
        //   console.log('response.sousprefecture', response);
        //   if (response.data.message.email) {
        //     console.log('response',response.data.message.email);
        //     return this.error = "L'adresse e-mail existe déjà dans notre système. Veuillez vous connecter avec cette adresse."
            
        //   } else {
         
        //   }
          
        // } catch (error) {
        //   console.error('Erreur post:', error);
        // }
          
          
          
}else{
  console.log('pas bon' , this.v$.$errors );



}
    },

    
  
   

  },
  created() {
  
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

.form-select:focus {
  border-color: var(--color-primary);
  outline: 0;
  box-shadow: 0 0 0 0 rgba(101, 113, 255, .25);
}


.btn {
  display: flex;
  flex-direction: column;
  align-items: center;

}



.signup a:hover {
  text-decoration: underline var(--color-primary);
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

.signup {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
}

.signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
}



.signin span {
  color: royalblue;
}

.signin span:hover {
  text-decoration: underline royalblue;
  cursor: pointer;
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

  .signin {
    font-size: 12px;

  }

}

.sign:hover {

  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
  background-color: white;

}

</style>