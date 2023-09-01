import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { defineStore } from "pinia";
import { db } from "../firebase/init";

export const useChatRoomStore = defineStore("chatRoomStore", {
  state: () => ({
    chatRooms: [
      {
        title: "",
        users: [],
        messages: [],
      },
    ],
  }),
  actions: {
    async createChatRooms(title, users) {
      const chatRoom = {
        title: "",
        users: [],
        messages: [],
      };

      const docRef = await addDoc(collection(db, "chatRoom"), chatRoom);
      chatRoom[id] = docRef.id;

      this.chatRooms.push(chatRoom);
    },

    onGetChatRooms() {
      const q = query(collection(db, "chatRoom"));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        });
      });
    },
  },
});
