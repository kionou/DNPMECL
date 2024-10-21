<template>
  <div>
    <!-- ======= Header ======= -->
  
  
    <section id="topbar" class="topbar ">
      <div class=" topbar1 ">
        <div class="">
          <img src="@/assets/img/logo/logopme.png" alt="">
        </div>
        <div class="col-lg-6 header-right">

          <ul class="top-info-box">

            <li>

              <div class="info-box" >

                <div class="info-box-content">

                    <p class="info-box-title">Téléphone</p>

                    <p class="info-box-subtitle">+(224) 622 95 96 72 </p>

                </div>

              </div>

            </li>

            <li>

              <div class="info-box">

                <div class="info-box-content">

                    <p class="info-box-title">Email</p>

                    <!-- <p class="info-box-subtitle">infodnpmecl@gmail.com </p> -->
                    <p class="info-box-subtitle">dnpmecl@mcipme.gov.gn </p>

                </div>

              </div>

            </li>

            <li class="last">

              <div class="info-box last">

                <div class="info-box-content">

                    <p class="info-box-title">Horaires</p>

                    <p class="info-box-subtitle">08h00 - 17h00</p>

                </div>

              </div>

            </li>
          </ul><!-- Ul end -->

      </div>
        <div class="top-right1">
          <!-- <img src="@/assets/img/ninba1.png" alt="" style="max-height: 70px;"> -->
          <img src="@/assets/img/logo/logo.png" alt="" style="max-height: 115px;">

         
        </div>
      
      </div>
    </section>
   
         <header  id="header" class=" header">
        <div class="container-fluid d-flex align-items-center justify-content-around m-0 w-100">
        <router-link to="/" class="logo ">
          
          <h1>SIGEG – MPME</h1>
          <span>SYSTEME INFORMATISE DE GESTION</span> 
          <span>DES ENTREPRISES DE GUINEE - MPME </span>
        </router-link>
        <nav id="navbar" class="navbar">
          <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li class="dropdown">
        <router-link to="#">DNPME-CL <i class="bi bi-chevron-down dropdown-indicator"></i></router-link>
        <ul  class="dropdown-menu">
              <li><router-link to="/dnpme/apropos">A PROPOS</router-link></li>
              <li><router-link to="/dnpme/mot-de-la-dn">MOT DE LA DN</router-link></li>
              <li><router-link to="/dnpme/mot-de-la-ministre">MOT DE LA MINISTRE</router-link></li>
              <li><router-link  class="text-uppercase" to="/dnpme/Reformes-textes-de-lois">Réformes et textes de lois</router-link></li>
              <li><router-link to="/dnpme/phototheque">PHOTOTHEQUE</router-link></li>
              <li><router-link to="/dnpme/formalisation">FORMALISATION</router-link></li>
              <li><router-link to="/dnpme/accompagnement">ACCOMPAGNEMENT</router-link></li>
              <li><router-link to="/dnpme/outils-acquis">OUTILS & ACQUIS </router-link></li>
              <li><router-link to="/dnpme/equipe-direction">EQUIPE-DIRECTION</router-link></li>


            </ul>
           </li>
            <li><router-link to="/actualites">Actualités</router-link></li>
            <!-- <li><router-link to="/statistique">Statistiques</router-link></li> -->
            <li class="dropdown">
            <router-link to="#">Partenaires <i class="bi bi-chevron-down dropdown-indicator"></i></router-link>
            <ul  class="dropdown-menu">
              <li><router-link to="/partenaires">Partenaires</router-link></li>
              <li><router-link to="/partenaires/demande">Demande de Partenariat</router-link></li>
              <li><router-link to="/partenaires/info-mpme">Demande de liste MPME</router-link></li>
            </ul>
           </li>
            <li ><router-link to="/opportunites">Opportunités </router-link> </li>
            <li ><router-link to="/contact">Contact </router-link> </li>

          </ul>
        </nav>
      <div class="second">
        <!-- v-if="shouldShowNavbar" -->
  
        <div v-if="shouldShowNavbar" >
          <div class="btnCt "  role="button" data-bs-toggle="dropdown" aria-expanded="false" >
        <i class="bi bi-person-fill"></i>
          <span> Mon compte </span>
          
       </div>
                <ul class="dropdown-menu menu"  >
             <li><router-link to="/mon-espace"  class="dropdown-item d-flex justify-content-around" ><i class="bi bi-postcard pt-0"></i>Mon espace</router-link></li>
             <li><router-link to="/profil"  class="dropdown-item d-flex justify-content-around" ><i class="bi bi-building"></i>Mon profil</router-link></li>            
             <li><span class="dropdown-item d-flex justify-content-around " style="cursor:pointer;" @click="logout" ><i class="bi bi-box-arrow-in-right pt-0"></i>Déconnexion</span></li>
             
           </ul>
               </div>
        <router-link to="/connexion-mpme" class="btnCt" v-else>
          <i class=" bi bi-person-fill-lock"></i>
          <span> Connexion </span>
        </router-link>
      </div>
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list">
          <span>Menu</span>
        </i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

      </div>
    </header>
    <!-- End Top Bar -->
   
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  name: 'MpmeNavbar',

  //     computed: {
  //   ...mapGetters('user', ['isLoggedIn']),
  //   shouldShowNavbar() {
  //     return this.isLoggedIn && this.$route.path !== '/login_user_mpme' && this.$route.path !== '/login_user_mpme/verification';
  //   },
  //   loggedInUser() {
  //     return this.$store.getters['user/loggedInUser'];
  //   },
  // },
  
  computed: {
    ...mapGetters('user', ['isLoggedIn']),
   shouldShowNavbar() {
    this.$store.dispatch('user/loadLoggedInUser')
    
      return (
        this.isLoggedIn &&
        this.$route.path !== '/connexion-mpme' &&
        this.$route.path !== '/connexion-mpme/verification'
      );
    },
    loggedInUser() {
      return this.$store.getters['user/loggedInUser'];
    },
  },
  
  watch: {
    isLoggedIn(newValue) {
      console.log('User is logged in:', newValue);
    },
  },

  data() {
    return {

    };
  },
 

  mounted() {
//  console.log("navbarrrr",this.loggedInUser);

    document.querySelectorAll('.dropdown-toggle').forEach(item => {
  item.addEventListener('click', event => {
 
    if(event.target.classList.contains('dropdown-toggle') ){
      event.target.classList.toggle('toggle-change');
    }
    else if(event.target.parentElement.classList.contains('dropdown-toggle')){
      event.target.parentElement.classList.toggle('toggle-change');
    }
  })
});



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

    document.querySelectorAll('#navbar a').forEach(navbarlink => {

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
  
    async logout() {
    try {      
        // const response = await axios.post('/auth-user-logout' ,{}, {
        //             headers: {
        //                     Authorization: `Bearer ${this.loggedInUser.token}`,
        //                    'Content-Type': 'application/json',
        //             },
        //         });
                // if (response.status === "success") {
                  
                        await this.$store.dispatch('user/clearLoggedInUser'); // Appel de l'action pour déconnecter l'utilisateur
                       this.$router.push('/connexion-mpme'); // Redirection vers la page de connexion
                // }

    } catch (error) {
     
    }
  }
  },
};
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');

.dropdown-toggle::after{
  display:none;

}

.btnCt{
    /* padding: 12px 0 0 0; */
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

  width: 104px;
  height: 59px;
 
}
}
@media (max-width: 1280px) {
  .second{
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 14px;
}

.header .logo{

  width: 330px;
}
.btnCt{
  
  /* color:  rgba(255, 255, 255, 0.6) ; */
  font-style: italic;

  }
  .btnCt i{
padding-top: 10px;
  
  
  }

}

