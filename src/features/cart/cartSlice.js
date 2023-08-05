import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : []
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        increment : (state,action) =>{

            if(state.value.length > 0 ){
                let products = state.value.filter((item)=> item.id=== action.payload.id );
                if(products.length){
                    state.value.forEach((item)=> {
                        if(item.id=== action.payload.id) {
                                item.quantity +=1;
                        }})
                }
                else{
                    state.value = [...state.value,{...action.payload, quantity :1}];
                }     
        }
                else {
                    state.value = [...state.value,{...action.payload, quantity :1}];
                    } 
        }
    },

})


export const {increment} = cartSlice.actions
export default cartSlice.reducer