'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    
    // const data = require('fs').readFileSync('./data/temp.json', 'utf-8');
    // const dataJson = JSON.parse(data);
    // console.log(dataJson);
    // dataJson.forEach(entry => {
    //   console.log(entry);
    //   strapi.entityService.create(
    //     `api::test.test`,
    //     {
    //       data: {
    //         "Country": entry.Country,
    //         "City": entry.City,
    //         "Jan": entry.Jan,
    //         "Feb": entry.Feb,
    //         "Mar": entry.Mar,
    //         "Apr": entry.Apr,
    //         "May": entry.May,
    //         "Jun": entry.Jun,
    //         "Jul": entry.Jul,
    //         "Aug": entry.Aug,
    //         "Sep": entry.Sep,
    //         "Oct": entry.Oct,
    //         "Nov": entry.Nov,
    //         "Dec": entry.Dec,
    //         "Year": entry.Year,
    //         "Continent": entry.Continent,
    //       },
    //     }
    //   );
    // });
    
  },
};
