import React from 'react'
import catlogo from '../Assets/cat2.png'
import '../Css/Navbar.css'
import * as fcicon from "react-icons/fc";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    
    <div className='navbar-1'>
            <div className='logo'>
            <img src={catlogo} width='140px' height='120px'/>
            </div>

            <div className='Content'>

                <Link to='/'>  <h5 className='Heading__menu'> <fcicon.FcHome/>Home </h5>              </Link>
                <Link to='/product'>  <h5 className='Heading__menu'><fcicon.FcAddressBook />Product</h5>     </Link> 
                <Link to='/medical'>  <h5 className='Heading__menu'><fcicon.FcLike/>Medical_Fact</h5>        </Link> 
                <Link to='/order'>  <h5 className='Heading__menu'><fcicon.FcTodoList/>Orders</h5>          </Link> 
                <Link to='/about'>  <h5 className='Heading__menu'> <fcicon.FcPortraitMode />About us</h5> </Link> 

            </div>
    </div>
    
    </>
  )
}

export default Navbar