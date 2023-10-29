<template>
  <MazSelect
    label="Select color"
    v-model="selectedUser"
    :options="customTemplateOptions"
    v-slot="{ option, isSelected }"
    search
  >
    <!-- Retirez l'élément MazAvatar et affichez seulement le texte -->
    <div
      class="flex items-center"
      style="padding-top: 0.5rem; padding-bottom: 0.5rem; width: 100%; gap: 1rem"
      @click="handleOptionClick(option)"
    >
      <strong>
        {{ option.label }}
      </strong>
    </div>
  </MazSelect>
</template>

<script  setup>
  import { ref } from 'vue'
  import MazSelect from 'maz-ui/components/MazSelect'
  import MazAvatar from 'maz-ui/components/MazAvatar'

  const selectedUser = ref()

  const customTemplateOptions = [
    { picture: 'https://placekitten.com/100/100', label: 'James Kitten', value: 1 },
    { picture: 'https://placekitten.com/500/500', label: 'Brad Kitten', value: 2 },
    { picture: 'https://placekitten.com/300/300', label: 'Cedric Kitten', value: 3 },
    { picture: 'https://placekitten.com/400/400', label: 'Harry Kitten', value: 4 },
  ]

  const handleOptionClick = (option) => {
  // La fonction handleOptionClick est appelée lorsque l'utilisateur clique sur une option.
  // Vous pouvez utiliser l'objet "option" pour accéder aux données de l'option sélectionnée.
  console.log('Option sélectionnée :', option);
}
</script>