.header-right {
  float: right;
  width: 436px;

}

ul.top-info-box {
  list-style: none;
  margin: 0;
  padding: 0;
  float: right;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

ul.top-info-box li {
  position: relative;
  float: left;
  margin-left: 0;
  border-right: 1px solid #dedede;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  padding: 5px 10px;

}

ul.top-info-box li .info-box .info-box-content {
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  flex-direction: column;
}

ul.top-info-box li .info-box .info-box-title {
  font-size: 11px;
  margin-bottom: 8px;
  line-height: normal;
}

ul.top-info-box li .info-box .info-box-subtitle {
  margin: 0;
  line-height: normal;
  font-size: 12px;
  font-weight: 700;
  color: #111;
}


@media (max-width: 1100px) {
  .header-right {
  
    width: 320px;

  }
  ul.top-info-box {
   flex-direction: column;
  }

  ul.top-info-box li {
    border-bottom: 1px solid #dedede;
    border-right:none ;
    width: 100%;
    text-align: center;
}

}

@media (max-width: 800px) {

  ul.top-info-box li .info-box .info-box-title {
    font-size: 11px;
  
  }
  
  ul.top-info-box li .info-box .info-box-subtitle {
 
    font-size: 12px;
  
  }
}

@media (max-width: 600px) {

  .header-right {
  
    width: auto;

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