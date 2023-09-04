<template>
    <div>
      <div class="container-fluid  mt-10" data-aos="zoom-out" data-aos-delay="100">
        <div class="form-container">
          <div class="haut">
            Ci-dessous sont les informations pour votre MPME :
          </div>
  
          <!-- etape 1 -->
          <h3>Etape 1</h3>
          <div class="row mb-3">
            <div class="col">
              <strong class="contenu">Région:</strong> 
              <span> {{ userData.Region }}</span>
             
            </div>
            <div class="col">
              <strong class="contenu">Commune:</strong>
              <span> {{ userData.Commune }}</span>
            </div>
            <div class="col">
              <strong class="contenu">Ville:</strong> 
              <span> {{ userData.Ville }}</span>
            </div>
          </div>
  
          <div class="row mb-3">
    <div class="col">
      <strong class="contenu">Sous-préfecture:</strong>
      <span>{{ userData.Sousprefecture }}</span>
    </div>
   
    <div class="col">
      <strong class="contenu">Localisation:</strong>
      <span>{{ userData.Localisation }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Sigle Mpme:</strong>
      <span>{{ userData.SigleMpme }}</span>
    </div>
         </div>
  
         <div class="row mb-3">
    <div class="col">
      <strong class="contenu">Nom Mpme:</strong>
      <span>{{ userData.NomMpme }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Quartier:</strong>
      <span>{{ userData.Quartier }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Rue:</strong>
      <span>{{ userData.Rue }}</span>
    </div>
   
  </div>
  
  <div class="row mb-3">
    <div class="col">
      <strong class="contenu">Boîte Postale:</strong>
      <span>{{ userData.BoitePostale }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Numéro WhatsApp:</strong>
      <span>{{ userData.NumeroWhatsApp }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Numéro Téléphone Secondaire:</strong>
      <span>{{ userData.NumeroTelephoneSecondaire }}</span>
    </div>
  </div>
  
  <div class="row mb-3">
    <div class="col">
      <strong class="contenu">Adresse Email:</strong>
      <span>{{ userData.AdresseEmail }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Site Web:</strong>
      <span>{{ userData.AdresseEmai }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Année de Création:</strong>
      <span>{{ userData.AnneeCreation }}</span>
    </div>
   
  </div>
  
  <div class="row mb-3">
    <div class="col">
      <strong class="contenu">Année d'Entrée en Activité:</strong>
      <span>{{ userData.AnneeEntreeActivite }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Code Statut Juridique:</strong>
      <span>{{ userData.CodeStatutJuridique }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Autre Statut Juridique:</strong>
      <span>{{ userData.AutreStatutJuridique }}</span>
    </div>
  </div>
  
  <div class="row mb-3">
    <div class="col">
      <strong class="contenu">Principal Secteur d'Activité:</strong>
      <span>{{ userData.PrincipalSecteurActivite }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Liste des Sous-Secteurs d'Activité:</strong>
      <span >{{ items }} </span>
    </div>
    <div class="col">
      <strong   class="contenu">Année de Production 1:</strong>
      <span>{{ userData.AnneeProduction1 }}</span>
    </div>
  </div>
  
  <div class="row mb-3">
    <div class="col">
      <strong class="contenu">Personnel Permanent Femme:</strong>
      <span>{{ userData.PersonnelPermanentFemme }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Personnel Permanent Homme:</strong>
      <span>{{ userData.PersonnelPermanentHomme }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Personnel Temporaire Femme:</strong>
      <span>{{ userData.PersonnelTemporaireFemme }}</span>
    </div>
  </div>
  
  <div class="row mb-3">
    <div class="col">
      <strong class="contenu">Personnel Temporaire Homme:</strong>
      <span>{{ userData.PersonnelTemporaireHomme }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Chiffre d'Affaires 1:</strong>
      <span>{{ userData.ChiffreAffaire1 }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Chiffre d'Affaires 2:</strong>
      <span>{{ userData.ChiffreAffaire2 }}</span>
    </div>
  </div>
  
  <div class="row mb-3">
    <div class="col">
      <strong class="contenu">Part Chiffre d'Affaires à l'Exportation:</strong>
      <span>{{ userData.PartChiffreAffaireExprtation }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Groupe Filiale:</strong>
      <span>{{ userData.GroupeFililale }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Nationalité du Groupe:</strong>
      <span>{{ userData.NationaliteGroupe }}</span>
    </div>
  
  </div>
  
  <div class="row mb-3">
    <div class="col">
      <strong class="contenu">Capital Social:</strong>
      <span>{{ userData.CapitalSocial }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Numéro RCCM:</strong>
      <span> {{ userData.NumeroRccm }}</span>
    </div>
    <div class="col">
      <strong class="contenu">Numéro NIF:</strong>
      <span> {{ userData.NumeroNif }}</span>
    </div>
  </div>
  
        </div>
      </div>
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
        userData:'',
        item:'',
        items:''
      };
    },
  
    mounted() {
            this.fetchgetOneMpme()
    },
  
    methods: {
        async fetchgetOneMpme() {
            try {
                const userId = this.loggedInUser.user.Entreprises;
                const response = await axios.get(`/mpme/${userId}`);
                this.userData = response.data.data;
                this.item = JSON.parse(this.userData.ListeSousSecteurActivite)
                this.item.forEach(items => {
               return this.items = items
             });
                
                
               



            } catch (error) {
                console.error('Erreur lors de la récupération des options des sous prefecture :', error);
            }
        },
  
    },
  };
  </script>
  
  <style lang="css" scoped>
  .form-container {
    max-width: 1140px;
    margin: 0 auto;
    background-color: white;
    padding: 1rem;
    color: black;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
  
  }
  
  .haut{
  border-bottom: 1px solid var(--color-secondary);
  width: 100%;
  height: 100px;
  display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 21px;
      font-weight: bolder;
  
  }
  
  .row {
    display: flex;
    justify-content: space-between;
  }
  
  .col {
    flex: 1;
  }
  
  .contenu{
    font-weight: 600;
      font-family: ui-monospace;
      font-size: 18px;
  
  }
  
  .btnLogin {
    padding: 1em 3em;
    font-size: 12px;
    font-weight: 500;
    color: #000;
    background-color: #F9D310;
    border: none;
    border-radius: 45px;
    cursor: pointer;
    outline: none;
  }
  
  .btnLogin:hover {
    background-color: #fff;
    border: 1px solid #F9D310;
    color: #000
  }
  </style>