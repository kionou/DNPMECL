<template>
    <div>
      <div class="container" style="font-size: 16px;">
      <div class="row gy-4">
        <div class="col-lg-6 col-md-12 footer-info">
          <a href="index.html" class="logo d-flex align-items-center flex-column">
            <img src="@/assets/img/armoirie.png" alt="">
          <h1 class="my-4" style="color: white; font-size: 27px !important; ;">DNPME-CL</h1>
          <p style="color: white;">Direction Nationale des PME et du Contenu Local.</p>

          </a>
          <div class="social-links d-flex mt-4 justify-content-center">
           
            <a href="https://www.facebook.com/dnpme" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="youtube"><i class="bi bi-youtube"></i></a>
            <a href="https://www.instagram.com/dnpmecl/" class="instagram"><i class="bi bi-instagram"></i></a>
          </div>
        </div>

        <div class="col-lg-3 col-md-12 footer-links">
          <h4>Liens utiles</h4>
          <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li ><router-link to="#">DNPME-CL </router-link> </li>
            <li><router-link to="/actualites">Actualités</router-link></li>
            <li><router-link to="/statistique">Statistiques</router-link></li>
            <li><router-link to="/formalisation">Formalisation</router-link></li>
            <li><router-link to="/documents">Réglementation</router-link></li>
            <li><router-link to="/partenaires">Partenaires</router-link></li>
            <li ><router-link to="/opportunites">Opportunités </router-link> </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact</h4>
          <p>
            Petit Simbaya <br>
            Près de l'Hôpital Flamboyant,<br>
            Conakry, Guinée <br><br>
            <strong>Téléphone:</strong> +224 622 33 63 43<br>
            <strong>Email:</strong> infodnpmecl@gmail.com<br>
          </p>

        </div>

      </div>
    </div>

    <div class="container mt-4">
      <div class="copyright">
        &copy; Copyright <strong><span>DNPME-CL</span></strong>. Tous droits réservés
      </div>
      <div class="credits">
        Développé par <a href="https://cosit-mali.com/">COSIT</a>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'MpmeFooter',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>

</style>