"use strict";
module.exports = (sequelize, DataTypes) => {
  const spesies = sequelize.define(
    "species",
    {
      name: DataTypes.STRING
    },
    {}
  );
  spesies.associate = function(models) {
    // associations can be defined here
  };
  return spesies;
};
