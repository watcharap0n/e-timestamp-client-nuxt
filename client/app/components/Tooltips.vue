<template>
  <v-menu
      open-on-hover
      right
      offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-icon
          style="margin-top: -10px"
          x-small
          :color="color"
          dark
          v-bind="on"
          v-on="on"
      >
        mdi-information
      </v-icon>
    </template>

    <v-card flat>
      <v-card-title style="color: #187331">
        <v-icon
            left
            :color="colorIcon">mdi-checkbox-marked-circle
        </v-icon>
        <div :style="`color: ${colorHeader}`">
          {{ cardHeader }}
        </div>
      </v-card-title>
      <v-card-text>
        {{ cardText }} Exkasan หรือออกโดยผู้ให้บริการที่อยู่ใน <br> <a
          href="https://helpx.adobe.com/th_th/acrobat/kb/approved-trust-list1.html">Adobe Approved Trusted List (AATL)</a> และ
        <a href="https://esignature.ec.europa.eu/efda/tl-browser/#/screen/home">European
          Union Trusted List (EUTL) </a><br> หรืออื่นๆที่ปรากฏในระบบ Exkasan
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: {
    colorHeader: {
      default: '#187331',
      type: String,
    },
    colorIcon: {
      default: '#187331',
      type: String
    },
    color: {
      default: 'success',
      type: String,
    },
    icon: {
      type: String,
      default: 'mdi-checkbox-marked-circle',
    },

    cardText: {
      required: true,
      type: String
    },
    cardHeader: {
      required: true,
      type: String
    },
  }
}
</script>

