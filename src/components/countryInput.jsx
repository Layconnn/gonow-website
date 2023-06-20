import React from 'react'
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import '../styles/components/country-input.scss';

function CountryInput(props) {
    const [focused, setFocused] = useState(false)
    const [showElement, setShowElement] = useState(false);
  
  
    const handleClick = () => {
      setShowElement(true);
    };
  
    const handleFocus = () => {
      setFocused(true);
    }
  return ( 
    <>
        <div className={`constant-placeholders ${showElement ? 'show-content2' : ''}`}  onClick={handleClick}>
            <h5 className={`constant-placeholders__label ${showElement ? 'show-content2__label' : ''}`}  >{props.h5}</h5>
            {showElement && 
                   <PhoneInput
                   defaultCountry="NG"
                   name={props.name}
                   value={props.value}
                   type={props.type}
                   placeholder={props.placeholder}
                   onChange={props.onChange}
                   onBlur={handleFocus}
                   focused={focused.toString()}
                   />
             }
        </div>
    </>
  )
}

export default CountryInput
