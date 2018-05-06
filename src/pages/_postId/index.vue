<template>
  <div id="post">
    <div class="post-thumbnail"></div>
    <h1>God bless em</h1>
    <p></p>
  </div>
    

</template>

<script>
export default {
   async asyncData({store, params}) {
   await store.dispatch('asyncGetSinglePost', {id: params.postId})
    console.log("post is: " + store.state.post)
    return {id : store.state.post}
  }
}
</script>
