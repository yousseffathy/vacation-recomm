<template>
  <v-app style="background-color: #1F2933">
    <v-app-bar 
      app
      dense
      color="#3E4C59">
      <v-toolbar-title style="color: white">
        Vacation Recommendation
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        color="white"
      >
        <v-icon>mdi-web</v-icon>
      </v-btn>
      <v-btn
        icon
        color="white"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
        icon
        color="white"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
    <slot/>
    </v-main>
  </v-app>
</template>



