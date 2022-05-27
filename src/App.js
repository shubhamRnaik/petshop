import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Medical_Fact from './Pages/Medical_Fact'
import Orders from './Pages/Orders'
import Request from './Pages/Request'
import  About from './Pages/About'
import {Provider} from 'react-redux'
import store from './Store/Store'




function App() {
  return (
    <>
      <div className='Header'>
      <Provider store={store}>

      <BrowserRouter>
      
      <Navbar />
  <Routes>

  <Route exact path='/'  element={<Home />} />
    <Route exact path='/product'  element={ <Product />} />
    <Route exact path='/medical'  element={ <Medical_Fact />} />
    <Route exact path='/order'  element={<Orders />} />
    <Route exact path='/about'  element={ <About />} />
    <Route exact path='/request'  element={<Request />} />



  </Routes>
  
  
  </BrowserRouter>

      </Provider>
      </div>
    </>
  )
}

{/* <Navbar /> */}
export default App