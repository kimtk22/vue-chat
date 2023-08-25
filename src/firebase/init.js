import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, //"AIzaSyAQFtcwY13FgfBVJt4_I-Xe9ThyHvJPIfQ"
  authDomain: "vuechat-c4508.firebaseapp.com",
  projectId: "vuechat-c4508",
  storageBucket: "vuechat-c4508.appspot.com",
  messagingSenderId: "237201451091",
  appId: "1:237201451091:web:a7fa291dcd34368357fea6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
