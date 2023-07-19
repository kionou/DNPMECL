<!-- <template>
    <form class="flex flex-col space-y-3">
        <div>
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <textarea
                name="description"
                id="description"
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Je suis super fort en Vue..."
                v-model="props.formValues.description"
                >
                </textarea>
            </div>
        </div>
    </form>
</template>

<script setup>
    const props = defineProps(['formValues']);
</script>
<style lang="css" scoped>

.form-container {
  width: 400px;
  border-radius: 0.75rem;
  background-color: white;
  padding: 2rem;
  color: black;
  max-height: 550px;
  box-shadow:0px 2px 25px rgba(0, 0, 0, 0.1);
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

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}

.input-group input {
  width: 100%;
  border-radius: 0.375rem !important;
  border: 1px solid rgba(55, 65, 81, 1);
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

</style> -->
<template>
  <div class="container-fluid   " data-aos="zoom-out"
      data-aos-delay="100">
      <div class="form-container">
          <p class="title">Enregistrez votre PME dès maintenant</p>
          <p class="text-center">Un seul formulaire pour concrétiser votre projet entrepreneurial et enregistrer votre PME en toute simplicité.</p>
          <form class="form">
              <!-- debut infos genral -->
              <div class="content">
                  <p class="titre">INFORMATIONS SUR LES PARTENARIATS ET BESIONS</p>
                  <div class="row mb-3 mt-3 content-group" >
                      <div class="col">
                      <div class="input-groupe">
                          <label for="ExistanceActionnaire">Existance Actionnaire <span class="text-danger">*</span></label>
                          <input type="text" name="ExistanceActionnaire" id="ExistanceActionnaire" placeholder="">
                          
                      </div>
                  </div>
                  <div class="col">
                      <div class="input-groupe">
                          <label for="ExistanceConseilAdministration">Existance Conseil Administration <span class="text-danger">*</span></label>
                          <input type="text" name="ExistanceConseilAdministration" id="ExistanceConseilAdministration" placeholder="">
                      </div>
                  </div>
                  <div class="col">
                      <div class="input-groupe">
                          <label for="ExistancePartenariat">Existance Partenariat <span class="text-danger">*</span></label>
                          <input type="text" name="ExistancePartenariat" id="ExistancePartenariat" placeholder="">
                      </div>
                  </div>
                 
              </div>
              <div class="row mb-3 mt-3 content-group" >
                 
                  <div class="col">
                      <div class="input-groupe">
                          <label for="PartenariatTechnique">Partenariat Technique<span class="text-danger">*</span></label>
                          <input type="text" name="PartenariatTechnique" id="PartenariatTechnique" placeholder="">
                         
                      </div>
                  </div>
                
                  <div class="col">
                      <div class="input-groupe">
                          <label for="PartenariatFinancier">Partenariat Financier <span class="text-danger">*</span></label>
                          <input type="text" name="PartenariatFinancier" id="PartenariatFinancier" placeholder="">
                      </div>
                  </div>
                  <div class="col">
                      <div class="input-groupe">
                          <label for="PartenariatCommercial">Partenariat Commercial <span class="text-danger">*</span></label>
                          <input type="text" name="PartenariatCommercial" id="PartenariatCommercial" placeholder="">
                      </div>
                  </div>
              </div>
              <div class="row mb-3 mt-3 content-group" >
                  <div class="col">
                      <div class="input-groupe">
                          <label for="PartenariatAutre">Partenariat Autre <span class="text-danger">*</span></label>
                          <input type="text" name="PartenariatAutre" id="PartenariatAutre" placeholder="">
                      </div>
                  </div>
                  <div class="col">
                      <div class="input-groupe">
                          <label for="AutrePartenariat">Autre Partenariat <span class="text-danger">*</span></label>
                          <input type="text" name="AutrePartenariat" id="AutrePartenariat" placeholder="">
                      </div>
                  </div>
                  <div class="col">
                      <div class="input-groupe">
                          <label for="BesoinPartenaire">Besoin Partenaire <span class="text-danger">*</span></label>
                          <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                              <option disabled selected >--- CHOIX ---</option>
                              <option value="conakry">NON</option>
                              <option value="mali">OUI</option>
                          </select>
                      </div>
                  </div>
               
              </div>
              <div class="row mb-3 mt-3 content-group" >
                   
                  <div class="col">
                      <div class="input-groupe">
                          <label for="BesoinPartenaireTechnique">Besoin Partenaire Technique<span class="text-danger">*</span></label>
                          <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                              <option disabled selected >--- CHOIX ---</option>
                              <option value="conakry">NON</option>
                              <option value="mali">OUI</option>
                          </select>
                          
                      </div>
                  </div>
                  
                  <div class="col">
                      <div class="input-groupe">
                          <label for="BesoinPartenaireFinancier">Besoin Partenaire Financier <span class="text-danger">*</span></label>
                          <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                              <option disabled selected >--- CHOIX ---</option>
                              <option value="conakry">NON</option>
                              <option value="mali">OUI</option>
                          </select>
                      </div>
                  </div>
                  
                  <div class="col">
                      <div class="input-groupe">
                          <label for="BesoinPartenaireCommercial">Besoin Partenaire Commercial <span class="text-danger">*</span></label>
                          <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                              <option disabled selected >--- CHOIX ---</option>
                              <option value="conakry">NON</option>
                              <option value="mali">OUI</option>
                          </select>
                      </div>
                  </div>
          
                
              </div>
              <div class="row mb-3 mt-3 content-group" >
                  <div class="col">
                      <div class="input-groupe">
                          <label for="BesoinPartenaireAutre">Besoin Partenaire Autre <span class="text-danger">*</span></label>
                          <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                              <option disabled selected >--- CHOIX ---</option>
                              <option value="conakry">NON</option>
                              <option value="mali">OUI</option>
                          </select>
                      </div>
                  </div>
                  <div class="col">
                      <div class="input-groupe">
                          <label for="AutreBesoinPartenaire">Autre Besoin Partenaire <span class="text-danger">*</span></label>
                          <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                              <option disabled selected >--- CHOIX ---</option>
                              <option value="conakry">NON</option>
                              <option value="mali">OUI</option>
                          </select>
                      </div>
                  </div>
                 
               
              </div>
              
             
              </div>
              <!-- fin infos genral -->

              <!-- debut infos entreprise -->

              <div class="content">
                  <p class="titre">INFORMATIONS SUR LE REPONDANT</p>
                  <div class="row mb-3 mt-3 content-group" >
                      <div class="col">
                      <div class="input-groupe">
                          <label for="TitreRepondant">Titre Repondant <span class="text-danger">*</span></label>
                          <input type="text" name="TitreRepondant" id="TitreRepondant" placeholder="">
                      </div>
                  </div>
                      <div class="col">
                      <div class="input-groupe">
                          <label for="NomRepondant">Nom Repondant <span class="text-danger">*</span></label>
                          <input type="text" name="NomRepondant" id="NomRepondant" placeholder="">
                      </div>
                  </div>
                  <div class="col">
                      <div class="input-groupe">
                          <label for="FonctionRepondant">Fonction Repondant <span class="text-danger">*</span></label>
                          <input type="text" name="FonctionRepondant" id="FonctionRepondant" placeholder="">
                         
                      </div>
                  </div>
                
              </div>
              <div class="row mb-3 mt-3 content-group" >
                  <div class="col">
                      <div class="input-groupe">
                          <label for="AdresseRepondant">Adresse Repondant <span class="text-danger">*</span></label>
                          <input type="text" name="AdresseRepondant" id="AdresseRepondant" placeholder="">
                      </div>
                  </div>
                  <div class="col">
                      <div class="input-groupe">
                          <label for="VilleRepondant">Ville Repondant <span class="text-danger">*</span></label>
                          <input type="text" name="VilleRepondant" id="VilleRepondant" placeholder="">
                      </div>
                  </div>
                  <div class="col">
                      <div class="input-groupe">
                          <label for="TelephoneWhatsAppRepondant">Telephone WhatsApp Repondant <span class="text-danger">*</span></label>
                          <input type="text" name="TelephoneWhatsAppRepondant" id="TelephoneWhatsAppRepondant" placeholder="">
                      </div>
                  </div>
               
              </div>
              <div class="row mb-3 mt-3 content-group" >
                   
                  <div class="col">
                      <div class="input-groupe">
                          <label for="Contacter">Contacter <span class="text-danger">*</span></label>
                          <input type="text" name="Contacter" id="Contacter" placeholder="">
                          
                      </div>
                  </div>
              </div>
             
              </div>
              <!-- fin infos entreprise -->

                <!-- debut infos activite -->
                <div class="content">
                  <p class="titre">INFORMATIONS GEOGRAPHIQUES</p>
                  <div class="row mb-3 mt-3 content-group" >
                  <div class="col">
                      <div class="input-groupe">
                          <label for="LienGoogleMapMpme">Lien Google Map Mpme <span class="text-danger">*</span></label>
                          <input type="text" name="LienGoogleMapMpme" id="LienGoogleMapMpme" placeholder="">

                      </div>
                  </div>
                
                  <div class="col">
                      <div class="input-groupe">
                          <label for="LatitudeMpme">Latitude Mpme<span class="text-danger">*</span></label>
                          <input type="text" name="LatitudeMpme" id="LatitudeMpme" placeholder="">
                         
                      </div>
                  </div>
                  <div class="col">
                      <div class="input-groupe">
                          <label for="LongitudeMpme">Longitude Mpme<span class="text-danger">*</span></label>
                          <input type="text" name="LongitudeMpme" id="LongitudeMpme" placeholder="">
                         
                      </div>
                  </div>
               
            
                 </div>
                 <div class="row mb-3 mt-3 content-group" >
                  <div class="col">
                      <div class="input-groupe">
                          <label for="AltitudeMpme">Altitude Mpme <span class="text-danger">*</span></label>
                          <input type="text" name="AltitudeMpme" id="AltitudeMpme" placeholder="">

                      </div>
                  </div>
                
                  <div class="col">
                      <div class="input-groupe">
                          <label for="PrecisionGPSMpme">Precision GPS Mpme<span class="text-danger">*</span></label>
                          <input type="text" name="PrecisionGPSMpme" id="PrecisionGPSMpme" placeholder="">
                         
                      </div>
                  </div>
                  <div class="col">
                      <div class="input-groupe">
                          <label for="OrigineDonnees">Origine Donnees<span class="text-danger">*</span></label>
                          <input type="text" name="OrigineDonnees" id="OrigineDonnees" placeholder="">
                         
                      </div>
                  </div>
               
            
                 </div>
                
             
              </div>
              <!-- fin infos activite -->
          </form>
      </div>

  </div>

 
</template>

<script setup >
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
const picked = ref(new Date())

const props = defineProps(['formValues']);


</script>

<style lang="css" scoped>
.form-container {
  /* width: 700px; */
  max-width: 1140px;
  margin: 0 auto;
  /* border-radius: 0.75rem; */
  background-color: white;
  padding: 1rem;
  color: black;
  /* max-height: 550px; */
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);
  /* border: 1px solid red; */
}
.form .content{

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

.input-groupe label  {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}
.titre {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
  font-size: 12px;
}

.input-groupe input , .form-select  , textarea{
  width: 100%;
  border-radius: 0.375rem !important;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  padding: 14px;
  color: rgb(3, 3, 5);
}

.input-groupe input:focus , .input-groupe textarea:focus{
  border-color: var(--color-primary);
}
.form-select:focus {
  border-color: var(--color-primary);
  outline: 0;
  box-shadow: 0 0 0 0 rgba(101,113,255,.25);
}






.signup a:hover {
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

@media screen and (max-width: 768px) {

  .form-container {
 
      width: 700px;
max-width: 100%;
}
.content-group{
display: flex;
flex-direction: column;



}


}
</style>