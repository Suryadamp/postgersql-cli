"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "WALTER WHITE",
          email: "walter@gmail.com",
          uuid: "5f71ae2a-83cc-4df8-aeda-5fc7d05753cf",
          role: "admin",
          createdAt: "2022-08-19T09:16:37.996Z",
          updatedAt: "2022-08-19T09:19:43.546Z",
        },
        {
          name: "Jessy Pinkman",
          email: "jessy@gmail.com",
          uuid: "5f71ae2a-83cc-4df8-aeda-5fc7d05753cf",
          role: "admin",
          createdAt: "2022-08-19T09:16:37.996Z",
          updatedAt: "2022-08-19T09:19:43.546Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
