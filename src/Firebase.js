import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHmxpgboAmwMTR3CxD-Pb4pj7uvZqah5E",
  authDomain: "transgo-627e0.firebaseapp.com",
  projectId: "transgo-627e0",
  storageBucket: "transgo-627e0.firebasestorage.app",
  messagingSenderId: "598290972185",
  appId: "1:598290972185:web:4aa5e5f31e0f2dacfeb488"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };