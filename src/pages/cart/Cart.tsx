import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../redux/cart/CartSlice";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch=useDispatch();

  const handleDelete=(index:any)=>{
    dispatch(removeFromCart(index))

  };



  return (
    <>
      <div className="text-center text-3xl text-black p-10 mt-5">
        <h1>Your Items</h1>
      </div>

      <div>
        {items.length === 0 ? (
          <p className="text-xl px-20">No Products in your Cart</p>
        ) : (
          items.map((item: any, index: number) => (
            <div
              key={index}
              className="flex items-center px-20 gap-10 border-b w-[900px] py-4 relative pb-10"
            >
              <img src={item.image} alt={item.name} className="w-20" />

              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="font-semibold">Price: {item.price}</p>
              </div>
                 <div className="lex items-center gap-10 mt-2">
                  <button onClick={()=>dispatch(decreaseQuantity(index))} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                   <span className="px-2">{item.quantity}</span>
                  <button onClick={()=>dispatch(increaseQuantity(index))} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                 </div>
                 <button onClick={()=>handleDelete(index)} className="text-white bg-red-600 text-sm p-2 rounded-md">Remove</button>
                 
            </div>
          ))
        )}
      </div>
      
    </>
  );
}

export default Cart;
