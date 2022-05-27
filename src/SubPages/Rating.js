import React from 'react'
import * as fawesome from "react-icons/fa";

function Rating() {
  return (
    <>
    <div className='Rating'>
    <span><fawesome.FaStar  style={{"color":"gold"}}/></span>
    <span><fawesome.FaStar  style={{"color":"gold"}} /></span>
    <span><fawesome.FaStar   style={{"color":"gold"}}/></span>
    <span><fawesome.FaStar   style={{"color":"gold"} }/></span>
    <span><fawesome.FaStarHalfAlt   style={{"color":"gold"}}/></span>
    </div>
    
    </>
  )
}

export default Rating