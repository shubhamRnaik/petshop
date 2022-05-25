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

                <Link>  <h5> <fcicon.FcHome/>Home </h5>              </Link>
                <Link>  <h5><fcicon.FcAddressBook />Product</h5>     </Link> 
                <Link>  <h5><fcicon.FcLike/>Medical_Fact</h5>        </Link> 
                <Link>  <h5><fcicon.FcTodoList/>Orders</h5>          </Link> 
                <Link>  <h5> <fcicon.FcPortraitMode />About us</h5> </Link> 

            </div>
    </div>
    
    </>
  )
}

export default Navbar