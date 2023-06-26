<template>
    <div>
        <!-- ======= Header ======= -->
  <section id="topbar" class="topbar d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">

      </div>
    </div>
  </section>
  <!-- End Top Bar -->
  <header id="header" class="header d-flex align-items-center">

<div class="container-fluid container-xl d-flex align-items-center justify-content-between">
  <router-link to="/" class="logo d-flex align-items-center">
    <!-- Uncomment the line below if you also wish to use an image logo -->
    <img src="@/assets/img/armoirie.png" alt="">
    <h1>DNPMECL </h1>
  </router-link>
  <nav id="navbar" class="navbar">
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/liste_pme">Liste PME</router-link></li>
      <li><router-link to="/statistique">Statistiques</router-link></li>
      <li><router-link to="/documents">Documentation</router-link></li>
      <li class="dropdown"><router-link to="#">Opportunités <i class="bi bi-chevron-down dropdown-indicator"></i></router-link>
        <ul>
              <li><router-link to="/opportunites/appel_offre">Appel Offre</router-link></li>
              <li><router-link to="/opportunites/appel_emploi">Appel Emploi</router-link></li>
            </ul>
      </li>
    
    </ul>
  </nav>

  <router-link to="/connexion" class="btnLogin">Connexion</router-link>


  <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
  <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

</div>
</header>
    </div>
</template>

<script>
export default {
    name: 'MpmeNavbar',

    data() {
        return {
            
        };
    },

    mounted() {
        /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>

.btnLogin {
  padding: 1em 3em;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  background-color: #F9D310;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
}

.btnLogin:hover {
  background-color: #fff;
  border: 1px solid #F9D310 ;
 
}



</style>