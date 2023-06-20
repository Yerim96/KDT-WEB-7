import { useState } from "react";
function PtFunction() {
  const [number, setNumber] = useState(0);
  console.log(number);
  //comst number= 0와 같음.

  return (
    <div>
      <h3>함수형</h3>
      <h3>{number}</h3>
      <button onClick={() => setNumber(number + 1)}> +1</button>
      <button onClick={() => setNumber(number - 2)}>-2</button>
    </div>
  );
}

export default PtFunction;
