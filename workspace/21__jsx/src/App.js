import "./App.css";

function App() {
  let flag = false;
  let txt = "";

  if (flag) txt = "true입니다.";
  else txt = "False 입니다.";

  const name = "임예림";
  return (
    <div>{txt}</div>
    // <div className="App">
    //   <h1>{name}안녕</h1>
    //   <h1>빠가야로</h1>
    // </div>
  );
}

export default App;
