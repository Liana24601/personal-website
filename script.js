const firebaseConfig = {
  apiKey: "AIzaSyCA9n2NhJys_1F3BCcMot2uaKZBWPfvCY8",
  authDomain: "personal-website-a14c8.firebaseapp.com",
  projectId: "personal-website-a14c8",
  storageBucket: "personal-website-a14c8.firebasestorage.app",
  messagingSenderId: "118528871588",
  appId: "1:118528871588:web:122c6c1bb6b6de20d8aa31"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function likeReview(bookId) {
  const countRef = db.ref('likes/' + bookId);
  countRef.transaction(current => (current || 0) + 1);
}

function displayLikes(bookId, elementId) {
  const countRef = db.ref('likes/' + bookId);
  countRef.on('value', snapshot => {
    document.getElementById(elementId).innerText = snapshot.val() || 0;
  });
}
