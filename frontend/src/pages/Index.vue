<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col md="6">
            <v-card
              flat
              color="transparent"
            >
              <v-subheader>Min and max range slider</v-subheader>

              <v-card-text>
                <v-row>
                  <v-col class="px-4">
                    <v-range-slider
                      v-model="range"
                      :max="max"
                      :min="min"
                      hide-details
                      class="align-center"
                    >
                      <template v-slot:prepend>
                        <v-text-field
                          :value="range[0]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          style="width: 60px"
                          @change="$set(range, 0, $event)"
                        ></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-text-field
                          :value="range[1]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          style="width: 60px"
                          @change="$set(range, 1, $event)"
                        ></v-text-field>
                      </template>
                    </v-range-slider>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col sm="8" md="4">
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
          </v-col>
          <v-col sm="4" md="2">
            <v-btn>
              search
            </v-btn>
          </v-col>
      </v-row>
    </v-container>
    
  </Layout>
</template>

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
      min: -20,
      max: 60,
      range: [0, 25],
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


