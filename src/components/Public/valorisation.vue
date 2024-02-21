<template>
    <Loading v-if="loading" style="z-index: 1100;"></Loading>
    <div class="page-header">
        <div class="container">
            <div class="page-header__inner">
                <h1 class="display-2">Bienvenue {{ loggedInUser.prenom }} {{ loggedInUser.nom }} </h1>
                <p>Votre espace personnel vous permet d’effectuer et de faire le suivi de votre entreprise</p>
            </div>
        </div>
    </div>
    <div class=" d-flex justify-content-center align-items-center flex-wrap w-100" data-aos="fade-up" data-aos-delay="100"
        style="margin-top: 40px ; position: relative;">
        <div class="bar_search">
            <div class="liste-searcher">
              <!-- <div class="nsl">
                <i class="bi bi-search"></i>
                <input type="text" role="search" placeholder="Rechercher un nom..." v-model="control.name"
                  @input="filterByName" />
              </div> -->
              <div class="nsl">
                <i class="bi bi-funnel-fill"></i>
                <select name="speciality" v-model="control.spec" @change="updateFilterSpec">
                  <option value="" selected="true">Filtre</option>
                  <option value="annee">Année</option>
                 
      
                  
                </select>
              </div>
              <div class="nsl" style="border-right: none" v-if="control.spec === 'annee' || control.spec === 'chiffreaffaire' ">
                <i class="bi bi-filter"></i>
                <select name="speciality" v-if="control.spec === 'annee'" v-model="control.speciality" @change="filterData">
                  <option value="" selected="true">Choisir une année</option>
                  <option v-for="year in yearOptions" :value="year.label" :key="year.value">{{ year.label }}</option>
                </select>
                <select name="speciality" v-else-if="control.spec === 'chiffreaffaire'" v-model="control.speciality" @change="filterData">
                  <option value="" selected="true">Choisir un chiffre d'affaire</option>
                  <option v-for="chiffreaffaire in classificationAffaireOptions" :value="chiffreaffaire.label" :key="chiffreaffaire.value">{{ chiffreaffaire.label }}</option>
                </select>
                <select name="speciality" v-else-if="control.spec === 'capitalsocial'" v-model="control.speciality" @change="filterData">
                  <option value="" selected="true">Choisir un capital social</option>
                  <option v-for="capitalsocial in classificationSocialOptions" :value="capitalsocial.label" :key="capitalsocial.value">{{ capitalsocial.label }}</option>
                </select>
                <select name="speciality" v-else-if="control.spec === 'typecomptabilite'" v-model="control.speciality" @change="filterData">
                  <option value="" selected="true">Choisir un chiffre d'affaire</option>
                  <option v-for="typecomptabilite in Comptabilite" :value="typecomptabilite.label" :key="typecomptabilite.value">{{ typecomptabilite.label }}</option>
                </select>
                
              </div>
              <div class="nsl" style="border-right: none" v-else>
                <i class="bi bi-x-square-fill" @click="clearFilters" style="cursor: pointer"></i>
                <input type="text" placeholder="Aucun filtre sélectionné" disabled />
              </div>
            </div>
          </div>
        <div class="btnLogin" @click="this.isOpen = true"> <i class="bi bi-plus-lg"></i> Ajouter</div>
        <div v-if="filteredClassifications.length === 0" class="noresul">
            <span>Vous n'avez pas encore d'Appui à la valorisation, vous pouvez également en ajouter aussi !!</span>
        </div>
        <div class="contenu d-flex justify-content-center align-items-center flex-wrap  w-100" v-else >

            <div class="two-section">


                <div class="table__body">
                    <table>
                        <thead>

                            <tr>
                                <th> # </th>
                                <th> Annee</th>
                                <th>Produit Service</th>
                                <th>Nombre de Commande</th>
                                <th>Marché Produit Service</th>
                                <th> Quantité du Produit </th>
                                <th>Actions</th>

                            </tr>

                        </thead>
                        <tbody>

                            <tr v-for="(item, index ) in paginatedItems" :key="item.id">
                                <td>{{ getSequentialNumber(index) }} </td>
                                <td>{{ item.Annee }} </td>
                                <td>{{ item.ProduitService }}</td>
                                <td> {{ item.NombreCommande }}</td>
                                <td v-if="item.MarcheProduitService === 1"> Oui</td>
                                <td v-else> Non</td>
                                <td> {{ item.QuantiteProduit || 0}} </td>
                                
                                <td v-if="item.Annee !== new Date().getFullYear()">
                                    <div class="sci">
                                        <span style="--i:1" class="updateclose">
                                            <i class="bi bi-pen" ></i>

                                        </span>
                                        <span style="--i:2"  class="deleteclose">
                                            <i class="bi bi-trash"></i>
                                        </span>

                                    </div>
                                </td>
                                <td v-else>
                                    <div class="sci">
                                        <span style="--i:1" class="update">
                                            <i class="bi bi-pen" @click="updatedoc(item.id)"></i>

                                        </span>
                                        <span style="--i:2" @click="hamdledelete(item.id)" class="delete">
                                            <i class="bi bi-trash"></i>
                                        </span>

                                    </div>
                                </td>

                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <MazDialog v-if="isOpen" v-model="isOpen" width="710px" max-height="revert" padding="0 1.5rem 1.5rem">
            <div>

                <div id="uploadArea" class="upload-area">
                    <!-- Header -->
                    <div class="upload-area__header">
                        <h1 class="upload-area__title">Ajouter appui à la valorisation</h1>
                        <small v-if="error">{{ error }}</small>
                    </div>
                    <!-- End Header -->

                    <!-- Drop Zoon -->
                    <div id="dropZoon" class="upload-area__drop-zoon drop-zoon">
                     
                                <div class="input-group">
                                    <label for="username">Année <span class="text-danger">*</span></label>
                                    <Day @selectedYear="handleSelectedYear"></Day>
                                    <!-- <MazSelect v-model="step1.annee" color="secondary" :options="yearOptions"  search  option-value-key="value" option-label-key="label" option-input-value-key="value"  /> -->
                                </div>
                                <small v-if="v$.step1.annee.$error">{{ v$.step1.annee.$errors[0].$message }}</small>
                                <div class="input-group" style="margin-top: 10px !important;">
                            <label for="MarcheProduitService">Proposez-vous des produits ou des services? <span class="text-danger">*</span> </label>
                            <MazSelect v-model="step1.MarcheProduitService" color="secondary" :options="Choix"  />
                           
                        </div>
                        <small v-if="v$.step1.MarcheProduitService.$error">{{ v$.step1.MarcheProduitService.$errors[0].$message }}</small>
                        
                            <div class="input-group" v-if="step1.MarcheProduitService === true" style="margin-top: 10px !important;">
                            <label for="ProduitService">Veuillez décrire les services et/ou produits</label>
                            <input v-model="step1.ProduitService" name="ProduitService"   id="ProduitService"  />
                        </div>
                        <small v-if="v$.step1.ProduitService.$error">{{ v$.step1.ProduitService.$errors[0].$message }}</small>
                        <div class="row mb-3 mt-3 content-group" >
                            <div class="col" v-if="step1.MarcheProduitService === true">
                                <div class="input-group">
                            <label for="NombreCommande">Nombre Commande</label>
                            <input type="text" name="NombreCommande" id="NombreCommande" placeholder="" v-model="step1.NombreCommande">
                          
                        </div>
                        <small v-if="v$.step1.NombreCommande.$error">{{ v$.step1.NombreCommande.$errors[0].$message }}</small>
                            </div>
                            <div class="col" v-if="step1.MarcheProduitService === true" >
                                <div class="input-group" >
                                    <label for="QuantiteProduit">Quantité de produits vendus </label>
                            <input type="text" name="QuantiteProduit" id="QuantiteProduit" placeholder="" v-model="step1.QuantiteProduit">
                          
                        </div>
                        <small v-if="v$.step1.QuantiteProduit.$error">{{ v$.step1.QuantiteProduit.$errors[0].$message }}</small>
                            </div>

                        </div>

                      
                                               
                        <button class="sign" @click.prevent="submit">Enregistrer</button>
                    </div>
                    <!-- End Drop Zoon -->


                </div>
            </div>

        </MazDialog>

        <MazDialog v-model="msgsuccess"  title="Enregistrement du contenu local" >
            <p>
                Valorisation enregistrée avec succès !!
            </p>
            <template #footer="{ close }">

                <div class="supp" @click="close" style="background-color: blue; "> Ok</div>

            </template>
        </MazDialog>
        <MazDialog v-model="isdelete" title="Suppression de la clasification">
            <p>
               Êtes-vous sûr de vouloir supprimer cette valorisation ?
            </p>
            <template #footer="{ close }">

                <div class="supp" @click="close" style="background-color: red; "> Non</div>

                <div class="supp" @click="confirmDelete" style="background-color: var(--color-primary);"> Oui</div>

            </template>
        </MazDialog>
        <MazDialog v-model="confirmdelete" title="Suppression de la clasification">
            <p>
                Valorisation supprimée avec succès !!
            </p>
            <template #footer="{ close }">

                <div class="supp" @click="close" style="background-color: blue; "> Ok</div>



            </template>
        </MazDialog>


        <MazDialog v-if="updated" v-model="updated" width="710px" max-height="revert" padding="0 1.5rem 1.5rem">
            <div>

