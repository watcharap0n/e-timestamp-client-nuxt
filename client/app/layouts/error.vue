<template>
  <v-container>
    <div class="container">
      <v-row v-if="error.statusCode === 404" align="center" justify="center">
        <div class="p-10">
          <v-card>
            <v-card-title>Page Not Found</v-card-title>
            <v-card-text>
              Looks like you've followed a broken link or entered <br>
              a URL that doesn't exits on site
            </v-card-text>
            <v-card-actions>
              <v-btn text
                     color="info"
                     to="/timestamp"
              >
                Back to our site
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-row>

      <v-row v-else>
        <h1>An error occurred</h1>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ['error'],
  layout: 'empty',
}
</script>

