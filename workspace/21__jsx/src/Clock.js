export default function Clock() {
  return (
    <>
      <h1>지금 시각은!!!!!!!! {new Date().toLocaleTimeString()}</h1>
    </>
  );
}
