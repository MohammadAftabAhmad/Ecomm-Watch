import video from "../../assets/videos/hero.mp4"
function HeroPage() {
  return (
   <>
    <div className="mx-auto  w-full top-0 ">
        <video className="h-screen w-full  object-cover" autoPlay muted loop src={video}></video>
    </div>
   
   </>
  )
}

export default HeroPage