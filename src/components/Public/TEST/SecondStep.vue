<template>
  <div class="container-fluid   " data-aos="zoom-out" data-aos-delay="100">
    <div class="form-container">
      <p class="title">Enregistrez votre PME dès maintenant</p>
      <p class="text-center">Un seul formulaire pour concrétiser votre projet entrepreneurial et enregistrer votre PME en
        toute simplicité.</p>
      <form class="form">
        <!-- debut infos genral -->
        <div class="content">
          <p class="titre">INFORMATIONS SUR LES PRIX ET LES DIRIGEANTS</p>
          <div class="row mb-3 mt-3 content-group ">
            <div class="col">
              <div class="input-groupe">
                <label for="MpmeBourse">Mpme Bourse <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.mpmeBourse" color="secondary" :options="choix"  />
                
              </div>
            </div>
            <div class="col" v-if="props.formValues.mpmeBourse === 'oui'" >
              <div class="input-groupe">
                <label for="NomBourse">Nom Bourse <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.nomBourse" color="secondary" :options="BourseOptions" />
               
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="RecptionPrix">Réception Prix <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.receptionPrix" color="secondary" :options="choix" />

              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col" v-if="props.formValues.receptionPrix === 'oui'">
              <div class="input-groupe">
                <label for="PrincipalPrix">Principal Prix<span class="text-danger">*</span></label>
                <input type="text" name="PrincipalPrix" id="PrincipalPrix" placeholder=""
                  v-model="props.formValues.principalPrix">
              </div>
            </div>
            <div class="col" v-if="props.formValues.receptionPrix === 'oui'">
              <div class="input-groupe">
                <label for="AnneePrixPrincipal">Année Prix Principal <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.anneePrixPrincipal" color="secondary" :options="yearOptions" />

              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="TitreDirigeant">Titre Dirigeant <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.titreDirigeant" color="secondary" :options="titre" />

              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="NomDirigeant">Nom Dirigeant <span class="text-danger">*</span></label>
                <input type="text" name="NomDirigeant" id="NomDirigeant" placeholder=""
                  v-model="props.formValues.nomDirigeant">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="PrenomDirigeant">Prénom Dirigeant <span class="text-danger">*</span></label>
                <input type="text" name="PrenomDirigeant" id="PrenomDirigeant" placeholder=""
                  v-model="props.formValues.prenomDirigeant">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="SexeDirigeant">Sexe Dirigeant <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.sexeDirigeant" color="secondary" :options="sexes" />

              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="PaysDirigeant">Pays Dirigeant <span class="text-danger">*</span></label>
                <MazSelect  v-model="props.formValues.paysDirigeant" :options="sortedCountryOptions"
                  v-slot="{ option }" search color="secondary">
                  <div class="flex items-center"
                    style="padding-top: 0.5rem; padding-bottom: 0.5rem; width: 100%; gap: 1rem">
                    <MazAvatar size="0.8rem" :src="option.flag" />
                    <strong>
                      {{ option.label }}
                    </strong>
                  </div>
                </MazSelect>
                
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="AnneeNaissanceDirigeant">Année Naissance Dirigeant <span class="text-danger">*</span></label>
                <input type="text" name="AnneeNaissanceDirigeant" id="AnneeNaissanceDirigeant" placeholder=""
                  v-model="props.formValues.anneeNaissanceDirigeant">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="DirigeantProprietaire">Dirigeant Proprietaire <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.dirigeantProprietaire" color="secondary" :options="choix" />
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="TitreProprietaire">Titre Proprietaire <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.titreProprietaire" color="secondary" :options="titre" />

              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="NomProprietaire">Nom Proprietaire <span class="text-danger">*</span></label>
                <input type="text" name="NomProprietaire" id="NomProprietaire" placeholder=""
                  v-model="props.formValues.nomProprietaire">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="PrenomProprietaire">Prénom Proprietaire <span class="text-danger">*</span></label>
                <input type="text" name="PrenomProprietaire" id="PrenomProprietaire" placeholder=""
                  v-model="props.formValues.prenomProprietaire">
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="SexeProprietaire">Sexe Proprietaire <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.sexeProprietaire" color="secondary" :options="sexes" />

              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="PaysProprietaire">Pays Proprietaire <span class="text-danger">*</span></label>
                <MazSelect  v-model="props.formValues.paysProprietaire" :options="sortedCountryOptions"
                  v-slot="{ option }" search color="secondary">
                  <div class="flex items-center"
                    style="padding-top: 0.5rem; padding-bottom: 0.5rem; width: 100%; gap: 1rem">
                    <MazAvatar size="0.8rem" :src="option.flag" />
                    <strong>
                      {{ option.label }}
                    </strong>
                  </div>
                </MazSelect>
             

              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="AnneeNaissanceProprietaire">Année Naissance Proprietaire <span
                    class="text-danger">*</span></label>
                <input type="text" name="AnneeNaissanceProprietaire" id="AnneeNaissanceProprietaire" placeholder=""
                  v-model="props.formValues.anneeNaissanceProprietaire">
              </div>
            </div>
          </div>

        </div>
        <!-- fin infos genral -->

        <!-- debut infos entreprise -->

        <div class="content">
          <p class="titre">INFORMATIONS SUR LE RESEAU ET FINANCEMENT</p>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="AppartenanceReseauProfessionnel">Appartenance Reseau Professionnel <span
                    class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.appartenanceReseauProfessionnel" color="secondary"
                  :options="choix" />


              </div>
            </div>
            <div class="col"  v-if="props.formValues.appartenanceReseauProfessionnel === 'oui'">
              <div class="input-groupe">
                <label for="NomReseauProfessionnel">Nom Reseau Professionnel <span class="text-danger">*</span></label>
                <input type="text" name="NomReseauProfessionnel" id="NomReseauProfessionnel" placeholder=""
                  v-model="props.formValues.nomReseauProfessionnel">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="FinancementFondPropre">Financement Fond Propre <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.financementFondPropre" color="secondary" :options="choix" />


              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="FinancementCreditBancaire">Financement Credit Bancaire <span
                    class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.financementCreditBancaire" color="secondary" :options="choix" />


              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="FinancementPartenaireExterieurs">Financement Partenaire Exterieurs <span
                    class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.financementPartenaireExterieurs" color="secondary"
                  :options="choix" />
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="FinancementAutre">Financement Autre <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.financementAutre" color="secondary" :options="choix" />

              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="AutreFinancement">Autre Financement <span class="text-danger">*</span></label>
                <input type="text" name="AutreFinancement" id="AutreFinancement" placeholder=""
                  v-model="props.formValues.autreFinancement">
              </div>
            </div>
            <div class="col" v-if="props.formValues.appartenanceReseauProfessionnel === 'oui'">
              <div class="input-groupe">
                <label for="DescriptionReseau">Description du Reseau <span class="text-danger">*</span></label>
                <textarea name="DescriptionReseau" id="DescriptionReseau" cols="80" rows="3"
                  v-model="props.formValues.descriptionReseau"></textarea>
              </div>
            </div>
          </div>

        </div>
        <!-- fin infos entreprise -->

        <!-- debut infos activite -->
        <div class="content">
          <p class="titre">INFORMATIONS SUR LES DIFFICULTES ET SUGGESTIONS</p>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="DifficultesRencontrees">Difficultes Rencontrees <span class="text-danger">*</span></label>
                <MazTextarea v-model="props.formValues.difficultesRencontrees" name="comment" id="comment" color="secondary"
                 />

             
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="SuggestionsProposees">Suggestions Proposees<span class="text-danger">*</span></label>
                <MazTextarea v-model="props.formValues.suggestionsProposees" name="comment" id="comment" color="secondary"
                 />
               
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

