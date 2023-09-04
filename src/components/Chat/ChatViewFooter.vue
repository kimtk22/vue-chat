<template>
  <div class="relative flex">
    <span class="absolute inset-y-0 flex items-center">
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
      >
        <MicrophoneIcon />
      </button>
    </span>
    <input
      type="text"
      placeholder="내용을 입력하세요."
      class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-white rounded-md py-3"
    />
    <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
      >
        <PaperclipIcon />
      </button>
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
      >
        <CameraOutlineIcon />
      </button>
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
      >
        <EmoticonHappyOutlineIcon />
      </button>
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
      >
        <span class="font-bold">Send</span>
        <SendIcon class="ml-3" />
      </button>
    </div>
  </div>
</template>

<script setup>
import MicrophoneIcon from "icons/Microphone.vue";
import PaperclipIcon from "icons/Paperclip.vue";
import CameraOutlineIcon from "icons/CameraOutline.vue";
import EmoticonHappyOutlineIcon from "icons/EmoticonHappyOutline.vue";
import SendIcon from "icons/Send.vue";
</script>

<style lang="scss" scoped></style>
