import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "../styles/components/input-home.scss";

function InputHome(props) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const inputApi = props.value

  const handleBlury = () => {
    if(inputApi === '' || !inputApi){
      setShow(false)
    }else{
      ''
    }
  }


  return (
    <>
      <div
        className={`placeholder ${show ? "show" : ""}`}
        onClick={handleClick}
      >
        <h5
          className={`placeholder__label ${show ? "show__label" : ""}`}
        >
          {props.h5}
        </h5>
        {show && 
          <input
            name={props?.name}
            type={props.type}
            onBlur={handleBlury}
            autoFocus
            value={inputApi}
            placeholder={props.placeholder}
            onChange={props.onChange}
            className={`placeholder__input-one ${
              show ? "show__input-one" : ""
            }`}
          />
        }
      </div>
    </>
  );
}
export default InputHome;
