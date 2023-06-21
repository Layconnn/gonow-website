import React from "react";
import { useState } from 'react';
import '../styles/components/input-two.scss';

function InputTwo(props){
    const [focused, setFocused] = useState(false)
    const [showElement, setShowElement] = useState(false);
  
  
    const handleClick = () => {
      setShowElement(true);
    };
  
    const handleFocus = () => {
      setFocused(true);
    }
    
    return(
        <>
            <div className={`placeholder ${showElement ? 'show' : ''}`}  onClick={handleClick}>
                <h5 className={`placeholder__label ${showElement ? 'show__label' : ''}`}>{props.h5}</h5>
                {showElement && 
                <input
                name={props?.name}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
                // pattern={props.pattern}
                className={`placeholder__input-one ${showElement ? 'show__input-one' : ''}`}
                />
                }
            </div>
        </>
    );
}
export default InputTwo;