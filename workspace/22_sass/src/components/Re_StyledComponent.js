import styled from "styled-components";

const Origin = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.bg};
`;

const Font = styled.span`
  font-size: 30px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  ${Font} {
    &:hover {
      font-size: 60px;
    }
  }
`;
const Box2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  ${Font} {
    &:hover {
      font-size: 60px;
    }
  }
`;

const Btn = styled.button`
  color: white;
  background-color: indigo;
  border-radius: 50px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Input = styled.input.attrs({ required: true })`
  padding: 10px;
  background-color: aqua;
`;

const Text = styled.text`
  font-size: 30px;
  color: white;
`;
const Re_StyledComponent = () => {
  return (
    <>
      <Origin>
        <Box bgColor="yellow">
          <Text>앵?</Text>
        </Box>
        <Box2></Box2>
        <Circle bgColor="green"></Circle>
      </Origin>
      <Btn>버튼이요</Btn>
      <Btn as="a" href="https://www.naver.com">
        앵커태그입니다.
      </Btn>
      <div>
        <Input></Input>
      </div>
    </>
  );
};

export default Re_StyledComponent;
