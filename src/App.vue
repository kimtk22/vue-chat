<template>
  <RouterView />
  <Modal />
</template>

<script setup>
import Modal from "./components/Modal/index.vue";

import { RouterView } from "vue-router";
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import { useChatRoomStore } from "./stores/ChatRoom";
import { useModalStore } from "./stores/Modal";

// useChatRoomStore().onGetChatRooms();
onMounted(() => {
  useModalStore().init();
});
</script>
