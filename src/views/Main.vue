<script setup>
</script>

<template>
  <v-row>
    <v-col>Неисправное оборудование</v-col>
    <v-col>Остановленные партии</v-col>
  </v-row>
  <v-row>
    <v-col>Выполнение СЗ</v-col>
    <v-col>Выполнение РЦ</v-col>
    <v-col>Выработка</v-col>
  </v-row>
  <v-row>
    <v-col>Выполнение плана</v-col>
    <v-col>Точно в срок</v-col>
  </v-row>
  <v-row>
    <v-col>Движение партий</v-col>
    <v-col>
      <h1><router-link to="/scanner">QR</router-link></h1>
    </v-col>
  </v-row>
</template>
<style scoped>
</style>