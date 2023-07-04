import { useOutletContext } from "react-router-dom";

function Comment() {
  const { name, comment } = useOutletContext();
  console.log("data", name, comment);
  return (
    <>
      <div>이름은 : {name}</div>
      <ul>
        <li>
          {comment.map((value, index) => {
            return <li key={index}>{value.text}</li>;
          })}
        </li>
      </ul>
    </>
  );
}

export default Comment;
