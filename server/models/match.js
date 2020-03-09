"use strict";
module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define(
    "match",
    {
      pet_id: DataTypes.STRING,
      pet_id_liked: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    },
    {}
  );
  match.associate = function(models) {};
  return match;
};
