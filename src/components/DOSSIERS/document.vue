<template>
  <Loading v-if="loading" style="z-index: 1100;"></Loading>
    <div class=" d-flex justify-content-center align-items-center flex-wrap w-100"  data-aos="fade-up"
        data-aos-delay="100">
        <div class="bar_search">
      <div class="liste-searcher">
        <div class="nsl">
          <i class="bi bi-search"></i>
          <input type="text" role="search" placeholder="Rechercher un nom..." v-model="control.name" @input="filterByName" />
        </div>
       
        <div class="nsl" style="border-right: none" >
          <i class="bi bi-filter"></i>
          <select name="sousdoc" v-model="control.sousdoc" @change="filterData">
            <option value="" selected="true">Choisir un type de document</option>
            <option v-for="doc in sousdocOptions" :key="doc.id" :value="doc.value" >{{ doc.label }}</option>
          </select>
        
        </div>
      </div>
    </div>
      <div class="btnLogin" @click="this.isOpen = true"> <i class="bi bi-plus-lg"></i> Ajouter</div>
      <div v-if="sortedDocuments.length === 0" class="noresul">
        <span>Vous n'avez pas encore de document, vous pouvez également en ajouter un !!</span>
      </div>
      <div class="contenu d-flex justify-content-center align-items-center flex-wrap  w-100" v-else>
     
        <div class="two-section">
           
            
           <div class="table__body" >
               <table>
                   <thead>
       
                       <tr>
                           <th> # </th>
                           <th > Nom</th>
                           <th  >Source</th>
                           <th > Type</th>
                           <th  >Action</th>
   
                       </tr>
                       
                   </thead>
                   <tbody  >
       
                       <tr v-for="(item , index ) in paginatedItems" :key="item.id" >
                           <td>{{ getSequentialNumber(index) }} </td>
                           <td >{{ item.NomDocument }} </td> 
                           <td>{{ item.OrigineDocument }}</td>
                           <td> {{ item.SousCategorieDocument }}</td>
                           <td>
                            <div class="sci">
          <span style="--i:1"  class="dow">
            <i class="bi bi-cloud-arrow-down-fill"></i>
           <a :href="item.LienDocument" download>
          </a>
          </span>
          <span style="--i:1" class="update">
            <i class="bi bi-pen" @click="updatedoc(item.id)"></i>
           
          </span>
          <span style="--i:2" @click="hamdledeletedoc(item.id)" class="delete">
            <i class="bi bi-trash"></i>
          </span>

          <span style="--i:1" class="opens" v-if="item.publish === 1">
            <i class="bi bi-power" @click="publish(item.id , item.publish)"></i>
          </span>
          <span style="--i:1" class="open" v-else>
            <i class="bi bi-power" @click="publish(item.id , item.publish)"></i>
          </span>

        </div>
                           </td>
                          
                       </tr>
                      
                      
                   </tbody>
               </table>
              </div>
        </div>
      </div>
  
      <MazDialog v-if="isOpen" v-model="isOpen" width="600px" max-height="revert"  padding="0 1.5rem 1.5rem">
  <div>
  
  <div id="uploadArea" class="upload-area">
    <!-- Header -->
    <div class="upload-area__header">
      <h1 class="upload-area__title">Téléchargez votre fichier</h1>
      <p class="upload-area__paragraph">
        Le fichier doit être un document
        <strong class="upload-area__tooltip">
          comme
          <span class="upload-area__tooltip-data">{{ imagesTypes.join(', ') }}</span>
        </strong>
      </p>
    </div>
    <!-- End Header -->

    <!-- Drop Zoon -->
    <div id="dropZoon" class="upload-area__drop-zoon drop-zoon">
    <div class="input-group">
    <label for="username">Nom du document <span class="text-danger">*</span></label>
    <input type="text" name="nom" id="nom" placeholder="" v-model="step1.nom">
  </div>
  <small v-if="v$.step1.nom.$error">{{v$.step1.nom.$errors[0].$message}}</small>

    
  <div class="input-group">
    <label for="tel">Source du document <span class="text-danger">*</span></label>
    <input type="text" name="origine" id="origine" placeholder="" v-model="step1.origine">
  </div>
  <small v-if="v$.step1.origine.$error">{{v$.step1.origine.$errors[0].$message}}</small>

  <div class="input-group">
    <label for="tel">Type<span class="text-danger">*</span></label>
    <MazSelect v-model="step1.sousdoc" color="secondary" :options="sousdocOptions" />
   
  </div>
  <small v-if="v$.step1.sousdoc.$error">{{v$.step1.sousdoc.$errors[0].$message}}</small>

  <div class="input-group">
    <label for="tel">Telecharger le ficher <span class="text-danger">*</span></label>
    <input type="file" name="file" id="ficher" placeholder="" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"  ref="fileInput" @change="handleFileUpload"> 
  </div>
  <small v-if="v$.step1.selectedFile.$error">{{v$.step1.selectedFile.$errors[0].$message}}</small>

     

      <button class="sign" @click.prevent="submit">Enregistrer</button>
    </div>
    <!-- End Drop Zoon -->


  </div>
