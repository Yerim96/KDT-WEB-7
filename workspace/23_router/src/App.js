import { Outlet } from "react-router-dom";
import "./App.css";
import Navi from "./components/Navi";

function App() {
  return (
    <>
      <div>dddd</div>
      <Navi />
      {/* 네비는 어느 페이지든 따라옴 */}
      <Outlet />
      {/* 아울렛으로 부모의 자식 페이지를 연다. */}
    </>
  );
}

export default App;
