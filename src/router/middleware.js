// router/middleware.js
import store from "../store";
import { useRouter } from 'vue-router';

export default function ({  redirect }) {
    const router = useRouter();
    const isLoggedIn = store.getters['user/isLoggedIn'];
    const requiresAuth = router.currentRoute.meta.requiresAuth;
  
    if (requiresAuth && !isLoggedIn) {
      redirect('/inscription-mpme'); // Redirigez vers la page de connexion si nécessaire
    }
  }
  