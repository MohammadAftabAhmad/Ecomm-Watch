import { useState } from "react";
import { MenWatches, WomenWatches, NewArrivals } from "../../../data/watchData";
import { useParams } from "react-router-dom";

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
}


  const Watch = watchArray.find((p) => p.id === Number(id));

  if (!Watch) {
    return (
      <p className="p-10 text-red-500">
        {gender?.toUpperCase()} Watch not found.
      </p>
    );
  }

  const WatchImages:string[] = Watch.thumbnails || [];
  const mainImage = selectedImage || Watch.img;

  return (
    <>
      <div className="flex gap-96">
        <div className="flex gap-8 p-6 m-20 px-10">
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
          <div className="flex-1 flex justify-center items-center">
            <img
              src={mainImage}
              alt={Watch.name}
              className="max-w-md w-[600px] h-[600px] object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="bg-slate-100">
          <h1>{}</h1>

        </div>
      </div>
    </>
  );
}

export default DetailsHero;
