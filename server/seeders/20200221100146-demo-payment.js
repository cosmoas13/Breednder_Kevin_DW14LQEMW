"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("payments", [
      {
        no_rek: "1021691010",
        proof: "https://buktitransfer.jpg",
        status: "free",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_rek: "1021691012",
        proof: "https://buktibayar.jpg",
        status: "premium",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("payments", null, {});
  }
};
