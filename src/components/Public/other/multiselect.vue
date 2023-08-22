<template>
  <div>
    <v-select
      v-model="selectedSousSecteurs"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      multiple
      persistent-hint
    ></v-select>

   
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSousSecteurs: [], // Pour stocker les sous-secteurs sélectionnés
      SousSecteurActiviteOptions: [], // Pour stocker les options de secteurs d'activité obtenues de l'API
    };
  },
  methods: {
    async fetchSousSecteurActiviteOptions() {
      try {
        await this.$store.dispatch('fetchSousSecteurOptions'); // Remplacez par l'action de votre store
        this.SousSecteurActiviteOptions = this.$store.getters['getSousSecteurOptions'].map(option => {
          console.log('option',option);
          return option.label;
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des options des secteurs d\'activité:', error.message);
      }
    },
  },
  created() {
    this.fetchSousSecteurActiviteOptions(); // Appeler la méthode pour obtenir les options de l'API lors de la création du composant
  },
};
</script>

  