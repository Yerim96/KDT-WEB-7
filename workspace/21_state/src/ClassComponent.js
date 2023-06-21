import React from "react";

class ClassCompoenet extends React.Component {
  //기존형태
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       number: 0,
  //     };
  //   }
  // this.up = this.up.bind(this);

  //현재버전
  state = {
    number: 0,
  };

  //   클래스의 기본문법이기 떄문에 function키워드 안써도됨
  up = () => {
    //화살표 함수안에 this가 없기 떄문에 this참조를 하지 않는다.
    console.log(this); //여기서 this는 state
    this.setState({ number: this.state.number + 1 });
  };

  // up() {
  //   //일반함수 형태
  //   this.setState({ number: this.state.number + 1 });
  // }
  render() {
    const { number } = this.state;
    return (
      <div>
        {/* <h1>{this.state.number}</h1> */}
        <h1>{number}</h1>
        <button
          //   onClick={() => this.setState({ number: this.state.number + 1 })}
          onClick={this.up}
        >
          +1
        </button>
      </div>
    );
  }
}

export default ClassCompoenet;
