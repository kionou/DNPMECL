export default {
 
  SET_ALLMPME(state, data) {
    state.mpmeAll = data;
  },
  SET_REGION_OPTIONS(state, options) {
    state.regionOptions = options;
  },
  SET_COUNTRY_OPTIONS: (state, options) => {
    state.countryOptions = options;
  },
  SET_PREFECTURE_OPTIONS: (state, options) => {
    state.prefectureOptions = options;
  },
  SET_SOUS_PREFECTURE_OPTIONS: (state, options) => {
    state.SousprefectureOptions = options;
  },
  SET_QUARTIER_OPTIONS: (state, options) => {
    state.QuartierOptions = options;
  },
  SET_SECTEUR_ACTIVITE_OPTIONS(state, options) {
    state.secteurActiviteOptions = options;
  },
  SET_SOUS_SECTEUR_OPTIONS(state, options) {
    state.sousSecteurOptions = options;
  },
  SET_STATUT_JURIDIQUE_OPTIONS(state, options) {
    state.statutJuridiqueOptions = options;
  },
  SET_BOURSE_OPTIONS(state, options) {
    state.bourseOptions = options;
  },
  

}