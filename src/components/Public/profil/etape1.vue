<template>
    <div>
        <div class="row tab-content">
            <p class="titre">INFORMATIONS GENERALE</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Region</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                nomRegion }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class="px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Commune</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                nomCommune }}</dd>
                                        </div>

                                    </div>

                                    <div class="d-flex justify-content-between class1">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Ville</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.Ville }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Localisation</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.Localisation }}</dd>
                                        </div>

                                    </div>

                                    <!-- <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Localisation</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.Localisation }}</dd>
                                        </div>

                                    </div> -->

                                </dl>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

        <div class="row tab-content">
            <p class="titre">INFORMATIONS SUR L'ENTREPRISE</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Sigle Mpme</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.SigleMpme }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Nom </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NomMpme }}</dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Quartier</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                nomQuartier }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Rue</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.Rue
                                            }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>


                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Boîte Postale</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.BoitePostale }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Numéro WhatsApp</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NumeroWhatsApp }} </dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Numéro Téléphone Secondaire
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NumeroTelephoneSecondaire }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Adresse Email</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AdresseEmail }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>

                                    

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Site Web</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.SiteWeb}} </dd>
                                        </div>

                                    </div>


                                </dl>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

        <div class="row tab-content">
            <p class="titre">INFORMATIONS SUR L'ACTIVITE</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Année de Creation</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AnneeCreation }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Année Entrée Activité </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AnneeEntreeActivite }} </dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Code Statut Juridique</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                selectedJuridique }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3  class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Autre Statut Juridique</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                selectedJuridiqueAutre }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>


                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Principal Secteur Activite
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                selectedActivite }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Liste Sous Secteur Activite
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.ListeSousSecteurActivite }}
                                            </dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Année Production 1</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AnneeProduction1 }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3  class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Personnel Permanent Femme
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PersonnelPermanentFemme }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Personnel Permanent Homme
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PersonnelPermanentHomme }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Personnel Temporaire Femme
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PersonnelTemporaireFemme }} </dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Personnel Temporaire Homme
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PersonnelTemporaireHomme }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Nombre d'employés Guinéens</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NbreEmploye }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Nombre d'actionnaires Guinéens Femmes</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NbreActionnaireGuinneF }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Nombre d'actionnaires Guinéens Hommes
                                                Exportation</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NbreActionnaireGuinneH }} </dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Nombre d'actionnaires Guinéens </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NbreActionnaireGuinne }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Part Chiffre Affaire Exportation</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PartChiffreAffaireExprtation }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Groupe Fililale</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.GroupeFililale }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Nationalité Groupe</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NationaliteGroupe }}</dd>
                                        </div>

                                    </div>
                                    <!-- <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Numero Nif </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NumeroNif }} </dd>
                                        </div>

                                    </div> -->
                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Capital Social </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.CapitalSocial }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Pays du Siège Social</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PaysSiegeSocial }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Numéro Rccm</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NumeroRccm }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Numero Nif</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NumeroNif }}</dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Date Generation du Numero Nif </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.DateGenerationNif }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Numero de la TVA</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NumeroTva }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Code du Regime</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.CodeRegime }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Code Type Gestion</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.CodeTypeGestion }}</dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Code Type Contribuable </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.CodeTypeContribuable }}</dd>
                                        </div>
                                       
                                    </div>

                                </dl>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'DNPMECLEtape1',
    props: ['data', 'items'],

    data() {
        return {
            nomRegion: '',
            nomCommune:'',
            nomQuartier:'',
            selectedJuridique:'',
            selectedJuridiqueAutre:'',
            selectedActivite:''
        };
    },

   async mounted() {
        
     await  this.fetchRegionOptions(),
     await  this.fetchSousPrefectureOptions(),
     await  this.fetchQuartierOptions(),
     await  this.fetchStatutJuridiqueOptions(),
     await  this.fetchSecteurActiviteOptions(),
     await  this.fetchSousSecteurActiviteOptions()
        
    },

    methods: {

        async fetchRegionOptions() {
    try {
        await this.$store.dispatch("fetchRegionOptions");
        const options = JSON.parse(JSON.stringify(this.$store.getters["getRegionOptions"])); 
        const selectedRegion = options.find(region => region.value === this.data.Region);
        
        if (selectedRegion) {
            this.nomRegion = selectedRegion.label;         
        } else {
            console.error('Région non trouvée dans les options.');
        }
    } catch (error) {
        console.error(
            "Erreur lors de la récupération des options des pays :",
            error.message
        );
    }
},

   
    async fetchSousPrefectureOptions() {
  try {
    await this.$store.dispatch("fetchSous_PrefectureOptions");
    const options = JSON.parse(JSON.stringify(this.$store.getters["getSousprefectureOptions"]));
    const selectedCommune = options.find(region => region.value === this.data.Commune);
        if (selectedCommune) {
            this.nomCommune = selectedCommune.label;         
        } else {
            console.error('Région non trouvée dans les options.');
        }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des options des sous-préfectures :",
      error.message
    );
  }
},

    async fetchQuartierOptions() {
      // Renommez la méthode pour refléter qu'elle récupère les options de pays
      try {
        await this.$store.dispatch("fetchQuartierOptions");
        const options = JSON.parse(
          JSON.stringify(this.$store.getters["getQuartierOptions"])); // Accéder aux options des pays via le getter
          const selectedQuartier = options.find(region => region.value === this.data.Quartier);
        if (selectedQuartier) {
            this.nomQuartier = selectedQuartier.label;         
        } else {
            console.error('Région non trouvée dans les options.');
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des options des prefecture :",
          error.message
        );
      }
    },
    async fetchStatutJuridiqueOptions() {
      try {
        await this.$store.dispatch("fetchStatutJuridiqueOptions"); // Action spécifique aux statuts juridiques
        const options = JSON.parse(
          JSON.stringify(this.$store.getters["getStatutJuridiqueOptions"]));
          const selectedJuridique = options.find(region => region.value === parseInt( this.data.CodeStatutJuridique));
          const selectedJuridiqueAutre = options.find(region => region.value === parseInt(this.data.AutreStatutJuridique));
  
        if (selectedJuridique) {
            this.selectedJuridique = selectedJuridique.label;         
        } else {
            console.error('Région non trouvée dans les options.');
        }

        if (selectedJuridiqueAutre) {
            this.selectedJuridiqueAutre = selectedJuridiqueAutre.label;         
        } else {
            console.error('Région non trouvée dans les options.');
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des options des statuts juridiques:",
          error.message
        );
      }
    },
    async fetchSecteurActiviteOptions() {
      try {
        await this.$store.dispatch("fetchSecteurActiviteOptions"); // Action spécifique aux secteurs d'activité
        const options = JSON.parse(JSON.stringify(this.$store.getters["getsecteurActiviteOptions"]));
        const selectedActivite = options.find(region => region.value === this.data.PrincipalSecteurActivite);
        if (selectedActivite) {
            this.selectedActivite = selectedActivite.label;         
        } else {
            console.error('Région non trouvée dans les options.');
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des options des secteurs d'activité:",
          error.message
        );
      }
    },
    async fetchSousSecteurActiviteOptions() {
      try {
        await this.$store.dispatch("fetchSousSecteurOptions"); // Remplacez par l'action de votre store
        this.SousSecteurActiviteOptions = this.$store.getters[
          "getSousSecteurOptions"
        ].map((option) => {
          return {
            state: option.label,
            abbr: option.value,
          };
        });
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des options des secteurs d'activité:",
          error.message
        );
      }
    },
  

    },
};
</script>

<style lang="css" scoped>.titre {
    display: block;
    color: rgba(156, 163, 175, 1);
    margin-bottom: 4px;
    font-size: 12px;
}

.class3 {
   
    width: 40%;

}

@media (max-width: 1023px) {
    .class1 {
        flex-direction: column;
    }

    .class2 {
        background-color: #F9FAFB;
    }

    .class3 {
       
        width: 100% !important;

    }
}

@media (max-width: 768px) {
  .tab-content {

      padding: 10px !important;

  }
}
</style>