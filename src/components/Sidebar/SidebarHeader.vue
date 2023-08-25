<template>
  <div class="bg-gray-50 w-full">
    <div class="flex justify-between items-center">
      <img
        src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
        class="w-10 rounded-full"
      />
      <div class="flex items-center justify-center">
        <AccountGroupIcon fillColor="#515151" class="mr-3" />
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          class="cursor-pointer"
        >
          <DotsVerticalIcon fillColor="#515151" />
        </button>
        <div
          id="dropdownDots"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{{ firstName }} {{ lastName }}</div>
            <div class="font-medium truncate">{{ email }}</div>
          </div>
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Earnings</a
              >
            </li>
          </ul>
          <div class="py-2">
            <a
              href="#"
              @click="logout"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Sign out</a
            >
          </div>
        </div>
      </div>
    </div>

    <div id="Search" class="bg-white w-full px-1 border-b">
      <div
        class="px-1 m-2 bg-[#F0F0F0] flex items-center justify-center rounded-sm"
      >
        <MagnifyIcon fillColor="#515151" :size="18" class="ml-2" />
        <input
          class="ml-2 w-full py-1.5 px-2.5 bg-[#F0F0F0] text-gray-700 leading-tight outline-none shadow-outline placeholder:text-xs placeholder:text-gray-500"
          type="text"
          autocapitalize="off"
          placeholder="Start a new chat"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import MagnifyIcon from "icons/Magnify.vue";
import AccountGroupIcon from "icons/AccountGroup.vue";
import DotsVerticalIcon from "icons/DotsVertical.vue";
import { useUserStore } from "../../stores/UserStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const { email, firstName, lastName } = storeToRefs(userStore);

const logout = () => {
  userStore.logout();
  router.push("/login");
};
</script>
