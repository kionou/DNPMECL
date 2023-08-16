<template>
  <div class="container-fluid   " data-aos="zoom-out" data-aos-delay="100">
    <div class="form-container">
      <p class="title">Enregistrez votre PME dès maintenant</p>
      <p class="text-center">Un seul formulaire pour concrétiser votre projet entrepreneurial et enregistrer votre PME en
        toute simplicité.</p>
      <form class="form">
        <!-- debut infos genral -->
        <div class="content">
          <p class="titre">INFORMATIONS GENERALE</p>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="Region">Region <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.region" color="secondary" :options="regionOptions" />
               
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="Commune">Commune <span class="text-danger">*</span></label>
                <input type="text" name="Commune" id="Commune" placeholder="" v-model="props.formValues.commune">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="ville">Ville <span class="text-danger">*</span></label>
                <input type="text" name="Ville" id="ville" placeholder="" v-model="props.formValues.ville">
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="Sousprefecture">Sous-Prefecture <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.sous_prefecture" color="secondary" :options="sous_prefectureOptions" />
               
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="Localisation">Localisation <span class="text-danger">*</span></label>
                <input type="text" name="Localisation" id="Localisation" placeholder=""
                  v-model="props.formValues.localisation">
              </div>
            </div>
          </div>


        </div>
        <!-- fin infos genral -->

        <!-- debut infos entreprise -->

        <div class="content">
          <p class="titre">INFORMATIONS SUR L'ENTREPRISE</p>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="SigleMpme">SigleMpme <span class="text-danger">*</span></label>
                <input type="text" name="SigleMpme" id="SigleMpme" placeholder="" v-model="props.formValues.sigle_mpme">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="nom">Nom <span class="text-danger">*</span></label>
                <input type="text" name="nom" id="nom" placeholder="" v-model="props.formValues.nom">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="Quartier">Quartier <span class="text-danger">*</span></label>
                  <MazSelect v-model="props.formValues.quartier" color="secondary" :options="QuartierOptions" />
                  
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="Rue">Rue <span class="text-danger">*</span></label>
                <input type="text" name="Rue" id="Rue" placeholder="" v-model="props.formValues.rue">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="nom">Boîte Postale <span class="text-danger">*</span></label>
                <input type="text" name="BoitePostale" id="BoitePostale" placeholder=""
                  v-model="props.formValues.boite_postale">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="NumeroWhatsApp">Numéro WhatsApp <span class="text-danger">*</span></label>
                <MazPhoneNumberInput v-model="props.formValues.tel_what" show-code-on-list color="secondary" defaultCountryCode="GN"
                  :ignored-countries="['AC']"   @update="results = $event" :success="results?.isValid" />

             
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="NumeroTelephoneSecondaire">Numéro Téléphone Secondaire <span class="text-danger">*</span></label>
                <MazPhoneNumberInput v-model="props.formValues.tel_second" show-code-on-list color="secondary" defaultCountryCode="GN"
                  :ignored-countries="['AC']"   @update="results = $event" :success="results?.isValid" />

              
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="AdresseEmail">Adresse Email <span class="text-danger">*</span></label>
                <input type="email" name="email" id="AdresseEmail" placeholder="" v-model="props.formValues.email">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="SiteWeb">Site Web <span class="text-danger">*</span></label>
                <input type="url" name="url" id="SiteWeb" placeholder="" v-model="props.formValues.url">
              </div>
            </div>
          </div>


        </div>
        <!-- fin infos entreprise -->

        <!-- debut infos activite -->
        <div class="content">
          <p class="titre">INFORMATIONS SUR L'ACTIVITE</p>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="AnneeCreation">Année de Creation <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.an_creation"  color="secondary" :options="yearOptions" />
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="AnneeEntreeActivite">Année Entrée Activité <span class="text-danger">*</span></label>
                <MazSelect v-model="props.formValues.an_entre_acti"  color="secondary" :options="yearOptions" />
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="CodeStatutJuridique">Code Statut Juridique <span class="text-danger">*</span></label>  
                  <MazSelect v-model="props.formValues.code_st_juriq"  color="secondary" :options="StatutJuridiqueOptions" />
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="AutreStatutJuridique">Autre Statut Juridique <span class="text-danger">*</span></label>
                <input type="text" name="AutreStatutJuridique" id="AutreStatutJuridique" placeholder=""
                  v-model="props.formValues.autr_st_juriq">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="PrincipalSecteurActivite">Principal Secteur Activite <span
                    class="text-danger">*</span></label>
                  <MazSelect v-model="props.formValues.prin_sect_acti" color="secondary" :options="SecteurActiviteOptions" />
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="ListeSousSecteurActivite">Liste Sous Secteur Activite <span
                    class="text-danger">*</span></label>
                  <MazSelect v-model="props.formValues.list_sous_sect_act" color="secondary" :options="SousSecteurActiviteOptions" />
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="AnneeProduction1">Année Production 1 <span class="text-danger">*</span></label>
               
                  <MazSelect v-model="props.formValues.an_prod_1"  color="secondary" :options="yearOptions" />
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="PersonnelPermanentFemme">Personnel Permanent Femme <span class="text-danger">*</span></label>
                <input type="text" name="PersonnelPermanentFemme" id="PersonnelPermanentFemme" placeholder=""
                  v-model="props.formValues.pers_per_femm">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="PersonnelPermanentHomme">Personnel Permanent Homme <span class="text-danger">*</span></label>
                <input type="text" name="PersonnelPermanentHomme" id="PersonnelPermanentHomme" placeholder=""
                  v-model="props.formValues.pers_per_homm">
              </div>
            </div>
          </div>


          <div class="row mb-3 mt-3 content-group">
          
            <div class="col">
              <div class="input-groupe">
                <label for="PersonnelTemporaireFemme">Personnel Temporaire Femme <span
                    class="text-danger">*</span></label>
                <input type="text" name="PersonnelTemporaireFemme" id="PersonnelTemporaireFemme" placeholder=""
                  v-model="props.formValues.pers_temp_femm">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="PersonnelTemporaireHomme">Personnel Temporaire Homme <span
                    class="text-danger">*</span></label>
                <input type="text" name="PersonnelTemporaireHomme" id="PersonnelTemporaireHomme" placeholder=""
                  v-model="props.formValues.pers_temp_homm">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="ChiffreAffaire1">Chiffre Affaire 1 <span class="text-danger">*</span></label>
                <input type="text" name="ChiffreAffaire1" id="ChiffreAffaire1" placeholder=""
                  v-model="props.formValues.ch_aff_1">
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
          
          
            <div class="col">
              <div class="input-groupe">
                <label for="ChiffreAffaire2">ChiffreAffaire 2 <span class="text-danger">*</span></label>
                <input type="text" name="ChiffreAffaire2" id="ChiffreAffaire2" placeholder=""
                  v-model="props.formValues.ch_aff_2">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="PartChiffreAffaireExprtation">Part Chiffre Affaire Exportation <span class="text-danger">*</span></label>
                <input type="text" name="PartChiffreAffaireExprtation" id="PartChiffreAffaireExprtation" placeholder=""
                  v-model="props.formValues.part_chiffre_affaire_exprtation">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="GroupeFililale">Groupe Fililale <span class="text-danger">*</span></label>
                <input type="text" name="GroupeFililale" id="GroupeFililale" placeholder=""
                  v-model="props.formValues.grpe_fililale">
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
           
            <div class="col">
              <div class="input-groupe">
                <label for="NationaliteGroupe">Nationalité Groupe <span class="text-danger">*</span></label>
                <!-- <input type="text" name="NationaliteGroupe" id="NationaliteGroupe" placeholder=""
                  v-model="props.formValues.nationalite_groupe"> -->
                  <MazSelect v-model="props.formValues.nationalite_groupe" :options="sortedCountryOptions" v-slot="{ option }" search color="secondary">
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
                <label for="CapitalSocial">Capital Social <span class="text-danger">*</span></label>
                <input type="text" name="CapitalSocial" id="CapitalSocial" placeholder=""
                  v-model="props.formValues.capital_social">
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="NumeroRccm">Numéro Rccm <span class="text-danger">*</span></label>
                <input type="text" name="NumeroRccm" id="NumeroRccm" placeholder="" v-model="props.formValues.nbre_rccm">
              </div>
            </div>
          </div>


          <div class="row mb-3 mt-3 content-group">
           
            <div class="col">
              <div class="input-groupe">
                <label for="NumeroNif">Numero Nif <span class="text-danger">*</span></label>
                <input type="text" name="NumeroNif" id="NumeroNif" placeholder="" v-model="props.formValues.nbre_nif">
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

