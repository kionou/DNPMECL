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

// import Test from '../views/Public/test2.vue'




import Test from '../views/test.vue'






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: LayoutPublic,
      children:[
         { path: '/', name: 'accueil', component: Accueil},
         { path: '/liste_pme', name: 'liste_pme', component: Liste},
         { path: '/statistique', name: 'statistique', component: Statistique},
         { path: '/documents', name: 'documents', component: Documents},
         { path: '/appel_offre', name: 'appel_offre', component: Offre},
         { path: '/opportunites/appel_emploi', name: 'appel_emploi', component: Emploi},
         { path: '/connexion', name: 'connexion', component: Connexion },
         { path: '/formulaire', name: 'Formulaire', component: Formulaire  ,   meta: { requiresAuth: true }, },
         { path: '/sign_user_mpme', name: 'Singmpme', component: Singmpme  , beforeEnter: requireNotLoggedIn},
         { path: '/login_user_mpme', name: 'Loginmpme', component: Loginmpme , props:true  , beforeEnter: requireNotLoggedIn},

         { path: '/liste_pme/mpme/:id', name: 'detail_pme', component: Detail, props:true},
         { path: '/login_user_mpme/verification', name: 'Verification', component: Verification , props:true  ,  meta: { requiresAuth: true }, },
         { path: '/mon_espace', name: 'Espace', component: Espace ,  meta: { requiresAuth: true }, },
         { path: '/dossiers', name: 'Dossiers', component: Dossiers },
         { path: '/test', name: 'Test', component: Test, }
         




      ]
    },
  ]
})
function requireNotLoggedIn(to, from, next) {
  const isLoggedIn = store.getters['user/isLoggedIn'];
  if (isLoggedIn) {
    next('/mon_espace'); // Rediriger vers la page d'accueil si l'utilisateur est déjà connecté
  } else {
    next();
  }
}

function requireLoggedIn(to, from, next, redirectToHome = false) {
  const isLoggedIn = store.getters['user/isLoggedIn'];
  if (isLoggedIn) {
    if (redirectToHome) {
      next(); // Rediriger vers la page d'accueil si l'utilisateur est déjà connecté
    } else {
      next();
    }
  } else {
    next('/login_user_mpme');
  }
}

router.beforeEach( async (to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  if (requiresAuth) {
    await store.dispatch('user/loadLoggedInUser');
    requireLoggedIn(to, from, next);
  } else {
    next();
  }
})

export default router
