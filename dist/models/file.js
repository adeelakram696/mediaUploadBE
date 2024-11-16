"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = function _default(sequelize, DataTypes) {
  var File = sequelize.define('File', {
    userId: DataTypes.INTEGER,
    filename: DataTypes.STRING,
    filetype: DataTypes.STRING,
    viewCount: DataTypes.INTEGER,
    path: DataTypes.STRING,
    shareableToken: DataTypes.STRING
  });
  File.associate = function (models) {
    File.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    File.hasMany(models.Tag, {
      foreignKey: 'fileId'
    });
  };
  return File;
};