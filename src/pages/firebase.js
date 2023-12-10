import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC1t-h2ckXjBe3E5fwJyGIgMq5peQjIVeU",
    authDomain: "campus-hub-e96e1.firebaseapp.com",
    projectId: "campus-hub-e96e1",
    storageBucket: "campus-hub-e96e1.appspot.com",
    messagingSenderId: "362772631309",
    appId: "1:362772631309:web:1c154024ebf77f26d76a44",
    measurementId: "G-30Z5X0SR58"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;