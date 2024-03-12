import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        quantity:0,
        total:0,
        products:[]
    }, 
    reducers:  {
        addProduct: (state,action)=>{
            state.quantity +=1;
            state.total += action.payload.price * action.payload.quantity; //here quantity is number of product quantity, not cart quantity
            state.products.push(action.payload);

        }
      
    },
  })

  export default cartSlice.reducer
  export const {addProduct} = cartSlice.actions