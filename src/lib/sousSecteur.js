//  import store from "@/store";
//  export function  obtenirValeursPourCles  ( sousSecteurs)  {
  
//     try {
//          store.dispatch('fetchSousSecteurOptions'); // Remplacez par l'action de votre store
//          store.getters['getSousSecteurOptions'].map(option => {
//            console.log('option',option);
//     console.log('sousSecteurs',sousSecteurs);

//           if (option.value === sousSecteurs) {
//             return option.label, 
//           }
//         });
//       } catch (error) {
//         console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error.message);
//       }
//   }


import store from "@/store";

export function obtenirValeursPourCles(sousSecteurs) {
    console.log('sousSecteurs',sousSecteurs)
  try {
    store.dispatch('fetchSousSecteurOptions'); // Remplacez par l'action de votre store
    const options = store.getters['getSousSecteurOptions'];
    console.log('options',options)

    const option = options.find((opt) => opt.value === sousSecteurs);
    console.log('option',option)

      return option ? option.label : sousSecteurs; 
  
  } catch (error) {
    console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error.message);
    // Gérez l'erreur ici, renvoyez une valeur par défaut ou null si nécessaire
    return null;
  }
}

  
 
