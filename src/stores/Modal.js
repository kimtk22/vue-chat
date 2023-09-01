import { Modal } from "flowbite";
import { defineStore } from "pinia";
import { useUserStore } from "./User";

export const useModalStore = defineStore("modal", {
  state: () => ({
    modal: null,
    title: "",
    body: {},
    actions: [],
  }),
  actions: {
    init() {
      const $targetEl = document.getElementById("modalTemplate");
      const options = {
        backdrop: "static",
        closable: true,
      };
      this.modal = new Modal($targetEl, options);
    },
    open(title = "Title", body, actions) {
      this.modal?.show();
      this.title = title;
      this.body = body;
      this.actions = actions;
    },
    close() {
      this.modal?.hide();
      this.title = "";
      this.body = {};
      this.actions = [];
    },
  },
});
