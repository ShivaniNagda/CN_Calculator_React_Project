import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import "./styles/Calculator.css";
import { evaluate, round } from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  // Operation mapping
  const operationMap = {
    "x2": "^2",
    "x3": "^3",
    "3√": "^(1/3)",
    "log": "log("
  };

  // Input handler
  const inputHandler = (event) => {
    if (answer === "Invalid Input!!") return;
    let val = operationMap[event.target.innerText] || event.target.innerText;

    let str = input + val;
    if (str.length > 14) return;

    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);
  };

  // Clear input
  const clearInput = () => {
    setInput("");
    setAnswer("");
  };

  // Check if brackets are balanced
  const checkBracketBalanced = (expr) => {
    let balance = 0;
    for (let char of expr) {
      if (char === "(") balance++;
      if (char === ")") balance--;
      if (balance < 0) return false;
    }
    return balance === 0;
  };

  // Calculate final answer
  const calculateAns = () => {
    if (input === "") return;
    let result = 0;
    let finalexpression = input;
    finalexpression = finalexpression.replaceAll("x", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");

    // Evaluate square roots
    let noSqrt = input.match(/√[0-9]+/gi);
    if (noSqrt !== null) {
      let evalSqrt = input;
      for (let i = 0; i < noSqrt.length; i++) {
        evalSqrt = evalSqrt.replace(noSqrt[i], `sqrt(${noSqrt[i].substring(1)})`);
      }
      finalexpression = evalSqrt;
    }

    try {
      if (!checkBracketBalanced(finalexpression)) {
        const errorMessage = { message: "Brackets are not balanced!" };
        throw errorMessage;
      }
      result = evaluate(finalexpression); // mathjs
    } catch (error) {
      result = error.message === "Brackets are not balanced!" ? "Brackets are not balanced!" : "Invalid Input!!";
    }
    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
  };

  // Backspace function
  const backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };

  // Change plus/minus
  const changePlusMinus = () => {
    if (answer === "Invalid Input!!") return;
    else if (answer !== "") {
      let ans = answer.toString();
      if (ans.charAt(0) === "-") {
        setInput("+" + ans.slice(1));
      } else {
        setInput("-" + ans);
      }
      setAnswer("");
    } else {
      if (input.charAt(0) === "-") {
        setInput("+" + input.slice(1));
      } else {
        setInput("-" + input);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <Display input={input} setInput={setInput} answer={answer} />
          <Buttons
            inputHandler={inputHandler}
            clearInput={clearInput}
            backspace={backspace}
            changePlusMinus={changePlusMinus}
            calculateAns={calculateAns}
          />
        </div>
      </div>
    </>
  );
}

export default Calculator;
