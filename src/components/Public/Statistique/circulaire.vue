<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";
import axios from "@/lib/axiosConfig.js"; // Importez Axios

export default {
  setup() {
    const chart = ref(null);

    onMounted(async () => {
      // Fetch des données depuis l'API
      const secteurActiviteData = await fetchDataActivite();

      if (secteurActiviteData.length === 0) {
       
        return;
      }

      // Données du graphique
      const data = {
        labels: secteurActiviteData.map((item) => item.secteur_activite.NomSecteurActivite),
        datasets: [
          {
          //   label: "Nombre d'entreprises",
            data: secteurActiviteData.map((item) => item.nbre),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

      // Options du graphique
      const options = {
        responsive: true,
      };

      // Création du graphique camembert
      chart.value = new Chart("myChart", {
        type: "pie",
        data: data,
        options: options,
      });
    });

    return {
      chart,
    };
  },
};

async function fetchDataActivite() {
  try {
    const response = await axios.get("/secteurs-activites", {
      params: { with_relation: true },
    });

    if (response.data.status === "success") {
      // Filtrer les données pour exclure les entrées avec secteur_activite à null
      const filteredData = response.data.data.data.filter(
        (item) => item.secteur_activite !== null
      );

      return filteredData;
    } else {
     
      return [];
    }
  } catch (error) {
   
    return [];
  }
}
</script>
