import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8TsBiGut8NukqAlQW_FyBbXnCNvLAxKU",
  authDomain: "auth-moha-milon-e45c2.firebaseapp.com",
  projectId: "auth-moha-milon-e45c2",
  storageBucket: "auth-moha-milon-e45c2.appspot.com",
  messagingSenderId: "592756158833",
  appId: "1:592756158833:web:cf919756850370100c46d0"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage for React Native
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
