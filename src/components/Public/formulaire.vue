<template>
    <div class="generastep" data-aos="zoom-out" data-aos-delay="100">
        <div class="stepper">
            <div class="stepper-progress">
                <div class="stepper-progress-bar" :style="'width:' + stepperProgress "></div>
            </div>

            <div class="stepper-item" :class="{ 'current': currentStep == item, 'success': currentStep > item }" v-for="item in 3" :key="item">
                <div class="stepper-item-counter">
                    <img class="icon-success" src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png" alt="">
                    <span class="number">
                        {{ item }}
                    </span>
                </div>
                <span class="stepper-item-title">
                    Etape {{ item }}
                </span>
            </div>
        </div>
    </div>
    
    <div class="container-fluid" data-aos="zoom-out" data-aos-delay="100" style="margin-top:48px">
        <p class="title">Enregistrez votre PME dès maintenant</p>
        <p class="text-center">Un seul formulaire pour concrétiser votre projet entrepreneurial et enregistrer votre PME en
            toute simplicité.</p>

        <form class="form">
            <!-- Étape 1 -->
            <div v-if="currentStep === 1">
                <div class="form-container">

                    <!-- debut infos genral -->
                    <div class="content">
                        <p class="titre">INFORMATIONS GENERALE</p>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Region">Region <span class="text-danger">*</span></label>
                                    <MazSelect v-model="region" color="secondary" :options="regionOptions" />
                                </div>
                                <small v-if="v$.region.$error">{{ v$.region.$errors[0].$message }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Commune">Commune <span class="text-danger">*</span></label>
                                    <input type="text" name="Commune" id="Commune" placeholder="" v-model="commune">
                                </div>
                                <small v-if="v$.commune.$error">{{ v$.commune.$errors[0].$message }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ville">Ville <span class="text-danger">*</span></label>
                                    <input type="text" name="Ville" id="ville" placeholder="" v-model="ville">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Sousprefecture">Sous-Prefecture <span class="text-danger">*</span></label>
                                    <MazSelect v-model="sous_prefecture" color="secondary"
                                        :options="sous_prefectureOptions" />

                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Localisation">Localisation <span class="text-danger">*</span></label>
                                    <input type="text" name="Localisation" id="Localisation" placeholder=""
                                        v-model="localisation">
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
                                    <input type="text" name="SigleMpme" id="SigleMpme" placeholder="" v-model="sigle_mpme">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="nom">Nom <span class="text-danger">*</span></label>
                                    <input type="text" name="nom" id="nom" placeholder="" v-model="nom">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Quartier">Quartier <span class="text-danger">*</span></label>
                                    <MazSelect v-model="quartier" color="secondary" :options="QuartierOptions" />

                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Rue">Rue <span class="text-danger">*</span></label>
                                    <input type="text" name="Rue" id="Rue" placeholder="" v-model="rue">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="nom">Boîte Postale <span class="text-danger">*</span></label>
                                    <input type="text" name="BoitePostale" id="BoitePostale" placeholder=""
                                        v-model="boite_postale">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroWhatsApp">Numéro WhatsApp <span class="text-danger">*</span></label>
                                    <MazPhoneNumberInput v-model="tel_what" show-code-on-list color="secondary"
                                        :ignored-countries="['AC']" @update="results = $event"
                                        :success="results?.isValid" />


                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroTelephoneSecondaire">Numéro Téléphone Secondaire <span
                                            class="text-danger">*</span></label>
                                    <MazPhoneNumberInput v-model="tel_second" show-code-on-list color="secondary"
                                        :ignored-countries="['AC']" @update="results = $event"
                                        :success="results?.isValid" />


                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AdresseEmail">Adresse Email <span class="text-danger">*</span></label>
                                    <input type="email" name="email" id="AdresseEmail" placeholder="" v-model="email">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="SiteWeb">Site Web <span class="text-danger">*</span></label>
                                    <input type="url" name="url" id="SiteWeb" placeholder="" v-model="url">
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
                                    <MazSelect v-model="an_creation" color="secondary" :options="yearOptions" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AnneeEntreeActivite">Année Entrée Activité <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="an_entre_acti" color="secondary" :options="yearOptions" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="CodeStatutJuridique">Code Statut Juridique <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="code_st_juriq" color="secondary"
                                        :options="StatutJuridiqueOptions" />
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AutreStatutJuridique">Autre Statut Juridique <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="AutreStatutJuridique" id="AutreStatutJuridique" placeholder=""
                                        v-model="autr_st_juriq">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PrincipalSecteurActivite">Principal Secteur Activite <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="prin_sect_acti" color="secondary"
                                        :options="SecteurActiviteOptions" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ListeSousSecteurActivite">Liste Sous Secteur Activite <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="list_sous_sect_act" color="secondary"
                                        :options="SousSecteurActiviteOptions" />
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AnneeProduction1">Année Production 1 <span
                                            class="text-danger">*</span></label>

                                    <MazSelect v-model="an_prod_1" color="secondary" :options="yearOptions" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PersonnelPermanentFemme">Personnel Permanent Femme <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="PersonnelPermanentFemme" id="PersonnelPermanentFemme"
                                        placeholder="" v-model="pers_per_femm">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PersonnelPermanentHomme">Personnel Permanent Homme <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="PersonnelPermanentHomme" id="PersonnelPermanentHomme"
                                        placeholder="" v-model="pers_per_homm">
                                </div>
                            </div>
                        </div>


                        <div class="row mb-3 mt-3 content-group">

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PersonnelTemporaireFemme">Personnel Temporaire Femme <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="PersonnelTemporaireFemme" id="PersonnelTemporaireFemme"
                                        placeholder="" v-model="pers_temp_femm">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PersonnelTemporaireHomme">Personnel Temporaire Homme <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="PersonnelTemporaireHomme" id="PersonnelTemporaireHomme"
                                        placeholder="" v-model="pers_temp_homm">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ChiffreAffaire1">Chiffre Affaire 1 <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="ChiffreAffaire1" id="ChiffreAffaire1" placeholder=""
                                        v-model="ch_aff_1">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">


                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ChiffreAffaire2">ChiffreAffaire 2 <span class="text-danger">*</span></label>
                                    <input type="text" name="ChiffreAffaire2" id="ChiffreAffaire2" placeholder=""
                                        v-model="ch_aff_2">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PartChiffreAffaireExprtation">Part Chiffre Affaire Exportation <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="PartChiffreAffaireExprtation" id="PartChiffreAffaireExprtation"
                                        placeholder="" v-model="part_chiffre_affaire_exprtation">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="GroupeFililale">Groupe Fililale <span class="text-danger">*</span></label>
                                    <input type="text" name="GroupeFililale" id="GroupeFililale" placeholder=""
                                        v-model="grpe_fililale">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NationaliteGroupe">Nationalité Groupe <span
                                            class="text-danger">*</span></label>

                                    <MazSelect v-model="nationalite_groupe" :options="sortedCountryOptions"
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
                                    <label for="CapitalSocial">Capital Social <span class="text-danger">*</span></label>
                                    <input type="text" name="CapitalSocial" id="CapitalSocial" placeholder=""
                                        v-model="capital_social">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroRccm">Numéro Rccm <span class="text-danger">*</span></label>
                                    <input type="text" name="NumeroRccm" id="NumeroRccm" placeholder="" v-model="nbre_rccm">
                                </div>
                            </div>
                        </div>


                        <div class="row mb-3 mt-3 content-group">

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroNif">Numero Nif <span class="text-danger">*</span></label>
                                    <input type="text" name="NumeroNif" id="NumeroNif" placeholder="" v-model="nbre_nif">
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- fin infos activite -->


                </div>
                <div class="btnForm py-3 flex items-center justify-content-end">
                    <button class="btnLogin" @click.prevent="nextStep">Suivant</button>
                </div>
            </div>

            <!-- Étape 2 -->
            <div v-if="currentStep === 2">
                <div class="form-container">

                    <!-- debut infos genral -->
                    <div class="content">
                        <p class="titre">INFORMATIONS SUR LES PRIX ET LES DIRIGEANTS</p>
                        <div class="row mb-3 mt-3 content-group ">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="MpmeBourse">Mpme Bourse <span class="text-danger">*</span></label>
                                    <MazSelect v-model="mpmeBourse" color="secondary" :options="choix" />

                                </div>
                                 <small v-if="v$.mpmeBourse.$error">{{ v$.mpmeBourse.$errors[0].$message }}</small>
                            </div>
                            <div class="col" v-if="mpmeBourse === 'oui'">
                                <div class="input-groupe">
                                    <label for="NomBourse">Nom Bourse <span class="text-danger">*</span></label>
                                    <MazSelect v-model="nomBourse" color="secondary" :options="BourseOptions" />

                                </div>
                                 <small v-if="v$.nomBourse.$error">{{ v$.nomBourse.$errors[0].$message }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="RecptionPrix">Réception Prix <span class="text-danger">*</span></label>
                                    <MazSelect v-model="receptionPrix" color="secondary" :options="choix" />

                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col" v-if="receptionPrix === 'oui'">
                                <div class="input-groupe">
                                    <label for="PrincipalPrix">Principal Prix<span class="text-danger">*</span></label>
                                    <input type="text" name="PrincipalPrix" id="PrincipalPrix" placeholder=""
                                        v-model="principalPrix">
                                </div>
                            </div>
                            <div class="col" v-if="receptionPrix === 'oui'">
                                <div class="input-groupe">
                                    <label for="AnneePrixPrincipal">Année Prix Principal <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="anneePrixPrincipal" color="secondary" :options="yearOptions" />

                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="TitreDirigeant">Titre Dirigeant <span class="text-danger">*</span></label>
                                    <MazSelect v-model="titreDirigeant" color="secondary" :options="titre" />

                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NomDirigeant">Nom Dirigeant <span class="text-danger">*</span></label>
                                    <input type="text" name="NomDirigeant" id="NomDirigeant" placeholder=""
                                        v-model="nomDirigeant">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PrenomDirigeant">Prénom Dirigeant <span class="text-danger">*</span></label>
                                    <input type="text" name="PrenomDirigeant" id="PrenomDirigeant" placeholder=""
                                        v-model="prenomDirigeant">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="SexeDirigeant">Sexe Dirigeant <span class="text-danger">*</span></label>
                                    <MazSelect v-model="sexeDirigeant" color="secondary" :options="sexes" />

                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PaysDirigeant">Pays Dirigeant <span class="text-danger">*</span></label>
                                    <MazSelect v-model="paysDirigeant" :options="sortedCountryOptions" v-slot="{ option }"
                                        search color="secondary">
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
                                    <label for="AnneeNaissanceDirigeant">Année Naissance Dirigeant <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="AnneeNaissanceDirigeant" id="AnneeNaissanceDirigeant"
                                        placeholder="" v-model="anneeNaissanceDirigeant">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="DirigeantProprietaire">Dirigeant Proprietaire <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="dirigeantProprietaire" color="secondary" :options="choix" />
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="TitreProprietaire">Titre Proprietaire <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="titreProprietaire" color="secondary" :options="titre" />

                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NomProprietaire">Nom Proprietaire <span class="text-danger">*</span></label>
                                    <input type="text" name="NomProprietaire" id="NomProprietaire" placeholder=""
                                        v-model="nomProprietaire">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PrenomProprietaire">Prénom Proprietaire <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="PrenomProprietaire" id="PrenomProprietaire" placeholder=""
                                        v-model="prenomProprietaire">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="SexeProprietaire">Sexe Proprietaire <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="sexeProprietaire" color="secondary" :options="sexes" />

                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PaysProprietaire">Pays Proprietaire <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="paysProprietaire" :options="sortedCountryOptions"
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
                                    <input type="text" name="AnneeNaissanceProprietaire" id="AnneeNaissanceProprietaire"
                                        placeholder="" v-model="anneeNaissanceProprietaire">
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
                                    <MazSelect v-model="appartenanceReseauProfessionnel" color="secondary"
                                        :options="choix" />


                                </div>
                            </div>
                            <div class="col" v-if="appartenanceReseauProfessionnel === 'oui'">
                                <div class="input-groupe">
                                    <label for="NomReseauProfessionnel">Nom Reseau Professionnel <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="NomReseauProfessionnel" id="NomReseauProfessionnel"
                                        placeholder="" v-model="nomReseauProfessionnel">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="FinancementFondPropre">Financement Fond Propre <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="financementFondPropre" color="secondary" :options="choix" />


                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="FinancementCreditBancaire">Financement Credit Bancaire <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="financementCreditBancaire" color="secondary" :options="choix" />


                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="FinancementPartenaireExterieurs">Financement Partenaire Exterieurs <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="financementPartenaireExterieurs" color="secondary"
                                        :options="choix" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="FinancementAutre">Financement Autre <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="financementAutre" color="secondary" :options="choix" />

                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AutreFinancement">Autre Financement <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="AutreFinancement" id="AutreFinancement" placeholder=""
                                        v-model="autreFinancement">
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3 mt-3 content-group" v-if="appartenanceReseauProfessionnel === 'oui'">
                            
                            <div class="col" >
                                <div class="input-groupe">
                                    <label for="DescriptionReseau">Description du Reseau <span
                                            class="text-danger">*</span></label>
                                            <MazTextarea v-model="descriptionReseau" name="comment" id="comment"
                                        color="secondary" />
                                   
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
                                    <label for="DifficultesRencontrees">Difficultes Rencontrees <span
                                            class="text-danger">*</span></label>
                                    <MazTextarea v-model="difficultesRencontrees" name="comment" id="comment"
                                        color="secondary" />


                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="SuggestionsProposees">Suggestions Proposees<span
                                            class="text-danger">*</span></label>
                                    <MazTextarea v-model="suggestionsProposees" name="comment" id="comment"
                                        color="secondary" />

                                </div>
                            </div>
                        </div>


                    </div>
                    <!-- fin infos activite -->


                </div>
                <div class="btnForm py-3 flex items-center justify-content-between">
                    <button class="btnLogin" @click.prevent="prevStep">Précédent</button>
                    <button class="btnLogin" @click.prevent="nextStep">Suivant</button>
                </div>
            </div>

            <!-- Étape 3 -->
            <div v-if="currentStep === 3">
                <div class="form-container">
                     <!-- debut infos genral -->
              <div class="content">
                  <p class="titre">INFORMATIONS SUR LES PARTENARIATS ET BESIONS</p>
                  <div class="row mb-3 mt-3 content-group">
  <div class="col">
    <div class="input-groupe">
      <label for="ExistanceActionnaire">Existance Actionnaire <span class="text-danger">*</span></label>
      <MazSelect v-model="existanceActionnaire"  color="secondary" :options="choix" />

     
    </div>
  </div>
  <div class="col">
    <div class="input-groupe">
      <label for="ExistanceConseilAdministration">Existance Conseil Administration <span class="text-danger">*</span></label>
      <MazSelect v-model="existanceConseilAdministration"  color="secondary" :options="choix" />
    </div>
  </div>
  <div class="col">
    <div class="input-groupe">
      <label for="ExistancePartenariat">Existance Partenariat <span class="text-danger">*</span></label>
      <MazSelect v-model="existancePartenariat"  color="secondary" :options="choix" />
    </div>
  </div>
</div>
<div class="row mb-3 mt-3 content-group">
  <div class="col">
    <div class="input-groupe">
      <label for="PartenariatTechnique">Partenariat Technique<span class="text-danger">*</span></label>
      <MazSelect v-model="partenariatTechnique"  color="secondary" :options="choix" />


    </div>
  </div>
  <div class="col">
    <div class="input-groupe">
      <label for="PartenariatFinancier">Partenariat Financier <span class="text-danger">*</span></label>
      <MazSelect v-model="partenariatFinancier"  color="secondary" :options="choix" />

    
    </div>
  </div>
  <div class="col">
    <div class="input-groupe">
      <label for="PartenariatCommercial">Partenariat Commercial <span class="text-danger">*</span></label>
      <MazSelect v-model="partenariatCommercial"  color="secondary" :options="choix" />

     
    </div>
  </div>
</div>
<div class="row mb-3 mt-3 content-group">
  <div class="col">
    <div class="input-groupe">
      <label for="PartenariatAutre">Partenariat Autre <span class="text-danger">*</span></label>
      <MazSelect v-model="partenariatAutre"  color="secondary" :options="choix" />

     
    </div>
  </div>
  <div class="col">
    <div class="input-groupe">
      <label for="AutrePartenariat">Autre Partenariat <span class="text-danger">*</span></label>
      <MazSelect v-model="autrePartenariat"  color="secondary" :options="choix" />

     
    </div>
  </div>
  <div class="col">
    <div class="input-groupe">
      <label for="BesoinPartenaire">Besoin Partenaire <span class="text-danger">*</span></label>
      <MazSelect v-model="besoinPartenaire"  color="secondary" :options="choix" />
      
    </div>
  </div>
</div>


<div class="row mb-3 mt-3 content-group">
  <div class="col">
    <div class="input-groupe">
      <label for="BesoinPartenaireTechnique">Besoin Partenaire Technique<span class="text-danger">*</span></label>
      <MazSelect v-model="besoinPartenaireTechnique"  color="secondary" :options="choix" />
     
    </div>
  </div>

  <div class="col">
    <div class="input-groupe">
      <label for="BesoinPartenaireFinancier">Besoin Partenaire Financier <span class="text-danger">*</span></label>
      <MazSelect v-model="besoinPartenaireFinancier"  color="secondary" :options="choix" />

     
    </div>
  </div>

  <div class="col">
    <div class="input-groupe">
      <label for="BesoinPartenaireCommercial">Besoin Partenaire Commercial <span class="text-danger">*</span></label>
      <MazSelect v-model="besoinPartenaireCommercial"  color="secondary" :options="choix" />

     
    </div>
  </div>
</div>


    <!-- Groupe 3 -->
    
<div class="row mb-3 mt-3 content-group">
  <div class="col">
    <div class="input-groupe">
      <label for="BesoinPartenaireAutre">Besoin Partenaire Autre <span class="text-danger">*</span></label>
      <MazSelect v-model="besoinPartenaireAutre"  color="secondary" :options="choix" />

    
    </div>
  </div>
  <div class="col">
    <div class="input-groupe">
      <label for="AutreBesoinPartenaire">Autre Besoin Partenaire <span class="text-danger">*</span></label>
      <MazSelect v-model="autreBesoinPartenaire"  color="secondary" :options="choix" />

      
    </div>
  </div>
</div>

              
             
              </div>
              <!-- fin infos genral -->

              <!-- debut infos entreprise -->

              <div class="content">
                  <p class="titre">INFORMATIONS SUR LE REPONDANT</p>
     <div class="row mb-3 mt-3 content-group">
      <div class="col">
        <div class="input-groupe">
          <label for="TitreRepondant">Titre Repondant <span class="text-danger">*</span></label>
      <MazSelect v-model="titreRepondant"  color="secondary" :options="titre" />

        
        </div>
      </div>

      <div class="col">
        <div class="input-groupe">
          <label for="NomRepondant">Nom Repondant <span class="text-danger">*</span></label>
          <input v-model="nomRepondant" type="text" name="NomRepondant" id="NomRepondant" placeholder="">
        </div>
      </div>

      <div class="col">
        <div class="input-groupe">
          <label for="FonctionRepondant">Fonction Repondant <span class="text-danger">*</span></label>
          <input v-model="fonctionRepondant" type="text" name="FonctionRepondant" id="FonctionRepondant" placeholder="">
        </div>
      </div>
    </div>
    <div class="row mb-3 mt-3 content-group">
      <div class="col">
        <div class="input-groupe">
          <label for="AdresseRepondant">Adresse du Repondant<span class="text-danger">*</span></label>
          <input v-model="adresseRepondant" type="text" name="AdresseRepondant" id="AdresseRepondant" placeholder="">
        </div>
      </div>

      <div class="col">
        <div class="input-groupe">
          <label for="VilleRepondant">Ville du Repondant <span class="text-danger">*</span></label>
          <input v-model="villeRepondant" type="text" name="VilleRepondant" id="VilleRepondant" placeholder="">
        </div>
      </div>

      <div class="col">
        <div class="input-groupe">
          <label for="TelephoneWhatsAppRepondant">Téléphone WhatsApp du Repondant <span class="text-danger">*</span></label>
          <MazPhoneNumberInput v-model="telephoneWhatsAppRepondant" show-code-on-list color="secondary" defaultCountryCode="GN"
                  :ignored-countries="['AC']"   @update="results = $event" :success="results?.isValid" />

       
        </div>
      </div>
    </div>

    <div class="row mb-3 mt-3 content-group">
      <div class="col">
        <div class="input-groupe">
          <label for="Contacter">Contacter<span class="text-danger">*</span></label>
          <MazSelect v-model="contacter"  color="secondary" :options="choix" />
         
        </div>
      </div>

    
    </div>

  


             
              </div>
              <!-- fin infos entreprise -->

                <!-- debut infos activite -->
                <div class="content">
                  <p class="titre">INFORMATIONS GEOGRAPHIQUES</p>
                  <div class="row mb-3 mt-3 content-group">
  <div class="col">
    <div class="input-groupe">
      <label for="LienGoogleMapMpme">Lien Google Map Mpme <span class="text-danger">*</span></label>
      <input v-model="lienGoogleMapMpme" type="text" name="LienGoogleMapMpme" id="LienGoogleMapMpme" placeholder="">
    </div>
  </div>

  <div class="col">
    <div class="input-groupe">
      <label for="LatitudeMpme">Latitude Mpme<span class="text-danger">*</span></label>
      <input v-model="latitudeMpme" type="text" name="LatitudeMpme" id="LatitudeMpme" placeholder="">
    </div>
  </div>
  
  <div class="col">
    <div class="input-groupe">
      <label for="LongitudeMpme">Longitude Mpme<span class="text-danger">*</span></label>
      <input v-model="longitudeMpme" type="text" name="LongitudeMpme" id="LongitudeMpme" placeholder="">
    </div>
  </div>
</div>

<div class="row mb-3 mt-3 content-group">
  <div class="col">
    <div class="input-groupe">
      <label for="AltitudeMpme">Altitude Mpme <span class="text-danger">*</span></label>
      <input v-model="altitudeMpme" type="text" name="AltitudeMpme" id="AltitudeMpme" placeholder="">
    </div>
  </div>

  <div class="col">
    <div class="input-groupe">
      <label for="PrecisionGPSMpme">Precision GPS Mpme<span class="text-danger">*</span></label>
      <input v-model="precisionGPSMpme" type="text" name="PrecisionGPSMpme" id="PrecisionGPSMpme" placeholder="">
    </div>
  </div>

  <div class="col">
    <div class="input-groupe">
      <label for="OrigineDonnees">Origine Donnees<span class="text-danger">*</span></label>
      <input v-model="origineDonnees" type="text" name="OrigineDonnees" id="OrigineDonnees" placeholder="">
    </div>
  </div>
</div>

                
             
              </div>
              <!-- fin infos activite -->


                </div>
                
                <div class="btnForm py-3 flex items-center justify-content-between">
                        <button class="btnLogin" @click.prevent="prevStep">Précédent</button>
                        <button class="btnLogin" @click.prevent="submit">Terminer</button>
                </div>
            </div>
        </form>
    </div>
</template>
  
<script>

import axios from '@/lib/axiosConfig.js'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import useVuelidate from '@vuelidate/core';     
import { require, lgmin, lgmax   } from '@/functions/rules';

export default {
    name: 'Componentlogin',
    computed: {

        loggedInUser() {
            return this.$store.getters['user/loggedInUser'];
        },
        stepperProgress() {
      return ( 100 / 2 ) * ( this.currentStep - 1 ) + '%'
    }

    },
    data() {
        return {
            currentStep: 1,
            sortedCountryOptions: [],
            regionOptions: [],
            prefectureOptions: [],
            sous_prefectureOptions: [],
            sous_prefectureOptions: [],
            SecteurActiviteOptions: [],
            SousSecteurActiviteOptions: [],
            StatutJuridiqueOptions: [],
            BourseOptions:[],
            years: [],
            yearOptions: [],
            userData: '',
            sexes: [
                { label: 'Masculin', value: 'masculin' },
                { label: 'Féminin', value: 'feminin' },
            ],
            choix: [
                { label: 'Oui', value: 'oui' },
                { label: 'Non', value: 'non' },
            ],
            titre: [
                { label: 'Monsieur', value: 'M' },
                { label: 'Madame', value: 'Mme' },
                { label: 'Mademoiselle', value: 'Mlle' },
            ],
            v$:useVuelidate(), 


            region: "",
            commune: "",
            ville: "",
            sous_prefecture: "",
            localisation: "",
            sigle_mpme: "",
            nom: "",
            quartier: "",
            rue: "",
            boite_postale: "",
            tel_what: "",
            tel_second: "",
            email: "",
            url: "",
            an_creation: "",
            an_entre_acti: "",
            code_st_juriq: "",
            autr_st_juriq: "",
            prin_sect_acti: "",
            list_sous_sect_act: "",
            an_prod_1: "",
            pers_per_femm: "",
            pers_per_homm: "",
            pers_temp_femm: "",
            pers_temp_homm: "",
            ch_aff_1: "",
            ch_aff_2: "",
            part_chiffre_affaire_exprtation: "",
            grpe_fililale: "",
            nationalite_groupe: "",
            capital_social: "",
            nbre_rccm: "",
            nbre_nif: "",

             // etapes 2

   
      mpmeBourse: '',
      nomBourse: '',
      receptionPrix: '',
      principalPrix: '',
      anneePrixPrincipal: '',
      titreDirigeant: '',
      nomDirigeant: '',
      prenomDirigeant: '',
      sexeDirigeant: '',
      paysDirigeant: '',
      anneeNaissanceDirigeant: '',
      dirigeantProprietaire: '',

      titreProprietaire: '',
      nomProprietaire: '',
      prenomProprietaire: '',
      sexeProprietaire: '',
      paysProprietaire: '',
      anneeNaissanceProprietaire: '',
      appartenanceReseauProfessionnel: '',
      nomReseauProfessionnel: '',
      financementFondPropre: '',
      financementCreditBancaire: '',
      financementPartenaireExterieurs: '',
      financementAutre: '',

      autreFinancement: '',
      descriptionReseau: '',
      difficultesRencontrees: '',
      suggestionsProposees: '',

      // etapes 3
      existanceActionnaire: '',
      existanceConseilAdministration: '',
      existancePartenariat: '',
      partenariatTechnique: '',
      partenariatFinancier: '',
      partenariatCommercial: '',
      partenariatAutre: '',
      autrePartenariat: '',
      besoinPartenaire: '',
      besoinPartenaireTechnique: '',
      besoinPartenaireFinancier: '',
      besoinPartenaireCommercial: '',
      besoinPartenaireAutre: '',
      autreBesoinPartenaire: '',
      titreRepondant: '', 
      nomRepondant: '', 
      fonctionRepondant: '',
      adresseRepondant:'',
      villeRepondant:'',
      telephoneWhatsAppRepondant:'',
      contacter:'',
      lienGoogleMapMpme: '',
      latitudeMpme: '', 
      longitudeMpme: '',
      altitudeMpme: '',
      precisionGPSMpme: '',
      origineDonnees: '',
        };
    },
    validations: {
        step1: {
        region: {
          require,
        },
        commune: {
          require,
        },
    },
        step2: {
           
    mpmeBourse: {
          require,
        },
    nomBourse: {
          require,
        },
    },
},
    methods: {
        createMpmeData() {
            return {
                Region: this.region,
                Commune: this.commune,
                Sousprefecture: this.sous_prefecture,
                Ville: this.ville,
                Localisation: this.localisation,
                SigleMpme: this.sigle_mpme,
                NomMpme: this.nom,
                Quartier: this.quartier,
                Rue: this.rue,
                BoitePostale: this.boite_postale,
                NumeroWhatsApp: this.tel_what,
                NumeroTelephoneSecondaire: this.tel_second,
                AdresseEmail: this.email,
                SiteWeb: this.url,
                AnneeCreation: this.an_creation,
                AnneeEntreeActivite: this.an_entre_acti,
                CodeStatutJuridique: this.code_st_juriq,
                AutreStatutJuridique: this.autr_st_juriq,
                PrincipalSecteurActivite: this.prin_sect_acti,
                ListeSousSecteurActivite: ["Elevage"],
                AnneeProduction1: this.an_prod_1,
                PersonnelPermanentFemme: this.pers_per_femm,
                PersonnelPermanentHomme: this.pers_per_homm,
                PersonnelTemporaireFemme: this.pers_temp_femm,
                PersonnelTemporaireHomme: this.pers_temp_homm,
                ChiffreAffaire1: this.ch_aff_1,
                ChiffreAffaire2: this.ch_aff_2,
                PartChiffreAffaireExprtation: this.part_chiffre_affaire_exprtation,
                GroupeFililale: this.grpe_fililale,
                NationaliteGroupe: this.nationalite_groupe,
                CapitalSocial: this.capital_social,
                NumeroRccm: this.nbre_rccm,
                NumeroNif: this.nbre_nif,
                MpmeBourse: this.mpmeBourse,
                NomBourse: this.nomBourse,
                RecptionPrix: this.receptionPrix,
                PrincipalPrix: this.principalPrix,
                AnneePrixPrincipal: parseInt(2015),
                TitreDirigeant: this.titreDirigeant,
                NomDirigeant: this.nomDirigeant,
                PrenomDirigeant: this.prenomDirigeant,
                SexeDirigeant: this.sexeDirigeant,
                PaysDirigeant: this.paysDirigeant,
                AnneeNaissanceDirigeant: this.anneeNaissanceDirigeant,
                DirigeantProprietaire: this.dirigeantProprietaire,
                TitreProprietaire: this.titreProprietaire,
                NomProprietaire: this.nomProprietaire,
                PrenomProprietaire: this.prenomProprietaire,
                SexeProprietaire: this.sexeProprietaire,
                PaysProprietaire: this.paysProprietaire,
                AnneeNaissanceProprietaire: this.anneeNaissanceProprietaire,
                AppartenanceReseauProfessionnel: this.appartenanceReseauProfessionnel,
                NomReseauProfessionnel: this.nomReseauProfessionnel,
                FinancementFondPropre: this.financementFondPropre,
                FinancementCreditBancaire: this.financementCreditBancaire,
                FinancementPartenaireExterieurs: this.financementPartenaireExterieurs,
                FinancementAutre: this.financementAutre,
                DescriptionReseau: this.descriptionReseau,
                AutreFinancement: this.autreFinancement,
                DifficultesRencontrees: this.difficultesRencontrees,
                SuggestionsProposees: this.suggestionsProposees,

                ExistanceActionnaire: this.existanceActionnaire,
                ExistanceConseilAdministration: this.existanceConseilAdministration,
                ExistancePartenariat: this.existancePartenariat,
                PartenariatTechnique: this.partenariatTechnique,
                PartenariatFinancier: this.partenariatFinancier,
                PartenariatCommercial: this.partenariatCommercial,
                PartenariatAutre: this.partenariatAutre,
                AutrePartenariat: this.autrePartenariat,
                BesoinPartenaire: this.besoinPartenaire,
                BesoinPartenaireTechnique: this.besoinPartenaireTechnique,
                BesoinPartenaireFinancier: this.besoinPartenaireFinancier,
                BesoinPartenaireCommercial: this.besoinPartenaireCommercial,
                BesoinPartenaireAutre: this.besoinPartenaireAutre,
                AutreBesoinPartenaire: this.autreBesoinPartenaire,
                TitreRepondant: this.titreRepondant,
                NomRepondant: this.nomRepondant,
                FonctionRepondant: this.fonctionRepondant,
                AdresseRepondant: this.adresseRepondant,
                VilleRepondant: this.villeRepondant,
                TelephoneWhatsAppRepondant: this.telephoneWhatsAppRepondant,
                Contacter: this.contacter,
                LienGoogleMapMpme: this.lienGoogleMapMpme,
                LatitudeMpme: this.latitudeMpme,
                LongitudeMpme: this.longitudeMpme,
                AltitudeMpme: this.altitudeMpme,
                PrecisionGPSMpme: this.precisionGPSMpme,
                OrigineDonnees: this.origineDonnees,
            }
        },
        async nextStep() {
            if (this.currentStep === 1) {
                // this.v$.$touch()
                this.v$.$touch(this.validations.step1);
               if (this.v$.$errors.length == 0 ) {
                const mpmeData = this.createMpmeData();
                console.log('mpmeData1', mpmeData);
                const success = await this.enregistrerMpmeDonnees(mpmeData);
                console.log('success', success);
                if (success) {
                    this.currentStep++;
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                        });
                } else {
                    console.error('Erreur lors de l\'enregistrement des données pour le MPME');
                }
                }
               
            } else if (this.currentStep === 2) {
                this.v$.$touch(this.validations.step2);
                if (this.v$.$errors.length == 0 ) {
                
                
                }
                // this.currentStep++;
                // window.scrollTo({
                //         top: 0,
                //         behavior: 'smooth',
                //         });
                // const mpmeData = this.createMpmeData();
                // console.log('mpmeData', mpmeData);
            }


        },

        prevStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
                window.scrollTo({
                top: 0,
                behavior: 'smooth', 
                });
            }
        },

        submit() {
            const mpmeData = this.createMpmeData();
                console.log('mpmeData', mpmeData);
        },
        async fetchgetOneMpme() {
            try {
                //  const userId = this.loggedInUser.user.Entreprises;
                const userId = 'MPME-1580-2023'
                const response = await axios.get(`/mpme/${userId}`);
                this.userData = response.data.data;
                this.storeUserData(this.userData);
                console.log('UserData:', this.userData);
            } catch (error) {
                console.error('Erreur lors de la récupération des options des sous prefecture :', error);
            }
        },

        initializeYears() {
            const currentYear = new Date().getFullYear();
            for (let year = 1960; year <= currentYear; year++) {
                this.years.push(year);
            }
            this.yearOptions = this.years.map(year => ({
                label: String(year),
                value: String(year)
            }));
        },

        async enregistrerMpmeDonnees(mpmeData) {
            try {
                // const userId = this.loggedInUser.user.Entreprises;
                const userId = 'MPME-1580-2023'

                const response = await axios.put(`/mpme/${userId}`, mpmeData, {
        headers: {
          Authorization: `Bearer ${this.loggedInUser.access_token}`,
        },
      });

                if (response.status === 200) {
                    console.log('Données MPME mises à jour avec succès !');
                    return true;
                } else {
                    console.error('Erreur lors de la mise à jour des données MPME');
                    return false;
                }
            } catch (error) {
                console.error('Erreur lors de la mise à jour des données MPME :', error);
                return false;
            }
        },

        onPhoneNumberUpdate(updatedResult) {
            this.results = updatedResult;
        },
        async fetchCountryOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
            try {
                await this.$store.dispatch('fetchCountries');
                const options = JSON.parse(JSON.stringify(this.$store.getters['getCountryOptions'])); // Accéder aux options des pays via le getter
                console.log('Options des pays:', options);
                this.sortedCountryOptions = options; // Affecter les options à votre propriété sortedCountryOptions
            } catch (error) {
                console.error('Erreur lors de la récupération des options des pays :', error);
            }
        },
        async fetchRegionOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
            try {
                await this.$store.dispatch('fetchRegionOptions');
                const options = JSON.parse(JSON.stringify(this.$store.getters['getRegionOptions'])); // Accéder aux options des pays via le getter
                console.log('Options desregions:', options);
                this.regionOptions = options; // Affecter les options à votre propriété sortedCountryOptions
            } catch (error) {
                console.error('Erreur lors de la récupération des options des pays :', error);
            }
        },
        async fetchPrefectureOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
            try {
                await this.$store.dispatch('fetchPrefectureOptions');
                const options = JSON.parse(JSON.stringify(this.$store.getters['getprefectureOptions'])); // Accéder aux options des pays via le getter
                console.log('Options des Prefecture:', options);
                this.prefectureOptions = options; // Affecter les options à votre propriété sortedCountryOptions
            } catch (error) {
                console.error('Erreur lors de la récupération des options des prefecture :', error);
            }
        },

        async fetchSousPrefectureOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
            try {
                await this.$store.dispatch('fetchSous_PrefectureOptions');
                const options = JSON.parse(JSON.stringify(this.$store.getters['getSousprefectureOptions'])); // Accéder aux options des pays via le getter
                console.log('Options des sous Prefecture:', options);
                this.sous_prefectureOptions = options; // Affecter les options à votre propriété sortedCountryOptions
            } catch (error) {
                console.error('Erreur lors de la récupération des options des sous prefecture :', error);
            }
        },

        async fetchQuartierOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
            try {

                await this.$store.dispatch('fetchQuartierOptions');
                const options = JSON.parse(JSON.stringify(this.$store.getters['getQuartierOptions'])); // Accéder aux options des pays via le getter
                console.log('Options des Quartier:', options);
                this.QuartierOptions = options; // Affecter les options à votre propriété sortedCountryOptions
            } catch (error) {
                console.error('Erreur lors de la récupération des options des prefecture :', error);
            }
        },
        async fetchSecteurActiviteOptions() {
            try {

                await this.$store.dispatch('fetchSecteurActiviteOptions'); // Action spécifique aux secteurs d'activité
                const options = JSON.parse(JSON.stringify(this.$store.getters['getsecteurActiviteOptions']));
                this.SecteurActiviteOptions = options;
            } catch (error) {
                console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error);
            }
        },
        async fetchSousSecteurActiviteOptions() {
            try {

                await this.$store.dispatch('fetchSousSecteurOptions'); // Action spécifique aux sous-secteurs d'activité
                const options = JSON.parse(JSON.stringify(this.$store.getters['getSousSecteurOptions']));
                this.SousSecteurActiviteOptions = options;
            } catch (error) {
                console.error('Erreur lors de la récupération des options des sous-secteurs d\'activité:', error);
            }
        },
        async fetchStatutJuridiqueOptions() {
            try {

                await this.$store.dispatch('fetchStatutJuridiqueOptions'); // Action spécifique aux statuts juridiques
                const options = JSON.parse(JSON.stringify(this.$store.getters['getStatutJuridiqueOptions']));
                this.StatutJuridiqueOptions = options;
            } catch (error) {
                console.error('Erreur lors de la récupération des options des statuts juridiques:', error);
            }
        },
            async fetchBourseOptions (){
  try {
   
    await this.$store.dispatch('fetchBourseOptions'); // Action spécifique aux bourses
    const options = JSON.parse(JSON.stringify(this.$store.getters['getBourseOptions']));
    console.log('Options bourse:', options);
    this.BourseOptions = options;
  } catch (error) {
    console.error('Erreur lors de la récupération des options des bourses:', error);
  }
},


        storeUserData(userData) {
            this.region = userData.Region;
            this.commune = userData.Commune;
            this.ville = userData.Ville;
            this.sous_prefecture = userData.Sousprefecture;
            this.localisation = userData.Localisation;
            this.sigle_mpme = userData.SigleMpme;
            this.nom = userData.NomMpme;
            this.quartier = userData.Quartier;
            this.rue = userData.Rue;
            this.boite_postale = userData.BoitePostale;
            this.tel_what = userData.NumeroWhatsApp;
            this.tel_second = userData.NumeroTelephoneSecondaire;
            this.email = userData.AdresseEmail;
            this.url = userData.SiteWeb;
            this.an_creation = userData.AnneeCreation;
            this.an_entre_acti = userData.AnneeEntreeActivite;
            this.code_st_juriq = userData.CodeStatutJuridique;
            this.autr_st_juriq = userData.AutreStatutJuridique;
            this.prin_sect_acti = userData.PrincipalSecteurActivite;
            this.list_sous_sect_act = userData.ListeSousSecteurActivite;
            this.an_prod_1 = userData.AnneeProduction1;
            this.pers_per_femm = userData.PersonnelPermanentFemme;
            this.pers_per_homm = userData.PersonnelPermanentHomme;
            this.pers_temp_femm = userData.PersonnelTemporaireFemme;
            this.pers_temp_homm = userData.PersonnelTemporaireHomme;
            this.ch_aff_1 = userData.ChiffreAffaire1;
            this.ch_aff_2 = userData.ChiffreAffaire2;
            this.part_chiffre_affaire_exprtation = userData.PartChiffreAffaireExprtation;
            this.grpe_fililale = userData.GroupeFililale;
            this.nationalite_groupe = userData.NationaliteGroupe;
            this.capital_social = userData.CapitalSocial;
            this.nbre_rccm = userData.NumeroRccm;
            this.nbre_nif = userData.NumeroNif;
            this.mpmeBourse = userData.MpmeBourse;
            this.nomBourse = userData.NomBourse;
            this.receptionPrix = userData.RecptionPrix;
            this.principalPrix = userData.PrincipalPrix;
            this.anneePrixPrincipal = userData.AnneePrixPrincipal;
            this.titreDirigeant = userData.TitreDirigeant;
            this.nomDirigeant = userData.NomDirigeant;
            this.prenomDirigeant = userData.PrenomDirigeant;
            this.sexeDirigeant = userData.SexeDirigeant;
            this.paysDirigeant = userData.PaysDirigeant;
            this.anneeNaissanceDirigeant = userData.AnneeNaissanceDirigeant;
            this.dirigeantProprietaire = userData.DirigeantProprietaire;
            this.titreProprietaire = userData.TitreProprietaire;
            this.nomProprietaire = userData.NomProprietaire;
            this.prenomProprietaire = userData.PrenomProprietaire;
            this.sexeProprietaire = userData.SexeProprietaire;
            this.paysProprietaire = userData.PaysProprietaire;
            this.anneeNaissanceProprietaire = userData.AnneeNaissanceProprietaire;
            this.appartenanceReseauProfessionnel = userData.AppartenanceReseauProfessionnel;
            this.nomReseauProfessionnel = userData.NomReseauProfessionnel;
            this.financementFondPropre = userData.FinancementFondPropre;
            this.financementCreditBancaire = userData.FinancementCreditBancaire;
            this.financementPartenaireExterieurs = userData.FinancementPartenaireExterieurs;
            this.financementAutre = userData.FinancementAutre;
            this.descriptionReseau = userData.DescriptionReseau;
            this.autreFinancement = userData.AutreFinancement;
            this.difficultesRencontrees = userData.DifficultesRencontrees;
            this.suggestionsProposees = userData.SuggestionsProposees;
            this.existanceConseilAdministration = userData.ExistanceConseilAdministration;
            this.existancePartenariat = userData.ExistancePartenariat;
            this.partenariatTechnique = userData.PartenariatTechnique;
            this.partenariatFinancier = userData.PartenariatFinancier;
            this.partenariatCommercial = userData.PartenariatCommercial;
            this.partenariatAutre = userData.PartenariatAutre;
            this.autrePartenariat = userData.AutrePartenariat;
            this.besoinPartenaire = userData.BesoinPartenaire;
            this.besoinPartenaireTechnique = userData.BesoinPartenaireTechnique;
            this.besoinPartenaireFinancier = userData.BesoinPartenaireFinancier;
            this.besoinPartenaireCommercial = userData.BesoinPartenaireCommercial;
            this.besoinPartenaireAutre = userData.BesoinPartenaireAutre;
            this.autreBesoinPartenaire = userData.AutreBesoinPartenaire;
            this.titreRepondant = userData.TitreRepondant;
            this.nomRepondant = userData.NomRepondant;
            this.fonctionRepondant = userData.FonctionRepondant;
            this.adresseRepondant = userData.AdresseRepondant;
            this.villeRepondant = userData.VilleRepondant;
            this.telephoneWhatsAppRepondant = userData.TelephoneWhatsAppRepondant;
            this.contacter = userData.Contacter;
            this.lienGoogleMapMpme = userData.LienGoogleMapMpme;
            this.latitudeMpme = userData.LatitudeMpme;
            this.longitudeMpme = userData.LongitudeMpme;
            this.altitudeMpme = userData.AltitudeMpme;
            this.precisionGPSMpme = userData.PrecisionGPSMpme;
            this.origineDonnees = userData.OrigineDonnees;
            // ... Lier d'autres propriétés de la même manière
        },


    },



    mounted() {
        window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
         console.log("data", this.loggedInUser.access_token);
        this.fetchgetOneMpme(),
        this.fetchCountryOptions();
        this.fetchRegionOptions();
        this.fetchPrefectureOptions(),
        this.fetchSousPrefectureOptions()
        this.fetchQuartierOptions();
        this.fetchSecteurActiviteOptions();
        this.fetchSousSecteurActiviteOptions();
        this.fetchStatutJuridiqueOptions();
        this.initializeYears();
        this.fetchBourseOptions();

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

.btnForm {

    max-width: 1140px;
    margin: 20px auto;
    background-color: white;
    padding: 1rem;
    color: black;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
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

}

.generastep{

max-width: 1140px;
margin: 10px auto;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
}

.tx-green-1 {
  color: #75cc65;
  font-weight: 600;
}

.wrapper-stepper {
  background-color: #fff;
  padding: 60px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.09);
}