</div>
  
      </MazDialog>
  
      <MazDialog v-model="msgsuccess" >
        <p>
          Document enregistré avec succès !!
        </p>
        <template #footer="{ close }">
  
          <div class="supp" @click="close" style="background-color: blue; "> Ok</div>
  
        </template>
      </MazDialog>
      <MazDialog v-model="isdeletedoc" title="Suppression d'image">
      <p>
        Êtes-vous sûr de vouloir supprimer ce document ?
      </p>
      <template #footer="{ close }">

        <div class="supp" @click="close" style="background-color: red; "> Non</div>

        <div class="supp" @click="confirmDeletedoc" style="background-color: var(--color-primary);"> Oui</div>

      </template>
    </MazDialog>
    <MazDialog v-model="confirmdeletedoc">
      <p>
        Document supprimé avec succès !!
      </p>
      <template #footer="{ close }">

        <div class="supp" @click="close" style="background-color: blue; "> Ok</div>



      </template>
    </MazDialog>
  
  
      <MazDialog v-if="updated" v-model="updated"  width="600px" max-height="revert"  padding="0 1.5rem 1.5rem">
        <div>
  
  <div id="uploadArea" class="upload-area">
    <!-- Header -->
    <div class="upload-area__header">
      <h1 class="upload-area__title">Modififiez votre fichier</h1>
    </div>
    <!-- End Header -->

    <!-- Drop Zoon -->
    <div id="dropZoon" class="upload-area__drop-zoon drop-zoon">
      <form action="">
        <div class="input-group">
    <label for="username">Nom du document <span class="text-danger">*</span></label>
    <input type="text" name="nom" id="nom" placeholder="" v-model="step2.nom">
  </div>
  <small v-if="v$.step2.nom.$error">{{v$.step2.nom.$errors[0].$message}}</small>

    
  <div class="input-group">
    <label for="tel">Source du document <span class="text-danger">*</span></label>
    <input type="text" name="origine" id="origine" placeholder="" v-model="step2.origine">
  </div>
  <small v-if="v$.step2.origine.$error">{{v$.step2.origine.$errors[0].$message}}</small>

  <div class="input-group">
    <label for="tel">Type<span class="text-danger">*</span></label>
    <MazSelect v-model="step2.sousdoc" color="secondary" :options="sousdocOptions" />
   
  </div>
  <small v-if="v$.step2.sousdoc.$error">{{v$.sousdoc.$errors[0].$message}}</small>

      <button class="sign" @click.prevent="hamdleUpdated">Modifier</button>
      </form>

    </div>
    <!-- End Drop Zoon -->


  </div>
