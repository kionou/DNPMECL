<template>
    <Loading v-if="loading"></Loading>
    <div class="generastep" data-aos="zoom-out" data-aos-delay="100">
        <div class="stepper">
            <div class="stepper-progress">
                <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
            </div>

            <div class="stepper-item" :class="{ 'current': currentStep == item, 'success': currentStep > item }"
                v-for="item in 3" :key="item">
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

    <div class="error" v-if="this.error">
        {{ error }} <br>
    </div>
    <div class="container-fluid" data-aos="zoom-out" data-aos-delay="100" style="margin-top:48px">
        <p class="title">Enregistrez votre MPME dès maintenant</p>
        <p class="aider"  @click="openModal">Cliquez ici si vous avez besoin d'aide</p>
        <p class="text-center">Un seul formulaire pour concrétiser votre projet entrepreneurial et enregistrer votre MPME en
            toute simplicité.</p>
            <p class="text-center text-danger">Les champs marqués * sont obligatoires</p>
        <div class="profil">
            <!-- <span>Logo Mpme</span> -->
            <div class="profil1" @click="OpenProfil">
                <i class="bi bi-camera"></i>
            </div>
        </div>


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
                                    <MazSelect v-model="step1.region" color="secondary" 
                                    :options="regionOptions"
                                    :class="{ 'error-border': resultError['Region'] }" @input="resultError['Region'] = false" />
                                </div>
                                <small v-if="v$.step1.region.$error">{{ v$.step1.region.$errors[0].$message }}</small>
                                <small v-if="resultError['Region']" > {{ resultError['Region'] }} </small>

                                
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Commune">Commune <span class="text-danger">*</span></label>
                                    <MazSelect v-model="step1.commune" color="secondary"
                                        :options="sous_prefectureOptions" @click="handleChange"
                                       :class="{ 'error-border': resultError['Commune'] }" @input="resultError['Commune'] = false" />
                                        
                                    <!-- <input type="text" name="Commune" id="Commune" placeholder="" v-model="step1.commune"> -->
                                </div>
                                <small v-if="v$.step1.commune.$error">{{ v$.step1.commune.$errors[0].$message }}</small>
                                <small v-if="resultError['Commune']" > {{ resultError['Commune'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ville">Ville <span class="text-danger">*</span></label>
                                    <input type="text" name="Ville" id="ville" placeholder="" v-model="step1.ville" 
                                    :class="{ 'error-border': resultError['Ville'] }" @input="resultError['Ville'] = false"
                                    >
                                </div>
                                <small v-if="v$.step1.ville.$error">{{ v$.step1.ville.$errors[0].$message }}</small>
                                <small v-if="resultError['Ville']" > {{ resultError['Ville'] }} </small>

                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <!-- <div class="col">
                                <div class="input-groupe">
                                    <label for="Sousprefecture">Sous-Prefecture <span class="text-danger">*</span></label>
                                    <MazSelect v-model="step1.sous_prefecture" color="secondary"
                                        :options="sous_prefectureOptions" />

                                </div>
                                <small v-if="v$.step1.sous_prefecture.$error">{{
                                    v$.step1.sous_prefecture.$errors[0].$message }}</small>


                            </div> -->
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Localisation">Localisation </label>
                                    <input type="text" name="Localisation" id="Localisation" placeholder=""
                                        v-model="step1.localisation"
                                        :class="{ 'error-border': resultError['Localisation'] }" @input="resultError['Localisation'] = false"
                                        >
                                </div>
                                <small v-if="v$.step1.localisation.$error">{{ v$.step1.localisation.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['Localisation']" > {{ resultError['Localisation'] }} </small>

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
                                        v-model="step1.sigle_mpme"
                                        :class="{ 'error-border': resultError['SigleMpme'] }" @input="resultError['SigleMpme'] = false"
                                        >
                                </div>
                                <small v-if="v$.step1.sigle_mpme.$error">{{ v$.step1.sigle_mpme.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['SigleMpme']" > {{ resultError['SigleMpme'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="nom">Nom de l'entreprise <span class="text-danger">*</span></label>
                                    <input type="text" name="nom" id="nom" placeholder="" v-model="step1.nom"
                                    :class="{ 'error-border': resultError['NomMpme'] }" @input="resultError['NomMpme'] = false"
                                    >
                                </div>
                                <small v-if="v$.step1.nom.$error">{{ v$.step1.nom.$errors[0].$message }}</small>
                                <small v-if="resultError['NomMpme']" > {{ resultError['NomMpme'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Quartier">Quartier <span class="text-danger">*</span></label>
                                    <MazSelect v-model="step1.quartier" color="secondary" :options="QuartierOptions" 
                                    :class="{ 'error-border': resultError['Quartier'] }" @input="resultError['Quartier'] = false"
                                    />

                                </div>
                                <small v-if="v$.step1.quartier.$error">{{ v$.step1.quartier.$errors[0].$message }}</small>
                                <small v-if="resultError['Quartier']" > {{ resultError['Quartier'] }} </small>

                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Rue">Rue </label>
                                    <input type="text" name="Rue" id="Rue" placeholder="" v-model="step1.rue"  
                                    :class="{ 'error-border': resultError['Rue'] }" @input="resultError['Rue'] = false"
                                    >
                                </div>
                                <small v-if="v$.step1.rue.$error">{{ v$.step1.rue.$errors[0].$message }}</small>
                                <small v-if="resultError['Rue']" > {{ resultError['Rue'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="nom">Boîte Postale </label>
                                    <input type="text" name="BoitePostale" id="BoitePostale" placeholder=""
                                        v-model="step1.boite_postale"  
                                        :class="{ 'error-border': resultError['BoitePostale'] }" @input="resultError['BoitePostale'] = false"
                                        >
                                </div>
                                <small v-if="v$.step1.boite_postale.$error">{{ v$.step1.boite_postale.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['BoitePostale']" > {{ resultError['BoitePostale'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroWhatsApp">Numéro WhatsApp <span class="text-danger">*</span></label>
                                    <MazPhoneNumberInput v-model="step1.tel_what" show-code-on-list color="secondary"
                                        :ignored-countries="['AC']" @update="results = $event"
                                        :success="results?.isValid" 
                                        :class="{ 'error-border': resultError['NumeroWhatsApp'] }" @input="resultError['NumeroWhatsApp'] = false"
                                        />


                                </div>
                            </div>
                            <small v-if="v$.step1.tel_what.$error">{{ v$.step1.tel_what.$errors[0].$message }}</small>
                            <small v-if="resultError['NumeroWhatsApp']" > {{ resultError['NumeroWhatsApp'] }} </small>

                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroTelephoneSecondaire">Numéro Téléphone Secondaire </label>
                                    <MazPhoneNumberInput v-model="step1.tel_second" show-code-on-list color="secondary"
                                        :ignored-countries="['AC']" @update="results = $event"
                                        :success="results?.isValid" 
                                        :class="{ 'error-border': resultError['NumeroTelephoneSecondaire'] }" @input="resultError['NumeroTelephoneSecondaire'] = false"
                                        />


                                </div>
                                <small v-if="v$.step1.tel_second.$error">{{ v$.step1.tel_second.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['NumeroTelephoneSecondaire']" > {{ resultError['NumeroTelephoneSecondaire'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AdresseEmail">Adresse Email <span class="text-danger">*</span></label>
                                    <input type="email" name="email" id="AdresseEmail" placeholder="" v-model="step1.email" 
                                    :class="{ 'error-border': resultError['AdresseEmail'] }" @input="resultError['AdresseEmail'] = false"
                                    >
                                </div>
                                <small v-if="v$.step1.email.$error">{{ v$.step1.email.$errors[0].$message }}</small>
                                <small v-if="resultError['AdresseEmail']" > {{ resultError['AdresseEmail'] }} </small>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="SiteWeb">Site Web </label>
                                    <input type="url" name="url" id="SiteWeb" placeholder="" v-model="step1.url" 
                                    :class="{ 'error-border': resultError['SiteWeb'] }" @input="resultError['SiteWeb'] = false"
                                    >
                                </div>
                                <small v-if="v$.step1.url.$error">{{ v$.step1.url.$errors[0].$message }}</small>
                                <small v-if="resultError['SiteWeb']" > {{ resultError['SiteWeb'] }} </small>


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
                                    <MazSelect v-model="step1.an_creation" color="secondary" :options="yearOptions"   
                                    :class="{ 'error-border': resultError['AnneeCreation'] }" @input="resultError['AnneeCreation'] = false"
                                     />
                                    <!-- <VueDatePicker v-model="step1.an_creation" :year-picker="true"
                                        :year-range="[1990, new Date().getFullYear()]"></VueDatePicker> -->

                                </div>
                                <small v-if="v$.step1.an_creation.$error">{{ v$.step1.an_creation.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['AnneeCreation']" > {{ resultError['AnneeCreation'] }} </small>


                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AnneeEntreeActivite">Année Entrée Activité <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step1.an_entre_acti" color="secondary" :options="yearOptions" 
                                    :class="{ 'error-border': resultError['AnneeEntreeActivite'] }" @input="resultError['AnneeEntreeActivite'] = false"
                                    />
                                    <!-- <VueDatePicker v-model="step1.an_entre_acti" :year-picker="true"
                                        :year-range="[1990, new Date().getFullYear()]" ></VueDatePicker> -->

                                </div>
                                <small v-if="v$.step1.an_entre_acti.$error">{{ v$.step1.an_entre_acti.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['AnneeEntreeActivite']" > {{ resultError['AnneeEntreeActivite'] }} </small>
                               


                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="CodeStatutJuridique">Code Statut Juridique</label>
                                    <MazSelect v-model="step1.code_st_juriq" color="secondary"
                                        :options="StatutJuridiqueOptions"  
                                        :class="{ 'error-border': resultError['CodeStatutJuridique'] }" @input="resultError['CodeStatutJuridique'] = false"
                                        />
                                </div>
                                <small v-if="v$.step1.code_st_juriq.$error">{{ v$.step1.code_st_juriq.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['CodeStatutJuridique']" > {{ resultError['CodeStatutJuridique'] }} </small>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AutreStatutJuridique">Autre Statut Juridique</label>
                                    <MazSelect v-model="step1.autr_st_juriq" color="secondary"
                                        :options="StatutJuridiqueOptions" 
                                        :class="{ 'error-border': resultError['AutreStatutJuridique'] }" @input="resultError['AutreStatutJuridique'] = false"
                                        />
                                    <!-- <input type="text" name="AutreStatutJuridique" id="AutreStatutJuridique" placeholder=""
                                        v-model="step1.autr_st_juriq"> -->
                                </div>
                                <small v-if="v$.step1.autr_st_juriq.$error">{{ v$.step1.autr_st_juriq.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['AutreStatutJuridique']" > {{ resultError['AutreStatutJuridique'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PrincipalSecteurActivite">Principal Secteur Activite <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step1.prin_sect_acti" color="secondary"
                                        :options="SecteurActiviteOptions" 
                                        :class="{ 'error-border': resultError['PrincipalSecteurActivite'] }" @input="resultError['PrincipalSecteurActivite'] = false"
                                        
                                        />
                                </div>
                                <small v-if="v$.step1.prin_sect_acti.$error">{{ v$.step1.prin_sect_acti.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['PrincipalSecteurActivite']" > {{ resultError['PrincipalSecteurActivite'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ListeSousSecteurActivite">Liste Sous Secteur Activite <span
                                            class="text-danger">*</span></label>
                                    <v-select v-model="step1.selectedSousSecteurs" :items=SousSecteurActiviteOptions
                                        multiple persistent-hint item-title="state" item-value="abbr"
                                        :class="{ 'error-border': resultError['ListeSousSecteurActivite'] }" @input="resultError['ListeSousSecteurActivite'] = false"
                                        ></v-select>
                                </div>
                                <small v-if="v$.step1.selectedSousSecteurs.$error">{{
                                    v$.step1.selectedSousSecteurs.$errors[0].$message }}</small>
                                <small v-if="resultError['ListeSousSecteurActivite']" > {{ resultError['ListeSousSecteurActivite'] }} </small>

                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AnneeProduction1">Année Production 1 <span
                                            class="text-danger">*</span></label>

                                    <MazSelect v-model="step1.an_prod_1" color="secondary" :options="yearOptions" 
                                    :class="{ 'error-border': resultError['AnneeProduction1'] }" @input="resultError['AnneeProduction1'] = false"
                                    
                                    />
                                    <!-- <VueDatePicker v-model="step1.an_prod_1" :year-picker="true"
                                        :year-range="[1990, new Date().getFullYear()]"></VueDatePicker> -->

                                </div>
                                <small v-if="v$.step1.an_prod_1.$error">{{ v$.step1.an_prod_1.$errors[0].$message }}</small>
                                <small v-if="resultError['AnneeProduction1']" > {{ resultError['AnneeProduction1'] }} </small>


                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PersonnelPermanentFemme">Personnel Permanent Femme </label>
                                    <input type="text" name="PersonnelPermanentFemme" id="PersonnelPermanentFemme"
                                        placeholder="" v-model="step1.pers_per_femm" 
                                        :class="{ 'error-border': resultError['PersonnelPermanentFemme'] }" @input="resultError['PersonnelPermanentFemme'] = false"
                                        >
                                </div>
                                <small v-if="v$.step1.pers_per_femm.$error">{{ v$.step1.pers_per_femm.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['PersonnelPermanentFemme']" > {{ resultError['PersonnelPermanentFemme'] }} </small>
                                
                            </div>
                            <div class="col">
                                <div class="input-groupe" >
                                    <label for="PersonnelPermanentHomme">Personnel Permanent Homme </label>
                                    <input type="text"
                                     name="PersonnelPermanentHomme"
                                      id="PersonnelPermanentHomme"
                                       placeholder="" v-model="step1.pers_per_homm" 
                                       :class="{ 'error-border': resultError['PersonnelPermanentHomme'] }" @input="resultError['PersonnelPermanentHomme'] = false" >
                                </div>
                                <small v-if="v$.step1.pers_per_homm.$error">{{ v$.step1.pers_per_homm.$errors[0].$message}}</small>
                             
                                <small v-if="resultError['PersonnelPermanentHomme']" > {{ resultError['PersonnelPermanentHomme'] }} </small>
                                

                            </div>
                        </div>


                        <div class="row mb-3 mt-3 content-group">

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PersonnelTemporaireFemme">Personnel Temporaire Femme </label>
                                    <input type="text" name="PersonnelTemporaireFemme" id="PersonnelTemporaireFemme"
                                        placeholder="" v-model="step1.pers_temp_femm" 
                                        :class="{ 'error-border': resultError['PersonnelTemporaireFemme'] }" @input="resultError['PersonnelTemporaireFemme'] = false"
                                        >
                                </div>
                                <small v-if="v$.step1.pers_temp_femm.$error">{{ v$.step1.pers_temp_femm.$errors[0].$message}}</small>
                                <small v-if="resultError['PersonnelTemporaireFemme']" > {{ resultError['PersonnelTemporaireFemme'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PersonnelTemporaireHomme">Personnel Temporaire Homme </label>
                                    <input type="text" name="PersonnelTemporaireHomme" id="PersonnelTemporaireHomme"
                                        placeholder="" v-model="step1.pers_temp_homm"  
                                        :class="{ 'error-border': resultError['PersonnelTemporaireHomme'] }" @input="resultError['PersonnelTemporaireHomme'] = false"
                                        >
                                </div>
                                <small v-if="v$.step1.pers_temp_homm.$error">{{ v$.step1.pers_temp_homm.$errors[0].$message }}</small>
                                <small v-if="resultError['PersonnelTemporaireHomme']" > {{ resultError['PersonnelTemporaireHomme'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NbreEmploye">Nombre d'employés Guinéens <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="NbreEmployeGuinne" id="NbreEmployeGuinne" placeholder=""
                                        v-model="step1.NbreEmployeGuinne" 
                                        :class="{ 'error-border': resultError['NbreEmploye'] }" @input="resultError['NbreEmploye'] = false"
                                        >

                                </div>
                                <small v-if="v$.step1.NbreEmployeGuinne.$error">{{
                                    v$.step1.NbreEmployeGuinne.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['NbreEmploye']" > {{ resultError['NbreEmploye'] }} </small>


                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                          
                          <div class="col">
                              <div class="input-groupe">
                                  <label for="NbreActionnaireGuinneF">Nombre d'actionnaires Guinéens Femmes</label>
                                  <input type="text" name="NbreActionnaireGuinneF" id="NbreActionnaireGuinneF"
                                      placeholder="" v-model="step1.NbreActionnaireGuinneF" 
                                      :class="{ 'error-border': resultError['NbreActionnaireGuinneF'] }" @input="resultError['NbreActionnaireGuinneF'] = false"
                                      >

                              </div>
                              <small v-if="v$.step1.NbreActionnaireGuinneF.$error">{{
                                  v$.step1.NbreActionnaireGuinneF.$errors[0].$message
                              }}</small>
                                <small v-if="resultError['NbreActionnaireGuinneF']" > {{ resultError['NbreActionnaireGuinneF'] }} </small>


                          </div>
                          <div class="col">
                              <div class="input-groupe">
                                  <label for="NbreActionnaireGuinneH">Nombre d'actionnaires Guinéens Hommes</label>
                                  <input type="text" name="NbreActionnaireGuinneH" id="NbreActionnaireGuinneH"
                                      placeholder="" v-model="step1.NbreActionnaireGuinneH"
                                      :class="{ 'error-border': resultError['NbreActionnaireGuinneH'] }" @input="resultError['NbreActionnaireGuinneH'] = false"
                                      >
                              </div>
                              <small v-if="v$.step1.NbreActionnaireGuinneH.$error">{{
                                  v$.step1.NbreActionnaireGuinneH.$errors[0].$message
                              }}</small>
                                <small v-if="resultError['NbreActionnaireGuinneH']" > {{ resultError['NbreActionnaireGuinneH'] }} </small>

                          </div>
                          <div class="col">
                              <div class="input-groupe">
                                  <label for="NbreActionnaireGuinne">Nombre d'actionnaires Guinéens</label>
                                  <input type="text" name="NbreActionnaireGuinne" id="NbreActionnaireGuinne"
                                      placeholder="" v-model="step1.NbreActionnaireGuinne" 
                                      :class="{ 'error-border': resultError['NbreActionnaireGuinne'] }" @input="resultError['NbreActionnaireGuinne'] = false"
                                      >
                              </div>
                              <small v-if="v$.step1.NbreActionnaireGuinne.$error">{{
                                  v$.step1.NbreActionnaireGuinne.$errors[0].$message
                              }}</small>
                                <small v-if="resultError['NbreActionnaire']" > {{ resultError['NbreActionnaire'] }} </small>

                          </div>
                      </div>
                        <div class="row mb-3 mt-3 content-group">
                            <!-- <div class="col">
                                <div class="input-groupe">
                                    <label for="ChiffreAffaire1">Chiffre Affaire 1</label>
                                    <MazSelect v-model="step1.ch_aff_1" color="secondary" :options="ChiffreOptions" />
                                   
                                </div>
                                <small v-if="v$.step1.ch_aff_1.$error">{{ v$.step1.ch_aff_1.$errors[0].$message }}</small>
                                <small v-if="resultError['ChiffreAffaire1']" > {{ resultError['ChiffreAffaire1'] }} </small>


                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ChiffreAffaire2">ChiffreAffaire 2</label>
                                  
                                    <MazSelect v-model="step1.ch_aff_2" color="secondary" :options="ChiffreOptions" />
                                </div>
                                <small v-if="v$.step1.ch_aff_2.$error">{{ v$.step1.ch_aff_2.$errors[0].$message }}</small>
                                <small v-if="resultError['ChiffreAffaire2']" > {{ resultError['ChiffreAffaire2'] }} </small>


                            </div> -->
                            
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PartChiffreAffaireExprtation">Part Chiffre Affaire Exportation </label>
                                    <input type="text" name="PartChiffreAffaireExprtation" id="PartChiffreAffaireExprtation"
                                        placeholder="" v-model="step1.part_chiffre_affaire_exprtation" 
                                        :class="{ 'error-border': resultError['PartChiffreAffaireExprtation'] }" @input="resultError['PartChiffreAffaireExprtation'] = false"
                                        >
                                </div>
                                <small v-if="v$.step1.part_chiffre_affaire_exprtation.$error">{{
                                    v$.step1.part_chiffre_affaire_exprtation.$errors[0].$message }}</small>
                                <small v-if="resultError['PartChiffreAffaireExprtation']" > {{ resultError['PartChiffreAffaireExprtation'] }} </small>


                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="GroupeFililale">Groupe Fililale </label>
                                    <input type="text" name="GroupeFililale" id="GroupeFililale" placeholder=""
                                        v-model="step1.grpe_fililale" 
                                        :class="{ 'error-border': resultError['GroupeFililale'] }" @input="resultError['GroupeFililale'] = false"
                                        >
                                </div>
                                <small v-if="v$.step1.grpe_fililale.$error">{{ v$.step1.grpe_fililale.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['GroupeFililale']" > {{ resultError['GroupeFililale'] }} </small>


                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NationaliteGroupe">Nationalité Groupe</label>

                                    <MazSelect v-model="step1.nationalite_groupe" :options="sortedCountryOptions"
                                        v-slot="{ option }" search color="secondary">
                                        <div class="flex items-center"
                                            style="padding-top: 0.5rem; padding-bottom: 0.5rem; width: 100%; gap: 1rem">
                                            <MazAvatar size="0.8rem" :src="option.flag" 
                                            :class="{ 'error-border': resultError['NationaliteGroupe'] }" @input="resultError['NationaliteGroupe'] = false"
                                            />
                                            <strong>
                                                {{ option.label }}
                                            </strong>
                                        </div>
                                    </MazSelect>
                                </div>
                                <small v-if="v$.step1.nationalite_groupe.$error">{{
                                    v$.step1.nationalite_groupe.$errors[0].$message }}</small>
                                <small v-if="resultError['NationaliteGroupe']" > {{ resultError['NationaliteGroupe'] }} </small>

                            </div>
                           
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="CapitalSocial">Capital Social</label>
                                    <input type="text" name="CapitalSocial" id="CapitalSocial" placeholder=""
                                        v-model="step1.capital_social" 
                                        :class="{ 'error-border': resultError['CapitalSocial'] }" @input="resultError['CapitalSocial'] = false"
                                        >
                                </div>
                                <small v-if="v$.step1.capital_social.$error">{{ v$.step1.capital_social.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['CapitalSocial']" > {{ resultError['CapitalSocial'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PaysSiegeSocial">Pays du Siège Social <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step1.PaysSiegeSocial" :options="sortedCountryOptions"
                                        v-slot="{ option }" search color="secondary" 
                                        :class="{ 'error-border': resultError['PaysSiegeSocial'] }" @input="resultError['PaysSiegeSocial'] = false"
                                        >
                                        <div class="flex items-center"
                                            style="padding-top: 0.5rem; padding-bottom: 0.5rem; width: 100%; gap: 1rem">
                                            <MazAvatar size="0.8rem" :src="option.flag" />
                                            <strong>
                                                {{ option.label }}
                                            </strong>
                                        </div>
                                    </MazSelect>

                                </div>
                                <small v-if="v$.step1.PaysSiegeSocial.$error">{{
                                    v$.step1.PaysSiegeSocial.$errors[0].$message
                                }}</small>
                                <small v-if="resultError['PaysSiegeSocial']" > {{ resultError['PaysSiegeSocial'] }} </small>

                            </div>



                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroRccm">Numéro Rccm </label>
                                    <input type="text" name="NumeroRccm" id="NumeroRccm" placeholder=""
                                        v-model="step1.nbre_rccm" 
                                        :class="{ 'error-border': resultError['NumeroRccm'] }" @input="resultError['NumeroRccm'] = false"
                                        >
                                </div>
                            </div>
                            <small v-if="v$.step1.nbre_rccm.$error">{{ v$.step1.nbre_rccm.$errors[0].$message }}</small>
                            <small v-if="resultError['NumeroRccm']" > {{ resultError['NumeroRccm'] }} </small>
                           
                        </div>

                        
                        <div class="row mb-3 mt-3 content-group">
                           
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroNif">Numero Nif</label>
                                    <input type="text" name="NumeroNif" id="NumeroNif" placeholder=""
                                        v-model="step1.nbre_nif" 
                                        :class="{ 'error-border': resultError['NumeroNif'] }" @input="resultError['NumeroNif'] = false"
                                        >
                                </div>
                            </div>
                            <small v-if="v$.step1.nbre_nif.$error">{{ v$.step1.nbre_nif.$errors[0].$message }}</small>
                            <small v-if="resultError['NumeroNif']" > {{ resultError['NumeroNif'] }} </small>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="DateGenerationNif">Date Generation du Numero Nif </label>
                                    <input type="text" name="DateGenerationNif" id="DateGenerationNif"
                                        placeholder="" v-model="step1.DateGenerationNif" 
                                        :class="{ 'error-border': resultError['DateGenerationNif'] }" @input="resultError['DateGenerationNif'] = false"
                                        >
                                </div>
                            </div>
                            <small v-if="v$.step1.DateGenerationNif.$error">{{v$.step1.DateGenerationNif.$errors[0].$message }}</small>
                            <small v-if="resultError['DateGenerationNif']" > {{ resultError['DateGenerationNif'] }} </small>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NumeroTva">Numero de la TVA</label>
                                    <input type="text" name="NumeroTva" id="NumeroTva" placeholder=""
                                        v-model="step1.NumeroTva" 
                                        :class="{ 'error-border': resultError['NumeroTva'] }" @input="resultError['NumeroTva'] = false"
                                        >
                                </div>
                            </div>
                            <small v-if="v$.step1.NumeroTva.$error">{{ v$.step1.NumeroTva.$errors[0].$message }}</small>
                            <small v-if="resultError['NumeroTva']" > {{ resultError['NumeroTva'] }} </small>


                        </div>


                        <div class="row mb-3 mt-3 content-group">
                        
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="CodeRegime">Code du Regime</label>
                                    <MazSelect v-model="step1.CodeRegime" color="secondary" :options="RegimesOptions" 
                                    :class="{ 'error-border': resultError['CodeRegime'] }" @input="resultError['CodeRegime'] = false"
                                    />
                                </div>
                            </div>
                                <small v-if="v$.step1.CodeRegime.$error">{{ v$.step1.CodeRegime.$errors[0].$message }}</small>
                                <small v-if="resultError['CodeRegime']" > {{ resultError['CodeRegime'] }} </small>

                                <div class="col">
                                <div class="input-groupe">
                                    <label for="CodeTypeGestion">Code Type Gestion</label>
                                    <MazSelect v-model="step1.CodeTypeGestion" color="secondary" :options="TypesGestionsOptions" 
                                    :class="{ 'error-border': resultError['CodeTypeGestion'] }" @input="resultError['CodeTypeGestion'] = false"
                                    />
                                </div>
                            </div>
                                <small v-if="v$.step1.CodeTypeGestion.$error">{{ v$.step1.CodeTypeGestion.$errors[0].$message }}</small>
                                <small v-if="resultError['CodeTypeGestion']" > {{ resultError['CodeTypeGestion'] }} </small>


                                <div class="col">
                                <div class="input-groupe">
                                    <label for="CodeTypeContribuable">Code Type Contribuable</label>
                                    <MazSelect v-model="step1.CodeTypeContribuable" color="secondary" :options="TypesContribuablesOptions" 
                                    :class="{ 'error-border': resultError['CodeTypeContribuable'] }" @input="resultError['CodeTypeContribuable'] = false"
                                    />
                                </div>
                            </div>
                                <small v-if="v$.step1.CodeTypeContribuable.$error">{{ v$.step1.CodeTypeContribuable.$errors[0].$message }}</small>
                                <small v-if="resultError['CodeTypeContribuable']" > {{ resultError['CodeTypeContribuable'] }} </small>

                        </div>

                    </div>
                    <!-- fin infos activite -->



                </div>
                <div class="btnForm py-3 d-flex items-center justify-content-end">
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
                                    <MazSelect v-model="step2.mpmeBourse" color="secondary" :options="choix"
                                        @change="handleMpmeBourseChange"
                                        :class="{ 'error-border': resultError['MpmeBourse'] }" @input="resultError['MpmeBourse'] = false" 
                                         />

                                </div>
                                <small v-if="v$.step2.mpmeBourse.$error">{{ v$.step2.mpmeBourse.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['MpmeBourse']" > {{ resultError['MpmeBourse'] }} </small>

                            </div>
                            <div class="col" v-if="step2.mpmeBourse === 'Oui'">
                                <div class="input-groupe">
                                    <label for="NomBourse">Nom Bourse <span class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.nomBourse" color="secondary" :options="BourseOptions" 
                                    :class="{ 'error-border': resultError['NomBourse'] }" @input="resultError['NomBourse'] = false" 
                                    />

                                </div>
                                <small v-if="v$.step2.nomBourse.$error">{{ v$.step2.nomBourse.$errors[0].$message }}</small>
                            <small v-if="resultError['NomBourse']" > {{ resultError['NomBourse'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="RecptionPrix">Réception Prix <span class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.receptionPrix" color="secondary" :options="choix" 
                                    :class="{ 'error-border': resultError['RecptionPrix'] }" @input="resultError['RecptionPrix'] = false" 
                                     />

                                </div>
                                <small v-if="v$.step2.receptionPrix.$error">{{ v$.step2.receptionPrix.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['RecptionPrix']" > {{ resultError['RecptionPrix'] }} </small>

                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col" v-if="step2.receptionPrix === 'Oui'">
                                <div class="input-groupe">
                                    <label for="PrincipalPrix">Principal Prix<span class="text-danger">*</span></label>
                                    <input type="text" name="PrincipalPrix" id="PrincipalPrix" placeholder=""
                                        v-model="step2.principalPrix" 
                                        :class="{ 'error-border': resultError['PrincipalPrix'] }" @input="resultError['PrincipalPrix'] = false" 
                                        >
                                </div>
                                <small v-if="v$.step2.principalPrix.$error">{{ v$.step2.principalPrix.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['PrincipalPrix']" > {{ resultError['PrincipalPrix'] }} </small>

                            </div>
                            <div class="col" v-if="step2.receptionPrix === 'Oui'">
                                <div class="input-groupe">
                                    <label for="AnneePrixPrincipal">Année Prix Principal <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.anneePrixPrincipal" color="secondary"
                                        :options="yearOptions" 
                                        :class="{ 'error-border': resultError['AnneePrixPrincipal'] }" @input="resultError['AnneePrixPrincipal'] = false" 
                                         />
                                    <!-- <VueDatePicker v-model="step2.anneePrixPrincipal" :year-picker="true"
                                        :year-range="[1990, new Date().getFullYear()]"></VueDatePicker> -->
                                </div>
                                <small v-if="v$.step2.anneePrixPrincipal.$error">{{
                                    v$.step2.anneePrixPrincipal.$errors[0].$message }}</small>
                            <small v-if="resultError['AnneePrixPrincipal']" > {{ resultError['AnneePrixPrincipal'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="TitreDirigeant">Titre Dirigeant <span class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.titreDirigeant" color="secondary" :options="titre" 
                                    :class="{ 'error-border': resultError['TitreDirigeant'] }" @input="resultError['TitreDirigeant'] = false" 
                                    />
                                </div>
                                <small v-if="v$.step2.titreDirigeant.$error">{{ v$.step2.titreDirigeant.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['TitreDirigeant']" > {{ resultError['TitreDirigeant'] }} </small>

                            </div>
                        </div>

                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NomDirigeant">Nom Dirigeant <span class="text-danger">*</span></label>
                                    <input type="text" name="NomDirigeant" id="NomDirigeant" placeholder=""
                                        v-model="step2.nomDirigeant" 
                                        :class="{ 'error-border': resultError['NomDirigeant'] }" @input="resultError['NomDirigeant'] = false" 
                                        >

                                </div>
                                <small v-if="v$.step2.nomDirigeant.$error">{{ v$.step2.nomDirigeant.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['NomDirigeant']" > {{ resultError['NomDirigeant'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe"> <label for="PrenomDirigeant">Prénom Dirigeant <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="PrenomDirigeant" id="PrenomDirigeant" placeholder=""
                                        v-model="step2.prenomDirigeant"  
                                        :class="{ 'error-border': resultError['PrenomDirigeant'] }" @input="resultError['PrenomDirigeant'] = false" 
                                        >
                                </div>
                                <small v-if="v$.step2.prenomDirigeant.$error">{{
                                    v$.step2.prenomDirigeant.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['PrenomDirigeant']" > {{ resultError['PrenomDirigeant'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe"> <label for="SexeDirigeant">Sexe Dirigeant <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.sexeDirigeant" color="secondary" :options="sexes"  
                                    :class="{ 'error-border': resultError['SexeDirigeant'] }" @input="resultError['SexeDirigeant'] = false" 
                                    />
                                </div>
                                <small v-if="v$.step2.sexeDirigeant.$error">{{ v$.step2.sexeDirigeant.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['SexeDirigeant']" > {{ resultError['SexeDirigeant'] }} </small>

                            </div>
                        </div>

                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe"> <label for="PaysDirigeant">Pays Dirigeant <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.paysDirigeant" :options="sortedCountryOptions"
                                        v-slot="{ option }" search color="secondary">
                                        <div class="flex items-center"
                                            style="padding-top: 0.5rem; padding-bottom: 0.5rem; width: 100%; gap: 1rem">
                                            <MazAvatar size="0.8rem" :src="option.flag"  
                                            :class="{ 'error-border': resultError['PaysDirigeant'] }" @input="resultError['PaysDirigeant'] = false" 
                                            />
                                            <strong>
                                                {{ option.label }}
                                            </strong>
                                        </div>
                                    </MazSelect>
                                </div>
                                <small v-if="v$.step2.paysDirigeant.$error">{{ v$.step2.paysDirigeant.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['PaysDirigeant']" > {{ resultError['PaysDirigeant'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">

                                    <label for="AnneeNaissanceDirigeant">Année Naissance Dirigeant </label>
                                    <MazSelect v-model="step2.anneeNaissanceDirigeant" color="secondary"
                                        :options="yearOptions"  
                                        :class="{ 'error-border': resultError['AnneeNaissanceDirigeant'] }" @input="resultError['AnneeNaissanceDirigeant'] = false" 
                                        />
                                    <!-- <VueDatePicker v-model="step2.anneeNaissanceDirigeant" :year-picker="true"
                                        :year-range="[1940, new Date().getFullYear()]"></VueDatePicker> -->
                                </div>
                                <small v-if="v$.step2.anneeNaissanceDirigeant.$error">{{
                                    v$.step2.anneeNaissanceDirigeant.$errors[0].$message }}</small>
                            <small v-if="resultError['AnneeNaissanceDirigeant']" > {{ resultError['AnneeNaissanceDirigeant'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="DirigeantProprietaire">Dirigeant Proprietaire <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.dirigeantProprietaire" color="secondary" :options="choix"  
                                    :class="{ 'error-border': resultError['DirigeantProprietaire'] }" @input="resultError['DirigeantProprietaire'] = false" 
                                    />
                                </div>
                                <small v-if="v$.step2.dirigeantProprietaire.$error">{{
                                    v$.step2.dirigeantProprietaire.$errors[0].$message }}</small>
                            <small v-if="resultError['DirigeantProprietaire']" > {{ resultError['DirigeantProprietaire'] }} </small>

                            </div>
                        </div>

                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="TitreProprietaire">Titre Proprietaire <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.titreProprietaire" color="secondary" :options="titre"  
                                    :class="{ 'error-border': resultError['TitreProprietaire'] }" @input="resultError['TitreProprietaire'] = false" 
                                    />
                                </div>
                                <small v-if="v$.step2.titreProprietaire.$error">{{
                                    v$.step2.titreProprietaire.$errors[0].$message }}</small>
                            <small v-if="resultError['TitreProprietaire']" > {{ resultError['TitreProprietaire'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe"> <label for="NomProprietaire">Nom Proprietaire <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="NomProprietaire" id="NomProprietaire" placeholder=""
                                        v-model="step2.nomProprietaire"  
                                        :class="{ 'error-border': resultError['NomProprietaire'] }" @input="resultError['NomProprietaire'] = false" 
                                        >
                                </div>
                                <small v-if="v$.step2.nomProprietaire.$error">{{
                                    v$.step2.nomProprietaire.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['NomProprietaire']" > {{ resultError['NomProprietaire'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PrenomProprietaire">Prénom Proprietaire <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="PrenomProprietaire" id="PrenomProprietaire" placeholder=""
                                        v-model="step2.prenomProprietaire" 
                                        :class="{ 'error-border': resultError['PrenomProprietaire'] }" @input="resultError['PrenomProprietaire'] = false" 
                                        >
                                </div>
                                <small v-if="v$.step2.prenomProprietaire.$error">{{
                                    v$.step2.prenomProprietaire.$errors[0].$message }}</small>
                            <small v-if="resultError['PrenomProprietaire']" > {{ resultError['PrenomProprietaire'] }} </small>

                            </div>
                        </div>

                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe"> <label for="SexeProprietaire">Sexe Proprietaire <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.sexeProprietaire" color="secondary" :options="sexes" 
                                    :class="{ 'error-border': resultError['SexeProprietaire'] }" @input="resultError['SexeProprietaire'] = false" 
                                    />
                                </div>
                                <small v-if="v$.step2.sexeProprietaire.$error">{{
                                    v$.step2.sexeProprietaire.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['SexeProprietaire']" > {{ resultError['SexeProprietaire'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe"> <label for="PaysProprietaire">Pays Proprietaire <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.paysProprietaire" :options="sortedCountryOptions"
                                        v-slot="{ option }" search color="secondary">
                                        <div class="flex items-center"
                                            style="padding-top: 0.5rem; padding-bottom: 0.5rem; width: 100%; gap: 1rem">
                                            <MazAvatar size="0.8rem" :src="option.flag"  
                                            :class="{ 'error-border': resultError['PaysProprietaire'] }" @input="resultError['PaysProprietaire'] = false" 
                                            />
                                            <strong>
                                                {{ option.label }}
                                            </strong>
                                        </div>
                                    </MazSelect>
                                </div>
                                <small v-if="v$.step2.paysProprietaire.$error">{{
                                    v$.step2.paysProprietaire.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['PaysProprietaire']" > {{ resultError['PaysProprietaire'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">

                                    <label for="AnneeNaissanceProprietaire">Année Naissance Proprietaire </label>
                                    <MazSelect v-model="step2.anneeNaissanceProprietaire" color="secondary"
                                        :options="yearOptions" 
                                        :class="{ 'error-border': resultError['AnneeNaissanceProprietaire'] }" @input="resultError['AnneeNaissanceProprietaire'] = false" 
                                        />
                                    <!-- <VueDatePicker v-model="step2.anneeNaissanceProprietaire" :year-picker="true"
                                        :year-range="[1940, new Date().getFullYear()]"></VueDatePicker> -->
                                </div>
                                <small v-if="v$.step2.anneeNaissanceProprietaire.$error">{{
                                    v$.step2.anneeNaissanceProprietaire.$errors[0].$message }}</small>
                            <small v-if="resultError['AnneeNaissanceProprietaire']" > {{ resultError['AnneeNaissanceProprietaire'] }} </small>

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
                                        :options="choix"  
                                        :class="{ 'error-border': resultError['AppartenanceReseauProfessionnel'] }" @input="resultError['AppartenanceReseauProfessionnel'] = false" 
                                        />
                                </div>
                                <small v-if="v$.step2.appartenanceReseauProfessionnel.$error">{{
                                    v$.step2.appartenanceReseauProfessionnel.$errors[0].$message }}</small>
                            <small v-if="resultError['AppartenanceReseauProfessionnel']" > {{ resultError['AppartenanceReseauProfessionnel'] }} </small>


                            </div>

                            <div class="col" v-if="step2.appartenanceReseauProfessionnel === 'Oui'">
                                <div class="input-groupe">
                                    <label for="NomReseauProfessionnel">Nom Reseau Professionnel <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="NomReseauProfessionnel" id="NomReseauProfessionnel"
                                        placeholder="" v-model="step2.nomReseauProfessionnel" 
                                        :class="{ 'error-border': resultError['NomReseauProfessionnel'] }" @input="resultError['NomReseauProfessionnel'] = false" 
                                        >
                                </div>
                                <small v-if="v$.step2.nomReseauProfessionnel.$error">{{
                                    v$.step2.nomReseauProfessionnel.$errors[0].$message }}</small>
                            <small v-if="resultError['NomReseauProfessionnel']" > {{ resultError['NomReseauProfessionnel'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="FinancementFondPropre">Financement Fond Propre <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.financementFondPropre" color="secondary" :options="choix" 
                                    :class="{ 'error-border': resultError['FinancementFondPropre'] }" @input="resultError['FinancementFondPropre'] = false" 
                                    />
                                </div>
                                <small v-if="v$.step2.financementFondPropre.$error">{{
                                    v$.step2.financementFondPropre.$errors[0].$message }}</small>
                            <small v-if="resultError['FinancementFondPropre']" > {{ resultError['FinancementFondPropre'] }} </small>

                            </div>
                        </div>

                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="FinancementCreditBancaire">Financement Credit Bancaire <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.financementCreditBancaire" color="secondary"
                                        :options="choix" 
                                        :class="{ 'error-border': resultError['FinancementCreditBancaire'] }" @input="resultError['FinancementCreditBancaire'] = false" 
                                        />
                                </div>
                                <small v-if="v$.step2.financementCreditBancaire.$error">{{
                                    v$.step2.financementCreditBancaire.$errors[0].$message }}</small>
                            <small v-if="resultError['FinancementCreditBancaire']" > {{ resultError['FinancementCreditBancaire'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">

                                    <label for="FinancementPartenaireExterieurs">Financement Partenaire Exterieurs <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.financementPartenaireExterieurs" color="secondary"
                                        :options="choix" 
                                        :class="{ 'error-border': resultError['FinancementPartenaireExterieurs'] }" @input="resultError['FinancementPartenaireExterieurs'] = false" 
                                        />
                                </div>
                                <small v-if="v$.step2.financementPartenaireExterieurs.$error">{{
                                    v$.step2.financementPartenaireExterieurs.$errors[0].$message }}</small>
                            <small v-if="resultError['FinancementPartenaireExterieurs']" > {{ resultError['FinancementPartenaireExterieurs'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe"> <label for="FinancementAutre">Financement Autre <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step2.financementAutre" color="secondary" :options="choix" 
                                    :class="{ 'error-border': resultError['FinancementAutre'] }" @input="resultError['FinancementAutre'] = false" 
                                    />
                                </div>
                                <small v-if="v$.step2.financementAutre.$error">{{
                                    v$.step2.financementAutre.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['FinancementAutre']" > {{ resultError['FinancementAutre'] }} </small>

                            </div>
                        </div>

                        <div class="row mb-3 mt-3 content-group">
                            <div class="col" v-if="step2.financementAutre === 'Oui'">
                                <div class="input-groupe"> <label for="AutreFinancement">Autre Financement <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="AutreFinancement" id="AutreFinancement" placeholder=""
                                        v-model="step2.autreFinancement" 
                                        :class="{ 'error-border': resultError['AutreFinancement'] }" @input="resultError['AutreFinancement'] = false" 
                                        >
                                    <!-- <MazSelect v-model="step2.autreFinancement" color="secondary" :options="choix" /> -->
                                </div>
                                <small v-if="v$.step2.autreFinancement.$error">{{
                                    v$.step2.autreFinancement.$errors[0].$message
                                }}</small>
                            <small v-if="resultError['AutreFinancement']" > {{ resultError['AutreFinancement'] }} </small>

                            </div>
                        </div>


                        <div class="row mb-3 mt-3 content-group" v-if="step2.appartenanceReseauProfessionnel === 'Oui'">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="DescriptionReseau">Description du Reseau <span
                                            class="text-danger">*</span></label>
                                    <MazTextarea v-model="step2.descriptionReseau" name="comment" id="comment"
                                        color="secondary" 
                                        :class="{ 'error-border': resultError['DescriptionReseau'] }" @input="resultError['DescriptionReseau'] = false" 
                                        />
                                </div>
                                <small v-if="v$.step2.descriptionReseau.$error">{{
                                    v$.step2.descriptionReseau.$errors[0].$message }}</small>
                            <small v-if="resultError['DescriptionReseau']" > {{ resultError['DescriptionReseau'] }} </small>

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
                                    <label for="DifficultesRencontrees">Difficultes Rencontrees </label>
                                    <MazTextarea v-model="step2.difficultesRencontrees" name="comment" id="comment"
                                        color="secondary" 
                                        :class="{ 'error-border': resultError['DifficultesRencontrees'] }" @input="resultError['DifficultesRencontrees'] = false" 
                                        />
                                </div>
                                <small v-if="v$.step2.difficultesRencontrees.$error">{{
                                    v$.step2.difficultesRencontrees.$errors[0].$message }}</small>
                            <small v-if="resultError['DifficultesRencontrees']" > {{ resultError['DifficultesRencontrees'] }} </small>

                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="SuggestionsProposees">Suggestions Proposees </label>
                                    <MazTextarea v-model="step2.suggestionsProposees" name="comment" id="comment"
                                        color="secondary" 
                                        :class="{ 'error-border': resultError['SuggestionsProposees'] }" @input="resultError['SuggestionsProposees'] = false" 
                                        />
                                </div>
                                <small v-if="v$.step2.suggestionsProposees.$error">{{ v$.step2.suggestionsProposees.$errors[0].$message }}</small>
                            <small v-if="resultError['SuggestionsProposees']" > {{ resultError['SuggestionsProposees'] }} </small>

                            </div>
                        </div>



                    </div>
                    <!-- fin infos activite -->


                </div>
                <div class="btnForm py-3 d-flex items-center justify-content-between">
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
                                      <MazSelect v-model="step3.existanceActionnaire" color="secondary" :options="choix" 
                                      :class="{ 'error-border': resultError['ExistanceActionnaire'] }" @input="resultError['ExistanceActionnaire'] = false" 
                                        />
                                      <small v-if="v$.step3.existanceActionnaire.$error">{{ v$.step3.existanceActionnaire.$errors[0].$message }}</small>
                                             <small v-if="resultError['ExistanceActionnaire']" > {{ resultError['ExistanceActionnaire'] }} </small>



                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ExistanceConseilAdministration">Existance Conseil Administration <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.existanceConseilAdministration" color="secondary"
                                        :options="choix" 
                                        :class="{ 'error-border': resultError['ExistanceConseilAdministration'] }" @input="resultError['ExistanceConseilAdministration'] = false" 
                                         />
                                        <small v-if="v$.step3.existanceConseilAdministration.$error">{{ v$.step3.existanceConseilAdministration.$errors[0].$message }}</small>
                            <small v-if="resultError['ExistanceConseilAdministration']" > {{ resultError['ExistanceConseilAdministration'] }} </small>

                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="ExistancePartenariat">Existance Partenariat <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.existancePartenariat" color="secondary" :options="choix"  
                                    :class="{ 'error-border': resultError['ExistancePartenariat'] }" @input="resultError['ExistancePartenariat'] = false" 
                                    />
                                    <small v-if="v$.step3.existancePartenariat.$error">{{ v$.step3.existancePartenariat.$errors[0].$message }}</small>
                            <small v-if="resultError['ExistancePartenariat']" > {{ resultError['ExistancePartenariat'] }} </small>

                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PartenariatTechnique">Partenariat Technique<span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.partenariatTechnique" color="secondary" :options="choix"  
                                    :class="{ 'error-border': resultError['PartenariatTechnique'] }" @input="resultError['PartenariatTechnique'] = false" 
                                    />
                                    <small v-if="v$.step3.partenariatTechnique.$error">{{ v$.step3.partenariatTechnique.$errors[0].$message }}</small>
                            <small v-if="resultError['PartenariatTechnique']" > {{ resultError['PartenariatTechnique'] }} </small>



                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PartenariatFinancier">Partenariat Financier <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.partenariatFinancier" color="secondary" :options="choix"  
                                    :class="{ 'error-border': resultError['PartenariatFinancier'] }" @input="resultError['PartenariatFinancier'] = false" 
                                     />
                                    <small v-if="v$.step3.partenariatFinancier.$error">{{ v$.step3.partenariatFinancier.$errors[0].$message }}</small>
                            <small v-if="resultError['PartenariatFinancier']" > {{ resultError['PartenariatFinancier'] }} </small>



                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PartenariatCommercial">Partenariat Commercial <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.partenariatCommercial" color="secondary" :options="choix"  
                                    :class="{ 'error-border': resultError['PartenariatCommercial'] }" @input="resultError['PartenariatCommercial'] = false" 
                                     />
                                    <small v-if="v$.step3.partenariatCommercial.$error">{{ v$.step3.partenariatCommercial.$errors[0].$message }}</small>
                            <small v-if="resultError['PartenariatCommercial']" > {{ resultError['PartenariatCommercial'] }} </small>



                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PartenariatAutre">Partenariat Autre <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.partenariatAutre" color="secondary" :options="choix"  
                                    :class="{ 'error-border': resultError['PartenariatAutre'] }" @input="resultError['PartenariatAutre'] = false" 
                                     />
                                    <small v-if="v$.step3.partenariatAutre.$error">{{ v$.step3.partenariatAutre.$errors[0].$message }}</small>
                            <small v-if="resultError['PartenariatAutre']" > {{ resultError['PartenariatAutre'] }} </small>



                                </div>
                            </div>
                            <div class="col" v-if="step3.partenariatAutre === 'Oui'">
                                <div class="input-groupe">
                                    <label for="AutrePartenariat">Autre Partenariat <span
                                            class="text-danger">*</span></label>
                                    <!-- <MazSelect v-model="step3.autrePartenariat" color="secondary" :options="choix" /> -->
                                    <input v-model="step3.autrePartenariat" type="text" name="FonctionRepondant"
                                        id="FonctionRepondant" placeholder=""  
                                        :class="{ 'error-border': resultError['AutrePartenariat'] }" @input="resultError['AutrePartenariat'] = false" 
                                        >
                                        <small v-if="v$.step3.autrePartenariat.$error">{{ v$.step3.autrePartenariat.$errors[0].$message }}</small>
                            <small v-if="resultError['AutrePartenariat']" > {{ resultError['AutrePartenariat'] }} </small>




                                </div>
                            </div>
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="BesoinPartenaire">Besoin Partenaire <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.besoinPartenaire" color="secondary" :options="choix"  
                                    :class="{ 'error-border': resultError['BesoinPartenaire'] }" @input="resultError['BesoinPartenaire'] = false" 
                                     />
                                    <small v-if="v$.step3.besoinPartenaire.$error">{{ v$.step3.besoinPartenaire.$errors[0].$message }}</small>
                            <small v-if="resultError['BesoinPartenaire']" > {{ resultError['BesoinPartenaire'] }} </small>


                                </div>
                            </div>
                        </div>


                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="BesoinPartenaireTechnique">Besoin Partenaire Technique<span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.besoinPartenaireTechnique" color="secondary"
                                        :options="choix"  
                                        :class="{ 'error-border': resultError['BesoinPartenaireTechnique'] }" @input="resultError['BesoinPartenaireTechnique'] = false" 
                                        />
                                        <small v-if="v$.step3.besoinPartenaireTechnique.$error">{{ v$.step3.besoinPartenaireTechnique.$errors[0].$message }}</small>
                                         <small v-if="resultError['BesoinPartenaireTechnique']" > {{ resultError['BesoinPartenaireTechnique'] }} </small>


                                </div>
                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="BesoinPartenaireFinancier">Besoin Partenaire Financier <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.besoinPartenaireFinancier" color="secondary"
                                        :options="choix"  
                                        :class="{ 'error-border': resultError['BesoinPartenaireFinancier'] }" @input="resultError['BesoinPartenaireFinancier'] = false" 
                                        />
                                        <small v-if="v$.step3.besoinPartenaireFinancier.$error">{{ v$.step3.besoinPartenaireFinancier.$errors[0].$message }}</small>
                            <small v-if="resultError['BesoinPartenaireFinancier']" > {{ resultError['BesoinPartenaireFinancier'] }} </small>



                                </div>
                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="BesoinPartenaireCommercial">Besoin Partenaire Commercial <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.besoinPartenaireCommercial" color="secondary"
                                        :options="choix"  
                                        :class="{ 'error-border': resultError['BesoinPartenaireCommercial'] }" @input="resultError['BesoinPartenaireCommercial'] = false" 
                                        />
                                        <small v-if="v$.step3.besoinPartenaireCommercial.$error">{{ v$.step3.besoinPartenaireCommercial.$errors[0].$message }}</small>
                            <small v-if="resultError['BesoinPartenaireCommercial']" > {{ resultError['BesoinPartenaireCommercial'] }} </small>



                                </div>
                            </div>
                        </div>


                        <!-- Groupe 3 -->

                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="BesoinPartenaireAutre">Besoin Partenaire Autre <span
                                            class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.besoinPartenaireAutre" color="secondary" :options="choix"  
                                    :class="{ 'error-border': resultError['BesoinPartenaireAutre'] }" @input="resultError['BesoinPartenaireAutre'] = false" 
                                    />
                                    <small v-if="v$.step3.besoinPartenaireAutre.$error">{{ v$.step3.besoinPartenaireAutre.$errors[0].$message }}</small>
                            <small v-if="resultError['BesoinPartenaireAutre']" > {{ resultError['BesoinPartenaireAutre'] }} </small>



                                </div>
                            </div>
                            <div class="col" v-if="step3.besoinPartenaireAutre === 'Oui'">
                                <div class="input-groupe">
                                    <label for="AutreBesoinPartenaire">Autre Besoin Partenaire <span
                                            class="text-danger">*</span></label>
                                    <!-- <MazSelect v-model="step3.autreBesoinPartenaire" color="secondary" :options="choix" /> -->
                                    <input v-model="step3.autreBesoinPartenaire" type="text" name="FonctionRepondant"
                                        id="FonctionRepondant" placeholder=""  
                                        :class="{ 'error-border': resultError['AutreBesoinPartenaire'] }" @input="resultError['AutreBesoinPartenaire'] = false" 
                                        >
                                        <small v-if="v$.step3.autreBesoinPartenaire.$error">{{ v$.step3.autreBesoinPartenaire.$errors[0].$message }}</small>
                            <small v-if="resultError['AutreBesoinPartenaire']" > {{ resultError['AutreBesoinPartenaire'] }} </small>


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
                                    <MazSelect v-model="step3.titreRepondant" color="secondary" :options="titre"  
                                    :class="{ 'error-border': resultError['TitreRepondant'] }" @input="resultError['TitreRepondant'] = false" 
                                    />
                                    <small v-if="v$.step3.titreRepondant.$error">{{ v$.step3.titreRepondant.$errors[0].$message }}</small>
                            <small v-if="resultError['TitreRepondant']" > {{ resultError['TitreRepondant'] }} </small>


                                </div>
                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="NomRepondant">Nom Repondant <span class="text-danger">*</span></label>
                                    <input v-model="step3.nomRepondant" type="text" name="NomRepondant" id="NomRepondant"
                                        placeholder=""  
                                        :class="{ 'error-border': resultError['NomRepondant'] }" @input="resultError['NomRepondant'] = false" 
                                        >
                                        <small v-if="v$.step3.nomRepondant.$error">{{ v$.step3.nomRepondant.$errors[0].$message }}</small>
                            <small v-if="resultError['NomRepondant']" > {{ resultError['NomRepondant'] }} </small>

                                </div>
                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="FonctionRepondant">Fonction Repondant <span
                                            class="text-danger">*</span></label>
                                    <input v-model="step3.fonctionRepondant" type="text" name="FonctionRepondant"
                                        id="FonctionRepondant" placeholder=""  
                                        :class="{ 'error-border': resultError['FonctionRepondant'] }" @input="resultError['FonctionRepondant'] = false" 
                                        >
                                        <small v-if="v$.step3.fonctionRepondant.$error">{{ v$.step3.fonctionRepondant.$errors[0].$message }}</small>
                            <small v-if="resultError['FonctionRepondant']" > {{ resultError['FonctionRepondant'] }} </small>

                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AdresseRepondant">Adresse du Repondant<span
                                            class="text-danger">*</span></label>
                                    <input v-model="step3.adresseRepondant" type="text" name="AdresseRepondant"
                                        id="AdresseRepondant" placeholder=""  
                                        :class="{ 'error-border': resultError['AdresseRepondant'] }" @input="resultError['AdresseRepondant'] = false" 
                                        >
                                        <small v-if="v$.step3.adresseRepondant.$error">{{ v$.step3.adresseRepondant.$errors[0].$message }}</small>
                            <small v-if="resultError['AdresseRepondant']" > {{ resultError['AdresseRepondant'] }} </small>

                                </div>
                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="VilleRepondant">Ville du Repondant <span
                                            class="text-danger">*</span></label>
                                    <input v-model="step3.villeRepondant" type="text" name="VilleRepondant"
                                        id="VilleRepondant" placeholder=""  
                                        :class="{ 'error-border': resultError['VilleRepondant'] }" @input="resultError['VilleRepondant'] = false" 
                                        >
                                        <small v-if="v$.step3.villeRepondant.$error">{{ v$.step3.villeRepondant.$errors[0].$message }}</small>
                            <small v-if="resultError['VilleRepondant']" > {{ resultError['VilleRepondant'] }} </small>

                                </div>
                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="TelephoneWhatsAppRepondant">Téléphone WhatsApp du Repondant <span
                                            class="text-danger">*</span></label>
                                    <MazPhoneNumberInput v-model="step3.telephoneWhatsAppRepondant" show-code-on-list
                                        color="secondary"  :ignored-countries="['AC']"
                                        @update="results = $event" :success="results?.isValid" 
                                        :class="{ 'error-border': resultError['TelephoneWhatsAppRepondant'] }" @input="resultError['TelephoneWhatsAppRepondant'] = false" 
                                         />

                                        <small v-if="v$.step3.telephoneWhatsAppRepondant.$error">{{ v$.step3.telephoneWhatsAppRepondant.$errors[0].$message }}</small>
                            <small v-if="resultError['TelephoneWhatsAppRepondant']" > {{ resultError['TelephoneWhatsAppRepondant'] }} </small>

                                </div>
                            </div>
                        </div>

                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="Contacter">Contacter<span class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.contacter" color="secondary" :options="choix"  
                                    :class="{ 'error-border': resultError['Contacter'] }" @input="resultError['Contacter'] = false" 
                                    />
                                    <small v-if="v$.step3.contacter.$error">{{ v$.step3.contacter.$errors[0].$message }}</small>
                            <small v-if="resultError['Contacter']" > {{ resultError['Contacter'] }} </small>

                                </div>
                            </div>


                        </div>





                    </div>
                    <!-- fin infos entreprise -->

                       <!-- debut autre input-->
                       <div class="content">
                     <p class="titre">INFORMATIONS DE COMPTABILITE ET DE CARTE </p>
                <div class="row mb-3 mt-3 content-group">
                    <div class="col">
                        <div class="input-groupe">
                            <label for="TypeComptabilite">Type Comptabilite <span class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.TypeComptabilite" color="secondary" :options="Comptabilite" 
                                    :class="{ 'error-border': resultError['TypeComptabilite'] }" @input="resultError['TypeComptabilite'] = false" 
                                     />
                                    <small v-if="v$.step3.TypeComptabilite.$error">{{ v$.step3.TypeComptabilite.$errors[0].$message }}</small>
                            <small v-if="resultError['TypeComptabilite']" > {{ resultError['TypeComptabilite'] }} </small>

                        </div>
                    </div>

                    <div class="col">
                        <div class="input-groupe">
                            <label for="TypeCarte">Type de Carte<span class="text-danger">*</span></label>
                                    <MazSelect v-model="step3.TypeCarte" color="secondary" :options="CarteTypeOptions"  
                                    :class="{ 'error-border': resultError['TypeCarte'] }" @input="resultError['TypeCarte'] = false" 
                                    />
                                    <small v-if="v$.step3.TypeCarte.$error">{{ v$.step3.TypeCarte.$errors[0].$message }}</small>
                            <small v-if="resultError['TypeCarte']" > {{ resultError['TypeCarte'] }} </small>

                        </div>
                    </div>
                    <div class="col" v-if="step3.TypeCarte !== null ">
                        <div class="input-groupe">
                            <label for="NumeroCarte">Numero de Carte<span class="text-danger">*</span></label>
                            <input v-model="step3.NumeroCarte" type="text" name="NumeroCarte" id="NumeroCarte"
                                placeholder=""  
                                :class="{ 'error-border': resultError['NumeroCarte'] }" @input="resultError['NumeroCarte'] = false" 
                                >
                                <small v-if="v$.step3.NumeroCarte.$error">{{ v$.step3.NumeroCarte.$errors[0].$message }}</small>
                            <small v-if="resultError['NumeroCarte']" > {{ resultError['NumeroCarte'] }} </small>

                        </div>
                    </div>
                </div>

                       </div> 
                    <!-- fin autre input-->

                    <!-- debut infos activite -->
                    <div class="content">
                        <p class="titre">INFORMATIONS GEOGRAPHIQUES</p>
                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="LienGoogleMapMpme">Lien Google Map Mpme</label>
                                    <input v-model="step3.lienGoogleMapMpme" type="text" name="LienGoogleMapMpme"
                                        id="LienGoogleMapMpme" placeholder=""  
                                        :class="{ 'error-border': resultError['LienGoogleMapMpme'] }" @input="resultError['LienGoogleMapMpme'] = false" 
                                        >
                                        <small v-if="v$.step3.lienGoogleMapMpme.$error">{{ v$.step3.lienGoogleMapMpme.$errors[0].$message }}</small>
                            <small v-if="resultError['LienGoogleMapMpme']" > {{ resultError['LienGoogleMapMpme'] }} </small>

                                </div>
                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="LatitudeMpme">Latitude Mpme</label>
                                    <input v-model="step3.latitudeMpme" type="text" name="LatitudeMpme" id="LatitudeMpme"
                                        placeholder=""  
                                        :class="{ 'error-border': resultError['LatitudeMpme'] }" @input="resultError['LatitudeMpme'] = false" 
                                        >
                                        <small v-if="v$.step3.latitudeMpme.$error">{{ v$.step3.latitudeMpme.$errors[0].$message }}</small>
                            <small v-if="resultError['LatitudeMpme']" > {{ resultError['LatitudeMpme'] }} </small>

                                </div>
                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="LongitudeMpme">Longitude Mpme</label>
                                    <input v-model="step3.longitudeMpme" type="text" name="LongitudeMpme" id="LongitudeMpme"
                                        placeholder=""  
                                        :class="{ 'error-border': resultError['LongitudeMpme'] }" @input="resultError['LongitudeMpme'] = false" 
                                        >
                                        <small v-if="v$.step3.longitudeMpme.$error">{{ v$.step3.longitudeMpme.$errors[0].$message }}</small>
                            <small v-if="resultError['LongitudeMpme']" > {{ resultError['LongitudeMpme'] }} </small>

                                </div>
                            </div>
                        </div>

                        <div class="row mb-3 mt-3 content-group">
                            <div class="col">
                                <div class="input-groupe">
                                    <label for="AltitudeMpme">Altitude Mpme </label>
                                    <input v-model="step3.altitudeMpme" type="text" name="AltitudeMpme" id="AltitudeMpme"
                                        placeholder=""  
                                        :class="{ 'error-border': resultError['AltitudeMpme'] }" @input="resultError['AltitudeMpme'] = false" 
                                        >
                                        <small v-if="v$.step3.altitudeMpme.$error">{{ v$.step3.altitudeMpme.$errors[0].$message }}</small>
                            <small v-if="resultError['AltitudeMpme']" > {{ resultError['AltitudeMpme'] }} </small>

                                </div>
                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="PrecisionGPSMpme">Precision GPS Mpme</label>
                                    <input v-model="step3.precisionGPSMpme" type="text" name="PrecisionGPSMpme"
                                        id="PrecisionGPSMpme" placeholder=""  
                                        :class="{ 'error-border': resultError['PrecisionGPSMpme'] }" @input="resultError['PrecisionGPSMpme'] = false" 
                                        >
                                        <small v-if="v$.step3.precisionGPSMpme.$error">{{ v$.step3.precisionGPSMpme.$errors[0].$message }}</small>
                            <small v-if="resultError['PrecisionGPSMpme']" > {{ resultError['PrecisionGPSMpme'] }} </small>

                                </div>
                            </div>

                            <div class="col">
                                <div class="input-groupe">
                                    <label for="OrigineDonnees">Origine Donnees</label>
                                    <input v-model="step3.origineDonnees" type="text" name="OrigineDonnees"
                                        id="OrigineDonnees" placeholder=""  
                                        :class="{ 'error-border': resultError['OrigineDonnees'] }" @input="resultError['OrigineDonnees'] = false" 
                                        >
                                        <small v-if="v$.step3.origineDonnees.$error">{{ v$.step3.origineDonnees.$errors[0].$message }}</small>
                                       <small v-if="resultError['OrigineDonnees']" > {{ resultError['OrigineDonnees'] }} </small>

                                </div>
                            </div>
                        </div>



                    </div>
                    <!-- fin infos activite -->

                </div>

                <div class="btnForm py-3 d-flex items-center justify-content-between">
                    <button class="btnLogin" @click.prevent="prevStep">Précédent</button>
                    <button class="btnLogin" @click.prevent="nextStep">Terminer</button>
                </div>
            </div>
            <MazDialog v-model="isOpen" noClose title="Modification de l'Entreprise">
                <p>
                    Votre compte a été modifié avec succès. Souhaitez-vous consulter votre profil ?
                </p>
                <template #footer>

                    <div class="supp" @click="espace" style="background-color: red; "> Non</div>

                    <div class="supp" @click="profil" style="background-color: var(--color-primary);"> Oui</div>

                </template>
            </MazDialog>

            <MazDialog v-if="PostLogo" v-model="PostLogo" title="Ajoutez votre logo">
                <div>

                    <div id="uploadArea" class="upload-area">
                        <!-- Header -->
                        {{ error }}
                        <div class="upload-area__header">
                            <h1 class="upload-area__title">Téléchargez votre fichier</h1>
                            <p class="upload-area__paragraph">
                                Le fichier doit être une image
                                <strong class="upload-area__tooltip">
                                    comme
                                    <span class="upload-area__tooltip-data">{{ imagesTypes.join(', ') }}</span>
                                </strong>
                            </p>
                        </div>
                        <!-- End Header -->

                        <!-- Drop Zoon -->
                        <div id="dropZoon" class="upload-area__drop-zoon drop-zoon">
                            <div class="profile-pic">
                                <label class="-label" for="file">
                                    <span class="glyphicon glyphicon-camera"></span>
                                    <span>Change Image</span>
                                </label>
                                <input id="file" type="file" @change="loadFile" />
                                
                                <img   v-if="userData.profile === null" src="@/assets/img/flags.png" id="output" width="200" />
                                <img v-else :src="userData.profile" id="output" width="200" />

                            </div>


                        </div>
                        <!-- End Drop Zoon -->


                    </div>
                </div>

            </MazDialog>

            <MazDialog v-model="msgsuccess" title="Enregistrement de Logo">
                <p>
                    Logo enregistrer avec succès !!!
                </p>
                <template #footer="{ close }">

                    <div class="supp" @click="close" style="background-color: blue; "> Ok</div>

                </template>
            </MazDialog>
            <MazDialog v-model="DemandeAide" noClose title="Demande d'aide">
                <p>
                    Besoin d'aide ? <br>
                    Souhaitez-vous être assisté par la direction pour remplir vos informations ?
                </p>
                
                <template #footer="{ close }">

                    <div class="supp" @click="close" style="background-color: red; "> Non</div>

                    <div class="supp" @click="HamdleAide" style="background-color: var(--color-primary);"> Oui</div>

                </template>
            </MazDialog>
            <MazDialog v-model="msg" title="Demande Validée">
        <p>
            Votre demande  a été enregistrée avec succès. Vous allez bientôt recevoir
                   un e-mail contenant les étapes à suivre.
        </p>
          <div class="supp" @click="close" style="background-color: blue; "> Ok</div>
      </MazDialog>
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
import MazDialog from 'maz-ui/components/MazDialog'
import Loading from './other/preloader.vue';
import chiffre from '@/lib/chiffre.json';

export default {
    name: 'Componentlogin',
    components: { VueDatePicker, MazDialog, Loading },
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
            loading: true,
            PostLogo: false,
            msgsuccess: false,
            DemandeAide:false,
            msg:false,
            imagesTypes: ['jpeg', 'png', 'svg', 'gif'],
            currentStep: 1,
            error: '',
            resultError:{},
            isButtonDisabled: false,
            isOpen: false,
            sortedCountryOptions: [],
            regionOptions: [],
            prefectureOptions: [],
            sous_prefectureOptions: [],
            sous_prefectureOptions: [],
            SecteurActiviteOptions: [],
            StatutJuridiqueOptions: [],
            CarteTypeOptions:[],
            Comptabilite:[],
            RegimesOptions:[],
            TypesContribuablesOptions:[],
            TypesGestionsOptions:[],
            ChiffreOptions: chiffre,
            BourseOptions: [], // Pour stocker les sous-secteurs sélectionnés
            SousSecteurActiviteOptions: [],
            years: [],
            yearOptions: [],
            userData: '',
            sexes: [
                { label: 'Masculin', value: 'M' },
                { label: 'Féminin', value: 'F' },
            ],
            choix: [
                { label: 'Oui', value: 'Oui' },
                { label: 'Non', value: 'Non' },
            ],
            titre: [
                { label: 'Monsieur', value: 'M' },
                { label: 'Madame', value: 'F' },
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
                pers_per_femm: 0,
                pers_per_homm: 0,
                pers_temp_femm: 0,
                pers_temp_homm: 0,
                ch_aff_1: "",
                ch_aff_2: "",
                part_chiffre_affaire_exprtation: "",
                grpe_fililale: "",
                nationalite_groupe: "",
                capital_social: "",
                nbre_rccm: "",
                nbre_nif: "",

                NbreEmployeGuinne: 0,
                NbreActionnaireGuinneF: 0,
                NbreActionnaireGuinneH: 0,
                NbreActionnaireGuinne: 0,
                PaysSiegeSocial: 0,

                DateGenerationNif:'',
                NumeroTva:'',
                CodeRegime:'',
                CodeTypeGestion:'',
                CodeTypeContribuable:'',


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

                TypeComptabilite:'',
                TypeCarte:'',
                NumeroCarte:'',

            },

        };
    },
    validations: {
        step1: {
            region: { require },
            commune: { require, },
            ville: { require, },
            // sous_prefecture: { require },
            localisation: {},
            sigle_mpme: { require },
            nom: { require },
            quartier: { require },
            rue: {},
            boite_postale: { ValidNumeri },
            tel_what: { require },
            tel_second: {},
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
            nbre_nif: {},

            NbreEmployeGuinne: {require , ValidNumeri },
            NbreActionnaireGuinneF: { ValidNumeri },
            NbreActionnaireGuinneH: { ValidNumeri },
            NbreActionnaireGuinne: { ValidNumeri },
            PaysSiegeSocial: {require},

            DateGenerationNif:{},
            NumeroTva:{},
            CodeRegime:{},
            CodeTypeGestion:{},
            CodeTypeContribuable:{},

        },
        step2: {
            mpmeBourse: { require},
            nomBourse: {},
            receptionPrix: { require },
            principalPrix: {},
            anneePrixPrincipal: {},
            titreDirigeant: { require },
            nomDirigeant: { require },
            prenomDirigeant: { require },
            sexeDirigeant: { require },
            paysDirigeant: { require },
            anneeNaissanceDirigeant: {},
            dirigeantProprietaire: { require },

            titreProprietaire: { require },
            nomProprietaire: { require },
            prenomProprietaire: { require },
            sexeProprietaire: { require },
            paysProprietaire: { require },
            anneeNaissanceProprietaire: {  },
            appartenanceReseauProfessionnel: { require },
            nomReseauProfessionnel: {},
            financementFondPropre: { require },
            financementCreditBancaire: { require },
            financementPartenaireExterieurs: { require },
            financementAutre: { require },

            autreFinancement: {},
            descriptionReseau: {},
            difficultesRencontrees: {},
            suggestionsProposees: {},


        },
        step3: {

                existanceActionnaire: {require},
                existanceConseilAdministration: {require},
                existancePartenariat: {require},
                partenariatTechnique: {require},
                partenariatFinancier: {require},
                partenariatCommercial: {require},
                partenariatAutre: {require},
                autrePartenariat: {},
                besoinPartenaire: {require},
                besoinPartenaireTechnique: {require},
                besoinPartenaireFinancier: {require},
                besoinPartenaireCommercial: {require},
                besoinPartenaireAutre: {require},
                autreBesoinPartenaire: {},
                titreRepondant: {require},
                nomRepondant: {require},
                fonctionRepondant: {require},
                adresseRepondant: {require},
                villeRepondant: {require},
                telephoneWhatsAppRepondant: {require},
                contacter: {require},
                lienGoogleMapMpme: {},
                latitudeMpme: {},
                longitudeMpme: {},
                altitudeMpme: {},
                precisionGPSMpme: {},
                origineDonnees: {},

                TypeComptabilite:{require},
                TypeCarte:{require},
                NumeroCarte:{},
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
                ListeSousSecteurActivite: JSON.parse(JSON.stringify(this.step1.selectedSousSecteurs)),
                AnneeProduction1: this.step1.an_prod_1,
                PersonnelPermanentFemme: this.step1.pers_per_femm || 0,
                PersonnelPermanentHomme: this.step1.pers_per_homm || 0,
                PersonnelTemporaireFemme: this.step1.pers_temp_femm || 0,
                PersonnelTemporaireHomme: this.step1.pers_temp_homm || 0,
                ChiffreAffaire1: this.step1.ch_aff_1,
                ChiffreAffaire2: this.step1.ch_aff_2,
                PartChiffreAffaireExprtation: this.step1.part_chiffre_affaire_exprtation,
                GroupeFililale: this.step1.grpe_fililale,
                NationaliteGroupe: this.step1.nationalite_groupe,
                CapitalSocial: this.step1.capital_social,
                NumeroRccm: this.step1.nbre_rccm,
                NumeroNif: this.step1.nbre_nif,

                NbreEmploye: this.step1.NbreEmployeGuinne || 0,
                NbreActionnaireGuinneF: this.step1.NbreActionnaireGuinneF || 0,
                NbreActionnaireGuinneH: this.step1.NbreActionnaireGuinneH || 0,
                NbreActionnaire: this.step1.NbreActionnaireGuinne || 0,
                PaysSiegeSocial: this.step1.PaysSiegeSocial,

                DateGenerationNif:this.step1.DateGenerationNif,
                NumeroTva:this.step1.NumeroTva,
                CodeRegime:this.step1.CodeRegime,
                CodeTypeGestion:this.step1.CodeTypeGestion,
                CodeTypeContribuable:this.step1.CodeTypeContribuable,


                MpmeBourse: this.step2.mpmeBourse,
                NomBourse: this.step2.nomBourse,
                RecptionPrix: this.step2.receptionPrix,
                PrincipalPrix: this.step2.principalPrix,
                AnneePrixPrincipal: parseInt(this.step2.anneePrixPrincipal),
                // AnneePrixPrincipal: parseInt(2015),
                TitreDirigeant: this.step2.titreDirigeant,
                NomDirigeant: this.step2.nomDirigeant,
                PrenomDirigeant: this.step2.prenomDirigeant,
                SexeDirigeant: this.step2.sexeDirigeant,
                PaysDirigeant: this.step2.paysDirigeant,
                AnneeNaissanceDirigeant: parseInt(this.step2.anneeNaissanceDirigeant).toString(),
                // AnneeNaissanceDirigeant:parseInt(),
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


                TypeComptabilite: this.step3.TypeComptabilite,
                TypeCarte: this.step3.TypeCarte,
                NumeroCarte: this.step3.NumeroCarte,
            }
        },

        async nextStep() {
            this.loading = true
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
                        this.loading = false
                    } else {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                        this.loading = false

                    }
                } else {
                    console.log('errroor1', this.v$.$errors);
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                    this.loading = false

                }

            } else if (this.currentStep === 2) {
                this.error = ''
                this.v$.step2.$touch()
                if (this.v$.$errors.length == 0) {
                    const mpmeData = this.createMpmeData();
                    const vide = '';
                    if (this.step2.mpmeBourse !== 'Oui') {
                        mpmeData.NomBourse = vide
                    }
                    if (this.step2.appartenanceReseauProfessionnel !== 'Oui') {
                        mpmeData.NomReseauProfessionnel = vide
                        mpmeData.DescriptionReseau = vide
                    }
                    if (this.step2.receptionPrix !== 'Oui') {
                        mpmeData.PrincipalPrix = vide
                        mpmeData.AnneePrixPrincipal = vide
                    }
                    console.log('mpmeData1', mpmeData);
                    const success = await this.enregistrerMpmeDonnees(mpmeData);
                    console.log('success', success);
                    if (success) {
                        this.currentStep++;
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                        this.loading = false

                    } else {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                        console.error('Erreur lors de l\'enregistrement ', error);
                        this.loading = false

                    }
                } else {

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                    console.log('errroor222', this.v$.$errors);
                    this.loading = false


                }
            }else if (this.currentStep === 3) {
                this.error = ''
             this.v$.step3.$touch()
            if (this.v$.$errors.length === 0) {
                this.loading = true
                const mpmeData = this.createMpmeData();
                const vide = '';
                if (this.step3.partenariatAutre !== 'Oui') {
                    mpmeData.AutrePartenariat = vide
                }
                if (this.step3.besoinPartenaireAutre !== 'Oui') {
                    mpmeData.AutreBesoinPartenaire = vide
                }
                console.log('mpmeData1', mpmeData);
                const success = await this.enregistrerMpmeDonnees(mpmeData);
                console.log('success', success);
                if (success) {
                    this.isOpen = true
                    this.loading = false
                } else {
                    console.error('Erreur lors de l\'enregistrement des données pour le MPME');
                    window.scrollTo({  top: 0, behavior: 'smooth', });
                    this.loading = false
                }
            }else{
            
                console.log('errroor222', this.v$.$errors);
                 window.scrollTo({  top: 0, behavior: 'smooth', });
                    this.loading = false
            }
            }
        },

        prevStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
                window.scrollTo({  top: 0, behavior: 'smooth', });
            }
        },

        async submit() {
            if (this.currentStep === 3) {
                this.error = ''
            this.v$.step3.$touch()
            if (this.v$.$errors.length === 0) {
                this.loading = true
                const mpmeData = this.createMpmeData();
                const vide = '';
                if (this.step3.partenariatAutre !== 'Oui') {
                    mpmeData.AutrePartenariat = vide
                }
                if (this.step3.besoinPartenaireAutre !== 'Oui') {
                    mpmeData.AutreBesoinPartenaire = vide
                }
                console.log('mpmeData1', mpmeData);
                const success = await this.enregistrerMpmeDonnees(mpmeData);
                console.log('success', success);
                if (success) {
                    this.isOpen = true
                    this.loading = false
                } else {
                    console.error('Erreur lors de l\'enregistrement des données pour le MPME');
                    window.scrollTo({  top: 0, behavior: 'smooth', });
                    this.loading = false
                }
            }else{
            
                console.log('errroor222', this.v$.$errors);
                 window.scrollTo({  top: 0, behavior: 'smooth', });
                    this.loading = false
            }
            }
           
        },
        async fetchgetOneMpme() {
            try {
                const userId = this.loggedInUser.id;
                // const userId = 'MPME-1580-2023'
                const response = await axios.get(`/mpme/${userId}`);
                this.userData = response.data.data;
                this.storeUserData(this.userData);
                console.log('UserData:', this.userData);
                // console.log('UserData:', this.userData.ListeSousSecteurActivite);

            } catch (error) {
                console.error('Erreur lors de la récupération des options des USER :', error);
            }
        },

        initializeYears() {
            const currentYear = new Date().getFullYear();
            for (let year = 1990; year <= currentYear; year++) {
                this.years.push(year);
            }
            this.yearOptions = this.years.map(year => ({
                label: String(year),
                value: String(year)
            }));
        },

        async enregistrerMpmeDonnees(mpmeData) {
            try {
                const userId = this.loggedInUser.id;
                // const userId = 'MPME-1580-2023'

                const response = await axios.put(`/mpme/${userId}`, mpmeData, {
                    headers: {
                         Authorization: `Bearer ${this.loggedInUser.token}`,
                        'Content-Type': 'application/json',
                    },
                });

                console.log('response', response);
                if (response.status === 200) {
                    console.log('Données MPME mises à jour avec succès !');
                    return true;
                } else {
                    console.error('Erreur lors de la mise à ', response.data);
                    this.error = response.data.message
                    return false;
                }
            } catch (error) {
                console.log('Erreur lors de la mise à jour des données MPME guinee :', error);
                if (error && error.response.data === 'Unauthorized' || error.response.data.status === 'error') {
                    console.log('aut', error.response.data.status === 'error');
                    await this.$store.dispatch('user/clearLoggedInUser');
                    this.$router.push('/connexion-mpme');

                } else {
                    this.formatValidationErrors(error.response.data.errors)
                    this.loading = false
                    return false;
                }

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
                this.loading = false

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
                    return {
                        state: option.label,
                        abbr: option.value
                    }
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
        async fetchCarteAndComptabiliteOptions() {
            try {

                await this.$store.dispatch('fetchTypeCartesData');
                const options = JSON.parse(JSON.stringify(this.$store.getters['getTypeCartesData']));
                this.CarteTypeOptions = options

                await this.$store.dispatch('fetchTypeComptabilitesData');
                const option = JSON.parse(JSON.stringify(this.$store.getters['getTypeComptabilitesData']));
                this.Comptabilite = option

                console.log('Options bourse1:', options);
                console.log('Options bourse2:', option);
               
            } catch (error) {
                console.error('Erreur lors de la récupération des options des bourses:', error.message);
            }
        },
        async fetchTypesGestionsOptions() {
    try {
      await this.$store.dispatch('fetchTypesGestions');
      const options = JSON.parse(JSON.stringify(this.$store.getters['getTypesGestions']));
      console.log('Options types gestions:', options);
      this.TypesGestionsOptions = options.map(gestion => ({
        label: gestion.NomTypeGestion,
        value: gestion.CodeTypeGestion
      }));
      
      
    } catch (error) {
      console.error('Erreur lors de la récupération des options des types de gestions:', error.message);
    }
  },

  async fetchTypesContribuablesOptions() {
    try {
      await this.$store.dispatch('fetchTypesContribuables');
      const options = JSON.parse(JSON.stringify(this.$store.getters['getTypesContribuables']));
      console.log('Options types contribuables:', options);
      this.TypesContribuablesOptions = options.map(contribuable => ({
        label: contribuable.NomTypeContribuable,
        value: contribuable.CodeTypeContribuable
      }));
      
    } catch (error) {
      console.error('Erreur lors de la récupération des options des types de contribuables:', error.message);
    }
  },
  async fetchRegimesOptions() {
    try {
      await this.$store.dispatch('fetchRegimes');
      const options = JSON.parse(JSON.stringify(this.$store.getters['getRegimes']));
      console.log('Options regimes:', options);
      this.RegimesOptions = options.map(regime => ({
        label: regime.NomRegime,
        value: regime.CodeRegime
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération des options des régimes:', error.message);
    }
  },
async formatValidationErrors(errors) {
    const formattedErrors = {};

    for (const field in errors) {
        const errorMessages = errors[field]; // Liste complète des messages d'erreur
        console.log(' errorMessages', errorMessages, typeof(errorMessages));

        const concatenatedError = errorMessages.join(', '); // Concaténer les messages d'erreur
        console.log(' concatenatedError', concatenatedError, typeof(concatenatedError));

        formattedErrors[field] = concatenatedError; // Utilisez le nom du champ comme clé
    }

    this.resultError = formattedErrors; // Stockez les erreurs dans un objet

    // Maintenant, this.resultError est un objet où les clés sont les noms des champs
    console.log('resultError', this.resultError);
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
            if (userData.ListeSousSecteurActivite.includes('|')) {
                this.step1.selectedSousSecteurs = userData.ListeSousSecteurActivite.split('|')
            } else if (userData.ListeSousSecteurActivite.includes(',')) {
                this.step1.selectedSousSecteurs = JSON.parse(userData.ListeSousSecteurActivite)
            } else {

                this.step1.selectedSousSecteurs = userData.ListeSousSecteurActivite.split(' ')
            }
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

            this.step1.NbreEmployeGuinne = userData.NbreEmploye;
            this.step1.NbreActionnaireGuinneF = userData.NbreActionnaireGuinneF;
            this.step1.NbreActionnaireGuinneH = userData.NbreActionnaireGuinneH;
            this.step1.NbreActionnaireGuinne = userData.NbreActionnaire;
            this.step1.PaysSiegeSocial = userData.PaysSiegeSocial;

            this.step1.DateGenerationNif= userData.DateGenerationNif;
            this.step1.NumeroTva= userData.NumeroTva;
            this.step1.CodeRegime= userData.CodeRegime;
            this.step1.CodeTypeGestion= userData.CodeTypeGestion;
            this.step1.CodeTypeContribuable= userData.CodeTypeContribuable;

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

            this.step3.existanceActionnaire = userData.ExistanceActionnaire
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

            this.step3.TypeComptabilite = userData.TypeComptabilite;
            this.step3.TypeCarte = userData.TypeCarte;
            this.step3.NumeroCarte  = userData.NumeroCarte;
            // ... Lier d'autres propriétés de la même manière
        },
        espace() {
            this.isOpen = false
            this.$router.push({ path: 'mon-espace', })

        },
        profil() {
            this.isOpen = false
            this.$router.push({ path: '/profil', })

        },
        OpenProfil() {
            this.PostLogo = true

        },
     async   HamdleAide() {
        this.DemandeAide = false
        this.loading = true
            try {
         const response = await axios.post('/gestion-des-demandes', {code:this.loggedInUser.id} , {
                    headers: {
                         Authorization: `Bearer ${this.loggedInUser.token}`,
                        'Content-Type': 'application/json',
                    },


                });
         console.log('response.sousprefecture', response);
         if (response.data.status === 'success') {
           this.loading = false
           this.msg = true
           
         } else {
           this.loading = false
        
         }
         
       } catch (error) {
          console.error('Erreur post:', error);
        }

        },
        close(){
                this.msg = false
                this.$router.push({ path: '/mon-espace', })
              
              
              } ,
        async loadFile(event) {
            this.loading = true
            var image = document.getElementById("output");
            image.src = URL.createObjectURL(event.target.files[0]);
            const file = event.target.files[0]
            const formData = new FormData();
            formData.append('code', this.loggedInUser.id);
            formData.append('profile', file);
           

            try {

                const response = await axios.post('/mpme/changement-de-profile', formData, {
                    headers: {
                         Authorization: `Bearer ${this.loggedInUser.token}`,
                        'Content-Type': 'multipart/form-data',
                    },


                });
                console.log('response', response);

                if (response.data.status === 'success') {
                    console.log('Données MPME mises à jour avec succès !');
                    this.fetchgetOneMpme()
                    this.msgsuccess = true
                    this.loading = false
                    this.PostLogo = false

                } else {
                    console.log('errorrr', response.data);
                    this.error = "L'enregistrement a échoué !!!"
                }
            } catch (error) {
                console.error('Erreur lors de la mise à jour des données MPME guinee :', error);
                if (error && error.response.data === 'Unauthorized' || error.response.data.status === 'error') {
                    console.log('aut', error.response.data.status === 'error');
                    await this.$store.dispatch('user/clearLoggedInUser');
                    this.$router.push('/connexion-mpme');

                } else {
                    this.formatValidationErrors(error.response.data.errors)
                    this.loading = false
                    return false;
                }


            }
        },
        openModal() {
      this.DemandeAide = true;
    },

    },



    async mounted() {
        console.log('this.step1.commune',this.step1.commune);
        
        try {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
                 

            console.log("data", this.loggedInUser);

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
                this.fetchBourseOptions(),
                this.fetchCarteAndComptabiliteOptions(),
                this.fetchTypesContribuablesOptions(),
                this.fetchRegimesOptions(),
                this.fetchTypesGestionsOptions(),
            ]);
            if (this.step1.region === null || this.step1.NbreEmployeGuinne === null ) {
                setTimeout(() => {
            this.DemandeAide = true;
        }, 5000);
            }
         
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
.error {
    /* border: 1px solid red; */
    max-width: 1140Px;
    margin: 40px auto;
    padding: 10Px;
    color: red;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);

}
.aider{
    text-align: center;
    color: var(--color-primary);
    cursor: pointer;
    margin-bottom:0 !important;
    font-weight: bold;

}

.aider:hover{
    
    color: var(--color-secondary);
    

}

.error-border {
  border: 2px solid red !important; /* Bordure rouge en cas d'erreur */
  border-radius: 0.5rem !important;
   
}

.profil1 {
    /* border: 2px solid red; */
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    font-size: 25px;
    position: absolute;
    top: -41px;
    cursor: pointer;
    background-color: var(--color-primary);
    color: #fff;

}

.profil1:hover {
    border: 2px solid var(--color-primary);
    background-color: #fff;
    color: var(--color-primary);
    cursor: pointer;

}

.profil {

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    margin: 0 auto;
    max-width: 1140px;
    padding-right: 76px;
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
    color: #000;
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
}

.supp {
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    border: none;
    border-radius: 45px;
    z-index: 3;
    cursor: pointer;
    outline: none;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
}

.supp:hover {
    background-color: #fff;
}

.profile-pic {
    color: transparent;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 0.3s ease;
}

.profile-pic input {
    display: none;
}

.profile-pic img {
    position: absolute;
    object-fit: cover;
    width: 80%;
    height: 100%;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
    z-index: 0;
    border-radius: 50%;
    border: 1px solid var(--color-primary);

}

.profile-pic .-label {
    cursor: pointer;
    height: 165px;
    width: 230px;
}

.profile-pic:hover .-label {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10000;
    color: #fafafa;
    transition: background-color 0.2s ease-in-out;

    margin-bottom: 0;
}

.profile-pic span {
    display: inline-flex;
    padding: 0.2em;
    height: 2em;
}

/* Upload Area */
.upload-area {
    width: 100%;
    /* max-width: 25rem; */
    background-color: rgb(255, 255, 255);
    border: 2px solid var(--color-secondary);
    border-radius: 24px;
    padding: 2rem 1.875rem 5rem 1.875rem;
    /* margin: 0.625rem; */
    text-align: center;
}

.upload-area--open {
    /* Slid Down Animation */
    animation: slidDown 500ms ease-in-out;
}

.upload-area__title {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.3125rem;
}

.upload-area__paragraph {
    font-size: 0.9375rem;
    color: rgb(196, 195, 196);
    margin-top: 0;
}

.upload-area__tooltip {
    position: relative;
    color: var(--color-secondary);
    cursor: pointer;
    transition: color 300ms ease-in-out;
}

.upload-area__tooltip:hover {
    color: var(--clr-blue);
}

.upload-area__tooltip-data {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -125%);
    min-width: max-content;
    background-color: rgb(255, 255, 255);
    color: rgb(63, 134, 255);
    border: 1px solid var(--color-secondary);
    padding: 0.625rem 1.25rem;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: none 300ms ease-in-out;
    transition-property: opacity, visibility;
}

.upload-area__tooltip:hover .upload-area__tooltip-data {
    opacity: 1;
    visibility: visible;
}

/* Drop Zoon */
.upload-area__drop-zoon {
    position: relative;
    height: 11.25rem;
    /* 180px */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px dashed var(--color-secondary);
    border-radius: 15px;
    margin-top: 2.1875rem;

    transition: border-color 300ms ease-in-out;
}</style>