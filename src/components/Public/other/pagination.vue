<template>
  <div class="pagination">
    <ul>
      <li id="btn" @click="goToPage(currentPage - 1)" :class="{ disabled: currentPage === 1 }">Précédent</li>
      <li @click="goToPage(1)" :class="{ active: currentPage === 1 }">1</li>
      <li v-if="currentPage > 4 && totalPages > 6">...</li>
      <li v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="{ active: currentPage === page }">
        {{ page }}
      </li>
      <li v-if="currentPage < totalPages - 3 && totalPages > 6">...</li>
      <li @click="goToPage(totalPages)" :class="{ active: currentPage === totalPages }">{{ totalPages }}</li>
      <li id="btn" @click="goToPage(currentPage + 1)" :class="{ disabled: currentPage === totalPages }">Suivant</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    visiblePages() {
      if (this.totalPages <= 6) {
        return Array.from({ length: this.totalPages - 1 }, (_, i) => i + 2);
      } else {
        const currentPage = this.currentPage;
        let startPage = currentPage - 2;
        let endPage = currentPage + 2;

        if (startPage < 2) {
          startPage = 2;
          endPage = startPage + 4;
        }

        if (endPage > this.totalPages - 1) {
          endPage = this.totalPages - 1;
          startPage = endPage - 4;
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage);
      }
    },
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('page-changed', page);
      }
    },
  },
};
</script>

<style scoped>


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

#btn{
background-color: var(--color-secondary);
color: #333;

}
#btn:hover{

  background-color: #fff;
color: var(--color-secondary);
border: 1px solid var(--color-secondary);
}
</style>