.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 660px;
  position: relative;
  z-index: 0;
  /* margin-bottom: 24px; */
}
.stepper-progress {
  position: absolute;
  background-color: #c5c5c5;
  height: 2px;
  z-index: -1;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.stepper-progress-bar {
  position: absolute;
  left: 0;
  height: 100%;
  width: 0%;
  background-color: #75cc65;
  transition: all 500ms ease;
}

.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c5c5c5;
  transition: all 500ms ease;
}
.stepper-item-counter {
  height: 45px;
  width: 45px;
  display: grid;
  place-items: center;
  background-color: #fff;
  border-radius: 100%;
  border: 2px solid #c5c5c5;
  position: relative;
}
.stepper-item-counter .icon-success {
  position: absolute;
  opacity: 0;
  transform: scale(0);
  width: 24px;
  transition: all 500ms ease;
}
.stepper-item-counter .number {
  font-size: 22px;
  transition: all 500ms ease;
}
.stepper-item-title {
  position: absolute;
  font-size: 17px;
  bottom: -39px;
  width: 71px;
    display: flex;
    justify-content: center;

}

.stepper-item.success .stepper-item-counter {
  border-color: #75cc65;
  background-color: #c8ebc1;
  color: #fff;
  font-weight: 600;
}
.stepper-item.success .stepper-item-counter .icon-success {
  opacity: 1;
  transform: scale(1);
}
.stepper-item.success .stepper-item-counter .number {
  opacity: 0;
  transform: scale(0);
}
.stepper-item.success .stepper-item-title {
  color: #75cc65;
}

.stepper-item.current .stepper-item-counter {
  border-color: #75cc65;
  background-color: #75cc65;
  color: #fff;
  font-weight: 600;
}
.stepper-item.current .stepper-item-title {
  color: #818181;
}


</style>