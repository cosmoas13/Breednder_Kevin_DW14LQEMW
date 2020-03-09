"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pets",
      [
        {
          name: "Lord",
          gender: "male",
          species_id: 1,
          age: "teenager",
          user_id: 1,
          about_pet: "Undefinied Dog",
          photo: "lord.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ban Gusion",
          gender: "female",
          species_id: 2,
          age: "teenager",
          user_id: 2,
          about_pet: "Beautiful Cat",
          photo: "beautiful.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pets", null, {});
  }
};
