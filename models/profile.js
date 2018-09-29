'use strict';
module.exports = (sequelize, DataTypes) => {
  var profile = sequelize.define('profile', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bio: DataTypes.STRING,
    picture_url: DataTypes.STRING,
    interests: DataTypes.ARRAY(DataTypes.STRING),
    skills: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return profile;
};
