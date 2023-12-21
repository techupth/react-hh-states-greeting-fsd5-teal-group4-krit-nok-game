import { useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{msg}</div>
      <div className="buttons">
        <button onClick={() => setMsg("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => setMsg("Hi!")}>Hi!</button>
        <button onClick={() => setMsg("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
