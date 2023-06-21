function Repeat() {
  const list = ["a", "b", "c", "d", "e"];

  return (
    <>
      <div>
        {list.map((elem, index) => {
          return <div key={index}>{elem}</div>;
        })}
      </div>
    </>
  );
}

export default Repeat;
