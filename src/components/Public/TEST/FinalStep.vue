<template>
  <div>
    <!-- Affichage des données ici -->
    <ul class="data-list">
      <li v-for="item in items" :key="item.id" class="data-item">{{ item.NomMpme }}</li>
    </ul>

    <!-- Pagination -->
    <Pagination :currentPage="currentPage" :totalPages="lastPage" @page-changed="onPageChanged" />
  </div>
</template>

<script>
import Pagination from '../other/pagination.vue';


export default {
  components: {
    Pagination,
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      lastPage: 1,
    };
  },
  computed: {
    itemsPerPage() {
      return 10; // Vous pouvez ajuster le nombre d'éléments affichés par page ici
    },
  },
  methods: {
    fetchData(page) {
      const apiUrl = `https://mpme-guinee.com/bd/public/api/mpme?page=${page}`;
      const proxyUrl = 'https://cors-proxy.fringe.zone/';
      fetch(proxyUrl + apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.lastPage = data.data.last_page;
          this.items = data.data.data;
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des données :', error);
        });
    },
    onPageChanged(page) {
      this.currentPage = page;
      this.fetchData(page);
    },
  },
  mounted() {
    // Charger les données de la première page lors du chargement initial du composant
    this.fetchData(this.currentPage);
  },
};
</script>




<style scoped>
.pagination-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: Arial, sans-serif;
}

.data-list {
  list-style: none;
  padding: 0;
  max-width: 500px;
    margin: 0 auto;
}

.data-item {
  margin-bottom: 5px;
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.pagination-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.prev-button,
.next-button {
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.prev-button:disabled,
.next-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.page-info {
  font-size: 14px;
}
</style>
