//visitor  squellize로 테이블을 다시 정의함.
//visitor 테이블 정의
const visitor = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "visitor", //squelize에서 쓰는 이름이기 때문에 꼭 테이블 이름과 같지 않아도됨.(모델이름)
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, //not null
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor", //실제 db 테이블
      freezeTableName: true, //복수화를 막기위해 테이블 얼리기.
      timestamps: false,
    }
  );
  return model;
};

module.exports = visitor; //visitor 내보내기
