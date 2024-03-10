import disney from "../../src/assets/images/disney.png";
import marvel from "../../src/assets/images/marvel.png";
import nationalG from "../../src/assets/images/nationalG.png";
import pixar from "../../src/assets/images/pixar.png";
import starwar from "../../src/assets/images/starwar.png";

import disneyV from "../../src/assets/videos/disney.mp4";
import marvelV from "../../src/assets/videos/marvel.mp4";
import nationalV from "../../src/assets/videos/national-geographic.mp4";
import pixarV from "../../src/assets/videos/pixar.mp4";
import starwarV from "../../src/assets/videos/star-wars.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: nationalG,
      video: nationalV,
    },
    {
      id: 4,
      image: pixar,
      video: pixarV,
    },
    {
      id: 5,
      image: starwar,
      video: starwarV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl 
        shadow-gray-800
        "
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0  top-0 rounded-md 
        opacity-0 hover:opacity-50"
          />
          <img src={item.image} className="w-full z-[1] opacity-100" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
