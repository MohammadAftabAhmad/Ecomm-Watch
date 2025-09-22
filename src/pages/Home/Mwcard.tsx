
import { Link } from "react-router-dom"
import img from "../../assets/images/herom.jpeg"
import img2 from "../../assets/images/herow.jpeg"
import {  Trending } from "../../data/watchData"

function MwCard() {



  return (
    <>
    
     <div className='flex  px-10 py-10 bg-slate-100 mx-14 justify-center gap-5 rounded-md items-center'>
      <div className="relative">
       <img className="w-[800px] h-[650px] rounded-md " src={img} alt="" />
        <div className="absolute bottom-4 left-3 flex ">
          <button className=" px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 "><Link to="/men" >Explore </Link></button>
        </div> 
       </div>
       <div className="relative">
       <img className="w-[800px] h-[650px] rounded-md " src={img2} alt="" />
        <div className="absolute bottom-4 left-3 flex ">
          <button className=" px-5 py-2 bg-black text-white rounded-md  hover:bg-gray-800"><Link to="/women" >Explore </Link></button>
        </div>
       </div>
</div>
       


       <div className="">

          <h1 className="text-2xl font-semibold px-20 py-5">TRENDING NOW</h1>

         </div>
         <div className="px-20  grid gap-6 grid-cols-4">
          {Trending.map((w)=>(
            <Link
             to={`/Trending/${w.id}`}
             key={w.id}
            >
            <div >
              <div className=" ">
              <img className="  hover:scale-105 w-80 h-full duration-300 " src={w.img} alt="" /></div>
              <div>
                <h1 className="text-gray-400">{w.name}</h1>
                <p>{w.price}</p>
              </div>
            </div>
          </Link>
          ))}
         </div>
        
    

    </>
  )
}

export default MwCard