import App from "./App";
function Clock() {
  return (
    <div>
      <h1>현재 시간은:{new Date().toLocaleTimeString()}</h1>
      <App />
    </div>
  );
}

export default Clock;
