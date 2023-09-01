import { Modal } from "flowbite";
import { defineStore } from "pinia";
import { useUserStore } from "./User";

export const useModalStore = defineStore("modal", {
  state: () => ({
    modals: {},
  }),
  actions: {
    getCreateChatModal() {
      const modalId = "createChatModal";

      if (this.modals[modalId]) {
        return this.modals[modalId];
      }

      const $targetEl = document.getElementById(modalId);
      const options = {
        //   placement: "bottom-right",
        backdrop: "static",
        //   backdropClasses:
        //     "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
        closable: true,

        onShow: async () => {
          const userStore = useUserStore();
          await userStore.getChatUsers();
        },
      };
      const modal = new Modal($targetEl, options);
      this.modals[modalId] = modal;

      return modal;
    },
  },
});
