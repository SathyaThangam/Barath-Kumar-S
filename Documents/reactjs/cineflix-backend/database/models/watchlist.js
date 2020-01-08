'use strict';
module.exports = (sequelize, DataTypes) => {
  const watchlist = sequelize.define('watchlist', {
    userid: DataTypes.STRING,
    movie: DataTypes.JSONB
  }, {});
  watchlist.associate = function(models) {
    // associations can be defined here
  };
  return watchlist;
};