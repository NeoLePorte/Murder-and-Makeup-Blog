<template>
  <div id="post" v-editable="post.blok">
    <div class="post-thumbnail" :style="{backgroundImage: 'url(' + post.image + ')'}"></div>
    <v-spacer></v-spacer>
    <v-layout class="post-content">
      <v-flex>
        <h1>{{ post.title }}</h1>
        <v-spacer></v-spacer>
        <p>{{ post.content }}</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
   async asyncData({store, params}) {
   return {
     post: await store.state.posts
     .filter(post => post['id'] === params.postId)[0]
     }
          
  },
  transition: {
    name: "page",
    enterActiveClass: "animated fadeIn",
    leaveActiveClass: "animated fadeOut",
    duration: 400
  },
  mounted() {
    this.$storyblok.init()
    this.$storyblok.on('change', () => {
      location.reload(true)
    })
  }
}
</script>

<style scoped>
.post-thumbnail {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}
.post-content {
  background-color: whitesmoke;
  color: black;
  padding: 3rem;
}
.post-content p{
  white-space: pre-line;
}
</style>

