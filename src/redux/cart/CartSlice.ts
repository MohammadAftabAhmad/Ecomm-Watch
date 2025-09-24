import { createSlice } from '@reduxjs/toolkit'

const storedCart=localStorage.getItem("cartItems")
const initialItems=storedCart? JSON.parse(storedCart):[];



 const CartSlice = createSlice({
  name: 'cart',
  initialState:{
    items:initialItems,
  },
  reducers: {
    addToCart:(state,action)=>{
      const {id}=action.payload;
      state.items.push===id 
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {addToCart  } = CartSlice.actions

export default CartSlice.reducer