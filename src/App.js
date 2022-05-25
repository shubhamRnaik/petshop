import React from 'react'
import Navbar from './Component/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Medical_Fact from './Pages/Medical_Fact'
import Orders from './Pages/Orders'

function App() {
  return (
    <>
      <BrowserRouter>
      
          <Navbar />
      <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route exact path='/product'  element={ <Product />} />
        <Route exact path='/medical'  element={ <Medical_Fact />} />
        <Route exact path='/order'  element={<Orders />} />
        <Route exact path='/about'  element={ <Orders />} />


      </Routes>
      
      
      </BrowserRouter>
    
    </>
  )
}

{/* <Navbar /> */}
export default App