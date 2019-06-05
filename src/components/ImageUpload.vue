<template>
  <div>
    <input type="file" @change="onFileSelected">
  </div>
</template>

<script>
import db from "@/util/db.js";

export default {
  name: "ImageUpload",
  data() {
    return {
      selectedFile: null
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      // db.collection('image-store').add({
      //     name: this.selectedFile.name
      // })
      db.collection("image-store")
        .get()
        .then(querySnapshot => {
          const documents = querySnapshot.map(doc => doc.data());
          // do something with documents
          console.log(documents);
        });
    }
  }
};
</script>

