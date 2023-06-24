<template>
    <div class="maps_container">
        <div :class="{ 'map-container': !isFullScreen, 'full-screen-map-container': isFullScreen }">
            <div class="map-wrap">
                <a href="https://www.maptiler.com" class="watermark">
                    <img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" />
                </a>
                <div class="map" ref="mapContainer"></div>

            </div>
        </div>

    </div>
</template>
  
<script>
import { onMounted, onUnmounted, ref } from 'vue';
import { Map, NavigationControl, Marker, Popup } from 'maplibre-gl';

export default {
    name: 'CPtMagasin',
    data() {
        return {
            isFullScreen: false,
            map: null,
            mapContainer: ref(null),
            markers: [],
        };
    },
    setup() {
        onMounted(async () => {
            const mapContainer = ref(null);
           ;
            const apiKey = 'R0tHx9tGeRGXSyvwlX0q';
            const initialState = { lng: 11.52, lat: 3.91, zoom: 9 };

            const map = new Map({
                container: mapContainer.value,
                style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
                center: [initialState.lng, initialState.lat],
                zoom: initialState.zoom,
            });

            map.addControl(new NavigationControl(), 'top-right');

            // Récupérer les marqueurs depuis votre API
            // const response = await axiosClient.get('/magasin');
            // this.markers = response.data;

            // Créer les marqueurs sur la carte
            // this.markers.forEach(marker => {
            //   marker.show = false;
            //   const newMarker = new Marker({ color: '#FF0000' })
            //     .setLngLat([marker.longitude, marker.latitude])
            //     .addTo(map);

            //   const popupContent = `
            //     <div>
            //       <h3>${('magasin.sous_titre')} ${marker.nom}</h3>
            //       <p><h4>Description:</h4> ${marker.description}</p>
            //     </div>
            //   `;
            //   newMarker.setPopup(new Popup().setHTML(popupContent));
            // });

            this.map = map;
        });

        onUnmounted(() => {
            this.map?.remove();
        });
    },
    methods: {
        // Vos autres méthodes ici
    },
};
</script>
  
<style scoped>
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
  