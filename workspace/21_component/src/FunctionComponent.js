import PropTypes from "prop-types"; //프롭타입스 가져오기
function FunctionComponent({ name, age, children }) {
  //매개변수 props 구조분해할당.
  const classes = "kdt7";
  //   console.log(props);
  return (
    <>
      <div>Hello Function Component</div>
      <div>{classes === "kdt7" ? `kdt7 ${name}입니다` : "아님"}</div>
      <div>나이는 {age}입니다.</div>
      <div>{children}</div>
    </>
  );
}

FunctionComponent.defaultProps = {
  name: "디폴트",
  age: 31,
};

FunctionComponent.propTypes = {
  //클래스명뒤에 객체로 붙는것은 소문자
  name: PropTypes.string.isRequired, //필수값지정 isRequired
  age: PropTypes.number,
};
export default FunctionComponent;
