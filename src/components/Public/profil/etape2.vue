<template>
    <div>
        <div class="row tab-content">
            <p class="titre">INFORMATIONS SUR LES PRIX ET LES DIRIGEANTS</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Mpme Bourse</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.MpmeBourse }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class="px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Nom Bourse </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NomBourse }}</dd>
                                        </div>

                                    </div>

                                    <div class="d-flex justify-content-between class1">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Réception Prix </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.RecptionPrix }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Principal Prix</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PrincipalPrix }}</dd>
                                        </div>

                                    </div>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Année Prix Principal</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.AnneePrixPrincipal }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class="px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Titre Dirigeant </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.TitreDirigeant }}</dd>
                                        </div>

                                    </div>
                                    <div class="d-flex justify-content-between class1">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Nom Dirigeant </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NomDirigeant }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Prénom Dirigeant</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PrenomDirigeant }}</dd>
                                        </div>

                                    </div>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Sexe Dirigeant</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.SexeDirigeant }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class="px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Pays Dirigeant </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PaysDirigeant }}</dd>
                                        </div>

                                    </div>

                                    <div class="d-flex justify-content-between class1">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Année Naissance Dirigeant </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AnneeNaissanceDirigeant }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Dirigeant Proprietaire </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.DirigeantProprietaire }}</dd>
                                        </div>

                                    </div>

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Titre Proprietaire</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.TitreProprietaire }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class="px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Nom Proprietaire</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NomProprietaire }}</dd>
                                        </div>

                                    </div>
                                    <div class="d-flex justify-content-between class1">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Prénom Proprietaire </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PrenomProprietaire }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Sexe Proprietaire </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.SexeProprietaire }}</dd>
                                        </div>

                                    </div>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Pays Proprietaire</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.PaysProprietaire }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class="px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Année Naissance Proprietaire </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AnneeNaissanceProprietaire }}</dd>
                                        </div>

                                    </div>

                                </dl>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

        <div class="row tab-content">
            <p class="titre">INFORMATIONS SUR LE RESEAU ET FINANCEMENT</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Appartenance Reseau Professionnel</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AppartenanceReseauProfessionnel }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Nom Reseau Professionnel </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NomReseauProfessionnel }}</dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Financement Fond Propre</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.FinancementFondPropre }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Financement Credit Bancaire</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.FinancementCreditBancaire
                                            }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>


                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Financement Partenaire Exterieurs</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.FinancementPartenaireExterieurs }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Financement Autre</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.FinancementAutre }} </dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Autre Financement 
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AutreFinancement }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Description du Reseau</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.DescriptionReseau }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>
<!-- 
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Financement Partenaire Exterieurs</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.FinancementPartenaireExterieurs }} </dd>
                                        </div>
                                      

                                    </div> -->


                                </dl>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

        <div class="row tab-content">
            <p class="titre">INFORMATIONS SUR LES DIFFICULTES ET SUGGESTIONS</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Difficultes Rencontrees</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.DifficultesRencontrees }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Suggestions Proposees</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.SuggestionsProposees }} </dd>
                                        </div>

                                    </div>

                                    
                                    

                                    

                                 

                                </dl>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'DNPMECLEtape2',
    props: ['data', 'items'],

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

<style lang="css" scoped>.titre {
    display: block;
    color: rgba(156, 163, 175, 1);
    margin-bottom: 4px;
    font-size: 12px;
}

.class3 {
  
    width: 40%;

}

@media (max-width: 1023px) {
    .class1 {
        flex-direction: column;
    }

    .class2 {
        background-color: #F9FAFB;
    }

    .class3 {
     
        width: 100% !important;

    }
}
</style>