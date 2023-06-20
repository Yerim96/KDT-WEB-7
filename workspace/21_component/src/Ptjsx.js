import "./Ptjsx.css";

function Ptjsx() {
  const name = "강쥐";
  const animal = "푸들";
  const num1 = 3;
  const num2 = 5;
  const a = 4;
  const b = 1;
  const title = "원하는 제목";
  return (
    <>
      <div>
        <h3>이것은 div 입니다.</h3>
      </div>
      <h2>제 반려동물의 이름은{name} </h2>
      <h2>
        {name}는 {animal}입니다.{" "}
      </h2>
      <div>
        <h2>{num1 + num2 === 8 ? "정답입니다" : "오답입니다."}</h2>
      </div>
      <div>
        <h2>{a > b && "a가 b보다 큽니다."}</h2>
      </div>
      <div className="test">{title}</div>

      <p className="input">
        아이디:<input></input>
        비밀번호:<input></input>
      </p>

      <div className="divbox">
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
    </>
  );
}

export default Ptjsx;
