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
  const map = L.map("map").setView([51.505, -0.09], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  //   L.marker([51.5, -0.09])
  //     .addTo(map)
  //     .bindPopup("A pretty CSS popup.<br> Easily customizable.")
  //     .openPopup();

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
