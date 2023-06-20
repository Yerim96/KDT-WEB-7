import "./Circle.css";

function Circle() {
  const style = {
    marginTop: "20%",
  };
  return (
    <>
      <div style={{ marginTop: style.marginTop }}>
        <div className="circle circle1">
          <div className="white">
            <div className="black"></div>
          </div>
        </div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>
      </div>
    </>
  );
}

export default Circle;
