<template>
    <div class="pagination">
    <ul>
      <li @click="updatePage(1)" :class="{ disabled: currentPage === 1 }">
        <i class="bi bi-chevron-double-left"></i>
      </li>
      <li @click="updatePage(currentPage - 1)" :class="{ disabled: currentPage === 1 }">
        <i class="bi bi-chevron-left"></i>
      </li>
      <li v-for="page in visiblePages" :key="page" @click="updatePage(page)" :class="{ active: page === currentPage }">
        {{ page !== '...' ? page : '...' }}
      </li>
      <li @click="updatePage(currentPage + 1)" :class="{ disabled: currentPage === totalPages }">
        <i class="bi bi-chevron-right"></i>
      </li>
      <li @click="updatePage(totalPages)" :class="{ disabled: currentPage === totalPages }">
        <i class="bi bi-chevron-double-right"></i>
      </li>
    </ul>
  </div>
  </template>
  
  <script>
  export default {
    name: 'Pagination',
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      }
    },
    methods: {
      updatePage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.$emit('update-page', page);
        }
      }
    },
    computed: {
    visiblePages() {
      const threshold = 5; // Nombre de pages avant d'afficher les points de suspension
      const maxVisiblePages = threshold * 2 + 1; // Nombre total de pages visibles
      const totalPages = this.totalPages;

      if (totalPages <= maxVisiblePages) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      } else {
        let visibleRangeStart = Math.max(1, this.currentPage - threshold);
        let visibleRangeEnd = Math.min(totalPages, this.currentPage + threshold);

        // Vérifier si les points de suspension sont nécessaires à gauche
        const leftEllipsis = visibleRangeStart > 1;

        // Vérifier si les points de suspension sont nécessaires à droite
        const rightEllipsis = visibleRangeEnd < totalPages;

        // Si les points de suspension sont nécessaires, ajuster la plage visible
        if (leftEllipsis && !rightEllipsis) {
          visibleRangeStart = Math.max(1, visibleRangeEnd - maxVisiblePages + 1);
        } else if (!leftEllipsis && rightEllipsis) {
          visibleRangeEnd = Math.min(totalPages, visibleRangeStart + maxVisiblePages - 1);
        }

        // Générer la plage de pages visibles
        const visiblePages = Array.from(
          { length: visibleRangeEnd - visibleRangeStart + 1 },
          (_, i) => i + visibleRangeStart
        );

        // Ajouter les points de suspension si nécessaire
        if (leftEllipsis) {
          visiblePages.unshift('...');
        }
        if (rightEllipsis) {
          visiblePages.push('...');
        }

        return visiblePages;
      }
    }
  }
  };
  </script>
  
  <style lang="css" scoped>
  .pagination {
  display: flex;
  justify-content: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  display: inline-block;
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #f2f2f2;
  color: #333;
}

li.active {
  background-color:var(--color-secondary);
  color: #fff;
}

li.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

i {
  vertical-align: middle;
}
</style>
  