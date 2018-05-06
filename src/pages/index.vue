<template>
  <v-layout row wrap align-center>
     <v-flex xs12 md4>
      <div class="text-xs-center">
        <v-avatar size="120px">
          <img
            class="img-circle elevation-7 mb-1"
            src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/30742928_1621424011287362_6264051029159968768_n.jpg?_nc_cat=0&oh=d888497aa72ebbe7a8406812a0c521fb&oe=5B51DE95"
          >
        </v-avatar>
        <div class="headline">Lexie <span style="font-weight:bold">Quinn</span></div>
        <div class="subheading text-xs-center grey--text pt-1 pb-3">Lorem ipsum dolor sit amet</div>
        <no-ssr>
        <v-layout justify-space-between>
          <a 
          href="javascript:;" 
          class="body-2"><nuxt-link 
          to="/">
          Home
          </nuxt-link>
          </a>
          <a href="javascript:;" class="body-2">About</a>
          <a href="javascript:;" class="body-2">Other</a>
        </v-layout>
        </no-ssr>
      </div>
    </v-flex>

    <v-flex xs12 md5 offset-md2>
      <div v-for="post in posts" :key="post.title">
        <v-card class="my-3" hover>
          <v-card-media
            class="pink--text"
            height="170px"
            :src="post.image"
          >
            <v-container fill-height fluid>
              <v-layout>
                <v-flex xs12 align-baseline d-flex>
                  <span class="headline">{{ post.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-text>
            {{ post.summary }}
          </v-card-text>
          <v-card-actions>
            <v-btn icon class="red--text">
              <v-icon medium>fa-reddit</v-icon>
            </v-btn>
            <v-btn icon class="light-blue--text">
              <v-icon medium>fa-twitter</v-icon>
            </v-btn>
            <v-btn icon class="blue--text text--darken-4">
              <v-icon medium>fa-facebook</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat class="blue--text" :to="post.id">
              Read More
              </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
   async asyncData({store}) { 
    await store.dispatch('asyncGetPosts')
    return {posts: store.state.posts}
 }
}
</script>
