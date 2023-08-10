import { createRouter, createWebHistory } from 'vue-router'
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
import Test from '../views/Public/test2.vue'




// import Test from '../views/test.vue'






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
         { path: '/opportunites/appel_offre', name: 'appel_offre', component: Offre},
         { path: '/opportunites/appel_emploi', name: 'appel_emploi', component: Emploi},
         { path: '/connexion', name: 'connexion', component: Connexion },
         { path: '/formulaire', name: 'Formulaire', component: Formulaire },
         { path: '/sign_user_mpme', name: 'Singmpme', component: Singmpme },
         { path: '/login_user_mpme', name: 'Loginmpme', component: Loginmpme },

         { path: '/liste_pme/mpme/:id', name: 'detail_pme', component: Detail, props:true},
         { path: '/login_user_mpme/verification', name: 'Verification', component: Verification},
         { path: '/test', name: 'Test', component: Test, }
         




      ]
    },
  ]
})

export default router
