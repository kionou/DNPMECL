<template>
    <div>
      <!-- <div class="container" style="font-size: 16px;">
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
            <strong style="visibility: hidden;">Email:</strong>: dnpmecl@mcipme.gov.gn<br>
          </p>

        </div>

      </div>
    </div> -->

    <footer id="footer" class="footer bg-overlay">
<div class="footer-main">
<div class="container">
<div class="row justify-content-between">
<div class="col-lg-4 col-md-6 footer-widget footer-about pb-5">
<h3 class="widget-title">DNPME-CL</h3>
<p style="text-align: justify;">La Direction Nationale des Petites et Moyennes Entreprises et du Contenu Local sous tutelle du Ministère du Commerce, de l’Industrie et des PME a pour objectif d’accompagner et de promouvoir les activités des Micros, Petites et Moyennes Entreprises et de vulgariser la loi portant Contenu Local en République de Guinée.</p>
<div class="footer-social">
  <div class="social-links d-flex mt-4 justify-content-center">
           
           <a href="https://www.facebook.com/dnpme" class="facebook"><i class="bi bi-facebook"></i></a>
           <a href="#" class="youtube"><i class="bi bi-youtube"></i></a>
           <a href="https://www.instagram.com/dnpmecl/" class="instagram"><i class="bi bi-instagram"></i></a>
         </div>
</div>
</div>
<div class="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0 pb-5">
<h3 class="widget-title">Contacts</h3>
<div class="working-hours">
Pour tout besoin d'assistance, vous pouvez nous contacter,
par email ou par téléphone via les coordonnées ci-après :
<br> <i class="bi bi-alarm"></i> : Lundi - Vendredi : <span class="text-left">08:00 - 17:00 </span>
<br> <i class="bi bi-telephone"></i> : <span class="text-left">+224 622 33 63 43</span>
<br> <i class="bi bi-envelope"></i> : <span class="text-left">infodnpmecl@gmail.com</span>
<br> <i class="bi bi-envelope"></i> : <span class="text-left">dnpmecl@mcipme.gov.gn</span>
<br>  <i class="bi bi-geo-alt"></i> : <span class="text-left">DNPME-CL, Petit Simbaya, Commune de Ratoma <br>        à 300m de l'Hôpital Flamboyant </span>
</div>
</div>
<div class="col-lg-4 col-md-12  mt -md-5 footer-widget  trois ">
<h3 class="widget-title">Liens utiles</h3>
<ul class="list-arrow">
  <li><router-link to="/">ACCUEIL</router-link></li>
  <li ><router-link to="/dnpme/apropos">DNPME-CL </router-link> </li>
  <li><router-link to="/actualites">ACTUALITES</router-link></li>
  <li><router-link to="/partenaires">PARTENAIRES</router-link></li>
  <li ><router-link to="/opportunites">OPPORTUNITES </router-link> </li>
</ul>
</div>
</div>
</div>
</div>

</footer>

    <div class=" mt-4 py-3" style="background-color: #0f7a50;" >
      <div class="copyright">
        &copy; Copyright  <strong> <span> SIGEG – MPME</span></strong>. Tous droits réservés
      </div>
      <div class="credits">
        Conçu et développé par <a href="https://cosit-mali.com/">COSIT</a>
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


.bg-overlay .container {
    position: relative;
    z-index: 1;
}

.footer-social {
    margin-top: 15px;
}


.footer-social ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: -13px;
}

.footer-social ul li {
    display: inline-block;
}

.footer-widget ul.list-arrow li {
    border-bottom: 1px solid #eceef1;
    padding: 8px 0;
}



.footer-widget ul.list-arrow li a, .footer-widget ul.list-arrow li:before {
    color: #fff;
}

.footer .widget-title {
    font-size: 16px;
    font-weight: 700;
    position: relative;
    margin: 0 0 30px;
    padding-left: 15px;
    text-transform: uppercase;
    color: #fff;
    /* border-left: 3px solid #ffe600; */
}

@media screen and (max-width: 768px) {

  .trois{

    display: none;
  }
}

</style>