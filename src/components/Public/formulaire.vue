<template>
    <div class="generastep" data-aos="zoom-out" data-aos-delay="100">
        <div class="stepper">
            <div class="stepper-progress">
                <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
            </div>

            <div class="stepper-item" :class="{ 'current': currentStep == item, 'success': currentStep > item }"
                v-for="item in 3" :key="item">
                <div class="stepper-item-counter">
                    <img class="icon-success"
                        src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png" alt="">
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
   
    <div class="error" v-if="this.error">
        {{ error }} <br>
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
                                    <MazSelect v-model="step1.region" color="secondary" :options="regionOptions" />


                                </div>
                                <small v-if="v$.step1.region.$error">{{ v$.region.$errors[0].$message }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Commune">Commune <span class="text-danger">*</span></label>
                                    <input type="text" name="Commune" id="Commune" placeholder="" v-model="step1.commune">
                                </div>
                                <small v-if="v$.step1.commune.$error">{{ v$.step1.commune.$errors[0].$message }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ville">Ville <span class="text-danger">*</span></label>
                                    <input type="text" name="Ville" id="ville" placeholder="" v-model="step1.ville">
                                </div>
                                <small v-if="v$.step1.ville.$error">{{ v$.step1.ville.$errors[0].$message }}</small>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Sousprefecture">Sous-Prefecture <span class="text-danger">*</span></label>
                                    <MazSelect v-model="step1.sous_prefecture" color="secondary"
                                        :options="sous_prefectureOptions" />

                                </div>
                                <small v-if="v$.step1.sous_prefecture.$error">{{
                                    v$.step1.sous_prefecture.$errors[0].$message }}</small>


                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Localisation">Localisation </label>
                                    <input type="text" name="Localisation" id="Localisation" placeholder=""
                                        v-model="step1.localisation">
                                </div>
                                <small v-if="v$.step1.localisation.$error">{{ v$.step1.localisation.$errors[0].$message
                                }}</small>
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
                                    <input type="text" name="SigleMpme" id="SigleMpme" placeholder=""
                                        v-model="step1.sigle_mpme">
                                </div>
                                <small v-if="v$.step1.sigle_mpme.$error">{{ v$.step1.sigle_mpme.$errors[0].$message
                                }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="nom">Nom <span class="text-danger">*</span></label>
                                    <input type="text" name="nom" id="nom" placeholder="" v-model="step1.nom">
                                </div>
                                <small v-if="v$.step1.nom.$error">{{ v$.step1.nom.$errors[0].$message }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Quartier">Quartier <span class="text-danger">*</span></label>
                                    <MazSelect v-model="step1.quartier" color="secondary" :options="QuartierOptions" />

                                </div>
                                <small v-if="v$.step1.quartier.$error">{{ v$.step1.quartier.$errors[0].$message }}</small>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Rue">Rue </label>
                                    <input type="text" name="Rue" id="Rue" placeholder="" v-model="step1.rue">
                                </div>
                                <small v-if="v$.step1.rue.$error">{{ v$.step1.rue.$errors[0].$message }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="nom">Boîte Postale <span class="text-danger">*</span></label>
                                    <input type="text" name="BoitePostale" id="BoitePostale" placeholder=""
                                        v-model="step1.boite_postale">
                                </div>
                                <small v-if="v$.step1.boite_postale.$error">{{ v$.step1.boite_postale.$errors[0].$message
                                }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroWhatsApp">Numéro WhatsApp <span class="text-danger">*</span></label>
                                    <MazPhoneNumberInput v-model="step1.tel_what" show-code-on-list color="secondary"
                                        :ignored-countries="['AC']" @update="results = $event"
                                        :success="results?.isValid" />


                                </div>
                            </div>
                            <small v-if="v$.step1.tel_what.$error">{{ v$.step1.tel_what.$errors[0].$message }}</small>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroTelephoneSecondaire">Numéro Téléphone Secondaire </label>
                                    <MazPhoneNumberInput v-model="step1.tel_second" show-code-on-list color="secondary"
                                        :ignored-countries="['AC']" @update="results = $event"
                                        :success="results?.isValid" />


                                </div>
                                <small v-if="v$.step1.tel_second.$error">{{ v$.step1.tel_second.$errors[0].$message
                                }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AdresseEmail">Adresse Email <span class="text-danger">*</span></label>
                                    <input type="email" name="email" id="AdresseEmail" placeholder="" v-model="step1.email">
                                </div>
                                <small v-if="v$.step1.email.$error">{{ v$.step1.email.$errors[0].$message }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="SiteWeb">Site Web </label>
                                    <input type="url" name="url" id="SiteWeb" placeholder="" v-model="step1.url">
                                </div>
                                <small v-if="v$.step1.url.$error">{{ v$.step1.url.$errors[0].$message }}</small>

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
                                    <!-- <MazSelect v-model="step1.an_creation" color="secondary" :options="yearOptions" required   /> -->
                                    <VueDatePicker v-model="step1.an_creation" :year-picker="true"
                                        :year-range="[1990, new Date().getFullYear()]"></VueDatePicker>

                                </div>
                                <small v-if="v$.step1.an_creation.$error">{{ v$.step1.an_creation.$errors[0].$message
                                }}</small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AnneeEntreeActivite">Année Entrée Activité <span
                                            class="text-danger">*</span></label>
                                    <!-- <MazSelect v-model="step1.an_entre_acti" color="secondary" :options="yearOptions" /> -->
                                    <VueDatePicker v-model="step1.an_entre_acti" :year-picker="true"
                                        :year-range="[1990, new Date().getFullYear()]"></VueDatePicker>

                                </div>
                                <small v-if="v$.step1.an_entre_acti.$error">{{ v$.step1.an_entre_acti.$errors[0].$message
                                }}</small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="CodeStatutJuridique">Code Statut Juridique</label>
                                    <MazSelect v-model="step1.code_st_juriq" color="secondary"
                                        :options="StatutJuridiqueOptions" />
                                </div>
                                <small v-if="v$.step1.code_st_juriq.$error">{{ v$.step1.code_st_juriq.$errors[0].$message
                                }}</small>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AutreStatutJuridique">Autre Statut Juridique</label>
                                    <input type="text" name="AutreStatutJuridique" id="AutreStatutJuridique" placeholder=""
                                        v-model="step1.autr_st_juriq">
                                </div>
                                <small v-if="v$.step1.autr_st_juriq.$error">{{ v$.step1.autr_st_juriq.$errors[0].$message
                                }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PrincipalSecteurActivite">Principal Secteur Activite <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step1.prin_sect_acti" color="secondary"
                                        :options="SecteurActiviteOptions" />
                                </div>
                                <small v-if="v$.step1.prin_sect_acti.$error">{{ v$.step1.prin_sect_acti.$errors[0].$message
                                }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ListeSousSecteurActivite">Liste Sous Secteur Activite <span
                                            class="text-danger">*</span></label>
                                            <v-select v-model="step1.selectedSousSecteurs" :items=SousSecteurActiviteOptions multiple persistent-hint></v-select>
              </div>
              <small v-if="v$.step1.selectedSousSecteurs.$error">{{ v$.step1.selectedSousSecteurs.$errors[0].$message }}</small>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AnneeProduction1">Année Production 1 <span
                                            class="text-danger">*</span></label>

                                    <!-- <MazSelect v-model="step1.an_prod_1" color="secondary" :options="yearOptions" /> -->
                                    <VueDatePicker v-model="step1.an_prod_1" :year-picker="true"
                                        :year-range="[1990, new Date().getFullYear()]"></VueDatePicker>

                                </div>
                                <small v-if="v$.step1.an_prod_1.$error">{{ v$.step1.an_prod_1.$errors[0].$message }}</small>


                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PersonnelPermanentFemme">Personnel Permanent Femme </label>
                                    <input type="text" name="PersonnelPermanentFemme" id="PersonnelPermanentFemme"
                                        placeholder="" v-model="step1.pers_per_femm">
                                </div>
                                <small v-if="v$.step1.pers_per_femm.$error">{{ v$.step1.pers_per_femm.$errors[0].$message
                                }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PersonnelPermanentHomme">Personnel Permanent Homme </label>
                                    <input type="text" name="PersonnelPermanentHomme" id="PersonnelPermanentHomme"
                                        placeholder="" v-model="step1.pers_per_homm">
                                </div>
                                <small v-if="v$.step1.pers_per_homm.$error">{{ v$.step1.pers_per_homm.$errors[0].$message
                                }}</small>
                            </div>
                        </div>


                        <div class="row mb-3 mt-3 content-group">

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PersonnelTemporaireFemme">Personnel Temporaire Femme </label>
                                    <input type="text" name="PersonnelTemporaireFemme" id="PersonnelTemporaireFemme"
                                        placeholder="" v-model="step1.pers_temp_femm">
                                </div>
                                <small v-if="v$.step1.pers_temp_femm.$error">{{ v$.step1.pers_temp_femm.$errors[0].$message
                                }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PersonnelTemporaireHomme">Personnel Temporaire Homme </label>
                                    <input type="text" name="PersonnelTemporaireHomme" id="PersonnelTemporaireHomme"
                                        placeholder="" v-model="step1.pers_temp_homm">
                                </div>
                                <small v-if="v$.step1.pers_temp_homm.$error">{{ v$.step1.pers_temp_homm.$errors[0].$message
                                }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ChiffreAffaire1">Chiffre Affaire 1</label>
                                    <input type="text" name="ChiffreAffaire1" id="ChiffreAffaire1" placeholder=""
                                        v-model="step1.ch_aff_1">
                                </div>
                                <small v-if="v$.step1.ch_aff_1.$error">{{ v$.step1.ch_aff_1.$errors[0].$message }}</small>

                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">


                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ChiffreAffaire2">ChiffreAffaire 2</label>
                                    <input type="text" name="ChiffreAffaire2" id="ChiffreAffaire2" placeholder=""
                                        v-model="step1.ch_aff_2">
                                </div>
                                <small v-if="v$.step1.ch_aff_2.$error">{{ v$.step1.ch_aff_2.$errors[0].$message }}</small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PartChiffreAffaireExprtation">Part Chiffre Affaire Exportation </label>
                                    <input type="text" name="PartChiffreAffaireExprtation" id="PartChiffreAffaireExprtation"
                                        placeholder="" v-model="step1.part_chiffre_affaire_exprtation">
                                </div>
                                <small v-if="v$.step1.part_chiffre_affaire_exprtation.$error">{{
                                    v$.step1.part_chiffre_affaire_exprtation.$errors[0].$message }}</small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="GroupeFililale">Groupe Fililale </label>
                                    <input type="text" name="GroupeFililale" id="GroupeFililale" placeholder=""
                                        v-model="step1.grpe_fililale">
                                </div>
                                <small v-if="v$.step1.grpe_fililale.$error">{{ v$.step1.grpe_fililale.$errors[0].$message
                                }}</small>

                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NationaliteGroupe">Nationalité Groupe</label>

                                    <MazSelect v-model="step1.nationalite_groupe" :options="sortedCountryOptions"
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
                                <small v-if="v$.step1.nationalite_groupe.$error">{{
                                    v$.step1.nationalite_groupe.$errors[0].$message }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="CapitalSocial">Capital Social</label>
                                    <input type="text" name="CapitalSocial" id="CapitalSocial" placeholder=""
                                        v-model="step1.capital_social">
                                </div>
                                <small v-if="v$.step1.capital_social.$error">{{ v$.step1.capital_social.$errors[0].$message
                                }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroRccm">Numéro Rccm </label>
                                    <input type="text" name="NumeroRccm" id="NumeroRccm" placeholder=""
                                        v-model="step1.nbre_rccm">
                                </div>
                            </div>
                            <small v-if="v$.step1.nbre_rccm.$error">{{ v$.step1.nbre_rccm.$errors[0].$message }}</small>
                        </div>


                        <div class="row mb-3 mt-3 content-group">

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroNif">Numero Nif</label>
                                    <input type="text" name="NumeroNif" id="NumeroNif" placeholder=""
                                        v-model="step1.nbre_nif">
                                </div>
                            </div>
                            <small v-if="v$.step1.nbre_nif.$error">{{ v$.step1.nbre_nif.$errors[0].$message }}</small>

                        </div>

                    </div>
                    <!-- fin infos activite -->


                </div>
                <div class="btnForm py-3 flex items-center justify-content-end">
                    <button class="btnLogin" :disabled="isButtonDisabled" @click.prevent="nextStep">Suivant</button>
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
                                    <MazSelect v-model="step2.mpmeBourse" color="secondary" :options="choix" />

                                </div>
                                <small v-if="v$.step2.mpmeBourse.$error">{{ v$.step2.mpmeBourse.$errors[0].$message
                                }}</small>
                            </div>
                            <div class="col" v-if="step2.mpmeBourse === 'oui'">
                                <div class="input-groupe">
                                    <label for="NomBourse">Nom Bourse <span class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.nomBourse" color="secondary" :options="BourseOptions" />

                                </div>
                                <small v-if="v$.step2.nomBourse.$error">{{ v$.step2.nomBourse.$errors[0].$message }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="RecptionPrix">Réception Prix <span class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.receptionPrix" color="secondary" :options="choix" />

                                </div>
                                <small v-if="v$.step2.receptionPrix.$error">{{ v$.step2.receptionPrix.$errors[0].$message
                                }}</small>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col" v-if="step2.receptionPrix === 'oui'">
                                <div class="input-groupe">
                                    <label for="PrincipalPrix">Principal Prix<span class="text-danger">*</span></label>
                                    <input type="text" name="PrincipalPrix" id="PrincipalPrix" placeholder=""
                                        v-model="step2.principalPrix">
                                </div>
                                <small v-if="v$.step2.principalPrix.$error">{{ v$.step2.principalPrix.$errors[0].$message
                                }}</small>
                            </div>
                            <div class="col" v-if="step2.receptionPrix === 'oui'">
                                <div class="input-groupe">
                                    <label for="AnneePrixPrincipal">Année Prix Principal <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.anneePrixPrincipal" color="secondary"
                                        :options="yearOptions" />
                                </div>
                                <small v-if="v$.step2.anneePrixPrincipal.$error">{{
                                    v$.step2.anneePrixPrincipal.$errors[0].$message }}</small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="TitreDirigeant">Titre Dirigeant <span class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.titreDirigeant" color="secondary" :options="titre" />
                                </div>
                                <small v-if="v$.step2.titreDirigeant.$error">{{ v$.step2.titreDirigeant.$errors[0].$message
                                }}</small>
                            </div>
                        </div>

                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NomDirigeant">Nom Dirigeant <span class="text-danger">*</span></label>
                                    <input type="text" name="NomDirigeant" id="NomDirigeant" placeholder=""
                                        v-model="step2.nomDirigeant">
                           
                        </div>
                            <small v-if="v$.step2.nomDirigeant.$error">{{ v$.step2.nomDirigeant.$errors[0].$message
                            }}</small>
                        </div>
                        <div class="col">
                            <div class="input-groupe"> <label for="PrenomDirigeant">Prénom Dirigeant <span
                                        class="text-danger">*</span></label>
                                <input type="text" name="PrenomDirigeant" id="PrenomDirigeant" placeholder=""
                                    v-model="step2.prenomDirigeant">
                            </div>
                            <small v-if="v$.step2.prenomDirigeant.$error">{{ v$.step2.prenomDirigeant.$errors[0].$message
                            }}</small>
                        </div>
                        <div class="col">
                            <div class="input-groupe"> <label for="SexeDirigeant">Sexe Dirigeant <span
                                        class="text-danger">*</span></label>
                                <MazSelect v-model="step2.sexeDirigeant" color="secondary" :options="sexes" />
                            </div>
                            <small v-if="v$.step2.sexeDirigeant.$error">{{ v$.step2.sexeDirigeant.$errors[0].$message
                            }}</small>
                        </div>
                    </div>

                    <div class="row mb-3 mt-3 content-group">
                        <div class="col">
                            <div class="input-groupe"> <label for="PaysDirigeant">Pays Dirigeant <span
                                        class="text-danger">*</span></label>
                                <MazSelect v-model="step2.paysDirigeant" :options="sortedCountryOptions" v-slot="{ option }"
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
                            <small v-if="v$.step2.paysDirigeant.$error">{{ v$.step2.paysDirigeant.$errors[0].$message
                            }}</small>
                        </div>
                        <div class="col">
                            <div class="input-groupe">

                                <label for="AnneeNaissanceDirigeant">Année Naissance Dirigeant <span
                                        class="text-danger">*</span></label>
                                <!-- <input type="text" name="AnneeNaissanceDirigeant" id="AnneeNaissanceDirigeant"
                                    placeholder="" v-model="step2.anneeNaissanceDirigeant"> -->
                                    <VueDatePicker v-model="step2.anneeNaissanceDirigeant" :enable-time-picker="false" />
                            </div>
                            <small v-if="v$.step2.anneeNaissanceDirigeant.$error">{{
                                v$.step2.anneeNaissanceDirigeant.$errors[0].$message }}</small>
                        </div>
                        <div class="col">
                            <div class="input-groupe">
                                <label for="DirigeantProprietaire">Dirigeant Proprietaire <span
                                        class="text-danger">*</span></label>
                                <MazSelect v-model="step2.dirigeantProprietaire" color="secondary" :options="choix" />
                            </div>
                            <small v-if="v$.step2.dirigeantProprietaire.$error">{{
                                v$.step2.dirigeantProprietaire.$errors[0].$message }}</small>
                        </div>
                    </div>

                    <div class="row mb-3 mt-3 content-group">
                        <div class="col">
                            <div class="input-groupe">
                                <label for="TitreProprietaire">Titre Proprietaire <span class="text-danger">*</span></label>
                                <MazSelect v-model="step2.titreProprietaire" color="secondary" :options="titre" />
                            </div>
                            <small v-if="v$.step2.titreProprietaire.$error">{{
                                v$.step2.titreProprietaire.$errors[0].$message }}</small>
                        </div>
                        <div class="col">
                            <div class="input-groupe"> <label for="NomProprietaire">Nom Proprietaire <span
                                        class="text-danger">*</span></label>
                                <input type="text" name="NomProprietaire" id="NomProprietaire" placeholder=""
                                    v-model="step2.nomProprietaire">
                            </div>
                            <small v-if="v$.step2.nomProprietaire.$error">{{ v$.step2.nomProprietaire.$errors[0].$message
                            }}</small>
                        </div>
                        <div class="col">
                            <div class="input-groupe">
                                <label for="PrenomProprietaire">Prénom Proprietaire <span
                                        class="text-danger">*</span></label>
                                <input type="text" name="PrenomProprietaire" id="PrenomProprietaire" placeholder=""
                                    v-model="step2.prenomProprietaire">
                            </div>
                            <small v-if="v$.step2.prenomProprietaire.$error">{{
                                v$.step2.prenomProprietaire.$errors[0].$message }}</small>
                        </div>
                    </div>

                    <div class="row mb-3 mt-3 content-group">
                        <div class="col">
                            <div class="input-groupe"> <label for="SexeProprietaire">Sexe Proprietaire <span
                                        class="text-danger">*</span></label>
                                <MazSelect v-model="step2.sexeProprietaire" color="secondary" :options="sexes" />
                            </div>
                            <small v-if="v$.step2.sexeProprietaire.$error">{{ v$.step2.sexeProprietaire.$errors[0].$message
                            }}</small>
                        </div>
                        <div class="col">
                            <div class="input-groupe"> <label for="PaysProprietaire">Pays Proprietaire <span
                                        class="text-danger">*</span></label>
                                <MazSelect v-model="step2.paysProprietaire" :options="sortedCountryOptions"
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
                            <small v-if="v$.step2.paysProprietaire.$error">{{ v$.step2.paysProprietaire.$errors[0].$message
                            }}</small>
                        </div>
                        <div class="col">
                            <div class="input-groupe">
                               
                                <label for="AnneeNaissanceProprietaire">Année Naissance Proprietaire <span
                                        class="text-danger">*</span></label>
                                <!-- <input type="text" name="AnneeNaissanceProprietaire" id="AnneeNaissanceProprietaire"
                                    placeholder="" v-model="step2.anneeNaissanceProprietaire"> -->
                                    <VueDatePicker v-model="step2.anneeNaissanceProprietaire" :enable-time-picker="false" />
                            </div>
                            <small v-if="v$.step2.anneeNaissanceProprietaire.$error">{{
                                v$.step2.anneeNaissanceProprietaire.$errors[0].$message }}</small>
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
                                <MazSelect v-model="step2.appartenanceReseauProfessionnel" color="secondary"
                                    :options="choix" />
                            </div>
                            <small v-if="v$.step2.appartenanceReseauProfessionnel.$error">{{
                                v$.step2.appartenanceReseauProfessionnel.$errors[0].$message }}</small>
                        </div>
                        <div class="col" v-if="step2.appartenanceReseauProfessionnel === 'oui'">
                            <div class="input-groupe">
                                <label for="NomReseauProfessionnel">Nom Reseau Professionnel <span
                                        class="text-danger">*</span></label>
                                <input type="text" name="NomReseauProfessionnel" id="NomReseauProfessionnel" placeholder=""
                                    v-model="step2.nomReseauProfessionnel">
                            </div>
                            <small v-if="v$.step2.nomReseauProfessionnel.$error">{{
                                v$.step2.nomReseauProfessionnel.$errors[0].$message }}</small>
                        </div>
                        <div class="col">
                            <div class="input-groupe">
                                <label for="FinancementFondPropre">Financement Fond Propre <span
                                        class="text-danger">*</span></label>
                                <MazSelect v-model="step2.financementFondPropre" color="secondary" :options="choix" />
                            </div>
                            <small v-if="v$.step2.financementFondPropre.$error">{{
                                v$.step2.financementFondPropre.$errors[0].$message }}</small>
                        </div>
                    </div>

                    <div class="row mb-3 mt-3 content-group">
                        <div class="col">
                            <div class="input-groupe">
                                <label for="FinancementCreditBancaire">Financement Credit Bancaire <span
                                        class="text-danger">*</span></label>
                                <MazSelect v-model="step2.financementCreditBancaire" color="secondary" :options="choix" />
                            </div>
                            <small v-if="v$.step2.financementCreditBancaire.$error">{{
                                v$.step2.financementCreditBancaire.$errors[0].$message }}</small>
                        </div>
                        <div class="col">
                            <div class="input-groupe">

                                <label for="FinancementPartenaireExterieurs">Financement Partenaire Exterieurs <span
                                        class="text-danger">*</span></label>
                                <MazSelect v-model="step2.financementPartenaireExterieurs" color="secondary"
                                    :options="choix" />
                            </div>
                            <small v-if="v$.step2.financementPartenaireExterieurs.$error">{{
                                v$.step2.financementPartenaireExterieurs.$errors[0].$message }}</small>
                        </div>
                        <div class="col">
                            <div class="input-groupe"> <label for="FinancementAutre">Financement Autre <span
                                        class="text-danger">*</span></label>
                                <MazSelect v-model="step2.financementAutre" color="secondary" :options="choix" />
                            </div>
                            <small v-if="v$.step2.financementAutre.$error">{{ v$.step2.financementAutre.$errors[0].$message
                            }}</small>
                        </div>
                    </div>

                    <div class="row mb-3 mt-3 content-group">
                        <div class="col">
                            <div class="input-groupe"> <label for="AutreFinancement">Autre Financement <span
                                        class="text-danger">*</span></label>
                                <!-- <input type="text" name="AutreFinancement" id="AutreFinancement" placeholder=""
                                    v-model="step2.autreFinancement"> -->
                                    <MazSelect v-model="step2.autreFinancement" color="secondary" :options="choix" />
                            </div>
                            <small v-if="v$.step2.autreFinancement.$error">{{ v$.step2.autreFinancement.$errors[0].$message
                            }}</small>
                        </div>
                    </div>


                    <div class="row mb-3 mt-3 content-group" v-if="step2.appartenanceReseauProfessionnel === 'oui'">
                        <div class="col">
                            <div class="input-groupe">
                                <label for="DescriptionReseau">Description du Reseau <span
                                        class="text-danger">*</span></label>
                                <MazTextarea v-model="step2.descriptionReseau" name="comment" id="comment"
                                    color="secondary" />
                            </div>
                            <small v-if="v$.step2.descriptionReseau.$error">{{
                                v$.step2.descriptionReseau.$errors[0].$message }}</small>
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
                                <MazTextarea v-model="step2.difficultesRencontrees" name="comment" id="comment"
                                    color="secondary" />
                            </div>
                            <small v-if="v$.step2.difficultesRencontrees.$error">{{
                                v$.step2.difficultesRencontrees.$errors[0].$message }}</small>
                        </div>
                        <div class="col">
                            <div class="input-groupe">
                                <label for="SuggestionsProposees">Suggestions Proposees <span
                                        class="text-danger">*</span></label>
                                <MazTextarea v-model="step2.suggestionsProposees" name="comment" id="comment"
                                    color="secondary" />
                            </div>
                            <small v-if="v$.step2.suggestionsProposees.$error">{{
                                v$.step2.suggestionsProposees.$errors[0].$message }}</small>
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
                            <label for="ExistanceActionnaire">Existance Actionnaire <span
                                    class="text-danger">*</span></label>
                            <MazSelect v-model="step3.existanceActionnaire" color="secondary" :options="choix" />


                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="ExistanceConseilAdministration">Existance Conseil Administration <span
                                    class="text-danger">*</span></label>
                            <MazSelect v-model="step3.existanceConseilAdministration" color="secondary" :options="choix" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="ExistancePartenariat">Existance Partenariat <span
                                    class="text-danger">*</span></label>
                            <MazSelect v-model="step3.existancePartenariat" color="secondary" :options="choix" />
                        </div>
                    </div>
                </div>
                <div class="row mb-3 mt-3 content-group">
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PartenariatTechnique">Partenariat Technique<span
                                    class="text-danger">*</span></label>
                            <MazSelect v-model="step3.partenariatTechnique" color="secondary" :options="choix" />


                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PartenariatFinancier">Partenariat Financier <span
                                    class="text-danger">*</span></label>
                            <MazSelect v-model="step3.partenariatFinancier" color="secondary" :options="choix" />


                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PartenariatCommercial">Partenariat Commercial <span
                                    class="text-danger">*</span></label>
                            <MazSelect v-model="step3.partenariatCommercial" color="secondary" :options="choix" />


                        </div>
                    </div>
                </div>
                <div class="row mb-3 mt-3 content-group">
                    <div class="col">
                        <div class="input-groupe">
                            <label for="PartenariatAutre">Partenariat Autre <span class="text-danger">*</span></label>
                            <MazSelect v-model="step3.partenariatAutre" color="secondary" :options="choix" />


                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="AutrePartenariat">Autre Partenariat <span class="text-danger">*</span></label>
                            <MazSelect v-model="step3.autrePartenariat" color="secondary" :options="choix" />


                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="BesoinPartenaire">Besoin Partenaire <span class="text-danger">*</span></label>
                            <MazSelect v-model="step3.besoinPartenaire" color="secondary" :options="choix" />

                        </div>
                    </div>
                </div>


                <div class="row mb-3 mt-3 content-group">
                    <div class="col">
                        <div class="input-groupe">
                            <label for="BesoinPartenaireTechnique">Besoin Partenaire Technique<span
                                    class="text-danger">*</span></label>
                            <MazSelect v-model="step3.besoinPartenaireTechnique" color="secondary" :options="choix" />

                        </div>
                    </div>

                    <div class="col">
                        <div class="input-groupe">
                            <label for="BesoinPartenaireFinancier">Besoin Partenaire Financier <span
                                    class="text-danger">*</span></label>
                            <MazSelect v-model="step3.besoinPartenaireFinancier" color="secondary" :options="choix" />


                        </div>
                    </div>

                    <div class="col">
                        <div class="input-groupe">
                            <label for="BesoinPartenaireCommercial">Besoin Partenaire Commercial <span
                                    class="text-danger">*</span></label>
                            <MazSelect v-model="step3.besoinPartenaireCommercial" color="secondary" :options="choix" />


                        </div>
                    </div>
                </div>


                <!-- Groupe 3 -->

                <div class="row mb-3 mt-3 content-group">
                    <div class="col">
                        <div class="input-groupe">
                            <label for="BesoinPartenaireAutre">Besoin Partenaire Autre <span
                                    class="text-danger">*</span></label>
                            <MazSelect v-model="step3.besoinPartenaireAutre" color="secondary" :options="choix" />


                        </div>
                    </div>
                    <div class="col">
                        <div class="input-groupe">
                            <label for="AutreBesoinPartenaire">Autre Besoin Partenaire <span
                                    class="text-danger">*</span></label>
                            <MazSelect v-model="step3.autreBesoinPartenaire" color="secondary" :options="choix" />


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
                            <MazSelect v-model="step3.titreRepondant" color="secondary" :options="titre" />


                        </div>
                    </div>

                    <div class="col">
                        <div class="input-groupe">
                            <label for="NomRepondant">Nom Repondant <span class="text-danger">*</span></label>
                            <input v-model="step3.nomRepondant" type="text" name="NomRepondant" id="NomRepondant"
                                placeholder="">
                        </div>
                    </div>

                    <div class="col">
                        <div class="input-groupe">
                            <label for="FonctionRepondant">Fonction Repondant <span class="text-danger">*</span></label>
                            <input v-model="step3.fonctionRepondant" type="text" name="FonctionRepondant"
                                id="FonctionRepondant" placeholder="">
                        </div>
                    </div>
                </div>
                <div class="row mb-3 mt-3 content-group">
                    <div class="col">
                        <div class="input-groupe">
                            <label for="AdresseRepondant">Adresse du Repondant<span class="text-danger">*</span></label>
                            <input v-model="step3.adresseRepondant" type="text" name="AdresseRepondant"
                                id="AdresseRepondant" placeholder="">
                        </div>
                    </div>

                    <div class="col">
                        <div class="input-groupe">
                            <label for="VilleRepondant">Ville du Repondant <span class="text-danger">*</span></label>
                            <input v-model="step3.villeRepondant" type="text" name="VilleRepondant" id="VilleRepondant"
                                placeholder="">
                        </div>
                    </div>

                    <div class="col">
                        <div class="input-groupe">
                            <label for="TelephoneWhatsAppRepondant">Téléphone WhatsApp du Repondant <span
                                    class="text-danger">*</span></label>
                            <MazPhoneNumberInput v-model="step3.telephoneWhatsAppRepondant" show-code-on-list
                                color="secondary" defaultCountryCode="GN" :ignored-countries="['AC']"
                                @update="results = $event" :success="results?.isValid" />


                        </div>
                    </div>
                </div>

                <div class="row mb-3 mt-3 content-group">
                    <div class="col">
                        <div class="input-groupe">
                            <label for="Contacter">Contacter<span class="text-danger">*</span></label>
                            <MazSelect v-model="step3.contacter" color="secondary" :options="choix" />

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
                            <input v-model="step3.lienGoogleMapMpme" type="text" name="LienGoogleMapMpme"
                                id="LienGoogleMapMpme" placeholder="">
                        </div>
                    </div>

                    <div class="col">
                        <div class="input-groupe">
                            <label for="LatitudeMpme">Latitude Mpme<span class="text-danger">*</span></label>
                            <input v-model="step3.latitudeMpme" type="text" name="LatitudeMpme" id="LatitudeMpme"
                                placeholder="">
                        </div>
                    </div>

                    <div class="col">
                        <div class="input-groupe">
                            <label for="LongitudeMpme">Longitude Mpme<span class="text-danger">*</span></label>
                            <input v-model="step3.longitudeMpme" type="text" name="LongitudeMpme" id="LongitudeMpme"
                                placeholder="">
                        </div>
                    </div>
                </div>

                <div class="row mb-3 mt-3 content-group">
                    <div class="col">
                        <div class="input-groupe">
                            <label for="AltitudeMpme">Altitude Mpme <span class="text-danger">*</span></label>
                            <input v-model="step3.altitudeMpme" type="text" name="AltitudeMpme" id="AltitudeMpme"
                                placeholder="">
                        </div>
                    </div>

                    <div class="col">
                        <div class="input-groupe">
                            <label for="PrecisionGPSMpme">Precision GPS Mpme<span class="text-danger">*</span></label>
                            <input v-model="step3.precisionGPSMpme" type="text" name="PrecisionGPSMpme"
                                id="PrecisionGPSMpme" placeholder="">
                        </div>
                    </div>

                    <div class="col">
                        <div class="input-groupe">
                            <label for="OrigineDonnees">Origine Donnees<span class="text-danger">*</span></label>
                            <input v-model="step3.origineDonnees" type="text" name="OrigineDonnees" id="OrigineDonnees"
                                placeholder="">
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
import { require, lgmin, lgmax, ValidNumeri } from '@/functions/rules';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
    name: 'Componentlogin',
    components: { VueDatePicker },
    computed: {

        loggedInUser() {
            return this.$store.getters['user/loggedInUser'];
        },
        stepperProgress() {
            return (100 / 2) * (this.currentStep - 1) + '%'
        }

    },
    data() {
        return {
            currentStep: 1,
            error: '',
            isButtonDisabled: false,
            sortedCountryOptions: [],
            regionOptions: [],
            prefectureOptions: [],
            sous_prefectureOptions: [],
            sous_prefectureOptions: [],
            SecteurActiviteOptions: [],
            StatutJuridiqueOptions: [],
            BourseOptions: [], // Pour stocker les sous-secteurs sélectionnés
            SousSecteurActiviteOptions: [],
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
            v$: useVuelidate(),


            step1: {

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
                selectedSousSecteurs: [],
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
            },


            // etapes 2

            step2: {
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
            },




            // etapes 3

            step3: {
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
                adresseRepondant: '',
                villeRepondant: '',
                telephoneWhatsAppRepondant: '',
                contacter: '',
                lienGoogleMapMpme: '',
                latitudeMpme: '',
                longitudeMpme: '',
                altitudeMpme: '',
                precisionGPSMpme: '',
                origineDonnees: '',
            },

        };
    },
    validations: {
        step1: {
            region: { require },
            commune: { require, },
            ville: { require, },
            sous_prefecture: { require },
            localisation: {  },
            sigle_mpme: { require },
            nom: { require },
            quartier: { require },
            rue: {},
            boite_postale: { ValidNumeri },
            tel_what: { require },
            tel_second: { },
            email: { require },
            url: {},
            an_creation: { require },
            an_entre_acti: { require },
            code_st_juriq: {},
            autr_st_juriq: {},
            prin_sect_acti: { require },
            selectedSousSecteurs: { require },
            an_prod_1: { require },
            pers_per_femm: { ValidNumeri },
            pers_per_homm: { ValidNumeri },
            pers_temp_femm: { ValidNumeri },
            pers_temp_homm: { ValidNumeri },
            ch_aff_1: {},
            ch_aff_2: {},
            part_chiffre_affaire_exprtation: {},
            grpe_fililale: {},
            nationalite_groupe: {},
            capital_social: {},
            nbre_rccm: {},
            nbre_nif: {}

        },
        step2: {
                mpmeBourse:{require},
                nomBourse:{},
                receptionPrix:{require},
                principalPrix:{},
                anneePrixPrincipal:{},
                titreDirigeant:{require},
                nomDirigeant:{require},
                prenomDirigeant:{require},
                sexeDirigeant:{require},
                paysDirigeant:{require},
                anneeNaissanceDirigeant:{require},
                dirigeantProprietaire:{require},

                titreProprietaire:{require},
                nomProprietaire:{require},
                prenomProprietaire:{require},
                sexeProprietaire:{require},
                paysProprietaire:{require},
                anneeNaissanceProprietaire:{require},
                appartenanceReseauProfessionnel:{require},
                nomReseauProfessionnel:{},
                financementFondPropre:{require},
                financementCreditBancaire:{require},
                financementPartenaireExterieurs:{require},
                financementAutre:{require},

                autreFinancement:{require},
                descriptionReseau:{},
                difficultesRencontrees:{},
                suggestionsProposees:{},


        },
        step3: {


        },
    },
    methods: {
        createMpmeData() {
            return {
                Region: this.step1.region,
                Commune: this.step1.commune,
                Sousprefecture: this.step1.sous_prefecture,
                Ville: this.step1.ville,
                Localisation: this.step1.localisation,
                SigleMpme: this.step1.sigle_mpme,
                NomMpme: this.step1.nom,
                Quartier: this.step1.quartier,
                Rue: this.step1.rue,
                BoitePostale: this.step1.boite_postale,
                NumeroWhatsApp: this.step1.tel_what,
                NumeroTelephoneSecondaire: this.step1.tel_second,
                AdresseEmail: this.step1.email,
                SiteWeb: this.step1.url,
                AnneeCreation: this.step1.an_creation,
                AnneeEntreeActivite: this.step1.an_entre_acti,
                CodeStatutJuridique: this.step1.code_st_juriq,
                AutreStatutJuridique: this.step1.autr_st_juriq,
                PrincipalSecteurActivite: this.step1.prin_sect_acti,
                ListeSousSecteurActivite: this.step1.selectedSousSecteurs,
                AnneeProduction1: this.step1.an_prod_1,
                PersonnelPermanentFemme: this.step1.pers_per_femm,
                PersonnelPermanentHomme: this.step1.pers_per_homm,
                PersonnelTemporaireFemme: this.step1.pers_temp_femm,
                PersonnelTemporaireHomme: this.step1.pers_temp_homm,
                ChiffreAffaire1: this.step1.ch_aff_1,
                ChiffreAffaire2: this.step1.ch_aff_2,
                PartChiffreAffaireExprtation: this.step1.part_chiffre_affaire_exprtation,
                GroupeFililale: this.step1.grpe_fililale,
                NationaliteGroupe: this.step1.nationalite_groupe,
                CapitalSocial: this.step1.capital_social,
                NumeroRccm: this.step1.nbre_rccm,
                NumeroNif: this.step1.nbre_nif,

                MpmeBourse: this.step2.mpmeBourse,
                NomBourse: this.step2.nomBourse,
                RecptionPrix: this.step2.receptionPrix,
                PrincipalPrix: this.step2.principalPrix,
                // AnneePrixPrincipal: parseInt(this.step2.anneePrixPrincipal),
                AnneePrixPrincipal: parseInt(2015),
                TitreDirigeant: this.step2.titreDirigeant,
                NomDirigeant: this.step2.nomDirigeant,
                PrenomDirigeant: this.step2.prenomDirigeant,
                SexeDirigeant: this.step2.sexeDirigeant,
                PaysDirigeant: this.step2.paysDirigeant,
                AnneeNaissanceDirigeant: this.step2.anneeNaissanceDirigeant,
                DirigeantProprietaire: this.step2.dirigeantProprietaire,
                TitreProprietaire: this.step2.titreProprietaire,
                NomProprietaire: this.step2.nomProprietaire,
                PrenomProprietaire: this.step2.prenomProprietaire,
                SexeProprietaire: this.step2.sexeProprietaire,
                PaysProprietaire: this.step2.paysProprietaire,
                AnneeNaissanceProprietaire: this.step2.anneeNaissanceProprietaire,
                AppartenanceReseauProfessionnel: this.step2.appartenanceReseauProfessionnel,
                NomReseauProfessionnel: this.step2.nomReseauProfessionnel,
                FinancementFondPropre: this.step2.financementFondPropre,
                FinancementCreditBancaire: this.step2.financementCreditBancaire,
                FinancementPartenaireExterieurs: this.step2.financementPartenaireExterieurs,
                FinancementAutre: this.step2.financementAutre,
                DescriptionReseau: this.step2.descriptionReseau,
                AutreFinancement: this.step2.autreFinancement,
                DifficultesRencontrees: this.step2.difficultesRencontrees,
                SuggestionsProposees: this.step2.suggestionsProposees,

                ExistanceActionnaire: this.step3.existanceActionnaire,
                ExistanceConseilAdministration: this.step3.existanceConseilAdministration,
                ExistancePartenariat: this.step3.existancePartenariat,
                PartenariatTechnique: this.step3.partenariatTechnique,
                PartenariatFinancier: this.step3.partenariatFinancier,
                PartenariatCommercial: this.step3.partenariatCommercial,
                PartenariatAutre: this.step3.partenariatAutre,
                AutrePartenariat: this.step3.autrePartenariat,
                BesoinPartenaire: this.step3.besoinPartenaire,
                BesoinPartenaireTechnique: this.step3.besoinPartenaireTechnique,
                BesoinPartenaireFinancier: this.step3.besoinPartenaireFinancier,
                BesoinPartenaireCommercial: this.step3.besoinPartenaireCommercial,
                BesoinPartenaireAutre: this.step3.besoinPartenaireAutre,
                AutreBesoinPartenaire: this.step3.autreBesoinPartenaire,
                TitreRepondant: this.step3.titreRepondant,
                NomRepondant: this.step3.nomRepondant,
                FonctionRepondant: this.step3.fonctionRepondant,
                AdresseRepondant: this.step3.adresseRepondant,
                VilleRepondant: this.step3.villeRepondant,
                TelephoneWhatsAppRepondant: this.step3.telephoneWhatsAppRepondant,
                Contacter: this.step3.contacter,
                LienGoogleMapMpme: this.step3.lienGoogleMapMpme,
                LatitudeMpme: this.step3.latitudeMpme,
                LongitudeMpme: this.step3.longitudeMpme,
                AltitudeMpme: this.step3.altitudeMpme,
                PrecisionGPSMpme: this.step3.precisionGPSMpme,
                OrigineDonnees: this.step3.origineDonnees,
            }
        },
        async nextStep() {
            this.isButtonDisabled = true;
            if (this.currentStep === 1) {
                    this.error = '' 
                this.v$.step1.$touch()
                if (this.v$.$errors.length == 0) {
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
                        this.isButtonDisabled = false;
                    } else {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                        this.isButtonDisabled = false;
                    }
                } else {
                    console.log('errroor1', this.v$.$errors);
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                        this.isButtonDisabled = false;
                }

            } else if (this.currentStep === 2) {
                this.isButtonDisabled = true;
                 this.error = ''
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                this.v$.step2.$touch()
                if (this.v$.$errors.length == 0) {
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
                        this.isButtonDisabled = false;
                    } else {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                        console.error('Erreur lors de l\'enregistrement ', error);
                        this.isButtonDisabled = false;
                    }
                } else {

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                    console.log('errroor222', this.v$.$errors);
                    this.isButtonDisabled = false;

                }
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

        async submit() {
             this.error = ''
            this.v$.step3.$touch()
            if (this.v$.$errors.length == 0) {
                const mpmeData = this.createMpmeData();
                console.log('mpmeData1', mpmeData);
                const success = await this.enregistrerMpmeDonnees(mpmeData);
                console.log('success', success);
                if (success) {

                } else {
                    console.error('Erreur lors de l\'enregistrement des données pour le MPME');
                }
            }
        },
        async fetchgetOneMpme() {
            try {
                const userId = this.loggedInUser.user.Entreprises;
                // const userId = 'MPME-1580-2023'
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
                const userId = this.loggedInUser.user.Entreprises;
                // const userId = 'MPME-1580-2023'

                const response = await axios.put(`/mpme/${userId}`, mpmeData, {
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
                this.formatValidationErrors(error.response.data.errors)
                return false;
            }
        },

        async onPhoneNumberUpdate(updatedResult) {
            this.results = await updatedResult;
        },
        async fetchCountryOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
            try {
                await this.$store.dispatch('fetchCountries');
                const options = JSON.parse(JSON.stringify(this.$store.getters['getCountryOptions'])); // Accéder aux options des pays via le getter
                console.log('Options des pays:', options);
                this.sortedCountryOptions = options; // Affecter les options à votre propriété sortedCountryOptions
            } catch (error) {
                console.error('Erreur lors de la récupération des options des pays :', error.message);
            }
        },
        async fetchRegionOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
            try {
                await this.$store.dispatch('fetchRegionOptions');
                const options = JSON.parse(JSON.stringify(this.$store.getters['getRegionOptions'])); // Accéder aux options des pays via le getter
                console.log('Options desregions:', options);
                this.regionOptions = options; // Affecter les options à votre propriété sortedCountryOptions
            } catch (error) {
                console.error('Erreur lors de la récupération des options des pays :', error.message);
            }
        },
        async fetchPrefectureOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
            try {
                await this.$store.dispatch('fetchPrefectureOptions');
                const options = JSON.parse(JSON.stringify(this.$store.getters['getprefectureOptions'])); // Accéder aux options des pays via le getter
                console.log('Options des Prefecture:', options);
                this.prefectureOptions = options; // Affecter les options à votre propriété sortedCountryOptions
            } catch (error) {
                console.error('Erreur lors de la récupération des options des prefecture :', error.message);
            }
        },

        async fetchSousPrefectureOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
            try {
                await this.$store.dispatch('fetchSous_PrefectureOptions');
                const options = JSON.parse(JSON.stringify(this.$store.getters['getSousprefectureOptions'])); // Accéder aux options des pays via le getter
                console.log('Options des sous Prefecture:', options);
                this.sous_prefectureOptions = options; // Affecter les options à votre propriété sortedCountryOptions
            } catch (error) {
                console.error('Erreur lors de la récupération des options des sous prefecture :', error.message);
            }
        },

        async fetchQuartierOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
            try {

                await this.$store.dispatch('fetchQuartierOptions');
                const options = JSON.parse(JSON.stringify(this.$store.getters['getQuartierOptions'])); // Accéder aux options des pays via le getter
                console.log('Options des Quartier:', options);
                this.QuartierOptions = options; // Affecter les options à votre propriété sortedCountryOptions
            } catch (error) {
                console.error('Erreur lors de la récupération des options des prefecture :', error.message);
            }
        },
        async fetchSecteurActiviteOptions() {
            try {

                await this.$store.dispatch('fetchSecteurActiviteOptions'); // Action spécifique aux secteurs d'activité
                const options = JSON.parse(JSON.stringify(this.$store.getters['getsecteurActiviteOptions']));
                this.SecteurActiviteOptions = options;
            } catch (error) {
                console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error.message);
            }
        },
        async fetchSousSecteurActiviteOptions() {
      try {
        await this.$store.dispatch('fetchSousSecteurOptions'); // Remplacez par l'action de votre store
        this.SousSecteurActiviteOptions = this.$store.getters['getSousSecteurOptions'].map(option => {
          console.log('option',option);
          return option.label;
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error.message);
      }
    },
        async fetchStatutJuridiqueOptions() {
            try {

                await this.$store.dispatch('fetchStatutJuridiqueOptions'); // Action spécifique aux statuts juridiques
                const options = JSON.parse(JSON.stringify(this.$store.getters['getStatutJuridiqueOptions']));
                this.StatutJuridiqueOptions = options;
            } catch (error) {
                console.error('Erreur lors de la récupération des options des statuts juridiques:', error.message);
            }
        },
        async fetchBourseOptions() {
            try {

                await this.$store.dispatch('fetchBourseOptions'); // Action spécifique aux bourses
                const options = JSON.parse(JSON.stringify(this.$store.getters['getBourseOptions']));
                console.log('Options bourse:', options);
                this.BourseOptions = options;
            } catch (error) {
                console.error('Erreur lors de la récupération des options des bourses:', error.message);
            }
        },

        async formatValidationErrors(errors) {
            const formattedErrors = [];

            for (const field in errors) {
                const errorMessages = errors[field]; // Liste complète des messages d'erreur
                const concatenatedError = `${field}: ${errorMessages.join(',')}`; // Concaténer le champ et les erreurs
                formattedErrors.push(concatenatedError);
            }
            this.error = formattedErrors.join(',');;

            return formattedErrors.join(',');


        },

        storeUserData(userData) {
            this.step1.region = userData.Region;
            this.step1.commune = userData.Commune;
            this.step1.ville = userData.Ville;
            this.step1.sous_prefecture = userData.Sousprefecture;
            this.step1.localisation = userData.Localisation;
            this.step1.sigle_mpme = userData.SigleMpme;
            this.step1.nom = userData.NomMpme;
            this.step1.quartier = userData.Quartier;
            this.step1.rue = userData.Rue;
            this.step1.boite_postale = userData.BoitePostale;
            this.step1.tel_what = userData.NumeroWhatsApp;
            this.step1.tel_second = userData.NumeroTelephoneSecondaire;
            this.step1.email = userData.AdresseEmail;
            this.step1.url = userData.SiteWeb;
            this.step1.an_creation = userData.AnneeCreation;
            this.step1.an_entre_acti = userData.AnneeEntreeActivite;
            this.step1.code_st_juriq = userData.CodeStatutJuridique;
            this.step1.autr_st_juriq = userData.AutreStatutJuridique;
            this.step1.prin_sect_acti = userData.PrincipalSecteurActivite;
            this.step1.selectedSousSecteurs = userData.ListeSousSecteurActivite.split('|')
            this.step1.an_prod_1 = userData.AnneeProduction1;
            this.step1.pers_per_femm = userData.PersonnelPermanentFemme;
            this.step1.pers_per_homm = userData.PersonnelPermanentHomme;
            this.step1.pers_temp_femm = userData.PersonnelTemporaireFemme;
            this.step1.pers_temp_homm = userData.PersonnelTemporaireHomme;
            this.step1.ch_aff_1 = userData.ChiffreAffaire1;
            this.step1.ch_aff_2 = userData.ChiffreAffaire2;
            this.step1.part_chiffre_affaire_exprtation = userData.PartChiffreAffaireExprtation;
            this.step1.grpe_fililale = userData.GroupeFililale;
            this.step1.nationalite_groupe = userData.NationaliteGroupe;
            this.step1.capital_social = userData.CapitalSocial;
            this.step1.nbre_rccm = userData.NumeroRccm;
            this.step1.nbre_nif = userData.NumeroNif;

            this.step2.mpmeBourse = userData.MpmeBourse;
            this.step2.nomBourse = userData.NomBourse;
            this.step2.receptionPrix = userData.RecptionPrix;
            this.step2.principalPrix = userData.PrincipalPrix;
            this.step2.anneePrixPrincipal = userData.AnneePrixPrincipal;
            this.step2.titreDirigeant = userData.TitreDirigeant;
            this.step2.nomDirigeant = userData.NomDirigeant;
            this.step2.prenomDirigeant = userData.PrenomDirigeant;
            this.step2.sexeDirigeant = userData.SexeDirigeant;
            this.step2.paysDirigeant = userData.PaysDirigeant;
            this.step2.anneeNaissanceDirigeant = userData.AnneeNaissanceDirigeant;
            this.step2.dirigeantProprietaire = userData.DirigeantProprietaire;
            this.step2.titreProprietaire = userData.TitreProprietaire;
            this.step2.nomProprietaire = userData.NomProprietaire;
            this.step2.prenomProprietaire = userData.PrenomProprietaire;
            this.step2.sexeProprietaire = userData.SexeProprietaire;
            this.step2.paysProprietaire = userData.PaysProprietaire;
            this.step2.anneeNaissanceProprietaire = userData.AnneeNaissanceProprietaire;
            this.step2.appartenanceReseauProfessionnel = userData.AppartenanceReseauProfessionnel;
            this.step2.nomReseauProfessionnel = userData.NomReseauProfessionnel;
            this.step2.financementFondPropre = userData.FinancementFondPropre;
            this.step2.financementCreditBancaire = userData.FinancementCreditBancaire;
            this.step2.financementPartenaireExterieurs = userData.FinancementPartenaireExterieurs;
            this.step2.financementAutre = userData.FinancementAutre;
            this.step2.descriptionReseau = userData.DescriptionReseau;
            this.step2.autreFinancement = userData.AutreFinancement;
            this.step2.difficultesRencontrees = userData.DifficultesRencontrees;
            this.step2.suggestionsProposees = userData.SuggestionsProposees;

            this.step3.existanceConseilAdministration = userData.ExistanceConseilAdministration;
            this.step3.existancePartenariat = userData.ExistancePartenariat;
            this.step3.partenariatTechnique = userData.PartenariatTechnique;
            this.step3.partenariatFinancier = userData.PartenariatFinancier;
            this.step3.partenariatCommercial = userData.PartenariatCommercial;
            this.step3.partenariatAutre = userData.PartenariatAutre;
            this.step3.autrePartenariat = userData.AutrePartenariat;
            this.step3.besoinPartenaire = userData.BesoinPartenaire;
            this.step3.besoinPartenaireTechnique = userData.BesoinPartenaireTechnique;
            this.step3.besoinPartenaireFinancier = userData.BesoinPartenaireFinancier;
            this.step3.besoinPartenaireCommercial = userData.BesoinPartenaireCommercial;
            this.step3.besoinPartenaireAutre = userData.BesoinPartenaireAutre;
            this.step3.autreBesoinPartenaire = userData.AutreBesoinPartenaire;
            this.step3.titreRepondant = userData.TitreRepondant;
            this.step3.nomRepondant = userData.NomRepondant;
            this.step3.fonctionRepondant = userData.FonctionRepondant;
            this.step3.adresseRepondant = userData.AdresseRepondant;
            this.step3.villeRepondant = userData.VilleRepondant;
            this.step3.telephoneWhatsAppRepondant = userData.TelephoneWhatsAppRepondant;
            this.step3.contacter = userData.Contacter;
            this.step3.lienGoogleMapMpme = userData.LienGoogleMapMpme;
            this.step3.latitudeMpme = userData.LatitudeMpme;
            this.step3.longitudeMpme = userData.LongitudeMpme;
            this.step3.altitudeMpme = userData.AltitudeMpme;
            this.step3.precisionGPSMpme = userData.PrecisionGPSMpme;
            this.step3.origineDonnees = userData.OrigineDonnees;
            // ... Lier d'autres propriétés de la même manière
        },


    },



    async mounted() {
        try {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

            console.log("data", this.loggedInUser.access_token);

            await Promise.all([
                this.fetchgetOneMpme(),
                this.fetchCountryOptions(),
                this.fetchRegionOptions(),
                this.fetchPrefectureOptions(),
                this.fetchSousPrefectureOptions(),
                this.fetchQuartierOptions(),
                this.fetchSecteurActiviteOptions(),
                this.fetchSousSecteurActiviteOptions(),
                this.fetchStatutJuridiqueOptions(),
                this.initializeYears(),
                this.fetchBourseOptions()
            ]);

        } catch (error) {
            console.error('Erreur lors du chargement des données:', error);
        }
    },
    created() {
    this.fetchSousSecteurActiviteOptions(); // Appeler la méthode pour obtenir les options de l'API lors de la création du composant
  },
};
</script>
  
<style lang="css" scoped>

.error{
    /* border: 1px solid red; */
    max-width: 1140Px;
    margin: 40px auto;
    padding: 10Px;
    color:red;
       box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
    


}
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

.generastep {

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
}</style>