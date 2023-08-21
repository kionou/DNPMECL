<template>
    <div>
        <div class="page-header">
            <div class="container">
                <div class="page-header__inner">
                    <h1 class="display-2">Bienvenue {{ loggedInUser.user.Prenoms }} {{ loggedInUser.user.Nom }}</h1>
                    <p>Votre espace personnel vous permet d’effectuer et de faire le suivi de votre entreprise</p>
                </div>
            </div>
        </div>
        <section class="section discover-section">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 md:w-100 col-lg-4 d-flex mb-4">
                        <div class="card w-100 card-round scard">
                            <div class="card-body d-flex flex-column">
                                <div class="row">
                                    <!-- <div class="col-md-12"><img height="96" src="/assets/img/features/profil.png" alt=""
                                            class="d-inline-block mr-4"></div> -->
                                </div>
                                <div class="row mt-2">
                                    <div class="col-sm-12"><b class="" style="color: var(--color-primary);">Mon profil </b>
                                        <p class="py-3 mb-2">Gérez tous les profils liés à votre compte</p>
                                        
                                    </div>
                                </div>
                                <div class="mt-auto text-center">
                               <router-link to="/formulaire" class="btnLogin" >Modifier</router-link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 md:w-100 col-lg-4 d-flex mb-4">
                        <div class="card w-100 card-round scard">
                            <div class="card-body d-flex flex-column">
                                <div class="row">
                                    <!-- <div class="col"><img height="96" src="/assets/img/features/folder.png" alt=""></div> -->
                                </div>
                                <div class="row mt-2">
                                    <div class="col-sm-12"><b class="" style="color: var(--color-primary);">Mes dossiers </b>
                                    <p class="py-3 mb-2">Sauvegardez vos documents, images et vidéos ici</p>
                                    <ul class="ba p-0">
                                        <li>
    
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mt-auto text-center">
                               <router-link class="btnLogin" to="/dossiers">Ajouter</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 md:w-100 col-lg-4 d-flex mb-4">
                    <div class="card w-100 card-round scard">
                        <div class="card-body d-flex flex-column">
                            <div class="row">
                                <!-- <div class="col"><img height="96" src="/assets/img/features/visa.png" alt=""></div> -->
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-12"><b class="" style="color: var(--color-primary);">Mes Opportunités</b>
                                    <p class="py-3 mb-3">Soyez informé en temps réel du traitement de vos demandes de
                                        visa et accédez à toute votre historique</p>
                                   
                                </div>
                            </div>
                            <div class="mt-auto text-center">
                                <router-link class="btnLogin" to="#">Tout voir</router-link>
                              
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div></template>

<script>
export default {
    name: 'DNPMECLEspace',
    computed: {
   
    loggedInUser() {
      return this.$store.getters['user/loggedInUser'];
    },
  },

    data() {
        return {

        };
    },

    mounted() {
        console.log("dataespace", this.loggedInUser);

    },

    methods: {

    },
};
</script>

<style lang="css" scoped>.page-header {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #266486;
    padding-bottom: 50px;
    padding-top: 100px;
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
    font-size: 3rem;
    font-weight: 700;
    padding-top: 1rem;
    margin-bottom: 1rem;
    text-transform: inherit;
}
.page-header p {
    max-width: 530px;
    font-size: 1.375rem;
    font-weight: 500;
    color: #fff;
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
@media (max-width: 991px){
    section {
    padding: 50px !important;
}
}



</style>