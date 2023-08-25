<template>
  <div class="flex sm:items-center justify-between border-gray-200">
    <div class="relative flex items-center space-x-4">
      <div class="relative">
        <span class="absolute text-green-500 right-0 bottom-0">
          <svg width="20" height="20">
            <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
          </svg>
        </span>
        <img
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt=""
          class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
        />
      </div>
      <div class="flex flex-col leading-tight">
        <div class="text-2xl mt-1 flex items-center">
          <span class="text-gray-700 mr-3">Anderson Vanhron</span>
        </div>
        <span class="text-lg text-gray-600">Junior Developer</span>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <IconButton type="magnify" />
      <IconButton type="heart" />
      <IconButton type="bell" />
    </div>
  </div>
</template>

<script setup>
import IconButton from "./IconButton.vue";
</script>
