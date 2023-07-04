import { useForm } from "react-hook-form";

function About() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();
  console.log(register("username"));
  //   const [value, setValue] = useState();
  //   const onClick = (e) => {
  //     e.preventDefault();
  //     console.log("hi");
  //   };

  const onValid = () => {
    console.log("onvalid");
  };
  const onInValid = (error) => {
    console.log(error);
  };
  console.log("오류", errors);
  //   console.log(watch("password"));
  return (
    <>
      <div>About</div>
      {/* handleSubmit은 e.preventDefault();과 같다. onvalid는 유효한 값을 받았을때 */}
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          {...register("username", {
            required: "이름을 입력하세요",
            validate: {
              checkName: (value) =>
                value.includes("kdt7") || "kdt7은 필수 입력값입니다.",
            },
          })}
          type="text"
        ></input>
        <div style={{ color: "red" }}>{errors.username?.message} </div>
        <input
          {...register("password", {
            required: "비밀번호를 입력하세요",
            minLength: {
              message: "비밀번호는 8자 이상으로 작성하세요",
              value: 8,
            },
          })}
          type="password"
        ></input>
        {errors.password?.message}
        {/* //   id="name"
          //   value={value}
          //   onChange={(e) => setValue(e.target.value)} */}
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default About;
