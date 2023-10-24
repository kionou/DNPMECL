<template>
    <div class="maps_container">
                <div class="map-wrap">
                    <a href="https://www.maptiler.com" class="watermark">
                        <img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" />
                    </a>
                    <div class="map" ref="mapContainer"></div>

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
    let newMarker;

    onMounted(async () => {
      console.log('rrreeeeee',data);
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

    const update = (nouvellesCoordonnees) => {
      if (nouvellesCoordonnees) {
        // Update the marker's position
        newMarker.setLngLat([nouvellesCoordonnees.longitude, nouvellesCoordonnees.latitude]);
        map.value.flyTo({
          center: [nouvellesCoordonnees.longitude, nouvellesCoordonnees.latitude],
          zoom: 10, // Desired zoom level
        });
      }
    };

    return {
      map,
      mapContainer,
      markers,
      update
    };
  },
    methods: {
        // Vos autres méthodes ici
    },
};
</script>
  
<style scoped>
.maps_container {
    width: 100%;
    height: 550px;
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

}

.mapboxgl-popup-close-button,
.maplibregl-popup-close-button {
    border: none !important;
    right: 4px !important;
}


.full-screen-map-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Styles personnalisés pour la carte en plein écran */
}
</style>
  