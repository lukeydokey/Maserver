module.exports =(sequelize, DataTypes) => {
return sequelize.define('place', {
  placeid: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    unique: true,
  },
  placename: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  like: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  dislike: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  recomrate: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  }
},
  {
    timestamps: false
  });
};
