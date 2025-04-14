import React, { useState } from "react";
import "../Calculator/Calculator.css";

const dataList = [
  "(",
  ")",
  "DEL",
  "AC",
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "*",
  ".",
  "0",
  "/",
  "=",
];

const Calculator = () => {
  const [data, setData] = useState("");

  const getValue = (e) => {
    const value = e.target.value;

    // If "AC" is pressed, clear the input
    if (value === "AC") {
      setData("");
    }
    // If "=" is pressed, evaluate the expression
    else if (value === "=") {
      try {
        setData(eval(data).toString()); // Safely evaluate the expression
      } catch (error) {
        setData("Error"); // Handle invalid input
      }
    } else if (value === "DEL") {
      setData(data.slice(0, -1)); // Remove the last character
    }

    // Otherwise, concatenate the pressed value
    else {
      setData(data.concat(value));
    }
  };

  const handleChange = () => {};

  return (
    <div>
      <section className="cal-container">
        <div className="container">
          <h2 className="text-center text-white">CALCULATOR</h2>
          <div className="mb-3">
            <input
              className="cal-input"
              value={data}
              placeholder="0"
              onChange={handleChange}
              readOnly
            />
          </div>
          <div className="cal-btn-group">
            {dataList.map((button) => (
              <button
                key={button}
                className="cal-btn"
                value={button}
                onClick={getValue}>
                {button}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
