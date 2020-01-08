'use strict';
module.exports = (sequelize, DataTypes) => {
  const favourites = sequelize.define('favourites', {
    userid: DataTypes.STRING,
    movie: DataTypes.JSONB
  }, {});
  favourites.associate = function(models) {
    // associations can be defined here
  };
  return favourites;
};