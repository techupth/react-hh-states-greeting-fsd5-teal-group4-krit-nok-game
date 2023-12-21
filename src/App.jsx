import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("Greeting Message");

  const sawasdeeClick = () => {
    setText("สวัสดี");
  }

  const hiClick = () => {
    setText("Hi!");
  }

  const nihaoClick = () => {
    setText("你好!");
  }

  return (
    <div className="App">
      <div className="greeting-container">{text}</div>
      <div className="buttons">
        <button onClick={sawasdeeClick}>สวัสดี!</button>
        <button onClick={hiClick}>Hi!</button>
        <button onClick={nihaoClick}>你好!</button>
      </div>
    </div>
  );
}

export default App;
