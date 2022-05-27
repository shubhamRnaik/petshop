import React from 'react'
import Product_Banr from '../SubPages/Product_Banr'
import food1 from '../Assets/food1.jpg'
import Rating from '../SubPages/Rating'
import '../Css/Product.css'
import UseFetch from '../CustomHook/UseFetch'
import {add} from '../Store/Cartslice'
import {useDispatch} from 'react-redux'





function Product() {

  const Dispatch = useDispatch()

 let {product : data}= UseFetch('http://localhost:3002/catfood')
 console.log(data.id);


 function handleAdd(product){
   // store that in redux store  so despatch action from application and send data and that data will call reducer
   Dispatch(add(product))
   console.log("hello");
 }
  
  return (
    <>
        <Product_Banr />
      <div className='GRID__Container'>

        <div className='grid-items'>
          {

          data.map((product)=>(      
        <div className= {product.id}>
          
          <img src={product.image} height='200px' alt='food1'/>
          <h5>Whiskas food best for your cat </h5>
          <Rating/> <span> based on 1 lakh Trusted user</span>
          <h5> {product.cost} for bag of {product.weight} <span>7% off</span></h5>
         
          <button onClick={()=>handleAdd(product)} className='BTN-1'>Add to cart</button>

        </div>   ))
}

        
        </div>

        
      </div>
    
    
    
    
    
    
    
    </>

  )
}

export default Product