import { useRef, useState } from "react";

function Re_Sample() {
  //props로 요소 지정해주기
  //   //1. ref객체 만들기
  //   const input = useRef();

  //   const handleFocus = () => {
  //     console.log(input);

  //     //3. 객체의 current값으로 접근한다.
  //     //focus(): 지정된 html요소에 포커스 설정
  //     input.current.focus();
  //   };

  //   const handleDisabled = () => {
  //     input.current.disabled = true;
  //   };

  //   return (
  //     <>
  //       {/*2. 접근해야하는 dom요소에 ref prop설정 */}
  //       <input ref={input}></input>

  //       <button onClick={handleFocus}>focus</button>
  //       <button onClick={handleDisabled}>disabled</button>
  //     </>
  //   );

  //전역변수
  //ref 객체를 만들고 값을 초기화 해준다.
  //   const idRef = useRef(1);

  //   const plusId = () => {
  //     idRef.current += 1;
  //     console.log(idRef.current);
  //   };

  //   return (
  //     <>
  //       <h1>{idRef.current}</h1>
  //       <button onClick={plusId}>plusref</button>
  //     </>
  //   );

  const titleref = useRef();
  const writerref = useRef();

  const [list, setList] = useState([]);
  const [inputTitle, setTitle] = useState("");
  const [inputWriter, setWriter] = useState("");

  const createwriter = () => {
    const newlist = {
      id: list.length + 1,
      title: inputTitle,
      writer: inputWriter,
    };

    setTitle("");
    setWriter("");

    //제목이나 작성자 하나라도 길이가 0이면
    //해당 ref에 focus

    if (
      titleref.current.value.length === 0 ||
      writerref.current.value.length === 0
    ) {
      if (titleref.current.value.length === 0) {
        titleref.current.focus();
      } else {
        writerref.current.focus();
      }
    } else {
      setList(list.concat(newlist));
    }
  };

  const enter = (event) => {
    if (event.key === "Enter") {
      console.log(event);
      createwriter();
    }
  };
  return (
    <>
      <label>제목</label>
      <input
        ref={titleref}
        value={inputTitle}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={enter}
      ></input>
      <label>작성자</label>
      <input
        ref={writerref}
        value={inputWriter}
        onChange={(e) => setWriter(e.target.value)}
        onKeyDown={enter}
      ></input>
      <button type="button" onClick={createwriter}>
        작성
      </button>

      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>

        <tbody>
          {list.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Re_Sample;
