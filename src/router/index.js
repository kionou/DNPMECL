import { createRouter, createWebHistory } from 'vue-router'
import LayoutPublic from '../views/Public/Layout.vue'
import Accueil from '../views/Public/Accueil.vue'
import Liste from '../views/Public/Liste_PME.vue'
import Statistique from '../views/Public/Statistique.vue'
import Documents from '../views/Public/Documentation.vue'
import Offre from '../views/Public/Opportunite/offre.vue'
import Emploi from '../views/Public/Opportunite/emploi.vue'


import Connexion from '../views/Connexion.vue'


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


      ]
    },
    {
       path: '/connexion',
      name: 'connexion',
      component: Connexion,
    
    
    }
  ]
})

export default router
