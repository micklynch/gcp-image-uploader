<template>
  <div id="app">
    <p>Welcome to the name saver</p>
    <ImageUpload />
  </div>
</template>

<script>
import ImageUpload from '@/components/ImageUpload.vue'

export default {
  name: 'app',
  components: {
    ImageUpload
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
