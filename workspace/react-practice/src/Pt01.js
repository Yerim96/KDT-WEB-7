import { useState } from "react";

function Pt01() {
  const [display, setDisplay] = useState("none");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const register = () => {
    setDisplay("block");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      register();
    }
  };
  return (
    <>
      <input
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress}
      ></input>
      <input
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={register}>등록</button>
      <div style={{ display: display }}>
        <h3>코디:codi@gmail.com</h3>
        <h3>윤소희:yoonsohee@gamil.com</h3>
        <h3>
          {name}: {email}
        </h3>
      </div>
    </>
  );
}

export default Pt01;
