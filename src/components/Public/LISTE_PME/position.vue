<template>
    <!-- <div class="container"> -->
        <div class=" row">
            <div class="col-xl-4 col-lg-5 col-md-5">
                <!-- About User -->
                <div class="card mb-4">
                    <div class="card-body">
                        <!-- <small class="text-muted text-uppercase">About</small> -->
                        <ul class="list-unstyled mb-4 mt-3">
                            <li class="d-flex align-items-center mb-3">
                                <i class="bx bx-user"></i><span class="fw-semibold mx-2">Dirigeant:</span>
                                <span>John Doe</span>
                            </li>
                            <li class="d-flex align-items-center mb-3">
                                <i class="bx bx-check"></i><span class="fw-semibold mx-2">réation:</span>
                                <span>
                                    01/01/1954</span>
                            </li>
                            <li class="d-flex align-items-center mb-3">
                                <i class="bx bx-star"></i><span class="fw-semibold mx-2"> 01/01/1954:</span>
                                <span>
                                    Construction de véhicules automobiles</span>
                            </li>
                            <li class="d-flex align-items-center mb-3">
                                <i class="bx bx-flag"></i><span class="fw-semibold mx-2">Forme
                                    juridique:</span>
                                <span>
                                    Société par actions simplifiée</span>
                            </li>

                        </ul>
                        <small class="text-muted text-uppercase">Contacts</small>
                        <ul class="list-unstyled mb-4 mt-3">
                            <li class="d-flex align-items-center mb-3">
                                <i class="bx bx-phone"></i><span class="fw-semibold mx-2">Contact:</span>
                                <span>(123) 456-7890</span>
                            </li>
                            <li class="d-flex align-items-center mb-3">
                                <i class="bx bx-chat"></i><span class="fw-semibold mx-2">Skype:</span>
                                <span>john.doe</span>
                            </li>
                            <li class="d-flex align-items-center mb-3">
                                <i class="bx bx-envelope"></i><span class="fw-semibold mx-2">Email:</span>
                                <span>john.doe@example.com</span>
                            </li>
                        </ul>
                        <small class="text-muted text-uppercase">Equipe</small>
                        <ul class="list-unstyled mt-3 mb-0">
                            <li class="d-flex align-items-center mb-3">
                                <i class="bx bxl-github text-primary me-2"></i>
                                <div class="d-flex flex-wrap">
                                    <span class="fw-semibold me-2">Nombres employés hommes</span><span>126
                                    </span>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <i class="bx bxl-react text-info me-2"></i>
                                <div class="d-flex flex-wrap">
                                    <span class="fw-semibold me-2">Nombres employés femmes</span><span>98
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="col-xl-8 col-lg-7 col-md-7">
                <!-- Activity Timeline -->


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

    <!-- </div> -->
</template>

<script>

import { Map, NavigationControl, Marker, Popup } from 'maplibre-gl';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';

export default {
    name: 'CPtMagasin',
    components: {

    },

    data() {
        return {
            show: false,
            magasins: '',
            marker: '',
            isFullScreen: false,
        };
    },

    setup() {
        const mapContainer = shallowRef(null);
        const map = shallowRef(null);
        const markers = shallowRef([]);
        onMounted(async () => {
            const apiKey = 'R0tHx9tGeRGXSyvwlX0q';
            const initialState = { lng: 11.52, lat: 3.91, zoom: 9 };

            map.value = markRaw(new Map({
                container: mapContainer.value,
                style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
                center: [initialState.lng, initialState.lat],
                zoom: initialState.zoom
            }));
            map.value.addControl(new NavigationControl(), 'top-right');

            // const response = await axiosClient.get('/magasin');
            // markers.value = response.data;

            // markers.value.forEach(marker => {
            //     marker.show = false;
            //     const newMarker = new Marker({ color: "#FF0000" })
            //         .setLngLat([marker.longitude, marker.latitude])
            //         .addTo(map.value);

            //     const popupContent =
            //      `
            //     <div>

            //         <h3> ${('magasin.sous_titre')}  ${marker.nom}</h3>
            //         <p> <h4>Description:</h4> ${marker.description}</p>

            //     </div>
            //     `;
            //     newMarker.setPopup(new Popup().setHTML(popupContent));
            // });
        }),

            onUnmounted(() => {
                map.value?.remove();
            })



        return {
            map, mapContainer, markers
        };
    },
    methods: {



    }
}
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

}

.mapboxgl-popup-close-button,
.maplibregl-popup-close-button {
    border: none !important;
    right: 4px !important;
}





</style>