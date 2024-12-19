import React, { useRef, useEffect } from "react";
import "./styles/Buttons.css";

const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {
  const equalBtnRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        equalBtnRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
    <div className="show-btn">
      <button className="btn exp" onClick={inputHandler}>^</button>
      <button className="btn exp" onClick={inputHandler}>(</button>
      <button className="btn exp" onClick={inputHandler}>)</button>
      <button className="btn exp" onClick={inputHandler}>√</button>
      <button className="btn exp" onClick={inputHandler}>x<sup>2</sup></button>
      <button className="btn clr exp" onClick={clearInput}>AC</button>
      <button className="btn clr exp" onClick={backspace}>⌫</button>
      <button className="btn exp" onClick={inputHandler}>log</button>
      <button className="btn exp" onClick={inputHandler}>÷</button>
      <button className="btn exp" onClick={inputHandler}>%</button>
      <button className="btn exp" onClick={inputHandler}>7</button>
      <button className="btn exp" onClick={inputHandler}>8</button>
      <button className="btn exp" onClick={inputHandler}>9</button>
      <button className="btn exp" onClick={inputHandler}>x</button>
      <button className="btn exp" onClick={inputHandler}>x<sup>3</sup></button>
      <button className="btn exp" onClick={inputHandler}>4</button>
      <button className="btn exp" onClick={inputHandler}>5</button>
      <button className="btn exp" onClick={inputHandler}>6</button>
      <button className="btn exp" onClick={inputHandler}>-</button>
      <button className="btn exp" onClick={inputHandler}><sup>3</sup>√</button>
      <button className="btn exp" onClick={inputHandler}>1</button>
      <button className="btn exp" onClick={inputHandler}>2</button>
      <button className="btn exp" onClick={inputHandler}>3</button>
      <button className="btn exp" onClick={inputHandler}>+</button>
      <button className="btn exp" onClick={inputHandler}>!</button>
      <button className="btn exp" onClick={changePlusMinus}>±</button>
      <button className="btn exp" onClick={inputHandler}>0</button>
      <button className="btn exp" onClick={inputHandler}>.</button>
      <button className="btn exp equal" ref={equalBtnRef} onClick={calculateAns}>=</button>
    </div>
    </ >
  );
};

export default Buttons;
