"use strict";
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define(
    "pet",
    {
      name: DataTypes.STRING,
      gender: DataTypes.ENUM("Male", "Female"),
      species_id: DataTypes.INTEGER,
      age: DataTypes.ENUM("adult", "teenager", "young"),
      user_id: DataTypes.INTEGER,
      about_pet: DataTypes.STRING,
      photo: DataTypes.STRING
    },
    {}
  );
  pet.associate = function(models) {
    pet.belongsTo(models.user, {
      foreignKey: "user_id",
      as: "breeder"
    });
    pet.belongsTo(models.species, {
      foreignKey: "species_id",
      as: "category"
    });

    pet.belongsToMany(pet, {
      through: models.match,
      as: "pet_id",
      foreignKey: "pet_id"
    });
    pet.belongsToMany(pet, {
      through: models.match,
      as: "pet_id_liked",
      foreignKey: "pet_id_liked"
    });
  };
  return pet;
};
