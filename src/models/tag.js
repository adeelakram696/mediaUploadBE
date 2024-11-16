export default (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    fileId: DataTypes.INTEGER,
    tag: DataTypes.STRING,
  });

  Tag.associate = (models) => {
    Tag.belongsTo(models.File, { foreignKey: 'fileId' });
  };

  return Tag;
};
