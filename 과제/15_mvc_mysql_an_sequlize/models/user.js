//user squelize로 테이블을 다시 정의함 .
//user 테이블 정의

const user = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};

module.exports = user;
