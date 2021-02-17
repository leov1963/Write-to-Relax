'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class textpost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.textpost.belongsTo(models.user)
    }
  };
  textpost.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    isdeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'textpost',
  });
  return textpost;
};