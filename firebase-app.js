// Firebase config for "Deen" project (console.firebase.google.com)
const firebaseConfig = {
  apiKey: "AIzaSyCHd2p__-IncXsdafaJgP7SRPJGXD_0P5o",
  authDomain: "deen-64ba0.firebaseapp.com",
  projectId: "deen-64ba0",
  storageBucket: "deen-64ba0.firebasestorage.app",
  messagingSenderId: "1021038611716",
  appId: "1:1021038611716:web:ab24d3692481b6a4b29451"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