import { ref , onMounted } from 'vue';
import { useStore } from 'vuex';
const selectedCountry = ref()
const sortedCountryOptions= ref([]) 
const years = ref([]);
const BourseOptions = ref([])
const currentYear = new Date().getFullYear();
for (let year = 1960; year <= currentYear; year++) {
  years.value.push(year);
}

const yearOptions = years.value.map((year) => ({ label: String(year), value: String(year) }));
const props = defineProps(['formValues']);
const sexes = [
  { label: 'Masculin', value: 'masculin' },
  { label: 'Féminin', value: 'feminin' },

]
const choix = [
  { label: 'Oui', value: 'oui' },
  { label: 'Non', value: 'non' },

]
const titre = [
  { label: 'Monsieur', value: 'M' },
  { label: 'Madame', value: 'Mme' },
  { label: 'Mademoiselle', value: 'Mlle' },

]

const fetchCountryOptions= async () => { // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
         const store = useStore();
        await store.dispatch('fetchCountries');
        const options =JSON.parse(JSON.stringify(store.getters['getCountryOptions'])) ; // Accéder aux options des pays via le getter
        console.log('Options des pays:', options);
        sortedCountryOptions.value = options; // Affecter les options à votre propriété sortedCountryOptions
      } catch (error) {
        console.error('Erreur lors de la récupération des options des pays :', error);
      }
    };
    const fetchBourseOptions = async () => {
  try {
    const store = useStore();
    await store.dispatch('fetchBourseOptions'); // Action spécifique aux bourses
    const options = JSON.parse(JSON.stringify(store.getters['getBourseOptions']));
    console.log('Options bourse:', options);
    BourseOptions.value = options;
  } catch (error) {
    console.error('Erreur lors de la récupération des options des bourses:', error);
  }
};
    onMounted(() => {
 
  fetchCountryOptions();
  fetchBourseOptions();
 

});

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
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
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

  .content-group {
    display: flex;
    flex-direction: column;



  }


}
</style>