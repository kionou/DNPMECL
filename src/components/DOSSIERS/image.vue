<template>
  <Loading v-if="loading" style="z-index: 1100;"></Loading>
  <div class=" d-flex justify-content-center align-items-center flex-wrap" style="position: relative;">
    
    <div class="btnLgin" @click="this.isOpen = true"> <i class="bi bi-plus-lg"></i> Ajouter</div>
    <div v-if="paginatedItems.length === 0" class="noresul">
      <span> Vous n'avez pas encore d'image, vous pouvez également en ajouter une !! </span>
    </div>
    <div class="contenu d-flex justify-content-center align-items-center flex-wrap" data-aos="fade-up"
      data-aos-delay="100" v-else>
      <div class="task" v-for="item in paginatedItems" :key="item.id">
        <div class="image">
          <img :src="item.Photo" alt="">
        </div>

        <div class="sci">
          <span style="--i:1" v-if="item.StatutPhoto === '1' " class="open">
            <i class="bi bi-power" @click="updateupload(item.id)"></i>
           
          </span>
          <span style="--i:1" v-else class="close">
            <i class="bi bi-power" @click="updateupload(item.id)"></i>
           
          </span>
          <span style="--i:2" @click="hamdledelete(item.id)" class="delete">
            <i class="bi bi-trash"></i>

          </span>

        </div>
      </div>
    </div>

    <MazDialog v-if="isOpen" v-model="isOpen">
      <div>
        <div id="uploadArea" class="upload-area">
          <!-- Header -->
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
          <div id="dropZoon" class="upload-area__drop-zoon drop-zoon" @dragover="handleDragOver"
            @dragleave="handleDragLeave" @drop="handleDrop">
            <span class="drop-zoon__icon">
              <i class="bi bi-file-earmark-image"></i>
            </span>
            <!-- <p class="drop-zoon__paragraph">Drop your file here or Click to browse</p> -->
            <span id="loadingText" class="drop-zoon__loading-text">S'il vous plaît, attendez</span>
            <img src="" alt="Preview Image" id="previewImage" class="drop-zoon__preview-image" draggable="false" />
            <label for="fileInput" class="drop-zoon__paragraph">
              <span class="drop-zoon__file-label-text">Cliquez pour parcourir</span>
            </label>
            <input type="file" id="fileInput" class="drop-zoon__file-input" accept="image/*" @change="handleFileChange" />

          </div>
          <!-- End Drop Zoon -->

          <!-- File Details -->
          <div id="fileDetails" class="upload-area__file-details file-details">
            <h3 class="file-details__title">Fichier téléchargé</h3>

            <div id="uploadedFile" class="uploaded-file">
              <div class="uploaded-file__icon-container">
                <i class="bi bi-filetype-png"></i>
                <span class="uploaded-file__icon-text">{{ uploadedFileIconText }}</span>
              </div>

              <div id="uploadedFileInfo" class="uploaded-file__info">
                <span class="uploaded-file__name">{{ uploadedFileName }}</span>
                <span class="uploaded-file__counter">{{ uploadedFileCounter }}%</span>
              </div>
            </div>
          </div>
          <!-- End File Details -->
        </div>
      </div>

    </MazDialog>

    <MazDialog v-model="isdelete" title="Suppression d'image">
      <p>
        Êtes-vous sûr de vouloir supprimer cette image ?
      </p>
      <template #footer="{ close }">

        <div class="supp" @click="close" style="background-color: red; "> Non</div>

        <div class="supp" @click="confirmDelete" style="background-color: var(--color-primary);"> Oui</div>

      </template>
    </MazDialog>
    <MazDialog v-model="confirmdelete">
      <p>
        Image supprimée avec succès !!
      </p>
      <template #footer="{ close }">

        <div class="supp" @click="close" style="background-color: blue; "> Ok</div>



      </template>
    </MazDialog>


    <MazDialog v-if="updatedt" v-model="updatedt">
      <div>

        <div id="uploadArea" class="upload-area">
          <!-- Header -->
          <div class="upload-area__header">
            <h1 class="upload-area__title">Modifiez votre fichier</h1>
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
                <span>Changer Image</span>
              </label>
              <input id="file" type="file" @change="loadFile" />
              <img :src="updateImageUrl" id="output" width="200" />
            </div>


          </div>
          <!-- End Drop Zoon -->


        </div>
      </div>

    </MazDialog>

    <MazDialog v-model="updated">
      <p>
        {{ publier }}
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
import "glightbox/dist/css/glightbox.css";
import "glightbox/dist/js/glightbox.js";
import GLightbox from 'glightbox';
import MazDialog from 'maz-ui/components/MazDialog'
import axios from '@/lib/axiosConfig.js'
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
  },

  data() {
    return {
      isOpen: false,
      loading:true,
      isdelete: false,
      confirmdelete: false,
      updated: false,
      publier:'',
      imagesTypes: ['jpeg', 'png', 'svg', 'gif'],
      uploadedFileName: 'Project 1',
      uploadedFileIconText: '',
      uploadedFileCounter: 0,
      isUploading: false,
      uploadProgress: 0,
      userData: [],
      resultnone: '',
      imageToDeleteId: null,
      updateImageId: null,
      updateImageUrl: null,
      currentPage: 1,
      itemsPerPage: 10,

    };
  },
  computed: {
    loggedInUser() {
        return this.$store.getters['user/loggedInUser'];
      },
    totalPages() {
    // return Math.ceil(this.items.length / this.itemsPerPage);
    return Math.ceil(this.userData.length / this.itemsPerPage);
  },
  paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.userData.slice(startIndex, endIndex);
    },

  },

 async  mounted() {
    this.lightbox = GLightbox({
      selector: ".glightbox"
    });
    console.log("datadossiers", this.loggedInUser);

    this.fetchgetPhotoMpme()
    this.filteredPmes = await this.userData 
  },
  methods: {
    // delete picture
    hamdledelete(itemId) {
      this.imageToDeleteId = itemId;
      this.isdelete = true

    },
    async confirmDelete() {
      this.isdelete = false
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
          this.fetchgetPhotoMpme();
           this.loading = false
          this.confirmdelete = true
         

        } else {
          console.log('error', response.data)
          this.loading = false

        }

      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
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
    updateCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
      window.scrollTo({
      top: 0,
      behavior: 'smooth', // Utilisez 'auto' pour un défilement instantané
    });
    },

    // update picture
 async updateupload(id) {
  this.loading = true

      this.updateImageId = id;
      try {
      const response = await axios.put(`/mpme/photos/${this.updateImageId}`, {}, {
        headers: {
          Authorization: `Bearer ${this.loggedInUser.token}`,
          'Content-Type': 'multipart/form-data',
        },
        
      });
      console.log('Réponse de l\'API:', response);

      if (response.data.status === "success") {
        if (response.data.data.StatutPhoto === true) {
        this.publier = await 'Votre image a été publiée avec succès !'
        this.fetchgetPhotoMpme();
      this.loading = false
      this.updated = true
      window.scrollTo({  top: 0, behavior: 'smooth', });
         } else {
           this.publier = await 'Votre image a été retirée de la liste avec succès.'
           this.fetchgetPhotoMpme();
      this.loading = false
      this.updated = true
      window.scrollTo({  top: 0, behavior: 'smooth', });
          
         }
    
        
      } else {
        
      }

      } catch (error) {
        console.error('Erreur lors de la mise à jour des données MPME guinee :', error);
                if (error.response.data === 'Unauthorized' || error.response.data.status === 'error' ) {
                console.log('aut',error.response.data.status === 'error');
                await this.$store.dispatch('user/clearLoggedInUser'); 
                this.$router.push('/connexion-mpme'); 
                    
                } else {
                    this.formatValidationErrors(error.response.data.errors)
                this.loading =false
                return false;
                }
      }
            
    },



    // get allpicture
    async fetchgetPhotoMpme() {
      try {
        const userId = this.loggedInUser.id;
                // const userId = 'MPME-1580-2023'
        const response = await axios.get(`/mpme/photos/${userId}`, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
            'Content-Type': 'multipart/form-data',

          },


        });
        console.log('UserData:', response);

        if (response.data.status === 'success') {
          this.userData = response.data.data.photos;
            this.loading = false
            
          }


    

      } catch (error) {
        console.error('Erreur lors de la mise à jour des données MPME guinee :', error);
                if (error.response.data === 'Unauthorized' || error.response.data.status === 'error' ) {
                console.log('aut',error.response.data.status === 'error');
                await this.$store.dispatch('user/clearLoggedInUser'); 
                this.$router.push('/connexion-mpme'); 
                    
                } else {
                    this.formatValidationErrors(error.response.data.errors)
                this.loading =false
                return false;
                }
      }
    },

    // upload picture
    handleDragOver(event) {
      console.log('Drag over');
      event.preventDefault();
      event.target.classList.add('drop-zoon--over');
    },
    handleDragLeave(event) {
      console.log('Drag leave');
      event.target.classList.remove('drop-zoon--over');
    },
    handleDrop(event) {
      event.preventDefault();
      event.target.classList.remove('drop-zoon--over');
      const file = event.dataTransfer.files[0];
      this.uploadFile(file);
    },
    handleFileChange(event) {
      this.loading = true
      console.log('File input change');
      const file = event.target.files[0];
      console.log('Selected file:', file);
      this.uploadFile(file);
    },
    async uploadFile(file) {
      const fileReader = new FileReader();
      const fileType = file.type;
      const fileSize = file.size;

      if (this.fileValidate(fileType, fileSize)) {
        const formData = new FormData();
        formData.append('photo', file);
        console.log('tttt', formData);
        try {
          const userId = this.loggedInUser.id;
          const response = await axios.post(`/mpme/photos/${userId}`, formData, {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
              'Content-Type': 'multipart/form-data',
            },


          });
          console.log('Réponse de l\'API:', response.data);
          // this.uploadedFileCounter = 100;
          this.loading = false
          const dropZoon = document.querySelector('#dropZoon');
          const loadingText = document.querySelector('#loadingText');
          const previewImage = document.querySelector('#previewImage');
          const uploadedFile = document.querySelector('#uploadedFile');
          const uploadedFileInfo = document.querySelector('#uploadedFileInfo');

          dropZoon.classList.add('drop-zoon--Uploaded');
          loadingText.style.display = 'block';
          previewImage.style.display = 'none';
          uploadedFile.classList.remove('uploaded-file--open');
          uploadedFileInfo.classList.remove('uploaded-file__info--active');

          fileReader.addEventListener('load', () => {
            setTimeout(() => {
              console.log('errrr');
              const uploadArea = document.querySelector('#uploadArea');
              uploadArea.classList.add('upload-area--open');
              loadingText.style.display = 'none';
              previewImage.style.display = 'block';
              const fileDetails = document.querySelector('#fileDetails');
              const uploadedFile = document.querySelector('#uploadedFile');
              const uploadedFileInfo = document.querySelector('#uploadedFileInfo');
              fileDetails.classList.add('file-details--open');
              uploadedFile.classList.add('uploaded-file--open');
              uploadedFileInfo.classList.add('uploaded-file__info--active');
            }, 500);
            previewImage.setAttribute('src', fileReader.result);
            this.uploadedFileName = file.name;
            this.progressMove();
          });

          fileReader.readAsDataURL(file);
          await this.fetchgetPhotoMpme();
        } catch (error) {
          console.error('Erreur lors de la mise à jour des données MPME guinee :', error);
                if (error.response.data === 'Unauthorized' || error.response.data.status === 'error' ) {
                console.log('aut',error.response.data.status === 'error');
                await this.$store.dispatch('user/clearLoggedInUser'); 
                this.$router.push('/connexion-mpme'); 
                    
                } else {
                    this.formatValidationErrors(error.response.data.errors)
                this.loading =false
                return false;
                }
        }

      }
    },
    progressMove() {
      let counter = 0;

      setTimeout(() => {
        const counterIncrease = setInterval(() => {
          if (counter === 100) {
            clearInterval(counterIncrease);
          } else {
            counter += 10;
            this.uploadedFileCounter = counter;
          }
        }, 100);
      }, 600);
    },
    fileValidate(fileType, fileSize) {
      const isImage = this.imagesTypes.some(type => fileType.indexOf(`image/${type}`) !== -1);

      if (isImage) {
        if (fileSize <= 2000000) {
          return true;
        } else {
          alert('Please make sure your file is 2 Megabytes or less');
          return false;
        }
      } else {
        alert('Please make sure to upload an image file');
        return false;
      }
    },
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

