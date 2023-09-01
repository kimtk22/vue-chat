import { defineStore } from "pinia";
import { db } from "../firebase/init";
import { useAccountStore } from "./Account";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [],
  }),
  actions: {
    async getChatUsers() {
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where(documentId(), "!=", useAccountStore().id)
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const newUsers = [];
        querySnapshot.forEach((doc) => {
          const user = {
            ...doc.data(),
            id: doc.id,
          };
          newUsers.push(user);
        });

        this.users = newUsers;
      }
    },
  },
});
