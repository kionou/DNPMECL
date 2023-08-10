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
            <li class="dropdown">
              <router-link to="#">Opportunités <i class="bi bi-chevron-down dropdown-indicator"></i></router-link>
              <ul  class="dropdown-menu">
                <li><router-link to="/opportunites/appel_offre">Appel Offre</router-link></li>
                <li><router-link to="/opportunites/appel_emploi">Appel Emploi</router-link></li>
                <li><router-link to="/formulaire">Formulaire</router-link></li>

              </ul>
            </li>

          </ul>
        </nav>
      <div class="second">
        <router-link to="/connexion" class="btnCt">
          <i class="  bi bi-person-fill-lock"></i>
          <span> Connexion </span>
        </router-link>
        <!-- <router-link to="#" class="btnCt">
          <i class="bi bi-telephone-fill"></i>
          <span> Contact </span>
        </router-link> -->
      </div>
     


        <i class="mobile-nav-toggle mobile-nav-show bi bi-list">
          <span>Menu</span>
        </i>
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
      el.addEventListener('click', function (event) {
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
    // document.querySelectorAll('#navbar a').forEach(navbarlink => {
    //   navbarlink.addEventListener('click', (e) => {
    //     console.log('rrrrzzzzzz', navbarlink);
    //     if (document.querySelector('.mobile-nav-active')) {
    //       if (!navbarlink.hash) return;
    //       let section = document.querySelector(navbarlink.hash);
    //       console.log('section', section);
    //       if (!section) return;
    //       console.log('bonjour', e.target);
    //       mobileNavToogle();

    //     }
    //   });
    // });


    document.querySelectorAll('#navbar a').forEach(navbarlink => {
  // if (!navbarlink.hash) return;
  // let section = document.querySelector(navbarlink.hash);
  // if (!section) return;

  navbarlink.addEventListener('click', (e) => {
    e.preventDefault();

    if (navbarlink.nextElementSibling && navbarlink.nextElementSibling.tagName === 'UL') {
      navbarlink.nextElementSibling.classList.toggle('dropdown-active');
      navbarlink.classList.toggle('active');
      const dropdownIndicator = navbarlink.querySelector('.dropdown-indicator');
      dropdownIndicator.classList.toggle('bi-chevron-up');
      dropdownIndicator.classList.toggle('bi-chevron-down');
    } else {
      if (document.querySelector('.mobile-nav-active')) {
        document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
      }
    }
  });
});

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {
 

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);



  /**


    /**
     * Toggle mobile nav dropdowns
     */
    // const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

    // navDropdowns.forEach(el => {
    //   el.addEventListener('click', function (event) {
    //     if (document.querySelector('.mobile-nav-active')) {
    //       event.preventDefault();
    //       this.classList.toggle('active');
    //       this.nextElementSibling.classList.toggle('dropdown-active');

    //       let dropDownIndicator = this.querySelector('.dropdown-indicator');
    //       dropDownIndicator.classList.toggle('bi-chevron-up');
    //       dropDownIndicator.classList.toggle('bi-chevron-down');
    //     }
    //   })
    // });



      /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('sticked');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        selectHeader.classList.remove('sticked');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }
    }
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }

  /**
   * Navbar links active state on scroll
   */




  

  },

  methods: {

  },
};
</script>

<style lang="css" scoped>


.btnCt{
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.btnCt i{
font-size: 15px;
}
.btnCt:hover{
color: #fff;
}
.btnLogin {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  background-color: #F9D310;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
}
i span{
font-size: 12px;

}
@media (min-width: 1280px) {

  .second{
  /* border: 1px solid red; */
  width: 0;
 
}
}
@media (max-width: 1280px) {
  .second{
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.btnCt{
  
  /* color:  rgba(255, 255, 255, 0.6) ; */
  font-style: italic;

  }
  .btnCt i{
padding-top: 10px;
  
  
  }

}

/* .btnLogin:hover {
  background-color: #fff;
  border: 1px solid #F9D310;

}

.btnLogin {
  background: transparent;
  position: relative;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid rgb(40, 144, 241);
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: rgb(40, 144, 241);
  transition: color 0.3s 0.1s ease-out;
  text-align: center;
}

.btnLogin span {
  margin: 10px;
}

.btnLogin::before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  content: '';
  border-radius: 50%;
  display: block;
  width: 20em;
  height: 20em;
  left: -5em;
  text-align: center;
  transition: box-shadow 0.5s ease-out;
  z-index: -1;
}

.btnLogin:hover {
  color: #fff;
  border: 1px solid rgb(40, 144, 241);
}

.btnLogin:hover::before {
  box-shadow: inset 0 0 0 10em rgb(40, 144, 241);
} */
 
</style>