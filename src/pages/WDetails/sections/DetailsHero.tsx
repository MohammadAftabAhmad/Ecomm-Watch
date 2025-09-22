import { useState } from "react";
import { MenWatches, WomenWatches, NewArrivals, Trending, AllMenWatches } from "../../../data/watchData";
import { useParams } from "react-router-dom";
import { ShieldCheck, Truck, RotateCcw, HandCoins, Cog } from "lucide-react";


function DetailsHero() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // expecting /:gender/:id (men/1, women/2, new/3)
  const { gender, id } = useParams<{ gender: string; id: string }>();

  let watchArray: any[] = [];
if (gender === "women") {
  watchArray = WomenWatches;
} else if (gender === "men") {
  watchArray = MenWatches;
} else if (gender === "new") {
  watchArray = NewArrivals;
} else if (gender==="Trending"){
  watchArray= Trending;
} else if (gender=== "AllMenWatches"){
  watchArray= AllMenWatches;
}


  const Watch = watchArray.find((p) => p.id === Number(id));

  if (!Watch) {
    return (
      <p className="p-40 text-red-500">
        {gender?.toUpperCase()} Watch not found.
      </p>
    );
  }

  const WatchImages:string[] = Watch.thumbnails || [];
  const mainImage = selectedImage || Watch.img;


  return (
    <>
     
      <div className="flex   ">
        <div className="flex gap-8 p-6  px-20">
          <div className="flex flex-1 gap-2 items-center">
            <div className="flex flex-col gap-2">
              {WatchImages.map((img, i) => (
                <img
                  loading="lazy"
                  key={i}
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className={`w-16 h-16 rounded object-cover cursor-pointer border-2 ${
                    img === selectedImage ? "border-black" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="flex-1 flex justify-center px-10 items-center">
            <img
              src={mainImage}
              alt={Watch.name}
              className="max-w-md w-[600px] h-[600px] object-contain rounded-lg"
            />
          </div>

            {/* text on left */}
          <div className=" text-black items-center justify-center px-20 py-36">
          <h1 className="font-bold text-3xl">{Watch.name}</h1>
          <h1 className=" text-gray-500 pt-2">{Watch.type}</h1>
          <h1 className="text-gray-600 text-xl ">{Watch.tag}</h1>
          <h1 className="text-xl pt-2 ">{Watch.price}</h1>
          <h1 className="text-gray-500 text-sm">Inclusive of all taxes*</h1>
          <div className="flex gap-5 py-5">
            <button className="text-white text-xl bg-black hover:bg-gray-800 cursor-pointer border-2 rounded-md py-2 px-6">ADD TO CART</button>
            <button className="text-white text-xl bg-black hover:bg-gray-800 cursor-pointer border-2 rounded-md py-2 px-10">BUY NOW </button>
          </div>

          <div className="flex w-24 gap-10 pt-5 ">
          
             <div className="flex flex-col items-center text-center space-y-2 ">
        <ShieldCheck className="w-10 h-10 text-gray-800  hover:text-green-400 cursor-pointer" />
        <p className="text-sm font-medium text-gray-500">24 M Warranty</p>
      </div>
       <div className="flex flex-col items-center text-center space-y-2 max-w-[150px]">
        <Truck className="w-10 h-10 text-gray-800 hover:text-yellow-500 cursor-pointer" />
        <p className="text-sm font-medium text-gray-500">
          Free Shipping 
        </p>
      </div>
      <div className="flex flex-col items-center text-center space-y-2 ">
        <RotateCcw className="w-10 h-10 text-gray-800  hover:text-gray-600 cursor-pointer" />
        <p className="text-sm font-medium text-gray-500">Easy Return</p>
      </div>
      <div className="flex flex-col items-center text-center space-y-2 ">
        <HandCoins className="w-10 h-10 text-gray-800  hover:text-green-400 cursor-pointer" />
        <p className="text-sm font-medium text-gray-500">
          Pay on Delivery
        </p>
      </div>
      <div className="flex flex-col items-center text-center space-y-2 ">
        <Cog className="w-10 h-10 text-gray-800  hover:text-red-500 cursor-pointer" />
        <p className="text-sm font-medium text-gray-500">
           Across India
        </p>
      </div>
      </div>
          
        </div>
        

        </div>
        
        
      </div>
         
      
    </>
  );
}

export default DetailsHero;
