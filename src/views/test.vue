<template>
  <div>
    <div class="container-fluid  mt-10" data-aos="zoom-out" data-aos-delay="100">
      <div class="form-container">
        <div class="haut">
          Ci-dessous sont les informations pour votre MPME :
        </div>

        <!-- etape 1 -->
        <h3>Etape 1</h3>
        <div class="row mb-3">
          <div class="col">
            <strong class="contenu">Région:</strong> 
            <span> Conakry</span>
           
          </div>
          <div class="col">
            <strong class="contenu">Commune:</strong>
            <span> Abidjan</span>
          </div>
          <div class="col">
            <strong class="contenu">Ville:</strong> 
            <span> Abidjan</span>
          </div>
        </div>

        <div class="row mb-3">
  <div class="col">
    <strong class="contenu">Sous-préfecture:</strong>
    <span>aa</span>
  </div>
 
  <div class="col">
    <strong class="contenu">Localisation:</strong>
    <span>aaa</span>
  </div>
  <div class="col">
    <strong class="contenu">Sigle Mpme:</strong>
    <span>aa</span>
  </div>
       </div>

       <div class="row mb-3">
  <div class="col">
    <strong class="contenu">Nom Mpme:</strong>
    <span>props.formValues.nom</span>
  </div>
  <div class="col">
    <strong class="contenu">Quartier:</strong>
    <span>props.formValues.quartier</span>
  </div>
  <div class="col">
    <strong class="contenu">Rue:</strong>
    <span>props.formValues.rue</span>
  </div>
 
</div>

<div class="row mb-3">
  <div class="col">
    <strong class="contenu">Boîte Postale:</strong>
    <span>props.formValues.boite_postale</span>
  </div>
  <div class="col">
    <strong class="contenu">Numéro WhatsApp:</strong>
    <span>props.formValues.tel_what</span>
  </div>
  <div class="col">
    <strong class="contenu">Numéro Téléphone Secondaire:</strong>
    <span>p</span>
  </div>
</div>

<div class="row mb-3">
  <div class="col">
    <strong class="contenu">Adresse Email:</strong>
    <span>props.formValues.email</span>
  </div>
  <div class="col">
    <strong class="contenu">Site Web:</strong>
    <span>props.formValues.url</span>
  </div>
  <div class="col">
    <strong class="contenu">Année de Création:</strong>
    <span>props.</span>
  </div>
 
</div>

<div class="row mb-3">
  <div class="col">
    <strong class="contenu">Année d'Entrée en Activité:</strong>
    <span>propsi</span>
  </div>
  <div class="col">
    <strong class="contenu">Code Statut Juridique:</strong>
    <span>props.formVa</span>
  </div>
  <div class="col">
    <strong class="contenu">Autre Statut Juridique:</strong>
    <span>props.fo</span>
  </div>
</div>

<div class="row mb-3">
  <div class="col">
    <strong class="contenu">Principal Secteur d'Activité:</strong>
    <span>props.formVa</span>
  </div>
  <div class="col">
    <strong class="contenu">Liste des Sous-Secteurs d'Activité:</strong>
    <span>prop</span>
  </div>
  <div class="col">
    <strong class="contenu">Année de Production 1:</strong>
    <span>props.fo</span>
  </div>
</div>

<div class="row mb-3">
  <div class="col">
    <strong class="contenu">Personnel Permanent Femme:</strong>
    <span>props.</span>
  </div>
  <div class="col">
    <strong class="contenu">Personnel Permanent Homme:</strong>
    <span>props</span>
  </div>
  <div class="col">
    <strong class="contenu">Personnel Temporaire Femme:</strong>
    <span>props.</span>
  </div>
</div>

<div class="row mb-3">
  <div class="col">
    <strong class="contenu">Personnel Temporaire Homme:</strong>
    <span>props</span>
  </div>
  <div class="col">
    <strong class="contenu">Chiffre d'Affaires 1:</strong>
    <span>props1</span>
  </div>
  <div class="col">
    <strong class="contenu">Chiffre d'Affaires 2:</strong>
    <span>props.</span>
  </div>
</div>

<div class="row mb-3">
  <div class="col">
    <strong class="contenu">Part Chiffre d'Affaires à l'Exportation:</strong>
    <span>props</span>
  </div>
  <div class="col">
    <strong class="contenu">Groupe Filiale:</strong>
    <span>props</span>
  </div>
  <div class="col">
    <strong class="contenu">Nationalité du Groupe:</strong>
    <span>props</span>
  </div>

</div>

<div class="row mb-3">
  <div class="col">
    <strong class="contenu">Capital Social:</strong>
    <span>props</span>
  </div>
  <div class="col">
    <strong class="contenu">Numéro RCCM:</strong>
    <span> props</span>
  </div>
  <div class="col">
    <strong class="contenu">Numéro NIF:</strong>
    <span> props</span>
  </div>
</div>






















      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DNPMECLTest',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="css" scoped>
.form-container {
  max-width: 1140px;
  margin: 0 auto;
  background-color: white;
  padding: 1rem;
  color: black;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);

}

.haut{
border-bottom: 1px solid var(--color-secondary);
width: 100%;
height: 100px;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    font-weight: bolder;

}

.row {
  display: flex;
  justify-content: space-between;
}

.col {
  flex: 1;
}

.contenu{
  font-weight: 600;
    font-family: ui-monospace;
    font-size: 18px;

}

.btnLogin {
  padding: 1em 3em;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  background-color: #F9D310;
  border: none;
  border-radius: 45px;
  cursor: pointer;
  outline: none;
}

.btnLogin:hover {
  background-color: #fff;
  border: 1px solid #F9D310;
  color: #000
}
</style>