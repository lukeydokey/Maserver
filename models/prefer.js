module.exports =(sequelize, DataTypes) => {
return sequelize.define('prefer', {
  userid: {
    type: DataTypes.STRING(60),
    primaryKey : true,
    allowNull: false
  },
  placeid: {
    type: DataTypes.STRING(60),
    primaryKey : true,
    allowNull: false
  },
  liked: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  },
  disliked: {
    type: DataTypes.BOOLEAN,
    defaultValue : 0
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
    tableName : 'prefer'
  });

};
