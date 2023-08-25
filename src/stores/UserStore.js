import { defineStore } from "pinia";
import { googleTokenLogin } from "vue3-google-login";
import axios from "axios";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase/init";

export const useUserStore = defineStore("user", {
  persist: true,
  state: () => ({
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    picture: "",
  }),
  actions: {
    async googleLogin() {
      try {
        const { access_token } = await googleTokenLogin();

        // Validate access token
        const { data } = await axios.post("http://localhost:3000/validation", {
          token: access_token,
        });

        this._setState(data);

        const docRef = doc(db, "users", this.id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          // setDoc to firestore
          await setDoc(docRef, {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            picture: this.picture,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    async login(email, password) {
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("email", "==", email),
        where("password", "==", password)
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      }
    },

    logout() {
      this.$reset();
    },

    _setState({ sub, email, family_name, given_name, picture }) {
      this.id = sub;
      this.email = email;
      this.firstName = family_name;
      this.lastName = given_name;
      this.picture = picture;
    },
  },
});
