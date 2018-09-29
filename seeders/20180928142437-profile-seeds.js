'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('profiles', [{
        firstName: 'Mark',
        lastName: 'Zukerburg',
        picture_url: '',
        bio: 'I created Facebook',
        interests: ['facebook', 'technology', 'computers'],
        skills: ['coding', 'business', 'social media'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        picture_url: '',
        bio: 'I am a normal guy who likes the outdoors',
        interests: ['hiking', 'running', 'camping'],
        skills: ['science', 'communication'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Britney',
        lastName: 'Spears',
        picture_url: '',
        bio: 'I am a pop star',
        interests: ['singing', 'dancing', 'performing'],
        skills: ['singing', 'dancing'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('profiles', null, {});
  }
};
