import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { NewArrivals, MenWatches, WomenWatches } from "../../data/watchData";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { setCategory as setCategoryAction } from "../../redux/cart/CategorySlice";

function WatchCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ScrollRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.category.value);

  const watchesToShow = category === "men" ? MenWatches : WomenWatches;

  // Scroll for New Arrivals
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  // Scroll for Best Sellers
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
      {/* ✅ New Arrivals Section */}
      <div className="text-center relative w-full">
        <h1 className="text-center font-bold text-4xl mt-10">New Arrivals</h1>

        {/* Scroll Buttons */}
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

        {/* New Arrivals Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 mt-5 mx-20 overflow-hidden mb-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {NewArrivals.map((w) => (
            <Link
              to={`/new/${w.id}`} // ✅ Separate route for New Arrivals
              key={w.id}
              className="min-w-80 max-w-[450px] block"
            >
              <div className="flex-none">
                <div className="bg-slate-100 rounded-lg">
                  <img
                    loading="lazy"
                    className="h-80 w-full hover:scale-105 duration-300"
                    src={w.img}
                    alt={w.name}
                  />
                </div>
                <div className="m-2 text-left">
                  <h2 className="text-gray-400">{w.name}</h2>
                  <p>{w.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ Best Sellers Section */}
      <div className="relative">
        <h1 className="text-center font-bold text-4xl mt-10">Best Sellers</h1>
        <div className="text-center flex items-center justify-center gap-10 mt-3">
          <button onClick={() => dispatch(setCategoryAction("men"))}>MEN</button>
          <button onClick={() => dispatch(setCategoryAction("women"))}>WOMEN</button>
        </div>

        {/* Scroll Buttons */}
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

        {/* Best Sellers Carousel */}
        <div
          ref={ScrollRef}
          className="flex overflow-x-auto gap-6 mt-5 mx-20 overflow-hidden mb-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {watchesToShow.map((w) => (
            <Link
              to={`/${category}/${w.id}`}
              key={w.id}
              className="min-w-80 max-w-[450px] block"
            >
              <div className="flex-none">
                <div className="bg-slate-100 rounded-lg">
                  <img
                    loading="lazy"
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default WatchCards;
