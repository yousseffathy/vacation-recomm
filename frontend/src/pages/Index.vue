<template>
  <Layout>
    <v-parallax class="mb-16" dark src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg">
      <v-container style="background-color: white; " rounded>
        <v-row align="center"
      justify="center">
        <v-col cols="12" sm="12" md="6">
            <v-card
              flat
              color="white"
            >
              <v-subheader>Min and max temperature in celsius</v-subheader>
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
          <v-col cols="9" sm="8" md="4">
            <v-container fluid>
              <v-select
                v-model="selectedMonth"
                :items="Months"
                label="Choose Month"
                dense
                hide-details
              >
              </v-select>
            </v-container>
          </v-col>
          <v-col cols="3" sm="4" md="2">
            <v-btn @click="search">
              search
            </v-btn>
          </v-col>
      </v-row>
      </v-container>
    </v-parallax>
     <v-row class="justify-space-around">
      <v-card
        v-for="edge in cities" :key="edge.node.id"
        width="85%"
        class="mt-5 mb-5"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="`https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg`"
        />

        <v-card-title>{{ edge.node.City }}</v-card-title>

        <v-card-subtitle class="pb-0">{{ edge.node.Country }} , {{ edge.node.Continent }}</v-card-subtitle>
        <v-card-subtitle class="pb-0"> Average temperature in {{ selectedMonth }} is {{edge.node[`${selectedMonth}`]}}  , and the average of the year is {{ edge.node.Year }}</v-card-subtitle>
      </v-card>
    </v-row>
  </Layout>
</template>

<page-query>
  query {
  cities: allCity(limit: 500) {
    edges{
      node {
        id,
        City,
        Country,
        Continent,
        Jan,
        Feb,
        Mar,
        Apr,
        May,
        Jun,
        Jul,
        Aug,
        Sep,
        Oct,
        Nov,
        Dec,
        Year
      }
    }
  }
}
</page-query>

<script>
  export default {
    data: () => ({
      Months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      selectedMonth: "Jan",
      cities: [],
      min: -20,
      max: 60,
      range: [0, 25],
    }),
    methods: {
      search () {
        this.cities = this.$page.cities.edges.filter((edge) => {
          return  (edge.node[`${this.selectedMonth}`] >= this.range[0] && edge.node[`${this.selectedMonth}`] <= this.range[1])
        })
      },
    },
  }
</script>


