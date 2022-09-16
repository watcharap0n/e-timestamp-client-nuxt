<template>
  <v-app style="font-family: 'Prompt', sans-serif;" class="bg-gray-100 h-auto">

    <v-card tile
            flat
            dark
            color="black"
    >
      <v-toolbar>

        <v-menu bottom
                min-width="250px"
                rounded
                offset-y
        >
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-btn
                    depressed
                    rounded
                    text
                    href="https://exkasan.com"
                >
                  หน้าหลัก
                </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn
                    depressed
                    rounded
                    text
                    href="/validate"
                >
                  การตรวจสอบเอกสาร
                </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn
                    depressed
                    rounded
                    text
                    href="/timestamp"
                >
                  การประทับรับรองเวลา
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>

        <a href="https://exkasan.com"
           class="text-decoration-none"
        >
          <v-toolbar-title style="color: #D0DA52">
            EXKASAN
          </v-toolbar-title>
        </a>
        <v-spacer></v-spacer>

        <v-menu bottom
                min-width="250px"
                rounded
                offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn icon
                   v-on="on"
            >
              <v-avatar
                  :hidden="showIcon"
                  v-if="channel === 'google'">
                <img
                    :src="user.picture"
                    alt="src"
                >
              </v-avatar>

              <v-avatar
                  :hidden="showIcon"
                  v-else>
                <img
                    :src="user.pictureUrl"
                    alt="src"
                >
              </v-avatar>
            </v-btn>
          </template>

          <v-card>
            <v-list-item-content class="justify-center" v-if="channel === 'google'">
              <div class="mx-auto text-center">
                <v-avatar>
                  <img
                      :src="user.picture"
                      alt="src"
                  >
                </v-avatar>
                <h3>{{ user.name }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>

                <v-chip
                    color="orange"
                    label
                    outlined
                    x-small
                    @click="showUID = !showUID"
                >
                  <div v-if="showUID">{{ user.sub }}</div>
                  <div v-else>
                    UID
                  </div>
                </v-chip>

                <v-divider class="my-3"></v-divider>
                <v-btn
                    depressed
                    rounded
                    text
                    @click="logout"
                >
                  ออกจากระบบ
                </v-btn>
              </div>
            </v-list-item-content>

            <v-list-item-content class="justify-center" v-else-if="channel === 'line'">
              <div class="mx-auto text-center">
                <v-avatar>
                  <img
                      :src="user.pictureUrl"
                      alt="src"
                  >
                </v-avatar>
                <h3>{{ user.displayName }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>

                <v-chip
                    color="orange"
                    label
                    outlined
                    x-small
                    @click="showUID = !showUID"
                >
                  <div v-if="showUID">{{ user.userId }}</div>
                  <div v-else>
                    UID
                  </div>
                </v-chip>

                <v-divider class="my-3"></v-divider>
                <v-btn
                    depressed
                    rounded
                    text
                    @click="logout"
                >
                  ออกจากระบบ
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>


        </v-menu>
      </v-toolbar>
    </v-card>

    <div>
      <Nuxt
          @authUser="authUser"
          @issue="issue"
      />
    </div>

    <Snackbar/>
  </v-app>
</template>

<script>
import Snackbar from "@/components/Snackbar";
import liff from '@line/liff';

export default {
  data() {
    return {
      showIcon: true,
      showUID: false,
      channel: '',
      user: {},
    }
  },

  created() {
    this.$nuxt.$on('session', data => {
      this.showIcon = data
    })
  },

  components: {
    Snackbar
  },

  methods: {
    issue(ch) {
      this.channel = ch
    },

    authUser(user) {
      this.user = user
    },


    async logout() {
      await this.$auth.logout();
      await liff.logout();
      location.reload();
    },
  }
}
</script>