//컴포넌트 구조

import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import InputComponent from "./inputCompt";
import "./App.css";
import Ptprops from "./Ptprops";
import PtClassCompt from "./PtClassCompt";
import PtFunctionCompt from "./PtFunctionCompt";
import Ptjsx from "./Ptjsx";
function App() {
  return (
    <>
      <Ptjsx />
      <ClassComponent />
      <ClassComponent name={"홍길동"} age={20}>
        hi
      </ClassComponent>
      <FunctionComponent> bye </FunctionComponent>
      <FunctionComponent name={"임꺽정"} age={30} />
      <InputComponent type={"text"} text={"이름을 입력하세요"} />
      <InputComponent type={"password"} text={"비밀번호를 입력하세요"} />
      <Ptprops food={"중식"} />
      <Ptprops />

      <PtClassCompt text={"text"} />
      <PtClassCompt />

      <PtFunctionCompt
        title={"나의하루는 어쩌구"}
        author={"김유진"}
        price={"13500"}
        type={"자기계발서"}
      />
    </>
  );
}

export default App;
