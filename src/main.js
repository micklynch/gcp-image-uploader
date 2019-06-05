import Vue from 'vue'
import App from './App.vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'

require('firebase/firestore')
 
Vue.use(VueFirestore)
var firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyC4okCUrfZhKfPd0JfGXWdTZLNSBPaJmQM",
  authDomain: "image-uploader-242819.firebaseapp.com",
  databaseURL: "https://image-uploader-242819.firebaseio.com",
  projectId: "image-uploader-242819",
  storageBucket: "image-uploader-242819.appspot.com",
  messagingSenderId: "442782485844",
  appId: "1:442782485844:web:0d1384ea9fd792ab"
})

const firestore = firebaseApp.firestore();


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  firestore () {
    return {
        // Collection
        images: firestore.collection('image-store'),
        objects: true,
        resolve: (data) => {
            // collection is resolved
            console.log(data, " was uploaded")
        },
        reject: (err) => {
            // collection is rejected
            console.log(err, " was encountered")
        }
    }
  }
}).$mount('#app')
