<template>
  <v-app dark>
   <v-parallax class="default_parallax" fixed src="https://a.storyblok.com/f/44437/1280x720/167c96e5ce/noir-dame.jpg" height="350">
      <v-layout column lg align-start justify-center>
        <!-- <a><h1 class="white--text">Murder & Makeup</h1></a>
        <h4 class="white--text">Murder, Mystery, and Makeup</h4> -->
      </v-layout>
    </v-parallax>
    <!-- <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar> -->
    <v-content>
      <v-container class="container">
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Archive</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
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
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
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

