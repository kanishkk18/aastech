import { useState, useEffect } from "react";
import { OrbitingCircles } from "./orbiting-circle";

export function OrbitingCirclesDemo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative hidden md:flex h-[100vh] md:h-[210vh] flex-col items-center justify-center bg-black">
      {/* Central Content */}
      <div className="absolute z-50 flex flex-col items-center gap-4 md:gap-6">
        <div className="h-24 w-24 p-1 md:h-32 md:w-32 md:p-2 border-2 md:border-4 flex justify-center items-center border-dashed rounded-full border-purple-500/30 backdrop-blur-lg">
          <img
            className="h-full w-full m-1 pt-4 rounded-full object-contain"
            src="https://res.cloudinary.com/dna3hwzre/image/upload/v1744478313/aas/ctesbeldgb2whk3laln8.png"
            alt="Central"
          />
        </div>
      </div>

      {/* Orbital Layers */}
      <OrbitingCircles
        className="size-[60px] md:size-[100px]"
        radius={isMobile ? 100 : 200}
        speed={1.8}
        delay={20}
      >
        <Icons.img1 />
        <Icons.img2 />
        <Icons.img3 />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[60px] md:size-[100px]"
        radius={isMobile ? 180 : 350}
        reverse
        speed={1.5}
        delay={15}
      >
        <Icons.img4 />
        <Icons.img5 />
        <Icons.img6 />
        <Icons.img7 />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[60px] md:size-[100px]"
        radius={isMobile ? 250 : 500}
        speed={1.2}
        delay={25}
      >
        <Icons.img8 />
        <Icons.img9 />
        <Icons.img10 />
        <Icons.img11 />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[60px] md:size-[100px]"
        radius={isMobile ? 320 : 650}
        reverse
        speed={0.8}
        delay={30}
      >
        <Icons.img12 />
        <Icons.img13 />
        <Icons.img14 />
        <Icons.img15 />
        <Icons.img16 />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  img1: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-purple-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/men/1.jpg"
      alt="img1"
    />
  ),
  img2: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-blue-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/women/2.jpg"
      alt="img2"
    />
  ),
  img3: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-green-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/men/3.jpg"
      alt="img3"
    />
  ),
  img4: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-yellow-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/women/4.jpg"
      alt="img4"
    />
  ),
  img5: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-pink-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/men/5.jpg"
      alt="img5"
    />
  ),
  img6: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-orange-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/women/6.jpg"
      alt="img6"
    />
  ),
  img7: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-red-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/men/7.jpg"
      alt="img7"
    />
  ),
  img8: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-indigo-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/women/8.jpg"
      alt="img8"
    />
  ),
  img9: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-teal-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/men/9.jpg"
      alt="img9"
    />
  ),
  img10: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-cyan-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/women/10.jpg"
      alt="img10"
    />
  ),
  img11: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-lime-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/men/11.jpg"
      alt="img11"
    />
  ),
  img12: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-amber-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/women/12.jpg"
      alt="img12"
    />
  ),
  img13: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-emerald-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/men/13.jpg"
      alt="img13"
    />
  ),
  img14: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-rose-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/women/14.jpg"
      alt="img14"
    />
  ),
  img15: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-violet-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/men/15.jpg"
      alt="img15"
    />
  ),
  img16: () => (
    <img
      className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-dashed border-fuchsia-500/30 p-1 object-cover"
      src="https://randomuser.me/api/portraits/women/16.jpg"
      alt="img16"
    />
  ),
};

