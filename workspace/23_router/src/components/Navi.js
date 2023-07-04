import { Link, useNavigate } from "react-router-dom";

function Navi() {
  //메뉴페이지
  const navi = useNavigate();

  const onClick = () => {
    //버튼클릭시 페이지 이동
    // navi("/about");
    navi("https://www.naver.com");
  };
  return (
    <>
      <ul>
        <li>
          <li>
            <Link to={"/"}>
              <h3>home</h3>
            </Link>
          </li>
        </li>
        <li>
          <li>
            <Link to={"/about"}>
              <h3>about</h3>
            </Link>
          </li>
        </li>
        <li>
          <Link to={"/user"}>
            <h3>User</h3>
          </Link>
        </li>
        <li>
          <button onClick={onClick}>Redirect</button>
          {/* <Link to={"/redirect"}>Redirect</Link> */}
        </li>
        <li>
          <Link to={"https://www.naver.com"}>naver</Link>
        </li>
      </ul>
    </>
  );
}

export default Navi;
