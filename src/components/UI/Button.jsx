import React from 'react'
import './Button.css'
function Button({children,onClick,color = "default",size="medium",type = "button"}) {
  return (
    <>
        <button className={`btn ${color} ${size}`} onClick={onClick} type={type}>{children}</button> 
    </>
  )
}

export default Button