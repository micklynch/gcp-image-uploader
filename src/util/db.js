import firebase from 'firebase'

// Get a Firestore instance
export default firebase
  .initializeApp({ 
      projectId: 'image-uploader-242819'
    })
  .firestore()
