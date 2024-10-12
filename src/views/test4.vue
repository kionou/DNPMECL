<template lang="">
  <div>
    <div class="container-fluid  d-flex justify-content-center align-items-center general" data-aos="zoom-out"
      data-aos-delay="100">
      <div class="form-container">
        <p class="title">Demande de Partenariat</p>
        <p class="text-center">Prêt à explorer une collaboration ? Remplissez le formulaire ci-dessous 
          pour démarrer votre demande de partenariat avec nous !
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
                <label for="typedemande">Region <span class="text-danger">*</span></label>
                <MazSelect v-model="typedemande" color="secondary" :options="regionOptions"/>
              </div>
              <small v-if="v$.typedemande.$error">{{ v$.typedemande.$errors[0].$message }}</small>
            

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
</template>
<script>
export default {
  name: 'DNPMECLDemandePartenanriat',
  components: {
       
  }, 

  data() {
    return {
      loading:false,
      isOpen:false,
      email: '',
      phoneNumber: '',
      structure:'',
      libelle:'',
      typedemande:'',
      typepartenariat:'',
      description:'',
      error:'',
      regionOptions:[],
     v$:useVuelidate(), 
    };
    
  },
 
}
</script>
<style lang="css">
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
    /* width: 700px; */
    max-width: 100%;
    padding: 10px;
  }

  .content-group {
    display: flex;
    flex-direction: column;
  }

  .title{
   
    font-size: 22px;
    /* line-height: 2rem; */
    
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