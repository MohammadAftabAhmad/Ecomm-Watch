
import img from "../../assets/images/herom.jpeg"
import img2 from "../../assets/images/herow.jpeg"

function MwCard() {
  return (
    <>
    
     <div className='flex  px-10 py-10 bg-slate-100 mx-14 justify-center gap-5  items-center'>
      <div className="relative">
       <img className="w-[800px] h-[650px] rounded-md " src={img} alt="" />
        <div className="absolute bottom-4 left-3 flex ">
          <button className=" px-5 py-2 bg-slate-800 text-white rounded-md hover:bg-black ">Explore</button>
        </div>
       </div>
       <div className="relative">
       <img className="w-[800px] h-[650px] rounded-md " src={img2} alt="" />
        <div className="absolute bottom-4 left-3 flex ">
          <button className=" px-5 py-2 bg-slate-800 text-white rounded-md  hover:bg-black">Explore</button>
        </div>
       </div>

       
        
    
</div>
    </>
  )
}

export default MwCard