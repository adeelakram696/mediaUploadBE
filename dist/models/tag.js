"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = function _default(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    fileId: DataTypes.INTEGER,
    tag: DataTypes.STRING
  });
  Tag.associate = function (models) {
    Tag.belongsTo(models.File, {
      foreignKey: 'fileId'
    });
  };
  return Tag;
};