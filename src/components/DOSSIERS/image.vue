<template>
    <div class=" d-flex justify-content-center align-items-center flex-wrap">
        <div class="btnLogin" @click="this.isOpen = true" > <i class="bi bi-plus-lg"></i> Ajouter</div>
      <div class="task" v-for="item in userData.photos" :key="item.id" >
  
        <div class="tag" >
          <div class="image">
            <img :src="item.Photo" alt="" class="glightbox">
          </div>
        </div> 
        <div class="icon">
    <i class="bi bi-pen"></i>
  <i class="bi bi-trash"></i>
  </div>
    </div>

  



<MazDialog v-if="isOpen" v-model="isOpen" >
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
      <div
        id="dropZoon"
        class="upload-area__drop-zoon drop-zoon"
        @dragover="handleDragOver"
        @dragleave="handleDragLeave"
        @drop="handleDrop"
      >
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
    </div>
</template>

<script>
import 'swiper/swiper-bundle.css';
import  "glightbox/dist/css/glightbox.css";
import  "glightbox/dist/js/glightbox.js";
import GLightbox from 'glightbox';
import MazDialog from 'maz-ui/components/MazDialog'
import axios from '@/lib/axiosConfig.js'
export default {
    name: 'DNPMECLImage',
    components: {
    MazDialog,
    
  },
    computed: {
   
    loggedInUser() {
      return this.$store.getters['user/loggedInUser'];
    },
  },

    data() {
        return {
            isOpen:false,
            imagesTypes: ['jpeg', 'png', 'svg', 'gif'],
      uploadedFileName: 'Project 1',
      uploadedFileIconText: '',
      uploadedFileCounter: 0,
      isUploading: false,
      uploadProgress: 0,
      userData:''
            
        };
    },

    mounted() {
        this.lightbox = GLightbox({ 
              selector: ".glightbox"
             });
        console.log("datadossiers", this.loggedInUser);
        
        this.fetchgetPhotoMpme()
    },
    methods: {

      async fetchgetPhotoMpme() {
            try {
                const userId = this.loggedInUser.user.Entreprises;
                // const userId = 'MPME-1580-2023'
                const response = await axios.get(`/mpme/photos/${userId}`, {
         headers: {
                       Authorization: `Bearer ${this.loggedInUser.access_token}`,
                    },
        //              onUploadProgress: (progressEvent) => {
        // const percentage = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        // this.uploadedFileCounter = percentage;
      // },
            
          });
                this.userData = response.data.data;
              
                console.log('UserData:', this.userData.photos);
            } catch (error) {
                console.error('Erreur lors de la récupération des options des sous prefecture :', error);
            }
        },
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
    console.log('Drop');
    event.preventDefault();
    event.target.classList.remove('drop-zoon--over');
    const file = event.dataTransfer.files[0];
    console.log('Dropped file:', file);
    this.uploadFile(file);
  },
  handleFileChange(event) {
    console.log('File input change');
    const file = event.target.files[0];
    console.log('Selected file:', file);
    this.uploadFile(file);
  },
  async  uploadFile(file) {
      const fileReader = new FileReader();
      const fileType = file.type;
      const fileSize = file.size;

      if (this.fileValidate(fileType, fileSize)) {
        const formData = new FormData();
       formData.append('photo', file);
        console.log('tttt', formData);
        try {
          const userId = this.loggedInUser.user.Entreprises;
            const response = await axios.post(`/mpme/photos/${userId}`, formData, {
         headers: {
           Authorization: `Bearer ${this.loggedInUser.access_token}`,
                    },
        //              onUploadProgress: (progressEvent) => {
        // const percentage = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        // this.uploadedFileCounter = percentage;
      // },
            
          });
          // this.uploadedFileCounter = 100;
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
          console.log('Réponse de l\'API:', response.data);

          previewImage.setAttribute('src', fileReader.result);
          this.uploadedFileName = file.name;
          this.progressMove();
        });

        fileReader.readAsDataURL(file);
        } catch (error) {
            // Une erreur s'est produite, vous pouvez gérer les erreurs ici
      console.error('Erreur lors de l\'envoi du fichier:', error);
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
@media (max-width: 991px){
    section {
    padding: 50px !important;
}
}




.container_content {
    margin: 0 auto;
    background: #fff;
  
  }
  .section-header{
    padding: 40px 0 0 0 !important;
  
  }
  
  .contenu {
  
    position: relative;
    padding: 15px 10px;
  }
  
  .task {
    position: relative;
    color: #2e2e2f;
    background-color: #fff;
    padding: 10px 0px;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    margin: 0 10px 10px 0;
    border: 3px dashed transparent;
    width: 230px;
    height: 267px;
        display: flex;
   flex-direction: column;
    justify-content: center;
    align-items: center;
        justify-content: space-between;
  }


  
  .tag .image {


    height: 100%;
    width: 100%;
    cursor: pointer;
  transition: opacity 0.3s ease;
  vertical-align: middle
  }
.tag .image:hover {
    object-fit: cover;
    filter: brightness(75%);
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(-10px, 0, 0);
}
  
  .tag .image img {
  
    max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  
  }

  .icon{
    /* border:1px solid red ; */
    width:100%;
    display:flex;
    justify-content: space-around;
        font-size: 25px;
    padding: 5px;
   
}

.icon .bi{
/* border: 1px solid blue; */
padding: 2px;
 border-radius: 5px;
 width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;

}

.bi-pen{
color: #fff;
background-color: #0d6efd;

}

.bi-pen:hover{
color: #0d6efd;
background-color: #fff;
border:1px solid #0d6efd;
cursor: pointer;

}

.bi-trash{
color: #fff;
background-color: #ff3e1dcc;

}

.bi-trash:hover{
color: #ff3e1dcc;
background-color: #fff;
border:1px solid #ff3e1dcc;
cursor: pointer;

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

.upload-area--open { /* Slid Down Animation */
  animation: slidDown 500ms ease-in-out;
}

@keyframes slidDown {
  from {
    height: 28.125rem; /* 450px */
  }

  to {
    height: 35rem; /* 560px */
  }
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
  height: 11.25rem; /* 180px */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px dashed var(--color-secondary);
  border-radius: 15px;
  margin-top: 2.1875rem;
  cursor: pointer;
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
.drop-zoon--Uploaded {
  
}

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
  max-width: 6.25rem; /* 100px */
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
}
</style>