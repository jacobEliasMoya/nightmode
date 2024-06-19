import React from 'react';

function Button(props) {

  return (
    <a className={props.buttonClass} onClick={props.clickFunction}> {props.buttonText} </a> 
  )
}

export default Button
