import { useEffect, useState } from "react";

function Re_LifeCycleChild(number) {
  const [text, setText] = useState("");

  //Mount & update 시점에 실행
  useEffect(() => {
    console.log("useEffect | Monunt || update");
  });

  //mount 시점에 실행
  useEffect(() => {
    console.log("useEffect | Mount");
  }, []);
  // update 시점에 실행
  useEffect(() => {
    console.log("text | update");
  }, [text]);
  return (
    <>
      <h1>Re_LifeCycleChild {number.number}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </>
  );
}
export default Re_LifeCycleChild;
