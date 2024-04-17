import React from "react";
import "./InputField.css";

function InputField(props) {
  return (
    <div className="form-group">
      <div className="input-field">
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          onChange={(e) => props.handleChange(e)}
        />
        <img src={props.iconImage} />
      </div>
      {props.errors && <div className="error">{props.errors}</div>}
    </div>
  );
}

export default InputField;
