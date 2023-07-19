<template>
    <div class="container-fluid   " data-aos="zoom-out"
        data-aos-delay="100">
        <div class="form-container">
            <p class="title">Enregistrez votre PME dès maintenant</p>
            <p class="text-center">Un seul formulaire pour concrétiser votre projet entrepreneurial et enregistrer votre PME en toute simplicité.</p>
            <form class="form">
                <!-- debut infos genral -->
                <div class="content">
                    <p class="titre">INFORMATIONS SUR LES PRIX ET LES DIRIGEANTS</p>
                    <div class="row mb-3 mt-3 content-group" >
                        <div class="col">
                        <div class="input-groupe">
                            <label for="MpmeBourse">Mpme Bourse <span class="text-danger">*</span></label>
                            <input type="text" name="MpmeBourse" id="MpmeBourse" placeholder="">
                            
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="NomBourse">Nom Bourse <span class="text-danger">*</span></label>
                            <input type="text" name="NomBourse" id="NomBourse" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="RecptionPrix">Recption Prix <span class="text-danger">*</span></label>
                            <input type="text" name="RecptionPrix" id="RecptionPrix" placeholder="">
                        </div>
                    </div>
                   
                </div>
                <div class="row mb-3 mt-3 content-group" >
                   
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PrincipalPrix">Principal Prix<span class="text-danger">*</span></label>
                            <input type="text" name="PrincipalPrix" id="PrincipalPrix" placeholder="">
                           
                        </div>
                    </div>
                  
                    <div class="col">
                        <div class="input-groupe">
                            <label for="AnneePrixPrincipal">Année Prix Principal <span class="text-danger">*</span></label>
                            <input type="text" name="AnneePrixPrincipal" id="AnneePrixPrincipal" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="TitreDirigeant">Titre Dirigeant <span class="text-danger">*</span></label>
                            <input type="text" name="TitreDirigeant" id="TitreDirigeant" placeholder="">
                        </div>
                    </div>
                </div>
                <div class="row mb-3 mt-3 content-group" >
                    <div class="col">
                        <div class="input-groupe">
                            <label for="NomDirigeant">Nom Dirigeant <span class="text-danger">*</span></label>
                            <input type="text" name="NomDirigeant" id="NomDirigeant" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PrenomDirigeant">Prénom Dirigeant <span class="text-danger">*</span></label>
                            <input type="text" name="PrenomDirigeant" id="PrenomDirigeant" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="SexeDirigeant">Sexe Dirigeant <span class="text-danger">*</span></label>
                            <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                                <option disabled selected >--- sexe ---</option>
                                <option value="conakry">Masculin</option>
                                <option value="mali">Féminin</option>
                            </select>
                        </div>
                    </div>
                 
                </div>
                <div class="row mb-3 mt-3 content-group" >
                     
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PaysDirigeant">Pays Dirigeant <span class="text-danger">*</span></label>
                            <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                                <option disabled selected >--- pays ---</option>
                                <option value="conakry">Masculin</option>
                                <option value="mali">Féminin</option>
                            </select>
                            
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="input-groupe">
                            <label for="AnneeNaissanceDirigeant">Année Naissance Dirigeant <span class="text-danger">*</span></label>
                            <input type="AnneeNaissanceDirigeant" name="AnneeNaissanceDirigeant" id="AnneeNaissanceDirigeant" placeholder="">
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="input-groupe">
                            <label for="DirigeantProprietaire">Dirigeant Proprietaire <span class="text-danger">*</span></label>
                            <input type="DirigeantProprietaire" name="DirigeantProprietaire" id="DirigeantProprietaire" placeholder="">
                        </div>
                    </div>
            
                  
                </div>
                <div class="row mb-3 mt-3 content-group" >
                    <div class="col">
                        <div class="input-groupe">
                            <label for="TitreProprietaire">Titre Proprietaire <span class="text-danger">*</span></label>
                            <input type="text" name="TitreProprietaire" id="TitreProprietaire" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="NomProprietaire">Nom Proprietaire <span class="text-danger">*</span></label>
                            <input type="text" name="NomProprietaire" id="NomProprietaire" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PrenomProprietaire">Prénom Proprietaire <span class="text-danger">*</span></label>
                            <input type="text" name="PrenomProprietaire" id="PrenomProprietaire" placeholder="">
                        </div>
                    </div>
                 
                </div>
                <div class="row mb-3 mt-3 content-group" >
                     
                    <div class="col">
                        <div class="input-groupe">
                            <label for="SexeProprietaire">Sexe Proprietaire <span class="text-danger">*</span></label>
                            <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                                <option disabled selected >--- sexe ---</option>
                                <option value="conakry">Masculin</option>
                                <option value="mali">Féminin</option>
                            </select>
                            
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PaysProprietaire">Pays Proprietaire <span class="text-danger">*</span></label>
                            <select id="utexi_sexe" name="utexi[sexe]" class="form-select">
                                <option disabled selected >--- pays ---</option>
                                <option value="conakry">Masculin</option>
                                <option value="mali">Féminin</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="input-groupe">
                            <label for="AnneeNaissanceProprietaire">Année Naissance Proprietaire <span class="text-danger">*</span></label>
                            <input type="text" name="AnneeNaissanceProprietaire" id="AnneeNaissanceProprietaire" placeholder="">
                        </div>
                    </div>
            
                  
                </div>
               
                </div>
                <!-- fin infos genral -->

                <!-- debut infos entreprise -->

                <div class="content">
                    <p class="titre">INFORMATIONS SUR LE RESEAU ET FINANCEMENT</p>
                    <div class="row mb-3 mt-3 content-group" >
                        <div class="col">
                        <div class="input-groupe">
                            <label for="AppartenanceReseauProfessionnel">Appartenance Reseau Professionnel <span class="text-danger">*</span></label>
                            <input type="text" name="AppartenanceReseauProfessionnel" id="AppartenanceReseauProfessionnel" placeholder="">
                        </div>
                    </div>
                        <div class="col">
                        <div class="input-groupe">
                            <label for="NomReseauProfessionnel">Nom Reseau Professionnel <span class="text-danger">*</span></label>
                            <input type="text" name="NomReseauProfessionnel" id="NomReseauProfessionnel" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="FinancementFondPropre">Financement Fond Propre <span class="text-danger">*</span></label>
                            <input type="text" name="FinancementFondPropre" id="FinancementFondPropre" placeholder="">
                           
                        </div>
                    </div>
                  
                </div>
                <div class="row mb-3 mt-3 content-group" >
                    <div class="col">
                        <div class="input-groupe">
                            <label for="FinancementCreditBancaire">Financement Credit Bancaire <span class="text-danger">*</span></label>
                            <input type="text" name="FinancementCreditBancaire" id="FinancementCreditBancaire" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="FinancementPartenaireExterieurs">Financement Partenaire Exterieurs <span class="text-danger">*</span></label>
                            <input type="text" name="FinancementPartenaireExterieurs" id="FinancementPartenaireExterieurs" placeholder="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="FinancementAutre">Financement Autre <span class="text-danger">*</span></label>
                            <input type="text" name="FinancementAutre" id="FinancementAutre" placeholder="">
                        </div>
                    </div>
                 
                </div>
                <div class="row mb-3 mt-3 content-group" >
                     
                    <div class="col">
                        <div class="input-groupe">
                            <label for="AutreFinancement">Autre Financement <span class="text-danger">*</span></label>
                            <input type="text" name="AutreFinancement" id="AutreFinancement" placeholder="">
                            
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="input-groupe">
                            <label for="DescriptionReseau">Description du Reseau <span class="text-danger">*</span></label>
                            <!-- <input type="email" name="email" id="AdresseEmail" placeholder=""> -->
                            <textarea name="DescriptionReseau" id="DescriptionReseau" cols="80" rows="3"></textarea>
                        </div>
                    </div>
                    
                 
            
                  
                </div>
               
                </div>
                <!-- fin infos entreprise -->

                  <!-- debut infos activite -->
                  <div class="content">
                    <p class="titre">INFORMATIONS SUR LES DIFFICULTES ET SUGGESTIONS</p>
                    <div class="row mb-3 mt-3 content-group" >
                    <div class="col">
                        <div class="input-groupe">
                            <label for="DifficultesRencontrees">Difficultes Rencontrees <span class="text-danger">*</span></label>
                            <input type="text" name="DifficultesRencontrees" id="DifficultesRencontrees" placeholder="">

                        </div>
                    </div>
                  
                    <div class="col">
                        <div class="input-groupe">
                            <label for="SuggestionsProposees">Suggestions Proposees<span class="text-danger">*</span></label>
                            <input type="text" name="SuggestionsProposees" id="SuggestionsProposees" placeholder="">
                           
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