<template>
  <MazSelect
    label="Select color"
    v-model="selectedUser"
    :options="customTemplateOptions"
    v-slot="{ option }"
    option-value-key="value"
    option-label-key="label"
    option-input-value-key="value"
    search
  >
    <div class="flex items-center" style="width: 100%; gap: 1rem">
      <MazAvatar size="0.8rem" :src="option.picture" />
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

  const selectedUser = ref(4)

  const customTemplateOptions = [
    { picture: 'https://placekitten.com/100/100', label: 'James Kitten', value: 1 },
    { picture: 'https://placekitten.com/500/500', label: 'Brad Kitten', value: 2 },
    { picture: 'https://placekitten.com/300/300', label: 'Cedric Kitten', value: 3 },
    { picture: 'https://placekitten.com/400/400', label: 'Harry Kitten', value: 4 },
  ]
</script>