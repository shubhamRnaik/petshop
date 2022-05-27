import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './Cartslice'


const store = configureStore({
    reducer:{
        cart:cartReducer

    }
}, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 


export default store;