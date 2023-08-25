<template>
  <div :class="isMe ? 'justify-end' : ''" class="flex items-end">
    <div
      :class="isMe ? 'order-1 items-end' : 'order-2 items-start'"
      class="flex flex-col space-y-2 text-xs max-w-xs mx-2"
    >
      <div>
        <span
          :class="
            isMe
              ? 'rounded-br-none bg-blue-600 text-white'
              : 'rounded-bl-none bg-gray-300 text-gray-600'
          "
          class="px-4 py-2 rounded-lg inline-block"
          >{{ content }}</span
        >
      </div>
    </div>
    <img
      :src="imgPath"
      alt="My profile"
      :class="isMe ? 'order-2' : 'order-1'"
      class="w-10 rounded-full"
    />
  </div>
</template>

<script setup>
defineProps({
  imgPath: String,
  content: String,
  isMe: Boolean,
});
</script>
