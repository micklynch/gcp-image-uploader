<template>
  <div>
    <input v-model="name" placeholder="Enter a name"><button @click="onNameSave">Save</button>
    <br>
    <li v-for="(n, index) in names" v-bind:key="index">
      {{n.name}}
    </li>
    <!-- <button @click="login">Login</button> -->
  </div>
</template>

<script>
import {db, login} from "@/util/db.js";


export default {
  name: "ImageUpload",
  data() {
    return {
      names: [],
      name: ''
    };
  },
  methods: {
    onNameSave() {
      db.collection('names').add({
          name: this.name
      })
      this.name = ''
    },
    login() {
        login.signInWithEmailAndPassword('mick@email.com', 'testtest').then((user) => {
         console.log(user.user.email)
        }).catch((err) => {
          alert(err.message)
        })
    }
  },
 firestore:  {
     names: db.collection('names')  
  }
};
</script>

