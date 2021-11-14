import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD34IzGkqfjQfkuctMCXINwYWWBJK47UZE',
  authDomain: 'app-financas-de42e.firebaseapp.com',
  databaseURL: 'https://app-financas-de42e-default-rtdb.firebaseio.com',
  projectId: 'app-financas-de42e',
  storageBucket: 'app-financas-de42e.appspot.com',
  messagingSenderId: '422542670733',
  appId: '1:422542670733:web:032d0004a77f6d08105bc4',
  measurementId: 'G-CE1R4T0QR7',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
