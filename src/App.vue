<template>
  <RouterView />
  <CreateChatModal />
</template>

<script setup>
import CreateChatModal from "./components/CreateChatModal/CreateChatModal.vue";

import { RouterView } from "vue-router";
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import { useChatRoomStore } from "./stores/ChatRoom";

useChatRoomStore().onGetChatRooms();
onMounted(() => {});
</script>
