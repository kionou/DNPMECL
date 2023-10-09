<template>
    <div>
      <canvas  height="600px" id="myChartss"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted  , onUnmounted} from "vue";
  import Chart from "chart.js/auto";
  import axios from "@/lib/axiosConfig.js"; // Importez Axios
  
  export default {
    setup() {
      const chart = ref(null);
     
  
      // Récupérez les données de votre API
      async function fetchDataActivite() {
        try {
            const response = await axios.get('/regions', {params: { with_relation: true}});
  
          if (response.data.status === 'success') {
            const secteurActiviteData = response.data.data.data;
            console.log(secteurActiviteData);
            const filteredData = secteurActiviteData.filter(item => item.region !== null);
  
            // Utilisez secteurActiviteData pour créer vos données de graphique ici
            const data = {
              labels: filteredData.map(item => item.region.NomRegion),
              datasets: [
                {
                  label: "Nombre d'entreprises",
                  data: filteredData.map(item => item.nbre),
                  backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
                  borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
                  borderWidth: 1,
                },
              ],
            };
  
            // Options du graphique
            const options = {
              responsive: true,
              scales: {
                y: {

                  beginAtZero: true,
                  //  min: 0, // Commence à 2000
                    max: 96000, // Incréments de 2000
                  ticks: {
          // forces step size to be 50 units
          stepSize: 1000
        }
                  //  stepSize: 2000, // Incréments de 2000
  


                  // suggestedMin: 2000, // Définir la valeur minimale à 2000
                  // suggestedMax: 70000, // Définir la valeur maximale à 8000 (2000 + 6000)
                  
                },
              },
            };
  
            // Création du graphique
            chart.value = new Chart("myChartss", {
              type: "bar",
              data: data,
              options: options,
            });
          } else {
            console.error('Erreur de l\'API :', response.data.message);
          }
        } catch (error) {
          console.error('Erreur lors de la requête GET :', error);
        }
      }
  
      onMounted(() => {
        // Appelez la fonction pour récupérer les données et créer le graphique
        fetchDataActivite();
      });

      onUnmounted(() => {
      // Détruisez le graphique lorsque le composant est démonté
      if (chart.value) {
        chart.value.destroy();
      }
    });
  
      return {
        chart,
      };
    },
  };
  </script>
  
  <style>
  /* Styles CSS pour personnaliser le graphique */
  </style>
  