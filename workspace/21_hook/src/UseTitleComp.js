import { useState, useEffect } from "react";

const useTitle = (init) => {
  const [title, setTitle] = useState(init);

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
    // setTitle(init);
  }, [title]);

  return setTitle;
};

const UseTitleComp = () => {
  //일정시간이 나면 다른 타이틀로 업데이트
  const title = useTitle("제목이 뭘까요?");
  console.log(title); //유즈스테이트에 있는 타이틀 출력

  setTimeout(() => title("여기는 메인페이지입니다."), 3000);
  return (
    <>
      <div>Use Title</div>
    </>
  );
};
export default UseTitleComp;
