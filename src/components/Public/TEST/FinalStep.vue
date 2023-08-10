<template>
 <div class="container-fluid " data-aos="zoom-out"
        data-aos-delay="100">
  <div class="form-container">
  
  <!-- etape 1 -->
  <h3>Etape 1</h3>
    <div class="row mb-3">
      <div class="col">
        <strong>Région:</strong> {{ props.formValues.region }}
      </div>
      <div class="col">
        <strong>Commune:</strong> {{ props.formValues.commune }}
      </div>
      <div class="col">
        <strong>Ville:</strong> {{ props.formValues.ville }}
      </div>
      <div class="col">
        <strong>Sous-préfecture:</strong> {{ props.formValues.sous_prefecture }}
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <strong>Localisation:</strong> {{ props.formValues.localisation }}
      </div>
      <div class="col">
        <strong>Sigle MPME:</strong> {{ props.formValues.sigle_mpme }}
      </div>
      <div class="col">
        <strong>Nom:</strong> {{ props.formValues.nom }}
      </div>
      <div class="col">
        <strong>Quartier:</strong> {{ props.formValues.quartier }}
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <strong>Rue:</strong> {{ props.formValues.rue }}
      </div>
      <div class="col">
        <strong>Boîte postale:</strong> {{ props.formValues.boite_postale }}
      </div>
      <div class="col">
        <strong>Téléphone (WhatsApp):</strong> {{ props.formValues.tel_what }}
      </div>
      <div class="col">
        <strong>Téléphone (Secondaire):</strong> {{ props.formValues.tel_second }}
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <strong>Email:</strong> {{ props.formValues.email }}
      </div>
      <div class="col">
        <strong>URL:</strong> {{ props.formValues.url }}
      </div>
      <div class="col">
        <strong>Année de création:</strong> {{ props.formValues.an_creation }}
      </div>
      <div class="col">
        <strong>Année d'entrée en activité:</strong> {{ props.formValues.an_entre_acti }}
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <strong>Code statut juridique:</strong> {{ props.formValues.code_st_juriq }}
      </div>
      <div class="col">
        <strong>Autre statut juridique:</strong> {{ props.formValues.autr_st_juriq }}
      </div>
      <div class="col">
        <strong>Principale secteur d'activité:</strong> {{ props.formValues.prin_sect_acti }}
      </div>
      <div class="col">
        <strong>Liste des sous-secteurs d'activité:</strong> {{ props.formValues.list_sous_sect_act }}
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <strong>Année de production 1:</strong> {{ props.formValues.an_prod_1 }}
      </div>
      <div class="col">
        <strong>Personnel permanent femmes:</strong> {{ props.formValues.pers_per_femm }}
      </div>
      <div class="col">
        <strong>Personnel permanent hommes:</strong> {{ props.formValues.pers_per_homm }}
      </div>
      <div class="col">
        <strong>Personnel temporaire femmes:</strong> {{ props.formValues.pers_temp_femm }}
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <strong>Personnel temporaire hommes:</strong> {{ props.formValues.pers_temp_homm }}
      </div>
      <div class="col">
        <strong>Chiffre d'affaires 1:</strong> {{ props.formValues.ch_aff_1 }}
      </div>
      <div class="col">
        <strong>Chiffre d'affaires 2:</strong> {{ props.formValues.ch_aff_2 }}
      </div>
      <div class="col">
        <strong>Groupe filiale:</strong> {{ props.formValues.grpe_fililale }}
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <strong>Nationalité du groupe:</strong> {{ props.formValues.nationalite_groupe }}
      </div>
      <div class="col">
        <strong>Capital social:</strong> {{ props.formValues.capital_social }}
      </div>
      <div class="col">
        <strong>Nombre de RCCM:</strong> {{ props.formValues.nbre_rccm }}
      </div>
      <div class="col">
        <strong>Nombre de NIF:</strong> {{ props.formValues.nbre_nif }}
      </div>
    </div>

    <div class="row mb-3">
     
      <div class="col">
        <strong>Part Chiffre Affaire Exprtation:</strong> {{ props.formValues.part_chiffre_affaire_exprtation }}
      </div>
    </div>
   

    <!-- etape 2 -->
    <h3>Etape 2</h3>
    <div class="row mb-3">
      <div class="col">
        <strong>MPME Bourse:</strong> {{ props.formValues.mpmeBourse }}
      </div>
      <div class="col">
        <strong>Nom Bourse:</strong> {{ props.formValues.nomBourse }}
      </div>
      <div class="col">
        <strong>Réception Prix:</strong> {{ props.formValues.receptionPrix }}
      </div>
      <div class="col">
        <strong>Principal Prix:</strong> {{ props.formValues.principalPrix }}
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <strong>Année Prix Principal:</strong> {{ props.formValues.anneePrixPrincipal }}
      </div>
      <div class="col">
        <strong>Titre Dirigeant:</strong> {{ props.formValues.titreDirigeant }}
      </div>
      <div class="col">
        <strong>Nom Dirigeant:</strong> {{ props.formValues.nomDirigeant }}
      </div>
      <div class="col">
        <strong>Prénom Dirigeant:</strong> {{ props.formValues.prenomDirigeant }}
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <strong>Sexe Dirigeant:</strong> {{ props.formValues.sexeDirigeant }}
      </div>
      <div class="col">
        <strong>Pays Dirigeant:</strong> {{ props.formValues.paysDirigeant }}
      </div>
      <div class="col">
        <strong>Année Naissance Dirigeant:</strong> {{ props.formValues.anneeNaissanceDirigeant }}
      </div>
      <div class="col">
        <strong>Dirigeant Propriétaire:</strong> {{ props.formValues.dirigeantProprietaire }}
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <strong>Titre Propriétaire:</strong> {{ props.formValues.titreProprietaire }}
      </div>
      <div class="col">
        <strong>Nom Propriétaire:</strong> {{ props.formValues.nomProprietaire }}
      </div>
      <div class="col">
        <strong>Prénom Propriétaire:</strong> {{ props.formValues.prenomProprietaire }}
      </div>
      <div class="col">
        <strong>Sexe Propriétaire:</strong> {{ props.formValues.sexeProprietaire }}
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <strong>Pays Propriétaire:</strong> {{ props.formValues.paysProprietaire }}
      </div>
      <div class="col">
        <strong>Année Naissance Propriétaire:</strong> {{ props.formValues.anneeNaissanceProprietaire }}
      </div>
      <div class="col">
        <strong>Appartenance Réseau Professionnel:</strong> {{ props.formValues.appartenanceReseauProfessionnel }}
      </div>
      <div class="col">
        <strong>Nom Réseau Professionnel:</strong> {{ props.formValues.nomReseauProfessionnel }}
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <strong>Financement Fond Propre:</strong> {{ props.formValues.financementFondPropre }}
      </div>
      <div class="col">
        <strong>Financement Crédit Bancaire:</strong> {{ props.formValues.financementCreditBancaire }}
      </div>
      <div class="col">
        <strong>Financement Partenaire Exterieurs:</strong> {{ props.formValues.financementPartenaireExterieurs }}
      </div>
      <div class="col">
        <strong>Financement Autre:</strong> {{ props.formValues.financementAutre }}
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <strong>Autre Financement:</strong> {{ props.formValues.autreFinancement }}
      </div>
      <div class="col">
        <strong>Description du Réseau:</strong> {{ props.formValues.descriptionReseau }}
      </div>
      <div class="col">
        <strong>Difficultés Rencontrées:</strong> {{ props.formValues.difficultesRencontrees }}
      </div>
      <div class="col">
        <strong>Suggestions Proposées:</strong> {{ props.formValues.suggestionsProposees }}
      </div>
    </div>

   
    <!-- etape 3 -->
    <h3>Etape 3</h3>
    <div class="row mb-3">
      <div class="col">
        <strong>Existance Actionnaire:</strong> {{ props.formValues.existanceActionnaire }}
      </div>
      <div class="col">
        <strong>Existance Conseil Administration:</strong> {{ props.formValues.existanceConseilAdministration }}
      </div>
      <div class="col">
        <strong>Existance Partenariat:</strong> {{ props.formValues.existancePartenariat }}
      </div>
      <div class="col">
        <strong>Partenariat Technique:</strong> {{ props.formValues.partenariatTechnique }}
      </div>
    </div>

    <div class="row mb-3">
     
      <div class="col">
        <strong>Partenariat Financier:</strong> {{ props.formValues.partenariatFinancier }}
      </div>
      <div class="col">
        <strong>Partenariat Commercial:</strong> {{ props.formValues.partenariatCommercial }}
      </div>
      <div class="col">
        <strong>Partenariat Autre:</strong> {{ props.formValues.partenariatAutre }}
      </div>
      <div class="col">
        <strong>Autre Partenariat:</strong> {{ props.formValues.autrePartenariat }}
      </div>
    </div>
    <div class="row mb-3">
      
      <div class="col">
        <strong>Besoin Partenaire:</strong> {{ props.formValues.besoinPartenaire }}
      </div>
      <div class="col">
        <strong>Besoin Partenaire Technique:</strong> {{ props.formValues.besoinPartenaireTechnique }}
      </div>
      <div class="col">
        <strong>Besoin Partenaire Financier:</strong> {{ props.formValues.besoinPartenaireFinancier }}
      </div>
      <div class="col">
        <strong>Besoin Partenaire Commercial:</strong> {{ props.formValues.besoinPartenaireCommercial }}
      </div>
    </div>




    <div class="row mb-3">
      <div class="col">
        <strong>Besoin Partenaire Autre:</strong> {{ props.formValues.besoinPartenaireAutre }}
      </div>
      <div class="col">
        <strong>Autre Besoin Partenaire:</strong> {{ props.formValues.autreBesoinPartenaire }}
      </div>
      <div class="col">
        <strong>Titre Repondant:</strong> {{ props.formValues.titreRepondant }}
      </div>
      <div class="col">
        <strong>Nom Repondant:</strong> {{ props.formValues.nomRepondant }}
      </div>
      
    </div>

    <div class="row mb-3">
      <div class="col">
        <strong>Fonction Repondant:</strong> {{ props.formValues.fonctionRepondant }}
      </div>
      <div class="col">
        <strong>Adresse Repondant:</strong> {{ props.formValues.adresseRepondant }}
      </div>
      <div class="col">
        <strong>Ville Repondant:</strong> {{ props.formValues.villeRepondant }}
      </div>
      <div class="col">
        <strong>Telephone WhatsApp Repondant:</strong> {{ props.formValues.telephoneWhatsAppRepondant }}
      </div>
      
    </div>


    <div class="row mb-3">
      <div class="col">
        <strong>Contacter:</strong> {{ props.formValues.contacter }}
      </div>
      <div class="col">
        <strong>Lien Google Map Mpme:</strong> {{ props.formValues.lienGoogleMapMpme }}
      </div>
      <div class="col">
        <strong>Latitude Mpme:</strong> {{ props.formValues.latitudeMpme }}
      </div>
      <div class="col">
        <strong>Longitude Mpme:</strong> {{ props.formValues.longitudeMpme }}
      </div>
   
    </div>

    <div class="row mb-3">
      <div class="col">
        <strong>Altitude Mpme:</strong> {{ props.formValues.altitudeMpme }}
      </div>
     
      <div class="col">
        <strong>Precision GPS Mpme:</strong> {{ props.formValues.precisionGPSMpme }}
      </div>
      <div class="col">
        <strong>Origine Donnees:</strong> {{ props.formValues.origineDonnees }}
      </div>
    </div>

    <button class="btnLogin" @click="onSubmitClick">Soumettre</button>
  </div>
 </div>


    </template>
    
    <script setup>
     import axios from '@/lib/axiosConfig.js'
    // import axios from 'axios'
        const props = defineProps(['formValues']);
        console.log('props',props);
        const onSubmitClick = async () => {
          try {
            const dataToSend = {
      CodeMpme:"12345",
      Region: props.formValues.region,
      Commune: props.formValues.commune,
      Sousprefecture: props.formValues.sous_prefecture,
      Ville: props.formValues.ville,
      Localisation: props.formValues.localisation,
      SigleMpme: props.formValues.sigle_mpme,
      NomMpme: props.formValues.nom,
      Quartier: props.formValues.quartier,
      Rue: props.formValues.rue,
      BoitePostale: props.formValues.boite_postale,
      NumeroWhatsApp: props.formValues.tel_what,
      NumeroTelephoneSecondaire: props.formValues.tel_second,
      AdresseEmail: props.formValues.email,
      SiteWeb: props.formValues.url,
      AnneeCreation: props.formValues.an_creation,
      AnneeEntreeActivite: props.formValues.an_entre_acti,
      CodeStatutJuridique: props.formValues.code_st_juriq,
      AutreStatutJuridique: props.formValues.autr_st_juriq,
      PrincipalSecteurActivite: props.formValues.prin_sect_acti,
      ListeSousSecteurActivite: props.formValues.list_sous_sect_act,
      AnneeProduction1: props.formValues.an_prod_1,
      PersonnelPermanentFemme: props.formValues.pers_per_femm,
      PersonnelPermanentHomme: props.formValues.pers_per_homm,
      PersonnelTemporaireFemme: props.formValues.pers_temp_femm,
      PersonnelTemporaireHomme: props.formValues.pers_temp_homm,
      ChiffreAffaire1: props.formValues.ch_aff_1,
      ChiffreAffaire2: props.formValues.ch_aff_2,
      PartChiffreAffaireExprtation: props.formValues.part_chiffre_affaire_exprtation,
      GroupeFililale: props.formValues.grpe_fililale,
      NationaliteGroupe: props.formValues.nationalite_groupe,
      CapitalSocial: props.formValues.capital_social,
      NumeroRccm: props.formValues.nbre_rccm,
      NumeroNif: props.formValues.nbre_nif,
      MpmeBourse: props.formValues.mpmeBourse,
      NomBourse: props.formValues.nomBourse,
      RecptionPrix: props.formValues.receptionPrix,
      PrincipalPrix: props.formValues.principalPrix,
      AnneePrixPrincipal: props.formValues.anneePrixPrincipal,
      TitreDirigeant: props.formValues.titreDirigeant,
      NomDirigeant: props.formValues.nomDirigeant,
      PrenomDirigeant: props.formValues.prenomDirigeant,
      SexeDirigeant: props.formValues.sexeDirigeant,
      PaysDirigeant: props.formValues.paysDirigeant,
      AnneeNaissanceDirigeant: props.formValues.anneeNaissanceDirigeant,
      DirigeantProprietaire: props.formValues.dirigeantProprietaire,
      TitreProprietaire: props.formValues.titreProprietaire,
      NomProprietaire: props.formValues.nomProprietaire,
      PrenomProprietaire: props.formValues.prenomProprietaire,
      SexeProprietaire: props.formValues.sexeProprietaire,
      PaysProprietaire: props.formValues.paysProprietaire,
      AnneeNaissanceProprietaire: props.formValues.anneeNaissanceProprietaire,
      AppartenanceReseauProfessionnel: props.formValues.appartenanceReseauProfessionnel,
      NomReseauProfessionnel: props.formValues.nomReseauProfessionnel,
      FinancementFondPropre: props.formValues.financementFondPropre,
      FinancementCreditBancaire: props.formValues.financementCreditBancaire,
      FinancementPartenaireExterieurs: props.formValues.financementPartenaireExterieurs,
      FinancementAutre: props.formValues.financementAutre,
      DescriptionReseau: props.formValues.descriptionReseau,
      AutreFinancement: props.formValues.autreFinancement,
      DifficultesRencontrees: props.formValues.difficultesRencontrees,
      SuggestionsProposees: props.formValues.suggestionsProposees,

      ExistanceActionnaire: props.formValues.existanceActionnaire,
      ExistanceConseilAdministration: props.formValues.existanceConseilAdministration,
      ExistancePartenariat: props.formValues.existancePartenariat,
      PartenariatTechnique: props.formValues.partenariatTechnique,
      PartenariatFinancier: props.formValues.partenariatFinancier,
      PartenariatCommercial: props.formValues.partenariatCommercial,
      PartenariatAutre: props.formValues.partenariatAutre,
      AutrePartenariat: props.formValues.autrePartenariat,
      BesoinPartenaire: props.formValues.besoinPartenaire,
      BesoinPartenaireTechnique: props.formValues.besoinPartenaireTechnique,
      BesoinPartenaireFinancier: props.formValues.besoinPartenaireFinancier,
      BesoinPartenaireCommercial: props.formValues.besoinPartenaireCommercial,
      BesoinPartenaireAutre: props.formValues.besoinPartenaireAutre,
      AutreBesoinPartenaire: props.formValues.autreBesoinPartenaire,
      TitreRepondant: props.formValues.titreRepondant,
      NomRepondant: props.formValues.nomRepondant,
      FonctionRepondant: props.formValues.fonctionRepondant,
      AdresseRepondant:props.formValues.adresseRepondant,
      VilleRepondant:props.formValues.villeRepondant,
      TelephoneWhatsAppRepondant:props.formValues.telephoneWhatsAppRepondant,
      Contacter:props.formValues.contacter,
      LienGoogleMapMpme: props.formValues.lienGoogleMapMpme,
      LatitudeMpme: props.formValues.latitudeMpme, 
      LongitudeMpme: props.formValues.longitudeMpme,
      AltitudeMpme: props.formValues.altitudeMpme,
      PrecisionGPSMpme: props.formValues.precisionGPSMpme,
      OrigineDonnees: props.formValues.origineDonnees,
      // Ajoutez d'autres champs ici si nécessaire
    };
    // Insérez ici le code pour envoyer les éléments dans la base de données
     // Insérez ici le code pour envoyer les éléments dans la base de données
      // console.log('Données confirmées :', props.formValues.region);
    const response = await axios.post('/register/mpme',  dataToSend);
    console.log('eeerrr',response);
    // Traitez la réponse ici si nécessaire (response.data, response.status, etc.)
  }  catch (error) {
    // Gérez les erreurs ici
    if (error.response) {
      // La requête a été faite et le serveur a répondu avec un code de statut hors de la plage 2xx.
      console.log('Réponse du serveur:', error.response.data);
      console.log('Code de statut:', error.response.status);
    } else if (error.request) {
      // La requête a été faite, mais aucune réponse n'a été reçue.
      console.log('Requête effectuée, mais aucune réponse reçue:', error.request);
    } else {
      // Une erreur s'est produite lors de la configuration de la requête.
      console.log('Erreur lors de la configuration de la requête:', error.message);
    }
    error = error.message;
  }


   
     
  };
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
    
.row {
  display: flex;
  justify-content: space-between;
}

.col {
  flex: 1;
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
  border: 1px solid #F9D310 ;
  color: #000
 
}
  
  </style>


    