import { useState } from "react";
import { MenWatches } from "../../../data/watchData";
import { useParams } from "react-router-dom";

function DetailsHero() {
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const MenWatch = MenWatches.find((p)=> p.id === Number(id));
   if (!MenWatch) {
     return <p className="p-10 text-red-500">MenWatch not found.</p>;
    }
   const MenWatchImages= MenWatch?.thumbnails ||[];
   const mainImage=selectedImage||MenWatch.img;





  return (
   <>
 
    <div className="flex gap-96">
      <div className="flex  gap-8 p-6 m-20 px-10">
        <div className="flex flex-1 gap-2 items-center">
          <div className="flex flex-col gap-2">
            {MenWatchImages.map((img,i)=>(
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i +1}`}
                className={`w-16 h-16 rounded object-cover cursor-pointer border-2 ${
                  img=== selectedImage ? 'border-black':'border-transparent'}`}
                  onClick={()=> setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Main Allshoe Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={mainImage}
            alt={MenWatch.name}
            className="max-w-md w-[600px] h-[600px] object-contain bg-slate-100 rounded-lg "
          />
        </div>

      </div>

    </div>

   </>
  )
}

export default DetailsHero