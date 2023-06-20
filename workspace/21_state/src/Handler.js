import React from "react";

class Handler extends React.Component {
  state = {
    hi: "Hello World",
  };

  up = () => {
    this.setState({ hi: "Goodbye World" });
  };
  render() {
    const { hi } = this.state;
    return (
      <>
        <div>
          <h3>이벤트핸들링</h3>
          <h3>{hi}</h3>
          <button onClick={this.up}>버튼</button>
        </div>
      </>
    );
  }
}

export default Handler;
