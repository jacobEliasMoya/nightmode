import React, { useState } from 'react';

function Button(props) {

  const [isToggled , setToggled] = useState(false);

  const toggleState =() =>{
    setToggled(prev => !prev);
    console.log(isToggled);
  }

  return (
    <a className={isToggled ? "btn active" : "btn"} onClick={toggleState}> {props.buttonText} </a> 
  )
}

export default Button
