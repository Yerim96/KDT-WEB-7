import "./App.css";
import Circle from "./Circle";
import Clock from "./Clock";

function App() {
  const styles = {
    backgroundColor: "red",
    color: "blue",
    fontSize: "48px",
  };

  return (
    <>
      {/* 이씹알롬아 */}
      <div style={{ fontSize: styles.color }}>반가워!!!</div>
      <Circle />
      <Clock />
    </>
  );
}

export default App;
