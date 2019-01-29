<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ set.title }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        href="https://aphex.sfo2.digitaloceanspaces.com/Aphex%20Twin%20Live%20at%20Limelight%20NYC%20MID%201990s.mp3"
        target="_blank"
      >
        Download Set
        <v-icon right dark>cloud_download</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      set: {
        title: 'Aphex Twin Live at Limelight NYC MID 1990s'
      }
    }
  }
}
</script>
