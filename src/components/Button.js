import React from "react";
import '../Style/calculator/calculator.css'

const Button = props => {
  return (
    <button
      className={props.children === "=" ? "result" : "btn"}
      onClick={() => {
        props.oper(props.children);
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
