import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HoriMovieCard from "./HoriMovieCard";

function MovieList({ generoID, index_ }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, []);
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(generoID).then((resp) => {
     // console.log("PELIS" + resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const elementRef = useRef();
  const sliderDer = (element) => {
    element.scrollLeft += 500;
  };
  const sliderIzq = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <div className="relative">
      <HiChevronLeft
        onClick={() => sliderIzq(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} `}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8
     scrollbar-none scroll-smooth pt-4 px-3 pb-4"
      >
        {movieList.map((item) => (
          <>
            {index_ % 3 == 0 ? (
              <HoriMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
      <HiChevronRight
        onClick={() => sliderDer(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
}

export default MovieList;
