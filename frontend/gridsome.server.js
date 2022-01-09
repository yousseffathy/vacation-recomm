// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
const nodeExternals = require('webpack-node-externals')

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  api.loadSource(async actions => {
    const { data } = await axios.get('http://localhost:1337/api/tests')
    const collection = actions.addCollection({
      typeName: 'City'
    })
    console.log(data.data.length)
    for (const entry of data.data) {
      collection.addNode({
            Country: entry.attributes.Country,
            City: entry.attributes.City,
            Jan: entry.attributes.Jan,
            Feb: entry.attributes.Feb,
            Mar: entry.attributes.Mar,
            Apr: entry.attributes.Apr,
            May: entry.attributes.May,
            Jun: entry.attributes.Jun,
            Jul: entry.attributes.Jul,
            Aug: entry.attributes.Aug,
            Sep: entry.attributes.Sep,
            Oct: entry.attributes.Oct,
            Nov: entry.attributes.Nov,
            Dec: entry.attributes.Dec,
            Year: entry.attributes.Year,
            Continent: entry.attributes.Continent,
      })
    }
  })
}
