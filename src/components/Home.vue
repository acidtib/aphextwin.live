<template>
  <v-container fluid grid-list-md text-md-left>
    <v-layout row wrap>

      <v-flex xs12 md6>
        <v-card>
          <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/543596490&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </v-card>
      </v-flex>

      <v-flex xs12 md6>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">What is this site?</h3>
              <div>
                <a href="https://www.residentadvisor.net/news/43146" target="_blank">RA News</a> recently reported on a rare set of Aphex Twin that was secretly recorded in the 90s and recently uploaded to <a href="https://soundcloud.com/phlite/aphex-twin-live-at-limelight-nyc-1991-or-1992" target="_blank">soundcloud</a>.
                The set has already reached soundclouds maximum download, so i made this site real quick to archive and share the set.
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Tracklist</h3>
              <div>
                track list will go here :)
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      set: {
        title: 'Aphex Twin Live at Limelight NYC MID 1990s'
      }
    })
  }
</script>

<style scoped lang="scss">

</style>
