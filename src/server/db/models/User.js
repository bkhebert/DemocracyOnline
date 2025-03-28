const { DataTypes } = require('@sequelize/core');
const database = require('../index');

const User = database.define(
  'User',
  {
    displayName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true, // Ensures valid email format
      },
    },
  },
  {
    tableName: 'Users', // Explicitly specify table name
    timestamps: true, // Enables createdAt & updatedAt fields
  }
);


module.exports = User;
