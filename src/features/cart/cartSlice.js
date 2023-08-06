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
        },
        decrement : (state,action) =>{
            if(state.value.length > 0 ){
                let products = state.value.filter((item)=> item.id=== action.payload.id );
                if(products.length){
                    state.value.forEach((item)=> {
                        if(item.id=== action.payload.id) {
                                if(item.quantity > 1){
                                    item.quantity -=1;
                                }
                                state.value
                                
                        }})
                }
                else{
                    state.value 
                }     
        }
        },
        remove : (state,action) => {
            // console.log(action.payload);
            state.value.splice(action.payload,1)
        }
    },

})


export const {increment,decrement,remove} = cartSlice.actions
export default cartSlice.reducer