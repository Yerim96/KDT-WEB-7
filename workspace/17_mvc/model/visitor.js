//model의 visiter . db값 연결
//현재 db값 사용못하기 때문에 가상 db로 대체

exports.getVisitors = () => {
  return [
    //db대체
    { id: 1, name: "홍길동", comment: "내가 왔다" },
    { id: 2, name: "이찬혁", comment: "으라차차" },
  ];
};
