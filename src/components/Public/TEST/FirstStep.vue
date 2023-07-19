<template>
    <div class="container-fluid   " data-aos="zoom-out"
        data-aos-delay="100">
        <div class="form-container">
            <p class="title">Enregistrez votre PME dès maintenant</p>
            <p class="text-center">Un seul formulaire pour concrétiser votre projet entrepreneurial et enregistrer votre PME en toute simplicité.</p>
            <form class="form">
                <!-- debut infos genral -->
                <div class="content">
                    <p class="titre">INFORMATIONS GENERALE</p>
                    <div class="row mb-3 mt-3 content-group" >
                        <div class="col">
                        <div class="input-groupe">
                            <label for="Region">Region <span class="text-danger">*</span></label>
                            <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                                <option disabled selected >--- Regions ---</option>
                                <option value="conakry">Conakry</option>
                                <option value="mali">Mali</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="Commune">Commune <span class="text-danger">*</span></label>
                            <input type="text" name="Commune" id="Commune" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="ville">Ville <span class="text-danger">*</span></label>
                            <input type="text" name="Ville" id="ville" placeholder="">
                        </div>
                    </div>
                   
                </div>
                <div class="row mb-3 mt-3 content-group" >
                   
                    <div class="col">
                        <div class="input-groupe">
                            <label for="Sousprefecture">Sous-Prefecture <span class="text-danger">*</span></label>
                            <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                                <option disabled selected >--- Sous-prefecture ---</option>
                                <option value="tiro">Tiro</option>
                                <option value="albadariah">Albadariah</option>
                                <option value="banama">Banama</option>
                            </select>
                        </div>
                    </div>
                  
                    <div class="col">
                        <div class="input-groupe">
                            <label for="Localisation">Localisation <span class="text-danger">*</span></label>
                            <input type="text" name="Localisation" id="Localisation" placeholder="">
                        </div>
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
                            <input type="text" name="SigleMpme" id="SigleMpme" placeholder="">
                        </div>
                    </div>
                        <div class="col">
                        <div class="input-groupe">
                            <label for="nom">Nom <span class="text-danger">*</span></label>
                            <input type="text" name="nom" id="nom" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="Quartier">Quartier <span class="text-danger">*</span></label>
                            <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                                <option disabled selected >--- Quartiers ---</option>
                                <option value="conakry">Quartier1</option>
                                <option value="mali">Quartier2</option>
                            </select>
                        </div>
                    </div>
                  
                </div>
                <div class="row mb-3 mt-3 content-group" >
                    <div class="col">
                        <div class="input-groupe">
                            <label for="Rue">Rue <span class="text-danger">*</span></label>
                            <input type="text" name="Rue" id="Rue" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="nom">Boîte Postale <span class="text-danger">*</span></label>
                            <input type="text" name="BoitePostale" id="BoitePostale" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="NumeroWhatsApp">Numéro WhatsApp <span class="text-danger">*</span></label>
                            <input type="text" name="NumeroWhatsApp" id="NumeroWhatsApp" placeholder="">
                        </div>
                    </div>
                 
                </div>
                <div class="row mb-3 mt-3 content-group" >
                     
                    <div class="col">
                        <div class="input-groupe">
                            <label for="NumeroTelephoneSecondaire">Numéro Téléphone Secondaire <span class="text-danger">*</span></label>
                            <input type="tel" name="NumeroTelephoneSecondaire" id="NumeroTelephoneSecondaire" placeholder="">
                            
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="input-groupe">
                            <label for="AdresseEmail">Adresse Email <span class="text-danger">*</span></label>
                            <input type="email" name="email" id="AdresseEmail" placeholder="">
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="input-groupe">
                            <label for="SiteWeb">Site Web <span class="text-danger">*</span></label>
                            <input type="url" name="url" id="SiteWeb" placeholder="">
                        </div>
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
                            <input type="text" name="AnneeCreation" id="AnneeCreation" placeholder="">
                            <!-- <Datepicker v-model="picked"
                            :type="'year'"/> -->

                        </div>
                    </div>
                  
                    <div class="col">
                        <div class="input-groupe">
                            <label for="AnneeEntreeActivite">Année Entrée Activité <span class="text-danger">*</span></label>
                            <input type="text" name="AnneeEntreeActivite" id="AnneeEntreeActivite" placeholder="">
                           
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="CodeStatutJuridique">Code Statut Juridique <span class="text-danger">*</span></label>
                            <input type="text" name="CodeStatutJuridique" id="CodeStatutJuridique" placeholder="">
                        </div>
                    </div>
                   
                   
                </div>
                    <div class="row mb-3 mt-3 content-group" >
                        <div class="col">
                        <div class="input-groupe">
                            <label for="AutreStatutJuridique">Autre Statut Juridique <span class="text-danger">*</span></label>
                            <input type="text" name="AutreStatutJuridique" id="AutreStatutJuridique" placeholder="">
                        </div>
                    </div>
                   
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PrincipalSecteurActivite">Principal Secteur Activite <span class="text-danger">*</span></label>
                            <input type="text" name="PrincipalSecteurActivite" id="PrincipalSecteurActivite" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="ListeSousSecteurActivite">Liste Sous Secteur Activite <span class="text-danger">*</span></label>
                            <input type="text" name="ListeSousSecteurActivite" id="ListeSousSecteurActivite" placeholder="">
                        </div>
                    </div>
                   
                </div>
                <div class="row mb-3 mt-3 content-group" >
                   
                    <div class="col">
                        <div class="input-groupe">
                            <label for="Sousprefecture">Sous-Prefecture <span class="text-danger">*</span></label>
                            <input type="text" name="ListeSousSecteurActivite" id="ListeSousSecteurActivite" placeholder="">
                          
                        </div>
                    </div>
                  
                    <div class="col">
                        <div class="input-groupe">
                            <label for="AnneeProduction1">Année Production 1 <span class="text-danger">*</span></label>
                            <input type="text" name="AnneeProduction1" id="AnneeProduction1" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PersonnelPermanentFemme">Personnel Permanent Femme <span class="text-danger">*</span></label>
                            <input type="text" name="PersonnelPermanentFemme" id="PersonnelPermanentFemme" placeholder="">
                        </div>
                    </div>
                </div>
                <div class="row mb-3 mt-3 content-group" >
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PersonnelPermanentHomme">Personnel Permanent Homme <span class="text-danger">*</span></label>
                            <input type="text" name="PersonnelPermanentHomme" id="PersonnelPermanentHomme" placeholder="">
                        </div>
                    </div>
                  
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PersonnelTemporaireFemme">Personnel Temporaire Femme <span class="text-danger">*</span></label>
                            <input type="text" name="PersonnelTemporaireFemme" id="PersonnelTemporaireFemme" placeholder="">
                           
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PersonnelTemporaireHomme">Personnel Temporaire Homme <span class="text-danger">*</span></label>
                            <input type="text" name="PersonnelTemporaireHomme" id="PersonnelTemporaireHomme" placeholder="">
                        </div>
                    </div>
                   
                   
                </div>
                    <div class="row mb-3 mt-3 content-group" >
                        <div class="col">
                        <div class="input-groupe">
                            <label for="AutreStatutJuridique">Autre Statut Juridique <span class="text-danger">*</span></label>
                            <input type="text" name="AutreStatutJuridique" id="AutreStatutJuridique" placeholder="">
                        </div>
                    </div>
                   
                    <div class="col">
                        <div class="input-groupe">
                            <label for="ChiffreAffaire1">Chiffre Affaire 1 <span class="text-danger">*</span></label>
                            <input type="text" name="ChiffreAffaire1" id="ChiffreAffaire1" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="ChiffreAffaire2">ChiffreAffaire 2 <span class="text-danger">*</span></label>
                            <input type="text" name="ChiffreAffaire2" id="ChiffreAffaire2" placeholder="">
                        </div>
                    </div>
                   
                </div>
                <div class="row mb-3 mt-3 content-group" >
                        <div class="col">
                        <div class="input-groupe">
                            <label for="GroupeFililale">Groupe Fililale <span class="text-danger">*</span></label>
                            <input type="text" name="GroupeFililale" id="GroupeFililale" placeholder="">
                        </div>
                    </div>
                        <div class="col">
                        <div class="input-groupe">
                            <label for="NationaliteGroupe">Nationalité Groupe <span class="text-danger">*</span></label>
                            <input type="text" name="NationaliteGroupe" id="NationaliteGroupe" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="CapitalSocial">Capital Social <span class="text-danger">*</span></label>
                            <input type="text" name="CapitalSocial" id="CapitalSocial" placeholder="">
                            
                        </div>
                    </div>
                  
                </div>
                <div class="row mb-3 mt-3 content-group" >
                    <div class="col">
                        <div class="input-groupe">
                            <label for="NumeroRccm">Numéro Rccm <span class="text-danger">*</span></label>
                            <input type="text" name="NumeroRccm" id="NumeroRccm" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="NumeroNif">Numero Nif <span class="text-danger">*</span></label>
                            <input type="text" name="NumeroNif" id="NumeroNif" placeholder="">
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
</style>