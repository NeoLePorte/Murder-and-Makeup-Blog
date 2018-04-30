<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <ul>
      <li v-for="post in posts" :key='post.id'>
        {{ post.content }}
      </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
import flamelinkApp from '~/plugins/index.js'
export default {
   
  async asyncData() {
    const posts = await flamelinkApp.content.get('posts');
    console.log(posts[1525054995990]);
    return {
      posts
    }
  }
}
</script>
