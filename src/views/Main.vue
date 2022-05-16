<script setup>
</script>

<template>
  <v-container class="text-center h-100 w-100">
    <v-row class="bordored h-25 d-flex justify-center mt-2 align-center">
      
      <v-col cols="4">
        <v-card >
          <v-card-content>Неисправное оборудование</v-card-content>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-content>Остановленные партии</v-card-content>
        </v-card>
      </v-col>
    </v-row>
    <v-row class=" bordored d-flex justify-center align-center h-25">
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
    <v-row class="h-50 d-flex justify-center align-end">
      <v-col>
        <v-card>
          <v-card-content>Движение партий</v-card-content>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          ><v-card-content><h4><router-link to="/scanner">QR</router-link></h4></v-card-content></v-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<style  lang="scss" scoped>
.v-card-content{
  font-size: 18px;

  @media (max-width: 768px) {
    font-size:10px;
  }
}
// .bordored{
//   border: 4px solid #2e0ffa;
// }
</style>