</div>
  
      </MazDialog>


      <MazDialog v-model="publishDoc">
      <p>
        {{  publier }}
      
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
  import 'swiper/swiper-bundle.css';
  import MazDialog from 'maz-ui/components/MazDialog'
  import axios from '@/lib/axiosConfig.js'
  import useVuelidate from '@vuelidate/core';
  import { require, lgmin, lgmax, ValidEmail  } from '@/functions/rules';
  import Pag from '../Public/other/pag.vue';
  import Loading from '../Public/other/preloader.vue';
  export default {
    name: 'DNPMECLImage',
    components: {
      MazDialog, Pag , Loading
  
    },
    computed: {
  
      loggedInUser() {
        return this.$store.getters['user/loggedInUser'];
      },
      sortedDocuments() {
      return this.originalDocuments
      .slice()
      .filter(document => document.CodeMpme === this.loggedInUser.id)
      .sort((a, b) => a.CodeMpme.localeCompare(b.CodeMpme));
    },
       totalPages() {
    // return Math.ceil(this.items.length / this.itemsPerPage);
    return Math.ceil(this.filteredDocuments.length / this.itemsPerPage);
  },
  paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredDocuments.slice(startIndex, endIndex);
    },
    },
  
    data() {
      return {
        control: {
                name: '',
                sousdoc: '',
            },
        
        isOpen: false,
        loading:true,
        publishDoc:false,
        msgsuccess: false,
        isdeletedoc: false,
        confirmdeletedoc: false,
        updated: false,
        v$:useVuelidate(),

        imagesTypes: ['pdf', 'word', 'txt', 'excel' , 'powerpoint'],
        selectedFile: null,
        sousdocOptions:[],
        sousdoc:'',
        origine:'',
        nom:'',
        startIndex: 0,
         currentPage: 1,
         itemsPerPage: 15,


      originalDocuments: [], // Les données originales
      filteredDocuments: [], // Les résultats filtrés
      paginatedDocuments: [], // Les résultats paginés
        resultnone: '',
        imageToDeleteId: null,
        updateImageId: null,
        updateDocId: null,
        step1:{
          selectedFile: null,
           sousdoc:'',
           origine:'',
            nom:'',
        },
        step2:{
           sousdoc:'',
           origine:'',
            nom:'',
        },
  
      };
    },
    validations: {
      step1:{
         nom:{
             require,
             lgmin:lgmin(2),
          },
          origine:{
            require,
            lgmin:lgmin(2),
              
          },
          sousdoc:{
            require,  
          },
          selectedFile:{
            require,
          }
      },
      step2:{
         nom:{
             require,
             lgmin:lgmin(2),
          },
          origine:{
            require,
            lgmin:lgmin(2),
              
          },
          sousdoc:{
            require,  
          },
      },
          
        },
        async created() {
    try {
      await this.fetchgetDocMpme(); // Assurez-vous d'appeler cette fonction au moment approprié
    } catch (error) {
      console.error('Erreur lors de la récupération des options des sousdoc :', error.message);
    }
  },
  
    mounted() {
     
      console.log("datadossiers", this.loggedInUser);
      // this.fetchgetDocMpme()
      this.fetchSousDocOptions()
      // this.filteredDocuments =  this.originalDocuments
    },
    methods: {

       // delete picture
    hamdledeletedoc(itemId) {
      console.log(itemId);
      this.ToDeleteId = itemId;
      this.isdeletedoc = true

    },
    async confirmDeletedoc() {
      this.loading = true
      console.log('gggg', this.ToDeleteId);
      this.isdeletedoc = false
      try {
        // Faites une requête pour supprimer l'élément avec l'ID itemId
        const response = await axios.delete(`/documents-mpme/${this.ToDeleteId}`, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
            'Content-Type': 'multipart/form-data',

          },


        });
        console.log('Réponse de suppression:', response);
        if (response.data.status === 'success') {
          this.confirmdeletedoc = true
          this.fetchgetDocMpme();
          this.loading = false

        } else {
          console.log('error', response.data)
          this.loading = false
        }
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        if (error && error.response.data === 'Unauthorized' || error.response.data.status === 'error') {
                    console.log('aut', error.response.data.status === 'error');
                    await this.$store.dispatch('user/clearLoggedInUser');
                    this.$router.push('/login_user_mpme');

                } else {
                    this.formatValidationErrors(error.response.data.errors)
                    this.loading = false
                    return false;
                }
      }

    },
      handleFileUpload() {
      this.step1.selectedFile = this.$refs.fileInput.files[0];
      console.log( this.step1.selectedFile);
    },
  async  submit(){
    this.loading = true
       this.v$.step1.$touch()
    if (this.v$.$errors.length == 0 ) {
      console.log('bonjour');
      const formData = new FormData();
      formData.append('document', this.step1.selectedFile);
      formData.append('NomDocument', this.step1.nom);
      formData.append('CodeMpme', this.loggedInUser.id);
      formData.append('OrigineDocument', this.step1.origine);
      formData.append('SousCategorieDocument', this.step1.sousdoc);
      console.log( formData);
      console.log( this.step1.selectedFile ,this.step1.nom , this.step1.origine , this.step1.sousdoc , this.loggedInUser.id );


      try {
        const response = await axios.post('/documents-mpme', formData, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Réponse du téléversement :', response);
        if (response.data.status === 'success') {
         await this.fetchgetDocMpme()
          this.msgsuccess = true
          this.isOpen = false
          this.loading = false

          
        }else{
          
        }
      } catch (error) {
        console.error('Erreur lors du téléversement :', error);
        if (error && error.response.data === 'Unauthorized' || error.response.data.status === 'error') {
                    console.log('aut', error.response.data.status === 'error');
                    await this.$store.dispatch('user/clearLoggedInUser');
                    this.$router.push('/login_user_mpme');

                } else {
                    this.formatValidationErrors(error.response.data.errors)
                    this.loading = false
                    return false;
                }

      }    
        }else{
        
        
        }
    
    },
    getSequentialNumber(index) {
      return this.startIndex + index + 1;
    },

    async fetchSousDocOptions() { // Renommez la méthode pour refléter qu'elle récupère les options de pays
            try {
                await this.$store.dispatch('fetchSousDocOptions');
                const options = JSON.parse(JSON.stringify(this.$store.getters['getSousDocOptions'])); // Accéder aux options des pays via le getter
                console.log('Options sousdoc:', options);
                this.sousdocOptions = options; // Affecter les options à votre propriété sortedCountryOptions
            } catch (error) {
                console.error('Erreur lors de la récupération des options des sousdoc :', error.message);
            }
        },
      // delete picture
      hamdledelete(itemId) {
        console.log(itemId);
        this.imageToDeleteId = itemId;
        this.isdelete = true
  
      },
      async confirmDelete() {
        this.loading = true
      
        
        try {
          // Faites une requête pour supprimer l'élément avec l'ID itemId
          const response = await axios.delete(`mpme/photos/${this.imageToDeleteId}`, {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
              'Content-Type': 'multipart/form-data',
  
            },
  
          });
          console.log('Réponse de suppression:', response);
          if (response.data.status === 'success') {
            this.confirmdelete = true
            this.isdelete = false
            this.fetchgetPhotoMpme();
          this.loading = false

  
          } else {
            console.log('error', response.data)
          this.loading = false

          }
        } catch (error) {
          console.error('Erreur lors de la suppression:', error);
          console.error('Erreur lors de la mise à jour des données MPME guinee :', error);
                if (error.response.data === 'Unauthorized' || error.response.data.status === 'error' ) {
                console.log('aut',error.response.data.status === 'error');
                await this.$store.dispatch('user/clearLoggedInUser'); 
                this.$router.push('/login_user_mpme'); 
                    
                } else {
                    this.formatValidationErrors(error.response.data.errors)
                this.loading =false
                return false;
                }

        }
      },
  
  
      // get allpicture
      async fetchgetDocMpme() {
        try {
          const userId = this.loggedInUser.id;
          
                  // const userId = 'MPME-1580-2023'
          const response = await axios.get(`/documents-mpme/${userId}/documents`, {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
              'Content-Type': 'multipart/form-data',
  
            },

          });
          console.log('UserData:', response);

          if (response.data.status === 'success') {
            this.userData = [...response.data.data.data];
             this.originalDocuments = [...response.data.data.data];
              this.filteredDocuments = this.originalDocuments;
              this.loading = false
            
          } 
          else {
            
          }
  
           
       
  
        } catch (error) {
          console.error('Erreur lors de la récupération des options des sous prefecture :', error);
          console.error('Erreur lors de la mise à jour des données MPME guinee :', error);
                if (error.response.data === 'Unauthorized' || error.response.data.status === 'error' ) {
                console.log('aut',error.response.data.status === 'error');
                await this.$store.dispatch('user/clearLoggedInUser'); 
                this.$router.push('/login_user_mpme'); 
                    
                } else {
                    this.formatValidationErrors(error.response.data.errors)
                this.loading =false
                return false;
                } 
        }
      },
  
      // upload document
      updatedoc(id){
      this.updateDocId = id
      this.updated = true
      // Trouver le document correspondant dans le tableau userData
    const documentToUpdate = this.originalDocuments.find(doc => doc.id === id);

// Attribuer les valeurs aux champs d'entrée
this.step2.nom = documentToUpdate.NomDocument;
this.step2.origine = documentToUpdate.OrigineDocument;
this.step2.sousdoc = documentToUpdate.SousCategorieDocument;

// Vous pouvez également stocker l'URL du document pour l'affichage
// this.updateImageUrl = documentToUpdate.LienDocument;

console.log('Document à mettre à jour :', documentToUpdate);
      
      
      },
    async  hamdleUpdated(){
      this.updated = false
      this.loading = true
      this.v$.step2.$touch()
    if (this.v$.$errors.length == 0 ) {
      let dataDoc = {
        NomDocument: this.step2.nom,
        SousCategorieDocument: this.step2.sousdoc,
        OrigineDocument:this.step2.origine,
        CodeMpme:this.loggedInUser.id
       
      }
      console.log('dataDoc',dataDoc);
      try {
        const response = await axios.put(`/documents-mpme/${this.updateDocId }`, dataDoc, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
            'Content-Type': 'application/json',
          }
        });
        console.log('Réponse du téléversement :', response);
        if (response.data.status === 'success') {
         await this.fetchgetDocMpme()
         this.loading = false
          this.msgsuccess = true
         

          
        }else{
          
        }
      } catch (error) {
              console.error('Erreur lors du téléversement :', error);
              console.error('Erreur lors de la mise à jour des données MPME guinee :', error);
                if (error.response.data === 'Unauthorized' || error.response.data.status === 'error' ) {
                console.log('aut',error.response.data.status === 'error');
                await this.$store.dispatch('user/clearLoggedInUser'); 
                this.$router.push('/login_user_mpme'); 
                    
                } else {
                    this.formatValidationErrors(error.response.data.errors)
                this.loading =false
                return false;
                }

      }  
    
    }else{
      console.log('error', this.v$.$errors);
      this.loading = false

    }
      
      },

      // search and filter
  filterByName() {
    this.currentPage = 1;
    if (this.control.name !== null) {
       const tt = this.control.name;
      const  searchValue = tt.toLowerCase()
   this.filteredDocuments  =  [...this.originalDocuments].filter(item => {
  const pmeName = item.NomDocument || ''; 
   return pmeName.toLowerCase().includes(searchValue);
});

  } else {
     this.filteredDocuments  = [...this.originalDocuments];
     
  }
   
  },
  filterData() {
    // Vérifier si le type de document est sélectionné
    if (this.control.sousdoc) {
      this.filteredDocuments  = this.originalDocuments.filter(item =>
         item.SousCategorieDocument.toLowerCase() === this.control.sousdoc.toLowerCase());
    } else {
      this.filteredDocuments  = this.originalDocuments; // Afficher tous les résultats si aucun type de document n'est sélectionné
    }
  },
   updateCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
      window.scrollTo({
      top: 0,
      behavior: 'smooth', // Utilisez 'auto' pour un défilement instantané
    });
    },
   async publish(id , statut){
    this.loading = true
    
    let statutTraitement;
  if (statut === 1) {
    statutTraitement = false;
  } else if (statut === 0) {
    statutTraitement = true;
  } else {
    // Gérer le cas où la valeur de statut n'est ni 0 ni 1 (vous pouvez ajouter une logique personnalisée ici)
    statutTraitement = null; // Ou une autre valeur par défaut si nécessaire
  }

  let dataMpme = {
    document: id,
    statut: statutTraitement
  };
console.log('dataMpme',dataMpme);

    try {
        const response = await axios.put('/documents-mpme/publier/publication-de-document-mpme', dataMpme, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          
          }
        });
        console.log('Réponse du téléversement :', response);
        if (response.data.status === 'success') {
         if (response.data.message === "publier") {
        this.publier = await 'Votre document a été publié avec succès !'
         } else {
           this.publier = await 'Votre document a été retiré de la liste avec succès.'
          
         }
            this.loading = false
            this.publishDoc = true
           await this.fetchgetDocMpme()

          
        }else{
          
        }
      } catch (error) {
        console.error('Erreur lors du téléversement :', error);
        if (error && error.response.data === 'Unauthorized' || error.response.data.status === 'error') {
                    console.log('aut', error.response.data.status === 'error');
                    await this.$store.dispatch('user/clearLoggedInUser');
                    this.$router.push('/login_user_mpme');

                } else {
                    this.formatValidationErrors(error.response.data.errors)
                    this.loading = false
                    return false;
                }
       
    }
    }
    
    },

  };
  </script>
  
  <style lang="css" scoped>
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
    top: -71px;
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
  
 

