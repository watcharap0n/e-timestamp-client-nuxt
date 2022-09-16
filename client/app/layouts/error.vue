<template>
  <v-container>
    <v-row align="center" justify="center">
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
                   to="/validate"
            >
              Back to our site
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['error'],
  layout: 'empty'
}
</script>

