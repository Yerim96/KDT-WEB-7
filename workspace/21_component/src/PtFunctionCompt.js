import "./PtFunctionCompt.css";

function PtFunctionCompt({ title, author, price, type }) {
  return (
    <>
      <div className="divbox2">
        <h4>이번주 베스트셀러</h4>
        <h4>{title}</h4>
        <h4>저자:{author}</h4>
        <h4>판매가:{price}</h4>
        <h4>구분:{type}</h4>
      </div>
    </>
  );
}

export default PtFunctionCompt;
