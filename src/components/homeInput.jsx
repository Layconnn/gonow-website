import React from 'react'
import PhoneInput from "react-phone-number-input";
import { useState } from 'react';
import '../styles/components/home-input.scss';

function HomeInput(props) {
    const [showElement, setShowElement] = useState(false);

    const handleClick = () => {
      setShowElement(true);
    };
  
    const change = props.value
  
    const handleBlur = () => {
      if(change === '' || !change){
        setShowElement(false)
      }else{
        ''
      }
    }

  return (
    <>
    <div
      className={`place ${showElement ? "initials" : ""}`}
      onClick={handleClick}
    >
      <h5
        className={`place__label ${
          showElement ? "initials__label" : ""
        }`}
      >
        {props.h5}
      </h5>
      {showElement && (
        <PhoneInput
        defaultCountry="NG"
        onBlur={handleBlur}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoFocus
      />
      )}
    </div>
  </>
  )
}

export default HomeInput
