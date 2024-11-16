"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = function _default(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  User.associate = function (models) {
    User.hasMany(models.File, {
      foreignKey: 'userId'
    });
  };
  return User;
};