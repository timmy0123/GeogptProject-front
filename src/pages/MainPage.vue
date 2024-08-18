<template>
  <div class="container">
    <map-box></map-box>
    <conversation-content></conversation-content>
  </div>
</template>

<script setup>
import MapBox from "@/components/ui/MapBox.vue";
import ConversationContent from "../components/ConversationContent.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 220px 1fr;
  position: relative;
}
</style>
