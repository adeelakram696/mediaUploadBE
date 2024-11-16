'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'admin@herogram.com',
        password: '$2a$10$o7rtFb7HIbpYxiXSWvYtJOkfzxa/td8hgGT358qVeWwt7dR4zIID6', // hashed password: "password123"
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'user@herogram.com',
        password: '$2a$10$o7rtFb7HIbpYxiXSWvYtJOkfzxa/td8hgGT358qVeWwt7dR4zIID6', // hashed password: "password123"
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Files', [
      {
        userId: 1,
        filename: 'image123.jpg',
        filetype: 'image/jpeg',
        viewCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        filename: 'video123.mp4',
        filetype: 'video/mp4',
        viewCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Tags', [
      {
        fileId: 1,
        tag: 'herogram',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fileId: 1,
        tag: 'tag123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fileId: 2,
        tag: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all seeded data
    await queryInterface.bulkDelete('Tags', null, {});
    await queryInterface.bulkDelete('Files', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};
