import { Link } from "react-router-dom";

export const users = [
  //가상데이터

  {
    id: 1,
    name: "홍길동",
    comment: [
      {
        text: "반갑습니다.홍길동입니다.",
      },
      {
        text: "^^1",
      },
    ],
  },
  {
    id: 2,
    name: "임꺽정",
    comment: [
      {
        text: "반갑습니다.임꺽정입니다.",
      },
      {
        text: "^^2",
      },
    ],
  },
  {
    id: 3,
    name: "성춘향",
    comment: [
      {
        text: "반갑습니다. 성춘향입니다.",
      },
      {
        text: "^^3",
      },
    ],
  },
];

function User() {
  return (
    <>
      <ul>
        {users.map((value) => {
          return (
            <li key={value.id}>
              <Link to={`/user/${value.id}`}> {value.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default User;
