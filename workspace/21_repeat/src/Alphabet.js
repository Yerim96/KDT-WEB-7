import { useState } from "react";

function Alphabet() {
  //   const [list, setList] = useState([
  //     { id: 1, alpha: "a" },
  //     { id: 2, alpha: "b" },
  //     { id: 3, alpha: "c" },
  //     { id: 4, alpha: "d" },
  //     { id: 5, alpha: "e" },
  //   ]);
  //   const [inputAlpha, setInputAlpha] = useState("");

  //   const addAlpha = () => {
  //     //concat() 인자로 주어진 값을 기존 배열에 합치기
  //     const newAlpha = list.concat({ id: list.length + 1, alpha: inputAlpha }); //배열을 하나 더 추가
  //     setList(newAlpha);
  //     setInputAlpha("");
  //   };

  //   return (
  //     <>
  //       <input
  //         type="text"
  //         value={inputAlpha}
  //         onChange={(e) => setInputAlpha(e.target.value)}
  //       ></input>
  //       <button onClick={addAlpha}>추가</button>
  //       <ol>
  //         {list.map((value) => {
  //           return <li key={value.id}>{value.alpha}</li>;
  //         })}
  //       </ol>
  //     </>
  //   );

  //더블클릭 필터추가 코드
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);
  const [inputAlpha, setInputAlpha] = useState("");

  const addAlpha = () => {
    //concat() 인자로 주어진 값을 기존 배열에 합치기
    const newAlpha = list.concat({ id: list.length + 1, alpha: inputAlpha }); //배열을 하나 더 추가
    setList(newAlpha);
    setInputAlpha("");
  };

  const deleteAlpha = (id) => {
    const newAlpha = list.filter((value) => value.id !== id); //일치하지 않는것만 필터로 보여줌
    setList(newAlpha);
    // console.log(newAlpha);
  };

  return (
    <>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
      ></input>
      <button onClick={addAlpha}>추가</button>
      <ol>
        {list.map((val) => {
          console.log(val);
          return (
            <li key={val.id} onDoubleClick={() => deleteAlpha(val.id)}>
              {val.alpha}
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default Alphabet;
