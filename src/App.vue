<template>
  <RouterView />
  <ModalTemplate />
</template>

<script setup>
import ModalTemplate from "./components/Modal/ModalTemplate.vue";

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
