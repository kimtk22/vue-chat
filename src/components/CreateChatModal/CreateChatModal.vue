<template>
  <div
    id="createChatModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          @click="closeModal"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <CloseIcon />
          <span class="sr-only">Close modal</span>
        </button>
        <!-- Modal header -->
        <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
          <h3
            class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white"
          >
            Create Chat
          </h3>
        </div>
        <!-- Modal body -->
        <div class="p-6">
          <div
            id="Search"
            class="px-1 bg-[#F0F0F0] flex items-center justify-center rounded-sm w-full"
          >
            <MagnifyIcon fillColor="#515151" :size="18" class="ml-2" />
            <input
              class="ml-2 w-full py-1.5 px-2.5 bg-[#F0F0F0] text-gray-700 leading-tight outline-none shadow-outline placeholder:text-xs placeholder:text-gray-500"
              type="text"
              autocapitalize="off"
              placeholder="Search User"
            />
          </div>

          <div class="my-4 space-y-3">
            <UserInfo
              v-for="user in userStore.users"
              :key="user.id"
              :user-name="`${user.firstName} ${user.lastName}`"
              :picture="user.picture"
            />
          </div>

          <div class="flex justify-center">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Create
            </button>
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MagnifyIcon from "icons/Magnify.vue";
import CloseIcon from "icons/Close.vue";
import UserInfo from "./UserInfo.vue";
import { useModalStore } from "../../stores/Modal";
import { useUserStore } from "../../stores/User";

const userStore = useUserStore();

const closeModal = () => {
  const createChatModal = useModalStore().getCreateChatModal();
  createChatModal.hide();
};
</script>

<style lang="scss" scoped></style>
