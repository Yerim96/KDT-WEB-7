import { useState } from "react";

function Pt52() {
  const [list, setList] = useState([]);
  const [inputUser, setUser] = useState("");
  const [inputTitle, setTitle] = useState("");

  const [serchType, setSerchType] = useState("writer");
  const [inputSearch, setInputSearch] = useState("");
  const [resultComment, setresultComment] = useState([]);
  const createWrite = () => {
    const newAlpha = list.concat({
      id: list.length + 1,
      User: inputUser,
      title: inputTitle,
    });
    setList(newAlpha);
  };
  const serchComment = () => {
    const result = list.filter((value) => {
      //   console.log(value.User);
      console.log(value[serchType]);
      if (!value.User.includes(inputSearch)) {
        return null;
      }
      return value;
    });
    setresultComment(result);
  };

  return (
    <>
      <div>
        작성자:
        <input
          type="text"
          value={inputUser}
          onChange={(e) => setUser(e.target.value)}
          placeholder="작성자"
        ></input>
        제목
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        ></input>
        <button onClick={createWrite}>작성</button>
      </div>
      <br />

      <div>
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
      </div>

      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          {list.map((val) => {
            console.log(val);
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.User}</td>
                <td>{val.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {resultComment.length > 0 && (
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>작성자</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            {resultComment.map((val) => {
              console.log(val);
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.User}</td>
                  <td>{val.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Pt52;
