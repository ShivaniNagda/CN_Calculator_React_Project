import React from "react";
import "./styles/Display.css";

const Display = ({ input, setInput, answer }) => {
  const onChangeTagInput = (e) => {
    const re = /^[0-9+\-*/^().!√%]+$/; // Simplified regex

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <div className="display">
      {answer === "" ? (
        <input
          type="text"
          name="input"
          className="input"
          style={{ padding: "29px" }}
          value={input}
          placeholder="0"
          maxLength={12}
          onChange={onChangeTagInput}
          autoComplete="off"
        />
      ) : (
        <>
          <input
            type="text"
            name="input"
            className="value"
            value={input}
            placeholder="0"
            maxLength={12}
            disabled
          />
          <input
            type="text"
            name="value"
            className="input"
            value={answer}
            disabled
          />
        </>
      )}
    </div>
  );
};

export default Display;
