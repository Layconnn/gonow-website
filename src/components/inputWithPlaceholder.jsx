import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "../styles/components/input-with-placeholder.scss";

function InputWithPlaceholder(props) {
  const [showElement, setShowElement] = useState(false);

  const handleClick = () => {
    setShowElement(true);
  };

  const change = props.value

  const handleBlur = () => {
    if(change === ''){
      setShowElement(false)
    }else{
      ''
    }
  }

  return (
    <>
      <div
        className={`constant-placeholder ${showElement ? "show-contents" : ""}`}
        onClick={handleClick}
      >
        <h5
          className={`constant-placeholder__label ${
            showElement ? "show-contents__label" : ""
          }`}
        >
          {props.h5}
        </h5>
        {showElement && 
          <input
            name={props?.name}
            type={props.type}
            onBlur={handleBlur}
            autoFocus
            value={change}
            placeholder={props.placeholder}
            onChange={props.onChange}
            className={`constant-placeholder__input-one ${
              showElement ? "show-contents__input-one" : ""
            }`}
          />
        }
      </div>
    </>
  );
}

export default InputWithPlaceholder;
