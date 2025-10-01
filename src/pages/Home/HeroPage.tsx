import img from "../../assets/images/background.png";
import watches from "../../assets/images/watches.png";

function HeroPage() {
  return (
    <>
      <div className="relative w-full h-screen top-0 overflow-hidden ">
        {/* Background image */}
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Background"
        />

        {/* Watches image at top right */}
        <img
          className="absolute top-1/2 right-10 -translate-y-1/2 z-10 w-[70%] object-contain opacity-100 "
          src={watches}
          alt="Watches"
        />
      </div>
    </>
  );
}

export default HeroPage;
