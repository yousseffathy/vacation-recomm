<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        Vacation Recommendation
      </v-toolbar-title>
      <v-select
      class="ml-4"
      style="max-width: 300px;"
      dense
      hide-details
      v-model="selectedContinents"
      :items="Continents"
      label="Continents"
      multiple
    >
    <template v-slot:prepend-item>
        <v-list-item
          ripple
          @mousedown.prevent
          @click="toggle"
        >
          <v-list-item-action>
            <v-icon :color="selectedContinents.length > 0 ? 'indigo darken-4' : ''">
              {{ icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Select All
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-2"></v-divider>
      </template>
      </v-select>
      <v-spacer />
      <v-btn>Search</v-btn>
    </v-app-bar>
    <v-main>
    <slot/>
    </v-main>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  export default {
    data: () => ({
      Continents: [
        "Africa",
        "Asia",
        "Australia/Oceania",
        "Europe",
        "North America",
        "South America",
        
      ],
      selectedContinents: [],
    }),
    computed: {
      likesAllContinents () {
        return this.selectedContinents.length === this.Continents.length
      },
      likesSomeContinents () {
        return this.selectedContinents.length > 0 && !this.likesAllFruit
      },
      icon () {
        if (this.likesAllContinents) return 'mdi-close-box'
        if (this.likesSomeContinents) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline'
      },
    },
    methods: {
      toggle () {
        this.$nextTick(() => {
          if (this.likesAllContinents) {
            this.selectedContinents = []
          } else {
            this.selectedContinents = this.Continents.slice()
          }
        })
      },
    },
  }
</script>
