import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import LayoutPublic from '../views/Public/Layout.vue'
import Accueil from '../views/Public/Accueil.vue'
import Liste from '../views/Public/Liste_PME.vue'
import Statistique from '../views/Public/Statistique.vue'
import Documents from '../views/Public/Documentation.vue'
import Offre from '../views/Public/Opportunite/offre.vue'
import Emploi from '../views/Public/Opportunite/emploi.vue'
import Connexion from '../views/Public/Connexion.vue'
import Detail from '../views/Public/Detail.vue'
import Formulaire from '../views/Public/formulaire.vue'
import Singmpme from '../views/Public/SignUserMpme.vue'
import Loginmpme from '../views/Public/login_user_mpme.vue'
import Verification from '../views/Public/Verification_code.vue'
import Espace from '../views/Public/espace.vue'
import Dossiers from '../views/Public/dossiers.vue'
import Profil from '../views/Public/Profil.vue'
import DetailOffre from '../views/Public/Opportunite/DetailOffre.vue'
import DetailOpportunite from '../views/Public/Opportunite/DetailOpportunite.vue'
import Formalisation from '../views/Public/Formalisation.vue'
import Actulite from '../views/Public/Actualite.vue'
import Partenaire from '../views/Public/Partenaire/partenaire.vue'






 import Test from '../views/test4.vue'




// import Test from '../views/test3.vue'






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: LayoutPublic,
      children:[
         { path: '/', name: 'accueil', component: Accueil},

         { path: '/actualites', name: 'Actulite', component: Actulite},
         { path: '/statistique', name: 'statistique', component: Statistique},
         { path: '/formalisation', name: 'Formalisation', component: Formalisation},
         { path: '/documents', name: 'documents', component: Documents},
         { path: '/partenaires', name: 'Partenaire', component: Partenaire},
         { path: '/opportunites', name: 'appel_emploi', component: Emploi},

         { path: '/sign_user_mpme', name: 'Singmpme', component: Singmpme  , },
         { path: '/login_user_mpme', name: 'Loginmpme', component: Loginmpme , },
         { path: '/opportunites/:id', name: 'DetailOpportunite', component: DetailOpportunite , props:true  },
         { path: '/login_user_mpme/verification', name: 'Verification', component: Verification  ,  },
         { path: '/reinitialiser', name: 'connexion', component: Connexion , },
        

         { path: '/liste_pme', name: 'liste_pme', component: Liste},
         { path: '/liste_pme/mpme/:id', name: 'detail_pme', component: Detail, props:true},



         { path: '/formulaire', name: 'Formulaire', component: Formulaire  ,   meta: { requiresAuth: true } },
         { path: '/mon_espace', name: 'Espace', component: Espace ,  meta: { requiresAuth: true } },
         { path: '/dossiers', name: 'Dossiers', component: Dossiers  ,  meta: { requiresAuth: true } },
         { path: '/profil', name: 'Profil', component: Profil , meta: { requiresAuth: true }   },
         { path: '/appel_offre', name: 'appel_offre', component: Offre , meta: { requiresAuth: true }},
         { path: '/offre/:id', name: 'DetailOffre', component: DetailOffre ,   props:true  },


         
         { path: '/test', name: 'Test', component: Test, }
         

      ]
    },
  ]
})
// function requireNotLoggedIn(to, from, next) {
//   const isLoggedIn = store.getters['user/isLoggedIn'];
//   if (isLoggedIn) {
//     next('/mon_espace'); // Rediriger vers la page d'accueil si l'utilisateur est déjà connecté
//   } else {
//     next();
//   }
// }

// function requireLoggedIn(to, from, next, redirectToHome = false) {
//   const isLoggedIn = store.getters['user/isLoggedIn'];
//   if (isLoggedIn) {
//     if (redirectToHome) {
//       next(); // Rediriger vers la page d'accueil si l'utilisateur est déjà connecté
//     } else {
//       next();
//     }
//   } else {
//     next('/login_user_mpme');
//   }
// }

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const isLoggedIn = store.getters['user/isLoggedIn'];
console.log('isLoggedIn',isLoggedIn);
  if (requiresAuth && !isLoggedIn) {
    // Si la route nécessite une authentification et l'utilisateur n'est pas connecté,
    // redirigez-le vers la page de connexion
    next('/login_user_mpme');
  } else if ((to.name === 'Singmpme' || to.name === 'Loginmpme') && isLoggedIn) {
    // Si l'utilisateur est connecté et essaie d'accéder aux pages d'inscription ou de connexion,
    // redirigez-le vers la page mon_espace
    next('/mon_espace');
  }
  else {
    next();
  }
});

export default router
