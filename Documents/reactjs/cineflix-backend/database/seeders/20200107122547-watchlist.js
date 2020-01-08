'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'watchlists',
    [
      {
        userid : '8721893789179',
        movie : JSON.stringify({name : "dhoom", type : "movie"}),
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ],
    {},
  ),
 
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('watchlists',null,{}),
};
