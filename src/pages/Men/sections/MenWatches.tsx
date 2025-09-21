import { Link } from "react-router-dom"
import { Trending } from "../../../data/watchData"


function MenWatches() {
  return (
    <>
    <div className=" text-center text-3xl pt-5 font-bold">All watches</div>
      <div className="px-20  pt-10 grid gap-6 grid-cols-4">
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

export default MenWatches