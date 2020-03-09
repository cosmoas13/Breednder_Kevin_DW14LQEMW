"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          breeder: "John",
          email: "john@gmail.com",
          password:
            "$2b$10$dpn1IZOfxPZhYFoGvftZcOzo140hFIwgHNPWyJqypVHc7VJqj7cRG", //1234
          phone: "089608787878",
          address: "aaaaaaaaaaa",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          breeder: "Boy",
          email: "boy@gmail.com",
          password:
            "$2b$10$dpn1IZOfxPZhYFoGvftZcOzo140hFIwgHNPWyJqypVHc7VJqj7cRG", //1234
          phone: "089608787878",
          address: "aaaaaaaaaaa",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          breeder: "admin Satu",
          email: "admin1@domain.com",
          password:
            "$2b$10$dpn1IZOfxPZhYFoGvftZcOzo140hFIwgHNPWyJqypVHc7VJqj7cRG", //1234
          phone: "08967878978",
          address: "Jln Merdeka",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
