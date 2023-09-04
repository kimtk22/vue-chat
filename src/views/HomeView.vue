<template>
  <Sidebar />
  <div class="sm:ml-80">
    <Chat />
  </div>
</template>

<script setup>
import Chat from "@/components/Chat/index.vue";
import Sidebar from "@/components/Sidebar/index.vue";
import { onMounted, onUnmounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
onUnmounted(() => {
  const backdropElement = document.querySelector(".fixed.z-30");
  if (backdropElement) {
    const parentElement = backdropElement.parentNode;
    parentElement.removeChild(backdropElement);
  }
});
</script>
