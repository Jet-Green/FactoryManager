<script setup>
</script>

<template>
  <v-container class="text-center h-100 w-100" no-gutters>
    <div class="h-50">
      <v-row class="bordored d-flex justify-center mt-2 align-center mb-6">
        <v-col cols="4">
          <v-card class="pa-4">
            <v-badge color="red" content="4"
              ><img src="../assets/Icons/settings.png" alt="photo" height="50"
            /></v-badge>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-4">
            <v-badge color="red" content="22"
              ><img
                src="../assets/Icons/search-alt.png"
                alt="photo"
                height="50"
            /></v-badge>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="bordored d-flex justify-center align-center">
        <v-col cols="4">
          <v-card class="pa-4">
            <v-badge color="yellow" content="57%"
              ><img
                src="../assets/Icons/list-check.png"
                alt="photo"
                height="50"
            /></v-badge>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-4">
            <v-badge color="yellow" content="67%"
              ><img
                src="../assets/Icons/chart-histogram.png"
                alt="photo"
                height="50"
            /></v-badge>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-4">
            <v-badge color="yellow" content="72%"
              ><img
                src="../assets/Icons/time-check.png"
                alt="photo"
                height="50"
            /></v-badge>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-4">
            <v-badge color="green" content="85%">
              <img src="../assets/Icons/time-fast.png" alt="photo" height="50"
            /></v-badge>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-4">
            <v-badge color="green" content="98%">
              <img
                src="../assets/Icons/calendar-check.png"
                alt="photo"
                height="50"
            /></v-badge>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-row class="d-flex justify-center align-end h-50" dense>
      <v-col cols="6">
        <v-card class="pa-4">
          <img src="../assets/Icons/map-marker.png" alt="photo" height="50" />
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-4">
          <router-link to="/scanner"
            ><img src="../assets/Icons/transform.png" alt="photo" height="50"
          /></router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style  lang="scss" scoped>
.bordored {
  border: 4px solid #3369a3;
}
</style>