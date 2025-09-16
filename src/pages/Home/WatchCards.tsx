import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { NewArrivals, MenWatches, WomenWatches } from "../../data/watchData";

function WatchCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ScrollRef = useRef<HTMLDivElement>(null);

  const [category, setcategory] = useState<"men" | "women">("men");

  const watchesToShow = category === "men" ? MenWatches : WomenWatches;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  const Scroll = (direction: "left" | "right") => {
    if (ScrollRef.current) {
      const { clientWidth } = ScrollRef.current;
      ScrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* New Arrivals */}
      <div className="text-center relative w-full">
        <h1 className="text-center font-bold text-4xl mt-10">New Arrivals</h1>

        <button
          onClick={() => scroll("left")}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10"
        >
          <ChevronRight size={24} />
        </button>
        

        <div
          ref={scrollRef}
          className="flex overflow-x-auto  gap-6 mt-5 mx-20 overflow-hidden mb-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {NewArrivals.map((w, id) => (
            <div className="flex-none" key={id}>
              <div className="bg-slate-100 rounded-lg">
                <img
                  className="h-96 w-80 hover:scale-105 duration-300"
                  src={w.img}
                  alt={w.name}
                />
              </div>
              <div className="m-2 text-left">
                <h2 className="text-gray-400">{w.name}</h2>
                <p>{w.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Sellers */}
      <div className="relative">
        <h1 className="text-center font-bold text-4xl mt-10">Best Sellers</h1>
        <div className="text-center flex items-center justify-center gap-10 mt-3">
          <button onClick={() => setcategory("men")}>MEN</button>
          <button onClick={() => setcategory("women")}>WOMEN</button>
        </div>

        <button
          onClick={() => Scroll("left")}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => Scroll("right")}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={ScrollRef}
          className="flex overflow-x-auto scroll-hidden gap-6 mt-5 mx-20 overflow-hidden mb-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {watchesToShow.map((w, id) => (
            <div className="flex-none" key={id}>
              <div className="bg-slate-100 rounded-lg">
                <img
                  className="h-full w-80 hover:scale-105 duration-300"
                  src={w.img}
                  alt={w.name}
                />
              </div>
              <div className="m-2 text-left">
                <h2 className="text-gray-400">{w.name}</h2>
                <p>{w.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}

export default WatchCards;
