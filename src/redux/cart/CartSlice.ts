import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const storedCart=localStorage.getItem("cartItems")
const initialItems=storedCart? JSON.parse(storedCart):[];

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

 const CartSlice = createSlice({
  name: 'cart',
  initialState:{
    items:initialItems,
  },
  reducers: {
   
       addToCart: (state, action: PayloadAction<CartItem>) => {
       const {id}=action.payload;
       const existingItem=state.items.find(
        (item:any)=>item.id===id
       );
       if(existingItem){
        existingItem.quantity +=1;
       }else{
        state.items.push({...action.payload, quantity:1});
       }
      localStorage.setItem("cartItems",JSON.stringify(state.items));
    },

      increaseQuantity:(state,action)=>{
        const item=state.items[action.payload];
        if(item){
          item.quantity +=1;
          localStorage.setItem("cartItems",JSON.stringify(state.items))
        }
      },
      decreaseQuantity:(state, action)=>{
        const item=state.items[action.payload];
        if(item && item.quantity>1 ){
          item.quantity -=1;
          localStorage.setItem("cartItems",JSON.stringify(state.items));
        }
      },

      removeFromCart:(state,action)=>{
        state.items=state.items.filter((_:any,index:number)=>index !== action.payload);
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }


    }
    
  },
)

// Action creators are generated for each case reducer function
export const {addToCart, increaseQuantity,decreaseQuantity, removeFromCart  } = CartSlice.actions

export default CartSlice.reducer