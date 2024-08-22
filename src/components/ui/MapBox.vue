<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import * as L from "leaflet";

const store = useStore();
L.Marker.prototype.options.icon = L.icon({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

onMounted(() => {
  // Initialize the Leaflet map
  const map = L.map("map").setView([23.5, 121], 7); // Centering on Taiwan

  // Define the base layer (OpenStreetMap)
  const osmLayer = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  ).addTo(map);

  // Define the historical map layer
  const layers = store.getters["maps/getLayers"];
  let overlayMaps = {};
  for (let i = 0; i < layers.length; i++) {
    const layer = L.tileLayer(layers[i].url, { minZoom: 5, maxZoom: 16 });
    overlayMaps[layers[i].name] = layer;
  }

  // Add layer control
  const baseMaps = {
    OpenStreetMap: osmLayer,
  };

  L.control.layers(baseMaps, overlayMaps).addTo(map);

  store.dispatch("conversations/setMap", map);
});
</script>
<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
}
</style>
