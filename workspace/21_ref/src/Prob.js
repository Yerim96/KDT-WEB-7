import { useState, useRef } from "react";
function Prob() {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comment, setComment] = useState([]);
  const writerInputElem = useRef();
  const titleInputElem = useRef();

  const checkInput = () => {
    //작성버튼을 눌렀을떄 값이 없다면 포커싱되게 처리
    //trim은 문자열의 앞 뒤 공백을 지움.
    if (inputWriter.trim().length === 0) {
      //문자열 길이가 0일때
      writerInputElem.current.focus();
      return false;
    }
    if (inputTitle.trim().length === 0) {
      //문자열 길이가 0일때
      titleInputElem.current.focus();
      return false;
    }
    return true;
  };

  const addComment = () => {
    if (!checkInput()) return;

    //comment 데이터 추가
    const newData = {
      id: comment.length + 1,
      writer: inputWriter,
      title: inputTitle,
    };
    //1.concat
    // const newCommnet = comment.concat(newData);
    // setComment(newCommnet);

    // 2.spread
    setComment([...comment, newData]);
    setInputWriter("");
    setInputTitle("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addComment();
    }
  };
  return (
    <>
      <form>
        <label htmlFor="title">제목:</label>
        <input
          ref={titleInputElem}
          id="title"
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
        <label htmlFor="writer">작성자:</label>
        <input
          ref={writerInputElem}
          id="writer"
          type="text"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>

        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      <hr />
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>

        <tbody>
          {comment.map((value) => {
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

export default Prob;