<div id="uploadArea" class="upload-area">
    <!-- Header -->
    <div class="upload-area__header">
        <h1 class="upload-area__title">Modifier l'appui à la valorisation</h1>
        <small v-if="error">{{ error }}</small>
    </div>
    <!-- End Header -->

    <!-- Drop Zoon -->
    <div id="dropZoon" class="upload-area__drop-zoon drop-zoon">
        <!-- <div class="row mb-3 mt-3 content-group">
            <div class="col"> -->
                <div class="input-group">
                    <label for="username">Année <span class="text-danger">*</span></label>
               <MazInput v-model="step2.annee" type="text" color="secondary"  style="width: 100%;" disabled  search option-value-key="value" option-label-key="label" option-input-value-key="value"/>
                   
                </div>
               
                <div class="input-group" style="margin-top: 10px !important;">
                            <label for="MarcheProduitService">Proposez-vous des produits ou des services? <span class="text-danger">*</span> </label>
                            <MazSelect v-model="step2.MarcheProduitService" color="secondary" :options="Choix"  />
                           
                        </div>
                        <small v-if="v$.step2.MarcheProduitService.$error">{{ v$.step2.MarcheProduitService.$errors[0].$message }}</small>
                        
                            <div class="input-group" v-if="step2.MarcheProduitService === true" style="margin-top: 10px !important;">
                            <label for="ProduitService">Veuillez décrire les services et/ou produits</label>
                            <input v-model="step2.ProduitService" name="ProduitService"   id="ProduitService"  />
                        </div>
                        <small v-if="v$.step2.ProduitService.$error">{{ v$.step2.ProduitService.$errors[0].$message }}</small>
                        <div class="row mb-3 mt-3 content-group" >
                            <div class="col" v-if="step2.MarcheProduitService === true">
                                <div class="input-group">
                            <label for="NombreCommande">Nombre Commande</label>
                            <input type="text" name="NombreCommande" id="NombreCommande" placeholder="" v-model="step2.NombreCommande">
                          
                        </div>
                        <small v-if="v$.step2.NombreCommande.$error">{{ v$.step2.NombreCommande.$errors[0].$message }}</small>
                            </div>
                            <div class="col" v-if="step2.MarcheProduitService === true" >
                                <div class="input-group" >
                                    <label for="QuantiteProduit">Quantité de produits vendus </label>
                            <input type="text" name="QuantiteProduit" id="QuantiteProduit" placeholder="" v-model="step2.QuantiteProduit">
                          
                        </div>
                        <small v-if="v$.step2.QuantiteProduit.$error">{{ v$.step2.QuantiteProduit.$errors[0].$message }}</small>
                            </div>

                        </div>
    
                               
        <button class="sign" @click.prevent="hamdleUpdated">Modifier</button>
    </div>
    <!-- End Drop Zoon -->


