import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// ----- firebase config -------
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyANiN8PTkZb7RRUqYYWLoncFO-8ZC0rdwk",
  authDomain: "cecreservas-1237e.firebaseapp.com",
  projectId: "cecreservas-1237e",
  storageBucket: "cecreservas-1237e.appspot.com",
  messagingSenderId: "852907542670",
  appId: "1:852907542670:web:3c4112a1038c4025c7a1df",
  measurementId: "G-PKFHWZKG09"
};

initializeApp(firebaseConfig);
// ------ firebase -------

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
