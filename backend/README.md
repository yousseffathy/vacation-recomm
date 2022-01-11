# Backend portion oft eh vacation recommendation app

## To modify or add the data
Strapi utilizes a bootstrap function that runs when the server starts. If you want to add data to the server or modify it, You need to modify `src/index`.
I have left the code I used to upload my data as comments to be used as a reference.The data file I am using is `data/temp.json`.

## To run the server

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```