</div>
</div>

        </MazDialog>


        <MazDialog v-model="updatemsg" title="Modification de la valorisation">
            <p>
                Valorisation modifiée avec succèss !!

            </p>
            <template #footer="{ close }">

                <div class="supp" @click="close" style="background-color: blue; "> Ok</div>



            </template>
        </MazDialog>
    </div>
    <div class="container_pagination">
        <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
    </div>
</template>
    
<script>
import MazDialog from 'maz-ui/components/MazDialog'
import axios from '@/lib/axiosConfig.js'
import useVuelidate from '@vuelidate/core';
import { require, lgmin, lgmax, ValidNumeri } from '@/functions/rules';
import Pag from './other/pag.vue';
import Loading from './other/preloader.vue';
import Day from './other/componentDay.vue';
export default {
    name: 'DNPMECLImage',
    components: {
        MazDialog, Pag, Loading ,Day

    },
    computed: {

        loggedInUser() {
            return this.$store.getters['user/loggedInUser'];
        },
        totalPages() {
            // return Math.ceil(this.items.length / this.itemsPerPage);
            return Math.ceil(this.filteredClassifications.length / this.itemsPerPage);
        },
        paginatedItems() {
            const startIndex = (this.currentPage - 1)*this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.filteredClassifications.slice(startIndex, endIndex);
        },
    },

    data() {
        return {
            control: {
        name: '',
        spec: '',
        speciality: '',

      },

            isOpen: false,
            loading: true,
            publishDoc: false,
            msgsuccess: false,
            isdelete: false,
            confirmdelete: false,
            updated: false,
            v$: useVuelidate(),

            years: [],
            yearOptions: [],
            Comptabilite:[],
            classificationAffaireOptions:[],
            classificationSocialOptions:[],
            classificationOptions:[],
            filteredClassifications:[],

            error: '',
            origine: '',
            nom: '',
            startIndex: 0,
            currentPage: 1,
            itemsPerPage: 10,


          
            resultnone: '',
            ToDeleteId: null,
            updateImageId: null,
            updateClassId: null,
            anneeEnCours:'',
            step1: {
                annee: '',
                ProduitService: '',
                MarcheProduitService: '',
                NombreCommande: '',
                QuantiteProduit:'',
            },
            step2: {
                annee:'',
                ProduitService: '',
                MarcheProduitService: '',
                NombreCommande: '',
                QuantiteProduit:'',
            },
            Choix: [
        { label: "Oui", value: true },
        { label: "Non", value: false },
      ],

        };
    },
    validations: {
        step1: {
            annee: {
                require,
            },
            ProduitService: {},
            MarcheProduitService: {
                require,
            },
            NombreCommande: {ValidNumeri},
            QuantiteProduit: {ValidNumeri},
        },
        step2: {
            
            ProduitService: {
                require,

            },
            MarcheProduitService: {
                require,
            },
            NombreCommande: {
                ValidNumeri
            },
            QuantiteProduit: {ValidNumeri},
        },

    },
    async created() {
        
    },

  async  mounted() {
 
   
     await this.fetchgetClassificationAllMpme()
     this.filteredClassifications = await this.classificationOptions;
     await this.fetchgetClassificationCritereMpme()
     await  this.initializeYears()
   
        console.log("datadossiers", this.loggedInUser);
       
        
    },
    methods: {

        // delete picture
        hamdledeletedoc(itemId) {
            console.log(itemId);
            this.ToDeleteId = itemId;
            this.isdeletedoc = true

        },
        initializeYears() {
            const currentYear = new Date().getFullYear();
            for (let year = 1900; year <= currentYear; year++) {
                this.years.push(year);
            }
            this.yearOptions = this.years.map(year => ({
                label: String(year),
                value: String(year)
            }));
        },
       
      
        async submit() {
            this.v$.step1.$touch()
            if (this.v$.$errors.length == 0) {
            this.loading = true

               let DataContenu = {
            
                Annee:parseInt(this.step1.annee) ,
                CodeMpme:this.loggedInUser.id,
                ProduitService:this.step1.ProduitService,
                MarcheProduitService:this.step1.MarcheProduitService,
                NombreCommande: this.step1.NombreCommande,
                QuantiteProduit:this.step1.QuantiteProduit,
                
            }
            console.log('DataClassification', DataContenu);

                try {
                    const response = await axios.post('/appui-contenu-locals', DataContenu, {
                        headers: {
                            Authorization: `Bearer ${this.loggedInUser.token}`,
                            'Content-Type': 'application/json'
                        }});
                    console.log('Réponse du téléversement :', response);
                    if (response.data.status === 'success') {
                        this.msgsuccess = true
                        await this.fetchgetClassificationAllMpme()
                        this.isOpen = false
                        this.loading = false


                    } else {

                    }
                } catch (error) {
                    console.error('Erreur lors du téléversement :', error);
                    if (error && error.response.data === 'Unauthorized' || error.response.status === 401 ) {
                        console.log('aut', error.response.data.status === 'error');
                        await this.$store.dispatch('user/clearLoggedInUser');
                        this.$router.push('/connexion-mpme');

                    } else {
                        console.log('aut', error.response.data.message);
                        this.error = error.response.data.message

                        this.loading = false
                        return false;
                    }

                }
            } else {


            }

        },
        getSequentialNumber(index) {
            return this.startIndex + index + 1;
        },

        // delete picture
        hamdledelete(itemId) {
            console.log(itemId);
            this.ToDeleteId = itemId;
            this.isdelete = true

        },
        async confirmDelete() {
            this.loading = true


            try {
                // Faites une requête pour supprimer l'élément avec l'ID itemId
                const response = await axios.delete(`/appui-contenu-locals/${this.ToDeleteId}`, {
                    headers: {
                        Authorization: `Bearer ${this.loggedInUser.token}`,
                       

                    },

                });
                console.log('Réponse de suppression:', response);
                if (response.data.status === 'success') {
                    await this.fetchgetClassificationAllMpme()
                    this.confirmdelete = true
                    this.isdelete = false
                    this.loading = false


                } else {
                    console.log('error', response.data)
                    this.loading = false

                }
            } catch (error) {
                console.error('Erreur lors de la suppression:', error);
                console.error('Erreur lors de la mise à jour des données MPME guinee :', error);
                if (error.response.data === 'Unauthorized' || error.response.data.status === 'error') {
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


        // get allpicture
        async fetchgetClassificationCritereMpme() {
            try {
              
                const response = await axios.get('/mpme/criteres-classifications/annuel', {
                    headers: {
                        Authorization: `Bearer ${this.loggedInUser.token}`,
                        'Content-Type': 'multipart/form-data',
                    },

                });
                console.log('classifications/annuel:', response);

                if (response.data.status === 'success') {
                    const filteredDataAffaire = response.data.data.data.filter(item => item.ChiffreCapital === 1);
                    const mappedDataAffaire = filteredDataAffaire.map(item => ({
                          label: item.CodeCritere, // Vous pouvez utiliser la propriété que vous préférez ici
                          value: item.CodeCritere, // Ou toute autre propriété que vous préférez
                     }));
                     this.classificationAffaireOptions = mappedDataAffaire;

                     const filteredDataSocial = response.data.data.data.filter(item => item.ChiffreCapital === 0);
                    const mappedDataSocial = filteredDataSocial.map(item => ({
                          label: item.CodeCritere, // Vous pouvez utiliser la propriété que vous préférez ici
                          value: item.CodeCritere, // Ou toute autre propriété que vous préférez
                     }));
                     this.classificationSocialOptions = mappedDataSocial;
                     this.loading = false

                }
                else {

                }

            } catch (error) {
                console.error('Erreur lors de la récupération des options des sous prefecture :', error);
                console.error('Erreur lors de la mise à jour des données MPME guinee :', error);
                if (error.response.data === 'Unauthorized' || error.response.data.status === 'error') {
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
        async fetchgetClassificationAllMpme() {
            try {
              
                const response = await axios.get(`/appui-contenu-locals/detail/par-mpme/${this.loggedInUser.id}`, {
                    headers: {
                        Authorization: `Bearer ${this.loggedInUser.token}`,
                        
                    },

                });
                console.log('classifications/annuel222:', response.data.data.appuis);

                if (response.data.status === 'success') {
                    const filteredDataMpme = response.data.data.appuis
                    this.classificationOptions = filteredDataMpme
                    this.GetUpdateClass = filteredDataMpme
                    this.filteredClassifications = filteredDataMpme;
                     this.loading = false

                }
                else {

                }

            } catch (error) {
                console.error('Erreur lors de la récupération des options des sous prefecture :', error);
                console.error('Erreur lors de la mise à jour des données MPME guinee :', error);
                if (error.response.data === 'Unauthorized' || error.response.data.status === 'error') {
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

        // upload document
        updatedoc(id) {
            this.updateClassId = id
            this.updated = true
            const classificationToUpdate = this.GetUpdateClass.find(doc => doc.id === id);

            // Attribuer les valeurs aux champs d'
            this.step2.annee = classificationToUpdate.Annee;
            this.step2.ProduitService = classificationToUpdate.ProduitService;
            this.step2.NombreCommande = classificationToUpdate.NombreCommande;
            this.step2.QuantiteProduit = classificationToUpdate.QuantiteProduit;

            if (classificationToUpdate.MarcheProduitService === 1) {
                return  this.step2.MarcheProduitService = true;
            } else {
                return  this.step2.MarcheProduitService = false;
                
            }
           

        },
        async hamdleUpdated() {
          
          
            this.v$.step2.$touch()
            if (this.v$.$errors.length == 0) {
                this.loading = true
                let DataClassification = {
            
                Annee:parseInt(this.step2.annee) ,
                CodeMpme:this.loggedInUser.id,
                ProduitService:this.step2.ProduitService,
                MarcheProduitService:this.step2.MarcheProduitService,
                NombreCommande: this.step2.NombreCommande,
                QuantiteProduit:this.step2.QuantiteProduit,
        }
                console.log('DataClassification', DataClassification);
                try {
                    const response = await axios.put(`/appui-contenu-locals/${this.updateClassId}`, DataClassification, {
                        headers: {
                            Authorization: `Bearer ${this.loggedInUser.token}`,
                            'Content-Type': 'application/json',
                        }
                    });
                    console.log('Réponse du téléversement :', response);
                    if (response.data.status === 'success') {
                        await this.fetchgetClassificationAllMpme()
                        this.updated = false
                        this.loading = false
                        this.updatemsg = true
                    } else {

                    }
                } catch (error) {
                    console.error('Erreur lors du téléversement :', error);
                    console.error('Erreur lors de la mise à jour des données MPME guinee :', error);
                    if (error.response.data === 'Unauthorized' ) {
                        console.log('aut', error.response.data.status === 'error');
                        await this.$store.dispatch('user/clearLoggedInUser');
                        this.$router.push('/connexion-mpme');

                    } else {
                        console.log('aut', error.response.data.message);

                        this.loading = false
                        return false;
                    }

                }

            } else {
                console.log('error', this.v$.$errors);
                this.loading = false

            }

        },

        // search and filter
        filterByName() {
            this.currentPage = 1;
            if (this.control.name !== null) {
                const tt = this.control.name;
                const searchValue = tt.toLowerCase()
                this.filteredDocuments = [...this.originalDocuments].filter(item => {
                    const pmeName = item.NomDocument || '';
                    return pmeName.toLowerCase().includes(searchValue);
                });

            } else {
                this.filteredDocuments = [...this.originalDocuments];

            }

        },

        updateCurrentPage(pageNumber) {
            this.currentPage = pageNumber;
            window.scrollTo({
                top: 0,
                behavior: 'smooth', // Utilisez 'auto' pour un défilement instantané
            });
        },
        updatePaginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredPmes.slice(startIndex, endIndex);
    },
filterData() {
  console.log('Selected Speciality:', this.control.speciality);
  console.log('Selected Secteur Activite:', this.control.secteurActivite); // Ajout du champ secteurActivite

  if (
    this.control.spec === 'annee' ||
    this.control.spec === 'chiffreaffaire' ||
    this.control.spec === 'capitalsocial'  ||
    this.control.spec === 'typecomptabilite'
  ) {
    if (this.control.speciality === '') {
      // Réinitialiser la liste si aucune région, sous-préfecture ou secteur d'activité n'est sélectionné
      this.filteredClassifications = [...this.classificationOptions];
    } else {
      // Filtrer par région, sous-préfecture ou secteur d'activité
      let filterKey;
      let selectedOption;

      if (this.control.spec === 'annee') {
        filterKey = 'Annee';
        const specialityAsNumber = parseInt(this.control.speciality, 10);
        selectedOption =  this.yearOptions.find(option => option.label ===  this.control.speciality);
      } else if (this.control.spec === 'chiffreaffaire') {
        filterKey = 'CodeCritereChiffreAffaire';
        selectedOption = this.classificationAffaireOptions.find(option => option.label === this.control.speciality);
        console.log('Sousprefecture',selectedOption);

      } else if (this.control.spec === 'capitalsocial') {
        filterKey = 'CodeCritereCapitalSocial'; // Utilisez la clé correcte pour le champ de secteur d'activité
        selectedOption = this.classificationSocialOptions.find(option => option.label === this.control.speciality); // Utilisez le champ secteurActivite

      } else if (this.control.spec === 'typecomptabilite') {
        filterKey = 'TypeComptabilite'; // Utilisez la clé correcte pour le champ de secteur d'activité
        selectedOption = this.Comptabilite.find(option => option.label === this.control.speciality); // Utilisez le champ secteurActivite
      }
      console.log('selectedOptioneeeedernier',selectedOption);
      if (selectedOption) {
        this.filteredClassifications = this.classificationOptions.filter(pme => pme[filterKey].toString() === selectedOption.value );
      console.log('filteredClassifications',this.classificationOptions);

      } else {
        this.filteredClassifications = [];
      }
    }
  } else {
    this.filteredClassifications = [...this.classificationOptions];
  }
},

updateFilterSpec() {
      this.control.speciality = ''; // Réinitialiser la valeur de spécialité lorsque la spécification change
      this.filteredClassifications = [...this.classificationOptions];
    },
    clearFilters() {
      this.control = {
        name: '',
        spec: '',
        speciality: '',
        promotion: '',
      };

      // Réinitialiser filteredPmes pour refléter les données d'origine
      this.filteredClassifications = [...this.classificationOptions];

      // Réinitialiser currentPage à 1 pour afficher la première page après avoir effacé les filtres
      this.currentPage = 1;
    },

    handleSelectedYear(selectedYear) {
      // Gérer la valeur sélectionnée de l'enfant ici
      console.log('Année sélectionnée dans le composant enfant :', selectedYear);
      this.step1.annee = selectedYear
    },
      

    },

};
</script>
    
<style lang="css" scoped>

/* debut banier */
.page-header {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #266486;
    padding: 50px 0;
    background-image: url('@/assets/img/img1.webp'); 
    box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 10%);

}
.page-header:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, .45);
}
.page-header__inner {
    position: relative;
}

.page-header h1 {
    position: relative;
    color: #fff;
    font-size: 2.8rem;
    font-weight: 700;
    padding-top: 1rem;
    margin-bottom: 1rem;
    text-transform: inherit;
}
.page-header p {
    max-width: 530px;
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
}


@media (max-width: 992px) {
    .banner-title {
    
    font-size: 40px;
    
}
}
@media (max-width: 768px){

section {
padding: 20px !important;
}
.page-header h1 {

font-size: 2.5rem;
text-align: center;   
}

.page-header p {

text-align: justify;
}
}
/* fin banier */

.container_pagination {
    width: auto;
    text-align: end;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    margin: 5px;

}

.noresul {
    border: 1px solid #F9D310;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    border-radius: 6px;
    font-size: 20px;

}

.btnLogin {
    font-size: 15px;
    font-weight: 500;
    color: #000;
    background-color: #F9D310;
    border: none;
    border-radius: 45px;
    position: absolute;
    z-index: 3;
    right: 24px;
    top: -36px;
    cursor: pointer;
    outline: none;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btnLogin:hover {
    background-color: #fff;
    border: 1px solid #F9D310;
    color: #F9D310;

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


.task {
    position: relative;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid var(--color-secondary);
    margin: 0 10px 10px 0;
    width: 300px;
    height: 250px;
}

.image {

    width: 100%;
    height: 100%;

}

.task:hover {
    background-color: rgba(0, 0, 0, 0.2);
}

.image img {

    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}

.sci {
    bottom: 10px;
    left: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    /* border: 1px solid red; */
}

.sci span {
    margin: 0 10px;
    font-size: 18px;
    border-radius: 6px;
    color: #fff;
    z-index: 4;
    cursor: pointer;
    padding: 5px 10px;

}





.update {
    background-color: rgb(63, 134, 255);
}

.update:hover {
    background-color: #fff;
    color: rgb(63, 134, 255);
    border: 1px solid rgb(63, 134, 255);
}

.delete {
    background-color: red;
}

.delete:hover {
    background-color: #fff;
    color: red;
    border: 1px solid red;
}

.updateclose{
    background-color: rgb(183, 239, 243);
   

}
.updateclose i , .deleteclose i  {
    cursor: not-allowed;
}
.deleteclose{
    background-color: rgb(245, 108, 108);
}



p {
    margin-bottom: 0 !important;
}


.boutton {

    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 10px;


}

.btn {
    padding: 1em 2em;
    font-size: 10px;
    font-weight: 500;
    color: #000;
    background-color: var(--color-secondary);
    border: none;
    border-radius: 45px;
    /* box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); */
    cursor: pointer;
    outline: none;
    bottom: 0px;
    position: absolute;
}

.btn:hover {
    background-color: #fff;
    border: 1px solid var(--color-secondary);

}

.upload-area {
    width: 100%;
    background-color: rgb(255, 255, 255);
    border: 2px solid var(--color-secondary);
    border-radius: 24px;
    padding: 10px;
    text-align: center;
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
    /* height: 11.25rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px dashed var(--color-secondary);
    border-radius: 15px;
    margin-top: 15Px;
    transition: border-color 300ms ease-in-out;
    padding: 10px 34px;
}

.upload-area__drop-zoon:hover {
    border-color: var(--color-secondary);
}

.drop-zoon:hover .drop-zoon__icon,
.drop-zoon:hover .drop-zoon__icon {
    opacity: 0.7;

}


.drop-zoon:hover .drop-zoon__preview-image {
    opacity: 0.8;
}

.input-group input {
    padding: 10px !important;

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
    margin-top: 20px;
}

.sign:hover {
    border: 1px solid var(--color-secondary);
    color: var(--color-secondary);
    background-color: white;

}

.two-section {
    position: relative;
    min-height: 280px;
    width: 100%;
    height: auto;
    margin: 0 10px;
    display: flex;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

}

.table__body {
    width: 97%;
    max-height: calc(89% - 9.6rem);
    overflow: auto;
    overflow: overlay;
    padding-bottom: 10px;
}

.table__body::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb {
    border-radius: .5rem;
    background-color: #0004;
    visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb {
    visibility: visible;
}

table {
    width: 100%;
}

table,
th,
td {
    border-collapse: collapse;
    padding: 10px;
    text-align: center;
    font-size: 15px;
}



thead th {
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--color-primary);
    text-transform: capitalize;
    color: white;
    border: 1px solid var(--color-secondary);
}



tbody:nth-child(odd) tr:nth-child(odd) {
    background-color: #0000000b;
}

tbody:nth-child(even) tr:nth-child(even) {
    background-color: #0000000b;
}


tbody tr {
    --delay: .1s;
    transition: .5s ease-in-out var(--delay), background-color 0s;
}

tbody {
    border: 1px solid var(--color-secondary);

}

tbody tr td,
tbody tr td p,
tbody tr td img {
    transition: .2s ease-in-out;
}


td {
    border: 1px solid var(--color-secondary);
}


@media (max-width: 1000px) {
    td:not(:first-of-type) {
        min-width: 10rem;
    }
}

@media (max-width: 768px) {

    table,
    th,
    td {
        font-size: 12px;
    }
}

.bar_search {

    width: 70%;
    /* height: 100px; */
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:40px 10px;
}

.liste-searcher {
    justify-content: space-between;
    display: flex;
    width: 100%;
    border-radius: 6px;
    height: 60px;
    background-color: #fff;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    /* border: 1px solid red; */
}

.liste-searcher div {
    text-align: center;
    font-size: 20px;
    width: 60%;
    vertical-align: middle;
    border-right: 0.5px solid var(--color-primary);
}

.liste-searcher div :nth-child(2) {
    background: none;
    outline: none;
    border: none;
    font-size: 18px;
    margin: 5px;
    padding: 10px;
}

.liste-searcher i {
    color: var(--bg2);
}


.nsl select {
    width: calc(100% - 50px);
    font-size: 18px;
    cursor: pointer;
}

@media screen and (max-width: 768px) {

    .contenu{

        padding: 10px;
    }

    .bar_search{

        width:100% !important;
    }
    .liste-searcher {
        flex-direction: column;
        height: auto;
        /* margin: 20px auto; */
        width: 100%;
    }

    .liste-searcher div {
        align-items: center;
        width: 100%;
        border-bottom: 0.2px solid var(--color-primary);
        border-right: none;
    }

    .nsl select {
        width: 207.5px;
    }
}

@media screen and (max-width: 768px) {
  .form-container {
    width: 700px;
    max-width: 100%;
  }

  .content-group {
    display: flex;
    flex-direction: column;
    width: 100% !important;
  }
  .row > * {
   
    padding-right:0 !important;
    padding-left:0 !important;
    
}

  .profil1{

    top:-26px;
  }

  .upload-area__title{

    font-size:1.6rem;
  }
}


</style >
   