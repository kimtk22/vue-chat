<template>
  <button
    type="button"
    class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
  >
    <component :is="icon" />
  </button>
</template>

<script setup>
import MagnifyIcon from "icons/Magnify.vue";
import HeartOutlineIcon from "icons/HeartOutline.vue";
import BellOutlineIcon from "icons/BellOutline.vue";

const { type } = defineProps({
  type: String,
});

const iconMap = {
  magnify: MagnifyIcon,
  heart: HeartOutlineIcon,
  bell: BellOutlineIcon,
};

const icon = iconMap[type];
</script>
