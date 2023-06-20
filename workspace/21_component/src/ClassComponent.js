import React from "react";
import PropTypes from "prop-types"; //프롭타입스 가져오기
//import {Component} from "react" //객채를 분해할당해서도 가져올 수 있음
//class ClassCompoenet extends Component

class ClassComponent extends React.Component {
  //리액트 컴포넌트를 상속받는 클래스 컴포넌트
  //클래스 컴포넌트는 render()함수가 필수이다.
  render() {
    //상속받기 떄문에 render필수

    console.log(this.props);
    const { name, age, children } = this.props;
    const classes = "kdt7";
    return (
      <>
        <div> Hello Class Component</div>
        <div>
          Hello
          {classes === "kdt7" ? `kdt7기 ${name}입니다` : "누구?"}
        </div>
        <div>나이가{`${age}`}</div>
        <div>{children}</div>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  //props의 기본 디폴트값 설정.
  name: "무기명",
  age: 21,
};

ClassComponent.propTypes = {
  //클래스명뒤에 객체로 붙는것은 소문자
  name: PropTypes.string.isRequired, //필수값지정 isRequired
  age: PropTypes.number,
};
export default ClassComponent;
