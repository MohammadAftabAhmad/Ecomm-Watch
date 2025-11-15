import { Link } from "react-router-dom";
import { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import img1 from "../../assets/images/slick.jpg";
import img2 from "../../assets/images/boldw.jpg";
import img3 from "../../assets/images/luxuryw.jpg";
import img4 from "../../assets/images/couple.jpg";
import img5 from "../../assets/images/office.jpg";

function YourStyle() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const images = [
    { src: img1, title: "Slick", link: "/slick" },
    { src: img2, title: "Bold", link: "/bold" },
    { src: img4, title: "Couples", link: "/couples" },
    { src: img3, title: "Luxury", link: "/luxury" },
    { src: img5, title: "Office", link: "/luxury" },
  ];

  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth * 0.9;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-10 lg:px-20">
      <h1 className="text-center text-3xl font-semibold mb-10 tracking-wide">
        CHOOSE YOUR STYLE
      </h1>

      {/* LEFT BUTTON */}
      <button
        onClick={() => slide("left")}
        className="
          absolute left-4 sm:left-10 top-[55%] -translate-y-1/2 z-20
          w-12 h-12 rounded-full bg-white shadow-xl 
          flex items-center justify-center
          hover:scale-110 transition
        "
      >
        <HiChevronLeft size={26} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => slide("right")}
        className="
          absolute right-4 sm:right-10 top-[55%] -translate-y-1/2 z-20
          w-12 h-12 rounded-full bg-white shadow-xl 
          flex items-center justify-center
          hover:scale-110 transition
        "
      >
        <HiChevronRight size={26} />
      </button>

      {/* SCROLL ROW */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth scrollbar-hide px-2 "
      >
        {images.map((img, i) => (
          <Link
            key={i}
            to={img.link}
            className="
              flex-shrink-0 
              w-[260px] sm:w-[300px] lg:w-[330px]
              h-[420px] rounded-xl overflow-hidden shadow-lg relative
            "
          >
            {/* IMAGE */}
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* NEW OVERLAY (same style as previous section) */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/50 py-2 text-center">
              <p className="font-semibold text-2xl">{img.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default YourStyle;
