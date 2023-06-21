import { useState } from "react";

function Pt01_answer() {
  const [data, setData] = useState([
    { id: 1, user: "코디", email: "codi@gmail.com" },
    { id: 2, user: "윤소희", email: "yoonsohee@gmail.com" },
  ]);

  const [inputUser, setInputUser] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [nextid, setNextId] = useState(3);

  const onChangeUser = (e) => setInputUser(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  const eventClick = () => {};
  return (
    <>
      <div>
        <input
          type="text"
          name="user"
          placeholder="이름"
          value={inputUser}
          onChange={onChangeUser}
        ></input>

        <input
          type="text"
          name="email"
          placeholder="이메일"
          value={inputEmail}
          onChange={onChangeEmail}
        ></input>

        <button onClick={eventClick}>등록</button>
        {/* <div>{dataList}</div> */}
      </div>
    </>
  );
}

export default Pt01_answer;
