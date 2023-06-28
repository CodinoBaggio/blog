// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAe9j_a03Cf9fooE4ghRLt3L4fi1pdOgw',
  authDomain: 'blog-631b8.firebaseapp.com',
  projectId: 'blog-631b8',
  storageBucket: 'blog-631b8.appspot.com',
  messagingSenderId: '754213166431',
  appId: '1:754213166431:web:d29c0c973a45033459eaea',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
