import { useEffect, useState } from "react";

function LifeCycleFuncChild(props) {
  const [text, setText] = useState("");

  //useEffect는 한번에 실행된다.
  //백엔드에서 데이터를 가져올때 axios 형식으로 가져올 수 있다.
  //useEffect 배열이 없다면 업데이트 될때마다 실행되고,
  //배열이 있다면 생성될떄,
  //배열안에 변수가 있다면 변수가 실행될떄 .변수 여러개 가능

  //   useEffect(() => {
  //     //mount 시점에 실행
  //     console.log("useEffect | Mount");

  //     //unMount 시점에 실행
  //     return () => {
  //       console.log("useEffect  | unMount");
  //     };
  //   }, [text]); //특정이벤트 실행되게 하고 싶음 []배열에 넣으면 됨.

  //   useEffect(() => {
  //     //Mount & update 시점에 실행
  //     console.log("useEffect | update");
  //   });

  //text가 번경될떄.
  useEffect(() => {
    console.log("text | update");
  }, [text]);
  return (
    <>
      <p>LifeCycleFuncChild {props.number}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </>
  );
}

export default LifeCycleFuncChild;
