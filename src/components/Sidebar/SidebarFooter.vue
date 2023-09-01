<template>
  <div class="flex justify-center p-5">
    <!-- data-modal-target="createChatModal"
      data-modal-toggle="createChatModal" -->
    <button
      @click="openModal"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      <PlusIcon />
    </button>
  </div>
</template>

<script setup>
import PlusIcon from "icons/plus.vue";
import { useModalStore } from "../../stores/Modal";
import CreateChatBody from "../Modal/CreateChatBody.vue";

const openModal = () => {
  const actions = [
    {
      label: "Create",
      type: "blue",
    },
    {
      label: "Cancle",
    },
  ];
  useModalStore().open("Create Chat", CreateChatBody, actions);
};
</script>

<style lang="scss" scoped></style>
