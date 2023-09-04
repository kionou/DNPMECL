<template>
    <div class="row">
        <div class=" card col-xl-5 col-lg-5 col-md-5 py-2">
            <div class=" bg-white rounded-lg  ">

                <div class="">
                    <div class="overflow-hidden bg-white   border-b border-gray-200 rounded-lg  ">

                        <div class="border-t border-gray-200">
                            <dl>
                                <div
                                    class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Région</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{ data.Region }}</dd>
                                </div>
                                <div
                                    class="px-4 py-3 bg-white sm:grid grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Sous-préfecture</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{{ data.Sousprefecture}}</dd>
                                </div>

                                <div
                                    class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Commune</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                        data.Commune }} </dd>
                                </div>
                                <div
                                    class="px-4 py-3 bg-white sm:grid grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Ville</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{{
                                        data.Ville }}</dd>
                                </div>
                                <div
                                    class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Quartier</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2"> {{
                                        data.Quartier }} </dd>
                                </div>
                                <div
                                    class="px-4 py-3 bg-white sm:grid grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Rue</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">  {{ data.Rue }}</dd>
                                </div>

                                <div
                                    class="px-4 py-3 bg-gray-50 sm:grid  grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">Boite Postale</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">  {{
                                        data.BoitePostale }} </dd>
                                </div>
                                <div
                                    class="px-4 py-3 bg-white sm:grid grid align-items-center sm:grid-cols-3 sm:gap-4 sm:px-6  ">
                                    <dt class="text-sm font-medium text-gray-500">Localisation</dt>
                                    <dd class="mt-1 font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{{ data.Localisation
                                    }}</dd>
                                </div>


                            </dl>
                        </div>
                    </div>

                </div>

            </div>

           
        </div>
        <div class="col-xl-7 col-lg-7 col-md-7">

            <div class="maps_container">
                <div class="map-wrap">
                    <a href="https://www.maptiler.com" class="watermark">
                        <img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" />
                    </a>
                    <div class="map" ref="mapContainer"></div>

                </div>


            </div>
        </div>
    </div>
</template>

<script>
import { Map, NavigationControl, Marker, Popup } from 'maplibre-gl';
import { shallowRef, onMounted, onUnmounted, markRaw, ref } from 'vue';
import { inject } from 'vue';

export default {
  name: 'CPtMagasin',
  props: ['data'],
  components: {},
  data() {
    return {
      show: false,
      marker: '',
      isFullScreen: false,
    };
  },
  setup(props) {
    const mapContainer = shallowRef(null);
    const map = shallowRef(null);
    const markers = shallowRef([]);
    const myPropValue = ref(props.data);
    const data = inject('data');

    onMounted(async () => {
      console.log('rrr',data);
      const apiKey = 'R0tHx9tGeRGXSyvwlX0q';
      const initialState = { lng: -11.283844999999985, lat: 9.934886500000001, zoom: 5.5 };

      map.value = markRaw(
        new Map({
          container: mapContainer.value,
          style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom,
        })
      );
    
      map.value.addControl(new NavigationControl(), 'top-right');
      console.log('rrrss', myPropValue.value.LatitudeMpme);

      const newMarker = new Marker({ color: '#FF0000' })
        .setLngLat([myPropValue.value.LongitudeMpme, myPropValue.value.LatitudeMpme])
        .addTo(map.value);

      const popupContent = `
                <div >
                    <p> Nom:  ${myPropValue.value.NomMpme}</p>
                    
                </div>
                `;
      newMarker.setPopup(new Popup().setHTML(popupContent));

      // Gestionnaire d'événement pour le clic sur le marqueur
      newMarker.getElement().addEventListener('click', () => {
        map.value.flyTo({
          center: [myPropValue.value.LongitudeMpme, myPropValue.value.LatitudeMpme],
          zoom: 10, // Niveau de zoom souhaité
        });
      });
    }),

    onUnmounted(() => {
      map.value?.remove();
    });

    return {
      map,
      mapContainer,
      markers,
    };
  },
  methods: {},
};
</script>

<style lang="css"  scoped >
.maps_container {
    width: 100%;
    height: 450px;
    padding: 10px;
}

.map-wrap {
    position: relative;
    width: 100%;
    height: 100%;
}

.map {
    position: absolute;
    width: 100%;
    height: 100%;
}


.watermark {
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 999;
}

.mapboxgl-popup,
.maplibregl-popup {
    top: -26px !important;
    max-width: 280px !important;

}

.mapboxgl-popup-close-button,
.maplibregl-popup-close-button {
    border: none !important;
    right: 4px !important;
}


</style>