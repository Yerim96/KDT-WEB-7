import React from "react";

class PtClass extends React.Component {
  state = {
    number: 0,
  };

  render() {
    const plus2 = () => {
      this.setState({ number: this.state.number + 2 });
    };
    const minus1 = () => {
      this.setState({ number: this.state.number - 1 });
    };
    return (
      <>
        <div>
          <h3>클래스형</h3>
          <h3>{this.state.number}</h3>
          <button onClick={plus2}>+2</button>
          <button onClick={minus1}>-1</button>
        </div>
      </>
    );
  }
}

export default PtClass;
