import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
      apiKey: "AIzaSyApVCLVBytzXhpWSHwvQOXRW1wL2zKslJg",
      authDomain: "myyhowto.firebaseapp.com",
      databaseURL: "https://myyhowto-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "myyhowto",
      storageBucket: "myyhowto.appspot.com",
      messagingSenderId: "973861774466",
      appId: "1:973861774466:web:6cf988c18e3a9a6cebc09b",
      measurementId: "G-90THPLG5XM"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({})
}
const fireDb = firebase.firestore()
export {fireDb}