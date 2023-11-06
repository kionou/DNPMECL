import useVuelidate from '@vuelidate/core';
import { lgmin, lgmax } from '@/functions/rules';
import axios from '@/lib/axiosConfig.js';

export default (await import('vue')).defineComponent({
name: 'DNPMECLSignUserMpme',
components: {
MazPhoneNumberInput, Modal, MazDialog, Loading
},

data() {
return {
isOpen: true,
noentreprise: false,
yesentreprise: false,
yesentreprise1: false,
loading: false,
email: '',
phoneNumber: '',
password: '',
confirmer_password: '',
nom: '',
prenom: '',
pays: '',
region: '',
sous_secteur: '',
sous_prefecture: '',
error: '',

nif: '',
rccm: '',

regionOptions: [],
prefectureOptions: [],
sous_prefectureOptions: [],
sortedCountryOptions: [],
v$: useVuelidate(),
results: null,
revele: false,
passwordTouched: false,
selectedSousSecteurs: [], // Pour stocker les sous-secteurs sélectionnés
SousSecteurActiviteOptions: [],
identifiant: '',
};

},

validations: {
email: {
require,
},
phoneNumber: {
require,
},
password: {
require,
lgmin: lgmin(8),
lgmax: lgmax(20),
},
confirmer_password: {
require,
lgmin: lgmin(8),
lgmax: lgmax(20),
},
nom: {
require,
lgmin: lgmin(2),
lgmax: lgmax(20),
},
prenom: {
require,
lgmin: lgmin(2),
lgmax: lgmax(20),
},
pays: {
require,
},
region: {
require,
},
sous_prefecture: {
require,
},
selectedSousSecteurs: {
require,
},
},

async mounted() {
this.fetchCountryOptions();
this.fetchRegionOptions();
this.fetchPrefectureOptions(),
this.fetchSousPrefectureOptions();
},

methods: {
validatePasswordsMatch() {
return this.password === this.confirmer_password;
},
async fetchSousSecteurActiviteOptions() {
try {
await this.$store.dispatch('fetchSousSecteurOptions'); // Remplacez par l'action de votre store
this.SousSecteurActiviteOptions = this.$store.getters['getSousSecteurOptions'].map(option => {
// console.log('option',option);
return {
state: option.label,
abbr: option.value
};
});
} catch (error) {
console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error.message);
}
},

async submit() {

this.v$.$touch();
this.error = '';
if (this.v$.$errors.length == 0) {
this.loading = true;

if (this.identifiant === null) {
let DataMpme = {
Region: this.region,
Sousprefecture: this.sous_prefecture,
Nom: this.nom,
Prenoms: this.prenom,
NumeroWhatsApp: this.phoneNumber,
ListeSousSecteurActivite: JSON.parse(JSON.stringify(this.selectedSousSecteurs)),
PaysDirigeant: this.pays,
AdresseEmail: this.email,
password: this.password,
password_confirmation: this.confirmer_password,
};
console.log('eeedata', DataMpme);
// try {
//   const response = await axios.post('/register/mpme', DataMpme);
//   console.log('response.sousprefecture', response);
//   if (response.data.message.email) {
//     console.log('response', response.data.message.email);
//     this.loading = false
//     return this.error = "L'adresse e-mail existe déjà dans notre système. Veuillez vous connecter avec cette adresse."
//   } else {
//     this.loading = false
//     this.revele = !this.revele;
//     if (this.revele) {
//       document.body.classList.add('no-scroll');
//     } else {
//       document.body.classList.add('scroll');
//     }
//   }
} try { } catch (error) {
this.loading = false;

console.error('Erreur post:', error);
}
} else {
try {
let DataMpme = {
Nom: this.nom,
Prenoms: this.prenom,
NumeroWhatsApp: this.phoneNumber,
AdresseEmail: this.email,
password: this.password,
password_confirmation: this.confirmer_password,
Identifiant: this.identifiant || null
};
console.log('eeedata222', DataMpme);
const response = await axios.post('/register/system-user', DataMpme);
console.log('response.sousprefecture', response);
// if (response.data.message.email) {
//   console.log('response', response.data.message.email);
//   this.loading = false
//   return this.error = "L'adresse e-mail existe déjà dans notre système. Veuillez vous connecter avec cette adresse."
// } else {
//   this.loading = false
//   this.revele = !this.revele;
//   if (this.revele) {
//     document.body.classList.add('no-scroll');
//   } else {
//     document.body.classList.add('scroll');
//   }
// }
} catch (error) {
this.loading = false;

console.error('Erreur post:', error);
}
}

}, else: {
console, : .log('pas bon', this.v$.$errors),
this: .loading = false
}
},
async verifier() {

// this.v$.$touch()
this.error = '';
//  if (this.v$.$errors.length == 0 ) {
this.loading = true;

let DataMpme = {
nif: this.nif,
rccm: this.rccm,
};
console.log('eeedata', DataMpme);
try {
const response = await axios.get('/check-mpme/bd-mpme-exist', { params: DataMpme });
console.log('response.sousprefecture', response);
if (response.data.data.user_exist === true) {

this.isOpen = false;
this.loading = false;
this.yesentreprise = true;

} else if ((response.data.data.user_exist === false)) {
this.identifiant = response.data.data.CodeMpme;
console.log('azzerr', this.identifiant);
this.isOpen = false;
this.loading = false;
this.yesentreprise1 = true;
}




} catch (error) {
console.error('Erreur post:', error);
error.response.data;
this.loading = false;
this.isOpen = false;
this.loading = false;
this.noentreprise = true;

}
// }else{
//   console.log('pas bon' , this.v$.$errors );
// }
},

// toggleModale: function () {
//   this.revele = !this.revele;
//   if (this.revele) {
//     document.body.classList.add('no-scroll');
//   } else {
//     document.body.classList.remove('no-scroll');
//   }
// },
onPhoneNumberUpdate(updatedResult) {
this.results = updatedResult;
},
async fetchCountryOptions() {
try {
await this.$store.dispatch('fetchCountries');
const options = JSON.parse(JSON.stringify(this.$store.getters['getCountryOptions'])); // Accéder aux options des pays via le getter

// console.log('Options des pays:', options);
this.sortedCountryOptions = options; // Affecter les options à votre propriété sortedCountryOptions
} catch (error) {
console.error('Erreur lors de la récupération des options des pays :', error);
}
},
async fetchRegionOptions() {
try {
await this.$store.dispatch('fetchRegionOptions');
const options = JSON.parse(JSON.stringify(this.$store.getters['getRegionOptions'])); // Accéder aux options des pays via le getter
console.log('Options desregions:', options);
this.regionOptions = options;
// Affecter les options à votre propriété sortedCountryOptions
} catch (error) {
console.error('Erreur lors de la récupération des options des pays :', error);
}
},
async fetchPrefectureOptions() {
try {
await this.$store.dispatch('fetchPrefectureOptions');
const options = JSON.parse(JSON.stringify(this.$store.getters['getprefectureOptions'])); // Accéder aux options des pays via le getter
console.log('Options des Prefecture:', options);
// this.prefectureOptions = options; 
// Affecter les options à votre propriété sortedCountryOptions
} catch (error) {
console.error('Erreur lors de la récupération des options des prefecture :', error);
}
},


async fetchSousPrefectureOptions() {
try {
await this.$store.dispatch('fetchSous_PrefectureOptions');
const options = JSON.parse(JSON.stringify(this.$store.getters['getSousprefectureOptions'])); // Accéder aux options des pays via le getter
console.log('Options des sous Prefecture:', options);
this.sous_prefectureOptions = options; // Affecter les options à votre propriété sortedCountryOptions
} catch (error) {
console.error('Erreur lors de la récupération des options des sous prefecture :', error);
}
},
handleOptionClick(option) {

console.log('Option sélectionnée :', option.value);
this.prefectureOptions;
},
});
