<script setup>
</script>

<template>
  <v-container class="text-center h-100 w-100" no-gutters>
    <div class="h-50">
      <v-row class="bordored d-flex justify-center mt-2 align-center">
        <v-col cols="6">
          <v-card>
            <v-img
              src="../assets/Icons/settings.png"
              alt="Фотография"
              height="100"
              width="100"
            ></v-img>
            
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-content>Остановленные партии</v-card-content>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="bordored d-flex justify-center align-center">
        <v-col cols="4">
          <v-card>
            <v-card-content>Выполнение СЗ</v-card-content>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-content>Выполнение РЦ</v-card-content>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-content>Выработка</v-card-content>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-content>Выполнение плана</v-card-content>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-content>Точно в срок</v-card-content>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-row class="d-flex justify-center align-end h-50" dense>
      <v-col cols="6">
        <v-card>
          <v-card-content>Движение партий</v-card-content>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          ><v-card-content
            ><h4>
              <router-link to="/scanner">QR</router-link>
            </h4></v-card-content
          ></v-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<style  lang="scss" scoped>
</style>