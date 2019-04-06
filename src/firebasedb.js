import firebase from 'firebase';


  // Initialize Firebase
const config = {
  apiKey: 'AIzaSyDL9UecyKmRkJ8o8FIotMlbVgg4jXIuLM0',
  authDomain: 'cs52-lab3-79dec.firebaseapp.com',
  databaseURL: 'https://cs52-lab3-79dec.firebaseio.com',
  projectId: 'cs52-lab3-79dec',
  storageBucket: 'cs52-lab3-79dec.appspot.com',
  messagingSenderId: '699455235064',
};
firebase.initializeApp(config);

const database = firebase.database();

export function fetchNotes(callback) {
  database.ref('notes').on('value', (snapshot) => {
    callback(snapshot.val());
    // console.log(snapshot.val());
  });
}

export function create(title) {
  // A post entry
  const postData = { title };
  // Get a key for a new post
  const newPostKey = database.ref('notes').push().key;
  // Write the new post's data simultaneously in the posts list and the user's post list.
  return database.ref(`notes/${newPostKey}`).set(postData);
  // ref(`notes`).child(newPostKey)
}

export function update(id, notes) {
  database.ref('notes').child(id).set(notes);
}

export function remove(id) {
  database.ref('notes').child(id).remove(); // update similarly
    // push doesn't take an id, but returns a new auto-generated one
}
