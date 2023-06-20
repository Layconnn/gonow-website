import React from "react";

function Input(props){
    
    return(
        <input type={props.type} 
                name={props.name} 
                value={props.value} 
                onChange={props.onChange} 
                placeholder={props.placeholder} 
                pattern={props.pattern}
                className= {props.className}>{props.text}
        </input>
    );
}
export default Input;