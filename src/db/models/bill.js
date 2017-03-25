'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bill = sequelize.define('Bill', {
    price: DataTypes.DECIMAL,
    amount: DataTypes.NUMERIC
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Bill.schema('cestak');
  return Bill;
};