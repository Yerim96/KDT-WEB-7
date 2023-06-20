import React from "react";

class ClassCompoenet extends React.Component {
  //기존형태
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       number: 0,
  //     };
  //   }

  //현재버전
  state = {
    number: 0,
  };

  //   클래스의 기본문법이기 떄문에 function키워드 안써도됨
  up = () => {
    this.setState({ number: this.state.number + 1 });
  };
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
