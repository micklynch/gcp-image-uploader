<template>
    <div>
        <input type="file" @change="onFileSelected">
    </div>
</template>

<script>

export default {
    name: 'ImageUpload',
    data () {
        return {
            selectedFile: null,
        }
    },
    methods: {
        onFileSelected (event) {            
            this.selectedFile = event.target.files[0]
            this.$firestore.images.add({
                name: this.selectedFile.name
            })
        },
    }
}
</script>

