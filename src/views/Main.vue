<script setup>
</script>

<template>
  <v-row no-gutters class="text-center font-weight-bold">
    <v-col cols="12" class="mb-1">
      <v-hover v-slot="{ isHovering, props }">
        <v-card :elevation="isHovering ? 3 : 1" v-bind="props">
          <v-card-content>УХП</v-card-content>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" class="mb-1">
      <v-hover v-slot="{ isHovering, props }">
        <v-card :elevation="isHovering ? 3 : 1" v-bind="props">
          <v-card-content>Планирование</v-card-content>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" class="mb-1">
     <v-hover v-slot="{ isHovering, props }">
        <v-card :elevation="isHovering ? 3 : 1" v-bind="props">
          <v-card-content>Статус производства</v-card-content>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" class="mb-1">
     <v-hover v-slot="{ isHovering, props }">
        <v-card :elevation="isHovering ? 3 : 1" v-bind="props">
          <v-card-content>Отчеты</v-card-content>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" class="mb-1">
     <v-hover v-slot="{ isHovering, props }">
        <v-card :elevation="isHovering ? 3 : 1" v-bind="props">
          <v-card-content>...</v-card-content>
        </v-card>
      </v-hover>
    </v-col>

  </v-row>
</template>