import { ref, onMounted    } from 'vue';
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import { useStore } from 'vuex'; 

const props = defineProps(['formValues'])

const regionOptions = ref([]);
const years = ref([]);
const sortedCountryOptions = ref([])
const prefectureOptions = ref([])
const QuartierOptions = ref([]) 
const sous_prefectureOptions = ref([]) 
const SecteurActiviteOptions = ref([])
const SousSecteurActiviteOptions = ref([])
const StatutJuridiqueOptions = ref([])
const currentYear = new Date().getFullYear();
for (let year = 1960; year <= currentYear; year++) {
  years.value.push(year);
}


const yearOptions = years.value.map((year) => ({ label: String(year), value: String(year) }));

const fetchRegionOptions = async () => {
  try {
    const store = useStore();
    await store.dispatch('fetchRegionOptions');
    const options = JSON.parse(JSON.stringify(store.getters['getRegionOptions']));
    console.log('Options des régions :', options);
    regionOptions.value = options; // Affecter les options à la propriété regionOptions
  } catch (error) {
    console.error('Erreur lors de la récupération des options des pays :', error);
  }
};

 const fetchCountryOptions = async () => { // Renommez la méthode pour refléter qu'elle récupère les options de pays
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
    const  fetchSousPrefectureOptions= async () => { // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
        const store = useStore();
        await store.dispatch('fetchSous_PrefectureOptions');
        const options = JSON.parse(JSON.stringify(store.getters['getSousprefectureOptions'])); // Accéder aux options des pays via le getter
        console.log('Options des sous Prefecture:', options);
        sous_prefectureOptions.value = options; // Affecter les options à votre propriété sortedCountryOptions
      } catch (error) {
        console.error('Erreur lors de la récupération des options des sous prefecture :', error);
      }
    };
    const  fetchPrefectureOptions= async () => { // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
        const store = useStore();
        await store.dispatch('fetchPrefectureOptions');
        const options = JSON.parse(JSON.stringify(store.getters['getprefectureOptions'])); // Accéder aux options des pays via le getter
        console.log('Options des Prefecture:', options);
        prefectureOptions.value = options; // Affecter les options à votre propriété sortedCountryOptions
      } catch (error) {
        console.error('Erreur lors de la récupération des options des prefecture :', error);
      }
    };
    const  fetchQuartierOptions= async () => { // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
        const store = useStore();
        await store.dispatch('fetchQuartierOptions');
        const options = JSON.parse(JSON.stringify(store.getters['getQuartierOptions'])); // Accéder aux options des pays via le getter
        console.log('Options des Quartier:', options);
        QuartierOptions.value = options; // Affecter les options à votre propriété sortedCountryOptions
      } catch (error) {
        console.error('Erreur lors de la récupération des options des prefecture :', error);
      }
    };
    const fetchSecteurActiviteOptions = async () => {
  try {
    const store = useStore();
    await store.dispatch('fetchSecteurActiviteOptions'); // Action spécifique aux secteurs d'activité
    const options = JSON.parse(JSON.stringify(store.getters['getsecteurActiviteOptions']));
    SecteurActiviteOptions.value = options;
  } catch (error) {
    console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error);
  }
};
const fetchSousSecteurActiviteOptions = async () => {
  try {
    const store = useStore();
    await store.dispatch('fetchSousSecteurOptions'); // Action spécifique aux sous-secteurs d'activité
    const options = JSON.parse(JSON.stringify(store.getters['getSousSecteurOptions']));
    SousSecteurActiviteOptions.value = options;
  } catch (error) {
    console.error('Erreur lors de la récupération des options des sous-secteurs d\'activité:', error);
  }
};
const fetchStatutJuridiqueOptions = async () => {
  try {
    const store = useStore();
    await store.dispatch('fetchStatutJuridiqueOptions'); // Action spécifique aux statuts juridiques
    const options = JSON.parse(JSON.stringify(store.getters['getStatutJuridiqueOptions']));
    StatutJuridiqueOptions.value = options;
  } catch (error) {
    console.error('Erreur lors de la récupération des options des statuts juridiques:', error);
  }
};

  const results = ref()

onMounted(() => {
  fetchRegionOptions();
  fetchCountryOptions();
  fetchSousPrefectureOptions();
  fetchPrefectureOptions();
  fetchQuartierOptions();
  fetchSecteurActiviteOptions();
  fetchSousSecteurActiviteOptions();
  fetchStatutJuridiqueOptions();

  console.log('dataaaa',userData);
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
.form-select {
  width: 100%;
  border-radius: 0.5rem !important;
  border: 2px solid #e5e7eb;
  outline: 0;
  padding: 14px;
  color: rgb(3, 3, 5);
}

.input-groupe input:focus {
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