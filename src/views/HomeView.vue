<template>
  <Sidebar />
  <div class="sm:ml-80">
    <ChatView />
  </div>
</template>

<script setup>
import ChatView from "./ChatView.vue";
import Sidebar from "../components/Sidebar/Sidebar.vue";
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
