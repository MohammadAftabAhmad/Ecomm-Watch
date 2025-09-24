
import type { RootState } from "../../redux/store"
import {  useSelector } from "react-redux"

function Cart() {
   const count = useSelector((state: RootState) => state.counter.value)
      
  return (
   <>
    <div className="bg-red-300 text-3xl text-black p-40">
        <h1>your items: {count}</h1>
        
    </div>
   
   </>
  )
}

export default Cart