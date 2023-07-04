function Kakao() {
  //인가를 받기위해 클라이언트 아이디를 날림
  const client_id = "fa28b7eb638af13bb74936eeb9997185";
  //서버에서 보내줌
  const REDIRECT_URI = "http://localhost:3000/oauth";
  const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${REDIRECT_URI}`;
  //인가를 받았다면 토큰을저장해날려줌
  const onClickFunc = () => {
    window.location.href = url;
  };
  return (
    <>
      <img src="kakao_login_medium_narrow.png" onClick={onClickFunc}></img>
    </>
  );
}

export default Kakao;
