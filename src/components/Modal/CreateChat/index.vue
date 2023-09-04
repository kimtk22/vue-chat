<template>
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
    <UserInfo />
  </div>
</template>

<script setup>
import MagnifyIcon from "icons/Magnify.vue";
import UserInfo from "./UserInfo.vue";
</script>
