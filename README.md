# vacation-recommendation based on weather
This website acts as a vacation destiantion helper that depends on the average temperature of the cities during the month of travel. This website is a demo for me to learn Vue, 
GraphQL and a local database server (in this case strapi).

## Description
The website is built using a [dataset](https://www.kaggle.com/swapnilbhange/average-temperature-of-cities) collected from kaggle. The dataset contains the average temperature of 446
cities all over the world. The data was transformed from CSV to Json and you can find it in the data folder in the backend section. The data was used in a local strapi server that 
was setup. The front end part utilizies gridsome and vue to dsiplay and the filter the data coming from the strapi api.

![Demo Pic](/Demo.jpg)

## Running the website

### 1. Running the backend
To run the strapi server where we get the data from you need to `cd backend` and run either `npm run develop` if you need live refreshing or run `npm start`

### 2. running the front end
To the run the front end portiuon of the app you need to `cd frontend` and run `gridsome develop`.

## To Do List
1. Adding custom image per location using google photo places api
2. Polishing UI
3. In case of a lot of free time add recommendation based on previous locations visited using data analysis

## License

MIT License

Copyright (c) [2022] [Youssef Fathy]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
