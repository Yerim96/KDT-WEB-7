import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Redirect() {
  const navi = useNavigate();
  useEffect(() => {
    //리다이렉트 페이지 접속시 바로 about페이지로 이동
    navi("/about");
  }, []);
  return null;
}

export default Redirect;
