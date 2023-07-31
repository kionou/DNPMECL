<template>
    <div>
      <label for="year-select">Sélectionnez une année :</label>
      <select v-model="selectedYear" id="year-select">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        years: [],
        selectedYear: null,
      };
    },
    mounted() {
      // Récupérez l'année en cours
      const currentYear = new Date().getFullYear();
      
      // Générez la liste des années de 1960 à l'année en cours
      for (let year = 1960; year <= currentYear; year++) {
        this.years.push(year);
      }
      
      // Définissez l'année actuelle comme valeur par défaut du champ de sélection
      this.selectedYear = currentYear;
    },
  };
  </script>