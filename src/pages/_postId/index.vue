<template>
  <div id="post">
    <div class="post-thumbnail"></div>
    <h1>{{post.title}}</h1>
    <p></p>
  </div>
    

</template>

<script>
export default {
   async asyncData({store, params}) {
   return {
     post: await store.state.posts
     .filter((post) => post['id'] === params.postId)[0]
     }
  }
}
</script>
