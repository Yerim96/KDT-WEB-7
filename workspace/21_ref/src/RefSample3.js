import React from "react";

class RefSample3 extends React.Component {
  handleFocus = () => {
    //화살표 함수는 this가 없기 때문에 this를 함수안에서 작성하면 바로 위 class를 가리킨다.
    this.myinput.focus();
  };
  render() {
    return (
      <>
        <p>클래스형 컴포넌트에서 버튼 클릭시 input focusing</p>
        {/* 함수형 dom과 마찬가지로 요소에 직접접근 */}
        <input type="text" ref={(ref) => (this.myinput = ref)}></input>
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample3;
