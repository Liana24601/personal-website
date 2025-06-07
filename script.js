const firebaseConfig = {
  apiKey: "AIzaSyCA9n2NhJys_1F3BCcMot2uaKZBWPfvCY8",
  authDomain: "personal-website-a14c8.firebaseapp.com",
  databaseURL: "https://personal-website-a14c8-default-rtdb.firebaseio.com",
  projectId: "personal-website-a14c8",
  storageBucket: "personal-website-a14c8.firebasestorage.app",
  messagingSenderId: "118528871588",
  appId: "1:118528871588:web:122c6c1bb6b6de20d8aa31"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function likeReview(bookId) {
  const likesRef = ref(db, 'likes/' + bookId);
  runTransaction(likesRef, current => (current || 0) + 1);
}

function displayLikes(bookId, elementId) {
  const likesRef = ref(db, 'likes/' + bookId);
  onValue(likesRef, snapshot => {
    const count = snapshot.val() || 0;
    const element = document.getElementById(elementId);
    if (element) element.innerText = count;
  });
}

