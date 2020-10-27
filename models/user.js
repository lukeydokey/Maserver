module.exports =(sequelize, DataTypes) => {
return sequelize.define('user', {
  userid: {
    type: DataTypes.INTEGER,
    primaryKey : true,
    allowNull: false
  },
  sex: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  }
},
  {
    timestamps: false,
    freezeTableName : true,
    tableName : 'user'
  });
};
