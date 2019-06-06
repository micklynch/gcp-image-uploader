import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export default firebase
    .initializeApp({
        apiKey: 'AIzaSyC4okCUrfZhKfPd0JfGXWdTZLNSBPaJmQM',
        authDomain: 'image-uploader-242819.firebaseapp.com',
        databaseURL: 'https://image-uploader-242819.firebaseio.com',
        projectId: 'image-uploader-242819',
        storageBucket: 'image-uploader-242819.appspot.com',
        messagingSenderId: '442782485844',
        appId: '1:442782485844:web:0d1384ea9fd792ab'
    })
    .firestore()
