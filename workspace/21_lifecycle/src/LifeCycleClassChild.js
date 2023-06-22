import React from "react";

class LifeCycleClassChild extends React.Component {
  //함수형과 다르게 useEffect를 사용하지 않음
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <>
        <p>LifeCycleClassChild {this.props.number}</p>
      </>
    );
  }
}

export default LifeCycleClassChild;
