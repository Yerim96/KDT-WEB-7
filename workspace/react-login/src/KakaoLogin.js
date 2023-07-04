import { useEffect } from "react";
import axios from "axios";
//토큰처리 컴포넌트
function KakaoLogin() {
  //인가를 받기위해 클라이언트 아이디를 날림
  //원래는 아이디. 토큰등은 env에 담아놓고 씀.
  const client_id = "fa28b7eb638af13bb74936eeb9997185";
  //서버에서 보내줌
  const REDIRECT_URI = "http://localhost:3000/oauth";

  useEffect =
    (() => {
      //열리자마자 사용

      axios({
        //토큰받아오기
        method: "POST",
        url: "https://kauth.kakao.com/oauth/token",
        headers: "Content-Type: application/x-www-form-urlencoded",
        data: {
          grant_type: "authorization_code",
          client_id,
          REDIRECT_URI,
          code: "",
        },
      }).then((res) => {
        console.log(res);
      });
    },
    []);
}

export default KakaoLogin;
