import Clock from "./Clock";
import Larva from "./Larva";

//컴포넌트 구조
function App() {
  const name = 1;
  const styled = {
    backgroundColor: "yellow",
  };
  return (
    <>
      <Larva />
      <div style={{ backgroundColor: "red" }}>
        {name === 1 ? "kdt7" : "hi"}안녕
      </div>
      <div id="hi" className="">
        바보
      </div>
      <label htmlFor="hi"></label>
      <Clock />
    </>
  );
}

export default App;
