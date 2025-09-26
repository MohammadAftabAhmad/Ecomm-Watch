
import img1 from "../../assets/images/slick.jpg"
import img2 from "../../assets/images/boldw.jpg"
import img3 from "../../assets/images/luxuryw.jpg"
import img4 from "../../assets/images/couple.jpg"
function YourStyle() {

    const images = [
      { src: img1, label: "Slick" },
    { src: img2, label: "Bold " },
    { src: img4, label: "Couples " },
    { src: img3, label: "Luxury" },
    
    
  ];
  return (
    <>
    
    <div className='text-center text-3xl pt-20'>
    <h1 className='font-semibold'>CHOOSE YOUR STYLE</h1>

 </div>
    <div className="flex gap-6 items-center justify-center mx-auto py-5">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group  rounded-md overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.label}
              className="w-80  object-cover rounded-md transition-transform duration-700 group-hover:scale-100"
            />

            {/* Overlay Text */}
            <div className="absolute bottom-20 left-0 w-full text-2xl  bg-opacity-60 [text-shadow:_2px_2px_0px_black] text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {img.label}
            </div>
          </div>
        ))}
      </div>




         
   
    
    
    
    
    </>
  )
}

export default YourStyle