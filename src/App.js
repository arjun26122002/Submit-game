import "./App.css";
import { useState } from "react";

export default function App() {
  const [make, setMake] = useState("");
  const [turn, setTurn] = useState(0);
  const [iValue, setIValue] = useState("");

  function hoverMovement() {
    if (turn === 0) {
      setMake("translateX(150px)");
      setTurn(turn + 1);
    } else {
      setMake("translateX(0px)");
      setTurn(turn - 1);
    }
  }

  var translate = make;

  const iHandler = (event) => {
    setIValue(event.target.value);
    console.log(iValue);
  };

  function submitMove() {
    if (iValue.length < 8) {
      return translate;
    } else {
      return "none";
    }
  }

  function submitColor() {
    if (iValue.length < 8) {
      return "#f87171";
    } else {
      return "#22c55e";
    }
  }

  function submitBorder() {
    if (iValue.length < 8) {
      return "2px solid #f87171";
    } else {
      return "2.5px solid #22c55e";
    }
  }

  return (
    <div className="main-container">
      <div className="container">
        <h1>Sign Up</h1>
        <input className="username" placeholder="Enter Username" type="text" />
        <input
          type="password"
          className="password"
          placeholder="Enter Password"
          onChange={iHandler}
          style={{
            border: submitBorder(),
            color: submitColor()
          }}
        />
        <div className="btn-div">
          <button
            className="btn"
            onMouseEnter={() => hoverMovement()}
            style={{
              border: submitBorder(),
              color: submitColor(),
              transform: submitMove(),
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
