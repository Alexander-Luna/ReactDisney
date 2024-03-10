import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function Slider() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const elementRef = useRef();
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const sliderDer = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderIzq = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  const screenWidth = window.innerWidth;
  return (
    <div className="min-w-full justify-center">
      <HiChevronLeft
        className="hidden md:block text-white text-[30px]
       absolute mx-8 mt-[150px] cursor-pointer md:block"
        onClick={() => sliderIzq(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] 
      absolute mx-8 mt-[150px] cursor-pointer right-0 md:block"
        onClick={() => sliderDer(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="bg-gray-100 min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md
            hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
