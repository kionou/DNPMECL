<template>
  <div>
    DNPMECLTest'
  </div>
</template>

<script>
import axios from '@/lib/axiosConfig.js'
export default {
  name: 'DNPMECLTest',
   computed: {

        loggedInUser() {
            return this.$store.getters['user/loggedInUser'];
        },
       

    },

  data() {
    return {
      
    };
  },

  mounted() {
     console.log("data", this.loggedInUser.access_token);
     this.fetchgetOneMpme();
     this.enregistrerMpmeDonnees()
    
  },

  methods: {

   
    async enregistrerMpmeDonnees() {
      let dataUser = {
      "Region":"Conakry",
    "Commune":"Kaloum",
    "Sousprefecture":"Bowé",
    "Ville":"",
    "Localisation":"",
    "SigleMpme":"KKH",
    "NomMpme":"KOUE",
    "Quartier":"",
    "Rue":"111",
    "BoitePostale":"5000",
    "NumeroWhatsApp":"+2240987653",
    "NumeroTelephoneSecondaire":null,
    "AdresseEmail":"",
    "SiteWeb":"",
    "AnneeCreation":"2019",
    "AnneeEntreeActivite":"2020",
    "CodeStatutJuridique":"",
    "AutreStatutJuridique":"",
    "ListeSousSecteurActivite":["secteur sous 1"],
    "AnneeProduction1":"2020",
    "PersonnelPermanentFemme":0,
    "PersonnelPermanentHomme":0,
    "PersonnelTemporaireFemme":0,
    "PersonnelTemporaireHomme":0,
    "ChiffreAffaire1":"",
    "ChiffreAffaire2":"",
    "PartChiffreAffaireExprtation":"",
    "GroupeFililale":"",
    "NationaliteGroupe":"",
    "CapitalSocial":"",
    "NumeroRccm":"",
    "NumeroNif":"",
    "MpmeBourse":"",
    "NomBourse":"",
    "RecptionPrix":"",
    "PrincipalPrix":"",
    "AnneePrixPrincipal":"",
    "TitreDirigeant":"",
    "NomDirigeant":"",
    "PrenomDirigeant":"",
    "SexeDirigeant":"",
    "PaysDirigeant":"",
    "AnneeNaissanceDirigeant":"",
    "DirigeantProprietaire":"",
    "TitreProprietaire":"",
    "NomProprietaire":"",
    "PrenomProprietaire":"",
    "SexeProprietaire":"",
    "PaysProprietaire":"",
    "AnneeNaissanceProprietaire":"",
    "ExistanceActionnaire":"",
    "ExistanceConseilAdministration":"",
    "ExistancePartenariat":"",
    "PartenariatTechnique":"",
    "PartenariatFinancier":"",
    "PartenariatCommercial":"",
    "PartenariatAutre":"",
    "AutrePartenariat":"",
    "BesoinPartenaire":"",
    "BesoinPartenaireTechnique":"",
    "BesoinPartenaireFinancier":"",
    "BesoinPartenaireCommercial":"",
    "BesoinPartenaireAutre":"",
    "AutreBesoinPartenaire":"",
    "AppartenanceReseauProfessionnel":"",
    "NomReseauProfessionnel":"",
    "DescriptionReseau":"",
    "FinancementFondPropre":"",
    "FinancementCreditBancaire":"",
    "FinancementPartenaireExterieurs":"",
    "FinancementAutre":"",
    "AutreFinancement":"",
    "DifficultesRencontrees":"",
    "SuggestionsProposees":"",
    "TitreRepondant":"",
    "NomRepondant":"",
    "FonctionRepondant":"",
    "AdresseRepondant":"",
    "VilleRepondant":"",
    "TelephoneWhatsAppRepondant":null,
    "Contacter":"",
    "LienGoogleMapMpme":"",
    "LatitudeMpme":"",
    "LongitudeMpme":"",
    "AltitudeMpme":"",
    "PrecisionGPSMpme":"",
    "OrigineDonnees":""
    }
    console.log('dataUser',dataUser);
            try {
                // const userId = this.loggedInUser.user.Entreprises;
                const userId = 'MPME-1565-2023'

                const response = await axios.put(`/mpme/${userId}`, dataUser, {
                    headers: {
                        Authorization: `Bearer ${this.loggedInUser.access_token}`,
                    },
                });

                if (response.status === 200) {
                    console.log('Données MPME mises à jour avec succès !');
                    return true;
                } else {
                    console.error('Erreur lors de la mise à ', error);
                    return false;
                }
            } catch (error) {
                console.error('Erreur lors de la mise à jour des données MPME guionee :', error);
                // this.formatValidationErrors(error.response.data.errors)
                // return false;
            }
        },
      async fetchgetOneMpme() {
            try {
                // const userId = this.loggedInUser.user.Entreprises;
                const userId = 'MPME-1565-2023'
                const response = await axios.get(`/mpme/${userId}`);
                // this.userData = response.data.data;
                // this.storeUserData(this.userData);
                console.log('UserData:',  response.data.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des options des sous prefecture :', error);
            }
        },
  },
};
</script>

<style lang="scss" scoped>

</style>