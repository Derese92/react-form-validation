import React from "react";

const input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          value={props.value}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          value={props.value}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          value={props.value}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
  }
  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
