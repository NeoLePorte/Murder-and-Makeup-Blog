<template>
  <v-app dark>
   <v-parallax class="default_parallax" fixed src="https://a.storyblok.com/f/44437/1280x720/167c96e5ce/noir-dame.jpg" height="150 ">
      <v-layout column lg align-start justify-center>
        <nuxt-link to="/"><h1 class="white--text">Murder & Makeup</h1></nuxt-link>
        <h4 class="white--text">Murder, Mystery, and Makeup</h4>
      </v-layout>
      <no-ssr>
        <v-layout justify-space-around >
          <a 
          href="javascript:;" 
          class="body-2"><nuxt-link 
          to="/">
          Home
          </nuxt-link>
          </a>
          <a  href="javascript:;" class="body-2"><nuxt-link 
          to="/about">
          About
          </nuxt-link></a>
          <a  href="javascript:;" class="body-2">Other</a>
        </v-layout>
        </no-ssr>
    </v-parallax>
    <v-content>
      <v-container class="container">
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Murder & Makeup'
      }
    }
  }
</script>

<style>
/* .container {
  padding-top: 0px;
} */
</style>

