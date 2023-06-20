import React from "react";
import PropTypes from "prop-types"; //프롭타입스 가져오기

class PtClassCompt extends React.Component {
  Click = () => {
    const { valid } = this.props;
    console.log(valid);
  };
  render() {
    const { text } = this.props;
    console.log(this.props);
    return (
      <>
        <h3>App 컴포넌트에서 넘겨준 {text} props 입니다.</h3>
        <button onClick={this.Click}>콘솔메시지</button>
      </>
    );
  }
}

PtClassCompt.defaultProps = {
  //props의 기본 디폴트값 설정.
  text: "이건 기본 text",
  valid: "콘솔 띄우기 성공",
};

PtClassCompt.propTypes = {
  //클래스명뒤에 객체로 붙는것은 소문자
  name: PropTypes.string.isRequired, //필수값지정 isRequired
  age: PropTypes.number,
};
export default PtClassCompt;
