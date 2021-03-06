module.exports =(sequelize, DataTypes) => {
return sequelize.define('user', {
  userid: {
    type: DataTypes.STRING(60),
    primaryKey : true,
    allowNull: false
  },
  sex: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  }
},
  {
    timestamps: false,
    freezeTableName : true,
    tableName : 'user'
  });
  prefer.associate = function(models){
    models.User.hasMany(models.Prefer,{
      foreignKey: 'userid',
      foreignKey: 'sex',
      foreignKey: 'age',
      onDelete : 'cascade'
    });
  };
};
