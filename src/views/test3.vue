<template>
  <MazSelect
    v-model="selectedValueCustom"
    :options="customOptions"
   
    search
    @change="handleSelectChange" 
  />
</template>

<script setup>
  import { ref } from 'vue'
  const selectedValueCustom = ref()

  const customOptions = [
  { label: 'Monsieur', value: 'M' },
  { label: 'Madame', value: 'F' },
  ]

 // Fonction pour gérer le changement de valeur
 const handleSelectChange = (bb) => {
    console.log('Nouvelle valeur sélectionnée :',bb, selectedValueCustom.value);
    // Vous pouvez ajouter votre logique ici pour réagir au changement
  }
</script>
