import { useState } from "react";

function Pt52_re() {
  const [writerV, setwriter] = useState("");
  const [titleV, settitle] = useState("");
  const [list, setlist] = useState([]);

  const createadd = () => {
    const newlist = {
      id: list.length + 1,
      writer: writerV,
      title: titleV,
    };

    setlist([...list, newlist]);
  };
  return (
    <>
      <form>
        <input
          placeholder="작성자"
          value={writerV}
          onChange={(e) => setwriter(e.target.value)}
        ></input>

        <input
          placeholder="제목"
          value={titleV}
          onChange={(e) => settitle(e.target.value)}
        ></input>
        <button type="button" onClick={createadd}>
          작성
        </button>
      </form>

      <form></form>

      <form>
        <table>
          <thead>
            <tr>
              <td>번호</td>
              <td>작성자</td>
              <td>제목</td>
            </tr>
          </thead>
          <tbody>
            {list.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.id}</td>
                  <td>{value.writer}</td>
                  <td>{value.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Pt52_re;
