<template>
  <div>
    <form @submit.prevent="submitForm">
      <div v-for="(document, index) in documents" :key="index">
        <input v-model="document.nom" placeholder="Nom du document" />
        <input type="file" @change="handleFileChange(document, $event)" />
        <button @click="removeDocument(index)">Supprimer</button>
      </div>
      <button @click="addDocument">Ajouter un document</button>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documents: [{ nom: '', fichier: null }],
    };
  },
  methods: {
    handleFileChange(document, event) {
      document.fichier = event.target.files[0];
    },
    addDocument() {
      this.documents.push({ nom: '', fichier: null });
    },
    removeDocument(index) {
      this.documents.splice(index, 1);
    },
    submitForm() {
      // Vous pouvez accéder à this.documents pour envoyer les données au serveur
      // Assurez-vous de gérer correctement les fichiers et les noms de documents
      console.log(this.documents);
    },
  },
};
</script>


<style  scoped >

/* Style de base pour le formulaire */
form {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 5px;
}

/* Style des champs de chaque document */
input {
  display: block;
  margin: 10px 0;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

/* Style des boutons pour ajouter et supprimer des documents */
button {
  display: inline-block;
  margin: 5px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

/* Style spécifique pour le bouton "Ajouter un document" */
button:last-child {
  background-color: #28a745; /* Couleur verte pour le bouton "Ajouter un document" */
}

/* Style pour le bouton "Envoyer" */
button[type="submit"] {
  background-color: #007BFF;
}

/* Style pour le lien du fichier */
input[type="file"] {
  display: block; /* Masquer l'input de type "file" */
}

label {
  display: inline-block;
  margin: 5px 0;
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
}

label:hover {
  background-color: #0056b3; /* Couleur légèrement plus foncée au survol du lien du fichier */
}

/* Style pour le bouton de suppression */
button[aria-label="Supprimer"] {
  background-color: #dc3545; /* Couleur rouge pour le bouton de suppression */
}

/* Style pour le bouton de suppression au survol */
button[aria-label="Supprimer"]:hover {
  background-color: #c82333; /* Couleur plus foncée au survol du bouton de suppression */
}


</style>