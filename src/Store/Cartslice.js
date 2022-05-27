import {createSlice} from '@reduxjs/toolkit'


const initialState = [];


const cartSlice = createSlice(
    {

        name:'cart',
        initialState,
        reducers:{
            
            // reducers are pure function
            // create slice method has feature to mutate directly
            add(state,action){
                state.push(action.payload);
            },
            remove(state,action){
                      state = state.filter((item )=> item.id !== action.payload)  
            },
        }
    }
)


export const{add,remove} = cartSlice.actions

export default cartSlice.reducer
