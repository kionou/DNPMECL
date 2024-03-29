import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'
import LayoutPublic from '../views/Public/Layout.vue'
import Page404 from '../views/Public/page404.vue';

import Accueil from '../views/Public/Accueil.vue'
import Apropos from '../views/Public/DNPME-CL/apropos.vue'
import Mot from '../views/Public/DNPME-CL/mot.vue'
import Ministre from '../views/Public/DNPME-CL/ministre.vue'
import Documents from '../views/Public/Documentation.vue'
import Phototheque from '../views/Public/DNPME-CL/phototheque.vue'
import PhotothequeDetail from '../views/Public/DNPME-CL/detailPhoto.vue'
import Accompagnenment from '../views/Public/DNPME-CL/accompagnement.vue'
import AccompagnenmentDetail from '../views/Public/DNPME-CL/detailAccompagnement.vue'
import Outils from '../views/Public/DNPME-CL/outils.vue'
import Equipe from '../views/Public/DNPME-CL/equipe.vue'


import Liste from '../views/Public/Liste_PME.vue'
import Statistique from '../views/Public/Statistique.vue'
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
import ActuliteDetail from '../views/Public/ActualiteDetail.vue'
import Aide from '../views/Public/DemandeAide.vue'
import Contact from '../views/Public/Contact.vue'

import Partenaire from '../views/Public/Partenaire/partenaire.vue'
import DetailPartenaire from '../views/Public/Partenaire/detailPartenaire.vue'
import DemandePartenanriat from '../views/Public/Partenaire/demandePartenanriat.vue'
import InfoMpme from '../views/Public/Partenaire/infoMpme.vue'


//  import Test from '../views/Public/test2.vue'
import Test from '../views/test4.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: LayoutPublic,
      children:[
         { path: '/', name: 'accueil', component: Accueil},
         
         { path: '/dnpme/apropos', name: 'Apropos', component: Apropos},
         { path: '/dnpme/mot-de-la-dn', name: 'Mot', component: Mot},
         { path: '/dnpme/mot-de-la-ministre', name: 'Ministre', component: Ministre},
         { path: '/dnpme/Reformes-textes-de-lois', name: 'documents', component: Documents},
         { path: '/dnpme/phototheque', name: 'Photothèque', component: Phototheque},
         { path: '/dnpme/phototheque/:id', name: 'PhotothequeDetail', component: PhotothequeDetail , props:true},
         { path: '/dnpme/formalisation', name: 'Formalisation', component: Formalisation},
         { path: '/dnpme/accompagnement', name: 'Accompagnenment', component: Accompagnenment},
         { path: '/dnpme/accompagnement/:id', name: 'AccompagnenmentDetail', component: AccompagnenmentDetail  , props:true},
         { path: '/dnpme/outils-acquis', name: 'Outils', component: Outils},
         { path: '/dnpme/equipe-direction', name: 'Equipe', component: Equipe},


         { path: '/actualites', name: 'Actulite', component: Actulite},
         { path: '/actualites/:id', name: 'ActuliteDetail', component: ActuliteDetail , props:true },
         { path: '/statistique', name: 'statistique', component: Statistique},
         { path: '/contact', name: 'Contact', component: Contact},

         { path: '/partenaires', name: 'Partenaire', component: Partenaire},
         { path: '/partenaires/:id', name: 'DetailPartenaire', component: DetailPartenaire  ,  props:true},
         { path: '/partenaires/demande', name: 'DemandePartenanriat', component: DemandePartenanriat},
         { path: '/partenaires/info-mpme', name: 'InfoMpme', component: InfoMpme},

         { path: '/opportunites', name: 'appel_emploi', component: Emploi},
         { path: '/opportunites/:id', name: 'DetailOpportunite', component: DetailOpportunite , props:true  },


         { path: '/inscription-mpme', name: 'Singmpme', component: Singmpme  , },
         { path: '/connexion-mpme', name: 'Loginmpme', component: Loginmpme , },
         { path: '/connexion-mpme/verification', name: 'Verification', component: Verification  ,  },
         { path: '/reinitialiser', name: 'connexion', component: Connexion ,props: true, },
         { path: '/:pathMatch(.*)', name: 'NotFound', component: Page404 },
        

         { path: '/liste_pme', name: 'liste_pme', component: Liste},
         { path: '/liste_pme/mpme/:id', name: 'detail_pme', component: Detail, props:true},



         { path: '/formulaire', name: 'Formulaire', component: Formulaire  , },
         { path: '/mon-espace', name: 'Espace', component: Espace ,  meta: { requiresAuth: true } },
         { path: '/dossiers', name: 'Dossiers', component: Dossiers  ,  meta: { requiresAuth: true } },
         { path: '/profil', name: 'Profil', component: Profil , meta: { requiresAuth: true }   },
         { path: '/appel_offre', name: 'appel_offre', component: Offre , meta: { requiresAuth: true }},
         { path: '/offre/:id', name: 'DetailOffre', component: DetailOffre ,  meta: { requiresAuth: true },  props:true  },
         { path: '/demande-aide', name: 'Aide', component: Aide ,  meta: { requiresAuth: true }},



         
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
    next('/connexion-mpme');
  } else if ((to.name === 'Singmpme' || to.name === 'Loginmpme') && isLoggedIn) {
    // Si l'utilisateur est connecté et essaie d'accéder aux pages d'inscription ou de connexion,
    // redirigez-le vers la page mon_espace
    next('/mon-espace');
  }
  else {
    next();
  }
});

export default router
