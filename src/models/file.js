export default (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    userId: DataTypes.INTEGER,
    filename: DataTypes.STRING,
    filetype: DataTypes.STRING,
    viewCount: DataTypes.INTEGER,
    path: DataTypes.STRING,
    shareableToken: DataTypes.STRING,
  });

  File.associate = (models) => {
    File.belongsTo(models.User, { foreignKey: 'userId' });
    File.hasMany(models.Tag, { foreignKey: 'fileId' });
  };

  return File;
};
