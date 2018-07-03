<template>
  <v-layout row wrap align-center>
     <v-flex xs12 md12>
      <div class="text-xs-center">
      </div>
    </v-flex>

    <v-flex xs12 md6 offset-md3>
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
            <v-btn :href="`https://reddit.com/submit?url=https://murder-and-makeup.herokuapp.com/${post.id}&title=${post.title}`" target="_blank" rel=noopener icon class="red--text">
              <v-icon medium>fa-reddit</v-icon>
            </v-btn>
            <v-btn :href="`https://twitter.com/home?status=https://murder-and-makeup.herokuapp.com/${post.id}`" target="_blank" rel=noopener icon class="light-blue--text">
              <v-icon medium>fa-twitter</v-icon>
            </v-btn>
            <v-btn :href="`https://www.facebook.com/sharer/sharer.php?u=https://murder-and-makeup.herokuapp.com/${post.id}` " target="_blank" rel=noopener icon class="blue--text text--darken-4">
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
    asyncData({store}) { 
    return {
      posts: store.state.posts
      }
 },
 transition: {
    name: "page",
    enterActiveClass: "animated fadeIn",
    leaveActiveClass: "animated fadeOut",
    duration: 400
  },
}
</script>
