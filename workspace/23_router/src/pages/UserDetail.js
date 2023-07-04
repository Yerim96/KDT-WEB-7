import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "./User";

function UserDetail() {
  const { userId } = useParams();
  console.log(userId);
  return (
    <>
      <div>
        접속하신 고객 {userId}의 성함은 : {users[Number(userId) - 1].name}
      </div>

      <Link to={"comment"}>comment</Link>
      {/* //comment는 userDetail의 자식으로 들어가면된다. */}
      <Outlet
        context={{
          name: users[Number(userId) - 1].name,
          comment: users[Number(userId) - 1].comment,
        }}
      />
      {/* 아울렛은 자식컴포넌트. */}
    </>
  );
}

export default UserDetail;
