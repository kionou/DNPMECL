<template>
    <div class="container-fluid" data-aos="zoom-out" data-aos-delay="100">
      <p class="title">Enregistrez votre PME dès maintenant</p>
              <p class="text-center">Un seul formulaire pour concrétiser votre projet entrepreneurial et enregistrer votre PME en toute simplicité.</p>
      <div v-if="currentStep === 1">
        <!-- Étape 1 :  -->
        <div >
          <div class="form-container">
            
              <form class="form">
                  <!-- debut infos genral -->
                  <div class="content">
                      <p class="titre">INFORMATIONS GENERALE</p>
                      <div class="row mb-3 mt-3 content-group" >
                          <div class="col">
                          <div class="input-groupe">
                              <label for="Region">Region <span class="text-danger">*</span></label>
                              <select id="utexi_sexe" name="utexi[sexe]" class="form-select" v-model="region">
                                  <option disabled selected >--- Regions ---</option>
                                  <option value="conakry">Conakry</option>
                                  <option value="mali">Mali</option>
                              </select>
                          </div>
                          <small v-if="v$.region.$error">{{v$.region.$errors[0].$message}}</small>
                      </div>
                     
                      <div class="col">
                          <div class="input-groupe">
                              <label for="Commune">Commune <span class="text-danger">*</span></label>
                              <input type="text" name="Commune" id="Commune" placeholder="" v-model="commune">
                          </div>
                          <small v-if="v$.commune.$error">{{v$.commune.$errors[0].$message}}</small>
  
                      </div>
                      <div class="col">
                          <div class="input-groupe">
                              <label for="ville">Ville <span class="text-danger">*</span></label>
                              <input type="text" name="Ville" id="ville" placeholder="" v-model="ville">
                          </div>
                          <small v-if="v$.ville.$error">{{v$.ville.$errors[0].$message}}</small>
                      </div>
                     
                  </div>
                  <div class="row mb-3 mt-3 content-group" >
                     
                      <div class="col">
                          <div class="input-groupe">
                              <label for="Sousprefecture">Sous-Prefecture <span class="text-danger">*</span></label>
                              <select id="utexi_sexe" name="utexi[sexe]" class="form-select" v-model="sous_prefecture">
                                  <option disabled selected >--- Sous-prefecture ---</option>
                                  <option value="tiro">Tiro</option>
                                  <option value="albadariah">Albadariah</option>
                                  <option value="banama">Banama</option>
                              </select>
                          </div>
                          <small v-if="v$.sous_prefecture.$error">{{v$.sous_prefecture.$errors[0].$message}}</small>
                      </div>
                    
                      <div class="col">
                          <div class="input-groupe">
                              <label for="Localisation">Localisation <span class="text-danger">*</span></label>
                              <input type="text" name="Localisation" id="localisation" placeholder="" v-model="localisation">
                          </div>
                          <small v-if="v$.localisation.$error">{{v$.localisation.$errors[0].$message}}</small>
                          
                      </div>
                  </div>
                 
                  </div>
                  <!-- fin infos genral -->
  
                  <!-- debut infos entreprise -->
  
                  <div class="content">
                      <p class="titre">INFORMATIONS SUR L'ENTREPRISE</p>
                      <div class="row mb-3 mt-3 content-group" >
                          <div class="col">
                          <div class="input-groupe">
                              <label for="SigleMpme">SigleMpme <span class="text-danger">*</span></label>
                              <input type="text" name="SigleMpme" id="SigleMpme" placeholder="" v-model="sigle_mpme">
                          </div>
                          <small v-if="v$.sigle_mpme.$error">{{v$.sigle_mpme.$errors[0].$message}}</small>
  
                      </div>
                          <div class="col">
                          <div class="input-groupe">
                              <label for="nom">Nom <span class="text-danger">*</span></label>
                              <input type="text" name="nom" id="nom" placeholder="" v-model="nom" >
                          </div>
                          <small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}}</small>
  
                      </div>
                      <div class="col">
                          <div class="input-groupe">
                              <label for="Quartier">Quartier <span class="text-danger">*</span></label>
                              <select id="utexi_sexe" name="utexi[sexe]" class="form-select" v-model="quartier">
                                  <option disabled selected >--- Quartiers ---</option>
                                  <option value="conakry">Quartier1</option>
                                  <option value="mali">Quartier2</option>
                              </select>
                          </div>
                          <small v-if="v$.quartier.$error">{{v$.quartier.$errors[0].$message}}</small>
  
                      </div>
                    
                  </div>
                  <div class="row mb-3 mt-3 content-group" >
                      <div class="col">
                          <div class="input-groupe">
                              <label for="Rue">Rue <span class="text-danger">*</span></label>
                              <input type="text" name="Rue" id="Rue" placeholder="" v-model="rue">
                          </div>
                          <small v-if="v$.rue.$error">{{v$.rue.$errors[0].$message}}</small>
  
                      </div>
                      <div class="col">
                          <div class="input-groupe">
                              <label for="nom">Boîte Postale <span class="text-danger">*</span></label>
                              <input type="text" name="BoitePostale" id="BoitePostale" placeholder="" v-model="boite_postale">
                          </div>
                          <small v-if="v$.boite_postale.$error">{{v$.boite_postale.$errors[0].$message}}</small>
  
                      </div>
                      <div class="col">
                          <div class="input-groupe">
                              <label for="NumeroWhatsApp">Numéro WhatsApp <span class="text-danger">*</span></label>
                              <input type="text" name="NumeroWhatsApp" id="NumeroWhatsApp" placeholder="" v-model="tel_what">
                          </div>
                          <small v-if="v$.tel_what.$error">{{v$.tel_what.$errors[0].$message}}</small>
  
                      </div>
                   
                  </div>
                  <div class="row mb-3 mt-3 content-group" >
                       
                      <div class="col">
                          <div class="input-groupe">
                              <label for="NumeroTelephoneSecondaire">Numéro Téléphone Secondaire <span class="text-danger">*</span></label>
                              <input type="tel" name="NumeroTelephoneSecondaire" id="NumeroTelephoneSecondaire" placeholder="" v-model="tel_second">
                          </div>
                      </div>
                      <small v-if="v$.tel_second.$error">{{v$.tel_second.$errors[0].$message}}</small>
  
                      
                      <div class="col">
                          <div class="input-groupe">
                              <label for="AdresseEmail">Adresse Email <span class="text-danger">*</span></label>
                              <input type="email" name="email" id="AdresseEmail" placeholder="" v-model="email">
                          </div>
                          <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</small>
  
                      </div>
                      
                      <div class="col">
                          <div class="input-groupe">
                              <label for="SiteWeb">Site Web <span class="text-danger">*</span></label>
                              <input type="url" name="url" id="SiteWeb" placeholder="" v-model="url">
                          </div>
                          <small v-if="v$.url.$error">{{v$.url.$errors[0].$message}}</small>
  
                      </div>
              
                    
                  </div>
                 
                  </div>
                  <!-- fin infos entreprise -->
  
                    <!-- debut infos activite -->
                    <div class="content">
                      <p class="titre">INFORMATIONS SUR L'ACTIVITE</p>
                      <div class="row mb-3 mt-3 content-group" >
                      <div class="col">
                          <div class="input-groupe">
                              <label for="AnneeCreation">Année de Creation <span class="text-danger">*</span></label>
                              <select id="utexi_sexe" name="utexi[sexe]" class="form-select" v-model="an_creation">
                                  <option disabled selected >--- Date ---</option>
                                  <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                              </select>
                              
                          </div>
                          <small v-if="v$.an_creation.$error">{{v$.an_creation.$errors[0].$message}}</small>
                      </div>
                    
                      <div class="col">
                          <div class="input-groupe">
                              <label for="AnneeEntreeActivite">Année Entrée Activité <span class="text-danger">*</span></label>
                              <select id="utexi_sexe" name="utexi[sexe]" class="form-select"  v-model="an_entre_acti">
                                  <option disabled selected >--- Date ---</option>
                                  <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                              </select>
                            
                             
                          </div>
                          <small v-if="v$.an_entre_acti.$error">{{v$.an_entre_acti.$errors[0].$message}}</small>
                      </div>
                      <div class="col">
                          <div class="input-groupe">
                              <label for="CodeStatutJuridique">Code Statut Juridique <span class="text-danger">*</span></label>
                              <input type="text" name="CodeStatutJuridique" id="CodeStatutJuridique" placeholder="" v-model="code_st_juriq">
                          </div>
                          <small v-if="v$.code_st_juriq.$error">{{v$.code_st_juriq.$errors[0].$message}}</small>
                      </div>
                     
                     
                  </div>
                      <div class="row mb-3 mt-3 content-group" >
                          <div class="col">
                          <div class="input-groupe">
                              <label for="AutreStatutJuridique">Autre Statut Juridique <span class="text-danger">*</span></label>
                              <input type="text" name="AutreStatutJuridique" id="AutreStatutJuridique" placeholder="" v-model="autr_st_juriq">
                          </div>
                          <small v-if="v$.autr_st_juriq.$error">{{v$.autr_st_juriq.$errors[0].$message}}</small>
  
                      </div>
                     
                      <div class="col">
                          <div class="input-groupe">
                              <label for="PrincipalSecteurActivite">Principal Secteur Activite <span class="text-danger">*</span></label>
                              <input type="text" name="PrincipalSecteurActivite" id="PrincipalSecteurActivite" placeholder="" v-model="prin_sect_acti">
                          </div>
                          <small v-if="v$.prin_sect_acti.$error">{{v$.prin_sect_acti.$errors[0].$message}}</small>
                      </div>
                      <div class="col">
                          <div class="input-groupe">
                              <label for="ListeSousSecteurActivite">Liste Sous Secteur Activite <span class="text-danger">*</span></label>
                              <input type="text" name="ListeSousSecteurActivite" id="ListeSousSecteurActivite" placeholder="" v-model="list_sous_sect_act">
                          </div>
                          <small v-if="v$.list_sous_sect_act.$error">{{v$.list_sous_sect_act.$errors[0].$message}}</small>
                      </div>
                     
                  </div>
                  <div class="row mb-3 mt-3 content-group" >  
                      <div class="col">
                          <div class="input-groupe">
                              <label for="AnneeProduction1">Année Production 1 <span class="text-danger">*</span></label>
                              <select id="utexi_sexe" name="utexi[sexe]" class="form-select"  v-model="an_prod_1">
                                  <option disabled selected >--- Date ---</option>
                                  <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                              </select>
                             
                          </div>
                          <small v-if="v$.an_prod_1.$error">{{v$.an_prod_1.$errors[0].$message}}</small>
                      </div>
                      <div class="col">
                          <div class="input-groupe">
                              <label for="PersonnelPermanentFemme">Personnel Permanent Femme <span class="text-danger">*</span></label>
                              <input type="text" name="PersonnelPermanentFemme" id="PersonnelPermanentFemme" placeholder="" v-model="pers_per_femm">
                          </div>
                          <small v-if="v$.pers_per_femm.$error">{{v$.pers_per_femm.$errors[0].$message}}</small>
                      </div>
                      <div class="col">
                          <div class="input-groupe">
                              <label for="PersonnelPermanentHomme">Personnel Permanent Homme <span class="text-danger">*</span></label>
                              <input type="text" name="PersonnelPermanentHomme" id="PersonnelPermanentHomme" placeholder="" v-model="pers_per_homm">
                          </div>
                          <small v-if="v$.pers_per_homm.$error">{{v$.pers_per_homm.$errors[0].$message}}</small>
                      </div>
                  </div>
                  <div class="row mb-3 mt-3 content-group" >
                     
                    
                      <div class="col">
                          <div class="input-groupe">
                              <label for="PersonnelTemporaireFemme">Personnel Temporaire Femme <span class="text-danger">*</span></label>
                              <input type="text" name="PersonnelTemporaireFemme" id="PersonnelTemporaireFemme" placeholder="" v-model="pers_temp_femm">
                             
                          </div>
                          <small v-if="v$.pers_temp_femm.$error">{{v$.pers_temp_femm.$errors[0].$message}}</small>
  
                      </div>
                      <div class="col">
                          <div class="input-groupe">
                              <label for="PersonnelTemporaireHomme">Personnel Temporaire Homme <span class="text-danger">*</span></label>
                              <input type="text" name="PersonnelTemporaireHomme" id="PersonnelTemporaireHomme" placeholder="" v-model="pers_temp_homm">
                          </div>
                          <small v-if="v$.pers_temp_homm.$error">{{v$.pers_temp_homm.$errors[0].$message}}</small>
                      </div>
                     
                      <div class="col">
                          <div class="input-groupe">
                              <label for="ChiffreAffaire1">Chiffre Affaire 1 <span class="text-danger">*</span></label>
                              <input type="text" name="ChiffreAffaire1" id="ChiffreAffaire1" placeholder="" v-model="ch_aff_1">
                          </div>
                          <small v-if="v$.ch_aff_1.$error">{{v$.ch_aff_1.$errors[0].$message}}</small>
                      </div>
                  </div>
                      <div class="row mb-3 mt-3 content-group" >
                       
                     
                      
                      <div class="col">
                          <div class="input-groupe">
                              <label for="ChiffreAffaire2">ChiffreAffaire 2 <span class="text-danger">*</span></label>
                              <input type="text" name="ChiffreAffaire2" id="ChiffreAffaire2" placeholder="" v-model="ch_aff_2">
                          </div>
                          <small v-if="v$.ch_aff_2.$error">{{v$.ch_aff_2.$errors[0].$message}}</small>
                      </div>
                      <div class="col">
                          <div class="input-groupe">
                              <label for="GroupeFililale">Groupe Fililale <span class="text-danger">*</span></label>
                              <input type="text" name="GroupeFililale" id="GroupeFililale" placeholder="" v-model="grpe_fililale">
                          </div>
                          <small v-if="v$.grpe_fililale.$error">{{v$.grpe_fililale.$errors[0].$message}}</small>
                      </div>
                          <div class="col">
                          <div class="input-groupe">
                              <label for="NationaliteGroupe">Nationalité Groupe <span class="text-danger">*</span></label>
                              <select id="utexi_sexe" name="utexi[sexe]" class="form-select"  v-model="an_prod_1">
                                  <option disabled selected >--- Nationnalite ---</option>
                                  <option v-for="country in countrie" :key="country.id" :value="year">{{ year }}</option>
                              </select>
                              <input type="text" name="NationaliteGroupe" id="NationaliteGroupe" placeholder="" v-model="nationalite_groupe">
                          </div>
                          <small v-if="v$.nationalite_groupe.$error">{{v$.nationalite_groupe.$errors[0].$message}}</small>
                      </div>
                     
                  </div>
                  <div class="row mb-3 mt-3 content-group" >
                    <div class="col">
                          <div class="input-groupe">
                              <label for="CapitalSocial">Capital Social <span class="text-danger">*</span></label>
                              <input type="text" name="CapitalSocial" id="CapitalSocial" placeholder="" v-model="capital_social">
                              
                          </div>
                          <small v-if="v$.capital_social.$error">{{v$.capital_social.$errors[0].$message}}</small>
                      </div>
                    <div class="col">
                          <div class="input-groupe">
                              <label for="NumeroRccm">Numéro Rccm <span class="text-danger">*</span></label>
                              <input type="text" name="NumeroRccm" id="NumeroRccm" placeholder="" v-model="nbre_rccm">
                          </div>
                          <small v-if="v$.nbre_rccm.$error">{{v$.nbre_rccm.$errors[0].$message}}</small>
                      </div>
                    
                      <div class="col">
                          <div class="input-groupe">
                              <label for="NumeroNif">Numero Nif <span class="text-danger">*</span></label>
                              <input type="text" name="NumeroNif" id="NumeroNif" placeholder="" v-model="nbre_nif">
                          </div>
                          <small v-if="v$.nbre_nif.$error">{{v$.nbre_nif.$errors[0].$message}}</small>
                      </div>
                    
                   
                  </div>
                 
                  </div>
                  <!-- fin infos activite -->
                  <div class="btnForm py-3 flex items-center justify-content-end">
                    <button class="btnLogin" @click.prevent="nextStep">Suivant</button>
         
        </div>
              </form>
          </div>
  
      </div>
  
  
      
      </div>
  
      <div v-if="currentStep === 2">
        <!-- Étape 2 : Champ Mot de passe -->
        <div class="ImageHeader">
          <!-- ... Votre code pour l'étape 2 ... -->
          <form>
            <small v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</small>
            <input type="password" name="password" placeholder="Mot de passe" v-model="password" />
            <button @click.prevent="prevStep">Précédent</button>
            <button @click.prevent="nextStep">Suivant</button>
          </form>
        </div>
      </div>
  
      <div v-if="currentStep === 3">
        <!-- Étape finale : Résumé et soumission -->
        <div class="ImageHeader">
          <!-- ... Votre code pour l'étape finale ... -->
          <div>
            <h2>Résumé</h2>
            <p>Email: {{ email }}</p>
            <p>Prenom: {{ prenom }}</p>
            <p>Nom: {{ nom }}</p>
            <p>Mot de passe: *****</p>
            <button @click.prevent="prevStep">Précédent</button>
            <button @click.prevent="submit">Connecter</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import useVuelidate from '@vuelidate/core';
  import { require, lgmin, lgmax, ValidEmail } from '@/functions/rules';
  
  export default {
    name: 'Componentlogin',
    data() {
      return {
      //  etape 1
      region: "", // Propriété pour stocker la valeur sélectionnée dans la liste déroulante de région
      commune: "",
      ville:"", // Propriété pour stocker la valeur entrée dans le champ de commune
      sous_prefecture: "", // Propriété pour stocker la valeur sélectionnée dans la liste déroulante de sous-prefecture
      localisation: "", // Propriété pour stocker la valeur entrée dans le champ de localisation
      sigle_mpme: "", // Propriété pour stocker la valeur entrée dans le champ de SigleMpme
      nom: "", // Propriété pour stocker la valeur entrée dans le champ de nom
      quartier: "", // Propriété pour stocker la valeur sélectionnée dans la liste déroulante de quartier
      rue: "", // Propriété pour stocker la valeur entrée dans le champ de Rue
      boite_postale: "", // Propriété pour stocker la valeur entrée dans le champ de Boîte Postale
      tel_what: "", //
      tel_second: "", // Propriété pour stocker la valeur entrée dans le champ de Numéro Téléphone Secondaire
      email: "", // Propriété pour stocker la valeur entrée dans le champ d'Adresse Email
      url: "", // Propriété pour stocker la valeur entrée dans le champ de Site Web
      an_creation: "", // Propriété pour stocker la valeur entrée dans le champ d'Année de Création
      an_entre_acti: "", // Propriété pour stocker la valeur entrée dans le champ d'Année d'Entrée d'Activité
      code_st_juriq: "", // Propriété pour stocker la valeur entrée dans le champ de Code Statut Juridique
      autr_st_juriq: "", // Propriété pour stocker la valeur entrée dans le champ d'Autre Statut Juridique
      prin_sect_acti: "", // Propriété pour stocker la valeur entrée dans le champ de Principal Secteur Activité
      list_sous_sect_act: "", // Propriété pour stocker la valeur entrée dans le champ de Liste Sous Secteur Activité
      an_prod_1: "", // Propriété pour stocker la valeur entrée dans le champ d'Année de Production 1
      pers_per_femm: "", // Propriété pour stocker la valeur entrée dans le champ de Personnel Permanent Femme
      pers_per_homm: "", // Propriété pour stocker la valeur entrée dans le champ de Personnel Permanent Homme
      pers_temp_femm: "", // Propriété pour stocker la valeur entrée dans le champ de Personnel Temporaire Femme
      pers_temp_homm: "", // Propriété pour stocker la valeur entrée dans le champ de Personnel Temporaire Homme
      ch_aff_1: "", // Propriété pour stocker la valeur entrée dans le champ de Chiffre Affaire 1
      ch_aff_2: "", // Propriété pour stocker la valeur entrée dans le champ de Chiffre Affaire 2
      grpe_fililale: "", // Propriété pour stocker la valeur entrée dans le champ de Groupe Fililale
      nationalite_groupe: "", // Propriété pour stocker la valeur entrée dans le champ de Nationalité Groupe
      capital_social: "", // Propriété pour stocker la valeur entrée dans le champ de Capital Social
      nbre_rccm: "", // Propriété pour stocker la valeur entrée dans le champ de Numéro Rccm
      nbre_nif: "", // Propriété pour stocker la valeur entrée dans le champ de Numero Nif
  
  
        v$: useVuelidate(),
        erreur: '',
        connect: '',
        currentStep: 1, // Étape actuelle, commence à 1
        totalSteps: 3, // Nombre total d'étapes dans le formulaire
        years: [],
        countrie:'',
        selectedYear: null,
      };
    },
    validations: {
          region: { require } , // Exemple de validation pour la région (obligatoire)
          commune: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  },
          ville:{require , lgmin:lgmin(3) , lgmax:lgmax(20)},
          sous_prefecture: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour la sous-prefecture (obligatoire)
          localisation: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour la localisation (obligatoire)
          sigle_mpme: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le SigleMpme (obligatoire)
          nom: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le nom (obligatoire)
          quartier: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le quartier (obligatoire)
          rue: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour la rue (obligatoire)
          boite_postale: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour la boîte postale (obligatoire)
          tel_what: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le numéro WhatsApp (obligatoire)
          tel_second: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le numéro de téléphone secondaire (obligatoire)
          email: { require , ValidEmail }, // Exemple de validation pour l'adresse email (obligatoire et doit être un email valide)
          url: { require  , url: true }, // Exemple de validation pour le site web (obligatoire et doit être une URL valide)
          an_creation: { require , lgmin:lgmin(4) , lgmax:lgmax(4)  }, // Exemple de validation pour l'année de création (obligatoire)
          an_entre_acti: { require , lgmin:lgmin(4) , lgmax:lgmax(4)  }, // Exemple de validation pour l'année d'entrée d'activité (obligatoire)
          code_st_juriq: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le code statut juridique (obligatoire)
          autr_st_juriq: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour l'autre statut juridique (obligatoire)
          prin_sect_acti: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le principal secteur d'activité (obligatoire)
          list_sous_sect_act: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour la liste des sous secteurs d'activité (obligatoire)
          an_prod_1: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour l'année de production 1 (obligatoire)
          pers_per_femm: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le personnel permanent femme (obligatoire)
          pers_per_homm: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le personnel permanent homme (obligatoire)
          pers_temp_femm: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le personnel temporaire femme (obligatoire)
          pers_temp_homm: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le personnel temporaire homme (obligatoire)
          ch_aff_1: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le chiffre d'affaire 1 (obligatoire)
          ch_aff_2: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le chiffre d'affaire 2 (obligatoire)
          grpe_fililale: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le groupe filiale (obligatoire)
          nationalite_groupe: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour la nationalité du groupe (obligatoire)
          capital_social: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le capital social (obligatoire)
          nbre_rccm: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le numéro RCCM (obligatoire)
          nbre_nif: { require , lgmin:lgmin(3) , lgmax:lgmax(20)  }, // Exemple de validation pour le numéro NIF (obligatoire)
        },
    methods: {
      // Méthode pour passer à l'étape suivante
      nextStep() {
        this.v$.$touch()
        // Effectuez les validations spécifiques à l'étape actuelle ici
        if (this.currentStep === 1 && 
         (
        this.v$.region.$error ||
        this.v$.commune.$error ||
        this.v$.ville.$error ||
        this.v$.sous_prefecture.$error ||
        this.v$.localisation.$error ||
        this.v$.sigle_mpme.$error ||
        this.v$.nom.$error ||
        this.v$.quartier.$error ||
        this.v$.rue.$error ||
        this.v$.boite_postale.$error ||
        this.v$.tel_what.$error ||
        this.v$.tel_second.$error ||
        this.v$.email.$error ||
        this.v$.url.$error  ||
        this.v$.an_creation.$error ||
        this.v$.an_entre_acti.$error ||
        this.v$.code_st_juriq.$error ||
        this.v$.autr_st_juriq.$error ||
        this.v$.prin_sect_acti.$error ||
        this.v$.list_sous_sect_act.$error ||
        this.v$.an_prod_1.$error ||
        this.v$.pers_per_femm.$error ||
        this.v$.pers_per_homm.$error ||
        this.v$.pers_temp_femm.$error ||
        this.v$.pers_temp_homm.$error ||
        this.v$.ch_aff_1.$error ||
        this.v$.ch_aff_2.$error ||
        this.v$.grpe_fililale.$error ||
        this.v$.nationalite_groupe.$error ||
        this.v$.capital_social.$error ||
        this.v$.nbre_rccm.$error ||
        this.v$.nbre_nif.$error
      )
        
        ) {
          return; // Arrêtez l'avancement si la validation échoue pour l'étape 1
        }
  
        if (this.currentStep === 2 && this.v$.password.$error) {
          return; // Arrêtez l'avancement si la validation échoue pour l'étape 2
        }
  
        // Passez à l'étape suivante
        this.currentStep++;
      },
  
      // Méthode pour revenir à l'étape précédente
      prevStep() {
        if (this.currentStep > 1) {
          this.currentStep--;
        }
      },
  
      // Méthode pour soumettre le formulaire final
      submit() {
        // Rassemblez les données saisies et soumettez-les au serveur
        // Vous pouvez utiliser this.email, this.password, etc. pour récupérer les données
        let DataUser = {
          email: this.email,
          password: this.password,
        };
  
        // Soumettez les données au serveur ici...
        // Après la soumission, vous pouvez réinitialiser les champs pour le prochain utilisateur
        this.email = '';
        this.password = '';
  
        // Revenez à l'étape initiale
        this.currentStep = 1;
      },
      async fetchDataCountries(){
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const liste = await response.json();
      this.countrie = liste
      console.log('kkkkkk',liste);
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des données :', error);
    }
  
  },
    },
    mounted() {
      // Récupérez l'année en cours
      const currentYear = new Date().getFullYear();
      
      // Générez la liste des années de 1960 à l'année en cours
      for (let year = 1960; year <= currentYear; year++) {
        this.years.push(year);
      }
      
      // Définissez l'année actuelle comme valeur par défaut du champ de sélection
      this.selectedYear = currentYear;
      this.fetchDataCountries()
    },

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
  
  .input-groupe input , .form-select {
      width: 100%;
      border-radius: 0.375rem !important;
      border: 1px solid rgba(55, 65, 81, 1);
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
  
  .btnForm {
   
   max-width: 1140px;
   margin: 20px auto;
   background-color: white;
   padding: 1rem;
   color: black;
   box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);
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
  
  }
  
  </style>