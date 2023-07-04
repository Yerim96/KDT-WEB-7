import styled from "styled-components";

const Origin = styled.div`
  display: flex;
`; //div에 style생성

const Font = styled.span`
  font-size: 30px;
`;
const Box1 = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  ${Font} {
    /* font-size: 30px; */
    &:hover {
      font-size: 60px;
    }
  }

  //pseudo
  span {
    font-size: 30px;
    &:hover {
      font-size: 60px;
    }
  }
`;

const Circle = styled(Box1)`
  //박스1 상속받고 중복아닌것만 사용
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: indigo;
  border-radius: 50px;
`;

const Input = styled.input.attrs({ required: true, disabled: true })`
  //스타일드컴포넌트는 속성값을 객체형태로 지정할 수 있다.
  padding: 10px;
  background-color: aqua;
`;
// const Box2 = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: orange;
// `;

const Text = styled.p`
  color: white;
`;
const StyledComponent = () => {
  return (
    <>
      <Origin>
        <Box1 bgColor="red">
          <Text>Hello</Text>
        </Box1>
        <Box1 bgColor="orange">
          <Font>Bye</Font>
        </Box1>
        <Box1 bgColor="blue">
          <Font>푸른박스</Font>
        </Box1>
        <Circle bgColor="yellow" />
      </Origin>
      <Btn>버튼입니다.</Btn>

      {/* 원하는 태그로 바꾸기. button에서 a태그로 */}
      <Btn as="a" href="https://www.naver.com">
        앵커태그 입니다.
      </Btn>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </>
  );
};

export default StyledComponent;