.dow  {
  background-color:#4c4c4c ; 
  position: relative;
}
.dow a {
  position: absolute;
    width: 100%;
    left: 0;
    height: 81%;
    color: transparent;

}
.dow:hover{
  background-color: #fff; 
  color:#4c4c4c ;
  border:1px solid #4c4c4c;
}
.update{
  background-color:rgb(63, 134, 255) ;
}
.update:hover{
  background-color: #fff; 
  color:rgb(63, 134, 255) ;
  border:1px solid rgb(63, 134, 255);
}
.delete{
  background-color:red ;
}

.delete:hover{
  background-color: #fff; 
  color:red;
  border:1px solid red;
} 


.open{
  background-color:var(--color-secondary) ;
}
.open:hover{
  background-color: #fff; 
  color:var(--color-secondary) ;
  border:1px solid var(--color-secondary);
}

.opens{
  background-color:var(--color-primary) ;
}
.opens:hover{
  background-color: #fff; 
  color:var(--color-primary) ;
  border:1px solid var(--color-primary);
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

.sign:hover{
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
    
}
.table__body {
    width: 97%;
    max-height: calc(89% - 9.6rem);
    overflow: auto;
    overflow: overlay;
    padding-bottom:10px;
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

table,th,td {
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

tbody{
  border: 1px solid var(--color-secondary);

}

tbody tr td,
tbody tr td p,
tbody tr td img {
    transition: .2s ease-in-out;
}


 td  {
   border:1px solid var(--color-secondary);
}


@media (max-width: 1000px) {
    td:not(:first-of-type) {
        min-width: 10rem;
    }
}

@media (max-width: 768px) {
    table,th,td {
        font-size: 12px;
    }
}

.bar_search {

width: 100%;
/* height: 100px; */
/* border: 1px solid red; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
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
  .liste-searcher {
    flex-direction: column;
    height: auto;
    margin: 20px auto;
    width: 80%;
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
  </style >
 