function Ptprops({ food }) {
  //매개변수 props 구조분해할당.
  //   console.log(props);
  const style = {
    color: "red",
  };
  return (
    <>
      <div>
        좋아하는 음식은 <span style={style}>{food}</span>입니다.
      </div>
    </>
  );
}

Ptprops.defaultProps = {
  food: "기본음식설정",
};

export default Ptprops;
