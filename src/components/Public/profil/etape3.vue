<template>
    <div>
        <div class="row tab-content">
            <p class="titre">INFORMATIONS SUR LES PARTENARIATS ET BESIONS</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Existance Actionnaire</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.ExistanceActionnaire }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class="px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Existance Conseil Administration </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.ExistanceConseilAdministration }}</dd>
                                        </div>

                                    </div>

                                    <div class="d-flex justify-content-between class1">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Existance Partenariat </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.ExistancePartenariat }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Partenariat Technique</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PartenariatTechnique }}</dd>
                                        </div>

                                    </div>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Partenariat Financier</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.PartenariatFinancier }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class="px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Partenariat Commercial </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PartenariatCommercial }}</dd>
                                        </div>

                                    </div>
                                    <div class="d-flex justify-content-between class1">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Partenariat Autre </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PartenariatAutre }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Autre Partenariat</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AutrePartenariat }}</dd>
                                        </div>

                                    </div>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Besoin Partenaire</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.BesoinPartenaire }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class="px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Besoin Partenaire Technique </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.BesoinPartenaireTechnique }}</dd>
                                        </div>

                                    </div>

                                    <div class="d-flex justify-content-between class1">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Besoin Partenaire Financier </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.BesoinPartenaireFinancier }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Besoin Partenaire Commercial </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.BesoinPartenaireCommercial }}</dd>
                                        </div>

                                    </div>

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Besoin Partenaire Autre</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.BesoinPartenaireAutre }}</dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class="px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Autre Besoin Partenaire</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.AutreBesoinPartenaire }}</dd>
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
            <p class="titre">INFORMATIONS SUR LE REPONDANT</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Titre Repondant</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.TitreRepondant }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Nom Repondant </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NomRepondant }}</dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Fonction Repondant</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.FonctionRepondant }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Adresse du Repondant</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.AdresseRepondant
                                            }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>


                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Ville du Repondant</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.VilleRepondant }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Téléphone WhatsApp du Repondant</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.TelephoneWhatsAppRepondant }} </dd>
                                        </div>

                                    </div>

                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Contacter
                                            </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.Contacter }} </dd>
                                        </div>
                                       
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>

                                </dl>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

        <div class="row tab-content">
            <p class="titre">INFORMATIONS DE COMPTABILITE ET DE CARTE</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Type Comptabilite </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.TypeComptabilite }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Type de Carte</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.TypeCarte }} </dd>
                                        </div>

                                    </div>
                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Numero de Carte</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.NumeroCarte }} </dd>
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
            <p class="titre">INFORMATIONS GEOGRAPHIQUES</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                                <dl>
                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Lien Google Map Mpme </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.LienGoogleMapMpme }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Latitude Mpme</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.LatitudeMpme }} </dd>
                                        </div>

                                    </div>
                                    <div class="  d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class="  px-4 py-3 class2">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Longitude Mpme</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.LongitudeMpme }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;" class=" px-4 py-3 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Altitude Mpme</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.AltitudeMpme
                                            }} </dd>
                                        </div>
                                        <!-- md:bg-gray-50 sm:bg-gray-50 xs:bg-gray-50 -->
                                    </div>
                                    

                                    <div class=" lg:bg-gray-50 d-flex justify-content-between class1 ">
                                        <div style="display: flex;align-items: center;" class=" bg-gray-50 px-4 py-3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2 ">Precision GPS Mpme </dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.PrecisionGPSMpme }} </dd>
                                        </div>
                                        <div style="display: flex;align-items: center;"
                                            class=" px-4 py-3 lg:bg-gray-50 class3 ">
                                            <dt class="text-sm font-medium text-gray-500 me-2">Origine Donnees</dt>
                                            <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                                data.OrigineDonnees }} </dd>
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
            <p class="titre">INFORMATIONS LOCALISATION</p>
            <div class=" card col-xl-12 col-lg-12 col-md-12 py-2">
                <div class="   ">

                    <div class="">
                        <div class="overflow-hidden bg-white rounded-lg">

                            <div class="">
                            <Maps :data="data" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Maps from '../LISTE_PME/maps.vue';
export default {
    
    name: 'DNPMECLEtape3',
    props: ['data', 'items'],
    components:{Maps},

    data() {
        return {
            childKey: 0,

        };
    },

    mounted() {
      
    },

    methods: {
        updateMap() {
      // Emit the event to update the map
      this.$refs.mapsComponent.update();
    },
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