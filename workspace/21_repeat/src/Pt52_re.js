import { useState } from "react";

function Pt52_re() {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comment, setComment] = useState([]);

  const [serchType, setSerchType] = useState("writer");
  const [inputSearch, setInputSearch] = useState("");
  const [resultComment, setResultComment] = useState([]);

  const addComment = () => {
    const newCommnet = {
      id: comment.length + 1,
      writer: inputWriter,
      title: inputTitle,
    };

    setComment([...comment, newCommnet]);
  };

  const serchComment = () => {
    //검색한것만 나오도록
    const result = comment.filter((value) => {
      console.log(value.writer + "writer");
      console.log(value[serchType] + "serchType"); //문자열이 되는 순간 배열로 객체에 접근해야한다.
      if (!value[serchType].includes(inputSearch)) {
        return null;
      }
      return value;
    });
    setResultComment(result);
  };

  return (
    <>
      {/* 서치바 */}
      <form>
        <label htmlFor="">작성자</label>
        <input
          id="writer"
          type="text"
          placeholder="작성자"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          placeholder="제목"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        ></input>
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      <hr />

      {/* 검색필터 폼 */}
      <form>
        <select
          value={serchType}
          onChange={(e) => setSerchType(e.target.value)}
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        ></input>
        <button type="button" onClick={serchComment}>
          검색
        </button>
      </form>

      {/* 기본테이블 */}
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
          {comment.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* 검색결과 테이블 */}
      <h3>검색결과</h3>
      {resultComment.length > 0 && (
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {resultComment.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Pt52_re;