.btnLgin {
  font-size: 15px;
  font-weight: 500;
  color: #000;
  background-color: #F9D310;
  border: none;
  border-radius: 45px;
  position: absolute;
  z-index: 3;
  right: 24px;
  top: -56px;
  cursor: pointer;
  outline: none;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btnLgin:hover {
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

@media (max-width: 991px) {
  section {
    padding: 50px !important;
  }
}

.contenu {

  /* border: 1px solid red; */
  padding: 15px 10px;
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

.task .sci {
  position: absolute;
  bottom: 10px;
  left: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 63%;
  justify-content: space-around;
}

.task .sci span {
  margin: 0 10px;
  opacity: 0;
  transition: 0.5s;
  font-size: 18px;
  border-radius: 6px;
  z-index: 4;

}

.task:hover .sci span {
  opacity: 1;
  transition-delay: calc(0.1s * var(--i));
  padding: 5px 10px;
  cursor: pointer;
  color:#fff ;
}

.open  {
  background-color:var(--color-primary) ;
 
}
.close{
  background-color:var(--color-secondary) ;
}
.delete{
  background-color:red ;
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
  width: 100%;
  height: 165px;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
  z-index: 0;
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
}

.upload-area__drop-zoon:hover {
  border-color: var(--color-secondary);
}

.drop-zoon__icon {
  display: flex;
  font-size: 3.75rem;
  color: var(--color-primary);
  transition: opacity 300ms ease-in-out;
}

.drop-zoon__paragraph {
  font-size: 0.9375rem;
  color: rgb(196, 195, 196);
  margin: 0;
  margin-top: 0.625rem;
  transition: opacity 300ms ease-in-out;
}

.drop-zoon:hover .drop-zoon__icon,
.drop-zoon:hover .drop-zoon__paragraph {
  opacity: 0.7;
}

.drop-zoon__loading-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  color: rgb(171, 202, 255);
  z-index: 10;
}

.drop-zoon__preview-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.3125rem;
  border-radius: 10px;
  display: none;
  z-index: 1000;
  transition: opacity 300ms ease-in-out;
}

.drop-zoon:hover .drop-zoon__preview-image {
  opacity: 0.8;
}

.drop-zoon__file-input {
  display: none;
}

/* (drop-zoon--over) Modifier Class */
.drop-zoon--over {
  border-color: rgb(63, 134, 255);
}

.drop-zoon--over .drop-zoon__icon,
.drop-zoon--over .drop-zoon__paragraph {
  opacity: 0.7;
}

/* (drop-zoon--over) Modifier Class */

.drop-zoon--Uploaded .drop-zoon__icon,
.drop-zoon--Uploaded .drop-zoon__paragraph {
  display: none;
}

/* File Details Area */
.upload-area__file-details {
  height: 0;
  visibility: hidden;
  opacity: 0;
  text-align: left;
  transition: none 500ms ease-in-out;
  transition-property: opacity, visibility;
  transition-delay: 500ms;
}

/* (duploaded-file--open) Modifier Class */
.file-details--open {
  height: auto;
  visibility: visible;
  opacity: 1;
}

.file-details__title {
  font-size: 1.125rem;
  font-weight: 500;
  color: rgb(196, 195, 196);
}

/* Uploaded File */
.uploaded-file {
  display: flex;
  align-items: center;
  padding: 0.625rem 0;
  visibility: hidden;
  opacity: 0;
  transition: none 500ms ease-in-out;
  transition-property: visibility, opacity;
}

/* (duploaded-file--open) Modifier Class */
.uploaded-file--open {
  visibility: visible;
  opacity: 1;
}

.uploaded-file__icon-container {
  position: relative;
  margin-right: 0.3125rem;
}

.uploaded-file__icon {
  font-size: 3.4375rem;
  color: rgb(63, 134, 255);
}

.uploaded-file__icon-text {
  position: absolute;
  top: 1.5625rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgb(255, 255, 255);
}

.uploaded-file__info {
  position: relative;
  top: -0.3125rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.uploaded-file__info::before,
.uploaded-file__info::after {
  content: '';
  position: absolute;
  bottom: -0.9375rem;
  width: 0;
  height: 0.5rem;
  background-color: #ebf2ff;
  border-radius: 0.625rem;
}

.uploaded-file__info::before {
  width: 100%;
}

.uploaded-file__info::after {
  width: 100%;
  background-color: rgb(63, 134, 255);
}

/* Progress Animation */
.uploaded-file__info--active::after {
  animation: progressMove 800ms ease-in-out;
  animation-delay: 300ms;
}

@keyframes progressMove {
  from {
    width: 0%;
    background-color: transparent;
  }

  to {
    width: 100%;
    background-color: rgb(63, 134, 255);
  }
}

.uploaded-file__name {
  width: 100%;
  max-width: 6.25rem;
  /* 100px */
  display: inline-block;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.uploaded-file__counter {
  font-size: 1rem;
  color: rgb(196, 195, 196);
}



.drop-zoon__file-label {
  cursor: pointer;
  padding: 1rem;
  background-color: rgb(63, 134, 255);
  color: white;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
}

.drop-zoon__file-label:hover {
  background-color: rgb(43, 114, 215);
}

.drop-zoon__file-label-text {
  display: inline-block;
  font-size: 0.9375rem;
  cursor: pointer;
}

@media (max-width: 768px){

.btnLgin {
  
  right: 5px;
  top: -43px;

}
}

</style>