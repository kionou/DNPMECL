<template>
    <div>
        <div class="row tab-content">
            <p class="titre">INFORMATIONS GENERALE</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Region</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.Region }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class="px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Commune</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.Commune }}</dd>
                                        </div>

                                    </div>

                                    <div class="d-flex justify-content-between class1">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Ville</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.Ville }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Sous préfecture</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.Sousprefecture }}</dd>
                                        </div>

                                    </div>

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Localisation</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.Localisation }}</dd>
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
            <p class="titre">INFORMATIONS SUR L'ENTREPRISE</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Sigle Mpme</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.SigleMpme }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Nom </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NomMpme }}</dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Quartier</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.Quartier }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Rue</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.Rue
                                            }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>


                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Boîte Postale</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.BoitePostale }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Numéro WhatsApp</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NumeroWhatsApp }} </dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Numéro Téléphone Secondaire
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NumeroTelephoneSecondaire }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Adresse Email</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AdresseEmail }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Site Web</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.url
                                            }} </dd>
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
            <p class="titre">INFORMATIONS SUR L'ACTIVITE</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Année de Creation</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AnneeCreation }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Année Entrée Activité </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AnneeEntreeActivite }} </dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Code Statut Juridique</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AnneeEntreeActivite }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3  class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Autre Statut Juridique</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AutreStatutJuridique }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>


                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Principal Secteur Activite
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PrincipalSecteurActivite }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Liste Sous Secteur Activite
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ items }}
                                            </dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Année Production 1</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AnneeProduction1 }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3  class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Personnel Permanent Femme
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PersonnelPermanentFemme }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Personnel Permanent Homme
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PersonnelPermanentHomme }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Personnel Temporaire Femme
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PersonnelTemporaireFemme }} </dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Personnel Temporaire Homme
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PersonnelTemporaireHomme }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Chiffre Affaire 1</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.ChiffreAffaire1 }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">ChiffreAffaire 2</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.ChiffreAffaire2 }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Part Chiffre Affaire
                                                Exportation</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PartChiffreAffaireExprtation }} </dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Groupe Fililale </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.GroupeFililale }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Nationalité Groupe</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NationaliteGroupe }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Capital Social</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.CapitalSocial }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Numéro Rccm</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NumeroRccm }}</dd>
                                        </div>

                                    </div>
                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Numero Nif </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NumeroNif }} </dd>
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
    name: 'DNPMECLEtape1',
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