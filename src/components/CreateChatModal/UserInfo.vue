<template>
  <a
    @click="selectUser"
    href="#"
    class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
  >
    <checkCircleIcon v-if="isSelected" fillColor="#3F83F8" />
    <radioboxBlankIcon v-else />
    <img :src="picture" class="rounded-full ml-3 w-12" />
    <span class="flex-1 ml-3 whitespace-nowrap">{{ userName }}</span>
  </a>
</template>

<script setup>
import { ref } from "vue";
import checkCircleIcon from "icons/checkCircle.vue";
import radioboxBlankIcon from "icons/radioboxBlank.vue";

defineProps(["userName", "picture"]);

const isSelected = ref(false);

const selectUser = () => {
  isSelected.value = !isSelected.value;
};
</script>

<style lang="scss" scoped></style>
