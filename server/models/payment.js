"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      no_rek: DataTypes.STRING,
      proof: DataTypes.STRING,
      status: DataTypes.ENUM("free", "premium"),
      user_id: DataTypes.STRING
    },
    {}
  );
  payment.associate = function(models) {
    payment.belongsTo(models.user, {
      foreignKey: "user_id",
      as: "breeder"
    });
  };
  return payment;
};
