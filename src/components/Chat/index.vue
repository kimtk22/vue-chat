<template>
  <div class="flex-1 p-2 sm:p-6 flex flex-col h-screen">
    <div class="py-3 border-b-2">
      <ChatViewHeader />
    </div>

    <div
      id="messages"
      class="flex flex-col space-y-4 p-3 overflow-y-auto h-[90vh]"
    >
      <Message
        content="zzzz"
        img-path="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
      />
    </div>
    <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <ChatViewFooter />
    </div>
  </div>
</template>

<script setup>
import Message from "./Message.vue";
import ChatViewHeader from "./ChatViewHeader.vue";
import ChatViewFooter from "./ChatViewFooter.vue";
import { onMounted } from "vue";

onMounted(() => {
  const el = document.getElementById("messages");
  el.scrollTop = el.scrollHeight;
});
</script>
<style scoped>
#messages::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

#messages::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

#messages::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

#messages::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}
</style>
